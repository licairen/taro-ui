(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"15":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),l=_interopRequireDefault(a(1)),i=_interopRequireDefault(a(2)),c=a(60),r=a(66),o=_interopRequireDefault(a(62));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(239);var s=function(e){function TagPage(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,TagPage);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(TagPage.__proto__||Object.getPrototypeOf(TagPage)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.state={"tagList":[{"name":"tag-1","active":!1},{"name":"tag-2","active":!1},{"name":"tag-3","active":!0},{"name":"tag-4","active":!0}],"hollowTagList":[{"name":"标签1","active":!1},{"name":"标签2","active":!1},{"name":"标签3","active":!0},{"name":"标签4","active":!0}],"solidTagList":[{"name":"标签1","active":!1},{"name":"标签2","active":!1},{"name":"标签3","active":!0},{"name":"标签4","active":!0}],"hollowTagList2":[{"name":"标签1","active":!1},{"name":"标签2","active":!1},{"name":"标签3","active":!0},{"name":"标签4","active":!0}],"solidTagList2":[{"name":"标签1","active":!1},{"name":"标签2","active":!1},{"name":"标签3","active":!0},{"name":"标签4","active":!0}]},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(TagPage,l.default.Component),n(TagPage,[{"key":"onClick","value":function onClick(e){var t=this.state.tagList,a=t.findIndex(function(t){return t.name===e.name}),n=!t[a].active,i="您点击的 tag 标签名是："+e.name+"，点击前是否选中："+e.active+"，点击后："+n;t[a].active=n,this.setState({"tagList":t}),l.default.getEnv()===l.default.ENV_TYPE.WEB?alert(i):l.default.showModal({"content":i,"showCancel":!1}),console.log(e)}},{"key":"handleHollowClick","value":function handleHollowClick(e){var t=this.state.hollowTagList,a=t.findIndex(function(t){return t.name===e.name});t[a].active=!t[a].active,this.setState({"hollowTagList":t})}},{"key":"handleSolidClick","value":function handleSolidClick(e){var t=this.state.solidTagList,a=t.findIndex(function(t){return t.name===e.name});t[a].active=!t[a].active,this.setState({"solidTagList":t})}},{"key":"handleHollowSmallClick","value":function handleHollowSmallClick(e){var t=this.state.hollowTagList2,a=t.findIndex(function(t){return t.name===e.name});t[a].active=!t[a].active,this.setState({"hollowTagList2":t})}},{"key":"handleSolidSmallClick","value":function handleSolidSmallClick(e){var t=this.state.solidTagList2,a=t.findIndex(function(t){return t.name===e.name});t[a].active=!t[a].active,this.setState({"solidTagList2":t})}},{"key":"render","value":function render(){var e=this;return i.default.createElement(c.View,{"className":"page"},i.default.createElement(o.default,{"title":"Tag 标签"}),i.default.createElement(c.View,{"className":"doc-body"},i.default.createElement(c.View,{"className":"panel"},i.default.createElement(c.View,{"className":"panel__title"},"空心标签"),i.default.createElement(c.View,{"className":"panel__content"},i.default.createElement(c.View,{"className":"example-item"},this.state.hollowTagList.map(function(t,a){return i.default.createElement(c.View,{"className":"subitem","key":a},i.default.createElement(r.AtTag,{"name":t.name,"active":t.active,"circle":a%2==0,"onClick":e.handleHollowClick.bind(e)},"标签"))})))),i.default.createElement(c.View,{"className":"panel"},i.default.createElement(c.View,{"className":"panel__title"},"实心标签"),i.default.createElement(c.View,{"className":"panel__content"},i.default.createElement(c.View,{"className":"example-item"},this.state.solidTagList.map(function(t,a){return i.default.createElement(c.View,{"className":"subitem","key":a},i.default.createElement(r.AtTag,{"type":"primary","name":t.name,"active":t.active,"circle":a%2==0,"onClick":e.handleSolidClick.bind(e)},"标签"))})))),i.default.createElement(c.View,{"className":"panel"},i.default.createElement(c.View,{"className":"panel__title"},"点击事件"),i.default.createElement(c.View,{"className":"panel__content"},i.default.createElement(c.View,{"className":"example-item"},this.state.tagList.map(function(t,a){return i.default.createElement(c.View,{"className":"subitem","key":a},i.default.createElement(r.AtTag,{"name":t.name,"type":"primary","active":t.active,"circle":a%2==0,"onClick":e.onClick.bind(e)},"tag-",a+1))})))),i.default.createElement(c.View,{"className":"panel"},i.default.createElement(c.View,{"className":"panel__title"},"不可点击态"),i.default.createElement(c.View,{"className":"panel__content"},i.default.createElement(c.View,{"className":"example-item"},i.default.createElement(c.View,{"className":"subitem"},i.default.createElement(r.AtTag,{"type":"primary","circle":!0,"disabled":!0},"标签")),i.default.createElement(c.View,{"className":"subitem"},i.default.createElement(r.AtTag,{"type":"primary","disabled":!0},"标签"))))),i.default.createElement(c.View,{"className":"panel"},i.default.createElement(c.View,{"className":"panel__title"},"空心标签（小）"),i.default.createElement(c.View,{"className":"panel__content"},i.default.createElement(c.View,{"className":"example-item"},this.state.hollowTagList2.map(function(t,a){return i.default.createElement(c.View,{"className":"subitem","key":a},i.default.createElement(r.AtTag,{"size":"small","name":t.name,"active":t.active,"circle":a%2==0,"onClick":e.handleHollowSmallClick.bind(e)},"标签"))})))),i.default.createElement(c.View,{"className":"panel"},i.default.createElement(c.View,{"className":"panel__title"},"实心标签（小）"),i.default.createElement(c.View,{"className":"panel__content"},i.default.createElement(c.View,{"className":"example-item"},this.state.solidTagList2.map(function(t,a){return i.default.createElement(c.View,{"className":"subitem","key":a},i.default.createElement(r.AtTag,{"size":"small","type":"primary","name":t.name,"active":t.active,"circle":a%2==0,"onClick":e.handleSolidSmallClick.bind(e)},"标签"))})))),i.default.createElement(c.View,{"className":"panel"},i.default.createElement(c.View,{"className":"panel__title"},"不可点击态（小）"),i.default.createElement(c.View,{"className":"panel__content"},i.default.createElement(c.View,{"className":"example-item"},i.default.createElement(c.View,{"className":"subitem"},i.default.createElement(r.AtTag,{"size":"small","type":"primary","circle":!0,"disabled":!0},"标签")),i.default.createElement(c.View,{"className":"subitem"},i.default.createElement(r.AtTag,{"size":"small","type":"primary","disabled":!0},"标签")))))))}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidShow","value":function componentDidShow(){}}]),TagPage}();t.default=s},"239":function(e,t,a){},"62":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),l=a(1),i=(_interopRequireDefault(l),_interopRequireDefault(a(2))),c=_interopRequireDefault(a(61)),r=a(60);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(63);var o=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,l.Component),n(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return i.default.createElement(r.View,{"className":"doc-header"},i.default.createElement(r.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=o,o.defaultProps={"title":"标题"},o.propTypes={"title":c.default.string}},"63":function(e,t,a){}}]);