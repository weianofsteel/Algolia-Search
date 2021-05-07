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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store */ "./store.js");



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

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState7, 2),
      listLength = _React$useState8[0],
      setListLength = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState9, 2),
      isSearching = _React$useState10[0],
      setIsSearching = _React$useState10[1];

  var handleChange = function handleChange(e) {
    setInputValue(e.target.value);
    setIsSearching(true);

    if (e.target.value) {
      index.search(e.target.value, {
        page: 2,
        hitsPerPage: 100
      }).then(function (_ref) {
        var hits = _ref.hits;
        console.log(hits, 888);
        setList(hits);
        setListLength(hits.length);
        setIsSearching(false);
      })["catch"](function (err) {
        console.log(err);
      });
    } else {
      setList([]);
    }
  }; // const test = useSelector((state) => state.test)
  // const dispatch = useDispatch()


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.box,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.outerBlock,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.block,
          style: {
            paddingBottom: '5px'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.inputBackground,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              value: inputValue,
              className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.input,
              onChange: handleChange // onKeyDown={()=>{
              //     if(KeyboardEvent.code == 'enter' && !inputValue){
              //         setInputError('Try it!')
              //     }
              // }}
              // onKeyPress={this.handleKeyPress.bind(this)}
              // onFocus={() => !locked && this.setState({ active: true })}
              // onBlur={() => !locked && this.setState({ active: false })}

            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 21
          }, _this), isSearching ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.dataAmount,
            children: "Searching..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 25
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.dataAmount,
            children: [listLength, " posts found"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_App__WEBPACK_IMPORTED_MODULE_4__["default"], {
            inputValue: inputValue,
            list: list
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 9
  }, _this);
};

_s(Algolia, "qA5CwrqNc7/N1cOjUBmjSlX9ZBM=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0FsZ29saWEvQWxnb2xpYS5qcyJdLCJuYW1lcyI6WyJjbGllbnQiLCJhbGdvbGlhc2VhcmNoIiwiaW5kZXgiLCJpbml0SW5kZXgiLCJBbGdvbGlhIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwiaW5wdXRFcnJvciIsInNldElucHV0RXJyb3IiLCJsaXN0Iiwic2V0TGlzdCIsImxpc3RMZW5ndGgiLCJzZXRMaXN0TGVuZ3RoIiwiaXNTZWFyY2hpbmciLCJzZXRJc1NlYXJjaGluZyIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlYXJjaCIsInBhZ2UiLCJoaXRzUGVyUGFnZSIsInRoZW4iLCJoaXRzIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImVyciIsInN0eWxlcyIsImJveCIsIm91dGVyQmxvY2siLCJibG9jayIsInBhZGRpbmdCb3R0b20iLCJpbnB1dEJhY2tncm91bmQiLCJpbnB1dCIsImRhdGFBbW91bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHQyx5REFBYSxDQUN4QixZQUR3QixFQUV4QixrQ0FGd0IsQ0FBNUI7QUFLQSxJQUFNQyxLQUFLLEdBQUdGLE1BQU0sQ0FBQ0csU0FBUCxDQUFpQiw0QkFBakIsQ0FBZDs7QUFFQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQUEsd0JBRW9CQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUZwQjtBQUFBO0FBQUEsTUFFVkMsVUFGVTtBQUFBLE1BRUVDLGFBRkY7O0FBQUEseUJBR29CSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUhwQjtBQUFBO0FBQUEsTUFHVkcsVUFIVTtBQUFBLE1BR0VDLGFBSEY7O0FB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ZXguMzAzMGU0ZDBjMmY2NDllNzI3MmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9jc3MvQXBwLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXHJcbmltcG9ydCBhbGdvbGlhc2VhcmNoIGZyb20gJ2FsZ29saWFzZWFyY2gvbGl0ZSc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHRvVGVzdCB9IGZyb20gJy4uLy4uL3N0b3JlJ1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuY29uc3QgY2xpZW50ID0gYWxnb2xpYXNlYXJjaChcclxuICAgICdYSU1STlZKTFE3JyxcclxuICAgICdjNzMxMjdmZGQzYWYxMTM2NTBiZDliODhlZWMzNzdiNSdcclxuKTtcclxuXHJcbmNvbnN0IGluZGV4ID0gY2xpZW50LmluaXRJbmRleCgnQ29tbXVuaXR5X2FydGljbGVzX3N0YWdpbmcnKTtcclxuXHJcbmNvbnN0IEFsZ29saWEgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgWyBpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlIF0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbIGlucHV0RXJyb3IsIHNldElucHV0RXJyb3IgXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFsgbGlzdCAsIHNldExpc3QgXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFsgbGlzdExlbmd0aCAsIHNldExpc3RMZW5ndGggXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgWyBpc1NlYXJjaGluZyAsIHNldElzU2VhcmNoaW5nIF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuXHJcbiAgICAgICAgc2V0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgc2V0SXNTZWFyY2hpbmcodHJ1ZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoZS50YXJnZXQudmFsdWUpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaW5kZXhcclxuICAgICAgICAgICAgLnNlYXJjaChlLnRhcmdldC52YWx1ZSwge1xyXG4gICAgICAgICAgICAgICAgcGFnZTogMixcclxuICAgICAgICAgICAgICAgIGhpdHNQZXJQYWdlOiAxMDBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHsgaGl0cyB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhoaXRzLCA4ODgpO1xyXG4gICAgICAgICAgICAgICAgc2V0TGlzdChoaXRzKTtcclxuICAgICAgICAgICAgICAgIHNldExpc3RMZW5ndGgoaGl0cy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgc2V0SXNTZWFyY2hpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIH0pOyBcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgIHNldExpc3QoW10pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbnN0IHRlc3QgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRlc3QpXHJcbiAgICAvLyBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3h9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm91dGVyQmxvY2t9PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmxvY2t9IHN0eWxlPXt7cGFkZGluZ0JvdHRvbTonNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fSB0eXBlPVwidGV4dFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dEJhY2tncm91bmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9uS2V5RG93bj17KCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBpZihLZXlib2FyZEV2ZW50LmNvZGUgPT0gJ2VudGVyJyAmJiAhaW5wdXRWYWx1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHNldElucHV0RXJyb3IoJ1RyeSBpdCEnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvbktleVByZXNzPXt0aGlzLmhhbmRsZUtleVByZXNzLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvbkZvY3VzPXsoKSA9PiAhbG9ja2VkICYmIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmU6IHRydWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvbkJsdXI9eygpID0+ICFsb2NrZWQgJiYgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZTogZmFsc2UgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7aXNTZWFyY2hpbmc/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0YUFtb3VudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWFyY2hpbmcuLi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGFBbW91bnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xpc3RMZW5ndGh9IHBvc3RzIGZvdW5kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEFwcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlPXtpbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0PXtsaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogPEFwcFxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdD17bGlzdH1cclxuICAgICAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgey8qIDxidXR0b24gb25DbGljaz17KCk9PmRpc3BhdGNoKHRvVGVzdCgpKX0+dGVzdDI8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWxnb2xpYSJdLCJzb3VyY2VSb290IjoiIn0=