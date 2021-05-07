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
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! algoliasearch/lite */ "./node_modules/algoliasearch/dist/algoliasearch-lite.umd.js");
/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(algoliasearch_lite__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_App_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../css/App.module.css */ "./css/App.module.css");
/* harmony import */ var _css_App_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_App_module_css__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "C:\\Users\\USER\\Desktop\\React-instantsearch\\component\\Algolia\\App.js",
    _this = undefined,
    _s = $RefreshSig$();





var App = function App(props) {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(''),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      summaryOpen = _React$useState2[0],
      setSummaryOpen = _React$useState2[1];

  var list = props.list;

  var handleSummaryOpen = function handleSummaryOpen(i) {
    setSummaryOpen(i);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    children: list.map(function (row, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listBlock,
        onClick: function onClick() {
          handleSummaryOpen(i);
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.title,
          children: row.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.author,
          children: 'By ' + row.author_name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
        }, _this), summaryOpen === i && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.summaryBlock,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.summary,
            children: 'By' + row.summary
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 25
        }, _this)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, _this);
};

_s(App, "/knGFb8U8bLquP59Qf48Hrk40mY=");

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

$RefreshReg$(_c, "App");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0FsZ29saWEvQXBwLmpzIl0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInN1bW1hcnlPcGVuIiwic2V0U3VtbWFyeU9wZW4iLCJsaXN0IiwiaGFuZGxlU3VtbWFyeU9wZW4iLCJpIiwibWFwIiwicm93Iiwic3R5bGVzIiwibGlzdEJsb2NrIiwidGl0bGUiLCJhdXRob3IiLCJhdXRob3JfbmFtZSIsInN1bW1hcnlCbG9jayIsInN1bW1hcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSx3QkFFc0JDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBRnRCO0FBQUE7QUFBQSxNQUVYQyxXQUZXO0FBQUEsTUFFR0MsY0FGSDs7QUFBQSxNQUtmQyxJQUxlLEdBTWZMLEtBTmUsQ0FLZkssSUFMZTs7QUFRbkIsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxDQUFELEVBQU87QUFDN0JILGtCQUFjLENBQUNHLENBQUQsQ0FBZDtBQUNILEdBRkQ7O0FBSUEsc0JBQ0kscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsY0FDS0YsSUFBSSxDQUFDRyxHQUFMLENBQVMsVUFBQ0MsR0FBRCxFQUFNRixDQUFOO0FBQUEsMEJBRU47QUFBYSxpQkFBUyxFQUFFRywwREFBTSxDQUFDQyxTQUEvQjtBQUEwQyxlQUFPLEVBQUUsbUJBQUk7QUFBQ0wsMkJBQWlCLENBQUNDLENBQUQsQ0FBakI7QUFBcUIsU0FBN0U7QUFBQSxnQ0FDSTtBQUFNLG1CQUFTLEVBQUVHLDBEQUFNLENBQUNFLEtBQXhCO0FBQUEsb0JBQWdDSCxHQUFHLENBQUNHO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLGVBR0k7QUFBTSxtQkFBUyxFQUFFRiwwREFBTSxDQUFDRyxNQUF4QjtBQUFBLG9CQUFpQyxRQUFRSixHQUFHLENBQUNLO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEosRUFJS1gsV0FBVyxLQUFLSSxDQUFoQixpQkFDRztBQUFLLG1CQUFTLEVBQUVHLDBEQUFNLENBQUNLLFlBQXZCO0FBQUEsaUNBQ0k7QUFBTSxxQkFBUyxFQUFFTCwwREFBTSxDQUFDTSxPQUF4QjtBQUFBLHNCQUFrQyxPQUFPUCxHQUFHLENBQUNPO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxSO0FBQUEsU0FBVVQsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRk07QUFBQSxLQUFUO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBaUJILENBN0JEOztHQUFNUixHOztLQUFBQSxHO0FBK0JTQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44MjRmZjJhODhmMTA2M2JkNmM1Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYWxnb2xpYXNlYXJjaCBmcm9tICdhbGdvbGlhc2VhcmNoL2xpdGUnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL2Nzcy9BcHAubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IEFwcCA9IChwcm9wcykgPT4geyAgICBcclxuXHJcbiAgICBjb25zdCBbIHN1bW1hcnlPcGVuICwgc2V0U3VtbWFyeU9wZW4gXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuICAgIFxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGxpc3QgXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VtbWFyeU9wZW4gPSAoaSkgPT4ge1xyXG4gICAgICAgIHNldFN1bW1hcnlPcGVuKGkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIHtsaXN0Lm1hcCgocm93LCBpKSA9PiBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9e3N0eWxlcy5saXN0QmxvY2t9IG9uQ2xpY2s9eygpPT57aGFuZGxlU3VtbWFyeU9wZW4oaSl9fT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e3Jvdy50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5hdXRob3J9PnsnQnkgJyArIHJvdy5hdXRob3JfbmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAge3N1bW1hcnlPcGVuID09PSBpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3VtbWFyeUJsb2NrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnN1bW1hcnl9PnsnQnknICsgcm93LnN1bW1hcnl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=