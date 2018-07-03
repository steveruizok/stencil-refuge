/*! Built with http://stenciljs.com */
const { h } = window.App;

class AppDetail {
    render() {
        return (h("div", null,
            h("p", null, "Hello AppDetail!")));
    }
    static get is() { return "app-detail"; }
    static get style() { return "app-detail {\n    /* Component styles go here */\n}"; }
}

export { AppDetail };
