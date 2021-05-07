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
      index.search(e.target.value).then(function (_ref) {
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
            lineNumber: 53,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_App__WEBPACK_IMPORTED_MODULE_4__["default"], {
        inputValue: inputValue,
        list: list
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0FsZ29saWEvQWxnb2xpYS5qcyJdLCJuYW1lcyI6WyJjbGllbnQiLCJhbGdvbGlhc2VhcmNoIiwiaW5kZXgiLCJpbml0SW5kZXgiLCJBbGdvbGlhIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwiaW5wdXRFcnJvciIsInNldElucHV0RXJyb3IiLCJsaXN0Iiwic2V0TGlzdCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlYXJjaCIsInRoZW4iLCJoaXRzIiwiY29uc29sZSIsImxvZyIsImVyciIsInN0eWxlcyIsIm91dGVyQmxvY2siLCJibG9jayIsImlucHV0QmFja2dyb3VuZCIsImlucHV0IiwiS2V5Ym9hcmRFdmVudCIsImNvZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBR0MseURBQWEsQ0FDeEIsWUFEd0IsRUFFeEIsa0NBRndCLENBQTVCO0FBS0EsSUFBTUMsS0FBSyxHQUFHRixNQUFNLENBQUNHLFNBQVAsQ0FBaUIsNEJBQWpCLENBQWQ7O0FBRUEsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUFBLHdCQUVrQkMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FGbEI7QUFBQTtBQUFBLE1BRVhDLFVBRlc7QUFBQSxNQUVDQyxhQUZEOztBQUFBLHlCQUdrQkgsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FIbEI7QUFBQTtBQUFBLE1BR1hHLFVBSFc7QUFBQSxNQUdDQyxhQUhEOztBQUFBLHlCQUlPTCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUpQO0FBQUE7QUFBQSxNQUlYSyxJQUpXO0FBQUEsTUFJSkMsT0FKSTs7QUFNbEIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFPO0FBRXhCTixpQkFBYSxDQUFDTSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFiOztBQUVBLFFBQUdGLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFaLEVBQWtCO0FBRWRkLFdBQUssQ0FDSmUsTUFERCxDQUNRSCxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FEakIsRUFFQ0UsSUFGRCxDQUVNLGdCQUFjO0FBQUEsWUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ2hCQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWixFQUFrQixHQUFsQjtBQUNBUCxlQUFPLENBQUNPLElBQUQsQ0FBUDtBQUNILE9BTEQsV0FNTyxVQUFBRyxHQUFHLEVBQUk7QUFDVkYsZUFBTyxDQUFDQyxHQUFSLENBQVlDLEdBQVosRUFBaUIsR0FBakI7QUFDSCxPQVJEO0FBU0gsS0FYRCxNQVdNO0FBQ0ZWLGFBQU8sQ0FBQyxFQUFELENBQVA7QUFDSDtBQUNKLEdBbEJEOztBQW9CQSxzQkFDSSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBRVcsMERBQU0sQ0FBQ0MsVUFBdkI7QUFBQSw4QkFFSTtBQUFLLGlCQUFTLEVBQUVELDBEQUFNLENBQUNFLEtBQXZCO0FBQUEsK0JBUUk7QUFBSyxtQkFBUyxFQUFFRiwwREFBTSxDQUFDRyxlQUF2QjtBQUFBLGlDQUVJO0FBQ0ksZ0JBQUksRUFBQyxNQURUO0FBRUksaUJBQUssRUFBRW5CLFVBRlg7QUFHSSxxQkFBUyxFQUFFZ0IsMERBQU0sQ0FBQ0ksS0FIdEI7QUFJSSxvQkFBUSxFQUFFZCxZQUpkO0FBS0kscUJBQVMsRUFBRSxxQkFBSTtBQUNYLGtCQUFHZSxhQUFhLENBQUNDLElBQWQsSUFBc0IsT0FBdEIsSUFBaUMsQ0FBQ3RCLFVBQXJDLEVBQWdEO0FBQzVDRyw2QkFBYSxDQUFDLFNBQUQsQ0FBYjtBQUNIO0FBQ0osYUFUTCxDQVVJO0FBQ0E7QUFDQTs7QUFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixlQThCSSxxRUFBQyw0Q0FBRDtBQUNJLGtCQUFVLEVBQUVILFVBRGhCO0FBRUksWUFBSSxFQUFFSTtBQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE5Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBdUNILENBakVEOztHQUFNUCxPOztLQUFBQSxPO0FBbUVTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iMmQ0ZjA5MGQ2Mjg5YmE5NGRlNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL2Nzcy9BcHAubW9kdWxlLmNzcydcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcclxuaW1wb3J0IGFsZ29saWFzZWFyY2ggZnJvbSAnYWxnb2xpYXNlYXJjaC9saXRlJztcclxuXHJcbmNvbnN0IGNsaWVudCA9IGFsZ29saWFzZWFyY2goXHJcbiAgICAnWElNUk5WSkxRNycsXHJcbiAgICAnYzczMTI3ZmRkM2FmMTEzNjUwYmQ5Yjg4ZWVjMzc3YjUnXHJcbik7XHJcblxyXG5jb25zdCBpbmRleCA9IGNsaWVudC5pbml0SW5kZXgoJ0NvbW11bml0eV9hcnRpY2xlc19zdGFnaW5nJyk7XHJcblxyXG5jb25zdCBBbGdvbGlhID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtpbnB1dEVycm9yLCBzZXRJbnB1dEVycm9yXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtsaXN0ICwgc2V0TGlzdF0gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICBzZXRJbnB1dFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBcclxuICAgICAgICBpZihlLnRhcmdldC52YWx1ZSl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpbmRleFxyXG4gICAgICAgICAgICAuc2VhcmNoKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAudGhlbigoeyBoaXRzIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGhpdHMsIDg4OCk7XHJcbiAgICAgICAgICAgICAgICBzZXRMaXN0KGhpdHMpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLCA3NzcpO1xyXG4gICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICBzZXRMaXN0KFtdKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm91dGVyQmxvY2t9PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmxvY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fSB0eXBlPVwidGV4dFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dEJhY2tncm91bmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17KCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihLZXlib2FyZEV2ZW50LmNvZGUgPT0gJ2VudGVyJyAmJiAhaW5wdXRWYWx1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElucHV0RXJyb3IoJ1RyeSBpdCEnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvbktleVByZXNzPXt0aGlzLmhhbmRsZUtleVByZXNzLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvbkZvY3VzPXsoKSA9PiAhbG9ja2VkICYmIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmU6IHRydWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvbkJsdXI9eygpID0+ICFsb2NrZWQgJiYgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZTogZmFsc2UgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEFwcFxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdD17bGlzdH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbGdvbGlhIl0sInNvdXJjZVJvb3QiOiIifQ==