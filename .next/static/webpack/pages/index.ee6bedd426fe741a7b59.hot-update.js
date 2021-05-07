webpackHotUpdate_N_E("pages/index",{

/***/ "./component/Algolia/Algolia.js":
/*!**************************************!*\
  !*** ./component/Algolia/Algolia.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_App_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../css/App.module.css */ "./css/App.module.css");
/* harmony import */ var _css_App_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_App_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ "./component/Algolia/App.js");



var _jsxFileName = "C:\\Users\\USER\\Desktop\\React-instantsearch\\component\\Algolia\\Algolia.js",
    _this = undefined,
    _s = $RefreshSig$();





var Algolia = function Algolia() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(''),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      inputValue = _React$useState2[0],
      setInputValue = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(''),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      inputError = _React$useState4[0],
      setInputError = _React$useState4[1];

  var handleChange = function handleChange(e) {
    setInputValue(e.target.value);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.outerBlock,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.block,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.inputBackground,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            value: inputValue,
            className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.input,
            onChange: handleChange,
            onKeyDown: function onKeyDown() {
              if (KeyboardEvent.code == 'enter' && !inputValue) {
                setInputError('Try it!');
              }
            } // onKeyPress={this.handleKeyPress.bind(this)}
            // onFocus={() => !locked && this.setState({ active: true })}
            // onBlur={() => !locked && this.setState({ active: false })}

          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_App__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, _this);
};

_s(Algolia, "Xm+L+uAAkWyWIpMzblHA1m5yPlM=");

_c = Algolia;
/* harmony default export */ __webpack_exports__["default"] = (Algolia);

var _c;

$RefreshReg$(_c, "Algolia");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./component/Algolia/App.js":
/*!**********************************!*\
  !*** ./component/Algolia/App.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! algoliasearch/lite */ "./node_modules/algoliasearch/dist/algoliasearch-lite.umd.js");
/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(algoliasearch_lite__WEBPACK_IMPORTED_MODULE_8__);







var _jsxFileName = "C:\\Users\\USER\\Desktop\\React-instantsearch\\component\\Algolia\\App.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var client = algoliasearch_lite__WEBPACK_IMPORTED_MODULE_8___default()('XIMRNVJLQ7', 'c73127fdd3af113650bd9b88eec377b5');
var index = client.initIndex('Community_articles_staging');

var App = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _React$Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, App);

    _this = _super.call(this, props);
    _this.state = {};
    _this.handleSearch = _this.handleSearch.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(App, [{
    key: "handleSearch",
    value: function handleSearch() {
      console.log(999);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: "hello"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: this.handleSearch,
          children: "test"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }, this);
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (App);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/algoliasearch/dist/algoliasearch-lite.umd.js":
/*!*******************************************************************!*\
  !*** ./node_modules/algoliasearch/dist/algoliasearch-lite.umd.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*! algoliasearch-lite.umd.js | 4.9.1 | © Algolia, inc. | https://github.com/algolia/algoliasearch-client-javascript */
!function(e,t){ true?module.exports=t():undefined}(this,(function(){"use strict";function e(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function r(r){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(t){e(r,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))}))}return r}function n(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var u,i=e[Symbol.iterator]();!(n=(u=i.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function a(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function u(e){var t,r="algoliasearch-client-js-".concat(e.key),n=function(){return void 0===t&&(t=e.localStorage||window.localStorage),t},a=function(){return JSON.parse(n().getItem(r)||"{}")};return{get:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}};return Promise.resolve().then((function(){var r=JSON.stringify(e),n=a()[r];return Promise.all([n||t(),void 0!==n])})).then((function(e){var t=o(e,2),n=t[0],a=t[1];return Promise.all([n,a||r.miss(n)])})).then((function(e){return o(e,1)[0]}))},set:function(e,t){return Promise.resolve().then((function(){var o=a();return o[JSON.stringify(e)]=t,n().setItem(r,JSON.stringify(o)),t}))},delete:function(e){return Promise.resolve().then((function(){var t=a();delete t[JSON.stringify(e)],n().setItem(r,JSON.stringify(t))}))},clear:function(){return Promise.resolve().then((function(){n().removeItem(r)}))}}}function i(e){var t=a(e.caches),r=t.shift();return void 0===r?{get:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}},n=t();return n.then((function(e){return Promise.all([e,r.miss(e)])})).then((function(e){return o(e,1)[0]}))},set:function(e,t){return Promise.resolve(t)},delete:function(e){return Promise.resolve()},clear:function(){return Promise.resolve()}}:{get:function(e,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}};return r.get(e,n,o).catch((function(){return i({caches:t}).get(e,n,o)}))},set:function(e,n){return r.set(e,n).catch((function(){return i({caches:t}).set(e,n)}))},delete:function(e){return r.delete(e).catch((function(){return i({caches:t}).delete(e)}))},clear:function(){return r.clear().catch((function(){return i({caches:t}).clear()}))}}}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{serializable:!0},t={};return{get:function(r,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}},a=JSON.stringify(r);if(a in t)return Promise.resolve(e.serializable?JSON.parse(t[a]):t[a]);var u=n(),i=o&&o.miss||function(){return Promise.resolve()};return u.then((function(e){return i(e)})).then((function(){return u}))},set:function(r,n){return t[JSON.stringify(r)]=e.serializable?JSON.stringify(n):n,Promise.resolve(n)},delete:function(e){return delete t[JSON.stringify(e)],Promise.resolve()},clear:function(){return t={},Promise.resolve()}}}function c(e){for(var t=e.length-1;t>0;t--){var r=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[r],e[r]=n}return e}function l(e,t){return t?(Object.keys(t).forEach((function(r){e[r]=t[r](e)})),e):e}function f(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=0;return e.replace(/%s/g,(function(){return encodeURIComponent(r[o++])}))}var h={WithinQueryParameters:0,WithinHeaders:1};function d(e,t){var r=e||{},n=r.data||{};return Object.keys(r).forEach((function(e){-1===["timeout","headers","queryParameters","data","cacheable"].indexOf(e)&&(n[e]=r[e])})),{data:Object.entries(n).length>0?n:void 0,timeout:r.timeout||t,headers:r.headers||{},queryParameters:r.queryParameters||{},cacheable:r.cacheable}}var m={Read:1,Write:2,Any:3},p=1,v=2,y=3;function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p;return r(r({},e),{},{status:t,lastUpdate:Date.now()})}function b(e){return"string"==typeof e?{protocol:"https",url:e,accept:m.Any}:{protocol:e.protocol||"https",url:e.url,accept:e.accept||m.Any}}var O="GET",P="POST";function q(e,t){return Promise.all(t.map((function(t){return e.get(t,(function(){return Promise.resolve(g(t))}))}))).then((function(e){var r=e.filter((function(e){return function(e){return e.status===p||Date.now()-e.lastUpdate>12e4}(e)})),n=e.filter((function(e){return function(e){return e.status===y&&Date.now()-e.lastUpdate<=12e4}(e)})),o=[].concat(a(r),a(n));return{getTimeout:function(e,t){return(0===n.length&&0===e?1:n.length+3+e)*t},statelessHosts:o.length>0?o.map((function(e){return b(e)})):t}}))}function j(e,t,n,o){var u=[],i=function(e,t){if(e.method===O||void 0===e.data&&void 0===t.data)return;var n=Array.isArray(e.data)?e.data:r(r({},e.data),t.data);return JSON.stringify(n)}(n,o),s=function(e,t){var n=r(r({},e.headers),t.headers),o={};return Object.keys(n).forEach((function(e){var t=n[e];o[e.toLowerCase()]=t})),o}(e,o),c=n.method,l=n.method!==O?{}:r(r({},n.data),o.data),f=r(r(r({"x-algolia-agent":e.userAgent.value},e.queryParameters),l),o.queryParameters),h=0,d=function t(r,a){var l=r.pop();if(void 0===l)throw{name:"RetryError",message:"Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",transporterStackTrace:A(u)};var d={data:i,headers:s,method:c,url:S(l,n.path,f),connectTimeout:a(h,e.timeouts.connect),responseTimeout:a(h,o.timeout)},m=function(e){var t={request:d,response:e,host:l,triesLeft:r.length};return u.push(t),t},p={onSuccess:function(e){return function(e){try{return JSON.parse(e.content)}catch(t){throw function(e,t){return{name:"DeserializationError",message:e,response:t}}(t.message,e)}}(e)},onRetry:function(n){var o=m(n);return n.isTimedOut&&h++,Promise.all([e.logger.info("Retryable failure",x(o)),e.hostsCache.set(l,g(l,n.isTimedOut?y:v))]).then((function(){return t(r,a)}))},onFail:function(e){throw m(e),function(e,t){var r=e.content,n=e.status,o=r;try{o=JSON.parse(r).message}catch(e){}return function(e,t,r){return{name:"ApiError",message:e,status:t,transporterStackTrace:r}}(o,n,t)}(e,A(u))}};return e.requester.send(d).then((function(e){return function(e,t){return function(e){var t=e.status;return e.isTimedOut||function(e){var t=e.isTimedOut,r=e.status;return!t&&0==~~r}(e)||2!=~~(t/100)&&4!=~~(t/100)}(e)?t.onRetry(e):2==~~(e.status/100)?t.onSuccess(e):t.onFail(e)}(e,p)}))};return q(e.hostsCache,t).then((function(e){return d(a(e.statelessHosts).reverse(),e.getTimeout)}))}function w(e){var t={value:"Algolia for JavaScript (".concat(e,")"),add:function(e){var r="; ".concat(e.segment).concat(void 0!==e.version?" (".concat(e.version,")"):"");return-1===t.value.indexOf(r)&&(t.value="".concat(t.value).concat(r)),t}};return t}function S(e,t,r){var n=T(r),o="".concat(e.protocol,"://").concat(e.url,"/").concat("/"===t.charAt(0)?t.substr(1):t);return n.length&&(o+="?".concat(n)),o}function T(e){return Object.keys(e).map((function(t){return f("%s=%s",t,(r=e[t],"[object Object]"===Object.prototype.toString.call(r)||"[object Array]"===Object.prototype.toString.call(r)?JSON.stringify(e[t]):e[t]));var r})).join("&")}function A(e){return e.map((function(e){return x(e)}))}function x(e){var t=e.request.headers["x-algolia-api-key"]?{"x-algolia-api-key":"*****"}:{};return r(r({},e),{},{request:r(r({},e.request),{},{headers:r(r({},e.request.headers),t)})})}var N=function(e){var t=e.appId,n=function(e,t,r){var n={"x-algolia-api-key":r,"x-algolia-application-id":t};return{headers:function(){return e===h.WithinHeaders?n:{}},queryParameters:function(){return e===h.WithinQueryParameters?n:{}}}}(void 0!==e.authMode?e.authMode:h.WithinHeaders,t,e.apiKey),a=function(e){var t=e.hostsCache,r=e.logger,n=e.requester,a=e.requestsCache,u=e.responsesCache,i=e.timeouts,s=e.userAgent,c=e.hosts,l=e.queryParameters,f={hostsCache:t,logger:r,requester:n,requestsCache:a,responsesCache:u,timeouts:i,userAgent:s,headers:e.headers,queryParameters:l,hosts:c.map((function(e){return b(e)})),read:function(e,t){var r=d(t,f.timeouts.read),n=function(){return j(f,f.hosts.filter((function(e){return 0!=(e.accept&m.Read)})),e,r)};if(!0!==(void 0!==r.cacheable?r.cacheable:e.cacheable))return n();var a={request:e,mappedRequestOptions:r,transporter:{queryParameters:f.queryParameters,headers:f.headers}};return f.responsesCache.get(a,(function(){return f.requestsCache.get(a,(function(){return f.requestsCache.set(a,n()).then((function(e){return Promise.all([f.requestsCache.delete(a),e])}),(function(e){return Promise.all([f.requestsCache.delete(a),Promise.reject(e)])})).then((function(e){var t=o(e,2);t[0];return t[1]}))}))}),{miss:function(e){return f.responsesCache.set(a,e)}})},write:function(e,t){return j(f,f.hosts.filter((function(e){return 0!=(e.accept&m.Write)})),e,d(t,f.timeouts.write))}};return f}(r(r({hosts:[{url:"".concat(t,"-dsn.algolia.net"),accept:m.Read},{url:"".concat(t,".algolia.net"),accept:m.Write}].concat(c([{url:"".concat(t,"-1.algolianet.com")},{url:"".concat(t,"-2.algolianet.com")},{url:"".concat(t,"-3.algolianet.com")}]))},e),{},{headers:r(r(r({},n.headers()),{"content-type":"application/x-www-form-urlencoded"}),e.headers),queryParameters:r(r({},n.queryParameters()),e.queryParameters)}));return l({transporter:a,appId:t,addAlgoliaAgent:function(e,t){a.userAgent.add({segment:e,version:t})},clearCache:function(){return Promise.all([a.requestsCache.clear(),a.responsesCache.clear()]).then((function(){}))}},e.methods)},C=function(e){return function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={transporter:e.transporter,appId:e.appId,indexName:t};return l(n,r.methods)}},k=function(e){return function(t,n){var o=t.map((function(e){return r(r({},e),{},{params:T(e.params||{})})}));return e.transporter.read({method:P,path:"1/indexes/*/queries",data:{requests:o},cacheable:!0},n)}},J=function(e){return function(t,o){return Promise.all(t.map((function(t){var a=t.params,u=a.facetName,i=a.facetQuery,s=n(a,["facetName","facetQuery"]);return C(e)(t.indexName,{methods:{searchForFacetValues:F}}).searchForFacetValues(u,i,r(r({},o),s))})))}},E=function(e){return function(t,r,n){return e.transporter.read({method:P,path:f("1/answers/%s/prediction",e.indexName),data:{query:t,queryLanguages:r},cacheable:!0},n)}},I=function(e){return function(t,r){return e.transporter.read({method:P,path:f("1/indexes/%s/query",e.indexName),data:{query:t},cacheable:!0},r)}},F=function(e){return function(t,r,n){return e.transporter.read({method:P,path:f("1/indexes/%s/facets/%s/query",e.indexName,t),data:{facetQuery:r},cacheable:!0},n)}},R=1,D=2,W=3;function H(e,t,n){var o,a={appId:e,apiKey:t,timeouts:{connect:1,read:2,write:30},requester:{send:function(e){return new Promise((function(t){var r=new XMLHttpRequest;r.open(e.method,e.url,!0),Object.keys(e.headers).forEach((function(t){return r.setRequestHeader(t,e.headers[t])}));var n,o=function(e,n){return setTimeout((function(){r.abort(),t({status:0,content:n,isTimedOut:!0})}),1e3*e)},a=o(e.connectTimeout,"Connection timeout");r.onreadystatechange=function(){r.readyState>r.OPENED&&void 0===n&&(clearTimeout(a),n=o(e.responseTimeout,"Socket timeout"))},r.onerror=function(){0===r.status&&(clearTimeout(a),clearTimeout(n),t({content:r.responseText||"Network request failed",status:r.status,isTimedOut:!1}))},r.onload=function(){clearTimeout(a),clearTimeout(n),t({content:r.responseText,status:r.status,isTimedOut:!1})},r.send(e.data)}))}},logger:(o=W,{debug:function(e,t){return R>=o&&console.debug(e,t),Promise.resolve()},info:function(e,t){return D>=o&&console.info(e,t),Promise.resolve()},error:function(e,t){return console.error(e,t),Promise.resolve()}}),responsesCache:s(),requestsCache:s({serializable:!1}),hostsCache:i({caches:[u({key:"".concat("4.9.1","-").concat(e)}),s()]}),userAgent:w("4.9.1").add({segment:"Browser",version:"lite"}),authMode:h.WithinQueryParameters};return N(r(r(r({},a),n),{},{methods:{search:k,searchForFacetValues:J,multipleQueries:k,multipleSearchForFacetValues:J,initIndex:function(e){return function(t){return C(e)(t,{methods:{search:I,searchForFacetValues:F,findAnswers:E}})}}}}))}return H.version="4.9.1",H}));


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0FsZ29saWEvQWxnb2xpYS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0FsZ29saWEvQXBwLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYWxnb2xpYXNlYXJjaC9kaXN0L2FsZ29saWFzZWFyY2gtbGl0ZS51bWQuanMiXSwibmFtZXMiOlsiQWxnb2xpYSIsIlJlYWN0IiwidXNlU3RhdGUiLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsImlucHV0RXJyb3IiLCJzZXRJbnB1dEVycm9yIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwic3R5bGVzIiwib3V0ZXJCbG9jayIsImJsb2NrIiwiaW5wdXRCYWNrZ3JvdW5kIiwiaW5wdXQiLCJLZXlib2FyZEV2ZW50IiwiY29kZSIsImNsaWVudCIsImFsZ29saWFzZWFyY2giLCJpbmRleCIsImluaXRJbmRleCIsIkFwcCIsInByb3BzIiwic3RhdGUiLCJoYW5kbGVTZWFyY2giLCJiaW5kIiwiY29uc29sZSIsImxvZyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUFBLHdCQUVrQkMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FGbEI7QUFBQTtBQUFBLE1BRVhDLFVBRlc7QUFBQSxNQUVDQyxhQUZEOztBQUFBLHlCQUdrQkgsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FIbEI7QUFBQTtBQUFBLE1BR1hHLFVBSFc7QUFBQSxNQUdDQyxhQUhEOztBQUtsQixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQU87QUFDeEJKLGlCQUFhLENBQUNJLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWI7QUFDSCxHQUZEOztB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QUFxRCxFQUFFLGdCQUFnQixJQUFJLGNBQWMsb0JBQW9CLGtEQUFrRCxvQkFBb0IsaURBQWlELHFCQUFxQiw2Q0FBNkMsc0NBQXNDLGdCQUFnQixnQkFBZ0IsV0FBVyxxQ0FBcUMsT0FBTyw0QkFBNEIsaUNBQWlDLG9DQUFvQyxpQkFBaUIsU0FBUyxFQUFFLFNBQVMsdUdBQXVHLG1CQUFtQixlQUFlLFNBQVMsK0NBQStDLEtBQUssR0FBRywyQkFBMkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWU2YmVkZDQyNmZlNzQxYTdiNTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9jc3MvQXBwLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXHJcblxyXG5jb25zdCBBbGdvbGlhID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtpbnB1dEVycm9yLCBzZXRJbnB1dEVycm9yXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldElucHV0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3V0ZXJCbG9ja30+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ibG9ja30+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9IHR5cGU9XCJ0ZXh0XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0QmFja2dyb3VuZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXsoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKEtleWJvYXJkRXZlbnQuY29kZSA9PSAnZW50ZXInICYmICFpbnB1dFZhbHVlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW5wdXRFcnJvcignVHJ5IGl0IScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9uS2V5UHJlc3M9e3RoaXMuaGFuZGxlS2V5UHJlc3MuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9uRm9jdXM9eygpID0+ICFsb2NrZWQgJiYgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZTogdHJ1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9uQmx1cj17KCkgPT4gIWxvY2tlZCAmJiB0aGlzLnNldFN0YXRlKHsgYWN0aXZlOiBmYWxzZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8QXBwLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFsZ29saWEiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBhbGdvbGlhc2VhcmNoIGZyb20gJ2FsZ29saWFzZWFyY2gvbGl0ZSc7XHJcblxyXG5jb25zdCBjbGllbnQgPSBhbGdvbGlhc2VhcmNoKFxyXG4gICAgJ1hJTVJOVkpMUTcnLFxyXG4gICAgJ2M3MzEyN2ZkZDNhZjExMzY1MGJkOWI4OGVlYzM3N2I1J1xyXG4pO1xyXG5cclxuY29uc3QgaW5kZXggPSBjbGllbnQuaW5pdEluZGV4KCdDb21tdW5pdHlfYXJ0aWNsZXNfc3RhZ2luZycpO1xyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZVNlYXJjaCA9IHRoaXMuaGFuZGxlU2VhcmNoLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2VhcmNoKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKDk5OSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5oZWxsbzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNlYXJjaH0+dGVzdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiIsIi8qISBhbGdvbGlhc2VhcmNoLWxpdGUudW1kLmpzIHwgNC45LjEgfCDCqSBBbGdvbGlhLCBpbmMuIHwgaHR0cHM6Ly9naXRodWIuY29tL2FsZ29saWEvYWxnb2xpYXNlYXJjaC1jbGllbnQtamF2YXNjcmlwdCAqL1xuIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUodCk6KGU9ZXx8c2VsZikuYWxnb2xpYXNlYXJjaD10KCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZShlLHQscil7cmV0dXJuIHQgaW4gZT9PYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHt2YWx1ZTpyLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6ZVt0XT1yLGV9ZnVuY3Rpb24gdChlLHQpe3ZhciByPU9iamVjdC5rZXlzKGUpO2lmKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpe3ZhciBuPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7dCYmKG49bi5maWx0ZXIoKGZ1bmN0aW9uKHQpe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsdCkuZW51bWVyYWJsZX0pKSksci5wdXNoLmFwcGx5KHIsbil9cmV0dXJuIHJ9ZnVuY3Rpb24gcihyKXtmb3IodmFyIG49MTtuPGFyZ3VtZW50cy5sZW5ndGg7bisrKXt2YXIgbz1udWxsIT1hcmd1bWVudHNbbl0/YXJndW1lbnRzW25dOnt9O24lMj90KE9iamVjdChvKSwhMCkuZm9yRWFjaCgoZnVuY3Rpb24odCl7ZShyLHQsb1t0XSl9KSk6T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnM/T2JqZWN0LmRlZmluZVByb3BlcnRpZXMocixPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvKSk6dChPYmplY3QobykpLmZvckVhY2goKGZ1bmN0aW9uKGUpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShyLGUsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvLGUpKX0pKX1yZXR1cm4gcn1mdW5jdGlvbiBuKGUsdCl7aWYobnVsbD09ZSlyZXR1cm57fTt2YXIgcixuLG89ZnVuY3Rpb24oZSx0KXtpZihudWxsPT1lKXJldHVybnt9O3ZhciByLG4sbz17fSxhPU9iamVjdC5rZXlzKGUpO2ZvcihuPTA7bjxhLmxlbmd0aDtuKyspcj1hW25dLHQuaW5kZXhPZihyKT49MHx8KG9bcl09ZVtyXSk7cmV0dXJuIG99KGUsdCk7aWYoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyl7dmFyIGE9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTtmb3Iobj0wO248YS5sZW5ndGg7bisrKXI9YVtuXSx0LmluZGV4T2Yocik+PTB8fE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChlLHIpJiYob1tyXT1lW3JdKX1yZXR1cm4gb31mdW5jdGlvbiBvKGUsdCl7cmV0dXJuIGZ1bmN0aW9uKGUpe2lmKEFycmF5LmlzQXJyYXkoZSkpcmV0dXJuIGV9KGUpfHxmdW5jdGlvbihlLHQpe2lmKCEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChlKXx8XCJbb2JqZWN0IEFyZ3VtZW50c11cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKSkpcmV0dXJuO3ZhciByPVtdLG49ITAsbz0hMSxhPXZvaWQgMDt0cnl7Zm9yKHZhciB1LGk9ZVtTeW1ib2wuaXRlcmF0b3JdKCk7IShuPSh1PWkubmV4dCgpKS5kb25lKSYmKHIucHVzaCh1LnZhbHVlKSwhdHx8ci5sZW5ndGghPT10KTtuPSEwKTt9Y2F0Y2goZSl7bz0hMCxhPWV9ZmluYWxseXt0cnl7bnx8bnVsbD09aS5yZXR1cm58fGkucmV0dXJuKCl9ZmluYWxseXtpZihvKXRocm93IGF9fXJldHVybiByfShlLHQpfHxmdW5jdGlvbigpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpfSgpfWZ1bmN0aW9uIGEoZSl7cmV0dXJuIGZ1bmN0aW9uKGUpe2lmKEFycmF5LmlzQXJyYXkoZSkpe2Zvcih2YXIgdD0wLHI9bmV3IEFycmF5KGUubGVuZ3RoKTt0PGUubGVuZ3RoO3QrKylyW3RdPWVbdF07cmV0dXJuIHJ9fShlKXx8ZnVuY3Rpb24oZSl7aWYoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChlKXx8XCJbb2JqZWN0IEFyZ3VtZW50c11cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKSlyZXR1cm4gQXJyYXkuZnJvbShlKX0oZSl8fGZ1bmN0aW9uKCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpfSgpfWZ1bmN0aW9uIHUoZSl7dmFyIHQscj1cImFsZ29saWFzZWFyY2gtY2xpZW50LWpzLVwiLmNvbmNhdChlLmtleSksbj1mdW5jdGlvbigpe3JldHVybiB2b2lkIDA9PT10JiYodD1lLmxvY2FsU3RvcmFnZXx8d2luZG93LmxvY2FsU3RvcmFnZSksdH0sYT1mdW5jdGlvbigpe3JldHVybiBKU09OLnBhcnNlKG4oKS5nZXRJdGVtKHIpfHxcInt9XCIpfTtyZXR1cm57Z2V0OmZ1bmN0aW9uKGUsdCl7dmFyIHI9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOnttaXNzOmZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpfX07cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKGZ1bmN0aW9uKCl7dmFyIHI9SlNPTi5zdHJpbmdpZnkoZSksbj1hKClbcl07cmV0dXJuIFByb21pc2UuYWxsKFtufHx0KCksdm9pZCAwIT09bl0pfSkpLnRoZW4oKGZ1bmN0aW9uKGUpe3ZhciB0PW8oZSwyKSxuPXRbMF0sYT10WzFdO3JldHVybiBQcm9taXNlLmFsbChbbixhfHxyLm1pc3MobildKX0pKS50aGVuKChmdW5jdGlvbihlKXtyZXR1cm4gbyhlLDEpWzBdfSkpfSxzZXQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoZnVuY3Rpb24oKXt2YXIgbz1hKCk7cmV0dXJuIG9bSlNPTi5zdHJpbmdpZnkoZSldPXQsbigpLnNldEl0ZW0ocixKU09OLnN0cmluZ2lmeShvKSksdH0pKX0sZGVsZXRlOmZ1bmN0aW9uKGUpe3JldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKChmdW5jdGlvbigpe3ZhciB0PWEoKTtkZWxldGUgdFtKU09OLnN0cmluZ2lmeShlKV0sbigpLnNldEl0ZW0ocixKU09OLnN0cmluZ2lmeSh0KSl9KSl9LGNsZWFyOmZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKGZ1bmN0aW9uKCl7bigpLnJlbW92ZUl0ZW0ocil9KSl9fX1mdW5jdGlvbiBpKGUpe3ZhciB0PWEoZS5jYWNoZXMpLHI9dC5zaGlmdCgpO3JldHVybiB2b2lkIDA9PT1yP3tnZXQ6ZnVuY3Rpb24oZSx0KXt2YXIgcj1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06e21pc3M6ZnVuY3Rpb24oKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCl9fSxuPXQoKTtyZXR1cm4gbi50aGVuKChmdW5jdGlvbihlKXtyZXR1cm4gUHJvbWlzZS5hbGwoW2Usci5taXNzKGUpXSl9KSkudGhlbigoZnVuY3Rpb24oZSl7cmV0dXJuIG8oZSwxKVswXX0pKX0sc2V0OmZ1bmN0aW9uKGUsdCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSh0KX0sZGVsZXRlOmZ1bmN0aW9uKGUpe3JldHVybiBQcm9taXNlLnJlc29sdmUoKX0sY2xlYXI6ZnVuY3Rpb24oKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCl9fTp7Z2V0OmZ1bmN0aW9uKGUsbil7dmFyIG89YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOnttaXNzOmZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpfX07cmV0dXJuIHIuZ2V0KGUsbixvKS5jYXRjaCgoZnVuY3Rpb24oKXtyZXR1cm4gaSh7Y2FjaGVzOnR9KS5nZXQoZSxuLG8pfSkpfSxzZXQ6ZnVuY3Rpb24oZSxuKXtyZXR1cm4gci5zZXQoZSxuKS5jYXRjaCgoZnVuY3Rpb24oKXtyZXR1cm4gaSh7Y2FjaGVzOnR9KS5zZXQoZSxuKX0pKX0sZGVsZXRlOmZ1bmN0aW9uKGUpe3JldHVybiByLmRlbGV0ZShlKS5jYXRjaCgoZnVuY3Rpb24oKXtyZXR1cm4gaSh7Y2FjaGVzOnR9KS5kZWxldGUoZSl9KSl9LGNsZWFyOmZ1bmN0aW9uKCl7cmV0dXJuIHIuY2xlYXIoKS5jYXRjaCgoZnVuY3Rpb24oKXtyZXR1cm4gaSh7Y2FjaGVzOnR9KS5jbGVhcigpfSkpfX19ZnVuY3Rpb24gcygpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTp7c2VyaWFsaXphYmxlOiEwfSx0PXt9O3JldHVybntnZXQ6ZnVuY3Rpb24ocixuKXt2YXIgbz1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06e21pc3M6ZnVuY3Rpb24oKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCl9fSxhPUpTT04uc3RyaW5naWZ5KHIpO2lmKGEgaW4gdClyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGUuc2VyaWFsaXphYmxlP0pTT04ucGFyc2UodFthXSk6dFthXSk7dmFyIHU9bigpLGk9byYmby5taXNzfHxmdW5jdGlvbigpe3JldHVybiBQcm9taXNlLnJlc29sdmUoKX07cmV0dXJuIHUudGhlbigoZnVuY3Rpb24oZSl7cmV0dXJuIGkoZSl9KSkudGhlbigoZnVuY3Rpb24oKXtyZXR1cm4gdX0pKX0sc2V0OmZ1bmN0aW9uKHIsbil7cmV0dXJuIHRbSlNPTi5zdHJpbmdpZnkocildPWUuc2VyaWFsaXphYmxlP0pTT04uc3RyaW5naWZ5KG4pOm4sUHJvbWlzZS5yZXNvbHZlKG4pfSxkZWxldGU6ZnVuY3Rpb24oZSl7cmV0dXJuIGRlbGV0ZSB0W0pTT04uc3RyaW5naWZ5KGUpXSxQcm9taXNlLnJlc29sdmUoKX0sY2xlYXI6ZnVuY3Rpb24oKXtyZXR1cm4gdD17fSxQcm9taXNlLnJlc29sdmUoKX19fWZ1bmN0aW9uIGMoZSl7Zm9yKHZhciB0PWUubGVuZ3RoLTE7dD4wO3QtLSl7dmFyIHI9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKih0KzEpKSxuPWVbdF07ZVt0XT1lW3JdLGVbcl09bn1yZXR1cm4gZX1mdW5jdGlvbiBsKGUsdCl7cmV0dXJuIHQ/KE9iamVjdC5rZXlzKHQpLmZvckVhY2goKGZ1bmN0aW9uKHIpe2Vbcl09dFtyXShlKX0pKSxlKTplfWZ1bmN0aW9uIGYoZSl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgscj1uZXcgQXJyYXkodD4xP3QtMTowKSxuPTE7bjx0O24rKylyW24tMV09YXJndW1lbnRzW25dO3ZhciBvPTA7cmV0dXJuIGUucmVwbGFjZSgvJXMvZywoZnVuY3Rpb24oKXtyZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHJbbysrXSl9KSl9dmFyIGg9e1dpdGhpblF1ZXJ5UGFyYW1ldGVyczowLFdpdGhpbkhlYWRlcnM6MX07ZnVuY3Rpb24gZChlLHQpe3ZhciByPWV8fHt9LG49ci5kYXRhfHx7fTtyZXR1cm4gT2JqZWN0LmtleXMocikuZm9yRWFjaCgoZnVuY3Rpb24oZSl7LTE9PT1bXCJ0aW1lb3V0XCIsXCJoZWFkZXJzXCIsXCJxdWVyeVBhcmFtZXRlcnNcIixcImRhdGFcIixcImNhY2hlYWJsZVwiXS5pbmRleE9mKGUpJiYobltlXT1yW2VdKX0pKSx7ZGF0YTpPYmplY3QuZW50cmllcyhuKS5sZW5ndGg+MD9uOnZvaWQgMCx0aW1lb3V0OnIudGltZW91dHx8dCxoZWFkZXJzOnIuaGVhZGVyc3x8e30scXVlcnlQYXJhbWV0ZXJzOnIucXVlcnlQYXJhbWV0ZXJzfHx7fSxjYWNoZWFibGU6ci5jYWNoZWFibGV9fXZhciBtPXtSZWFkOjEsV3JpdGU6MixBbnk6M30scD0xLHY9Mix5PTM7ZnVuY3Rpb24gZyhlKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06cDtyZXR1cm4gcihyKHt9LGUpLHt9LHtzdGF0dXM6dCxsYXN0VXBkYXRlOkRhdGUubm93KCl9KX1mdW5jdGlvbiBiKGUpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlP3twcm90b2NvbDpcImh0dHBzXCIsdXJsOmUsYWNjZXB0Om0uQW55fTp7cHJvdG9jb2w6ZS5wcm90b2NvbHx8XCJodHRwc1wiLHVybDplLnVybCxhY2NlcHQ6ZS5hY2NlcHR8fG0uQW55fX12YXIgTz1cIkdFVFwiLFA9XCJQT1NUXCI7ZnVuY3Rpb24gcShlLHQpe3JldHVybiBQcm9taXNlLmFsbCh0Lm1hcCgoZnVuY3Rpb24odCl7cmV0dXJuIGUuZ2V0KHQsKGZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShnKHQpKX0pKX0pKSkudGhlbigoZnVuY3Rpb24oZSl7dmFyIHI9ZS5maWx0ZXIoKGZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZS5zdGF0dXM9PT1wfHxEYXRlLm5vdygpLWUubGFzdFVwZGF0ZT4xMmU0fShlKX0pKSxuPWUuZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGUuc3RhdHVzPT09eSYmRGF0ZS5ub3coKS1lLmxhc3RVcGRhdGU8PTEyZTR9KGUpfSkpLG89W10uY29uY2F0KGEociksYShuKSk7cmV0dXJue2dldFRpbWVvdXQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4oMD09PW4ubGVuZ3RoJiYwPT09ZT8xOm4ubGVuZ3RoKzMrZSkqdH0sc3RhdGVsZXNzSG9zdHM6by5sZW5ndGg+MD9vLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuIGIoZSl9KSk6dH19KSl9ZnVuY3Rpb24gaihlLHQsbixvKXt2YXIgdT1bXSxpPWZ1bmN0aW9uKGUsdCl7aWYoZS5tZXRob2Q9PT1PfHx2b2lkIDA9PT1lLmRhdGEmJnZvaWQgMD09PXQuZGF0YSlyZXR1cm47dmFyIG49QXJyYXkuaXNBcnJheShlLmRhdGEpP2UuZGF0YTpyKHIoe30sZS5kYXRhKSx0LmRhdGEpO3JldHVybiBKU09OLnN0cmluZ2lmeShuKX0obixvKSxzPWZ1bmN0aW9uKGUsdCl7dmFyIG49cihyKHt9LGUuaGVhZGVycyksdC5oZWFkZXJzKSxvPXt9O3JldHVybiBPYmplY3Qua2V5cyhuKS5mb3JFYWNoKChmdW5jdGlvbihlKXt2YXIgdD1uW2VdO29bZS50b0xvd2VyQ2FzZSgpXT10fSkpLG99KGUsbyksYz1uLm1ldGhvZCxsPW4ubWV0aG9kIT09Tz97fTpyKHIoe30sbi5kYXRhKSxvLmRhdGEpLGY9cihyKHIoe1wieC1hbGdvbGlhLWFnZW50XCI6ZS51c2VyQWdlbnQudmFsdWV9LGUucXVlcnlQYXJhbWV0ZXJzKSxsKSxvLnF1ZXJ5UGFyYW1ldGVycyksaD0wLGQ9ZnVuY3Rpb24gdChyLGEpe3ZhciBsPXIucG9wKCk7aWYodm9pZCAwPT09bCl0aHJvd3tuYW1lOlwiUmV0cnlFcnJvclwiLG1lc3NhZ2U6XCJVbnJlYWNoYWJsZSBob3N0cyAtIHlvdXIgYXBwbGljYXRpb24gaWQgbWF5IGJlIGluY29ycmVjdC4gSWYgdGhlIGVycm9yIHBlcnNpc3RzLCBjb250YWN0IHN1cHBvcnRAYWxnb2xpYS5jb20uXCIsdHJhbnNwb3J0ZXJTdGFja1RyYWNlOkEodSl9O3ZhciBkPXtkYXRhOmksaGVhZGVyczpzLG1ldGhvZDpjLHVybDpTKGwsbi5wYXRoLGYpLGNvbm5lY3RUaW1lb3V0OmEoaCxlLnRpbWVvdXRzLmNvbm5lY3QpLHJlc3BvbnNlVGltZW91dDphKGgsby50aW1lb3V0KX0sbT1mdW5jdGlvbihlKXt2YXIgdD17cmVxdWVzdDpkLHJlc3BvbnNlOmUsaG9zdDpsLHRyaWVzTGVmdDpyLmxlbmd0aH07cmV0dXJuIHUucHVzaCh0KSx0fSxwPXtvblN1Y2Nlc3M6ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKGUpe3RyeXtyZXR1cm4gSlNPTi5wYXJzZShlLmNvbnRlbnQpfWNhdGNoKHQpe3Rocm93IGZ1bmN0aW9uKGUsdCl7cmV0dXJue25hbWU6XCJEZXNlcmlhbGl6YXRpb25FcnJvclwiLG1lc3NhZ2U6ZSxyZXNwb25zZTp0fX0odC5tZXNzYWdlLGUpfX0oZSl9LG9uUmV0cnk6ZnVuY3Rpb24obil7dmFyIG89bShuKTtyZXR1cm4gbi5pc1RpbWVkT3V0JiZoKyssUHJvbWlzZS5hbGwoW2UubG9nZ2VyLmluZm8oXCJSZXRyeWFibGUgZmFpbHVyZVwiLHgobykpLGUuaG9zdHNDYWNoZS5zZXQobCxnKGwsbi5pc1RpbWVkT3V0P3k6dikpXSkudGhlbigoZnVuY3Rpb24oKXtyZXR1cm4gdChyLGEpfSkpfSxvbkZhaWw6ZnVuY3Rpb24oZSl7dGhyb3cgbShlKSxmdW5jdGlvbihlLHQpe3ZhciByPWUuY29udGVudCxuPWUuc3RhdHVzLG89cjt0cnl7bz1KU09OLnBhcnNlKHIpLm1lc3NhZ2V9Y2F0Y2goZSl7fXJldHVybiBmdW5jdGlvbihlLHQscil7cmV0dXJue25hbWU6XCJBcGlFcnJvclwiLG1lc3NhZ2U6ZSxzdGF0dXM6dCx0cmFuc3BvcnRlclN0YWNrVHJhY2U6cn19KG8sbix0KX0oZSxBKHUpKX19O3JldHVybiBlLnJlcXVlc3Rlci5zZW5kKGQpLnRoZW4oKGZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbihlLHQpe3JldHVybiBmdW5jdGlvbihlKXt2YXIgdD1lLnN0YXR1cztyZXR1cm4gZS5pc1RpbWVkT3V0fHxmdW5jdGlvbihlKXt2YXIgdD1lLmlzVGltZWRPdXQscj1lLnN0YXR1cztyZXR1cm4hdCYmMD09fn5yfShlKXx8MiE9fn4odC8xMDApJiY0IT1+fih0LzEwMCl9KGUpP3Qub25SZXRyeShlKToyPT1+fihlLnN0YXR1cy8xMDApP3Qub25TdWNjZXNzKGUpOnQub25GYWlsKGUpfShlLHApfSkpfTtyZXR1cm4gcShlLmhvc3RzQ2FjaGUsdCkudGhlbigoZnVuY3Rpb24oZSl7cmV0dXJuIGQoYShlLnN0YXRlbGVzc0hvc3RzKS5yZXZlcnNlKCksZS5nZXRUaW1lb3V0KX0pKX1mdW5jdGlvbiB3KGUpe3ZhciB0PXt2YWx1ZTpcIkFsZ29saWEgZm9yIEphdmFTY3JpcHQgKFwiLmNvbmNhdChlLFwiKVwiKSxhZGQ6ZnVuY3Rpb24oZSl7dmFyIHI9XCI7IFwiLmNvbmNhdChlLnNlZ21lbnQpLmNvbmNhdCh2b2lkIDAhPT1lLnZlcnNpb24/XCIgKFwiLmNvbmNhdChlLnZlcnNpb24sXCIpXCIpOlwiXCIpO3JldHVybi0xPT09dC52YWx1ZS5pbmRleE9mKHIpJiYodC52YWx1ZT1cIlwiLmNvbmNhdCh0LnZhbHVlKS5jb25jYXQocikpLHR9fTtyZXR1cm4gdH1mdW5jdGlvbiBTKGUsdCxyKXt2YXIgbj1UKHIpLG89XCJcIi5jb25jYXQoZS5wcm90b2NvbCxcIjovL1wiKS5jb25jYXQoZS51cmwsXCIvXCIpLmNvbmNhdChcIi9cIj09PXQuY2hhckF0KDApP3Quc3Vic3RyKDEpOnQpO3JldHVybiBuLmxlbmd0aCYmKG8rPVwiP1wiLmNvbmNhdChuKSksb31mdW5jdGlvbiBUKGUpe3JldHVybiBPYmplY3Qua2V5cyhlKS5tYXAoKGZ1bmN0aW9uKHQpe3JldHVybiBmKFwiJXM9JXNcIix0LChyPWVbdF0sXCJbb2JqZWN0IE9iamVjdF1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChyKXx8XCJbb2JqZWN0IEFycmF5XVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHIpP0pTT04uc3RyaW5naWZ5KGVbdF0pOmVbdF0pKTt2YXIgcn0pKS5qb2luKFwiJlwiKX1mdW5jdGlvbiBBKGUpe3JldHVybiBlLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuIHgoZSl9KSl9ZnVuY3Rpb24geChlKXt2YXIgdD1lLnJlcXVlc3QuaGVhZGVyc1tcIngtYWxnb2xpYS1hcGkta2V5XCJdP3tcIngtYWxnb2xpYS1hcGkta2V5XCI6XCIqKioqKlwifTp7fTtyZXR1cm4gcihyKHt9LGUpLHt9LHtyZXF1ZXN0OnIocih7fSxlLnJlcXVlc3QpLHt9LHtoZWFkZXJzOnIocih7fSxlLnJlcXVlc3QuaGVhZGVycyksdCl9KX0pfXZhciBOPWZ1bmN0aW9uKGUpe3ZhciB0PWUuYXBwSWQsbj1mdW5jdGlvbihlLHQscil7dmFyIG49e1wieC1hbGdvbGlhLWFwaS1rZXlcIjpyLFwieC1hbGdvbGlhLWFwcGxpY2F0aW9uLWlkXCI6dH07cmV0dXJue2hlYWRlcnM6ZnVuY3Rpb24oKXtyZXR1cm4gZT09PWguV2l0aGluSGVhZGVycz9uOnt9fSxxdWVyeVBhcmFtZXRlcnM6ZnVuY3Rpb24oKXtyZXR1cm4gZT09PWguV2l0aGluUXVlcnlQYXJhbWV0ZXJzP246e319fX0odm9pZCAwIT09ZS5hdXRoTW9kZT9lLmF1dGhNb2RlOmguV2l0aGluSGVhZGVycyx0LGUuYXBpS2V5KSxhPWZ1bmN0aW9uKGUpe3ZhciB0PWUuaG9zdHNDYWNoZSxyPWUubG9nZ2VyLG49ZS5yZXF1ZXN0ZXIsYT1lLnJlcXVlc3RzQ2FjaGUsdT1lLnJlc3BvbnNlc0NhY2hlLGk9ZS50aW1lb3V0cyxzPWUudXNlckFnZW50LGM9ZS5ob3N0cyxsPWUucXVlcnlQYXJhbWV0ZXJzLGY9e2hvc3RzQ2FjaGU6dCxsb2dnZXI6cixyZXF1ZXN0ZXI6bixyZXF1ZXN0c0NhY2hlOmEscmVzcG9uc2VzQ2FjaGU6dSx0aW1lb3V0czppLHVzZXJBZ2VudDpzLGhlYWRlcnM6ZS5oZWFkZXJzLHF1ZXJ5UGFyYW1ldGVyczpsLGhvc3RzOmMubWFwKChmdW5jdGlvbihlKXtyZXR1cm4gYihlKX0pKSxyZWFkOmZ1bmN0aW9uKGUsdCl7dmFyIHI9ZCh0LGYudGltZW91dHMucmVhZCksbj1mdW5jdGlvbigpe3JldHVybiBqKGYsZi5ob3N0cy5maWx0ZXIoKGZ1bmN0aW9uKGUpe3JldHVybiAwIT0oZS5hY2NlcHQmbS5SZWFkKX0pKSxlLHIpfTtpZighMCE9PSh2b2lkIDAhPT1yLmNhY2hlYWJsZT9yLmNhY2hlYWJsZTplLmNhY2hlYWJsZSkpcmV0dXJuIG4oKTt2YXIgYT17cmVxdWVzdDplLG1hcHBlZFJlcXVlc3RPcHRpb25zOnIsdHJhbnNwb3J0ZXI6e3F1ZXJ5UGFyYW1ldGVyczpmLnF1ZXJ5UGFyYW1ldGVycyxoZWFkZXJzOmYuaGVhZGVyc319O3JldHVybiBmLnJlc3BvbnNlc0NhY2hlLmdldChhLChmdW5jdGlvbigpe3JldHVybiBmLnJlcXVlc3RzQ2FjaGUuZ2V0KGEsKGZ1bmN0aW9uKCl7cmV0dXJuIGYucmVxdWVzdHNDYWNoZS5zZXQoYSxuKCkpLnRoZW4oKGZ1bmN0aW9uKGUpe3JldHVybiBQcm9taXNlLmFsbChbZi5yZXF1ZXN0c0NhY2hlLmRlbGV0ZShhKSxlXSl9KSwoZnVuY3Rpb24oZSl7cmV0dXJuIFByb21pc2UuYWxsKFtmLnJlcXVlc3RzQ2FjaGUuZGVsZXRlKGEpLFByb21pc2UucmVqZWN0KGUpXSl9KSkudGhlbigoZnVuY3Rpb24oZSl7dmFyIHQ9byhlLDIpO3RbMF07cmV0dXJuIHRbMV19KSl9KSl9KSx7bWlzczpmdW5jdGlvbihlKXtyZXR1cm4gZi5yZXNwb25zZXNDYWNoZS5zZXQoYSxlKX19KX0sd3JpdGU6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gaihmLGYuaG9zdHMuZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4gMCE9KGUuYWNjZXB0Jm0uV3JpdGUpfSkpLGUsZCh0LGYudGltZW91dHMud3JpdGUpKX19O3JldHVybiBmfShyKHIoe2hvc3RzOlt7dXJsOlwiXCIuY29uY2F0KHQsXCItZHNuLmFsZ29saWEubmV0XCIpLGFjY2VwdDptLlJlYWR9LHt1cmw6XCJcIi5jb25jYXQodCxcIi5hbGdvbGlhLm5ldFwiKSxhY2NlcHQ6bS5Xcml0ZX1dLmNvbmNhdChjKFt7dXJsOlwiXCIuY29uY2F0KHQsXCItMS5hbGdvbGlhbmV0LmNvbVwiKX0se3VybDpcIlwiLmNvbmNhdCh0LFwiLTIuYWxnb2xpYW5ldC5jb21cIil9LHt1cmw6XCJcIi5jb25jYXQodCxcIi0zLmFsZ29saWFuZXQuY29tXCIpfV0pKX0sZSkse30se2hlYWRlcnM6cihyKHIoe30sbi5oZWFkZXJzKCkpLHtcImNvbnRlbnQtdHlwZVwiOlwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCJ9KSxlLmhlYWRlcnMpLHF1ZXJ5UGFyYW1ldGVyczpyKHIoe30sbi5xdWVyeVBhcmFtZXRlcnMoKSksZS5xdWVyeVBhcmFtZXRlcnMpfSkpO3JldHVybiBsKHt0cmFuc3BvcnRlcjphLGFwcElkOnQsYWRkQWxnb2xpYUFnZW50OmZ1bmN0aW9uKGUsdCl7YS51c2VyQWdlbnQuYWRkKHtzZWdtZW50OmUsdmVyc2lvbjp0fSl9LGNsZWFyQ2FjaGU6ZnVuY3Rpb24oKXtyZXR1cm4gUHJvbWlzZS5hbGwoW2EucmVxdWVzdHNDYWNoZS5jbGVhcigpLGEucmVzcG9uc2VzQ2FjaGUuY2xlYXIoKV0pLnRoZW4oKGZ1bmN0aW9uKCl7fSkpfX0sZS5tZXRob2RzKX0sQz1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24odCl7dmFyIHI9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnt9LG49e3RyYW5zcG9ydGVyOmUudHJhbnNwb3J0ZXIsYXBwSWQ6ZS5hcHBJZCxpbmRleE5hbWU6dH07cmV0dXJuIGwobixyLm1ldGhvZHMpfX0saz1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24odCxuKXt2YXIgbz10Lm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuIHIocih7fSxlKSx7fSx7cGFyYW1zOlQoZS5wYXJhbXN8fHt9KX0pfSkpO3JldHVybiBlLnRyYW5zcG9ydGVyLnJlYWQoe21ldGhvZDpQLHBhdGg6XCIxL2luZGV4ZXMvKi9xdWVyaWVzXCIsZGF0YTp7cmVxdWVzdHM6b30sY2FjaGVhYmxlOiEwfSxuKX19LEo9ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKHQsbyl7cmV0dXJuIFByb21pc2UuYWxsKHQubWFwKChmdW5jdGlvbih0KXt2YXIgYT10LnBhcmFtcyx1PWEuZmFjZXROYW1lLGk9YS5mYWNldFF1ZXJ5LHM9bihhLFtcImZhY2V0TmFtZVwiLFwiZmFjZXRRdWVyeVwiXSk7cmV0dXJuIEMoZSkodC5pbmRleE5hbWUse21ldGhvZHM6e3NlYXJjaEZvckZhY2V0VmFsdWVzOkZ9fSkuc2VhcmNoRm9yRmFjZXRWYWx1ZXModSxpLHIocih7fSxvKSxzKSl9KSkpfX0sRT1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24odCxyLG4pe3JldHVybiBlLnRyYW5zcG9ydGVyLnJlYWQoe21ldGhvZDpQLHBhdGg6ZihcIjEvYW5zd2Vycy8lcy9wcmVkaWN0aW9uXCIsZS5pbmRleE5hbWUpLGRhdGE6e3F1ZXJ5OnQscXVlcnlMYW5ndWFnZXM6cn0sY2FjaGVhYmxlOiEwfSxuKX19LEk9ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKHQscil7cmV0dXJuIGUudHJhbnNwb3J0ZXIucmVhZCh7bWV0aG9kOlAscGF0aDpmKFwiMS9pbmRleGVzLyVzL3F1ZXJ5XCIsZS5pbmRleE5hbWUpLGRhdGE6e3F1ZXJ5OnR9LGNhY2hlYWJsZTohMH0scil9fSxGPWZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbih0LHIsbil7cmV0dXJuIGUudHJhbnNwb3J0ZXIucmVhZCh7bWV0aG9kOlAscGF0aDpmKFwiMS9pbmRleGVzLyVzL2ZhY2V0cy8lcy9xdWVyeVwiLGUuaW5kZXhOYW1lLHQpLGRhdGE6e2ZhY2V0UXVlcnk6cn0sY2FjaGVhYmxlOiEwfSxuKX19LFI9MSxEPTIsVz0zO2Z1bmN0aW9uIEgoZSx0LG4pe3ZhciBvLGE9e2FwcElkOmUsYXBpS2V5OnQsdGltZW91dHM6e2Nvbm5lY3Q6MSxyZWFkOjIsd3JpdGU6MzB9LHJlcXVlc3Rlcjp7c2VuZDpmdW5jdGlvbihlKXtyZXR1cm4gbmV3IFByb21pc2UoKGZ1bmN0aW9uKHQpe3ZhciByPW5ldyBYTUxIdHRwUmVxdWVzdDtyLm9wZW4oZS5tZXRob2QsZS51cmwsITApLE9iamVjdC5rZXlzKGUuaGVhZGVycykuZm9yRWFjaCgoZnVuY3Rpb24odCl7cmV0dXJuIHIuc2V0UmVxdWVzdEhlYWRlcih0LGUuaGVhZGVyc1t0XSl9KSk7dmFyIG4sbz1mdW5jdGlvbihlLG4pe3JldHVybiBzZXRUaW1lb3V0KChmdW5jdGlvbigpe3IuYWJvcnQoKSx0KHtzdGF0dXM6MCxjb250ZW50Om4saXNUaW1lZE91dDohMH0pfSksMWUzKmUpfSxhPW8oZS5jb25uZWN0VGltZW91dCxcIkNvbm5lY3Rpb24gdGltZW91dFwiKTtyLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe3IucmVhZHlTdGF0ZT5yLk9QRU5FRCYmdm9pZCAwPT09biYmKGNsZWFyVGltZW91dChhKSxuPW8oZS5yZXNwb25zZVRpbWVvdXQsXCJTb2NrZXQgdGltZW91dFwiKSl9LHIub25lcnJvcj1mdW5jdGlvbigpezA9PT1yLnN0YXR1cyYmKGNsZWFyVGltZW91dChhKSxjbGVhclRpbWVvdXQobiksdCh7Y29udGVudDpyLnJlc3BvbnNlVGV4dHx8XCJOZXR3b3JrIHJlcXVlc3QgZmFpbGVkXCIsc3RhdHVzOnIuc3RhdHVzLGlzVGltZWRPdXQ6ITF9KSl9LHIub25sb2FkPWZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KGEpLGNsZWFyVGltZW91dChuKSx0KHtjb250ZW50OnIucmVzcG9uc2VUZXh0LHN0YXR1czpyLnN0YXR1cyxpc1RpbWVkT3V0OiExfSl9LHIuc2VuZChlLmRhdGEpfSkpfX0sbG9nZ2VyOihvPVcse2RlYnVnOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIFI+PW8mJmNvbnNvbGUuZGVidWcoZSx0KSxQcm9taXNlLnJlc29sdmUoKX0saW5mbzpmdW5jdGlvbihlLHQpe3JldHVybiBEPj1vJiZjb25zb2xlLmluZm8oZSx0KSxQcm9taXNlLnJlc29sdmUoKX0sZXJyb3I6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gY29uc29sZS5lcnJvcihlLHQpLFByb21pc2UucmVzb2x2ZSgpfX0pLHJlc3BvbnNlc0NhY2hlOnMoKSxyZXF1ZXN0c0NhY2hlOnMoe3NlcmlhbGl6YWJsZTohMX0pLGhvc3RzQ2FjaGU6aSh7Y2FjaGVzOlt1KHtrZXk6XCJcIi5jb25jYXQoXCI0LjkuMVwiLFwiLVwiKS5jb25jYXQoZSl9KSxzKCldfSksdXNlckFnZW50OncoXCI0LjkuMVwiKS5hZGQoe3NlZ21lbnQ6XCJCcm93c2VyXCIsdmVyc2lvbjpcImxpdGVcIn0pLGF1dGhNb2RlOmguV2l0aGluUXVlcnlQYXJhbWV0ZXJzfTtyZXR1cm4gTihyKHIocih7fSxhKSxuKSx7fSx7bWV0aG9kczp7c2VhcmNoOmssc2VhcmNoRm9yRmFjZXRWYWx1ZXM6SixtdWx0aXBsZVF1ZXJpZXM6ayxtdWx0aXBsZVNlYXJjaEZvckZhY2V0VmFsdWVzOkosaW5pdEluZGV4OmZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gQyhlKSh0LHttZXRob2RzOntzZWFyY2g6SSxzZWFyY2hGb3JGYWNldFZhbHVlczpGLGZpbmRBbnN3ZXJzOkV9fSl9fX19KSl9cmV0dXJuIEgudmVyc2lvbj1cIjQuOS4xXCIsSH0pKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=