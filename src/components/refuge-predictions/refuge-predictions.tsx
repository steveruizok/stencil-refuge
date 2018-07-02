import { Component, Prop, State } from "@stencil/core";
import { Store } from "@stencil/redux";

@Component({
  tag: "refuge-predictions",
  styleUrl: "refuge-predictions.css"
})
export class RefugePredictions {
  @Prop({ context: "store" })
  store: Store;
  @State() predictions: Array<any> = [];

  componentDidLoad() {
    this.store.mapStateToProps(this, state => {
      const {
        app: { predictions }
      } = state;

      return { predictions };
    });
  }

  render() {
    return this.predictions;
  }
}
