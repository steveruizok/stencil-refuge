import { Component, Prop } from "@stencil/core";

@Component({
  tag: "ref-icon",
  styleUrl: "ref-icon.css"
})
export class RefIcon {
  @Prop() icon: string = "close";
  @Prop() classes: string = "icon";

  render() {
    return (
      <img class={this.classes} src={"assets/icons/" + this.icon + ".svg"} />
    );
  }
}
