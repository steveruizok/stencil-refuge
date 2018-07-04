/*! Built with http://stenciljs.com */
const { h } = window.App;

import { m as setPredictions, e as setResults, f as setMarkers, j as setLoading, n as resetAll, l as classnames } from './chunk-0ccbf0d2.js';

class RefugeHeader {
    constructor() {
        this.searchBar = true;
        this.predictions = [];
        this.clearPredictions = () => {
            this.setPredictions([]);
        };
        this.getPredictions = event => {
            let value = event.target.value;
            this.hasText = this.input.value.length > 0;
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
            this.input.value = prediction.structured_formatting.main_text;
            this.handleSearch(prediction);
            this.clearPredictions();
        };
        this.searchByLocation = () => {
            this.input.value = "My Location";
            this.handleSearch();
            this.clearPredictions();
        };
        this.handleRightClick = () => {
            if (document.hasFocus()) {
                // clear input content
                this.input.value = null;
                this.clearPredictions();
            }
            else if (this.input.value.length > 0) {
                // clear map
                this.input.value = null;
                this.resetAll();
            }
            else {
                // search by location
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
        this.autocomplete = new google.maps.places.AutocompleteService();
    }
    // Rendering Methods
    render() {
        let containerClasses, rightIcon, leftIcon, rightIconClasses;
        if (this.loading) {
            leftIcon = h("refuge-spinner", { class: "small" });
        }
        else {
            leftIcon = "search";
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
                onInput: this.getPredictions, onFocus: event => {
                    this.input.select();
                    this.getPredictions(event);
                } }),
            h("span", { class: "header-icon left-icon material-icons" }, leftIcon),
            h("span", { class: rightIconClasses, onClick: this.handleRightClick }, rightIcon)));
    }
    static get is() { return "refuge-header"; }
    static get properties() { return {
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
    static get style() { return "refuge-header {\n  grid-row: 1;\n  color: var(--white);\n  background-color: var(--blue-med);\n}\n\n.search-container {\n  display: grid;\n  grid-template-rows: 8px auto 8px;\n  grid-template-columns: 8px 40px auto 40px 8px;\n  text-align: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n.bottom-border {\n  -webkit-box-shadow: inset 0px -1px 0px 0px var(--blue-dark);\n  box-shadow: inset 0px -1px 0px 0px var(--blue-dark);\n}\n\n.search-input {\n  grid-row: 2;\n  grid-column: 2 / 5;\n  height: 44px;\n  border: 1px solid var(--blue-med);\n  outline: none;\n  border-radius: 2px;\n  padding: 0px 40px;\n  -webkit-transition: padding 0.5s;\n  transition: padding 0.5s;\n  font: var(--text-body);\n}\n\n.search-input:focus {\n  border: 1px solid var(--blue-dark);\n}\n\n.header-icon {\n  grid-row: 2;\n  color: var(--black);\n}\n\n.left-icon {\n  grid-column: 2;\n}\n\n.right-icon {\n  grid-column: 4;\n}\n\n.location {\n  color: var(--blue-med);\n}\n\n\@keyframes rotating {\n  from {\n    transform: rotate(0deg);\n    -webkit-transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n\@-webkit-keyframes rotating {\n  from {\n    -webkit-transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n.loading {\n  animation: rotating 2s linear infinite;\n  -webkit-animation: rotating 2s linear infinite;\n}"; }
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
    static get style() { return "refuge-prediction {\n  height: 88px;\n  /* padding: 16px 24px 16px 16px; */\n  /* Component styles go here */\n}\n\n.prediction-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -ms-flex-line-pack: center;\n  align-content: center;\n  padding: 32px 24px 32px 16px;\n  /* border-bottom: 1px solid var(--light-grey); */\n}\n\n.prediction-container::after {\n  content: \"\";\n  position: absolute;\n  width: auto;\n  height: 1px;\n  left: 48px;\n  right: 24px;\n  background: var(--light-grey);\n  bottom: 0px;\n}\n\n.marker {\n  height: 24px;\n  width: 18px;\n}\n\n.prediction-content {\n  padding-left: 16px;\n  height: 100%;\n}"; }
}

class RefugeSpinner {
    render() {
        return (h("div", { class: "sk-circle" },
            h("div", { class: "sk-circle1 sk-child" }),
            h("div", { class: "sk-circle2 sk-child" }),
            h("div", { class: "sk-circle3 sk-child" }),
            h("div", { class: "sk-circle4 sk-child" }),
            h("div", { class: "sk-circle5 sk-child" }),
            h("div", { class: "sk-circle6 sk-child" }),
            h("div", { class: "sk-circle7 sk-child" }),
            h("div", { class: "sk-circle8 sk-child" }),
            h("div", { class: "sk-circle9 sk-child" }),
            h("div", { class: "sk-circle10 sk-child" }),
            h("div", { class: "sk-circle11 sk-child" }),
            h("div", { class: "sk-circle12 sk-child" })));
    }
    static get is() { return "refuge-spinner"; }
    static get style() { return "refuge-spinner {\n  -ms-flex-item-align: center;\n  align-self: center;\n  /* Component styles go here */\n}\n\n.small {\n  height: 24px;\n  width: 24px;\n}\n\n.sk-circle {\n  margin: 0 auto;\n  width: 24px;\n  height: 24px;\n  position: relative;\n}\n.sk-circle .sk-child {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.sk-circle .sk-child:before {\n  content: \"\";\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #333;\n  border-radius: 100%;\n  -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n  animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n}\n.sk-circle .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n  -ms-transform: rotate(30deg);\n  transform: rotate(30deg);\n}\n.sk-circle .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n  -ms-transform: rotate(60deg);\n  transform: rotate(60deg);\n}\n.sk-circle .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.sk-circle .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n  -ms-transform: rotate(120deg);\n  transform: rotate(120deg);\n}\n.sk-circle .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n  -ms-transform: rotate(150deg);\n  transform: rotate(150deg);\n}\n.sk-circle .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.sk-circle .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n  -ms-transform: rotate(210deg);\n  transform: rotate(210deg);\n}\n.sk-circle .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n  -ms-transform: rotate(240deg);\n  transform: rotate(240deg);\n}\n.sk-circle .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n.sk-circle .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n  -ms-transform: rotate(300deg);\n  transform: rotate(300deg);\n}\n.sk-circle .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n  -ms-transform: rotate(330deg);\n  transform: rotate(330deg);\n}\n.sk-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s;\n}\n.sk-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s;\n}\n.sk-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s;\n}\n.sk-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s;\n}\n.sk-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s;\n}\n.sk-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s;\n}\n.sk-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s;\n}\n.sk-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s;\n}\n.sk-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s;\n}\n.sk-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s;\n}\n.sk-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s;\n}\n\n\@-webkit-keyframes sk-circleBounceDelay {\n  0%,\n  80%,\n  100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n\@keyframes sk-circleBounceDelay {\n  0%,\n  80%,\n  100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}"; }
}

export { RefugeHeader, RefugePrediction, RefugeSpinner };
