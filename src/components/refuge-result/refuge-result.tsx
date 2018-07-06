import { Component, Prop } from "@stencil/core";
import classNames from "classnames";

@Component({
  tag: "refuge-result",
  styleUrl: "refuge-result.css"
})
export class RefugeResult {
  @Prop() focused: boolean;
  @Prop() result: any;

  getVisible = (prop: string) => {
    return classNames({
      icon: true,
      padded: true,
      inactive: !this.result[prop]
    });
  };

  render() {
    let markerIcon = this.focused ? "marker-focused" : "marker-default";

    return [
      <div class="result-left">
        <ref-icon icon={markerIcon} />
      </div>,
      <div class="center">
        <p class="result-name">{this.result.name}</p>
        <p class="result-address">{this.result.street}</p>
      </div>,
      <div class="right">
        <ref-icon classes={this.getVisible("accessible")} icon="accessible" />
        <ref-icon classes={this.getVisible("unisex")} icon="unisex" />
        <ref-icon
          classes={this.getVisible("accessible")}
          icon="changing_table"
        />
      </div>
    ];
  }
}
