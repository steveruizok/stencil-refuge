import { Component, Prop, State } from "@stencil/core";
import { Store, Action } from "@stencil/redux";
import { setPredictions } from "../actions/app";
import classnames from "classnames";

@Component({
  tag: "refuge-header",
  styleUrl: "refuge-header.css"
})
export class RefugeHeader {
  @Prop({ context: "store" })
  store: Store;
  @Prop() searchBar: boolean = true;
  @Prop() backLink: boolean = false;
  @Prop() handleSearch: Function;
  @State() predictions: Array<any>;

  setPredictions: Action;

  hasText;
  input;
  service;
  autocomplete;
  predictionsContainer;

  componentWillLoad() {}

  componentDidLoad() {
    this.store.mapDispatchToProps(this, {
      setPredictions
    });

    this.store.mapStateToProps(this, state => {
      const {
        app: { service, map, predictions }
      } = state;

      return { service, map, predictions };
    });

    this.autocomplete = new google.maps.places.AutocompleteService();
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

    this.hasText = true;

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
    this.input.value = prediction.structured_formatting.main_text;
    this.handleSearch(prediction);
    this.clearPredictions();
  };

  searchByLocation = () => {
    this.input.value = "My location";
    this.handleSearch();
    this.clearPredictions();
  };

  handleRightClick = () => {
    if (this.input.value.length > 0) {
      this.input.value = null;
      this.clearPredictions();
    } else {
      this.searchByLocation();
    }
  };

  // Rendering Methods

  render() {
    let containerClasses, rightIcon, rightIconClasses;

    if (this.input && this.input.value.length > 0) {
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
      "bottom-border": this.hasText
    });

    return (
      <div class={containerClasses}>
        <input
          class="search-input"
          placeholder="Search..."
          ref={el => {
            this.input = el;
          }}
          // onBlur={() => {
          //   setTimeout(this.clearPredictions, 150);
          // }}
          onInput={this.getPredictions}
          onFocus={this.getPredictions}
        />
        <span class="header-icon left-icon material-icons">search</span>
        <span class={rightIconClasses} onClick={this.handleRightClick}>
          {rightIcon}
        </span>
      </div>
    );
  }
}
