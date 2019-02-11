(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"253":function(e,t,a){},"27":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),l=_interopRequireDefault(a(1)),n=_interopRequireDefault(a(2)),s=a(60),c=a(66),o=_interopRequireDefault(a(62));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(253);var i=15,u=function(e){function ProgressPage(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ProgressPage);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(ProgressPage.__proto__||Object.getPrototypeOf(ProgressPage)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.reduce=function(){var t=e.state.percent;0!==t&&(t=t-i<0?0:t-i,e.setState({"percent":t}))},e.increase=function(){var t=e.state.percent;100!==t&&(t=t+i>100?100:t+i,e.setState({"percent":t}))},e.state={"percent":0},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ProgressPage,l.default.Component),r(ProgressPage,[{"key":"render","value":function render(){var e=this.state.percent;return n.default.createElement(s.View,{"className":"page progress-page"},n.default.createElement(o.default,{"title":"Progress 进度条"}),n.default.createElement(s.View,{"className":"doc-body"},n.default.createElement(s.View,{"className":"panel"},n.default.createElement(s.View,{"className":"panel__title"},"基础进度条"),n.default.createElement(s.View,{"className":"panel__content"},n.default.createElement(s.View,{"className":"example-item"},n.default.createElement(c.AtProgress,{"percent":25})),n.default.createElement(s.View,{"className":"example-item"},n.default.createElement(c.AtProgress,{"percent":50})),n.default.createElement(s.View,{"className":"example-item"},n.default.createElement(c.AtProgress,{"percent":75})))),n.default.createElement(s.View,{"className":"panel"},n.default.createElement(s.View,{"className":"panel__title"},"隐藏进度文案"),n.default.createElement(s.View,{"className":"panel__content"},n.default.createElement(s.View,{"className":"example-item"},n.default.createElement(c.AtProgress,{"percent":25,"isHidePercent":!0})),n.default.createElement(s.View,{"className":"example-item"},n.default.createElement(c.AtProgress,{"percent":75,"isHidePercent":!0})))),n.default.createElement(s.View,{"className":"panel"},n.default.createElement(s.View,{"className":"panel__title"},"自定义进度条线宽"),n.default.createElement(s.View,{"className":"panel__content"},n.default.createElement(s.View,{"className":"example-item"},n.default.createElement(c.AtProgress,{"percent":25,"strokeWidth":6})),n.default.createElement(s.View,{"className":"example-item"},n.default.createElement(c.AtProgress,{"percent":50,"strokeWidth":8})),n.default.createElement(s.View,{"className":"example-item"},n.default.createElement(c.AtProgress,{"percent":75,"strokeWidth":10})))),n.default.createElement(s.View,{"className":"panel"},n.default.createElement(s.View,{"className":"panel__title"},"自定义颜色"),n.default.createElement(s.View,{"className":"panel__content"},n.default.createElement(s.View,{"className":"example-item"},n.default.createElement(c.AtProgress,{"percent":25,"color":"#FF4949"})),n.default.createElement(s.View,{"className":"example-item"},n.default.createElement(c.AtProgress,{"percent":50,"color":"#13CE66"})),n.default.createElement(s.View,{"className":"example-item"},n.default.createElement(c.AtProgress,{"percent":75,"color":"#FFC82C"})))),n.default.createElement(s.View,{"className":"panel"},n.default.createElement(s.View,{"className":"panel__title"},"不同的状态"),n.default.createElement(s.View,{"className":"panel__content"},n.default.createElement(s.View,{"className":"example-item"},n.default.createElement(s.View,{"className":"example-item__desc"},"暂停"),n.default.createElement(c.AtProgress,{"percent":25})),n.default.createElement(s.View,{"className":"example-item"},n.default.createElement(s.View,{"className":"example-item__desc"},"进行中"),n.default.createElement(c.AtProgress,{"percent":50,"status":"progress"})),n.default.createElement(s.View,{"className":"example-item"},n.default.createElement(s.View,{"className":"example-item__desc"},"错误"),n.default.createElement(c.AtProgress,{"percent":75,"status":"error"})),n.default.createElement(s.View,{"className":"example-item"},n.default.createElement(s.View,{"className":"example-item__desc"},"已完成"),n.default.createElement(c.AtProgress,{"percent":100,"status":"success"})))),n.default.createElement(s.View,{"className":"panel"},n.default.createElement(s.View,{"className":"panel__title"},"实际案例"),n.default.createElement(s.View,{"className":"panel__content"},n.default.createElement(s.View,{"className":"example-item"},n.default.createElement(c.AtProgress,{"percent":e}),n.default.createElement(s.View,{"className":"example-item__buttons"},n.default.createElement(s.View,{"className":"btn"},n.default.createElement(c.AtButton,{"size":"small","onClick":this.reduce},n.default.createElement(c.AtIcon,{"value":"subtract","size":12}))),n.default.createElement(s.View,{"className":"btn"},n.default.createElement(c.AtButton,{"size":"small","onClick":this.increase},n.default.createElement(c.AtIcon,{"value":"add","size":12})))))))))}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidShow","value":function componentDidShow(){}}]),ProgressPage}();t.default=u},"62":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),l=a(1),n=(_interopRequireDefault(l),_interopRequireDefault(a(2))),s=_interopRequireDefault(a(61)),c=a(60);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(63);var o=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,l.Component),r(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return n.default.createElement(c.View,{"className":"doc-header"},n.default.createElement(c.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=o,o.defaultProps={"title":"标题"},o.propTypes={"title":s.default.string}},"63":function(e,t,a){}}]);