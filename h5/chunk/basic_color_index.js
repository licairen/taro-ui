(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"11":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=_interopRequireDefault(n(1)),a=_interopRequireDefault(n(2)),i=n(60),c=_interopRequireDefault(n(62));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(235);var l=function(e){function BasicColor(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,BasicColor);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(BasicColor.__proto__||Object.getPrototypeOf(BasicColor)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.state={"colorData":[{"type":"主色","data":[{"name":"浅蓝色","hex":"#78A4FA"},{"name":"品牌蓝","hex":"#6190E8"},{"name":"深蓝色","hex":"#346FC2"}]},{"type":"辅助色","data":[{"name":"蓝色 - Info","hex":"#78A4FA"},{"name":"绿色 - Positive","hex":"#13CE66"},{"name":"红色 - Negative","hex":"#FF4949"},{"name":"黄色 - Warning","hex":"#FFC82C"}]},{"type":"中性色","data":[{"name":"黑色 0","hex":"#333333"},{"name":"黑色 1","hex":"#7F7F7F"},{"name":"黑色 2","hex":"#B2B2B2"},{"name":"灰色 0","hex":"#333333"},{"name":"灰色 1","hex":"#666666"},{"name":"灰色 2","hex":"#999999"},{"name":"灰色 3","hex":"#CCCCCC"},{"name":"灰色 4","hex":"#E5E5E5"},{"name":"灰色 5","hex":"#F0F0F0"},{"name":"灰色 6","hex":"#F7F7F7"}]},{"type":"其他色","data":[{"name":"边框可选色","hex":"#C5D9E8"},{"name":"背景色 0","hex":"#ECF5FD"},{"name":"背景色 1","hex":"#FAFBFC"}]}]},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(BasicColor,o.default.Component),r(BasicColor,[{"key":"render","value":function render(){var e=this.state.colorData;return a.default.createElement(i.View,{"className":"page"},a.default.createElement(c.default,{"title":"Color 颜色"}),a.default.createElement(i.View,{"className":"doc-body"},e.map(function(e){return a.default.createElement(i.View,{"className":"panel","key":e.type},a.default.createElement(i.View,{"className":"panel__title"},e.type),a.default.createElement(i.View,{"className":"panel__content"},a.default.createElement(i.View,{"className":"color-list"},e.data.map(function(e){return a.default.createElement(i.View,{"className":"color-item","key":e.hex},a.default.createElement(i.View,{"className":"color-item__circle","style":"background: "+e.hex},a.default.createElement(i.View,{"className":"inner-circle-1"}),a.default.createElement(i.View,{"className":"inner-circle-2","style":"border-color: "+e.hex})),a.default.createElement(i.View,{"className":"color-item__info"},a.default.createElement(i.Text,{"className":"name"},e.name),a.default.createElement(i.Text,{"className":"hex","selectable":!0},e.hex)))}))))})))}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidShow","value":function componentDidShow(){}}]),BasicColor}();t.default=l},"235":function(e,t,n){},"60":function(e,t,n){e.exports=n(0)(18)},"61":function(e,t,n){e.exports=n(68)()},"62":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(1),a=(_interopRequireDefault(o),_interopRequireDefault(n(2))),i=_interopRequireDefault(n(61)),c=n(60);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(63);var l=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,o.Component),r(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return a.default.createElement(c.View,{"className":"doc-header"},a.default.createElement(c.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=l,l.defaultProps={"title":"标题"},l.propTypes={"title":i.default.string}},"63":function(e,t,n){},"68":function(e,t,n){"use strict";var r=n(69);function emptyFunction(){}e.exports=function(){function shim(e,t,n,o,a,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function getShim(){return shim}shim.isRequired=shim;var e={"array":shim,"bool":shim,"func":shim,"number":shim,"object":shim,"string":shim,"symbol":shim,"any":shim,"arrayOf":getShim,"element":shim,"instanceOf":getShim,"node":shim,"objectOf":getShim,"oneOf":getShim,"oneOfType":getShim,"shape":getShim,"exact":getShim};return e.checkPropTypes=emptyFunction,e.PropTypes=e,e}},"69":function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);