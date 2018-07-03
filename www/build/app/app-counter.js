/*! Built with http://stenciljs.com */
const { h } = window.App;

class AppCounter {
    render() {
        return (h("div", null,
            h("button", { onClick: () => {
                    this.changeCount(-10);
                } }, "-10"),
            h("button", { onClick: () => {
                    this.changeCount(-1);
                } }, "-1"),
            h("span", { class: "count" }, this.count),
            h("button", { onClick: () => {
                    this.changeCount(1);
                } }, "+1"),
            h("button", { onClick: () => {
                    this.changeCount(10);
                } }, "+10")));
    }
    static get is() { return "app-counter"; }
    static get properties() { return {
        "changeCount": {
            "type": "Any",
            "attr": "change-count"
        },
        "count": {
            "type": Number,
            "attr": "count"
        }
    }; }
    static get style() { return "app-counter {\n    /* Component styles go here */\n}"; }
}

export { AppCounter };
