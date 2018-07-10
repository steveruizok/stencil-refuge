import { Component, Prop, State, Element } from "@stencil/core";
import { Store, Action } from "@stencil/redux";
import { configureStore } from "../store";
import classnames from "classnames";
import {
  setResults,
  setMarkers,
  setUserLocation,
  setFocusedResult,
  setSelectedResult,
  setLoading
} from "../actions/app";

import { Filter } from "../../types";

declare var google: any;

@Component({
  tag: "app-root",
  styleUrl: "app-root.css"
})
export class AppRoot {
  @Element() element: HTMLElement;
  @Prop({ context: "store" })
  store: Store;

  @State() map: any;
  @State() service: any;
  @State() filter: Filter;
  @State() loading: boolean = true;
  @State() autocomplete: any;

  setResults: Action;
  @State() results: any;

  setMarkers: Action;
  @State() markers: any;

  setFocusedResult: Action;
  @State() focused: any;

  setSelectedResult: Action;
  @State() selected: any;

  setUserLocation: Action;
  @State() location: any;

  setLoading: Action;

  userLocationMarker: any;

  script: HTMLScriptElement;

  loadScript() {
    return new Promise(resolve => {
      this.script = document.createElement("script");
      this.script.src =
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyBn5_4mxpPCKRVuLL1TlL_P62lNXInDXHA&libraries=places";
      document.body.appendChild(this.script);
      resolve();
    });
  }

  componentWillLoad() {
    this.store.setStore(configureStore(undefined));
    this.store.mapStateToProps(this, state => {
      const {
        app: { filter, results, markers, location, focused, selected, loading }
      } = state;

      return { filter, results, markers, location, focused, selected, loading };
    });

    this.store.mapDispatchToProps(this, {
      setResults,
      setMarkers,
      setUserLocation,
      setFocusedResult,
      setSelectedResult,
      setLoading
    });
  }

  async componentDidLoad() {
    await this.loadScript();

    this.script.addEventListener("load", async () => {
      this.map = new google.maps.Map(document.getElementById("refuge-map"), {
        center: { lat: -33.8688, lng: 151.2195 },
        zoom: 13,
        disableDefaultUI: true
      });

      this.service = new google.maps.places.PlacesService(this.map);

      this.autocomplete = new google.maps.places.AutocompleteService();

      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(this.setUserPosition, () => {
          this.setLoading(false);
        });
        navigator.geolocation.watchPosition(this.updateUserPosition);
      }
    });
  }

  // Update the user location on the map
  setUserPosition = position => {
    this.setUserLocation(
      new google.maps.LatLng(
        position.coords.latitude,
        position.coords.longitude
      )
    );

    if (this.userLocationMarker === null) {
      this.setLoading(false);
      return;
    }

    this.userLocationMarker = new google.maps.Marker({
      position: this.location,
      map: this.map,
      icon: "/assets/icons/marker-location.png"
    });

    this.map.panTo(this.location);
    this.setLoading(false);
    this.updateUserPosition();

    // testing
    // this.searchByUserLocation();
  };

  updateUserPosition = () => {
    // this.userLocationMarker.icon.rotation = position.heading;
    this.userLocationMarker.position = this.location;
  };

  // Make a search using the user location
  searchByUserLocation = () => {
    if (!this.location) {
      return;
    }

    this.getRefugeRestroomResults(this.location);

    let input = document.getElementById("search-input") as HTMLInputElement;
    input.value = "My Location";
  };

  // Get geography from an autocomplete prediction and search
  searchByPrediction = prediction => {
    if (prediction === undefined) {
      this.searchByUserLocation();
      return;
    }

    this.service.getDetails(
      {
        placeId: prediction.place_id
      },
      details => {
        this.getRefugeRestroomResults(details.geometry.location);
      }
    );
  };

  // Get results from refuge API
  getRefugeRestroomResults = (latlng: any) => {
    this.clearMarkers();
    this.setResults([]);

    this.setLoading(true);

    // this.map.panTo(latlng);

    let url =
      "https://cors-anywhere.herokuapp.com/" +
      "https://www.refugerestrooms.org/api/v1/restrooms/by_location.json?" +
      `lat=${latlng.lat()}&lng=${latlng.lng()}`;

    fetch(url, {
      method: "GET"
    }).then(res => {
      if (!res.ok) {
        throw res.statusText;
      }

      res.json().then(results => {
        this.setResults(results);
        this.getMarkers();
        this.setBounds();
      });
    });
  };

  // Get a new set of markers from the refuge results
  getMarkers = () => {
    let markers;

    markers = this.results.map(result => {
      let marker = new google.maps.Marker({
        map: this.map,
        position: new google.maps.LatLng(result.latitude, result.longitude),
        title: result.name
        // icon: "assets/icons/marker-default.svg"
      });

      marker.addListener("click", () => {
        if (this.selected === result) {
          this.setSelectedResult(undefined);
          return;
        } else if (this.selected) {
          this.setFocusedResult(result);
          this.setSelectedResult(result);
          return;
        } else if (this.focused === result) {
          this.setSelectedResult(result);
          return;
        }

        this.setFocusedResult(result);
      });

      result.marker = marker;

      return marker;
    });

    this.setMarkers(markers);
  };

  // Set map bounds to current markers
  setBounds = () => {
    let bounds = new google.maps.LatLngBounds();
    this.markers.forEach(marker => {
      bounds.extend(marker.getPosition());
    });

    this.map.fitBounds(bounds);
    window.setTimeout(() => {
      this.setLoading(false);
    }, 650);
  };

  // Update which markers are visible
  updateMarkers = () => {
    this.results.forEach(res => {
      let ok = true;

      for (let key in this.filter) {
        if (this.filter[key] === true && ok) {
          ok = res[key] === this.filter[key];
        }
      }

      let image = "marker-default-a";

      if (res === this.focused) {
        image = "marker-focused-a";
        // this.map.panTo(res.marker.getPosition());
      }

      res.marker.setIcon(`/assets/icons/${image}.svg`);
      res.marker.setVisible(ok);
    });
  };

  clearMarkers = () => {
    this.markers.forEach(function(marker) {
      marker.setMap(null);
    });
    this.setFocusedResult(undefined);
    this.setLoading(false);
  };

  render() {
    this.updateMarkers();

    // wrapper

    let wrapper_classes = classnames({
      "refuge-wrapper": true,
      "has-results": this.results.length <= 0
    });
    // results

    let results_classes = classnames({
      "results-hidden": this.results.length <= 0
    });

    // overlay

    let overlay_classes = classnames({
      "refuge-overlay": true,
      "overlay-hidden": this.results.length > 0
    });

    let button_content: any;

    if (this.loading) {
      button_content = <ref-spinner class="button-spinner" />;
    } else {
      button_content = "find a nearby restroom";
    }

    return (
      <div class={wrapper_classes}>
        <refuge-header
          handleSearch={this.searchByPrediction}
          autocomplete={this.autocomplete}
        />
        <refuge-map id="refuge-map" />
        <refuge-results class={results_classes} results={this.results} />
        <refuge-predictions />
        <refuge-detail />
        <div class={overlay_classes}>
          <button
            class="refuge-button"
            disabled={this.loading}
            onClick={this.searchByUserLocation}
          >
            {button_content}
          </button>
        </div>
      </div>
    );
  }
}
