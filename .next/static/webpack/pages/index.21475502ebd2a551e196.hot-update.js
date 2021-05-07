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
          children: "test2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 17
        }, this), this.state.list.map(function (row, i) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: row.author_name
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 21
          }, _this3);
        })]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0FsZ29saWEvQXBwLmpzIl0sIm5hbWVzIjpbImNsaWVudCIsImFsZ29saWFzZWFyY2giLCJpbmRleCIsImluaXRJbmRleCIsIkFwcCIsInByb3BzIiwic3RhdGUiLCJsaXN0IiwiaGFuZGxlU2VhcmNoIiwiYmluZCIsImhhbmRsZUFycmFuZ2VEYXRlIiwiY29uc29sZSIsImxvZyIsInNlYXJjaCIsImlucHV0VmFsdWUiLCJ0aGVuIiwiaGl0cyIsInNldFN0YXRlIiwiZXJyIiwiZGF0YSIsIm1hcCIsInJvdyIsImkiLCJhdXRob3JfbmFtZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHQyx5REFBYSxDQUN4QixZQUR3QixFQUV4QixrQ0FGd0IsQ0FBNUI7QUFLQSxJQUFNQyxLQUFLLEdBQUdGLE1BQU0sQ0FBQ0csU0FBUCxDQUFpQiw0QkFBakIsQ0FBZDs7SUFFTUMsRzs7Ozs7QUFDRixlQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUE7O0FBQ2QsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsVUFBSSxFQUFDO0FBREksS0FBYjtBQUlBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIseUdBQXBCO0FBQ0EsVUFBS0MsaUJBQUwsR0FBeUIsTUFBS0EsaUJBQUwsQ0FBdUJELElBQXZCLHlHQUF6QjtBQVBjO0FBUWpCOzs7O21DQUVjO0FBQUE7O0FBQ1hFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLEdBQVo7QUFDQVYsV0FBSyxDQUNKVyxNQURELENBQ1EsS0FBS1IsS0FBTCxDQUFXUyxVQURuQixFQUVDQyxJQUZELENBRU0sZ0JBQWM7QUFBQSxZQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDaEJMLGVBQU8sQ0FBQ0MsR0FBUixDQUFZSSxJQUFaLEVBQWtCLEdBQWxCOztBQUNBLGNBQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQUNWLGNBQUksRUFBRVM7QUFBUCxTQUFkO0FBQ0gsT0FMRCxXQU1PLFVBQUFFLEdBQUcsRUFBSTtBQUNWUCxlQUFPLENBQUNDLEdBQVIsQ0FBWU0sR0FBWixFQUFpQixHQUFqQjtBQUNILE9BUkQ7QUFTSDs7O3NDQUVpQkMsSSxFQUFNLENBRXZCOzs7NkJBRVE7QUFBQTs7QUFBQSxVQUdETCxVQUhDLEdBSUQsS0FBS1QsS0FKSixDQUdEUyxVQUhDO0FBTUwsMEJBQ0kscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsZ0NBQ0k7QUFBQSxvQkFBTUE7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBUSxpQkFBTyxFQUFFLEtBQUtOLFlBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBR0k7QUFBUSxpQkFBTyxFQUFFLG1CQUFJO0FBQUNHLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFJLENBQUNOLEtBQUwsQ0FBV0MsSUFBdkIsRUFBNkIsR0FBN0I7QUFBa0MsV0FBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEosRUFJSyxLQUFLRCxLQUFMLENBQVdDLElBQVgsQ0FBZ0JhLEdBQWhCLENBQW9CLFVBQUNDLEdBQUQsRUFBTUMsQ0FBTjtBQUFBLDhCQUNqQjtBQUFBLHNCQUFjRCxHQUFHLENBQUNFO0FBQWxCLGFBQVVELENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFEaUI7QUFBQSxTQUFwQixDQUpMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBVUg7Ozs7RUE1Q2FFLDRDQUFLLENBQUNDLFM7O0FBZ0RUckIsa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjE0NzU1MDJlYmQyYTU1MWUxOTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGFsZ29saWFzZWFyY2ggZnJvbSAnYWxnb2xpYXNlYXJjaC9saXRlJztcclxuXHJcbmNvbnN0IGNsaWVudCA9IGFsZ29saWFzZWFyY2goXHJcbiAgICAnWElNUk5WSkxRNycsXHJcbiAgICAnYzczMTI3ZmRkM2FmMTEzNjUwYmQ5Yjg4ZWVjMzc3YjUnXHJcbik7XHJcblxyXG5jb25zdCBpbmRleCA9IGNsaWVudC5pbml0SW5kZXgoJ0NvbW11bml0eV9hcnRpY2xlc19zdGFnaW5nJyk7XHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBsaXN0OltdXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZVNlYXJjaCA9IHRoaXMuaGFuZGxlU2VhcmNoLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVBcnJhbmdlRGF0ZSA9IHRoaXMuaGFuZGxlQXJyYW5nZURhdGUuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTZWFyY2goKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coOTk5KTtcclxuICAgICAgICBpbmRleFxyXG4gICAgICAgIC5zZWFyY2godGhpcy5wcm9wcy5pbnB1dFZhbHVlKVxyXG4gICAgICAgIC50aGVuKCh7IGhpdHMgfSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhoaXRzLCA4ODgpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsaXN0OiBoaXRzfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIsIDc3Nyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQXJyYW5nZURhdGUoZGF0YSkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgaW5wdXRWYWx1ZVxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxkaXY+e2lucHV0VmFsdWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2VhcmNofT50ZXN0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT57Y29uc29sZS5sb2codGhpcy5zdGF0ZS5saXN0LCA2NjYpfX0+dGVzdDI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxpc3QubWFwKChyb3csIGkpID0+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfT57cm93LmF1dGhvcl9uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9