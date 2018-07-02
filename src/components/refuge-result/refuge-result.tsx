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
    let resultClass = classNames({
      "refuge-result": true,
      focused: this.focused
    });

    return (
      <li class={resultClass}>
        <h2>{this.result.name}</h2>
        <p>{this.result.street}</p>
        <p>
          <span class={this.getVisible("accessible")}>accessible</span>
          <span class={this.getVisible("unisex")}>wc</span>
          <span class={this.getVisible("changing_table")}>child_care</span>
        </p>
      </li>
    );
  }
}
