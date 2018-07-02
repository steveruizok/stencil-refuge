import { Component, Prop } from "@stencil/core";

@Component({
  tag: "refuge-prediction",
  styleUrl: "refuge-prediction.css"
})
export class RefugePrediction {
  @Prop() item: any;

  render() {
    return (
      <li class="refuge-prediction">
        <slot />
      </li>
    );
  }
}
