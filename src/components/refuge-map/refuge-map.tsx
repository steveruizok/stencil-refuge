import { Component } from "@stencil/core";

@Component({
  tag: "refuge-map",
  styleUrl: "refuge-map.css"
})
export class RefugeMap {
  render() {
    return (
      <div id="refuge-map">
        <slot />
      </div>
    );
  }
}
