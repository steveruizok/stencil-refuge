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
      "inline-icon material-icons": true,
      inactive: !this.result[prop]
    });
  };

  render() {
    let markerImage = this.focused
      ? "marker-focused.svg"
      : "marker-default.svg";

    return [
      <div class="left">
        <img class="icon marker" src={"assets/icons/" + markerImage} />
      </div>,
      <div class="center">
        <p class="result-name">{this.result.name}</p>
        <p class="result-address">{this.result.street}</p>
      </div>,
      <div class="right">
        <span class={this.getVisible("accessible")}>accessible</span>
        <span class={this.getVisible("unisex")}>wc</span>
        <span class={this.getVisible("changing_table")}>child_care</span>
      </div>
    ];
  }
}
