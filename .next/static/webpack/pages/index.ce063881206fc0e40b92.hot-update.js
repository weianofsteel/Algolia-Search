webpackHotUpdate_N_E("pages/index",{

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
    _this.state = {
      list: []
    };
    _this.handleSearch = _this.handleSearch.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.handleArrangeDate = _this.handleArrangeDate.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(App, [{
    key: "handleSearch",
    value: function handleSearch() {
      var _this2 = this;

      console.log(999);
      index.search(this.props.inputValue).then(function (_ref) {
        var hits = _ref.hits;
        console.log(hits, 888);

        _this2.setState({
          list: hits
        });
      })["catch"](function (err) {
        console.log(err, 777);
      });
    }
  }, {
    key: "handleArrangeDate",
    value: function handleArrangeDate(data) {}
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var inputValue = this.props.inputValue;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: inputValue
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: this.handleSearch,
          children: "test"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: function onClick() {
            console.log(_this3.state.list, 666);
          },
          children: "test"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0FsZ29saWEvQXBwLmpzIl0sIm5hbWVzIjpbImNsaWVudCIsImFsZ29saWFzZWFyY2giLCJpbmRleCIsImluaXRJbmRleCIsIkFwcCIsInByb3BzIiwic3RhdGUiLCJsaXN0IiwiaGFuZGxlU2VhcmNoIiwiYmluZCIsImhhbmRsZUFycmFuZ2VEYXRlIiwiY29uc29sZSIsImxvZyIsInNlYXJjaCIsImlucHV0VmFsdWUiLCJ0aGVuIiwiaGl0cyIsInNldFN0YXRlIiwiZXJyIiwiZGF0YSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHQyx5REFBYSxDQUN4QixZQUR3QixFQUV4QixrQ0FGd0IsQ0FBNUI7QUFLQSxJQUFNQyxLQUFLLEdBQUdGLE1BQU0sQ0FBQ0csU0FBUCxDQUFpQiw0QkFBakIsQ0FBZDs7SUFFTUMsRzs7Ozs7QUFDRixlQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUE7O0FBQ2QsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsVUFBSSxFQUFDO0FBREksS0FBYjtBQUlBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIseUdBQXBCO0FBQ0EsVUFBS0MsaUJBQUwsR0FBeUIsTUFBS0EsaUJBQUwsQ0FBdUJELElBQXZCLHlHQUF6QjtBQVBjO0FBUWpCOzs7O21DQUVjO0FBQUE7O0FBQ1hFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLEdBQVo7QUFDQVYsV0FBSyxDQUNKVyxNQURELENBQ1EsS0FBS1IsS0FBTCxDQUFXUyxVQURuQixFQUVDQyxJQUZELENBRU0sZ0JBQWM7QUFBQSxZQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDaEJMLGVBQU8sQ0FBQ0MsR0FBUixDQUFZSSxJQUFaLEVBQWtCLEdBQWxCOztBQUNBLGNBQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQUNWLGNBQUksRUFBRVM7QUFBUCxTQUFkO0FBQ0gsT0FMRCxXQU1PLFVBQUFFLEdBQUcsRUFBSTtBQUNWUCxlQUFPLENBQUNDLEdBQVIsQ0FBWU0sR0FBWixFQUFpQixHQUFqQjtBQUNILE9BUkQ7QUFTSDs7O3NDQUVpQkMsSSxFQUFNLENBRXZCOzs7NkJBRVE7QUFBQTs7QUFBQSxVQUdETCxVQUhDLEdBSUQsS0FBS1QsS0FKSixDQUdEUyxVQUhDO0FBTUwsMEJBQ0kscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsZ0NBQ0k7QUFBQSxvQkFBTUE7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBUSxpQkFBTyxFQUFFLEtBQUtOLFlBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBR0k7QUFBUSxpQkFBTyxFQUFFLG1CQUFJO0FBQUNHLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFJLENBQUNOLEtBQUwsQ0FBV0MsSUFBdkIsRUFBNkIsR0FBN0I7QUFBa0MsV0FBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUFPSDs7OztFQXpDYWEsNENBQUssQ0FBQ0MsUzs7QUE2Q1RqQixrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jZTA2Mzg4MTIwNmZjMGU0MGI5Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYWxnb2xpYXNlYXJjaCBmcm9tICdhbGdvbGlhc2VhcmNoL2xpdGUnO1xyXG5cclxuY29uc3QgY2xpZW50ID0gYWxnb2xpYXNlYXJjaChcclxuICAgICdYSU1STlZKTFE3JyxcclxuICAgICdjNzMxMjdmZGQzYWYxMTM2NTBiZDliODhlZWMzNzdiNSdcclxuKTtcclxuXHJcbmNvbnN0IGluZGV4ID0gY2xpZW50LmluaXRJbmRleCgnQ29tbXVuaXR5X2FydGljbGVzX3N0YWdpbmcnKTtcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGxpc3Q6W11cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlU2VhcmNoID0gdGhpcy5oYW5kbGVTZWFyY2guYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUFycmFuZ2VEYXRlID0gdGhpcy5oYW5kbGVBcnJhbmdlRGF0ZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNlYXJjaCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyg5OTkpO1xyXG4gICAgICAgIGluZGV4XHJcbiAgICAgICAgLnNlYXJjaCh0aGlzLnByb3BzLmlucHV0VmFsdWUpXHJcbiAgICAgICAgLnRoZW4oKHsgaGl0cyB9KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGhpdHMsIDg4OCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xpc3Q6IGhpdHN9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyciwgNzc3KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVBcnJhbmdlRGF0ZShkYXRhKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBpbnB1dFZhbHVlXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPGRpdj57aW5wdXRWYWx1ZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVTZWFyY2h9PnRlc3Q8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9Pntjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmxpc3QsIDY2Nil9fT50ZXN0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==