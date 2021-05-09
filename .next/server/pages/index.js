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
        dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_6__["toFinishSearching"])()); //搜尋完成

        if (!hits[0]) {
          setListLength(0);
          setList([]);
        } else {
          setListLength(nbHits);
          setList(hits);
        }
      }).catch(err => {
        dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_6__["toFinishSearching"])());
        alert('Woops! Try again!');
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
      hits
    }) => {
      setList(hits);
      dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_6__["toFinishSearching"])());
    }).catch(err => {
      dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_6__["toFinishSearching"])());
      alert('Woops! Try again!');
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
              id: "searchInput",
              type: "text",
              value: inputValue,
              "data-testid": "searchInput",
              className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.input,
              onChange: handleChange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
            inputValue: inputValue,
            listLength: listLength,
            list: list,
            handleToPage: handleToPage,
            pageSelected: pageSelected
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 79,
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
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "list",
      children: list.map((row, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
          lineNumber: 100,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.author,
          style: {
            marginTop: '10px'
          },
          children: 'By ' + row.author_name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 21
        }, undefined), summaryOpen === i && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.summaryBlock,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.summary,
            children: 'By' + row.summary
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 25
        }, undefined)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }, undefined)]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L0FsZ29saWEvQWxnb2xpYS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvQWxnb2xpYS9MaXN0LmpzIiwid2VicGFjazovLy8uL2Nzcy9BcHAubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbGdvbGlhc2VhcmNoL2xpdGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiJdLCJuYW1lcyI6WyJjbGllbnQiLCJhbGdvbGlhc2VhcmNoIiwicHJvdG9jb2wiLCJpbmRleCIsImluaXRJbmRleCIsIkFsZ29saWEiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJSZWFjdCIsInVzZVN0YXRlIiwibGlzdCIsInNldExpc3QiLCJsaXN0TGVuZ3RoIiwic2V0TGlzdExlbmd0aCIsInBhZ2VTZWxlY3RlZCIsInNldFBhZ2VTZWxlY3RlZCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0b1N0YXJ0U2VhcmNoaW5nIiwidGFyZ2V0IiwidmFsdWUiLCJzZWFyY2giLCJwYWdlIiwiaGl0c1BlclBhZ2UiLCJ0aGVuIiwiaGl0cyIsIm5iSGl0cyIsInRvRmluaXNoU2VhcmNoaW5nIiwiY2F0Y2giLCJlcnIiLCJhbGVydCIsImhhbmRsZVRvUGFnZSIsImkiLCJzdHlsZXMiLCJib3giLCJvdXRlckJsb2NrIiwiYmxvY2siLCJwYWRkaW5nQm90dG9tIiwiaW5wdXRCYWNrZ3JvdW5kIiwiaW5wdXQiLCJMaXN0IiwicHJvcHMiLCJzdW1tYXJ5T3BlbiIsInNldFN1bW1hcnlPcGVuIiwiaG92ZXIiLCJzZXRIb3ZlciIsImlzU2VhcmNoaW5nIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZUVmZmVjdCIsImhhbmRsZVN1bW1hcnlPcGVuIiwiaGFuZGxlTW91c2VPdmVyIiwiaGFuZGxlTW91c2VMZWF2ZSIsImRhdGEiLCJNYXRoIiwiY2VpbCIsInB1c2giLCJwYWdlQnV0dG9uIiwidGV4dEFsaWduIiwiZGF0YUFtb3VudCIsInBhZ2VCbG9jayIsInBhZ2VMaXN0IiwibWFwIiwicm93IiwibGlzdEJsb2NrT25Ib3ZlciIsImxpc3RCbG9jayIsInRpdGxlIiwiYXV0aG9yIiwibWFyZ2luVG9wIiwiYXV0aG9yX25hbWUiLCJzdW1tYXJ5QmxvY2siLCJzdW1tYXJ5IiwiSG9tZVBhZ2UiLCJzdG9yZSIsImluaXRpYWxTdGF0ZSIsImFjdGlvblR5cGVzIiwiU1RBUlRTRUFSQ0hJTkciLCJGSU5JU0hTRUFSQ0hJTkciLCJyZWR1Y2VyIiwiYWN0aW9uIiwidHlwZSIsImluaXRTdG9yZSIsInByZWxvYWRlZFN0YXRlIiwiY3JlYXRlU3RvcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwiaW5pdGlhbGl6ZVN0b3JlIiwiX3N0b3JlIiwiZ2V0U3RhdGUiLCJ1bmRlZmluZWQiLCJ1c2VTdG9yZSIsInVzZU1lbW8iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7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LEtBQXRCLEVBQTZCO0FBQzNCYyxVQUFNLEdBQUdOLFNBQVMsaUNBQ2JSLEtBQUssQ0FBQ2UsUUFBTixFQURhLEdBRWJOLGNBRmEsRUFBbEIsQ0FEMkIsQ0FLM0I7O0FBQ0FULFNBQUssR0FBR2dCLFNBQVI7QUFDRCxHQVpnRCxDQWNqRDs7O0FBQ0EsWUFBbUMsT0FBT0YsTUFBUCxDQWZjLENBZ0JqRDs7QUFDQSxNQUFJLENBQUNkLEtBQUwsRUFBWUEsS0FBSyxHQUFHYyxNQUFSO0FBRVosU0FBT0EsTUFBUDtBQUNELENBcEJNO0FBc0JBLFNBQVNHLFFBQVQsQ0FBa0JoQixZQUFsQixFQUFnQztBQUNyQyxRQUFNRCxLQUFLLEdBQUdrQixxREFBTyxDQUFDLE1BQU1MLGVBQWUsQ0FBQ1osWUFBRCxDQUF0QixFQUFzQyxDQUFDQSxZQUFELENBQXRDLENBQXJCO0FBQ0EsU0FBT0QsS0FBUDtBQUNELEM7Ozs7Ozs7Ozs7O0FDN0ZELCtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vY3NzL0FwcC5tb2R1bGUuY3NzJztcclxuaW1wb3J0IExpc3QgZnJvbSAnLi9MaXN0JztcclxuaW1wb3J0IGFsZ29saWFzZWFyY2ggZnJvbSAnYWxnb2xpYXNlYXJjaC9saXRlJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHRvU3RhcnRTZWFyY2hpbmcsIHRvRmluaXNoU2VhcmNoaW5nIH0gZnJvbSAnLi4vLi4vc3RvcmUnO1xyXG5cclxuY29uc3QgY2xpZW50ID0gYWxnb2xpYXNlYXJjaChcclxuICAgICdYSU1STlZKTFE3JyxcclxuICAgICdjNzMxMjdmZGQzYWYxMTM2NTBiZDliODhlZWMzNzdiNScsXHJcbiAgICB7cHJvdG9jb2w6ICdodHRwczonfVxyXG4pO1xyXG5cclxuY29uc3QgaW5kZXggPSBjbGllbnQuaW5pdEluZGV4KCdDb21tdW5pdHlfYXJ0aWNsZXNfc3RhZ2luZycpO1xyXG5cclxuY29uc3QgQWxnb2xpYSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICAgIGNvbnN0IFsgaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZSBdID0gUmVhY3QudXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgWyBsaXN0ICwgc2V0TGlzdCBdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgWyBsaXN0TGVuZ3RoICwgc2V0TGlzdExlbmd0aCBdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbIHBhZ2VTZWxlY3RlZCwgc2V0UGFnZVNlbGVjdGVkIF0gPSBSZWFjdC51c2VTdGF0ZSgxKTtcclxuXHJcbiAgICAvL+aQnOWwi1xyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuXHJcbiAgICAgICAgZGlzcGF0Y2godG9TdGFydFNlYXJjaGluZygpKTsvL+aQnOWwi+S4rVxyXG4gICAgICAgIHNldFBhZ2VTZWxlY3RlZCgxKTsvL+mHjeaWsOaQnOWwi+ioreWumumggeeivOeCujFcclxuICAgICAgICBcclxuICAgICAgICBpZihlLnRhcmdldC52YWx1ZSl7XHJcbiAgICAgICAgICAgIGluZGV4XHJcbiAgICAgICAgICAgIC5zZWFyY2goZS50YXJnZXQudmFsdWUse1xyXG4gICAgICAgICAgICAgICAgcGFnZTowLFxyXG4gICAgICAgICAgICAgICAgaGl0c1BlclBhZ2U6MTAwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCh7IGhpdHMsIG5iSGl0cyB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh0b0ZpbmlzaFNlYXJjaGluZygpKTsvL+aQnOWwi+WujOaIkFxyXG4gICAgICAgICAgICAgICAgaWYoIWhpdHNbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMaXN0TGVuZ3RoKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExpc3QoW10pO1xyXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExpc3RMZW5ndGgobmJIaXRzKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMaXN0KGhpdHMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHRvRmluaXNoU2VhcmNoaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ1dvb3BzISBUcnkgYWdhaW4hJyk7XHJcbiAgICAgICAgICAgIH0pOyBcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgIHNldExpc3QoW10pO1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh0b0ZpbmlzaFNlYXJjaGluZygpKTtcclxuICAgICAgICAgICAgc2V0TGlzdExlbmd0aCgwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldElucHV0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6K6K5o+b6aCB56K8XHJcbiAgICBjb25zdCBoYW5kbGVUb1BhZ2UgPSAoaW5wdXRWYWx1ZSwgaSkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHRvU3RhcnRTZWFyY2hpbmcoKSk7XHJcbiAgICAgICAgc2V0UGFnZVNlbGVjdGVkKGkgKyAxKTtcclxuICAgICAgICBpbmRleFxyXG4gICAgICAgIC5zZWFyY2goaW5wdXRWYWx1ZSx7XHJcbiAgICAgICAgICAgIHBhZ2U6aSxcclxuICAgICAgICAgICAgaGl0c1BlclBhZ2U6MTAwXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoeyBoaXRzIH0pID0+IHtcclxuICAgICAgICAgICAgc2V0TGlzdChoaXRzKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2godG9GaW5pc2hTZWFyY2hpbmcoKSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2godG9GaW5pc2hTZWFyY2hpbmcoKSk7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdXb29wcyEgVHJ5IGFnYWluIScpO1xyXG4gICAgICAgIH0pOyBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJveH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm91dGVyQmxvY2t9PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ibG9ja30gc3R5bGU9e3twYWRkaW5nQm90dG9tOic1cHgnfX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyog5pCc5bCL5qyE5L2NICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0QmFja2dyb3VuZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2VhcmNoSW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cInNlYXJjaElucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIOWIl+ihqCAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0TGVuZ3RoPXtsaXN0TGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdD17bGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVRvUGFnZT17aGFuZGxlVG9QYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVNlbGVjdGVkPXtwYWdlU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbGdvbGlhIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9jc3MvQXBwLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmNvbnN0IExpc3QgPSAocHJvcHMpID0+IHsgICAgXHJcblxyXG4gICAgY29uc3QgWyBzdW1tYXJ5T3BlbiAsIHNldFN1bW1hcnlPcGVuIF0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbIGhvdmVyICwgc2V0SG92ZXIgXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCBpc1NlYXJjaGluZyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuaXNTZWFyY2hpbmcpO1xyXG5cclxuICAgIC8vIOaQnOWwi+abtOaWsOaZgua4heepunN1bW1hcnnplovpl5xcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHNldFN1bW1hcnlPcGVuKCcnKTtcclxuICAgICAgfSxbaXNTZWFyY2hpbmddKVxyXG5cclxuICAgIC8v5o6n5Yi2c3VtbWFyeemWi+mXnCAgXHJcbiAgICBjb25zdCBoYW5kbGVTdW1tYXJ5T3BlbiA9IChpKSA9PiB7XHJcbiAgICAgICAgaWYoc3VtbWFyeU9wZW4gPT09IGkpIHtcclxuICAgICAgICAgICAgc2V0U3VtbWFyeU9wZW4oJycpO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgc2V0U3VtbWFyeU9wZW4oaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOa4uOaomeenu+iHs+ihqOWWrlxyXG4gICAgY29uc3QgaGFuZGxlTW91c2VPdmVyID0gKGkpID0+IHtcclxuICAgICAgICBzZXRIb3ZlcihpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8g5ri45qiZ6Zui6ZaL6KGo5ZauXHJcbiAgICBjb25zdCBoYW5kbGVNb3VzZUxlYXZlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEhvdmVyKCcnKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgbGlzdCxcclxuICAgICAgICBsaXN0TGVuZ3RoLFxyXG4gICAgICAgIGhhbmRsZVRvUGFnZSxcclxuICAgICAgICBpbnB1dFZhbHVlLFxyXG4gICAgICAgIHBhZ2VTZWxlY3RlZFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIC8v6aCB56K8ICYmIOmggeexpFxyXG4gICAgbGV0IGRhdGEgPSBbXTtcclxuXHJcbiAgICBmb3IobGV0IGkgPSAxOyBpIDwgTWF0aC5jZWlsKGxpc3RMZW5ndGgvMTAwKSArIDE7IGkrKykge1xyXG4gICAgICAgIGRhdGEucHVzaChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT17c3R5bGVzLnBhZ2V9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3BhZ2VTZWxlY3RlZD09PWk/c3R5bGVzLnBhZ2VTZWxlY3RlZDpzdHlsZXMucGFnZUJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVUb1BhZ2UoaW5wdXRWYWx1ZSwgaS0xKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpfVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgey8qIOaQnOWwi+eLgOaFiyAgJibmkJzlsIvntZDmnpwgJiYg6aCB56K8ICovfVxyXG4gICAgICAgICAgICB7aXNTZWFyY2hpbmc/XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtdGVzdGlkPVwic2VhcmNoUmVzdWx0XCIgc3R5bGU9e3t0ZXh0QWxpZ246J2xlZnQnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXRhQW1vdW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU2VhcmNoaW5nLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj46XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtdGVzdGlkPVwic2VhcmNoUmVzdWx0XCIgc3R5bGU9e3t0ZXh0QWxpZ246J2xlZnQnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXRhQW1vdW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2xpc3RMZW5ndGh9IHBvc3RzIGZvdW5kXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge2xpc3RMZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnZUJsb2NrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnZUxpc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHsvKiDmkJzlsIvntZDmnpxsaXN0ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibGlzdFwiPlxyXG4gICAgICAgICAgICB7bGlzdC5tYXAoKHJvdywgaSkgPT4gXHJcbiAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aX0gXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtob3Zlcj09PWk/c3R5bGVzLmxpc3RCbG9ja09uSG92ZXI6c3R5bGVzLmxpc3RCbG9ja30gXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PntoYW5kbGVTdW1tYXJ5T3BlbihpKX19XHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9eygpPT57aGFuZGxlTW91c2VPdmVyKGkpfX1cclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpPT57aGFuZGxlTW91c2VMZWF2ZShpKX19XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJkYXRhTGlzdFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pntyb3cudGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXV0aG9yfSBzdHlsZT17e21hcmdpblRvcDonMTBweCd9fT57J0J5ICcgKyByb3cuYXV0aG9yX25hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge3N1bW1hcnlPcGVuID09PSBpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3VtbWFyeUJsb2NrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnN1bW1hcnl9PnsnQnknICsgcm93LnN1bW1hcnl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdDtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYm94XCI6IFwiQXBwX2JveF9fM1g4T2xcIixcblx0XCJvdXRlckJsb2NrXCI6IFwiQXBwX291dGVyQmxvY2tfXzNDcGJPXCIsXG5cdFwiYmxvY2tcIjogXCJBcHBfYmxvY2tfXzNSQzViXCIsXG5cdFwiaGVhZGVyXCI6IFwiQXBwX2hlYWRlcl9fMmdqdDhcIixcblx0XCJpbnB1dFwiOiBcIkFwcF9pbnB1dF9fMkhrMmNcIixcblx0XCJpbnB1dEJhY2tncm91bmRcIjogXCJBcHBfaW5wdXRCYWNrZ3JvdW5kX18xVzlpbVwiLFxuXHRcIm5leHRQYWdlQnV0dG9uXCI6IFwiQXBwX25leHRQYWdlQnV0dG9uX18zTWRtc1wiLFxuXHRcImRhdGFBbW91bnRcIjogXCJBcHBfZGF0YUFtb3VudF9fMWVLODlcIixcblx0XCJsaXN0QmxvY2tcIjogXCJBcHBfbGlzdEJsb2NrX18yRHdRWlwiLFxuXHRcImxpc3RCbG9ja09uSG92ZXJcIjogXCJBcHBfbGlzdEJsb2NrT25Ib3Zlcl9fVXZDNjhcIixcblx0XCJ0aXRsZVwiOiBcIkFwcF90aXRsZV9fMmNTZFZcIixcblx0XCJhdXRob3JcIjogXCJBcHBfYXV0aG9yX18yTk9kMlwiLFxuXHRcInN1bW1hcnlCbG9ja1wiOiBcIkFwcF9zdW1tYXJ5QmxvY2tfX2Qta2xuXCIsXG5cdFwic3VtbWFyeVwiOiBcIkFwcF9zdW1tYXJ5X18yUk1wSVwiLFxuXHRcInBhZ2VCbG9ja1wiOiBcIkFwcF9wYWdlQmxvY2tfX2lOeGlLXCIsXG5cdFwicGFnZUxpc3RcIjogXCJBcHBfcGFnZUxpc3RfXzJObndFXCIsXG5cdFwicGFnZUJ1dHRvblwiOiBcIkFwcF9wYWdlQnV0dG9uX18zbVF5ZFwiLFxuXHRcInBhZ2VTZWxlY3RlZFwiOiBcIkFwcF9wYWdlU2VsZWN0ZWRfXzMxTHB2XCIsXG5cdFwicGFnZVwiOiBcIkFwcF9wYWdlX18yaXFGQ1wiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQWxnb2xpYSBmcm9tICcuLi9jb21wb25lbnQvQWxnb2xpYS9BbGdvbGlhJ1xyXG5cclxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PntcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG5cclxuICAgICAgICAgIDxBbGdvbGlhLz5cclxuXHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxuXHJcbn1cclxuICBcclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2UiLCJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbidcclxuLy8gaW1wb3J0IHsgcGVyc2lzdFJlZHVjZXIgfSBmcm9tICdyZWR1eC1wZXJzaXN0J1xyXG4vLyBpbXBvcnQgc3RvcmFnZSBmcm9tICdyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlJ1xyXG5cclxubGV0IHN0b3JlXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgaXNTZWFyY2hpbmc6IGZhbHNlXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25UeXBlcyA9IHtcclxuICBTVEFSVFNFQVJDSElORzogJ1NUQVJUU0VBUkNISU5HJyxcclxuICBGSU5JU0hTRUFSQ0hJTkc6ICdGSU5JU0hTRUFSQ0hJTkcnXHJcbn1cclxuXHJcbi8vIFJFRFVDRVJTXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNUQVJUU0VBUkNISU5HOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzU2VhcmNoaW5nOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuRklOSVNIU0VBUkNISU5HOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzU2VhcmNoaW5nOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuXHJcbi8vIEFDVElPTlNcclxuZXhwb3J0IGNvbnN0IHRvU3RhcnRTZWFyY2hpbmcgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuU1RBUlRTRUFSQ0hJTkcgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdG9GaW5pc2hTZWFyY2hpbmcgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuRklOSVNIU0VBUkNISU5HIH1cclxufVxyXG5cclxuLy8gY29uc3QgcGVyc2lzdENvbmZpZyA9IHtcclxuLy8gICBrZXk6ICdwcmltYXJ5JyxcclxuLy8gICBzdG9yYWdlLFxyXG4vLyAgIHdoaXRlbGlzdDogWydtb2RlJywgJ2xhbmcnXSwgLy8gcGxhY2UgdG8gc2VsZWN0IHdoaWNoIHN0YXRlIHlvdSB3YW50IHRvIHBlcnNpc3RcclxuLy8gfVxyXG5cclxuLy8gY29uc3QgcGVyc2lzdGVkUmVkdWNlciA9IHBlcnNpc3RSZWR1Y2VyKHBlcnNpc3RDb25maWcsIHJlZHVjZXIpXHJcblxyXG4vLyBmdW5jdGlvbiBtYWtlU3RvcmUoaW5pdGlhbFN0YXRlID0gZXhhbXBsZUluaXRpYWxTdGF0ZSkge1xyXG4vLyAgIHJldHVybiBjcmVhdGVTdG9yZShcclxuLy8gICAgIHBlcnNpc3RlZFJlZHVjZXIsXHJcbi8vICAgICBpbml0aWFsU3RhdGUsXHJcbi8vICAgICBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSgpKVxyXG4vLyAgIClcclxuLy8gfVxyXG5cclxuZnVuY3Rpb24gaW5pdFN0b3JlKHByZWxvYWRlZFN0YXRlID0gaW5pdGlhbFN0YXRlKSB7XHJcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxyXG4gICAgcmVkdWNlcixcclxuICAgIHByZWxvYWRlZFN0YXRlLFxyXG4gICAgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoKSlcclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsaXplU3RvcmUgPSAocHJlbG9hZGVkU3RhdGUpID0+IHtcclxuICBsZXQgX3N0b3JlID0gc3RvcmUgPz8gaW5pdFN0b3JlKHByZWxvYWRlZFN0YXRlKVxyXG5cclxuICAvLyBBZnRlciBuYXZpZ2F0aW5nIHRvIGEgcGFnZSB3aXRoIGFuIGluaXRpYWwgUmVkdXggc3RhdGUsIG1lcmdlIHRoYXQgc3RhdGVcclxuICAvLyB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIGluIHRoZSBzdG9yZSwgYW5kIGNyZWF0ZSBhIG5ldyBzdG9yZVxyXG4gIGlmIChwcmVsb2FkZWRTdGF0ZSAmJiBzdG9yZSkge1xyXG4gICAgX3N0b3JlID0gaW5pdFN0b3JlKHtcclxuICAgICAgLi4uc3RvcmUuZ2V0U3RhdGUoKSxcclxuICAgICAgLi4ucHJlbG9hZGVkU3RhdGUsXHJcbiAgICB9KVxyXG4gICAgLy8gUmVzZXQgdGhlIGN1cnJlbnQgc3RvcmVcclxuICAgIHN0b3JlID0gdW5kZWZpbmVkXHJcbiAgfVxyXG5cclxuICAvLyBGb3IgU1NHIGFuZCBTU1IgYWx3YXlzIGNyZWF0ZSBhIG5ldyBzdG9yZVxyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIF9zdG9yZVxyXG4gIC8vIENyZWF0ZSB0aGUgc3RvcmUgb25jZSBpbiB0aGUgY2xpZW50XHJcbiAgaWYgKCFzdG9yZSkgc3RvcmUgPSBfc3RvcmVcclxuXHJcbiAgcmV0dXJuIF9zdG9yZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RvcmUoaW5pdGlhbFN0YXRlKSB7XHJcbiAgY29uc3Qgc3RvcmUgPSB1c2VNZW1vKCgpID0+IGluaXRpYWxpemVTdG9yZShpbml0aWFsU3RhdGUpLCBbaW5pdGlhbFN0YXRlXSlcclxuICByZXR1cm4gc3RvcmVcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbGdvbGlhc2VhcmNoL2xpdGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9