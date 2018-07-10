/*! Built with http://stenciljs.com */
var __generator=this&&this.__generator||function(e,t){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};App.loadBundle("f4g4ulyr",["exports","./chunk-ca5b35d8.js"],function(e,t){var r=window.App.h,n="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};n.setTimeout,n.clearTimeout;var o=n.performance||{};o.now||o.mozNow||o.msNow||o.oNow||o.webkitNow;var i=function(e){var t,r=("undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==n?n:"undefined"!=typeof module?module:Function("return this")()).Symbol;return"function"==typeof r?r.observable?t=r.observable:(t=r("observable"),r.observable=t):t="@@observable",t}(),s={INIT:"@@redux/INIT"+Math.random().toString(36).substring(7).split("").join("."),REPLACE:"@@redux/REPLACE"+Math.random().toString(36).substring(7).split("").join(".")},a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};function u(e,t,r){var n;if("function"==typeof t&&void 0===r&&(r=t,t=void 0),void 0!==r){if("function"!=typeof r)throw new Error("Expected the enhancer to be a function.");return r(u)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var o=e,c=t,l=[],f=l,d=!1;function p(){f===l&&(f=l.slice())}function h(){if(d)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return c}function g(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(d)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=!0;return p(),f.push(e),function(){if(t){if(d)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=!1,p();var r=f.indexOf(e);f.splice(r,1)}}}function m(e){if(!function(e){if("object"!==(void 0===e?"undefined":a(e))||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(d)throw new Error("Reducers may not dispatch actions.");try{d=!0,c=o(c,e)}finally{d=!1}for(var t=l=f,r=0;r<t.length;r++)(0,t[r])();return e}return m({type:s.INIT}),(n={dispatch:m,subscribe:g,getState:h,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");o=e,m({type:s.REPLACE})}})[i]=function(){var e,t=g;return(e={subscribe:function(e){if("object"!==(void 0===e?"undefined":a(e))||null===e)throw new TypeError("Expected the observer to be an object.");function r(){e.next&&e.next(h())}return r(),{unsubscribe:t(r)}}})[i]=function(){return this},e},n}function l(e,t){var r=t&&t.type;return"Given "+(r&&'action "'+String(r)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}var f=t.createCommonjsModule(function(e,r){t.commonjsGlobal,function(e){function r(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function n(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function o(e,t,r){o.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0})}function i(e,t){i.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function s(e,t){s.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function a(e,t,r){a.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0})}function c(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,n),e}function u(e){var t=void 0===e?"undefined":k(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function l(e,t,r,n,f,d,p){f=f||[],p=p||[];var h=f.slice(0);if(void 0!==d){if(n){if("function"==typeof n&&n(h,d))return;if("object"===(void 0===n?"undefined":k(n))){if(n.prefilter&&n.prefilter(h,d))return;if(n.normalize){var g=n.normalize(h,d,e,t);g&&(e=g[0],t=g[1])}}}h.push(d)}"regexp"===u(e)&&"regexp"===u(t)&&(e=e.toString(),t=t.toString());var m=void 0===e?"undefined":k(e),b=void 0===t?"undefined":k(t),v="undefined"!==m||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(d),y="undefined"!==b||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(d);if(!v&&y)r(new i(h,t));else if(!y&&v)r(new s(h,e));else if(u(e)!==u(t))r(new o(h,e,t));else if("date"===u(e)&&e-t!=0)r(new o(h,e,t));else if("object"===m&&null!==e&&null!==t)if(p.filter(function(t){return t.lhs===e}).length)e!==t&&r(new o(h,e,t));else{if(p.push({lhs:e,rhs:t}),Array.isArray(e)){var w;for(e.length,w=0;w<e.length;w++)w>=t.length?r(new a(h,w,new s(void 0,e[w]))):l(e[w],t[w],r,n,h,w,p);for(;w<t.length;)r(new a(h,w,new i(void 0,t[w++])))}else{var S=Object.keys(e),E=Object.keys(t);S.forEach(function(o,i){var s=E.indexOf(o);s>=0?(l(e[o],t[o],r,n,h,o,p),E=c(E,s)):l(e[o],void 0,r,n,h,o,p)}),E.forEach(function(e){l(void 0,t[e],r,n,h,e,p)})}p.length=p.length-1}else e!==t&&("number"===m&&isNaN(e)&&isNaN(t)||r(new o(h,e,t)))}function f(e,t,r,n){return n=n||[],l(e,t,function(e){e&&n.push(e)},r),n.length?n:void 0}function d(e,t,r){if(e&&t&&r&&r.kind){for(var n=e,o=-1,i=r.path?r.path.length-1:0;++o<i;)void 0===n[r.path[o]]&&(n[r.path[o]]="number"==typeof r.path[o]?[]:{}),n=n[r.path[o]];switch(r.kind){case"A":!function e(t,r,n){if(n.path&&n.path.length){var o,i=t[r],s=n.path.length-1;for(o=0;o<s;o++)i=i[n.path[o]];switch(n.kind){case"A":e(i[n.path[o]],n.index,n.item);break;case"D":delete i[n.path[o]];break;case"E":case"N":i[n.path[o]]=n.rhs}}else switch(n.kind){case"A":e(t[r],n.index,n.item);break;case"D":t=c(t,r);break;case"E":case"N":t[r]=n.rhs}return t}(r.path?n[r.path[o]]:n,r.index,r.item);break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs}}}function p(e,t,r,n){var o=f(e,t);try{n?r.groupCollapsed("diff"):r.group("diff")}catch(e){r.log("diff")}o?o.forEach(function(e){var t=e.kind,n=function(e){var t=e.kind,r=e.path,n=e.lhs,o=e.rhs,i=e.index,s=e.item;switch(t){case"E":return[r.join("."),n,"→",o];case"N":return[r.join("."),o];case"D":return[r.join(".")];case"A":return[r.join(".")+"["+i+"]",s];default:return[]}}(e);r.log.apply(r,["%c "+j[t].text,"color: "+j[t].color+"; font-weight: bold"].concat(S(n)))}):r.log("—— no diff ——");try{r.groupEnd()}catch(e){r.log("—— diff end —— ")}}function h(e,t,r,n){switch(void 0===e?"undefined":k(e)){case"object":return"function"==typeof e[n]?e[n].apply(e,S(r)):e[n];case"function":return e(t);default:return e}}function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},x,e),r=t.logger,n=t.stateTransformer,o=t.errorTransformer,i=t.predicate,s=t.logErrors,a=t.diffPredicate;if(void 0===r)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var c=[];return function(e){var r=e.getState;return function(e){return function(u){if("function"==typeof i&&!i(r,u))return e(u);var l={};c.push(l),l.started=w.now(),l.startedTime=new Date,l.prevState=n(r()),l.action=u;var f=void 0;if(s)try{f=e(u)}catch(e){l.error=o(e)}else f=e(u);l.took=w.now()-l.started,l.nextState=n(r());var d=t.diff&&"function"==typeof a?a(r,u):t.diff;if(function(e,t){var r=t.logger,n=t.actionTransformer,o=t.titleFormatter,i=void 0===o?function(e){var t=e.timestamp,r=e.duration;return function(e,n,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+n),r&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}(t):o,s=t.collapsed,a=t.colors,c=t.level,u=t.diff,l=void 0===t.titleFormatter;e.forEach(function(o,f){var d=o.started,g=o.startedTime,m=o.action,b=o.prevState,v=o.error,w=o.took,k=o.nextState,S=e[f+1];S&&(k=S.prevState,w=S.started-d);var E=n(m),j="function"==typeof s?s(function(){return k},m,o):s,x=y(g),R=a.title?"color: "+a.title(E)+";":"",O=["color: gray; font-weight: lighter;"];O.push(R),t.timestamp&&O.push("color: gray; font-weight: lighter;"),t.duration&&O.push("color: gray; font-weight: lighter;");var P=i(E,x,w);try{j?a.title&&l?r.groupCollapsed.apply(r,["%c "+P].concat(O)):r.groupCollapsed(P):a.title&&l?r.group.apply(r,["%c "+P].concat(O)):r.group(P)}catch(e){r.log(P)}var T=h(c,E,[b],"prevState"),L=h(c,E,[E],"action"),A=h(c,E,[v,b],"error"),D=h(c,E,[k],"nextState");if(T)if(a.prevState){var _="color: "+a.prevState(b)+"; font-weight: bold";r[T]("%c prev state",_,b)}else r[T]("prev state",b);if(L)if(a.action){var M="color: "+a.action(E)+"; font-weight: bold";r[L]("%c action    ",M,E)}else r[L]("action    ",E);if(v&&A)if(a.error){var I="color: "+a.error(v,b)+"; font-weight: bold;";r[A]("%c error     ",I,v)}else r[A]("error     ",v);if(D)if(a.nextState){var N="color: "+a.nextState(k)+"; font-weight: bold";r[D]("%c next state",N,k)}else r[D]("next state",k);u&&p(b,k,r,j);try{r.groupEnd()}catch(e){r.log("—— log end ——")}})}(c,Object.assign({},t,{diff:d})),c.length=0,l.error)throw l.error;return f}}}}var m,b,v=function(e,t){return function(e,t){return new Array(t+1).join("0")}(0,t-e.toString().length)+e},y=function(e){return v(e.getHours(),2)+":"+v(e.getMinutes(),2)+":"+v(e.getSeconds(),2)+"."+v(e.getMilliseconds(),3)},w="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},E=[];m="object"===(void 0===t.commonjsGlobal?"undefined":k(t.commonjsGlobal))&&t.commonjsGlobal?t.commonjsGlobal:"undefined"!=typeof window?window:{},(b=m.DeepDiff)&&E.push(function(){void 0!==b&&m.DeepDiff===f&&(m.DeepDiff=b,b=void 0)}),r(o,n),r(i,n),r(s,n),r(a,n),Object.defineProperties(f,{diff:{value:f,enumerable:!0},observableDiff:{value:l,enumerable:!0},applyDiff:{value:function(e,t,r){e&&t&&l(e,t,function(n){r&&!r(e,t,n)||d(e,t,n)})},enumerable:!0},applyChange:{value:d,enumerable:!0},revertChange:{value:function(e,t,r){if(e&&t&&r&&r.kind){var n,o,i=e;for(o=r.path.length-1,n=0;n<o;n++)void 0===i[r.path[n]]&&(i[r.path[n]]={}),i=i[r.path[n]];switch(r.kind){case"A":!function e(t,r,n){if(n.path&&n.path.length){var o,i=t[r],s=n.path.length-1;for(o=0;o<s;o++)i=i[n.path[o]];switch(n.kind){case"A":e(i[n.path[o]],n.index,n.item);break;case"D":case"E":i[n.path[o]]=n.lhs;break;case"N":delete i[n.path[o]]}}else switch(n.kind){case"A":e(t[r],n.index,n.item);break;case"D":case"E":t[r]=n.lhs;break;case"N":t=c(t,r)}return t}(i[r.path[n]],r.index,r.item);break;case"D":case"E":i[r.path[n]]=r.lhs;break;case"N":delete i[r.path[n]]}}},enumerable:!0},isConflict:{value:function(){return void 0!==b},enumerable:!0},noConflict:{value:function(){return E&&(E.forEach(function(e){e()}),E=null),f},enumerable:!0}});var j={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},x={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.getState;return"function"==typeof t||"function"==typeof r?g()({dispatch:t,getState:r}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};e.defaults=x,e.createLogger=g,e.logger=R,e.default=R,Object.defineProperty(e,"__esModule",{value:!0})}(r)}),d=t.unwrapExports(f),p=function(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++){var o=t[n];"function"==typeof e[o]&&(r[o]=e[o])}var i=Object.keys(r),a=void 0;try{!function(e){Object.keys(e).forEach(function(t){var r=e[t];if(void 0===r(void 0,{type:s.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===r(void 0,{type:"@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".")}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+s.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}(r)}catch(e){a=e}return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];if(a)throw a;for(var n=!1,o={},s=0;s<i.length;s++){var c=i[s],u=r[c],f=e[c],d=u(f,t);if(void 0===d){var p=l(c,t);throw new Error(p)}o[c]=d,n=n||d!==f}return n?o:e}}({app:function(e,r){switch(void 0===e&&(e={service:void 0,map:void 0,filter:{accessible:!1,unisex:!1,changing_table:!1},results:[],markers:[],predictions:[],location:void 0,focused:void 0,selected:void 0,loading:!1}),r.type){case t.TypeKeys.SET_GOOGLE_SERVICES:return Object.assign({},e,{map:r.map,service:r.service});case t.TypeKeys.SET_RESULTS_FILTER:var n=Object.assign({},e.filter,r.change);return Object.assign({},e,{filter:n});case t.TypeKeys.SET_RESULTS:return e.loading?Object.assign({},e,{results:r.results}):e;case t.TypeKeys.SET_MARKERS:return e.loading?Object.assign({},e,{markers:r.markers}):e;case t.TypeKeys.SET_PREDICTIONS:return Object.assign({},e,{predictions:r.predictions});case t.TypeKeys.SET_USER_LOCATION:return Object.assign({},e,{location:r.location});case t.TypeKeys.SET_FOCUSED_RESULT:return Object.assign({},e,{focused:r.focused,selected:void 0});case t.TypeKeys.SET_SELECTED_RESULT:return Object.assign({},e,{selected:r.selected});case t.TypeKeys.SET_LOADING:return Object.assign({},e,{loading:r.loading});case t.TypeKeys.RESET_ALL:return e.markers.forEach(function(e){e.setMap(null)}),Object.assign({},e,{loading:!1,results:[],focused:void 0,selected:void 0,predictions:[],markers:[]})}return e}}),h=function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function s(e){try{c(n.next(e))}catch(e){i(e)}}function a(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(s,a)}c((n=n.apply(e,t||[])).next())})},g=function(){function e(){var e=this;this.loading=!0,this.setUserPosition=function(t){e.setUserLocation(new google.maps.LatLng(t.coords.latitude,t.coords.longitude)),null!==e.userLocationMarker?(e.userLocationMarker=new google.maps.Marker({position:e.location,map:e.map,icon:"/assets/icons/marker-location.png"}),e.map.panTo(e.location),e.setLoading(!1),e.updateUserPosition()):e.setLoading(!1)},this.updateUserPosition=function(){e.userLocationMarker.position=e.location},this.searchByUserLocation=function(){e.location&&(e.getRefugeRestroomResults(e.location),document.getElementById("search-input").value="My Location")},this.searchByPrediction=function(t){void 0!==t?e.service.getDetails({placeId:t.place_id},function(t){e.getRefugeRestroomResults(t.geometry.location)}):e.searchByUserLocation()},this.getRefugeRestroomResults=function(t){e.clearMarkers(),e.setResults([]),e.setLoading(!0);var r="https://cors-anywhere.herokuapp.com/https://www.refugerestrooms.org/api/v1/restrooms/by_location.json?lat="+t.lat()+"&lng="+t.lng();fetch(r,{method:"GET"}).then(function(t){if(!t.ok)throw t.statusText;t.json().then(function(t){e.setResults(t),e.getMarkers(),e.setBounds()})})},this.getMarkers=function(){var t;t=e.results.map(function(t){var r=new google.maps.Marker({map:e.map,position:new google.maps.LatLng(t.latitude,t.longitude),title:t.name});return r.addListener("click",function(){if(e.selected!==t)return e.selected?(e.setFocusedResult(t),void e.setSelectedResult(t)):void(e.focused!==t?e.setFocusedResult(t):e.setSelectedResult(t));e.setSelectedResult(void 0)}),t.marker=r,r}),e.setMarkers(t)},this.setBounds=function(){var t=new google.maps.LatLngBounds;e.markers.forEach(function(e){t.extend(e.getPosition())}),e.map.fitBounds(t),window.setTimeout(function(){e.setLoading(!1)},650)},this.updateMarkers=function(){e.results.forEach(function(t){var r=!0;for(var n in e.filter)!0===e.filter[n]&&r&&(r=t[n]===e.filter[n]);var o="marker-default-a";t===e.focused&&(o="marker-focused-a"),t.marker.setIcon("/assets/icons/"+o+".svg"),t.marker.setVisible(r)})},this.clearMarkers=function(){e.markers.forEach(function(e){e.setMap(null)}),e.setFocusedResult(void 0),e.setLoading(!1)}}return e.prototype.loadScript=function(){var e=this;return new Promise(function(t){e.script=document.createElement("script"),e.script.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBn5_4mxpPCKRVuLL1TlL_P62lNXInDXHA&libraries=places",document.body.appendChild(e.script),t()})},e.prototype.componentWillLoad=function(){this.store.setStore(u(p,void 0,function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return function(){for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];var i=e.apply(void 0,n),s=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},a={getState:i.getState,dispatch:function(){return s.apply(void 0,arguments)}},u=t.map(function(e){return e(a)});return s=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}.apply(void 0,u)(i.dispatch),c({},i,{dispatch:s})}}}(d))),this.store.mapStateToProps(this,function(e){var t=e.app;return{filter:t.filter,results:t.results,markers:t.markers,location:t.location,focused:t.focused,selected:t.selected,loading:t.loading}}),this.store.mapDispatchToProps(this,{setResults:t.setResults,setMarkers:t.setMarkers,setUserLocation:t.setUserLocation,setFocusedResult:t.setFocusedResult,setSelectedResult:t.setSelectedResult,setLoading:t.setLoading})},e.prototype.componentDidLoad=function(){return h(this,void 0,void 0,function(){var e=this;return __generator(this,function(t){switch(t.label){case 0:return[4,this.loadScript()];case 1:return t.sent(),this.script.addEventListener("load",function(){return h(e,void 0,void 0,function(){var e=this;return __generator(this,function(t){return this.map=new google.maps.Map(document.getElementById("refuge-map"),{center:{lat:-33.8688,lng:151.2195},zoom:13,disableDefaultUI:!0}),this.service=new google.maps.places.PlacesService(this.map),this.autocomplete=new google.maps.places.AutocompleteService,"geolocation"in navigator&&(navigator.geolocation.getCurrentPosition(this.setUserPosition,function(){e.setLoading(!1)}),navigator.geolocation.watchPosition(this.updateUserPosition)),[2]})})}),[2]}})})},e.prototype.render=function(){this.updateMarkers();var e,n=t.classnames({"refuge-wrapper":!0,"has-results":this.results.length<=0}),o=t.classnames({"results-hidden":this.results.length<=0}),i=t.classnames({"refuge-overlay":!0,"overlay-hidden":this.results.length>0});return e=this.loading?r("ref-spinner",{class:"button-spinner"}):"find a nearby restroom",r("div",{class:n},r("refuge-header",{handleSearch:this.searchByPrediction,autocomplete:this.autocomplete}),r("refuge-map",{id:"refuge-map"}),r("refuge-results",{class:o,results:this.results}),r("refuge-predictions",null),r("refuge-detail",null),r("div",{class:i},r("button",{class:"refuge-button",disabled:this.loading,onClick:this.searchByUserLocation},e)))},Object.defineProperty(e,"is",{get:function(){return"app-root"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{autocomplete:{state:!0},element:{elementRef:!0},filter:{state:!0},focused:{state:!0},loading:{state:!0},location:{state:!0},map:{state:!0},markers:{state:!0},results:{state:!0},selected:{state:!0},service:{state:!0},store:{context:"store"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".refuge-wrapper{display:grid;grid-auto-columns:100vw;grid-template-rows:60px auto -webkit-min-content;grid-template-rows:60px auto min-content;z-index:10;height:100%}.refuge-overlay{position:absolute;display:-webkit-box;display:-ms-flexbox;display:flex;bottom:40px;width:100%}.refuge-button{width:100%}.button-spinner{color:var(--white)}.overlay-hidden{visibility:hidden}"},enumerable:!0,configurable:!0}),e}(),m=function(){function e(){var e=this;this.getVisible=function(r){return t.classnames({icon:!0,padded:!0,inactive:!e.selected[r]})},this.getInfo=function(t,n){if(e.selected[t]&&!(e.selected[t].length<=0))return r("div",{class:"detail-row"},r("div",{class:"detail-left"},r("ref-icon",{icon:n})),r("div",{class:"detail-comment"},r("p",null,e.selected[t])))}}return e.prototype.componentDidLoad=function(){this.store.mapStateToProps(this,function(e){return{selected:e.app.selected}}),this.store.mapDispatchToProps(this,{setSelectedResult:t.setSelectedResult})},e.prototype.componentDidUpdate=function(){},e.prototype.render=function(){var e=this,n=t.classnames({"detail-container":!0,"detail-open":this.selected});return this.selected?r("div",{class:n,onClick:function(){e.setSelectedResult(void 0)}},r("div",{class:"handle"}),r("div",{class:"detail-row"},r("div",{class:"detail-left"},r("ref-icon",{icon:"marker-focused"})),r("div",{class:"detail-center"},r("p",{class:"detail-name"},this.selected.name),r("p",{class:"detail-address"},this.selected.street)),r("div",{class:"right"},r("ref-icon",{classes:this.getVisible("accessible"),icon:"accessible"}),r("ref-icon",{classes:this.getVisible("unisex"),icon:"unisex"}),r("ref-icon",{classes:this.getVisible("accessible"),icon:"changing_table"}))),this.getInfo("directions","info"),this.getInfo("comment","comment")):r("div",{class:n})},Object.defineProperty(e,"is",{get:function(){return"refuge-detail"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{elm:{elementRef:!0},selected:{state:!0},store:{context:"store"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"refuge-detail{position:absolute;height:auto;width:100%;bottom:0;z-index:999;pointer-events:none}.detail-container{width:100%;overflow-y:scroll;height:50vh;-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-transition:-webkit-transform .15s;transition:-webkit-transform .15s;transition:transform .15s;transition:transform .15s,-webkit-transform .15s;background:var(--white);-webkit-box-shadow:0 0 15px rgba(0,0,0,.16);box-shadow:0 0 15px rgba(0,0,0,.16);border-top:1px solid var(--med-grey);border-radius:12px 12px 0 0;pointer-events:all}.handle{position:absolute;top:8px;height:4px;width:24px;left:0;right:0;margin:0 auto;border-radius:4px;background:var(--med-grey)}.detail-row{position:relative;display:grid;width:100%;grid-template-columns:48px auto 120px;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:22px 16px 22px 0}.detail-row::after{content:\"\";position:absolute;width:auto;height:1px;left:48px;right:24px;background-color:var(--light-grey);bottom:1px}.detail-name{display:block;padding:0;margin:0}.detail-address{display:block;padding:0;margin:0;color:var(--dark-grey)}.detail-left{grid-column:1;text-align:center}.detail-center{grid-column:2;text-align:left;padding-right:16px}.detail-right{grid-column:3}.detail-comment{grid-column:2/4;text-align:left;font-size:14px}.detail-open{-webkit-transform:none;transform:none;-webkit-transition:-webkit-transform .25s;transition:-webkit-transform .25s;transition:transform .25s;transition:transform .25s,-webkit-transform .25s}"},enumerable:!0,configurable:!0}),e}(),b=function(){function e(){var e=this;this.clearResults=function(){e.clearMarkers(),e.setResults([])},this.clearMarkers=function(){e.markers.forEach(function(e){e.setMap(null)}),e.setMarkers([])},this.getActive=function(e){return t.classnames({icon:!0,padded:!0,inactive:!e,link:!0})}}return e.prototype.componentWillLoad=function(){this.store.mapDispatchToProps(this,{setResultsFilter:t.setResultsFilter,setResults:t.setResults,setMarkers:t.setMarkers}),this.store.mapStateToProps(this,function(e){var t=e.app;return{filter:t.filter,markers:t.markers,results:t.results}})},e.prototype.render=function(){var e=this,n=t.classnames({"refuge-filter":!0,hidden:this.markers.length<=0}),o="";return this.markers.length>0&&(o="("+this.markers.length+")"),r("div",{class:n},r("div",{class:"left"},r("span",{class:"filter label"},"Restrooms ",o)),r("div",{class:"right"},r("ref-icon",{classes:this.getActive(this.filter.accessible),icon:"accessible",onClick:function(t){t.preventDefault(),e.setResultsFilter({accessible:!e.filter.accessible})}}),r("ref-icon",{classes:this.getActive(this.filter.unisex),icon:"unisex",onClick:function(t){t.preventDefault(),e.setResultsFilter({unisex:!e.filter.unisex})}}),r("ref-icon",{classes:this.getActive(this.filter.changing_table),icon:"changing_table",onClick:function(t){t.preventDefault(),e.setResultsFilter({changing_table:!e.filter.changing_table})}})))},Object.defineProperty(e,"is",{get:function(){return"refuge-filter"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{filter:{state:!0},markers:{state:!0},store:{context:"store"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"refuge-filter{display:block;background:var(--blue-med);border-top:1px solid var(--blue-dark);z-index:100;position:-webkit-sticky;position:sticky;top:0}.refuge-filter{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:12px 0 12px 16px}.filter-icon{cursor:pointer;display:inline;color:var(--white);-ms-flex-item-align:center;align-self:center}.inactive{color:var(--dark-blue)}.filter{color:var(--white)}.left{text-align:left;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.right{margin-right:12px;text-align:right;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.hidden{height:0;padding:0;-webkit-transition:all .25s;transition:all .25s;overflow:hidden}"},enumerable:!0,configurable:!0}),e}(),v=function(){function e(){}return e.prototype.render=function(){return r("div",{id:"refuge-map"},r("slot",null))},Object.defineProperty(e,"is",{get:function(){return"refuge-map"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"refuge-map{grid-row:2}"},enumerable:!0,configurable:!0}),e}(),y=function(){function e(){this.predictions=[]}return e.prototype.componentDidLoad=function(){this.store.mapStateToProps(this,function(e){return{predictions:e.app.predictions}})},e.prototype.render=function(){return this.elem.classList.toggle("open",this.predictions.length>0),this.predictions},Object.defineProperty(e,"is",{get:function(){return"refuge-predictions"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{elem:{elementRef:!0},predictions:{state:!0},store:{context:"store"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"refuge-predictions{position:absolute;top:60px;width:100%;overflow:scroll;list-style-type:none;margin:none;background:0 0;border-bottom:none;-webkit-box-shadow:none;box-shadow:none;-webkit-transition:height .25s;transition:height .25s;z-index:200}.open{-webkit-transition:height .25s;transition:height .25s;background:var(--pale-grey);border-bottom:1px solid var(--med-grey);-webkit-box-shadow:var(--shadow);box-shadow:var(--shadow);min-height:80vh}"},enumerable:!0,configurable:!0}),e}(),w=function(){function e(){var e=this;this.getVisible=function(r){return t.classnames({icon:!0,padded:!0,inactive:!e.result[r]})}}return e.prototype.render=function(){var e=this.focused?"marker-focused-a":"marker-default-a";return[r("div",{class:"result-left"},r("ref-icon",{classes:"icon marker",icon:e})),r("div",{class:"center"},r("p",{class:"result-name"},this.result.name),r("p",{class:"result-address"},this.result.street)),r("div",{class:"right"},r("ref-icon",{classes:this.getVisible("accessible"),icon:"accessible"}),r("ref-icon",{classes:this.getVisible("unisex"),icon:"unisex"}),r("ref-icon",{classes:this.getVisible("accessible"),icon:"changing_table"}))]},Object.defineProperty(e,"is",{get:function(){return"refuge-result"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{focused:{type:Boolean,attr:"focused"},result:{type:"Any",attr:"result"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"refuge-result{display:grid;grid-template-columns:48px auto 120px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.result-name{display:block;padding:0;margin:0}.result-address{display:block;padding:0;margin:0;color:var(--dark-grey)}.result-left{grid-column:1;text-align:center}.center{grid-column:2;text-align:left;padding:20px 16px 20px 0;border-bottom:1px solid var(--light-grey)}.right{grid-column:3}"},enumerable:!0,configurable:!0}),e}(),k=function(){function e(){var e=this;this.entries=[],this.results=[],this.getEntries=function(){return e.results.filter(function(t){var r=!0;for(var n in e.filter)!0===e.filter[n]&&r&&(r=t[n]===e.filter[n]);return r}).map(function(t){var n=t===e.focused;return r("refuge-result",{result:t,focused:n,onClick:function(){e.focused!==t?e.setFocusedResult(t):e.setSelectedResult(t)}})})}}return e.prototype.componentWillLoad=function(){this.store.mapDispatchToProps(this,{setResultsFilter:t.setResultsFilter,setFocusedResult:t.setFocusedResult,setSelectedResult:t.setSelectedResult}),this.store.mapStateToProps(this,function(e){var t=e.app;return{filter:t.filter,focused:t.focused,results:t.results}})},e.prototype.componentDidUpdate=function(){if(this.focused){var e=this.results.indexOf(this.focused),t=this.entries[e];t&&(document.getElementById("results-scroll").scrollTop=t.elm.offsetTop)}},e.prototype.render=function(){this.entries=this.getEntries();var e=t.classnames({"refuge-results":!0});return[r("refuge-filter",null),r("div",{id:"results-scroll",class:e},this.entries)]},Object.defineProperty(e,"is",{get:function(){return"refuge-results"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{elem:{elementRef:!0},entries:{state:!0},filter:{state:!0},focused:{state:!0},results:{state:!0},store:{context:"store"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"refuge-results{grid-row:3;width:100%;background:var(--white);overflow-y:scroll;height:40vh;-webkit-overflow-scrolling:touch;-webkit-transform:none;transform:none}.results-hidden{height:0}.refuge-results{position:relative}"},enumerable:!0,configurable:!0}),e}();e.AppRoot=g,e.RefugeDetail=m,e.RefugeFilter=b,e.RefugeMap=v,e.RefugePredictions=y,e.RefugeResult=w,e.RefugeResults=k,Object.defineProperty(e,"__esModule",{value:!0})});