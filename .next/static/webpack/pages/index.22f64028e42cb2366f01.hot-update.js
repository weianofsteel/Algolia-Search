webpackHotUpdate_N_E("pages/index",{

/***/ "./component/Home/Home.js":
/*!********************************!*\
  !*** ./component/Home/Home.js ***!
  \********************************/
/*! exports provided: Home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Public_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Public/Header */ "./component/Public/Header.js");
/* harmony import */ var _Public_Banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Public/Banner */ "./component/Public/Banner.js");
/* harmony import */ var _Public_Drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Public/Drawer */ "./component/Public/Drawer.js");
/* harmony import */ var _Public_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Public/Footer */ "./component/Public/Footer.js");
/* harmony import */ var _Home_component_Skill__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Home/component/Skill */ "./component/Home/component/Skill.js");
/* harmony import */ var _component_Sharing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/Sharing */ "./component/Home/component/Sharing.js");
/* harmony import */ var _Home_component_LearnByDoing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Home/component/LearnByDoing */ "./component/Home/component/LearnByDoing.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");



var _jsxFileName = "C:\\Users\\USER\\Desktop\\weian\\component\\Home\\Home.js",
    _this = undefined,
    _s = $RefreshSig$();










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["makeStyles"])({
  dayBackground: {
    backgroundColor: '#FFFFFF',
    color: '#1F1F1F'
  },
  nightBackground: {
    backgroundColor: 'black',
    color: '#FFFFFF'
  },
  body: {
    paddingLeft: '8%',
    paddingRight: '8%'
  }
});
var Home = function Home() {
  _s();

  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      drawer = _React$useState2[0],
      setDrawer = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState('day'),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      mode = _React$useState4[0],
      setMode = _React$useState4[1];

  var handleDrawerOpen = function handleDrawerOpen() {
    setDrawer(true);
  };

  var handleDrawerClose = function handleDrawerClose() {
    setDrawer(false);
  };

  var handleMode = function handleMode() {
    if (mode === 'day') {
      setMode('night');
    } else {
      setMode('day');
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    children: [drawer == false && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: mode === 'day' ? classes.dayBackground : classes.nightBackground,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.body,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Public_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
            handleDrawerOpen: handleDrawerOpen,
            handleMode: handleMode,
            mode: mode
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.body,
          style: {
            marginTop: '10%'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Public_Banner__WEBPACK_IMPORTED_MODULE_4__["default"], {
            mode: mode
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.body,
          style: {
            marginTop: '6%'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Home_component_Skill__WEBPACK_IMPORTED_MODULE_7__["default"], {
            mode: mode
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.body,
          style: {
            marginTop: '6%'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_Sharing__WEBPACK_IMPORTED_MODULE_8__["default"], {
            mode: mode
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.body,
          style: {
            marginTop: '1rem'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Public_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
            mode: mode
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }, _this), drawer == true && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          height: '100vh',
          backgroundColor: '#1f1f1f'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Public_Drawer__WEBPACK_IMPORTED_MODULE_5__["default"], {
          handleDrawerClose: handleDrawerClose
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 9
  }, _this);
};

_s(Home, "oA0IMRcF0FgqBwvxXqegtNZeYSc=", false, function () {
  return [useStyles];
});

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0hvbWUvSG9tZS5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwiZGF5QmFja2dyb3VuZCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwibmlnaHRCYWNrZ3JvdW5kIiwiYm9keSIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwiSG9tZSIsImNsYXNzZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwiZHJhd2VyIiwic2V0RHJhd2VyIiwibW9kZSIsInNldE1vZGUiLCJoYW5kbGVEcmF3ZXJPcGVuIiwiaGFuZGxlRHJhd2VyQ2xvc2UiLCJoYW5kbGVNb2RlIiwibWFyZ2luVG9wIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsNEVBQVUsQ0FBQztBQUN6QkMsZUFBYSxFQUFDO0FBQ1ZDLG1CQUFlLEVBQUMsU0FETjtBQUVWQyxTQUFLLEVBQUM7QUFGSSxHQURXO0FBS3pCQyxpQkFBZSxFQUFDO0FBQ1pGLG1CQUFlLEVBQUMsT0FESjtBQUVaQyxTQUFLLEVBQUM7QUFGTSxHQUxTO0FBU3pCRSxNQUFJLEVBQUM7QUFDREMsZUFBVyxFQUFDLElBRFg7QUFFREMsZ0JBQVksRUFBQztBQUZaO0FBVG9CLENBQUQsQ0FBNUI7QUFlTyxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBRXRCLE1BQU1DLE9BQU8sR0FBR1YsU0FBUyxFQUF6Qjs7QUFGc0Isd0JBSU1XLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBSk47QUFBQTtBQUFBLE1BSWZDLE1BSmU7QUFBQSxNQUlQQyxTQUpPOztBQUFBLHlCQU1JSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQU5KO0FBQUE7QUFBQSxNQU1kRyxJQU5j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Ijoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjJmNjQwMjhlNDJjYjIzNjZmMDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9QdWJsaWMvSGVhZGVyJ1xyXG5pbXBvcnQgQmFubmVyIGZyb20gJy4uL1B1YmxpYy9CYW5uZXInXHJcbmltcG9ydCBEcmF3ZXIgZnJvbSAnLi4vUHVibGljL0RyYXdlcidcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9QdWJsaWMvRm9vdGVyJ1xyXG5pbXBvcnQgU2tpbGwgZnJvbSAnLi4vSG9tZS9jb21wb25lbnQvU2tpbGwnXHJcbmltcG9ydCBTaGFyaW5nIGZyb20gJy4vY29tcG9uZW50L1NoYXJpbmcnXHJcbmltcG9ydCBMZWFybkJ5RG9pbmcgZnJvbSAnLi4vSG9tZS9jb21wb25lbnQvTGVhcm5CeURvaW5nJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICBkYXlCYWNrZ3JvdW5kOntcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6JyNGRkZGRkYnLFxyXG4gICAgICAgIGNvbG9yOicjMUYxRjFGJ1xyXG4gICAgfSxcclxuICAgIG5pZ2h0QmFja2dyb3VuZDp7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOidibGFjaycsXHJcbiAgICAgICAgY29sb3I6JyNGRkZGRkYnXHJcbiAgICB9LFxyXG4gICAgYm9keTp7XHJcbiAgICAgICAgcGFkZGluZ0xlZnQ6JzglJywgXHJcbiAgICAgICAgcGFkZGluZ1JpZ2h0Oic4JSdcclxuICAgIH1cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBIb21lID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIFxyXG4gICAgY29uc3QgW2RyYXdlciwgc2V0RHJhd2VyXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBbIG1vZGUsIHNldE1vZGUgXSA9IFJlYWN0LnVzZVN0YXRlKCdkYXknKTtcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlRHJhd2VyT3BlbiA9ICgpID0+IHtcclxuICAgICAgICBzZXREcmF3ZXIodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRHJhd2VyQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0RHJhd2VyKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVNb2RlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKG1vZGUgPT09ICdkYXknKSB7XHJcbiAgICAgICAgICBzZXRNb2RlKCduaWdodCcpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICBzZXRNb2RlKCdkYXknKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAge2RyYXdlciA9PSBmYWxzZSAmJlxyXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXttb2RlPT09J2RheSc/Y2xhc3Nlcy5kYXlCYWNrZ3JvdW5kOmNsYXNzZXMubmlnaHRCYWNrZ3JvdW5kfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYm9keX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRHJhd2VyT3Blbj17aGFuZGxlRHJhd2VyT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVNb2RlPXtoYW5kbGVNb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9e21vZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJvZHl9IHN0eWxlPXt7bWFyZ2luVG9wOicxMCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFubmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT17bW9kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYm9keX0gc3R5bGU9e3ttYXJnaW5Ub3A6JzYlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNraWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT17bW9kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYm9keX0gc3R5bGU9e3ttYXJnaW5Ub3A6JzYlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNoYXJpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlPXttb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYm9keX0gc3R5bGU9e3ttYXJnaW5Ub3A6JzFyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGVhcm5CeURvaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT17bW9kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJvZHl9IHN0eWxlPXt7bWFyZ2luVG9wOicxcmVtJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvb3RlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9e21vZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB7ZHJhd2VyID09IHRydWUgJiZcclxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OicxMDB2aCcsIGJhY2tncm91bmRDb2xvcjonIzFmMWYxZid9fT5cclxuICAgICAgICAgICAgICAgICAgICA8RHJhd2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZURyYXdlckNsb3NlPXtoYW5kbGVEcmF3ZXJDbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==