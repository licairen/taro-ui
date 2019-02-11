(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"254":function(e,t,n){},"28":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var i=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=_interopRequireDefault(n(1)),a=_interopRequireDefault(n(2)),l=n(60),r=n(66),c=_interopRequireDefault(n(76)),s=_interopRequireDefault(n(62));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}n(254);var u=function(e){function ActionSheetPage(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ActionSheetPage);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(ActionSheetPage.__proto__||Object.getPrototypeOf(ActionSheetPage)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.handleClick=function(t){e.setState(_defineProperty({},"isOpened"+t,!0))},e.handleClose=function(t){console.log("第 "+t+" 个Action Sheet已经关闭"),e.setState(_defineProperty({},"isOpened"+t,!1))},e.handleCancel=function(){e.showToast("点击了取消按钮")},e.showToast=function(e){o.default.showToast({"icon":"none","title":e})},e.state={"isOpened1":!1,"isOpened2":!1,"isOpened3":!1},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ActionSheetPage,o.default.Component),i(ActionSheetPage,[{"key":"render","value":function render(){var e=this.state,t=e.isOpened1,n=e.isOpened2,i=e.isOpened3;return a.default.createElement(l.View,{"className":"page"},a.default.createElement(s.default,{"title":"ActionSheet 动作面板"}),a.default.createElement(l.View,{"className":"doc-body"},a.default.createElement(l.View,{"className":"panel"},a.default.createElement(l.View,{"className":"panel__title"},"无标题"),a.default.createElement(l.View,{"className":"panel__content"},a.default.createElement(l.View,{"className":"example-item"},a.default.createElement(c.default,{"onClick":this.handleClick.bind(this,1)},"打开 ActionSheet")))),a.default.createElement(l.View,{"className":"panel"},a.default.createElement(l.View,{"className":"panel__title"},"含标题"),a.default.createElement(l.View,{"className":"panel__content"},a.default.createElement(l.View,{"className":"example-item"},a.default.createElement(c.default,{"onClick":this.handleClick.bind(this,2)},"打开 ActionSheet")))),a.default.createElement(l.View,{"className":"panel"},a.default.createElement(l.View,{"className":"panel__title"},"自定义选项"),a.default.createElement(l.View,{"className":"panel__content"},a.default.createElement(l.View,{"className":"example-item"},a.default.createElement(c.default,{"onClick":this.handleClick.bind(this,3)},"打开 ActionSheet"))))),a.default.createElement(r.AtActionSheet,{"cancelText":"取消","isOpened":t,"onClose":this.handleClose.bind(this,1)},a.default.createElement(r.AtActionSheetItem,{"onClick":this.showToast.bind(this,"点击了按钮一")},"按钮一"),a.default.createElement(r.AtActionSheetItem,{"onClick":this.showToast.bind(this,"点击了按钮二")},"按钮二")),a.default.createElement(r.AtActionSheet,{"cancelText":"取消","isOpened":n,"onClose":this.handleClose.bind(this,2),"title":"清除位置信息后， 别人将不能查看到你"},a.default.createElement(r.AtActionSheetItem,{"onClick":this.showToast.bind(this,"点击了按钮一")},"按钮一"),a.default.createElement(r.AtActionSheetItem,{"onClick":this.showToast.bind(this,"点击了按钮二")},"按钮二")),a.default.createElement(r.AtActionSheet,{"cancelText":"取消","isOpened":i,"onCancel":this.handleCancel,"onClose":this.handleClose.bind(this,3),"title":"清除位置信息后， 别人将不能查看到你"},a.default.createElement(r.AtActionSheetItem,{"onClick":this.showToast.bind(this,"点击了按钮一")},"按钮一"),a.default.createElement(r.AtActionSheetItem,{"onClick":this.showToast.bind(this,"点击了按钮二")},"按钮二"),a.default.createElement(r.AtActionSheetItem,{"onClick":this.showToast.bind(this,"成功清除位置")},a.default.createElement(l.Text,{"className":"danger"},"清除位置信息并退出"))))}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidShow","value":function componentDidShow(){}}]),ActionSheetPage}();t.default=u},"62":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var i=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(1),a=(_interopRequireDefault(o),_interopRequireDefault(n(2))),l=_interopRequireDefault(n(61)),r=n(60);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(63);var c=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,o.Component),i(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return a.default.createElement(r.View,{"className":"doc-header"},a.default.createElement(r.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=c,c.defaultProps={"title":"标题"},c.propTypes={"title":l.default.string}},"63":function(e,t,n){}}]);