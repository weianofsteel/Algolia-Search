module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./component/Algolia/Algolia.js":
/*!**************************************!*\
  !*** ./component/Algolia/Algolia.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_App_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/App.module.css */ "./css/App.module.css");
/* harmony import */ var _css_App_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_App_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./List */ "./component/Algolia/List.js");
/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! algoliasearch/lite */ "algoliasearch/lite");
/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(algoliasearch_lite__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store */ "./store.js");

var _jsxFileName = "C:\\Users\\USER\\Desktop\\React-instantsearch\\component\\Algolia\\Algolia.js";






const client = algoliasearch_lite__WEBPACK_IMPORTED_MODULE_4___default()('XIMRNVJLQ7', 'c73127fdd3af113650bd9b88eec377b5', {
  protocol: 'https:'
});
const index = client.initIndex('Community_articles_staging');

const Algolia = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  const [inputValue, setInputValue] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('');
  const [list, setList] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]);
  const [listLength, setListLength] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0);
  const [pageSelected, setPageSelected] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(1); //搜尋

  const handleChange = e => {
    dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_6__["toStartSearching"])()); //搜尋中

    setPageSelected(1); //重新搜尋設定頁碼為1

    if (e.target.value) {
      index.search(e.target.value, {
        page: 0,
        hitsPerPage: 100
      }).then(({
        hits,
        nbHits
      }) => {
        setList(hits);

        if (!hits[0]) {
          setListLength(0);
        } else {
          setListLength(nbHits);
        }

        dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_6__["toFinishSearching"])()); //搜尋完成
      }).catch(err => {
        dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_6__["toFinishSearching"])());
      });
    } else {
      setList([]);
      dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_6__["toFinishSearching"])());
      setListLength(0);
    }

    setInputValue(e.target.value);
  }; //變換頁碼


  const handleToPage = (inputValue, i) => {
    dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_6__["toStartSearching"])());
    setPageSelected(i + 1);
    index.search(inputValue, {
      page: i,
      hitsPerPage: 100
    }).then(({
      hits,
      nbHits
    }) => {
      setList(hits);
      dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_6__["toFinishSearching"])());
    }).catch(err => {
      dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_6__["toFinishSearching"])());
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.box,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.outerBlock,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.block,
          style: {
            paddingBottom: '5px'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.inputBackground,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              value: inputValue,
              "data-testid": "searchInput",
              className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.input,
              onChange: handleChange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
            inputValue: inputValue,
            listLength: listLength,
            list: list,
            handleToPage: handleToPage,
            pageSelected: pageSelected
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Algolia);

/***/ }),

/***/ "./component/Algolia/List.js":
/*!***********************************!*\
  !*** ./component/Algolia/List.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_App_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/App.module.css */ "./css/App.module.css");
/* harmony import */ var _css_App_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_App_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\USER\\Desktop\\React-instantsearch\\component\\Algolia\\List.js";




const List = props => {
  const [summaryOpen, setSummaryOpen] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('');
  const [hover, setHover] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('');
  const isSearching = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.isSearching); // 搜尋更新時清空summary開關

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setSummaryOpen('');
  }, [isSearching]); //控制summary開關  

  const handleSummaryOpen = i => {
    if (summaryOpen === i) {
      setSummaryOpen('');
    } else {
      setSummaryOpen(i);
    }
  }; // 游標移至表單


  const handleMouseOver = i => {
    setHover(i);
  }; // 游標離開表單


  const handleMouseLeave = () => {
    setHover('');
  };

  const {
    list,
    listLength,
    handleToPage,
    inputValue,
    pageSelected
  } = props; //頁碼 && 頁籤

  let data = [];

  for (let i = 1; i < Math.ceil(listLength / 100) + 1; i++) {
    data.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.page,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: pageSelected === i ? _css_App_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.pageSelected : _css_App_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.pageButton,
        onClick: () => {
          handleToPage(inputValue, i - 1);
        },
        children: i
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, undefined)
    }, i, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, undefined));
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: [isSearching ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      "data-testid": "searchResult",
      style: {
        textAlign: 'left'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dataAmount,
        children: "Searching..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 21
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      "data-testid": "searchResult",
      style: {
        textAlign: 'left'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dataAmount,
        children: [listLength, " posts found"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 21
      }, undefined), listLength > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.pageBlock,
          children: "Page"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 29
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.pageList,
          children: data
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 29
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 25
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }, undefined), list.map((row, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: hover === i ? _css_App_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.listBlockOnHover : _css_App_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.listBlock,
      onClick: () => {
        handleSummaryOpen(i);
      },
      onMouseOver: () => {
        handleMouseOver(i);
      },
      onMouseLeave: () => {
        handleMouseLeave(i);
      },
      "data-testid": "dataList",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,
        children: row.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.author,
        style: {
          marginTop: '10px'
        },
        children: 'By ' + row.author_name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 21
      }, undefined), summaryOpen === i && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.summaryBlock,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.summary,
          children: 'By' + row.summary
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 29
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 25
      }, undefined)]
    }, i, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ }),

/***/ "./css/App.module.css":
/*!****************************!*\
  !*** ./css/App.module.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"box": "App_box__3X8Ol",
	"outerBlock": "App_outerBlock__3CpbO",
	"block": "App_block__3RC5b",
	"header": "App_header__2gjt8",
	"input": "App_input__2Hk2c",
	"inputBackground": "App_inputBackground__1W9im",
	"nextPageButton": "App_nextPageButton__3Mdms",
	"dataAmount": "App_dataAmount__1eK89",
	"listBlock": "App_listBlock__2DwQZ",
	"listBlockOnHover": "App_listBlockOnHover__UvC68",
	"title": "App_title__2cSdV",
	"author": "App_author__2NOd2",
	"summaryBlock": "App_summaryBlock__d-kln",
	"summary": "App_summary__2RMpI",
	"pageBlock": "App_pageBlock__iNxiK",
	"pageList": "App_pageList__2NnwE",
	"pageButton": "App_pageButton__3mQyd",
	"pageSelected": "App_pageSelected__31Lpv",
	"page": "App_page__2iqFC"
};


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_Algolia_Algolia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/Algolia/Algolia */ "./component/Algolia/Algolia.js");

var _jsxFileName = "C:\\Users\\USER\\Desktop\\React-instantsearch\\pages\\index.js";



const HomePage = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_Algolia_Algolia__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: actionTypes, reducer, toStartSearching, toFinishSearching, initializeStore, useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toStartSearching", function() { return toStartSearching; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toFinishSearching", function() { return toFinishSearching; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStore", function() { return useStore; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // import { persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

let store;
const initialState = {
  isSearching: false
};
const actionTypes = {
  STARTSEARCHING: 'STARTSEARCHING',
  FINISHSEARCHING: 'FINISHSEARCHING'
}; // REDUCERS

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STARTSEARCHING:
      return _objectSpread(_objectSpread({}, state), {}, {
        isSearching: true
      });

    case actionTypes.FINISHSEARCHING:
      return _objectSpread(_objectSpread({}, state), {}, {
        isSearching: false
      });

    default:
      return state;
  }
}; // ACTIONS

const toStartSearching = () => {
  return {
    type: actionTypes.STARTSEARCHING
  };
};
const toFinishSearching = () => {
  return {
    type: actionTypes.FINISHSEARCHING
  };
}; // const persistConfig = {
//   key: 'primary',
//   storage,
//   whitelist: ['mode', 'lang'], // place to select which state you want to persist
// }
// const persistedReducer = persistReducer(persistConfig, reducer)
// function makeStore(initialState = exampleInitialState) {
//   return createStore(
//     persistedReducer,
//     initialState,
//     composeWithDevTools(applyMiddleware())
//   )
// }

function initStore(preloadedState = initialState) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(reducer, preloadedState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])()));
}

const initializeStore = preloadedState => {
  var _store2;

  let _store = (_store2 = store) !== null && _store2 !== void 0 ? _store2 : initStore(preloadedState); // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store


  if (preloadedState && store) {
    _store = initStore(_objectSpread(_objectSpread({}, store.getState()), preloadedState)); // Reset the current store

    store = undefined;
  } // For SSG and SSR always create a new store


  if (true) return _store; // Create the store once in the client

  if (!store) store = _store;
  return _store;
};
function useStore(initialState) {
  const store = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => initializeStore(initialState), [initialState]);
  return store;
}

/***/ }),

/***/ "algoliasearch/lite":
/*!*************************************!*\
  !*** external "algoliasearch/lite" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("algoliasearch/lite");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L0FsZ29saWEvQWxnb2xpYS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvQWxnb2xpYS9MaXN0LmpzIiwid2VicGFjazovLy8uL2Nzcy9BcHAubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbGdvbGlhc2VhcmNoL2xpdGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiJdLCJuYW1lcyI6WyJjbGllbnQiLCJhbGdvbGlhc2VhcmNoIiwicHJvdG9jb2wiLCJpbmRleCIsImluaXRJbmRleCIsIkFsZ29saWEiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJSZWFjdCIsInVzZVN0YXRlIiwibGlzdCIsInNldExpc3QiLCJsaXN0TGVuZ3RoIiwic2V0TGlzdExlbmd0aCIsInBhZ2VTZWxlY3RlZCIsInNldFBhZ2VTZWxlY3RlZCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0b1N0YXJ0U2VhcmNoaW5nIiwidGFyZ2V0IiwidmFsdWUiLCJzZWFyY2giLCJwYWdlIiwiaGl0c1BlclBhZ2UiLCJ0aGVuIiwiaGl0cyIsIm5iSGl0cyIsInRvRmluaXNoU2VhcmNoaW5nIiwiY2F0Y2giLCJlcnIiLCJoYW5kbGVUb1BhZ2UiLCJpIiwic3R5bGVzIiwiYm94Iiwib3V0ZXJCbG9jayIsImJsb2NrIiwicGFkZGluZ0JvdHRvbSIsImlucHV0QmFja2dyb3VuZCIsImlucHV0IiwiTGlzdCIsInByb3BzIiwic3VtbWFyeU9wZW4iLCJzZXRTdW1tYXJ5T3BlbiIsImhvdmVyIiwic2V0SG92ZXIiLCJpc1NlYXJjaGluZyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VFZmZlY3QiLCJoYW5kbGVTdW1tYXJ5T3BlbiIsImhhbmRsZU1vdXNlT3ZlciIsImhhbmRsZU1vdXNlTGVhdmUiLCJkYXRhIiwiTWF0aCIsImNlaWwiLCJwdXNoIiwicGFnZUJ1dHRvbiIsInRleHRBbGlnbiIsImRhdGFBbW91bnQiLCJwYWdlQmxvY2siLCJwYWdlTGlzdCIsIm1hcCIsInJvdyIsImxpc3RCbG9ja09uSG92ZXIiLCJsaXN0QmxvY2siLCJ0aXRsZSIsImF1dGhvciIsIm1hcmdpblRvcCIsImF1dGhvcl9uYW1lIiwic3VtbWFyeUJsb2NrIiwic3VtbWFyeSIsIkhvbWVQYWdlIiwic3RvcmUiLCJpbml0aWFsU3RhdGUiLCJhY3Rpb25UeXBlcyIsIlNUQVJUU0VBUkNISU5HIiwiRklOSVNIU0VBUkNISU5HIiwicmVkdWNlciIsImFjdGlvbiIsInR5cGUiLCJpbml0U3RvcmUiLCJwcmVsb2FkZWRTdGF0ZSIsImNyZWF0ZVN0b3JlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsImluaXRpYWxpemVTdG9yZSIsIl9zdG9yZSIsImdldFN0YXRlIiwidW5kZWZpbmVkIiwidXNlU3RvcmUiLCJ1c2VNZW1vIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FB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LENBZmMsQ0FnQmpEOztBQUNBLE1BQUksQ0FBQ2QsS0FBTCxFQUFZQSxLQUFLLEdBQUdjLE1BQVI7QUFFWixTQUFPQSxNQUFQO0FBQ0QsQ0FwQk07QUFzQkEsU0FBU0csUUFBVCxDQUFrQmhCLFlBQWxCLEVBQWdDO0FBQ3JDLFFBQU1ELEtBQUssR0FBR2tCLHFEQUFPLENBQUMsTUFBTUwsZUFBZSxDQUFDWixZQUFELENBQXRCLEVBQXNDLENBQUNBLFlBQUQsQ0FBdEMsQ0FBckI7QUFDQSxTQUFPRCxLQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7QUM3RkQsK0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9jc3MvQXBwLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgTGlzdCBmcm9tICcuL0xpc3QnO1xyXG5pbXBvcnQgYWxnb2xpYXNlYXJjaCBmcm9tICdhbGdvbGlhc2VhcmNoL2xpdGUnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgdG9TdGFydFNlYXJjaGluZywgdG9GaW5pc2hTZWFyY2hpbmcgfSBmcm9tICcuLi8uLi9zdG9yZSc7XHJcblxyXG5jb25zdCBjbGllbnQgPSBhbGdvbGlhc2VhcmNoKFxyXG4gICAgJ1hJTVJOVkpMUTcnLFxyXG4gICAgJ2M3MzEyN2ZkZDNhZjExMzY1MGJkOWI4OGVlYzM3N2I1JyxcclxuICAgIHtwcm90b2NvbDogJ2h0dHBzOid9XHJcbik7XHJcblxyXG5jb25zdCBpbmRleCA9IGNsaWVudC5pbml0SW5kZXgoJ0NvbW11bml0eV9hcnRpY2xlc19zdGFnaW5nJyk7XHJcblxyXG5jb25zdCBBbGdvbGlhID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gICAgY29uc3QgWyBpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlIF0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbIGxpc3QgLCBzZXRMaXN0IF0gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbIGxpc3RMZW5ndGggLCBzZXRMaXN0TGVuZ3RoIF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFsgcGFnZVNlbGVjdGVkLCBzZXRQYWdlU2VsZWN0ZWQgXSA9IFJlYWN0LnVzZVN0YXRlKDEpO1xyXG5cclxuICAgIC8v5pCc5bCLXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG5cclxuICAgICAgICBkaXNwYXRjaCh0b1N0YXJ0U2VhcmNoaW5nKCkpOy8v5pCc5bCL5LitXHJcbiAgICAgICAgc2V0UGFnZVNlbGVjdGVkKDEpOy8v6YeN5paw5pCc5bCL6Kit5a6a6aCB56K854K6MVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGUudGFyZ2V0LnZhbHVlKXtcclxuICAgICAgICAgICAgaW5kZXhcclxuICAgICAgICAgICAgLnNlYXJjaChlLnRhcmdldC52YWx1ZSx7XHJcbiAgICAgICAgICAgICAgICBwYWdlOjAsXHJcbiAgICAgICAgICAgICAgICBoaXRzUGVyUGFnZToxMDBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHsgaGl0cywgbmJIaXRzIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIHNldExpc3QoaGl0cyk7XHJcbiAgICAgICAgICAgICAgICBpZighaGl0c1swXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExpc3RMZW5ndGgoMCk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TGlzdExlbmd0aChuYkhpdHMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHRvRmluaXNoU2VhcmNoaW5nKCkpOy8v5pCc5bCL5a6M5oiQXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2godG9GaW5pc2hTZWFyY2hpbmcoKSk7XHJcbiAgICAgICAgICAgIH0pOyBcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgIHNldExpc3QoW10pO1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh0b0ZpbmlzaFNlYXJjaGluZygpKTtcclxuICAgICAgICAgICAgc2V0TGlzdExlbmd0aCgwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldElucHV0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6K6K5o+b6aCB56K8XHJcbiAgICBjb25zdCBoYW5kbGVUb1BhZ2UgPSAoaW5wdXRWYWx1ZSwgaSkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHRvU3RhcnRTZWFyY2hpbmcoKSk7XHJcbiAgICAgICAgc2V0UGFnZVNlbGVjdGVkKGkgKyAxKTtcclxuICAgICAgICBpbmRleFxyXG4gICAgICAgIC5zZWFyY2goaW5wdXRWYWx1ZSx7XHJcbiAgICAgICAgICAgIHBhZ2U6aSxcclxuICAgICAgICAgICAgaGl0c1BlclBhZ2U6MTAwXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoeyBoaXRzLCBuYkhpdHMgfSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRMaXN0KGhpdHMpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh0b0ZpbmlzaFNlYXJjaGluZygpKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh0b0ZpbmlzaFNlYXJjaGluZygpKTtcclxuICAgICAgICB9KTsgXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3h9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vdXRlckJsb2NrfT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmxvY2t9IHN0eWxlPXt7cGFkZGluZ0JvdHRvbTonNXB4J319PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIOaQnOWwi+ashOS9jSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dEJhY2tncm91bmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJzZWFyY2hJbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiDliJfooaggKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlPXtpbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdExlbmd0aD17bGlzdExlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Q9e2xpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVUb1BhZ2U9e2hhbmRsZVRvUGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTZWxlY3RlZD17cGFnZVNlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWxnb2xpYSIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vY3NzL0FwcC5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5jb25zdCBMaXN0ID0gKHByb3BzKSA9PiB7ICAgIFxyXG5cclxuICAgIGNvbnN0IFsgc3VtbWFyeU9wZW4gLCBzZXRTdW1tYXJ5T3BlbiBdID0gUmVhY3QudXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgWyBob3ZlciAsIHNldEhvdmVyIF0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3QgaXNTZWFyY2hpbmcgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmlzU2VhcmNoaW5nKTtcclxuXHJcbiAgICAvLyDmkJzlsIvmm7TmlrDmmYLmuIXnqbpzdW1tYXJ56ZaL6ZecXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBzZXRTdW1tYXJ5T3BlbignJyk7XHJcbiAgICAgIH0sW2lzU2VhcmNoaW5nXSlcclxuXHJcbiAgICAvL+aOp+WItnN1bW1hcnnplovpl5wgIFxyXG4gICAgY29uc3QgaGFuZGxlU3VtbWFyeU9wZW4gPSAoaSkgPT4ge1xyXG4gICAgICAgIGlmKHN1bW1hcnlPcGVuID09PSBpKSB7XHJcbiAgICAgICAgICAgIHNldFN1bW1hcnlPcGVuKCcnKTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFN1bW1hcnlPcGVuKGkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDmuLjmqJnnp7voh7Pooajllq5cclxuICAgIGNvbnN0IGhhbmRsZU1vdXNlT3ZlciA9IChpKSA9PiB7XHJcbiAgICAgICAgc2V0SG92ZXIoaSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIOa4uOaomemboumWi+ihqOWWrlxyXG4gICAgY29uc3QgaGFuZGxlTW91c2VMZWF2ZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRIb3ZlcignJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGxpc3QsXHJcbiAgICAgICAgbGlzdExlbmd0aCxcclxuICAgICAgICBoYW5kbGVUb1BhZ2UsXHJcbiAgICAgICAgaW5wdXRWYWx1ZSxcclxuICAgICAgICBwYWdlU2VsZWN0ZWRcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICAvL+mggeeivCAmJiDpoIHnsaRcclxuICAgIGxldCBkYXRhID0gW107XHJcblxyXG4gICAgZm9yKGxldCBpID0gMTsgaSA8IE1hdGguY2VpbChsaXN0TGVuZ3RoLzEwMCkgKyAxOyBpKyspIHtcclxuICAgICAgICBkYXRhLnB1c2goXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9e3N0eWxlcy5wYWdlfT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwYWdlU2VsZWN0ZWQ9PT1pP3N0eWxlcy5wYWdlU2VsZWN0ZWQ6c3R5bGVzLnBhZ2VCdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlVG9QYWdlKGlucHV0VmFsdWUsIGktMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7aX1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHsvKiDmkJzlsIvni4DmhYsgICYm5pCc5bCL57WQ5p6cICYmIOmggeeivCAqL31cclxuICAgICAgICAgICAge2lzU2VhcmNoaW5nP1xyXG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXRlc3RpZD1cInNlYXJjaFJlc3VsdFwiIHN0eWxlPXt7dGV4dEFsaWduOidsZWZ0J319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0YUFtb3VudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNlYXJjaGluZy4uLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+OlxyXG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXRlc3RpZD1cInNlYXJjaFJlc3VsdFwiIHN0eWxlPXt7dGV4dEFsaWduOidsZWZ0J319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0YUFtb3VudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtsaXN0TGVuZ3RofSBwb3N0cyBmb3VuZFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtsaXN0TGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhZ2VCbG9ja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhZ2VMaXN0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB7Lyog5pCc5bCL57WQ5p6cbGlzdCAqL31cclxuICAgICAgICAgICAge2xpc3QubWFwKChyb3csIGkpID0+IFxyXG4gICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2l9IFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aG92ZXI9PT1pP3N0eWxlcy5saXN0QmxvY2tPbkhvdmVyOnN0eWxlcy5saXN0QmxvY2t9IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT57aGFuZGxlU3VtbWFyeU9wZW4oaSl9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyPXsoKT0+e2hhbmRsZU1vdXNlT3ZlcihpKX19XHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKT0+e2hhbmRsZU1vdXNlTGVhdmUoaSl9fVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiZGF0YUxpc3RcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57cm93LnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF1dGhvcn0gc3R5bGU9e3ttYXJnaW5Ub3A6JzEwcHgnfX0+eydCeSAnICsgcm93LmF1dGhvcl9uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzdW1tYXJ5T3BlbiA9PT0gaSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1bW1hcnlCbG9ja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zdW1tYXJ5fT57J0J5JyArIHJvdy5zdW1tYXJ5fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdDtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYm94XCI6IFwiQXBwX2JveF9fM1g4T2xcIixcblx0XCJvdXRlckJsb2NrXCI6IFwiQXBwX291dGVyQmxvY2tfXzNDcGJPXCIsXG5cdFwiYmxvY2tcIjogXCJBcHBfYmxvY2tfXzNSQzViXCIsXG5cdFwiaGVhZGVyXCI6IFwiQXBwX2hlYWRlcl9fMmdqdDhcIixcblx0XCJpbnB1dFwiOiBcIkFwcF9pbnB1dF9fMkhrMmNcIixcblx0XCJpbnB1dEJhY2tncm91bmRcIjogXCJBcHBfaW5wdXRCYWNrZ3JvdW5kX18xVzlpbVwiLFxuXHRcIm5leHRQYWdlQnV0dG9uXCI6IFwiQXBwX25leHRQYWdlQnV0dG9uX18zTWRtc1wiLFxuXHRcImRhdGFBbW91bnRcIjogXCJBcHBfZGF0YUFtb3VudF9fMWVLODlcIixcblx0XCJsaXN0QmxvY2tcIjogXCJBcHBfbGlzdEJsb2NrX18yRHdRWlwiLFxuXHRcImxpc3RCbG9ja09uSG92ZXJcIjogXCJBcHBfbGlzdEJsb2NrT25Ib3Zlcl9fVXZDNjhcIixcblx0XCJ0aXRsZVwiOiBcIkFwcF90aXRsZV9fMmNTZFZcIixcblx0XCJhdXRob3JcIjogXCJBcHBfYXV0aG9yX18yTk9kMlwiLFxuXHRcInN1bW1hcnlCbG9ja1wiOiBcIkFwcF9zdW1tYXJ5QmxvY2tfX2Qta2xuXCIsXG5cdFwic3VtbWFyeVwiOiBcIkFwcF9zdW1tYXJ5X18yUk1wSVwiLFxuXHRcInBhZ2VCbG9ja1wiOiBcIkFwcF9wYWdlQmxvY2tfX2lOeGlLXCIsXG5cdFwicGFnZUxpc3RcIjogXCJBcHBfcGFnZUxpc3RfXzJObndFXCIsXG5cdFwicGFnZUJ1dHRvblwiOiBcIkFwcF9wYWdlQnV0dG9uX18zbVF5ZFwiLFxuXHRcInBhZ2VTZWxlY3RlZFwiOiBcIkFwcF9wYWdlU2VsZWN0ZWRfXzMxTHB2XCIsXG5cdFwicGFnZVwiOiBcIkFwcF9wYWdlX18yaXFGQ1wiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQWxnb2xpYSBmcm9tICcuLi9jb21wb25lbnQvQWxnb2xpYS9BbGdvbGlhJ1xyXG5cclxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PntcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG5cclxuICAgICAgICAgIDxBbGdvbGlhLz5cclxuXHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxuXHJcbn1cclxuICBcclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2UiLCJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbidcclxuLy8gaW1wb3J0IHsgcGVyc2lzdFJlZHVjZXIgfSBmcm9tICdyZWR1eC1wZXJzaXN0J1xyXG4vLyBpbXBvcnQgc3RvcmFnZSBmcm9tICdyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlJ1xyXG5cclxubGV0IHN0b3JlXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgaXNTZWFyY2hpbmc6IGZhbHNlXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25UeXBlcyA9IHtcclxuICBTVEFSVFNFQVJDSElORzogJ1NUQVJUU0VBUkNISU5HJyxcclxuICBGSU5JU0hTRUFSQ0hJTkc6ICdGSU5JU0hTRUFSQ0hJTkcnXHJcbn1cclxuXHJcbi8vIFJFRFVDRVJTXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNUQVJUU0VBUkNISU5HOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzU2VhcmNoaW5nOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuRklOSVNIU0VBUkNISU5HOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzU2VhcmNoaW5nOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuXHJcbi8vIEFDVElPTlNcclxuZXhwb3J0IGNvbnN0IHRvU3RhcnRTZWFyY2hpbmcgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuU1RBUlRTRUFSQ0hJTkcgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdG9GaW5pc2hTZWFyY2hpbmcgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuRklOSVNIU0VBUkNISU5HIH1cclxufVxyXG5cclxuLy8gY29uc3QgcGVyc2lzdENvbmZpZyA9IHtcclxuLy8gICBrZXk6ICdwcmltYXJ5JyxcclxuLy8gICBzdG9yYWdlLFxyXG4vLyAgIHdoaXRlbGlzdDogWydtb2RlJywgJ2xhbmcnXSwgLy8gcGxhY2UgdG8gc2VsZWN0IHdoaWNoIHN0YXRlIHlvdSB3YW50IHRvIHBlcnNpc3RcclxuLy8gfVxyXG5cclxuLy8gY29uc3QgcGVyc2lzdGVkUmVkdWNlciA9IHBlcnNpc3RSZWR1Y2VyKHBlcnNpc3RDb25maWcsIHJlZHVjZXIpXHJcblxyXG4vLyBmdW5jdGlvbiBtYWtlU3RvcmUoaW5pdGlhbFN0YXRlID0gZXhhbXBsZUluaXRpYWxTdGF0ZSkge1xyXG4vLyAgIHJldHVybiBjcmVhdGVTdG9yZShcclxuLy8gICAgIHBlcnNpc3RlZFJlZHVjZXIsXHJcbi8vICAgICBpbml0aWFsU3RhdGUsXHJcbi8vICAgICBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSgpKVxyXG4vLyAgIClcclxuLy8gfVxyXG5cclxuZnVuY3Rpb24gaW5pdFN0b3JlKHByZWxvYWRlZFN0YXRlID0gaW5pdGlhbFN0YXRlKSB7XHJcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxyXG4gICAgcmVkdWNlcixcclxuICAgIHByZWxvYWRlZFN0YXRlLFxyXG4gICAgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoKSlcclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsaXplU3RvcmUgPSAocHJlbG9hZGVkU3RhdGUpID0+IHtcclxuICBsZXQgX3N0b3JlID0gc3RvcmUgPz8gaW5pdFN0b3JlKHByZWxvYWRlZFN0YXRlKVxyXG5cclxuICAvLyBBZnRlciBuYXZpZ2F0aW5nIHRvIGEgcGFnZSB3aXRoIGFuIGluaXRpYWwgUmVkdXggc3RhdGUsIG1lcmdlIHRoYXQgc3RhdGVcclxuICAvLyB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIGluIHRoZSBzdG9yZSwgYW5kIGNyZWF0ZSBhIG5ldyBzdG9yZVxyXG4gIGlmIChwcmVsb2FkZWRTdGF0ZSAmJiBzdG9yZSkge1xyXG4gICAgX3N0b3JlID0gaW5pdFN0b3JlKHtcclxuICAgICAgLi4uc3RvcmUuZ2V0U3RhdGUoKSxcclxuICAgICAgLi4ucHJlbG9hZGVkU3RhdGUsXHJcbiAgICB9KVxyXG4gICAgLy8gUmVzZXQgdGhlIGN1cnJlbnQgc3RvcmVcclxuICAgIHN0b3JlID0gdW5kZWZpbmVkXHJcbiAgfVxyXG5cclxuICAvLyBGb3IgU1NHIGFuZCBTU1IgYWx3YXlzIGNyZWF0ZSBhIG5ldyBzdG9yZVxyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIF9zdG9yZVxyXG4gIC8vIENyZWF0ZSB0aGUgc3RvcmUgb25jZSBpbiB0aGUgY2xpZW50XHJcbiAgaWYgKCFzdG9yZSkgc3RvcmUgPSBfc3RvcmVcclxuXHJcbiAgcmV0dXJuIF9zdG9yZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RvcmUoaW5pdGlhbFN0YXRlKSB7XHJcbiAgY29uc3Qgc3RvcmUgPSB1c2VNZW1vKCgpID0+IGluaXRpYWxpemVTdG9yZShpbml0aWFsU3RhdGUpLCBbaW5pdGlhbFN0YXRlXSlcclxuICByZXR1cm4gc3RvcmVcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbGdvbGlhc2VhcmNoL2xpdGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9