(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"25":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),r=a(1),o=(_interopRequireDefault(r),_interopRequireDefault(a(2))),i=a(60),s=a(66),c=_interopRequireDefault(a(62));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(251);var u={"image":"","icon":"","text":"","status":"","duration":3e3,"hasMask":!1,"isOpened":!1},f=function(e){function ToastPage(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ToastPage);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(ToastPage.__proto__||Object.getPrototypeOf(ToastPage)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.handleClick=function(t){if(e.state.isOpened)return e.setState(u);var a=Object.assign(n({},u,{"isOpened":!0}),t);e.setState(a)},e.handleClose=function(){e.setState({"isOpened":!1})},e.state=u,e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ToastPage,r.Component),l(ToastPage,[{"key":"render","value":function render(){var e=this.state,t=e.text,a=e.icon,n=e.status,l=e.isOpened,r=e.duration,u=e.image,f=e.hasMask;return o.default.createElement(i.View,{"className":"page toast-page"},o.default.createElement(c.default,{"title":"Toast 轻提示"}),o.default.createElement(i.View,{"className":"doc-body"},o.default.createElement(i.View,{"className":"panel"},o.default.createElement(i.View,{"className":"panel__title"},"基本案例"),o.default.createElement(i.View,{"className":"panel__content"},o.default.createElement(i.View,{"className":"example-item"},o.default.createElement(s.AtButton,{"onClick":this.handleClick.bind(this,{"text":"文本内容"})},"文本 Toast")),o.default.createElement(i.View,{"className":"example-item"},o.default.createElement(s.AtButton,{"onClick":this.handleClick.bind(this,{"text":"文本内容","icon":"analytics"})},"文本 + ICON")))),o.default.createElement(i.View,{"className":"panel"},o.default.createElement(i.View,{"className":"panel__title"},"自定义图片"),o.default.createElement(i.View,{"className":"panel__content"},o.default.createElement(i.View,{"className":"example__item"},o.default.createElement(s.AtButton,{"onClick":this.handleClick.bind(this,{"text":"凹凸实验室","image":"http://storage.360buyimg.com/mtd/home/group-21533885306540.png"})},"自定义图片 Toast")))),o.default.createElement(i.View,{"className":"panel"},o.default.createElement(i.View,{"className":"panel__title"},"添加遮罩层"),o.default.createElement(i.View,{"className":"panel__content"},o.default.createElement(i.View,{"className":"example__item"},o.default.createElement(s.AtButton,{"onClick":this.handleClick.bind(this,{"text":"透明遮罩层的作用在于不可点击下面的元素","hasMask":!0})},"添加遮罩层 Toast")))),o.default.createElement(i.View,{"className":"panel"},o.default.createElement(i.View,{"className":"panel__title"},"Error Toast"),o.default.createElement(i.View,{"className":"panel__content"},o.default.createElement(i.View,{"className":"example__item"},o.default.createElement(s.AtButton,{"onClick":this.handleClick.bind(this,{"text":"错误提示","hasMask":!0,"status":"error"})},"错误提示 Toast")))),o.default.createElement(i.View,{"className":"panel"},o.default.createElement(i.View,{"className":"panel__title"},"Success Toast"),o.default.createElement(i.View,{"className":"panel__content"},o.default.createElement(i.View,{"className":"example__item"},o.default.createElement(s.AtButton,{"onClick":this.handleClick.bind(this,{"text":"正确提示","hasMask":!0,"status":"success"})},"正确提示 Toast")))),o.default.createElement(i.View,{"className":"panel"},o.default.createElement(i.View,{"className":"panel__title"},"Loading Toast"),o.default.createElement(i.View,{"className":"panel__content"},o.default.createElement(i.View,{"className":"example__item"},o.default.createElement(s.AtButton,{"onClick":this.handleClick.bind(this,{"text":"正在加载…","hasMask":!0,"status":"loading"})},"加载中 Toast"))))),o.default.createElement(s.AtToast,{"icon":a,"text":t,"image":u,"status":n,"hasMask":f,"isOpened":l,"duration":r,"onClose":this.handleClose}))}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidShow","value":function componentDidShow(){}}]),ToastPage}();t.default=f},"251":function(e,t,a){},"62":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),l=a(1),r=(_interopRequireDefault(l),_interopRequireDefault(a(2))),o=_interopRequireDefault(a(61)),i=a(60);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(63);var s=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,l.Component),n(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return r.default.createElement(i.View,{"className":"doc-header"},r.default.createElement(i.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=s,s.defaultProps={"title":"标题"},s.propTypes={"title":o.default.string}},"63":function(e,t,a){}}]);