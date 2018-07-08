import { Component, Prop } from "@stencil/core";

@Component({
  tag: "refuge-prediction",
  styleUrl: "refuge-prediction.css"
})
export class RefugePrediction {
  @Prop() item: any;

  render() {
    return (
      <div class="prediction-container">
        <ref-icon classes="icon marker" icon="marker-default-a" />
        <span class="prediction-content">
          <slot />
        </span>
      </div>
    );
  }
}
