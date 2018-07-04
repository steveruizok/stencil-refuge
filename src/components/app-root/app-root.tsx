import { Component, Prop, State } from "@stencil/core";
import { Store, Action } from "@stencil/redux";
import { configureStore } from "../store";
import {
  setResults,
  setMarkers,
  setUserLocation,
  setFocusedResult,
  setSelectedResult,
  setLoading
} from "../actions/app";
// import classNames from "classnames";

import { Filter } from "../../types";

@Component({
  tag: "app-root",
  styleUrl: "app-root.css"
})
export class AppRoot {
  @Prop({ context: "store" })
  store: Store;

  @State() map: any;
  @State() service: any;
  @State() filter: Filter;
  @State() loading: boolean = true;

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

  componentWillLoad() {
    this.store.setStore(configureStore(undefined));
    this.store.mapStateToProps(this, state => {
      const {
        app: { filter, results, markers, location, focused, selected }
      } = state;

      return { filter, results, markers, location, focused, selected };
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

  componentDidLoad() {
    this.map = new google.maps.Map(document.getElementById("refuge-map"), {
      center: { lat: -33.8688, lng: 151.2195 },
      zoom: 13,
      disableDefaultUI: true
    });

    this.service = new google.maps.places.PlacesService(this.map);

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(this.setUserPosition, () => {
        this.setLoading(false);
      });
      // navigator.geolocation.watchPosition(this.updateUserPosition);
    }
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
      icon: {
        path:
          google.maps.SymbolPath[
            position.heading ? "BACKWARD_CLOSED_ARROW" : "CIRCLE"
          ],
        scale: 3
      }
    });

    this.userLocationMarker.icon.rotation = position.heading;
    this.userLocationMarker.position = this.location;
    this.map.panTo(this.location);
    this.setLoading(false);

    // testing
    // this.searchByUserLocation();
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
      let marker = new window["Marker"]({
        map: this.map,
        position: new google.maps.LatLng(result.latitude, result.longitude),
        title: result.name,
        // animation: google.maps.Animation.DROP
        icon: {
          path: window["MAP_PIN"],
          fillColor: "#00CCBB",
          fillOpacity: 1,
          strokeColor: "",
          strokeWeight: 0
        }
      });

      marker.addListener("click", () => {
        this.setFocusedResult(result);
      });

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
    this.setLoading(false);
  };

  // Update which markers are visible
  updateMarkers = () => {
    this.results.forEach((res, i) => {
      let ok = true;

      for (let key in this.filter) {
        if (this.filter[key] === true && ok) {
          ok = res[key] === this.filter[key];
        }
      }

      let color = "#0072d9";

      if (res === this.focused) {
        color = "#e93f3b";
      }

      this.markers[i].setIcon({
        path: window["MAP_PIN"],
        fillColor: color,
        fillOpacity: 1,
        strokeColor: "#FFFFFF",
        strokeWeight: 2
      });
      this.markers[i].setVisible(ok);
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

    return [
      <refuge-header handleSearch={this.searchByPrediction} />,

      <refuge-map id="refuge-map" />,

      <refuge-filter />,

      <refuge-results results={this.results} />,

      <refuge-predictions />

      // <div class={overlayClasses}>
      //   <button class={buttonClasses} onClick={this.searchByUserLocation}>
      //     find a restroom near you
      //     <span class="inline-icon material-icons">my_location</span>
      //   </button>
      //   <p class="copyright">
      //     <a class="shy-link" href="http://twitter.com/steveruizok">
      //       @steveruizok
      //     </a>{" "}
      //     2018
      //   </p>
      // </div>
    ];
  }
}
