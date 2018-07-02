/*! Built with http://stenciljs.com */
const{h:t}=window.App;import{a as e}from"./chunk-08a3749f.js";class i{constructor(){this.searchBar=!0,this.backLink=!1,this.clearPredictions=(()=>{this.setPredictions([])}),this.getPredictions=(e=>{let i=e.target.value;void 0!==i&&0!==i.length?this.autocomplete.getPlacePredictions({input:i},e=>{if(null===e||0===e.length)return void this.clearPredictions();let i=e.map(e=>t("refuge-prediction",{onClick:()=>{this.searchByPrediction(e)}},e.description));this.setPredictions(i)}):this.clearPredictions()}),this.searchByPrediction=(t=>{this.input.value=t.structured_formatting.main_text,this.handleSearch(t),this.clearPredictions()}),this.searchByLocation=(()=>{this.input.value="My location",this.handleSearch(),this.clearPredictions()})}componentWillLoad(){}componentDidLoad(){this.store.mapDispatchToProps(this,{setPredictions:e}),this.store.mapStateToProps(this,t=>{const{app:{service:e,map:i,predictions:r}}=t;return{service:e,map:i,predictions:r}}),this.autocomplete=new google.maps.places.AutocompleteService}render(){return t("div",{class:"search-container"},t("input",{class:"search-input",ref:t=>{this.input=t},onBlur:()=>{setTimeout(this.clearPredictions,150)},onInput:this.getPredictions,onFocus:this.getPredictions}),t("span",{class:"header-icon search-icon material-icons"},"search"),t("span",{class:"header-icon location-icon material-icons",onClick:this.searchByLocation},"my_location"))}static get is(){return"refuge-header"}static get properties(){return{backLink:{type:Boolean,attr:"back-link"},handleSearch:{type:"Any",attr:"handle-search"},predictions:{state:!0},searchBar:{type:Boolean,attr:"search-bar"},store:{context:"store"}}}static get style(){return"refuge-header{grid-row:1;color:var(--white);background-color:var(--blue-med)}.search-container{display:grid;grid-template-rows:8px auto 8px;grid-template-columns:8px 40px auto 40px 8px;text-align:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.search-input{grid-row:2;grid-column:2/5;height:44px;border:none;outline:0;border-radius:2px;padding:0 40px;-webkit-transition:padding .5s;transition:padding .5s;font:var(--text-body)}.header-icon{grid-row:2}.search-icon{grid-column:2;color:var(--black)}.location-icon{grid-column:4;color:var(--blue-med)}"}}class r{render(){return t("li",{class:"refuge-prediction"},t("slot",null))}static get is(){return"refuge-prediction"}static get properties(){return{item:{type:"Any",attr:"item"}}}static get style(){return"refuge-prediction{display:block;z-index:100;margin:32px 0}"}}export{i as RefugeHeader,r as RefugePrediction};