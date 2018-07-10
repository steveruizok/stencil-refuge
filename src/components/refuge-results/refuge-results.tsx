import { Component, Prop, State, Element } from "@stencil/core";
import { Store, Action } from "@stencil/redux";
import {
  setResultsFilter,
  setFocusedResult,
  setSelectedResult
} from "../actions/app";
import classNames from "classnames";

import { Filter } from "../../types";

@Component({
  tag: "refuge-results",
  styleUrl: "refuge-results.css"
})
export class RefugeResults {
  @Prop({ context: "store" })
  store: Store;
  @State() filter: Filter;
  setResultsFilter: Action;
  @State() entries: Array<any> = [];
  @State() results: Array<any> = [];
  @State() focused: any;

  setFocusedResult: Action;
  setSelectedResult: Action;

  @Element() elem: HTMLElement;

  componentWillLoad() {
    this.store.mapDispatchToProps(this, {
      setResultsFilter,
      setFocusedResult,
      setSelectedResult
    });

    this.store.mapStateToProps(this, state => {
      const {
        app: { filter, focused, results }
      } = state;

      return { filter, focused, results };
    });
  }

  componentDidUpdate() {
    if (!this.focused) {
      return;
    }

    let focusedIndex = this.results.indexOf(this.focused);
    let focusedEntry = this.entries[focusedIndex];

    if (!focusedEntry) {
      return;
    }

    document.getElementById("results-scroll").scrollTop =
      focusedEntry.elm.offsetTop;
  }

  getEntries = () => {
    let results = this.results.filter(result => {
      let passed_filters = true;

      for (let key in this.filter) {
        if (this.filter[key] === true && passed_filters) {
          passed_filters = result[key] === this.filter[key];
        }
      }

      return passed_filters;
    });

    return results.map(r => {
      let fcs = r === this.focused;
      return (
        <refuge-result
          result={r}
          focused={fcs}
          onClick={() => {
            if (this.focused === r) {
              this.setSelectedResult(r);
              return;
            }

            this.setFocusedResult(r);
          }}
        />
      );
    });
  };

  render() {
    this.entries = this.getEntries();

    let resultsClass = classNames({
      "refuge-results": true
    });

    return [
      <refuge-filter />,
      <div id="results-scroll" class={resultsClass}>
        {this.entries}
      </div>
    ];
  }
}
