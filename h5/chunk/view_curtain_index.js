(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"24":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=_interopRequireDefault(n(1)),a=_interopRequireDefault(n(2)),i=n(60),l=n(66),u=_interopRequireDefault(n(62)),c=_interopRequireDefault(n(249));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(250);var s=function(e){function TagPage(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,TagPage);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(TagPage.__proto__||Object.getPrototypeOf(TagPage)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.state={"isOpened":!1,"closeBtnPosition":"bottom"},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(TagPage,r.default.Component),o(TagPage,[{"key":"handleChange","value":function handleChange(e,t){this.setState(function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}({"isOpened":!0},e,t))}},{"key":"onClose","value":function onClose(){this.setState({"isOpened":!1})}},{"key":"render","value":function render(){var e=this.state,t=e.isOpened,n=e.closeBtnPosition;return a.default.createElement(i.View,{"className":"page"},a.default.createElement(u.default,{"title":"Curtain 幕帘"}),a.default.createElement(i.View,{"className":"doc-body"},a.default.createElement(l.AtCurtain,{"isOpened":t,"closeBtnPosition":n,"onClose":this.onClose.bind(this)},a.default.createElement(i.Image,{"style":"width:100%","mode":"widthFix","src":c.default})),a.default.createElement(i.View,{"className":"panel"},a.default.createElement(i.View,{"className":"panel__title"},"底部关闭"),a.default.createElement(i.View,{"className":"panel__content"},a.default.createElement(i.View,{"className":"example-item"},a.default.createElement(l.AtButton,{"onClick":this.handleChange.bind(this,"closeBtnPosition","bottom")},"底部关闭幕帘")))),a.default.createElement(i.View,{"className":"panel"},a.default.createElement(i.View,{"className":"panel__title"},"右上关闭"),a.default.createElement(i.View,{"className":"panel__content"},a.default.createElement(i.View,{"className":"example-item"},a.default.createElement(l.AtButton,{"onClick":this.handleChange.bind(this,"closeBtnPosition","top-right")},"右上关闭幕帘"))))))}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidShow","value":function componentDidShow(){}}]),TagPage}();t.default=s},"249":function(e,t,n){e.exports=n.p+"static/images/curtain.png"},"250":function(e,t,n){},"62":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=n(1),a=(_interopRequireDefault(r),_interopRequireDefault(n(2))),i=_interopRequireDefault(n(61)),l=n(60);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(63);var u=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,r.Component),o(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return a.default.createElement(l.View,{"className":"doc-header"},a.default.createElement(l.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=u,u.defaultProps={"title":"标题"},u.propTypes={"title":i.default.string}},"63":function(e,t,n){}}]);