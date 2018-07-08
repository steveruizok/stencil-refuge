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

  results: any;

  componentWillLoad() {
    this.store.mapDispatchToProps(this, {
      setResultsFilter,
      setResults,
      setMarkers
    });

    this.store.mapStateToProps(this, state => {
      const {
        app: { filter, markers, results }
      } = state;

      return { filter, markers, results };
    });
  }

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

  getActive = (bool: boolean) => {
    return classNames({
      icon: true,
      padded: true,
      inactive: !bool,
      link: true
    });
  };

  render() {
    let classes = classNames({
      "refuge-filter": true,
      hidden: this.markers.length <= 0
    });

    let results = "";

    if (this.markers.length > 0) {
      results = `(${this.markers.length})`;
    }

    return (
      <div class={classes}>
        <div class="left">
          <span class="filter label">Restrooms {results}</span>
        </div>
        <div class="right">
          <ref-icon
            classes={this.getActive(this.filter.accessible)}
            icon="accessible"
            onClick={e => {
              e.preventDefault();
              this.setResultsFilter({ accessible: !this.filter.accessible });
            }}
          />
          <ref-icon
            classes={this.getActive(this.filter.unisex)}
            icon="unisex"
            onClick={e => {
              e.preventDefault();
              this.setResultsFilter({ unisex: !this.filter.unisex });
            }}
          />
          <ref-icon
            classes={this.getActive(this.filter.changing_table)}
            icon="changing_table"
            onClick={e => {
              e.preventDefault();
              this.setResultsFilter({
                changing_table: !this.filter.changing_table
              });
            }}
          />
        </div>
      </div>
    );
  }
}
