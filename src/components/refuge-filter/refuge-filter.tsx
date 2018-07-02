import { Component, Prop, State } from "@stencil/core";
import { Store, Action } from "@stencil/redux";
import { setResultsFilter, setResults, setMarkers } from "../actions/app";
import classNames from "classnames";

import { Filter } from "../../types";

@Component({
  tag: "refuge-filter",
  styleUrl: "refuge-filter.css"
})
export class RefugeFilter {
  @Prop({ context: "store" })
  store: Store;
  @State() markers: any;
  @State() filter: Filter;

  setResultsFilter: Action;
  setResults: Action;
  setMarkers: Action;

  componentWillLoad() {
    this.store.mapDispatchToProps(this, {
      setResultsFilter,
      setResults,
      setMarkers
    });

    this.store.mapStateToProps(this, state => {
      const {
        app: { filter, markers }
      } = state;

      return { filter, markers };
    });
  }

  getActive = (bool: boolean) => {
    return classNames({
      "inline-icon material-icons": true,
      "filter-icon": true,
      inactive: !bool
    });
  };

  clearResults = () => {
    this.clearMarkers();
    this.setResults([]);
  };

  clearMarkers = () => {
    this.markers.forEach(function(marker) {
      marker.setMap(null);
    });
    this.setMarkers([]);
  };

  render() {
    let classes = classNames({
      "refuge-filter": true,
      hidden: this.markers.length <= 0
    });

    return (
      <div class={classes}>
        <div class="left">
          <h5 class="filter-label">Filter:</h5>
          <span
            class={this.getActive(this.filter.accessible)}
            onClick={() => {
              this.setResultsFilter({ accessible: !this.filter.accessible });
            }}
          >
            accessible
          </span>
          <span
            class={this.getActive(this.filter.unisex)}
            onClick={() => {
              this.setResultsFilter({ unisex: !this.filter.unisex });
            }}
          >
            wc
          </span>
          <span
            class={this.getActive(this.filter.changing_table)}
            onClick={() => {
              this.setResultsFilter({
                changing_table: !this.filter.changing_table
              });
            }}
          >
            child_care
          </span>
        </div>
        <div class="right">
          <h5 class="clear-link" onClick={this.clearResults}>
            Clear
          </h5>
        </div>
      </div>
    );
  }
}
