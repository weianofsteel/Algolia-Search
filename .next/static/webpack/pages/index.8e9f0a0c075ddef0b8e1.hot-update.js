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
/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! algoliasearch/lite */ "./node_modules/algoliasearch/dist/algoliasearch-lite.umd.js");
/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(algoliasearch_lite__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = "C:\\Users\\USER\\Desktop\\React-instantsearch\\component\\Algolia\\Algolia.js",
    _this = undefined,
    _s = $RefreshSig$();





var client = algoliasearch_lite__WEBPACK_IMPORTED_MODULE_5___default()('XIMRNVJLQ7', 'c73127fdd3af113650bd9b88eec377b5');
var index = client.initIndex('Community_articles_staging');

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

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([]),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
      list = _React$useState6[0],
      setList = _React$useState6[1];

  var handleChange = function handleChange(e) {
    setInputValue(e.target.value);

    if (e.target.value) {
      index.search(e.target.value, {
        // page: 1,
        hitsPerPage: 1000
      }).then(function (_ref) {
        var hits = _ref.hits;
        console.log(hits, 888);
        setList(hits);
      })["catch"](function (err) {
        console.log(err, 777);
      });
    } else {
      setList([]);
    }
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
            lineNumber: 56,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_App__WEBPACK_IMPORTED_MODULE_4__["default"], {
        inputValue: inputValue,
        list: list
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 9
  }, _this);
};

_s(Algolia, "l5P+RUNhE5HUmhEet0No8JSoYIo=");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0FsZ29saWEvQWxnb2xpYS5qcyJdLCJuYW1lcyI6WyJjbGllbnQiLCJhbGdvbGlhc2VhcmNoIiwiaW5kZXgiLCJpbml0SW5kZXgiLCJBbGdvbGlhIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwiaW5wdXRFcnJvciIsInNldElucHV0RXJyb3IiLCJsaXN0Iiwic2V0TGlzdCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlYXJjaCIsImhpdHNQZXJQYWdlIiwidGhlbiIsImhpdHMiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwic3R5bGVzIiwib3V0ZXJCbG9jayIsImJsb2NrIiwiaW5wdXRCYWNrZ3JvdW5kIiwiaW5wdXQiLCJLZXlib2FyZEV2ZW50IiwiY29kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHQyx5REFBYSxDQUN4QixZQUR3QixFQUV4QixrQ0FGd0IsQ0FBNUI7QUFLQSxJQUFNQyxLQUFLLEdBQUdGLE1BQU0sQ0FBQ0csU0FBUCxDQUFpQiw0QkFBakIsQ0FBZDs7QUFFQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQUEsd0JBRWtCQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUZsQjtBQUFBO0FBQUEsTUFFWEMsVUFGVztBQUFBLE1BRUNDLGFBRkQ7O0FBQUEseUJBR2tCSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUhsQjtBQUFBO0FBQUEsTUFHWEcsVUFIVztBQUFBLE1BR0NDLGFBSEQ7O0FBQUEseUJBSU9MLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBSlA7QUFBQTtBQUFBLE1BSVhLLElBSlc7QUFBQSxNQUlKQyxPQUpJOztBQU1sQixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQU87QUFFeEJOLGlCQUFhLENBQUNNLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWI7O0FBRUEsUUFBR0YsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVosRUFBa0I7QUFFZGQsV0FBSyxDQUNKZSxNQURELENBQ1FILENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQURqQixFQUN3QjtBQUNwQjtBQUNBRSxtQkFBVyxFQUFFO0FBRk8sT0FEeEIsRUFLQ0MsSUFMRCxDQUtNLGdCQUFjO0FBQUEsWUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ2hCQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWixFQUFrQixHQUFsQjtBQUNBUixlQUFPLENBQUNRLElBQUQsQ0FBUDtBQUNILE9BUkQsV0FTTyxVQUFBRyxHQUFHLEVBQUk7QUFDVkYsZUFBTyxDQUFDQyxHQUFSLENBQVlDLEdBQVosRUFBaUIsR0FBakI7QUFDSCxPQVhEO0FBWUgsS0FkRCxNQWNNO0FBQ0ZYLGFBQU8sQ0FBQyxFQUFELENBQVA7QUFDSDtBQUNKLEdBckJEOztBQXVCQSxzQkFDSSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBRVksMERBQU0sQ0FBQ0MsVUFBdkI7QUFBQSw4QkFFSTtBQUFLLGlCQUFTLEVBQUVELDBEQUFNLENBQUNFLEtBQXZCO0FBQUEsK0JBUUk7QUFBSyxtQkFBUyxFQUFFRiwwREFBTSxDQUFDRyxlQUF2QjtBQUFBLGlDQUVJO0FBQ0ksZ0JBQUksRUFBQyxNQURUO0FBRUksaUJBQUssRUFBRXBCLFVBRlg7QUFHSSxxQkFBUyxFQUFFaUIsMERBQU0sQ0FBQ0ksS0FIdEI7QUFJSSxvQkFBUSxFQUFFZixZQUpkO0FBS0kscUJBQVMsRUFBRSxxQkFBSTtBQUNYLGtCQUFHZ0IsYUFBYSxDQUFDQyxJQUFkLElBQXNCLE9BQXRCLElBQWlDLENBQUN2QixVQUFyQyxFQUFnRDtBQUM1Q0csNkJBQWEsQ0FBQyxTQUFELENBQWI7QUFDSDtBQUNKLGFBVEwsQ0FVSTtBQUNBO0FBQ0E7O0FBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUE4QkkscUVBQUMsNENBQUQ7QUFDSSxrQkFBVSxFQUFFSCxVQURoQjtBQUVJLFlBQUksRUFBRUk7QUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBOUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXVDSCxDQXBFRDs7R0FBTVAsTzs7S0FBQUEsTztBQXNFU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGU5ZjBhMGMwNzVkZGVmMGI4ZTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9jc3MvQXBwLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXHJcbmltcG9ydCBhbGdvbGlhc2VhcmNoIGZyb20gJ2FsZ29saWFzZWFyY2gvbGl0ZSc7XHJcblxyXG5jb25zdCBjbGllbnQgPSBhbGdvbGlhc2VhcmNoKFxyXG4gICAgJ1hJTVJOVkpMUTcnLFxyXG4gICAgJ2M3MzEyN2ZkZDNhZjExMzY1MGJkOWI4OGVlYzM3N2I1J1xyXG4pO1xyXG5cclxuY29uc3QgaW5kZXggPSBjbGllbnQuaW5pdEluZGV4KCdDb21tdW5pdHlfYXJ0aWNsZXNfc3RhZ2luZycpO1xyXG5cclxuY29uc3QgQWxnb2xpYSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbaW5wdXRFcnJvciwgc2V0SW5wdXRFcnJvcl0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbGlzdCAsIHNldExpc3RdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoZS50YXJnZXQudmFsdWUpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaW5kZXhcclxuICAgICAgICAgICAgLnNlYXJjaChlLnRhcmdldC52YWx1ZSwge1xyXG4gICAgICAgICAgICAgICAgLy8gcGFnZTogMSxcclxuICAgICAgICAgICAgICAgIGhpdHNQZXJQYWdlOiAxMDAwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCh7IGhpdHMgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaGl0cywgODg4KTtcclxuICAgICAgICAgICAgICAgIHNldExpc3QoaGl0cylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIsIDc3Nyk7XHJcbiAgICAgICAgICAgIH0pOyBcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgIHNldExpc3QoW10pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3V0ZXJCbG9ja30+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ibG9ja30+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9IHR5cGU9XCJ0ZXh0XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0QmFja2dyb3VuZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXsoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKEtleWJvYXJkRXZlbnQuY29kZSA9PSAnZW50ZXInICYmICFpbnB1dFZhbHVlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW5wdXRFcnJvcignVHJ5IGl0IScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9uS2V5UHJlc3M9e3RoaXMuaGFuZGxlS2V5UHJlc3MuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9uRm9jdXM9eygpID0+ICFsb2NrZWQgJiYgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZTogdHJ1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9uQmx1cj17KCkgPT4gIWxvY2tlZCAmJiB0aGlzLnNldFN0YXRlKHsgYWN0aXZlOiBmYWxzZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8QXBwXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRWYWx1ZT17aW5wdXRWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBsaXN0PXtsaXN0fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFsZ29saWEiXSwic291cmNlUm9vdCI6IiJ9