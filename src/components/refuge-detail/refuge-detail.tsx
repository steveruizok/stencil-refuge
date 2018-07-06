import { Component, Prop, State, Element } from "@stencil/core";
import classNames from "classnames";
import { Store, Action } from "@stencil/redux";
import { setSelectedResult } from "../actions/app";

@Component({
  tag: "refuge-detail",
  styleUrl: "refuge-detail.css"
})
export class RefugeDetail {
  @Prop({ context: "store" })
  store: Store;
  @State() selected;
  @Element() elm: HTMLElement;

  setSelectedResult: Action;

  touchstart: number;

  componentDidLoad() {
    this.store.mapStateToProps(this, state => {
      const {
        app: { selected }
      } = state;

      return { selected };
    });

    this.store.mapDispatchToProps(this, {
      setSelectedResult
    });
  }

  componentDidUpdate() {}

  getVisible = (prop: string) => {
    return classNames({
      icon: true,
      padded: true,
      inactive: !this.selected[prop]
    });
  };

  getInfo = (prop: string, icon: string) => {
    if (!this.selected[prop]) {
      return;
    }

    if (this.selected[prop].length <= 0) {
      return;
    }

    return (
      <div class="detail-row">
        <div class="detail-left">
          <ref-icon icon={icon} />
        </div>
        <div class="detail-comment">
          <p>{this.selected[prop]}</p>
        </div>
      </div>
    );
  };

  render() {
    let classes = classNames({
      "detail-container": true,
      "detail-open": this.selected
    });

    if (!this.selected) {
      return <div class={classes} />;
    }

    return (
      <div
        class={classes}
        onClick={() => {
          this.setSelectedResult(undefined);
        }}
      >
        <div class="handle" />
        <div class="detail-row">
          <div class="detail-left">
            <ref-icon icon="marker-focused" />
          </div>
          <div class="detail-center">
            <p class="detail-name">{this.selected.name}</p>
            <p class="detail-address">{this.selected.street}</p>
          </div>
          <div class="right">
            <ref-icon
              classes={this.getVisible("accessible")}
              icon="accessible"
            />
            <ref-icon classes={this.getVisible("unisex")} icon="unisex" />
            <ref-icon
              classes={this.getVisible("accessible")}
              icon="changing_table"
            />
          </div>
        </div>
        {this.getInfo("directions", "info")}
        {this.getInfo("comment", "comment")}
      </div>
    );
  }
}
