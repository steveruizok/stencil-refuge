import { Component, Prop, State, Element } from "@stencil/core";
import { Store } from "@stencil/redux";

@Component({
  tag: "refuge-predictions",
  styleUrl: "refuge-predictions.css"
})
export class RefugePredictions {
  @Prop({ context: "store" })
  store: Store;
  @State() predictions: Array<any> = [];
  @Element() elem: HTMLElement;

  componentDidLoad() {
    this.store.mapStateToProps(this, state => {
      const {
        app: { predictions }
      } = state;

      return { predictions };
    });
  }

  render() {
    this.elem.classList.toggle("open", this.predictions.length > 0);

    return this.predictions;
  }
}
