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
  const {
    0: inputValue,
    1: setInputValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: list,
    1: setList
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: listLength,
    1: setListLength
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: pageSelected,
    1: setPageSelected
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1);
  const {
    0: searchValue,
    1: setSearchValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const delayDebounce = setTimeout(() => {
      handleSearch(searchValue);
    }, 1000);
    return () => clearTimeout(delayDebounce);
  }, [searchValue]); //搜尋

  const handleSearch = searchValue => {
    dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_6__["toStartSearching"])()); //搜尋中

    setPageSelected(1); //重新搜尋設定頁碼為1

    if (searchValue) {
      index.search(searchValue, {
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

    setInputValue(searchValue);
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
              value: searchValue,
              "data-testid": "searchInput",
              className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.input,
              onChange: e => {
                setSearchValue(e.target.value);
              },
              autoComplete: "off"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
            inputValue: inputValue,
            listLength: listLength,
            list: list,
            handleToPage: handleToPage,
            pageSelected: pageSelected
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 89,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L0FsZ29saWEvQWxnb2xpYS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvQWxnb2xpYS9MaXN0LmpzIiwid2VicGFjazovLy8uL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9jc3MvQXBwLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYWxnb2xpYXNlYXJjaC9saXRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiXSwibmFtZXMiOlsiY2xpZW50IiwiYWxnb2xpYXNlYXJjaCIsIkFQUF9JRCIsIkFQSV9LRVkiLCJwcm90b2NvbCIsImluZGV4IiwiaW5pdEluZGV4IiwiaW5kZXhOYW1lIiwiQWxnb2xpYSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsInVzZVN0YXRlIiwibGlzdCIsInNldExpc3QiLCJsaXN0TGVuZ3RoIiwic2V0TGlzdExlbmd0aCIsInBhZ2VTZWxlY3RlZCIsInNldFBhZ2VTZWxlY3RlZCIsInNlYXJjaFZhbHVlIiwic2V0U2VhcmNoVmFsdWUiLCJ1c2VFZmZlY3QiLCJkZWxheURlYm91bmNlIiwic2V0VGltZW91dCIsImhhbmRsZVNlYXJjaCIsImNsZWFyVGltZW91dCIsInRvU3RhcnRTZWFyY2hpbmciLCJzZWFyY2giLCJwYWdlIiwiaGl0c1BlclBhZ2UiLCJ0aGVuIiwiaGl0cyIsIm5iSGl0cyIsInRvRmluaXNoU2VhcmNoaW5nIiwiY2F0Y2giLCJlcnIiLCJhbGVydCIsImhhbmRsZVRvUGFnZSIsImkiLCJzdHlsZXMiLCJib3giLCJvdXRlckJsb2NrIiwiYmxvY2siLCJwYWRkaW5nQm90dG9tIiwiaW5wdXRCYWNrZ3JvdW5kIiwiaW5wdXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJMaXN0IiwicHJvcHMiLCJzdW1tYXJ5T3BlbiIsInNldFN1bW1hcnlPcGVuIiwiUmVhY3QiLCJob3ZlciIsInNldEhvdmVyIiwiaXNTZWFyY2hpbmciLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiaGFuZGxlU3VtbWFyeU9wZW4iLCJoYW5kbGVNb3VzZU92ZXIiLCJoYW5kbGVNb3VzZUxlYXZlIiwiZGF0YSIsIk1hdGgiLCJjZWlsIiwicHVzaCIsInBhZ2VCdXR0b24iLCJ0ZXh0QWxpZ24iLCJkYXRhQW1vdW50IiwicGFnZUJsb2NrIiwicGFnZUxpc3QiLCJtYXAiLCJyb3ciLCJsaXN0QmxvY2tPbkhvdmVyIiwibGlzdEJsb2NrIiwidGl0bGUiLCJhdXRob3IiLCJtYXJnaW5Ub3AiLCJhdXRob3JfbmFtZSIsInN1bW1hcnlCbG9jayIsInN1bW1hcnkiLCJIb21lUGFnZSIsInN0b3JlIiwiaW5pdGlhbFN0YXRlIiwiYWN0aW9uVHlwZXMiLCJTVEFSVFNFQVJDSElORyIsIkZJTklTSFNFQVJDSElORyIsInJlZHVjZXIiLCJhY3Rpb24iLCJ0eXBlIiwiaW5pdFN0b3JlIiwicHJlbG9hZGVkU3RhdGUiLCJjcmVhdGVTdG9yZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJpbml0aWFsaXplU3RvcmUiLCJfc3RvcmUiLCJnZXRTdGF0ZSIsInVuZGVmaW5lZCIsInVzZVN0b3JlIiwidXNlTWVtbyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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Q0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL2Nzcy9BcHAubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBMaXN0IGZyb20gJy4vTGlzdCc7XHJcbmltcG9ydCBhbGdvbGlhc2VhcmNoIGZyb20gJ2FsZ29saWFzZWFyY2gvbGl0ZSc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyB0b1N0YXJ0U2VhcmNoaW5nLCB0b0ZpbmlzaFNlYXJjaGluZyB9IGZyb20gJy4uLy4uL3N0b3JlJztcclxuaW1wb3J0IHsgQVBQX0lELCBBUElfS0VZLCBpbmRleE5hbWUgfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5cclxuY29uc3QgY2xpZW50ID0gYWxnb2xpYXNlYXJjaChcclxuICAgIEFQUF9JRCxcclxuICAgIEFQSV9LRVksXHJcbiAgICB7cHJvdG9jb2w6ICdodHRwczonfVxyXG4pO1xyXG5cclxuY29uc3QgaW5kZXggPSBjbGllbnQuaW5pdEluZGV4KGluZGV4TmFtZSk7XHJcblxyXG5jb25zdCBBbGdvbGlhID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IFsgaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZSBdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgWyBsaXN0ICwgc2V0TGlzdCBdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgWyBsaXN0TGVuZ3RoICwgc2V0TGlzdExlbmd0aCBdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbIHBhZ2VTZWxlY3RlZCwgc2V0UGFnZVNlbGVjdGVkIF0gPSB1c2VTdGF0ZSgxKTtcclxuICAgIGNvbnN0IFtzZWFyY2hWYWx1ZSwgc2V0U2VhcmNoVmFsdWVdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGVsYXlEZWJvdW5jZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBoYW5kbGVTZWFyY2goc2VhcmNoVmFsdWUpO1xyXG4gICAgICAgIH0sIDEwMDApXHJcbiAgICBcclxuICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KGRlbGF5RGVib3VuY2UpXHJcbiAgICAgIH0sIFtzZWFyY2hWYWx1ZV0pXHJcblxyXG4gICAgLy/mkJzlsItcclxuICAgIGNvbnN0IGhhbmRsZVNlYXJjaCA9IChzZWFyY2hWYWx1ZSkgPT4ge1xyXG5cclxuICAgICAgICBkaXNwYXRjaCh0b1N0YXJ0U2VhcmNoaW5nKCkpOy8v5pCc5bCL5LitXHJcbiAgICAgICAgc2V0UGFnZVNlbGVjdGVkKDEpOy8v6YeN5paw5pCc5bCL6Kit5a6a6aCB56K854K6MVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHNlYXJjaFZhbHVlKXtcclxuICAgICAgICAgICAgaW5kZXhcclxuICAgICAgICAgICAgLnNlYXJjaChzZWFyY2hWYWx1ZSx7XHJcbiAgICAgICAgICAgICAgICBwYWdlOjAsXHJcbiAgICAgICAgICAgICAgICBoaXRzUGVyUGFnZToxMDBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHsgaGl0cywgbmJIaXRzIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHRvRmluaXNoU2VhcmNoaW5nKCkpOy8v5pCc5bCL5a6M5oiQXHJcbiAgICAgICAgICAgICAgICBpZighaGl0c1swXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExpc3RMZW5ndGgoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TGlzdChbXSk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TGlzdExlbmd0aChuYkhpdHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExpc3QoaGl0cyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2godG9GaW5pc2hTZWFyY2hpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgnV29vcHMhIFRyeSBhZ2FpbiEnKTtcclxuICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgc2V0TGlzdChbXSk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHRvRmluaXNoU2VhcmNoaW5nKCkpO1xyXG4gICAgICAgICAgICBzZXRMaXN0TGVuZ3RoKDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0SW5wdXRWYWx1ZShzZWFyY2hWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/orormj5vpoIHnorxcclxuICAgIGNvbnN0IGhhbmRsZVRvUGFnZSA9IChpbnB1dFZhbHVlLCBpKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2godG9TdGFydFNlYXJjaGluZygpKTtcclxuICAgICAgICBzZXRQYWdlU2VsZWN0ZWQoaSArIDEpO1xyXG4gICAgICAgIGluZGV4XHJcbiAgICAgICAgLnNlYXJjaChpbnB1dFZhbHVlLHtcclxuICAgICAgICAgICAgcGFnZTppLFxyXG4gICAgICAgICAgICBoaXRzUGVyUGFnZToxMDBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKCh7IGhpdHMgfSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRMaXN0KGhpdHMpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh0b0ZpbmlzaFNlYXJjaGluZygpKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh0b0ZpbmlzaFNlYXJjaGluZygpKTtcclxuICAgICAgICAgICAgYWxlcnQoJ1dvb3BzISBUcnkgYWdhaW4hJyk7XHJcbiAgICAgICAgfSk7IFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm94fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3V0ZXJCbG9ja30+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJsb2NrfSBzdHlsZT17e3BhZGRpbmdCb3R0b206JzVweCd9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiDmkJzlsIvmrITkvY0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRCYWNrZ3JvdW5kfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzZWFyY2hJbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cInNlYXJjaElucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT57c2V0U2VhcmNoVmFsdWUoZS50YXJnZXQudmFsdWUpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIOWIl+ihqCAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0TGVuZ3RoPXtsaXN0TGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdD17bGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVRvUGFnZT17aGFuZGxlVG9QYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVNlbGVjdGVkPXtwYWdlU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbGdvbGlhIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9jc3MvQXBwLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmNvbnN0IExpc3QgPSAocHJvcHMpID0+IHsgICAgXHJcblxyXG4gICAgY29uc3QgWyBzdW1tYXJ5T3BlbiAsIHNldFN1bW1hcnlPcGVuIF0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbIGhvdmVyICwgc2V0SG92ZXIgXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCBpc1NlYXJjaGluZyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuaXNTZWFyY2hpbmcpO1xyXG5cclxuICAgIC8vIOaQnOWwi+abtOaWsOaZgua4heepunN1bW1hcnnplovpl5xcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHNldFN1bW1hcnlPcGVuKCcnKTtcclxuICAgICAgfSxbaXNTZWFyY2hpbmddKVxyXG5cclxuICAgIC8v5o6n5Yi2c3VtbWFyeemWi+mXnCAgXHJcbiAgICBjb25zdCBoYW5kbGVTdW1tYXJ5T3BlbiA9IChpKSA9PiB7XHJcbiAgICAgICAgaWYoc3VtbWFyeU9wZW4gPT09IGkpIHtcclxuICAgICAgICAgICAgc2V0U3VtbWFyeU9wZW4oJycpO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgc2V0U3VtbWFyeU9wZW4oaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOa4uOaomeenu+iHs+ihqOWWrlxyXG4gICAgY29uc3QgaGFuZGxlTW91c2VPdmVyID0gKGkpID0+IHtcclxuICAgICAgICBzZXRIb3ZlcihpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8g5ri45qiZ6Zui6ZaL6KGo5ZauXHJcbiAgICBjb25zdCBoYW5kbGVNb3VzZUxlYXZlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEhvdmVyKCcnKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgbGlzdCxcclxuICAgICAgICBsaXN0TGVuZ3RoLFxyXG4gICAgICAgIGhhbmRsZVRvUGFnZSxcclxuICAgICAgICBpbnB1dFZhbHVlLFxyXG4gICAgICAgIHBhZ2VTZWxlY3RlZFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIC8v6aCB56K8ICYmIOmggeexpFxyXG4gICAgbGV0IGRhdGEgPSBbXTtcclxuXHJcbiAgICBmb3IobGV0IGkgPSAxOyBpIDwgTWF0aC5jZWlsKGxpc3RMZW5ndGgvMTAwKSArIDE7IGkrKykge1xyXG4gICAgICAgIGRhdGEucHVzaChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT17c3R5bGVzLnBhZ2V9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3BhZ2VTZWxlY3RlZD09PWk/c3R5bGVzLnBhZ2VTZWxlY3RlZDpzdHlsZXMucGFnZUJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVUb1BhZ2UoaW5wdXRWYWx1ZSwgaS0xKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpfVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgey8qIOaQnOWwi+eLgOaFiyAgJiYg5pCc5bCL57WQ5p6cICYmIOmggeeivCAqL31cclxuICAgICAgICAgICAge2lzU2VhcmNoaW5nP1xyXG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXRlc3RpZD1cInNlYXJjaFJlc3VsdFwiIHN0eWxlPXt7dGV4dEFsaWduOidsZWZ0J319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0YUFtb3VudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNlYXJjaGluZy4uLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+OlxyXG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXRlc3RpZD1cInNlYXJjaFJlc3VsdFwiIHN0eWxlPXt7dGV4dEFsaWduOidsZWZ0J319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0YUFtb3VudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtsaXN0TGVuZ3RofSBwb3N0cyBmb3VuZFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtsaXN0TGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhZ2VCbG9ja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhZ2VMaXN0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB7Lyog5pCc5bCL57WQ5p6cbGlzdCAqL31cclxuICAgICAgICAgICAgPGRpdiBpZD1cImxpc3RcIj5cclxuICAgICAgICAgICAgICAgIHtsaXN0Lm1hcCgocm93LCBpKSA9PiBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2hvdmVyPT09aT9zdHlsZXMubGlzdEJsb2NrT25Ib3ZlcjpzdHlsZXMubGlzdEJsb2NrfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PntoYW5kbGVTdW1tYXJ5T3BlbihpKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyPXsoKT0+e2hhbmRsZU1vdXNlT3ZlcihpKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCk9PntoYW5kbGVNb3VzZUxlYXZlKGkpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJkYXRhTGlzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e3Jvdy50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXV0aG9yfSBzdHlsZT17e21hcmdpblRvcDonMTBweCd9fT57J0J5ICcgKyByb3cuYXV0aG9yX25hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdW1tYXJ5T3BlbiA9PT0gaSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdW1tYXJ5QmxvY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnN1bW1hcnl9Pnsgcm93LnN1bW1hcnkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0O1xyXG4iLCJleHBvcnQgY29uc3QgQVBQX0lEID0gJ1hJTVJOVkpMUTcnO1xyXG5leHBvcnQgY29uc3QgQVBJX0tFWSA9ICdjNzMxMjdmZGQzYWYxMTM2NTBiZDliODhlZWMzNzdiNSc7XHJcbmV4cG9ydCBjb25zdCBpbmRleE5hbWUgPSAnQ29tbXVuaXR5X2FydGljbGVzX3N0YWdpbmcnOyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJveFwiOiBcIkFwcF9ib3hfXzNYOE9sXCIsXG5cdFwib3V0ZXJCbG9ja1wiOiBcIkFwcF9vdXRlckJsb2NrX18zQ3BiT1wiLFxuXHRcImJsb2NrXCI6IFwiQXBwX2Jsb2NrX18zUkM1YlwiLFxuXHRcImhlYWRlclwiOiBcIkFwcF9oZWFkZXJfXzJnanQ4XCIsXG5cdFwiaW5wdXRcIjogXCJBcHBfaW5wdXRfXzJIazJjXCIsXG5cdFwiaW5wdXRCYWNrZ3JvdW5kXCI6IFwiQXBwX2lucHV0QmFja2dyb3VuZF9fMVc5aW1cIixcblx0XCJuZXh0UGFnZUJ1dHRvblwiOiBcIkFwcF9uZXh0UGFnZUJ1dHRvbl9fM01kbXNcIixcblx0XCJkYXRhQW1vdW50XCI6IFwiQXBwX2RhdGFBbW91bnRfXzFlSzg5XCIsXG5cdFwibGlzdEJsb2NrXCI6IFwiQXBwX2xpc3RCbG9ja19fMkR3UVpcIixcblx0XCJsaXN0QmxvY2tPbkhvdmVyXCI6IFwiQXBwX2xpc3RCbG9ja09uSG92ZXJfX1V2QzY4XCIsXG5cdFwidGl0bGVcIjogXCJBcHBfdGl0bGVfXzJjU2RWXCIsXG5cdFwiYXV0aG9yXCI6IFwiQXBwX2F1dGhvcl9fMk5PZDJcIixcblx0XCJzdW1tYXJ5QmxvY2tcIjogXCJBcHBfc3VtbWFyeUJsb2NrX19kLWtsblwiLFxuXHRcInN1bW1hcnlcIjogXCJBcHBfc3VtbWFyeV9fMlJNcElcIixcblx0XCJwYWdlQmxvY2tcIjogXCJBcHBfcGFnZUJsb2NrX19pTnhpS1wiLFxuXHRcInBhZ2VMaXN0XCI6IFwiQXBwX3BhZ2VMaXN0X18yTm53RVwiLFxuXHRcInBhZ2VCdXR0b25cIjogXCJBcHBfcGFnZUJ1dHRvbl9fM21ReWRcIixcblx0XCJwYWdlU2VsZWN0ZWRcIjogXCJBcHBfcGFnZVNlbGVjdGVkX18zMUxwdlwiLFxuXHRcInBhZ2VcIjogXCJBcHBfcGFnZV9fMmlxRkNcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEFsZ29saWEgZnJvbSAnLi4vY29tcG9uZW50L0FsZ29saWEvQWxnb2xpYSdcclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gKCkgPT57XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuXHJcbiAgICAgICAgICA8QWxnb2xpYS8+XHJcblxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcblxyXG59XHJcbiAgXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlIiwiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nXHJcblxyXG5sZXQgc3RvcmVcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBpc1NlYXJjaGluZzogZmFsc2VcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvblR5cGVzID0ge1xyXG4gIFNUQVJUU0VBUkNISU5HOiAnU1RBUlRTRUFSQ0hJTkcnLFxyXG4gIEZJTklTSFNFQVJDSElORzogJ0ZJTklTSFNFQVJDSElORydcclxufVxyXG5cclxuLy8gUkVEVUNFUlNcclxuZXhwb3J0IGNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU1RBUlRTRUFSQ0hJTkc6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNTZWFyY2hpbmc6IHRydWVcclxuICAgICAgfVxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5GSU5JU0hTRUFSQ0hJTkc6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNTZWFyY2hpbmc6IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gIH1cclxufVxyXG5cclxuLy8gQUNUSU9OU1xyXG5leHBvcnQgY29uc3QgdG9TdGFydFNlYXJjaGluZyA9ICgpID0+IHtcclxuICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5TVEFSVFNFQVJDSElORyB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0b0ZpbmlzaFNlYXJjaGluZyA9ICgpID0+IHtcclxuICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5GSU5JU0hTRUFSQ0hJTkcgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0U3RvcmUocHJlbG9hZGVkU3RhdGUgPSBpbml0aWFsU3RhdGUpIHtcclxuICByZXR1cm4gY3JlYXRlU3RvcmUoXHJcbiAgICByZWR1Y2VyLFxyXG4gICAgcHJlbG9hZGVkU3RhdGUsXHJcbiAgICBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSgpKVxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVTdG9yZSA9IChwcmVsb2FkZWRTdGF0ZSkgPT4ge1xyXG4gIGxldCBfc3RvcmUgPSBzdG9yZSA/PyBpbml0U3RvcmUocHJlbG9hZGVkU3RhdGUpXHJcblxyXG5cclxuICBpZiAocHJlbG9hZGVkU3RhdGUgJiYgc3RvcmUpIHtcclxuICAgIF9zdG9yZSA9IGluaXRTdG9yZSh7XHJcbiAgICAgIC4uLnN0b3JlLmdldFN0YXRlKCksXHJcbiAgICAgIC4uLnByZWxvYWRlZFN0YXRlLFxyXG4gICAgfSlcclxuICBcclxuICAgIHN0b3JlID0gdW5kZWZpbmVkXHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBfc3RvcmVcclxuXHJcbiAgaWYgKCFzdG9yZSkgc3RvcmUgPSBfc3RvcmVcclxuXHJcbiAgcmV0dXJuIF9zdG9yZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RvcmUoaW5pdGlhbFN0YXRlKSB7XHJcbiAgY29uc3Qgc3RvcmUgPSB1c2VNZW1vKCgpID0+IGluaXRpYWxpemVTdG9yZShpbml0aWFsU3RhdGUpLCBbaW5pdGlhbFN0YXRlXSlcclxuICByZXR1cm4gc3RvcmVcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbGdvbGlhc2VhcmNoL2xpdGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9