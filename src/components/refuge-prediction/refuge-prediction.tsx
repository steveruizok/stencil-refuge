import { Component, Prop } from "@stencil/core";

@Component({
  tag: "refuge-prediction",
  styleUrl: "refuge-prediction.css"
})
export class RefugePrediction {
  @Prop() item: any;

  render() {
    return (
      <li class="prediction-container">
        <img class="icon marker" src="assets/icons/marker-default.svg" />
        <span class="prediction-content">
          <slot />
        </span>
      </li>
    );
  }
}
