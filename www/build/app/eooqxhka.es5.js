/*! Built with http://stenciljs.com */
App.loadBundle("eooqxhka",["exports"],function(n){var e=window.App.h,t=function(){function n(){}return n.prototype.render=function(){var n=this;return e("div",null,e("button",{onClick:function(){n.changeCount(-10)}},"-10"),e("button",{onClick:function(){n.changeCount(-1)}},"-1"),e("span",{class:"count"},this.count),e("button",{onClick:function(){n.changeCount(1)}},"+1"),e("button",{onClick:function(){n.changeCount(10)}},"+10"))},Object.defineProperty(n,"is",{get:function(){return"app-counter"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"properties",{get:function(){return{changeCount:{type:"Any",attr:"change-count"},count:{type:Number,attr:"count"}}},enumerable:!0,configurable:!0}),Object.defineProperty(n,"style",{get:function(){return""},enumerable:!0,configurable:!0}),n}();n.AppCounter=t,Object.defineProperty(n,"__esModule",{value:!0})});