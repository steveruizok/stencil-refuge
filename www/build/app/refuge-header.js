/*! Built with http://stenciljs.com */
const { h } = window.App;

import { l as setPredictions, k as classnames } from './chunk-c1561130.js';

class RefugeHeader {
    constructor() {
        this.searchBar = true;
        this.backLink = false;
        this.clearPredictions = () => {
            this.setPredictions([]);
        };
        this.getPredictions = event => {
            let value = event.target.value;
            if (value === undefined || value.length === 0) {
                this.clearPredictions();
                return;
            }
            this.hasText = true;
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
            this.input.value = prediction.structured_formatting.main_text;
            this.handleSearch(prediction);
            this.clearPredictions();
        };
        this.searchByLocation = () => {
            this.input.value = "My location";
            this.handleSearch();
            this.clearPredictions();
        };
        this.handleRightClick = () => {
            if (this.input.value.length > 0) {
                this.input.value = null;
                this.clearPredictions();
            }
            else {
                this.searchByLocation();
            }
        };
    }
    componentWillLoad() { }
    componentDidLoad() {
        this.store.mapDispatchToProps(this, {
            setPredictions
        });
        this.store.mapStateToProps(this, state => {
            const { app: { service, map, predictions } } = state;
            return { service, map, predictions };
        });
        this.autocomplete = new google.maps.places.AutocompleteService();
    }
    // Rendering Methods
    render() {
        let containerClasses, rightIcon, rightIconClasses;
        if (this.input && this.input.value.length > 0) {
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
            "bottom-border": this.hasText
        });
        return (h("div", { class: containerClasses },
            h("input", { class: "search-input", placeholder: "Search...", ref: el => {
                    this.input = el;
                }, 
                // onBlur={() => {
                //   setTimeout(this.clearPredictions, 150);
                // }}
                onInput: this.getPredictions, onFocus: this.getPredictions }),
            h("span", { class: "header-icon left-icon material-icons" }, "search"),
            h("span", { class: rightIconClasses, onClick: this.handleRightClick }, rightIcon)));
    }
    static get is() { return "refuge-header"; }
    static get properties() { return {
        "backLink": {
            "type": Boolean,
            "attr": "back-link"
        },
        "handleSearch": {
            "type": "Any",
            "attr": "handle-search"
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
    static get style() { return "refuge-header {\n  grid-row: 1;\n  color: var(--white);\n  background-color: var(--blue-med);\n}\n\n.search-container {\n  display: grid;\n  grid-template-rows: 8px auto 8px;\n  grid-template-columns: 8px 40px auto 40px 8px;\n  text-align: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n.bottom-border {\n  -webkit-box-shadow: inset 0px -1px 0px 0px var(--blue-dark);\n  box-shadow: inset 0px -1px 0px 0px var(--blue-dark);\n}\n\n.search-input {\n  grid-row: 2;\n  grid-column: 2 / 5;\n  height: 44px;\n  border: 1px solid var(--blue-med);\n  outline: none;\n  border-radius: 2px;\n  padding: 0px 40px;\n  -webkit-transition: padding 0.5s;\n  transition: padding 0.5s;\n  font: var(--text-body);\n}\n\n.search-input:focus {\n  border: 1px solid var(--blue-dark);\n}\n\n.header-icon {\n  grid-row: 2;\n  color: var(--black);\n}\n\n.left-icon {\n  grid-column: 2;\n}\n\n.right-icon {\n  grid-column: 4;\n}\n\n.location {\n  color: var(--blue-med);\n}"; }
}

class RefugePrediction {
    render() {
        return (h("li", { class: "prediction-container" },
            h("img", { class: "icon marker", src: "assets/icons/marker-default.svg" }),
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
    static get style() { return "refuge-prediction {\n  height: 88px;\n  /* padding: 16px 24px 16px 16px; */\n  /* Component styles go here */\n}\n\n.prediction-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-line-pack: center;\n  align-content: center;\n  padding: 32px 24px 32px 16px;\n  border-bottom: 1px solid var(--light-grey);\n}\n\n.marker {\n  height: 24px;\n  width: 18px;\n}\n\n.prediction-content {\n  padding-left: 16px;\n  height: 100%;\n}"; }
}

export { RefugeHeader, RefugePrediction };
