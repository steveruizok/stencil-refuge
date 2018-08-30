/*! Built with http://stenciljs.com */
const { h } = window.App;

import { m as setPredictions, f as setResults, g as setMarkers, k as setLoading, n as resetAll, e as classnames } from './chunk-47a7f7dc.js';

class RefugeHeader {
    constructor() {
        this.searchBar = true;
        this.predictions = [];
        this.query = "";
        this.clearPredictions = () => {
            this.setPredictions([]);
        };
        this.getPredictions = event => {
            let value = event.target.value;
            if (value === undefined || value.length === 0) {
                this.clearPredictions();
                return;
            }
            this.autocomplete.getPlacePredictions({
                input: value
            }, predictions => {
                if (predictions === null || predictions.length === 0) {
                    this.clearPredictions();
                    return;
                }
                let newPredictions = predictions.map(p => {
                    return (h("refuge-prediction", { onClick: () => {
                            this.searchByPrediction(p);
                        } }, p.description));
                });
                this.setPredictions(newPredictions);
            });
        };
        // handle search
        this.searchByPrediction = prediction => {
            this.query = prediction.structured_formatting.main_text;
            this.input.value = this.query;
            this.handleSearch(prediction);
            this.clearPredictions();
        };
        this.searchByLocation = () => {
            this.query = "My Location";
            this.input.value = this.query;
            this.handleSearch();
            this.clearPredictions();
        };
        this.handleRightClick = () => {
            if (this.predictions.length > 0) {
                this.input.value = this.query;
                this.clearPredictions();
            }
            else if (this.input.value.length > 0) {
                this.input.value = null;
                this.resetAll();
            }
            else {
                this.searchByLocation();
            }
        };
    }
    componentWillLoad() { }
    componentDidLoad() {
        this.store.mapDispatchToProps(this, {
            setPredictions,
            setResults,
            setMarkers,
            setLoading,
            resetAll
        });
        this.store.mapStateToProps(this, state => {
            const { app: { service, map, predictions, markers, loading } } = state;
            return { service, map, predictions, markers, loading };
        });
    }
    // Rendering Methods
    render() {
        let containerClasses, rightIcon, leftIcon, rightIconClasses;
        if (this.loading) {
            leftIcon = h("ref-spinner", { class: "header-icon left-icon small" });
        }
        else {
            leftIcon = (h("img", { class: "header-icon left-icon", src: "assets/icons/search.svg" }));
        }
        if ((this.input && this.input.value.length > 0) || this.loading) {
            rightIcon = "close";
        }
        else {
            rightIcon = "my_location";
        }
        rightIconClasses = classnames({
            "header-icon": true,
            "right-icon": true,
            "material-icons": true,
            location: rightIcon == "my_location"
        });
        containerClasses = classnames({
            "search-container": true,
            "bottom-border": this.predictions.length === 0
        });
        return (h("div", { class: containerClasses },
            h("input", { id: "search-input", class: "search-input", placeholder: "Search...", ref: el => {
                    this.input = el;
                }, 
                // onBlur={() => {
                //   setTimeout(this.clearPredictions, 150);
                // }}
                onInput: this.getPredictions, disabled: this.loading, onFocus: event => {
                    this.input.select();
                    this.getPredictions(event);
                } }),
            h("div", { class: "header-icon left-icon" }, leftIcon),
            h("span", { class: rightIconClasses, onClick: this.handleRightClick }, rightIcon)));
    }
    static get is() { return "refuge-header"; }
    static get properties() { return {
        "autocomplete": {
            "type": "Any",
            "attr": "autocomplete"
        },
        "handleSearch": {
            "type": "Any",
            "attr": "handle-search"
        },
        "loading": {
            "state": true
        },
        "markers": {
            "state": true
        },
        "predictions": {
            "state": true
        },
        "searchBar": {
            "type": Boolean,
            "attr": "search-bar"
        },
        "store": {
            "context": "store"
        }
    }; }
    static get style() { return "refuge-header {\n  grid-row: 1;\n  color: var(--black);\n  background-color: var(--blue-med);\n}\n\n.search-container {\n  display: grid;\n  grid-template-rows: 8px auto 8px;\n  grid-template-columns: 8px 40px auto 40px 8px;\n  text-align: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n.bottom-border {\n  -webkit-box-shadow: inset 0px -1px 0px 0px var(--blue-dark);\n  box-shadow: inset 0px -1px 0px 0px var(--blue-dark);\n}\n\n.search-input {\n  grid-row: 2;\n  grid-column: 2 / 5;\n  height: 44px;\n  border: 1px solid var(--blue-med);\n  outline: none;\n  border-radius: 2px;\n  padding: 0px 40px;\n  -webkit-transition: padding 0.5s;\n  transition: padding 0.5s;\n  font: var(--text-body);\n}\n\n.search-input:focus {\n  border: 1px solid var(--blue-dark);\n}\n\n.header-icon {\n  grid-row: 2;\n  color: var(--black);\n}\n\n.left-icon {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  grid-column: 2;\n  text-align: center;\n  -ms-flex-line-pack: center;\n  align-content: center;\n}\n\n.right-icon {\n  grid-column: 4;\n}\n\n.location {\n  color: var(--blue-med);\n}\n\n\@keyframes rotating {\n  from {\n    transform: rotate(0deg);\n    -webkit-transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n\@-webkit-keyframes rotating {\n  from {\n    -webkit-transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n.loading {\n  animation: rotating 2s linear infinite;\n  -webkit-animation: rotating 2s linear infinite;\n}"; }
}

class RefugePrediction {
    render() {
        return (h("div", { class: "prediction-container" },
            h("ref-icon", { classes: "icon marker", icon: "marker-default-a" }),
            h("span", { class: "prediction-content" },
                h("slot", null))));
    }
    static get is() { return "refuge-prediction"; }
    static get properties() { return {
        "item": {
            "type": "Any",
            "attr": "item"
        }
    }; }
    static get style() { return "refuge-prediction {\n  /* padding: 16px 24px 16px 16px; */\n  /* Component styles go here */\n}\n\n.prediction-container {\n  display: grid;\n  grid-template-columns: 48px auto;\n  padding: 0 24px;\n  background: none;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-line-pack: center;\n  align-content: center;\n}\n\n.prediction-left {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  grid-column: 1;\n  text-align: center;\n}\n\n.prediction-content {\n  padding: 32px 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  grid-column: 2;\n  height: 100%;\n  border-bottom: 1px solid var(--light-grey);\n}"; }
}

export { RefugeHeader, RefugePrediction };
