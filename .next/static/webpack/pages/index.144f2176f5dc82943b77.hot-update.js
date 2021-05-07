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
        }, this), this.state.hits.map(function (row, index) {
          /*#__PURE__*/
          Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: row.author_name
          }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0FsZ29saWEvQXBwLmpzIl0sIm5hbWVzIjpbImNsaWVudCIsImFsZ29saWFzZWFyY2giLCJpbmRleCIsImluaXRJbmRleCIsIkFwcCIsInByb3BzIiwic3RhdGUiLCJsaXN0IiwiaGFuZGxlU2VhcmNoIiwiYmluZCIsImhhbmRsZUFycmFuZ2VEYXRlIiwiY29uc29sZSIsImxvZyIsInNlYXJjaCIsImlucHV0VmFsdWUiLCJ0aGVuIiwiaGl0cyIsInNldFN0YXRlIiwiZXJyIiwiZGF0YSIsIm1hcCIsInJvdyIsImF1dGhvcl9uYW1lIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLHlEQUFhLENBQ3hCLFlBRHdCLEVBRXhCLGtDQUZ3QixDQUE1QjtBQUtBLElBQU1DLEtBQUssR0FBR0YsTUFBTSxDQUFDRyxTQUFQLENBQWlCLDRCQUFqQixDQUFkOztJQUVNQyxHOzs7OztBQUNGLGVBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQTs7QUFDZCw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxVQUFJLEVBQUM7QUFESSxLQUFiO0FBSUEsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQix5R0FBcEI7QUFDQSxVQUFLQyxpQkFBTCxHQUF5QixNQUFLQSxpQkFBTCxDQUF1QkQsSUFBdkIseUdBQXpCO0FBUGM7QUFRakI7Ozs7bUNBRWM7QUFBQTs7QUFDWEUsYUFBTyxDQUFDQyxHQUFSLENBQVksR0FBWjtBQUNBVixXQUFLLENBQ0pXLE1BREQsQ0FDUSxLQUFLUixLQUFMLENBQVdTLFVBRG5CLEVBRUNDLElBRkQsQ0FFTSxnQkFBYztBQUFBLFlBQVhDLElBQVcsUUFBWEEsSUFBVztBQUNoQkwsZUFBTyxDQUFDQyxHQUFSLENBQVlJLElBQVosRUFBa0IsR0FBbEI7O0FBQ0EsY0FBSSxDQUFDQyxRQUFMLENBQWM7QUFBQ1YsY0FBSSxFQUFFUztBQUFQLFNBQWQ7QUFDSCxPQUxELFdBTU8sVUFBQUUsR0FBRyxFQUFJO0FBQ1ZQLGVBQU8sQ0FBQ0MsR0FBUixDQUFZTSxHQUFaLEVBQWlCLEdBQWpCO0FBQ0gsT0FSRDtBQVNIOzs7c0NBRWlCQyxJLEVBQU0sQ0FFdkI7Ozs2QkFFUTtBQUFBOztBQUFBLFVBR0RMLFVBSEMsR0FJRCxLQUFLVCxLQUpKLENBR0RTLFVBSEM7QUFNTCwwQkFDSSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSxnQ0FDSTtBQUFBLG9CQUFNQTtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFRLGlCQUFPLEVBQUUsS0FBS04sWUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosZUFHSTtBQUFRLGlCQUFPLEVBQUUsbUJBQUk7QUFBQ0csbUJBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQUksQ0FBQ04sS0FBTCxDQUFXQyxJQUF2QixFQUE2QixHQUE3QjtBQUFrQyxXQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISixFQUlLLEtBQUtELEtBQUwsQ0FBV1UsSUFBWCxDQUFnQkksR0FBaEIsQ0FBb0IsVUFBQ0MsR0FBRCxFQUFNbkIsS0FBTixFQUFnQjtBQUNqQztBQUFBO0FBQUEsc0JBQU1tQixHQUFHLENBQUNDO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNILFNBRkEsQ0FKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQVVIOzs7O0VBNUNhQyw0Q0FBSyxDQUFDQyxTOztBQWdEVHBCLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjE0NGYyMTc2ZjVkYzgyOTQzYjc3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBhbGdvbGlhc2VhcmNoIGZyb20gJ2FsZ29saWFzZWFyY2gvbGl0ZSc7XHJcblxyXG5jb25zdCBjbGllbnQgPSBhbGdvbGlhc2VhcmNoKFxyXG4gICAgJ1hJTVJOVkpMUTcnLFxyXG4gICAgJ2M3MzEyN2ZkZDNhZjExMzY1MGJkOWI4OGVlYzM3N2I1J1xyXG4pO1xyXG5cclxuY29uc3QgaW5kZXggPSBjbGllbnQuaW5pdEluZGV4KCdDb21tdW5pdHlfYXJ0aWNsZXNfc3RhZ2luZycpO1xyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbGlzdDpbXVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVTZWFyY2ggPSB0aGlzLmhhbmRsZVNlYXJjaC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQXJyYW5nZURhdGUgPSB0aGlzLmhhbmRsZUFycmFuZ2VEYXRlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2VhcmNoKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKDk5OSk7XHJcbiAgICAgICAgaW5kZXhcclxuICAgICAgICAuc2VhcmNoKHRoaXMucHJvcHMuaW5wdXRWYWx1ZSlcclxuICAgICAgICAudGhlbigoeyBoaXRzIH0pID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coaGl0cywgODg4KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bGlzdDogaGl0c30pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLCA3NzcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUFycmFuZ2VEYXRlKGRhdGEpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGlucHV0VmFsdWVcclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PntpbnB1dFZhbHVlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNlYXJjaH0+dGVzdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+e2NvbnNvbGUubG9nKHRoaXMuc3RhdGUubGlzdCwgNjY2KX19PnRlc3QyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5oaXRzLm1hcCgocm93LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+e3Jvdy5hdXRob3JfbmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=