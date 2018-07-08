/*! Built with http://stenciljs.com */
const { h } = window.App;

class RefIcon {
    constructor() {
        this.icon = "close";
        this.classes = "icon";
    }
    render() {
        return (h("img", { class: this.classes, src: "assets/icons/" + this.icon + ".svg" }));
    }
    static get is() { return "ref-icon"; }
    static get properties() { return {
        "classes": {
            "type": String,
            "attr": "classes"
        },
        "icon": {
            "type": String,
            "attr": "icon"
        }
    }; }
    static get style() { return "ref-icon {\n}\n\n.icon {\n}\n\n.marker {\n  padding-top: 16px;\n}\n\n.padded {\n  margin-right: 12px;\n}\n\n.inactive {\n  opacity: 0.45;\n}\n\n.link {\n  cursor: pointer;\n}"; }
}

export { RefIcon };
