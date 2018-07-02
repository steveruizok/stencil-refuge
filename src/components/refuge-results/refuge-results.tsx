import { Component, Prop, State, Element } from "@stencil/core";
import { Store, Action } from "@stencil/redux";
import { setResultsFilter, setFocusedResult } from "../actions/app";
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
  @Prop() results: any = [];
  @State() entries: Array<any> = [];
  @State() focused: any;
  setFocusedResult: Action;

  @Element() elm: HTMLElement;

  componentWillLoad() {
    this.store.mapDispatchToProps(this, {
      setResultsFilter,
      setFocusedResult
    });

    this.store.mapStateToProps(this, state => {
      const {
        app: { filter, focused }
      } = state;

      return { filter, focused };
    });
  }

  componentDidUpdate() {
    if (this.focused) {
      let focusedIndex = this.results.indexOf(this.focused);
      let focusedEntry = this.entries[focusedIndex];

      this.elm.scrollTop = focusedEntry.elm.offsetTop;
    }
  }

  getEntries = () => {
    let results = this.results.filter(res => {
      let ok = true;

      for (let key in this.filter) {
        if (this.filter[key] === true && ok) {
          ok = res[key] === this.filter[key];
        }
      }

      return ok;
    });

    return results.map(r => {
      let fcs = r === this.focused;
      console.log(fcs);
      return (
        <refuge-result
          result={r}
          focused={fcs}
          onClick={() => {
            this.setFocusedResult(r);
          }}
        />
      );
    });
  };

  render() {
    this.entries = this.getEntries();

    let resultsClass = classNames({
      "refuge-results": true,
      hidden: this.entries.length <= 0
    });

    return (
      <div class={resultsClass}>
        <ul class="entries">{this.entries}</ul>
      </div>
    );
  }
}
