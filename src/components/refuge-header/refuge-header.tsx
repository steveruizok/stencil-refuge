import { Component, Prop, State } from "@stencil/core";
import { Store, Action } from "@stencil/redux";
import {
  setPredictions,
  setResults,
  setMarkers,
  setLoading,
  resetAll
} from "../actions/app";
import classnames from "classnames";

@Component({
  tag: "refuge-header",
  styleUrl: "refuge-header.css"
})
export class RefugeHeader {
  @Prop({ context: "store" })
  store: Store;
  @Prop() searchBar: boolean = true;
  @Prop() handleSearch: Function;
  @State() predictions: Array<any> = [];
  @State() markers: any;
  @State() loading: any;
  @Prop() autocomplete: any;

  setPredictions: Action;
  setResults: Action;
  setMarkers: Action;
  setLoading: Action;
  resetAll: Action;

  query: string = "";
  service;
  input: HTMLInputElement;
  predictionsContainer;

  componentWillLoad() {}

  componentDidLoad() {
    this.store.mapDispatchToProps(this, {
      setPredictions,
      setResults,
      setMarkers,
      setLoading,
      resetAll
    });

    this.store.mapStateToProps(this, state => {
      const {
        app: { service, map, predictions, markers, loading }
      } = state;

      return { service, map, predictions, markers, loading };
    });
  }

  clearPredictions = () => {
    this.setPredictions([]);
  };

  getPredictions = event => {
    let value = event.target.value;
    if (value === undefined || value.length === 0) {
      this.clearPredictions();
      return;
    }

    this.autocomplete.getPlacePredictions(
      {
        input: value
      },

      predictions => {
        if (predictions === null || predictions.length === 0) {
          this.clearPredictions();
          return;
        }

        let newPredictions = predictions.map(p => {
          return (
            <refuge-prediction
              onClick={() => {
                this.searchByPrediction(p);
              }}
            >
              {p.description}
            </refuge-prediction>
          );
        });

        this.setPredictions(newPredictions);
      }
    );
  };

  // handle search

  searchByPrediction = prediction => {
    this.query = prediction.structured_formatting.main_text;
    this.input.value = this.query;
    this.handleSearch(prediction);
    this.clearPredictions();
  };

  searchByLocation = () => {
    this.query = "My Location";
    this.input.value = this.query;
    this.handleSearch();
    this.clearPredictions();
  };

  handleRightClick = () => {
    if (this.predictions.length > 0) {
      this.input.value = this.query;
      this.clearPredictions();
    } else if (this.input.value.length > 0) {
      this.input.value = null;
      this.resetAll();
    } else {
      this.searchByLocation();
    }
  };

  // Rendering Methods

  render() {
    let containerClasses, rightIcon, leftIcon, rightIconClasses;

    if (this.loading) {
      leftIcon = <ref-spinner class="header-icon left-icon small" />;
    } else {
      leftIcon = (
        <img class="header-icon left-icon" src={"assets/icons/search.svg"} />
      );
    }

    if ((this.input && this.input.value.length > 0) || this.loading) {
      rightIcon = "close";
    } else {
      rightIcon = "my_location";
    }

    rightIconClasses = classnames({
      "header-icon": true,
      "right-icon": true,
      "material-icons": true,
      location: rightIcon == "my_location"
    });

    containerClasses = classnames({
      "search-container": true,
      "bottom-border": this.predictions.length === 0
    });

    return (
      <div class={containerClasses}>
        <input
          id="search-input"
          class="search-input"
          placeholder="Search..."
          ref={el => {
            this.input = el as HTMLInputElement;
          }}
          // onBlur={() => {
          //   setTimeout(this.clearPredictions, 150);
          // }}
          onInput={this.getPredictions}
          disabled={this.loading}
          onFocus={event => {
            this.input.select();
            this.getPredictions(event);
          }}
        />
        <div class="header-icon left-icon">{leftIcon}</div>

        <span class={rightIconClasses} onClick={this.handleRightClick}>
          {rightIcon}
        </span>
      </div>
    );
  }
}
