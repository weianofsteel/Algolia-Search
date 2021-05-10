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
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config */ "./config.js");

var _jsxFileName = "C:\\Users\\USER\\Desktop\\React-instantsearch\\component\\Algolia\\Algolia.js";







const client = algoliasearch_lite__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_7__["APP_ID"], _config__WEBPACK_IMPORTED_MODULE_7__["API_KEY"], {
  protocol: 'https:'
});
const index = client.initIndex(_config__WEBPACK_IMPORTED_MODULE_7__["indexName"]);

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
              onChange: handleChange,
              autoComplete: "off"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
            inputValue: inputValue,
            listLength: listLength,
            list: list,
            handleToPage: handleToPage,
            pageSelected: pageSelected
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 80,
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
          columnNumber: 25
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.author,
          style: {
            marginTop: '10px'
          },
          children: 'By ' + row.author_name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 25
        }, undefined), summaryOpen === i && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.summaryBlock,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.summary,
            children: row.summary
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 33
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 29
        }, undefined)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 21
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

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: APP_ID, API_KEY, indexName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ID", function() { return APP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_KEY", function() { return API_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexName", function() { return indexName; });
const APP_ID = 'XIMRNVJLQ7';
const API_KEY = 'c73127fdd3af113650bd9b88eec377b5';
const indexName = 'Community_articles_staging';

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
};

function initStore(preloadedState = initialState) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(reducer, preloadedState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])()));
}

const initializeStore = preloadedState => {
  var _store2;

  let _store = (_store2 = store) !== null && _store2 !== void 0 ? _store2 : initStore(preloadedState);

  if (preloadedState && store) {
    _store = initStore(_objectSpread(_objectSpread({}, store.getState()), preloadedState));
    store = undefined;
  }

  if (true) return _store;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L0FsZ29saWEvQWxnb2xpYS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvQWxnb2xpYS9MaXN0LmpzIiwid2VicGFjazovLy8uL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9jc3MvQXBwLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYWxnb2xpYXNlYXJjaC9saXRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiXSwibmFtZXMiOlsiY2xpZW50IiwiYWxnb2xpYXNlYXJjaCIsIkFQUF9JRCIsIkFQSV9LRVkiLCJwcm90b2NvbCIsImluZGV4IiwiaW5pdEluZGV4IiwiaW5kZXhOYW1lIiwiQWxnb2xpYSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJsaXN0Iiwic2V0TGlzdCIsImxpc3RMZW5ndGgiLCJzZXRMaXN0TGVuZ3RoIiwicGFnZVNlbGVjdGVkIiwic2V0UGFnZVNlbGVjdGVkIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRvU3RhcnRTZWFyY2hpbmciLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlYXJjaCIsInBhZ2UiLCJoaXRzUGVyUGFnZSIsInRoZW4iLCJoaXRzIiwibmJIaXRzIiwidG9GaW5pc2hTZWFyY2hpbmciLCJjYXRjaCIsImVyciIsImFsZXJ0IiwiaGFuZGxlVG9QYWdlIiwiaSIsInN0eWxlcyIsImJveCIsIm91dGVyQmxvY2siLCJibG9jayIsInBhZGRpbmdCb3R0b20iLCJpbnB1dEJhY2tncm91bmQiLCJpbnB1dCIsIkxpc3QiLCJwcm9wcyIsInN1bW1hcnlPcGVuIiwic2V0U3VtbWFyeU9wZW4iLCJob3ZlciIsInNldEhvdmVyIiwiaXNTZWFyY2hpbmciLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlRWZmZWN0IiwiaGFuZGxlU3VtbWFyeU9wZW4iLCJoYW5kbGVNb3VzZU92ZXIiLCJoYW5kbGVNb3VzZUxlYXZlIiwiZGF0YSIsIk1hdGgiLCJjZWlsIiwicHVzaCIsInBhZ2VCdXR0b24iLCJ0ZXh0QWxpZ24iLCJkYXRhQW1vdW50IiwicGFnZUJsb2NrIiwicGFnZUxpc3QiLCJtYXAiLCJyb3ciLCJsaXN0QmxvY2tPbkhvdmVyIiwibGlzdEJsb2NrIiwidGl0bGUiLCJhdXRob3IiLCJtYXJnaW5Ub3AiLCJhdXRob3JfbmFtZSIsInN1bW1hcnlCbG9jayIsInN1bW1hcnkiLCJIb21lUGFnZSIsInN0b3JlIiwiaW5pdGlhbFN0YXRlIiwiYWN0aW9uVHlwZXMiLCJTVEFSVFNFQVJDSElORyIsIkZJTklTSFNFQVJDSElORyIsInJlZHVjZXIiLCJhY3Rpb24iLCJ0eXBlIiwiaW5pdFN0b3JlIiwicHJlbG9hZGVkU3RhdGUiLCJjcmVhdGVTdG9yZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJpbml0aWFsaXplU3RvcmUiLCJfc3RvcmUiLCJnZXRTdGF0ZSIsInVuZGVmaW5lZCIsInVzZVN0b3JlIiwidXNlTWVtbyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxNQUFNLEdBQUdDLHlEQUFhLENBQ3hCQyw4Q0FEd0IsRUFFeEJDLCtDQUZ3QixFQUd4QjtBQUFDQyxVQUFRLEVBQUU7QUFBWCxDQUh3QixDQUE1QjtBQU1BLE1BQU1DLEtBQUssR0FBR0wsTUFBTSxDQUFDTSxTQUFQLENBQWlCQyxpREFBakIsQ0FBZDs7QUFFQSxNQUFNQyxPQUFPLEdBQUcsTUFBTTtBQUVsQixRQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsUUFBTSxDQUFFQyxVQUFGLEVBQWNDLGFBQWQsSUFBZ0NDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBQXRDO0FBQ0EsUUFBTSxDQUFFQyxJQUFGLEVBQVNDLE9BQVQsSUFBcUJILDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBQTNCO0FBQ0EsUUFBTSxDQUFFRyxVQUFGLEVBQWVDLGFBQWYsSUFBaUNMLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxDQUFmLENBQXZDO0FBQ0EsUUFBTSxDQUFFSyxZQUFGLEVBQWdCQyxlQUFoQixJQUFvQ1AsNENBQUssQ0FBQ0MsUUFBTixDQUFlLENBQWYsQ0FBMUMsQ0FOa0IsQ0FRbEI7O0FBQ0EsUUFBTU8sWUFBWSxHQUFJQyxDQUFELElBQU87QUFFeEJiLFlBQVEsQ0FBQ2MsK0RBQWdCLEVBQWpCLENBQVIsQ0FGd0IsQ0FFSzs7QUFDN0JILG1CQUFlLENBQUMsQ0FBRCxDQUFmLENBSHdCLENBR0w7O0FBRW5CLFFBQUdFLENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFaLEVBQWtCO0FBQ2RwQixXQUFLLENBQ0pxQixNQURELENBQ1FKLENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQURqQixFQUN1QjtBQUNuQkUsWUFBSSxFQUFDLENBRGM7QUFFbkJDLG1CQUFXLEVBQUM7QUFGTyxPQUR2QixFQUtDQyxJQUxELENBS00sQ0FBQztBQUFFQyxZQUFGO0FBQVFDO0FBQVIsT0FBRCxLQUFzQjtBQUN4QnRCLGdCQUFRLENBQUN1QixnRUFBaUIsRUFBbEIsQ0FBUixDQUR3QixDQUNNOztBQUM5QixZQUFHLENBQUNGLElBQUksQ0FBQyxDQUFELENBQVIsRUFBYTtBQUNUWix1QkFBYSxDQUFDLENBQUQsQ0FBYjtBQUNBRixpQkFBTyxDQUFDLEVBQUQsQ0FBUDtBQUNILFNBSEQsTUFHTTtBQUNGRSx1QkFBYSxDQUFDYSxNQUFELENBQWI7QUFDQWYsaUJBQU8sQ0FBQ2MsSUFBRCxDQUFQO0FBQ0g7QUFDSixPQWRELEVBZUNHLEtBZkQsQ0FlT0MsR0FBRyxJQUFJO0FBQ1Z6QixnQkFBUSxDQUFDdUIsZ0VBQWlCLEVBQWxCLENBQVI7QUFDQUcsYUFBSyxDQUFDLG1CQUFELENBQUw7QUFDSCxPQWxCRDtBQW1CSCxLQXBCRCxNQW9CTTtBQUNGbkIsYUFBTyxDQUFDLEVBQUQsQ0FBUDtBQUNBUCxjQUFRLENBQUN1QixnRUFBaUIsRUFBbEIsQ0FBUjtBQUNBZCxtQkFBYSxDQUFDLENBQUQsQ0FBYjtBQUNIOztBQUVETixpQkFBYSxDQUFDVSxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBVixDQUFiO0FBQ0gsR0FoQ0QsQ0FUa0IsQ0EyQ2xCOzs7QUFDQSxRQUFNVyxZQUFZLEdBQUcsQ0FBQ3pCLFVBQUQsRUFBYTBCLENBQWIsS0FBbUI7QUFDcEM1QixZQUFRLENBQUNjLCtEQUFnQixFQUFqQixDQUFSO0FBQ0FILG1CQUFlLENBQUNpQixDQUFDLEdBQUcsQ0FBTCxDQUFmO0FBQ0FoQyxTQUFLLENBQ0pxQixNQURELENBQ1FmLFVBRFIsRUFDbUI7QUFDZmdCLFVBQUksRUFBQ1UsQ0FEVTtBQUVmVCxpQkFBVyxFQUFDO0FBRkcsS0FEbkIsRUFLQ0MsSUFMRCxDQUtNLENBQUM7QUFBRUM7QUFBRixLQUFELEtBQWM7QUFDaEJkLGFBQU8sQ0FBQ2MsSUFBRCxDQUFQO0FBQ0FyQixjQUFRLENBQUN1QixnRUFBaUIsRUFBbEIsQ0FBUjtBQUNILEtBUkQsRUFTQ0MsS0FURCxDQVNPQyxHQUFHLElBQUk7QUFDVnpCLGNBQVEsQ0FBQ3VCLGdFQUFpQixFQUFsQixDQUFSO0FBQ0FHLFdBQUssQ0FBQyxtQkFBRCxDQUFMO0FBQ0gsS0FaRDtBQWFILEdBaEJEOztBQWtCQSxzQkFDSSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBRUcsMERBQU0sQ0FBQ0MsR0FBdkI7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUVELDBEQUFNLENBQUNFLFVBQXZCO0FBQUEsK0JBRUk7QUFBSyxtQkFBUyxFQUFFRiwwREFBTSxDQUFDRyxLQUF2QjtBQUE4QixlQUFLLEVBQUU7QUFBQ0MseUJBQWEsRUFBQztBQUFmLFdBQXJDO0FBQUEsa0NBR0k7QUFBSyxxQkFBUyxFQUFFSiwwREFBTSxDQUFDSyxlQUF2QjtBQUFBLG1DQUVJO0FBQ0ksZ0JBQUUsRUFBQyxhQURQO0FBRUksa0JBQUksRUFBQyxNQUZUO0FBR0ksbUJBQUssRUFBRWhDLFVBSFg7QUFJSSw2QkFBWSxhQUpoQjtBQUtJLHVCQUFTLEVBQUUyQiwwREFBTSxDQUFDTSxLQUx0QjtBQU1JLHNCQUFRLEVBQUV2QixZQU5kO0FBT0ksMEJBQVksRUFBQztBQVBqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFISixlQWtCSSxxRUFBQyw2Q0FBRDtBQUNJLHNCQUFVLEVBQUVWLFVBRGhCO0FBRUksc0JBQVUsRUFBRU0sVUFGaEI7QUFHSSxnQkFBSSxFQUFFRixJQUhWO0FBSUksd0JBQVksRUFBRXFCLFlBSmxCO0FBS0ksd0JBQVksRUFBRWpCO0FBTGxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBbEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBb0NILENBbEdEOztBQW9HZVgsc0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSEE7QUFDQTtBQUNBOztBQUVBLE1BQU1xQyxJQUFJLEdBQUlDLEtBQUQsSUFBVztBQUVwQixRQUFNLENBQUVDLFdBQUYsRUFBZ0JDLGNBQWhCLElBQW1DbkMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FBekM7QUFDQSxRQUFNLENBQUVtQyxLQUFGLEVBQVVDLFFBQVYsSUFBdUJyQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUE3QjtBQUVBLFFBQU1xQyxXQUFXLEdBQUdDLCtEQUFXLENBQUVDLEtBQUQsSUFBV0EsS0FBSyxDQUFDRixXQUFsQixDQUEvQixDQUxvQixDQU9wQjs7QUFDQUcseURBQVMsQ0FBQyxNQUFJO0FBQ1ZOLGtCQUFjLENBQUMsRUFBRCxDQUFkO0FBQ0QsR0FGTSxFQUVMLENBQUNHLFdBQUQsQ0FGSyxDQUFULENBUm9CLENBWXBCOztBQUNBLFFBQU1JLGlCQUFpQixHQUFJbEIsQ0FBRCxJQUFPO0FBQzdCLFFBQUdVLFdBQVcsS0FBS1YsQ0FBbkIsRUFBc0I7QUFDbEJXLG9CQUFjLENBQUMsRUFBRCxDQUFkO0FBQ0gsS0FGRCxNQUVNO0FBQ0ZBLG9CQUFjLENBQUNYLENBQUQsQ0FBZDtBQUNIO0FBQ0osR0FORCxDQWJvQixDQXFCcEI7OztBQUNBLFFBQU1tQixlQUFlLEdBQUluQixDQUFELElBQU87QUFDM0JhLFlBQVEsQ0FBQ2IsQ0FBRCxDQUFSO0FBQ0gsR0FGRCxDQXRCb0IsQ0EwQnBCOzs7QUFDQSxRQUFNb0IsZ0JBQWdCLEdBQUcsTUFBTTtBQUMzQlAsWUFBUSxDQUFDLEVBQUQsQ0FBUjtBQUNILEdBRkQ7O0FBSUEsUUFBTTtBQUNGbkMsUUFERTtBQUVGRSxjQUZFO0FBR0ZtQixnQkFIRTtBQUlGekIsY0FKRTtBQUtGUTtBQUxFLE1BTUYyQixLQU5KLENBL0JvQixDQXVDcEI7O0FBQ0EsTUFBSVksSUFBSSxHQUFHLEVBQVg7O0FBRUEsT0FBSSxJQUFJckIsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHc0IsSUFBSSxDQUFDQyxJQUFMLENBQVUzQyxVQUFVLEdBQUMsR0FBckIsSUFBNEIsQ0FBL0MsRUFBa0RvQixDQUFDLEVBQW5ELEVBQXVEO0FBQ25EcUIsUUFBSSxDQUFDRyxJQUFMLGVBQ0k7QUFBYSxlQUFTLEVBQUV2QiwwREFBTSxDQUFDWCxJQUEvQjtBQUFBLDZCQUNJO0FBQ0ksaUJBQVMsRUFBRVIsWUFBWSxLQUFHa0IsQ0FBZixHQUFpQkMsMERBQU0sQ0FBQ25CLFlBQXhCLEdBQXFDbUIsMERBQU0sQ0FBQ3dCLFVBRDNEO0FBRUksZUFBTyxFQUFFLE1BQUk7QUFDVDFCLHNCQUFZLENBQUN6QixVQUFELEVBQWEwQixDQUFDLEdBQUMsQ0FBZixDQUFaO0FBQ0gsU0FKTDtBQUFBLGtCQU1LQTtBQU5MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixPQUFVQSxDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREo7QUFZSDs7QUFFRCxzQkFDSSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSxlQUdLYyxXQUFXLGdCQUNSO0FBQUsscUJBQVksY0FBakI7QUFBZ0MsV0FBSyxFQUFFO0FBQUNZLGlCQUFTLEVBQUM7QUFBWCxPQUF2QztBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBRXpCLDBEQUFNLENBQUMwQixVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFEsZ0JBTVI7QUFBSyxxQkFBWSxjQUFqQjtBQUFnQyxXQUFLLEVBQUU7QUFBQ0QsaUJBQVMsRUFBQztBQUFYLE9BQXZDO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFFekIsMERBQU0sQ0FBQzBCLFVBQXZCO0FBQUEsbUJBQ0svQyxVQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixFQUlLQSxVQUFVLEdBQUcsQ0FBYixpQkFDRyxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSxnQ0FDSTtBQUFLLG1CQUFTLEVBQUVxQiwwREFBTSxDQUFDMkIsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFJSTtBQUFLLG1CQUFTLEVBQUUzQiwwREFBTSxDQUFDNEIsUUFBdkI7QUFBQSxvQkFDS1I7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVFIsZUEyQkk7QUFBSyxRQUFFLEVBQUMsTUFBUjtBQUFBLGdCQUNLM0MsSUFBSSxDQUFDb0QsR0FBTCxDQUFTLENBQUNDLEdBQUQsRUFBTS9CLENBQU4sa0JBQ047QUFFSSxpQkFBUyxFQUFFWSxLQUFLLEtBQUdaLENBQVIsR0FBVUMsMERBQU0sQ0FBQytCLGdCQUFqQixHQUFrQy9CLDBEQUFNLENBQUNnQyxTQUZ4RDtBQUdJLGVBQU8sRUFBRSxNQUFJO0FBQUNmLDJCQUFpQixDQUFDbEIsQ0FBRCxDQUFqQjtBQUFxQixTQUh2QztBQUlJLG1CQUFXLEVBQUUsTUFBSTtBQUFDbUIseUJBQWUsQ0FBQ25CLENBQUQsQ0FBZjtBQUFtQixTQUp6QztBQUtJLG9CQUFZLEVBQUUsTUFBSTtBQUFDb0IsMEJBQWdCLENBQUNwQixDQUFELENBQWhCO0FBQW9CLFNBTDNDO0FBTUksdUJBQVksVUFOaEI7QUFBQSxnQ0FRSTtBQUFNLG1CQUFTLEVBQUVDLDBEQUFNLENBQUNpQyxLQUF4QjtBQUFBLG9CQUFnQ0gsR0FBRyxDQUFDRztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVJKLGVBU0k7QUFBSyxtQkFBUyxFQUFFakMsMERBQU0sQ0FBQ2tDLE1BQXZCO0FBQStCLGVBQUssRUFBRTtBQUFDQyxxQkFBUyxFQUFDO0FBQVgsV0FBdEM7QUFBQSxvQkFBMkQsUUFBUUwsR0FBRyxDQUFDTTtBQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVRKLEVBVUszQixXQUFXLEtBQUtWLENBQWhCLGlCQUNHO0FBQUssbUJBQVMsRUFBRUMsMERBQU0sQ0FBQ3FDLFlBQXZCO0FBQUEsaUNBQ0k7QUFBTSxxQkFBUyxFQUFFckMsMERBQU0sQ0FBQ3NDLE9BQXhCO0FBQUEsc0JBQW1DUixHQUFHLENBQUNRO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVhSO0FBQUEsU0FDU3ZDLENBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBM0JKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBa0RILENBM0dEOztBQTZHZVEsbUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDakhBO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTTNDLE1BQU0sR0FBRyxZQUFmO0FBQ0EsTUFBTUMsT0FBTyxHQUFHLGtDQUFoQjtBQUNBLE1BQU1JLFNBQVMsR0FBRyw0QkFBbEIsQzs7Ozs7Ozs7Ozs7QUNGUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7O0FBRUEsTUFBTXNFLFFBQVEsR0FBRyxNQUFLO0FBQ2xCLHNCQUNJLHFFQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBLDJCQUVFLHFFQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFRSCxDQVREOztBQVdlQSx1RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBRUEsSUFBSUMsS0FBSjtBQUVBLE1BQU1DLFlBQVksR0FBRztBQUNuQjVCLGFBQVcsRUFBRTtBQURNLENBQXJCO0FBSU8sTUFBTTZCLFdBQVcsR0FBRztBQUN6QkMsZ0JBQWMsRUFBRSxnQkFEUztBQUV6QkMsaUJBQWUsRUFBRTtBQUZRLENBQXBCLEMsQ0FLUDs7QUFDTyxNQUFNQyxPQUFPLEdBQUcsQ0FBQzlCLEtBQUssR0FBRzBCLFlBQVQsRUFBdUJLLE1BQXZCLEtBQWtDO0FBQ3ZELFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUtMLFdBQVcsQ0FBQ0MsY0FBakI7QUFDRSw2Q0FDSzVCLEtBREw7QUFFRUYsbUJBQVcsRUFBRTtBQUZmOztBQUlGLFNBQUs2QixXQUFXLENBQUNFLGVBQWpCO0FBQ0UsNkNBQ0s3QixLQURMO0FBRUVGLG1CQUFXLEVBQUU7QUFGZjs7QUFJRjtBQUNFLGFBQU9FLEtBQVA7QUFaSjtBQWNELENBZk0sQyxDQWlCUDs7QUFDTyxNQUFNOUIsZ0JBQWdCLEdBQUcsTUFBTTtBQUNwQyxTQUFPO0FBQUU4RCxRQUFJLEVBQUVMLFdBQVcsQ0FBQ0M7QUFBcEIsR0FBUDtBQUNELENBRk07QUFJQSxNQUFNakQsaUJBQWlCLEdBQUcsTUFBTTtBQUNyQyxTQUFPO0FBQUVxRCxRQUFJLEVBQUVMLFdBQVcsQ0FBQ0U7QUFBcEIsR0FBUDtBQUNELENBRk07O0FBSVAsU0FBU0ksU0FBVCxDQUFtQkMsY0FBYyxHQUFHUixZQUFwQyxFQUFrRDtBQUNoRCxTQUFPUyx5REFBVyxDQUNoQkwsT0FEZ0IsRUFFaEJJLGNBRmdCLEVBR2hCRSxvRkFBbUIsQ0FBQ0MsNkRBQWUsRUFBaEIsQ0FISCxDQUFsQjtBQUtEOztBQUVNLE1BQU1DLGVBQWUsR0FBSUosY0FBRCxJQUFvQjtBQUFBOztBQUNqRCxNQUFJSyxNQUFNLGNBQUdkLEtBQUgsNkNBQVlRLFNBQVMsQ0FBQ0MsY0FBRCxDQUEvQjs7QUFHQSxNQUFJQSxjQUFjLElBQUlULEtBQXRCLEVBQTZCO0FBQzNCYyxVQUFNLEdBQUdOLFNBQVMsaUNBQ2JSLEtBQUssQ0FBQ2UsUUFBTixFQURhLEdBRWJOLGNBRmEsRUFBbEI7QUFLQVQsU0FBSyxHQUFHZ0IsU0FBUjtBQUNEOztBQUVELFlBQW1DLE9BQU9GLE1BQVA7QUFFbkMsTUFBSSxDQUFDZCxLQUFMLEVBQVlBLEtBQUssR0FBR2MsTUFBUjtBQUVaLFNBQU9BLE1BQVA7QUFDRCxDQWxCTTtBQW9CQSxTQUFTRyxRQUFULENBQWtCaEIsWUFBbEIsRUFBZ0M7QUFDckMsUUFBTUQsS0FBSyxHQUFHa0IscURBQU8sQ0FBQyxNQUFNTCxlQUFlLENBQUNaLFlBQUQsQ0FBdEIsRUFBc0MsQ0FBQ0EsWUFBRCxDQUF0QyxDQUFyQjtBQUNBLFNBQU9ELEtBQVA7QUFDRCxDOzs7Ozs7Ozs7OztBQ3pFRCwrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL2Nzcy9BcHAubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBMaXN0IGZyb20gJy4vTGlzdCc7XHJcbmltcG9ydCBhbGdvbGlhc2VhcmNoIGZyb20gJ2FsZ29saWFzZWFyY2gvbGl0ZSc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyB0b1N0YXJ0U2VhcmNoaW5nLCB0b0ZpbmlzaFNlYXJjaGluZyB9IGZyb20gJy4uLy4uL3N0b3JlJztcclxuaW1wb3J0IHsgQVBQX0lELCBBUElfS0VZLCBpbmRleE5hbWUgfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5cclxuY29uc3QgY2xpZW50ID0gYWxnb2xpYXNlYXJjaChcclxuICAgIEFQUF9JRCxcclxuICAgIEFQSV9LRVksXHJcbiAgICB7cHJvdG9jb2w6ICdodHRwczonfVxyXG4pO1xyXG5cclxuY29uc3QgaW5kZXggPSBjbGllbnQuaW5pdEluZGV4KGluZGV4TmFtZSk7XHJcblxyXG5jb25zdCBBbGdvbGlhID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gICAgY29uc3QgWyBpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlIF0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbIGxpc3QgLCBzZXRMaXN0IF0gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbIGxpc3RMZW5ndGggLCBzZXRMaXN0TGVuZ3RoIF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFsgcGFnZVNlbGVjdGVkLCBzZXRQYWdlU2VsZWN0ZWQgXSA9IFJlYWN0LnVzZVN0YXRlKDEpO1xyXG5cclxuICAgIC8v5pCc5bCLXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG5cclxuICAgICAgICBkaXNwYXRjaCh0b1N0YXJ0U2VhcmNoaW5nKCkpOy8v5pCc5bCL5LitXHJcbiAgICAgICAgc2V0UGFnZVNlbGVjdGVkKDEpOy8v6YeN5paw5pCc5bCL6Kit5a6a6aCB56K854K6MVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGUudGFyZ2V0LnZhbHVlKXtcclxuICAgICAgICAgICAgaW5kZXhcclxuICAgICAgICAgICAgLnNlYXJjaChlLnRhcmdldC52YWx1ZSx7XHJcbiAgICAgICAgICAgICAgICBwYWdlOjAsXHJcbiAgICAgICAgICAgICAgICBoaXRzUGVyUGFnZToxMDBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHsgaGl0cywgbmJIaXRzIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHRvRmluaXNoU2VhcmNoaW5nKCkpOy8v5pCc5bCL5a6M5oiQXHJcbiAgICAgICAgICAgICAgICBpZighaGl0c1swXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExpc3RMZW5ndGgoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TGlzdChbXSk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TGlzdExlbmd0aChuYkhpdHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExpc3QoaGl0cyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2godG9GaW5pc2hTZWFyY2hpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgnV29vcHMhIFRyeSBhZ2FpbiEnKTtcclxuICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgc2V0TGlzdChbXSk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHRvRmluaXNoU2VhcmNoaW5nKCkpO1xyXG4gICAgICAgICAgICBzZXRMaXN0TGVuZ3RoKDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/orormj5vpoIHnorxcclxuICAgIGNvbnN0IGhhbmRsZVRvUGFnZSA9IChpbnB1dFZhbHVlLCBpKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2godG9TdGFydFNlYXJjaGluZygpKTtcclxuICAgICAgICBzZXRQYWdlU2VsZWN0ZWQoaSArIDEpO1xyXG4gICAgICAgIGluZGV4XHJcbiAgICAgICAgLnNlYXJjaChpbnB1dFZhbHVlLHtcclxuICAgICAgICAgICAgcGFnZTppLFxyXG4gICAgICAgICAgICBoaXRzUGVyUGFnZToxMDBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKCh7IGhpdHMgfSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRMaXN0KGhpdHMpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh0b0ZpbmlzaFNlYXJjaGluZygpKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh0b0ZpbmlzaFNlYXJjaGluZygpKTtcclxuICAgICAgICAgICAgYWxlcnQoJ1dvb3BzISBUcnkgYWdhaW4hJyk7XHJcbiAgICAgICAgfSk7IFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm94fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3V0ZXJCbG9ja30+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJsb2NrfSBzdHlsZT17e3BhZGRpbmdCb3R0b206JzVweCd9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiDmkJzlsIvmrITkvY0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRCYWNrZ3JvdW5kfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzZWFyY2hJbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwic2VhcmNoSW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiDliJfooaggKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlPXtpbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdExlbmd0aD17bGlzdExlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Q9e2xpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVUb1BhZ2U9e2hhbmRsZVRvUGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTZWxlY3RlZD17cGFnZVNlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWxnb2xpYSIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vY3NzL0FwcC5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5jb25zdCBMaXN0ID0gKHByb3BzKSA9PiB7ICAgIFxyXG5cclxuICAgIGNvbnN0IFsgc3VtbWFyeU9wZW4gLCBzZXRTdW1tYXJ5T3BlbiBdID0gUmVhY3QudXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgWyBob3ZlciAsIHNldEhvdmVyIF0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3QgaXNTZWFyY2hpbmcgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmlzU2VhcmNoaW5nKTtcclxuXHJcbiAgICAvLyDmkJzlsIvmm7TmlrDmmYLmuIXnqbpzdW1tYXJ56ZaL6ZecXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBzZXRTdW1tYXJ5T3BlbignJyk7XHJcbiAgICAgIH0sW2lzU2VhcmNoaW5nXSlcclxuXHJcbiAgICAvL+aOp+WItnN1bW1hcnnplovpl5wgIFxyXG4gICAgY29uc3QgaGFuZGxlU3VtbWFyeU9wZW4gPSAoaSkgPT4ge1xyXG4gICAgICAgIGlmKHN1bW1hcnlPcGVuID09PSBpKSB7XHJcbiAgICAgICAgICAgIHNldFN1bW1hcnlPcGVuKCcnKTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFN1bW1hcnlPcGVuKGkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDmuLjmqJnnp7voh7Pooajllq5cclxuICAgIGNvbnN0IGhhbmRsZU1vdXNlT3ZlciA9IChpKSA9PiB7XHJcbiAgICAgICAgc2V0SG92ZXIoaSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIOa4uOaomemboumWi+ihqOWWrlxyXG4gICAgY29uc3QgaGFuZGxlTW91c2VMZWF2ZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRIb3ZlcignJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGxpc3QsXHJcbiAgICAgICAgbGlzdExlbmd0aCxcclxuICAgICAgICBoYW5kbGVUb1BhZ2UsXHJcbiAgICAgICAgaW5wdXRWYWx1ZSxcclxuICAgICAgICBwYWdlU2VsZWN0ZWRcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICAvL+mggeeivCAmJiDpoIHnsaRcclxuICAgIGxldCBkYXRhID0gW107XHJcblxyXG4gICAgZm9yKGxldCBpID0gMTsgaSA8IE1hdGguY2VpbChsaXN0TGVuZ3RoLzEwMCkgKyAxOyBpKyspIHtcclxuICAgICAgICBkYXRhLnB1c2goXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9e3N0eWxlcy5wYWdlfT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwYWdlU2VsZWN0ZWQ9PT1pP3N0eWxlcy5wYWdlU2VsZWN0ZWQ6c3R5bGVzLnBhZ2VCdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlVG9QYWdlKGlucHV0VmFsdWUsIGktMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7aX1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHsvKiDmkJzlsIvni4DmhYsgICYmIOaQnOWwi+e1kOaenCAmJiDpoIHnorwgKi99XHJcbiAgICAgICAgICAgIHtpc1NlYXJjaGluZz9cclxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS10ZXN0aWQ9XCJzZWFyY2hSZXN1bHRcIiBzdHlsZT17e3RleHRBbGlnbjonbGVmdCd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGFBbW91bnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTZWFyY2hpbmcuLi5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PjpcclxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS10ZXN0aWQ9XCJzZWFyY2hSZXN1bHRcIiBzdHlsZT17e3RleHRBbGlnbjonbGVmdCd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGFBbW91bnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bGlzdExlbmd0aH0gcG9zdHMgZm91bmRcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7bGlzdExlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlQmxvY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlTGlzdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgey8qIOaQnOWwi+e1kOaenGxpc3QgKi99XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJsaXN0XCI+XHJcbiAgICAgICAgICAgICAgICB7bGlzdC5tYXAoKHJvdywgaSkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtob3Zlcj09PWk/c3R5bGVzLmxpc3RCbG9ja09uSG92ZXI6c3R5bGVzLmxpc3RCbG9ja30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT57aGFuZGxlU3VtbWFyeU9wZW4oaSl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17KCk9PntoYW5kbGVNb3VzZU92ZXIoaSl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpPT57aGFuZGxlTW91c2VMZWF2ZShpKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiZGF0YUxpc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pntyb3cudGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF1dGhvcn0gc3R5bGU9e3ttYXJnaW5Ub3A6JzEwcHgnfX0+eydCeSAnICsgcm93LmF1dGhvcl9uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3VtbWFyeU9wZW4gPT09IGkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3VtbWFyeUJsb2NrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zdW1tYXJ5fT57IHJvdy5zdW1tYXJ5IH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdDtcclxuIiwiZXhwb3J0IGNvbnN0IEFQUF9JRCA9ICdYSU1STlZKTFE3JztcclxuZXhwb3J0IGNvbnN0IEFQSV9LRVkgPSAnYzczMTI3ZmRkM2FmMTEzNjUwYmQ5Yjg4ZWVjMzc3YjUnO1xyXG5leHBvcnQgY29uc3QgaW5kZXhOYW1lID0gJ0NvbW11bml0eV9hcnRpY2xlc19zdGFnaW5nJzsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJib3hcIjogXCJBcHBfYm94X18zWDhPbFwiLFxuXHRcIm91dGVyQmxvY2tcIjogXCJBcHBfb3V0ZXJCbG9ja19fM0NwYk9cIixcblx0XCJibG9ja1wiOiBcIkFwcF9ibG9ja19fM1JDNWJcIixcblx0XCJoZWFkZXJcIjogXCJBcHBfaGVhZGVyX18yZ2p0OFwiLFxuXHRcImlucHV0XCI6IFwiQXBwX2lucHV0X18ySGsyY1wiLFxuXHRcImlucHV0QmFja2dyb3VuZFwiOiBcIkFwcF9pbnB1dEJhY2tncm91bmRfXzFXOWltXCIsXG5cdFwibmV4dFBhZ2VCdXR0b25cIjogXCJBcHBfbmV4dFBhZ2VCdXR0b25fXzNNZG1zXCIsXG5cdFwiZGF0YUFtb3VudFwiOiBcIkFwcF9kYXRhQW1vdW50X18xZUs4OVwiLFxuXHRcImxpc3RCbG9ja1wiOiBcIkFwcF9saXN0QmxvY2tfXzJEd1FaXCIsXG5cdFwibGlzdEJsb2NrT25Ib3ZlclwiOiBcIkFwcF9saXN0QmxvY2tPbkhvdmVyX19VdkM2OFwiLFxuXHRcInRpdGxlXCI6IFwiQXBwX3RpdGxlX18yY1NkVlwiLFxuXHRcImF1dGhvclwiOiBcIkFwcF9hdXRob3JfXzJOT2QyXCIsXG5cdFwic3VtbWFyeUJsb2NrXCI6IFwiQXBwX3N1bW1hcnlCbG9ja19fZC1rbG5cIixcblx0XCJzdW1tYXJ5XCI6IFwiQXBwX3N1bW1hcnlfXzJSTXBJXCIsXG5cdFwicGFnZUJsb2NrXCI6IFwiQXBwX3BhZ2VCbG9ja19faU54aUtcIixcblx0XCJwYWdlTGlzdFwiOiBcIkFwcF9wYWdlTGlzdF9fMk5ud0VcIixcblx0XCJwYWdlQnV0dG9uXCI6IFwiQXBwX3BhZ2VCdXR0b25fXzNtUXlkXCIsXG5cdFwicGFnZVNlbGVjdGVkXCI6IFwiQXBwX3BhZ2VTZWxlY3RlZF9fMzFMcHZcIixcblx0XCJwYWdlXCI6IFwiQXBwX3BhZ2VfXzJpcUZDXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBBbGdvbGlhIGZyb20gJy4uL2NvbXBvbmVudC9BbGdvbGlhL0FsZ29saWEnXHJcblxyXG5jb25zdCBIb21lUGFnZSA9ICgpID0+e1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4gICAgICAgICAgPEFsZ29saWEvPlxyXG5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG5cclxufVxyXG4gIFxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZSIsImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJ1xyXG5cclxubGV0IHN0b3JlXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgaXNTZWFyY2hpbmc6IGZhbHNlXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25UeXBlcyA9IHtcclxuICBTVEFSVFNFQVJDSElORzogJ1NUQVJUU0VBUkNISU5HJyxcclxuICBGSU5JU0hTRUFSQ0hJTkc6ICdGSU5JU0hTRUFSQ0hJTkcnXHJcbn1cclxuXHJcbi8vIFJFRFVDRVJTXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNUQVJUU0VBUkNISU5HOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzU2VhcmNoaW5nOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuRklOSVNIU0VBUkNISU5HOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzU2VhcmNoaW5nOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuXHJcbi8vIEFDVElPTlNcclxuZXhwb3J0IGNvbnN0IHRvU3RhcnRTZWFyY2hpbmcgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuU1RBUlRTRUFSQ0hJTkcgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdG9GaW5pc2hTZWFyY2hpbmcgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuRklOSVNIU0VBUkNISU5HIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdFN0b3JlKHByZWxvYWRlZFN0YXRlID0gaW5pdGlhbFN0YXRlKSB7XHJcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxyXG4gICAgcmVkdWNlcixcclxuICAgIHByZWxvYWRlZFN0YXRlLFxyXG4gICAgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoKSlcclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsaXplU3RvcmUgPSAocHJlbG9hZGVkU3RhdGUpID0+IHtcclxuICBsZXQgX3N0b3JlID0gc3RvcmUgPz8gaW5pdFN0b3JlKHByZWxvYWRlZFN0YXRlKVxyXG5cclxuXHJcbiAgaWYgKHByZWxvYWRlZFN0YXRlICYmIHN0b3JlKSB7XHJcbiAgICBfc3RvcmUgPSBpbml0U3RvcmUoe1xyXG4gICAgICAuLi5zdG9yZS5nZXRTdGF0ZSgpLFxyXG4gICAgICAuLi5wcmVsb2FkZWRTdGF0ZSxcclxuICAgIH0pXHJcbiAgXHJcbiAgICBzdG9yZSA9IHVuZGVmaW5lZFxyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gX3N0b3JlXHJcblxyXG4gIGlmICghc3RvcmUpIHN0b3JlID0gX3N0b3JlXHJcblxyXG4gIHJldHVybiBfc3RvcmVcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0b3JlKGluaXRpYWxTdGF0ZSkge1xyXG4gIGNvbnN0IHN0b3JlID0gdXNlTWVtbygoKSA9PiBpbml0aWFsaXplU3RvcmUoaW5pdGlhbFN0YXRlKSwgW2luaXRpYWxTdGF0ZV0pXHJcbiAgcmV0dXJuIHN0b3JlXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYWxnb2xpYXNlYXJjaC9saXRlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==