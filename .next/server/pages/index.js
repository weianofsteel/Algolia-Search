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






const client = algoliasearch_lite__WEBPACK_IMPORTED_MODULE_4___default()("XIMRNVJLQ7", "c73127fdd3af113650bd9b88eec377b5", {
  protocol: 'https:'
});
const index = client.initIndex("Community_articles_staging");

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
              lineNumber: 97,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
            inputValue: inputValue,
            listLength: listLength,
            list: list,
            handleToPage: handleToPage,
            pageSelected: pageSelected
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 88,
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
        lineNumber: 39,
        columnNumber: 17
      }, undefined)
    }, i, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
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
        lineNumber: 57,
        columnNumber: 21
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
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
        lineNumber: 62,
        columnNumber: 21
      }, undefined), listLength > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.pageBlock,
          children: "Page"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 29
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.pageList,
          children: data
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 29
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 25
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "list",
      children: list.map((row, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.listBlock,
        onClick: () => {
          handleSummaryOpen(i);
        },
        "data-testid": "dataList",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,
          children: row.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 25
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.author,
          style: {
            marginTop: '10px'
          },
          children: 'By ' + row.author_name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 25
        }, undefined), summaryOpen === i && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.summaryBlock,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.summary,
            children: row.summary
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 33
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 29
        }, undefined)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 21
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L0FsZ29saWEvQWxnb2xpYS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvQWxnb2xpYS9MaXN0LmpzIiwid2VicGFjazovLy8uL2Nzcy9BcHAubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbGdvbGlhc2VhcmNoL2xpdGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiJdLCJuYW1lcyI6WyJjbGllbnQiLCJhbGdvbGlhc2VhcmNoIiwicHJvY2VzcyIsInByb3RvY29sIiwiaW5kZXgiLCJpbml0SW5kZXgiLCJBbGdvbGlhIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwidXNlU3RhdGUiLCJsaXN0Iiwic2V0TGlzdCIsImxpc3RMZW5ndGgiLCJzZXRMaXN0TGVuZ3RoIiwicGFnZVNlbGVjdGVkIiwic2V0UGFnZVNlbGVjdGVkIiwic2VhcmNoVmFsdWUiLCJzZXRTZWFyY2hWYWx1ZSIsInVzZUVmZmVjdCIsImRlbGF5RGVib3VuY2UiLCJzZXRUaW1lb3V0IiwiaGFuZGxlU2VhcmNoIiwiY2xlYXJUaW1lb3V0IiwidG9TdGFydFNlYXJjaGluZyIsInNlYXJjaCIsInBhZ2UiLCJoaXRzUGVyUGFnZSIsInRoZW4iLCJoaXRzIiwibmJIaXRzIiwidG9GaW5pc2hTZWFyY2hpbmciLCJjYXRjaCIsImVyciIsImFsZXJ0IiwiaGFuZGxlVG9QYWdlIiwiaSIsInN0eWxlcyIsImJveCIsIm91dGVyQmxvY2siLCJibG9jayIsInBhZGRpbmdCb3R0b20iLCJpbnB1dEJhY2tncm91bmQiLCJpbnB1dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkxpc3QiLCJwcm9wcyIsInN1bW1hcnlPcGVuIiwic2V0U3VtbWFyeU9wZW4iLCJSZWFjdCIsImlzU2VhcmNoaW5nIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImhhbmRsZVN1bW1hcnlPcGVuIiwiZGF0YSIsIk1hdGgiLCJjZWlsIiwicHVzaCIsInBhZ2VCdXR0b24iLCJ0ZXh0QWxpZ24iLCJkYXRhQW1vdW50IiwicGFnZUJsb2NrIiwicGFnZUxpc3QiLCJtYXAiLCJyb3ciLCJsaXN0QmxvY2siLCJ0aXRsZSIsImF1dGhvciIsIm1hcmdpblRvcCIsImF1dGhvcl9uYW1lIiwic3VtbWFyeUJsb2NrIiwic3VtbWFyeSIsIkhvbWVQYWdlIiwic3RvcmUiLCJpbml0aWFsU3RhdGUiLCJhY3Rpb25UeXBlcyIsIlNUQVJUU0VBUkNISU5HIiwiRklOSVNIU0VBUkNISU5HIiwicmVkdWNlciIsImFjdGlvbiIsInR5cGUiLCJpbml0U3RvcmUiLCJwcmVsb2FkZWRTdGF0ZSIsImNyZWF0ZVN0b3JlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsImluaXRpYWxpemVTdG9yZSIsIl9zdG9yZSIsImdldFN0YXRlIiwidW5kZWZpbmVkIiwidXNlU3RvcmUiLCJ1c2VNZW1vIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FB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RyxRQUFULENBQWtCaEIsWUFBbEIsRUFBZ0M7QUFDckMsUUFBTUQsS0FBSyxHQUFHa0IscURBQU8sQ0FBQyxNQUFNTCxlQUFlLENBQUNaLFlBQUQsQ0FBdEIsRUFBc0MsQ0FBQ0EsWUFBRCxDQUF0QyxDQUFyQjtBQUNBLFNBQU9ELEtBQVA7QUFDRCxDOzs7Ozs7Ozs7OztBQ3pFRCwrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9jc3MvQXBwLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgTGlzdCBmcm9tICcuL0xpc3QnO1xyXG5pbXBvcnQgYWxnb2xpYXNlYXJjaCBmcm9tICdhbGdvbGlhc2VhcmNoL2xpdGUnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgdG9TdGFydFNlYXJjaGluZywgdG9GaW5pc2hTZWFyY2hpbmcgfSBmcm9tICcuLi8uLi9zdG9yZSc7XHJcblxyXG5jb25zdCBjbGllbnQgPSBhbGdvbGlhc2VhcmNoKFxyXG4gICAgcHJvY2Vzcy5lbnYuQVBQX0lELFxyXG4gICAgcHJvY2Vzcy5lbnYuQVBJX0tFWSxcclxuICAgIHtwcm90b2NvbDogJ2h0dHBzOid9XHJcbik7XHJcblxyXG5jb25zdCBpbmRleCA9IGNsaWVudC5pbml0SW5kZXgocHJvY2Vzcy5lbnYuaW5kZXhOYW1lKTtcclxuXHJcbmNvbnN0IEFsZ29saWEgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgWyBpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlIF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbIGxpc3QgLCBzZXRMaXN0IF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbIGxpc3RMZW5ndGggLCBzZXRMaXN0TGVuZ3RoIF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFsgcGFnZVNlbGVjdGVkLCBzZXRQYWdlU2VsZWN0ZWQgXSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3QgW3NlYXJjaFZhbHVlLCBzZXRTZWFyY2hWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBkZWxheURlYm91bmNlID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGhhbmRsZVNlYXJjaChzZWFyY2hWYWx1ZSk7XHJcbiAgICAgICAgfSwgMTAwMClcclxuICAgIFxyXG4gICAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQoZGVsYXlEZWJvdW5jZSlcclxuICAgICAgfSwgW3NlYXJjaFZhbHVlXSlcclxuXHJcbiAgICAvL+aQnOWwi1xyXG4gICAgY29uc3QgaGFuZGxlU2VhcmNoID0gKHNlYXJjaFZhbHVlKSA9PiB7XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKHRvU3RhcnRTZWFyY2hpbmcoKSk7Ly/mkJzlsIvkuK1cclxuICAgICAgICBzZXRQYWdlU2VsZWN0ZWQoMSk7Ly/ph43mlrDmkJzlsIvoqK3lrprpoIHnorzngroxXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoc2VhcmNoVmFsdWUpe1xyXG4gICAgICAgICAgICBpbmRleFxyXG4gICAgICAgICAgICAuc2VhcmNoKHNlYXJjaFZhbHVlLHtcclxuICAgICAgICAgICAgICAgIHBhZ2U6MCxcclxuICAgICAgICAgICAgICAgIGhpdHNQZXJQYWdlOjEwMFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoeyBoaXRzLCBuYkhpdHMgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2godG9GaW5pc2hTZWFyY2hpbmcoKSk7Ly/mkJzlsIvlrozmiJBcclxuICAgICAgICAgICAgICAgIGlmKCFoaXRzWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TGlzdExlbmd0aCgwKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMaXN0KFtdKTtcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMaXN0TGVuZ3RoKG5iSGl0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TGlzdChoaXRzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh0b0ZpbmlzaFNlYXJjaGluZygpKTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdXb29wcyEgVHJ5IGFnYWluIScpO1xyXG4gICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICBzZXRMaXN0KFtdKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2godG9GaW5pc2hTZWFyY2hpbmcoKSk7XHJcbiAgICAgICAgICAgIHNldExpc3RMZW5ndGgoMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRJbnB1dFZhbHVlKHNlYXJjaFZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+iuiuaPm+mggeeivFxyXG4gICAgY29uc3QgaGFuZGxlVG9QYWdlID0gKGlucHV0VmFsdWUsIGkpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh0b1N0YXJ0U2VhcmNoaW5nKCkpO1xyXG4gICAgICAgIHNldFBhZ2VTZWxlY3RlZChpICsgMSk7XHJcbiAgICAgICAgaW5kZXhcclxuICAgICAgICAuc2VhcmNoKGlucHV0VmFsdWUse1xyXG4gICAgICAgICAgICBwYWdlOmksXHJcbiAgICAgICAgICAgIGhpdHNQZXJQYWdlOjEwMFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHsgaGl0cyB9KSA9PiB7XHJcbiAgICAgICAgICAgIHNldExpc3QoaGl0cyk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHRvRmluaXNoU2VhcmNoaW5nKCkpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHRvRmluaXNoU2VhcmNoaW5nKCkpO1xyXG4gICAgICAgICAgICBhbGVydCgnV29vcHMhIFRyeSBhZ2FpbiEnKTtcclxuICAgICAgICB9KTsgXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3h9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vdXRlckJsb2NrfT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmxvY2t9IHN0eWxlPXt7cGFkZGluZ0JvdHRvbTonNXB4J319PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIOaQnOWwi+ashOS9jSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dEJhY2tncm91bmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNlYXJjaElucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwic2VhcmNoSW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PntzZXRTZWFyY2hWYWx1ZShlLnRhcmdldC52YWx1ZSl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyog5YiX6KGoICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRWYWx1ZT17aW5wdXRWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RMZW5ndGg9e2xpc3RMZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0PXtsaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlVG9QYWdlPXtoYW5kbGVUb1BhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlU2VsZWN0ZWQ9e3BhZ2VTZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFsZ29saWEiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL2Nzcy9BcHAubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuY29uc3QgTGlzdCA9IChwcm9wcykgPT4geyAgICBcclxuXHJcbiAgICBjb25zdCBbIHN1bW1hcnlPcGVuICwgc2V0U3VtbWFyeU9wZW4gXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCBpc1NlYXJjaGluZyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuaXNTZWFyY2hpbmcpO1xyXG5cclxuICAgIC8vIOaQnOWwi+abtOaWsOaZgua4heepunN1bW1hcnnplovpl5xcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHNldFN1bW1hcnlPcGVuKCcnKTtcclxuICAgICAgfSxbaXNTZWFyY2hpbmddKVxyXG5cclxuICAgIC8v5o6n5Yi2c3VtbWFyeemWi+mXnCAgXHJcbiAgICBjb25zdCBoYW5kbGVTdW1tYXJ5T3BlbiA9IChpKSA9PiB7XHJcbiAgICAgICAgaWYoc3VtbWFyeU9wZW4gPT09IGkpIHtcclxuICAgICAgICAgICAgc2V0U3VtbWFyeU9wZW4oJycpO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgc2V0U3VtbWFyeU9wZW4oaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBsaXN0LFxyXG4gICAgICAgIGxpc3RMZW5ndGgsXHJcbiAgICAgICAgaGFuZGxlVG9QYWdlLFxyXG4gICAgICAgIGlucHV0VmFsdWUsXHJcbiAgICAgICAgcGFnZVNlbGVjdGVkXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgLy/poIHnorwgJiYg6aCB57GkXHJcbiAgICBsZXQgZGF0YSA9IFtdO1xyXG5cclxuICAgIGZvcihsZXQgaSA9IDE7IGkgPCBNYXRoLmNlaWwobGlzdExlbmd0aC8xMDApICsgMTsgaSsrKSB7XHJcbiAgICAgICAgZGF0YS5wdXNoKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPXtzdHlsZXMucGFnZX0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cGFnZVNlbGVjdGVkPT09aT9zdHlsZXMucGFnZVNlbGVjdGVkOnN0eWxlcy5wYWdlQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVRvUGFnZShpbnB1dFZhbHVlLCBpLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2l9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7Lyog5pCc5bCL54uA5oWLICAmJiDmkJzlsIvntZDmnpwgJiYg6aCB56K8ICovfVxyXG4gICAgICAgICAgICB7aXNTZWFyY2hpbmc/XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtdGVzdGlkPVwic2VhcmNoUmVzdWx0XCIgc3R5bGU9e3t0ZXh0QWxpZ246J2xlZnQnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXRhQW1vdW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU2VhcmNoaW5nLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj46XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtdGVzdGlkPVwic2VhcmNoUmVzdWx0XCIgc3R5bGU9e3t0ZXh0QWxpZ246J2xlZnQnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXRhQW1vdW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2xpc3RMZW5ndGh9IHBvc3RzIGZvdW5kXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge2xpc3RMZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnZUJsb2NrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnZUxpc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHsvKiDmkJzlsIvntZDmnpxsaXN0ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibGlzdFwiPlxyXG4gICAgICAgICAgICAgICAge2xpc3QubWFwKChyb3csIGkpID0+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxpc3RCbG9ja30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT57aGFuZGxlU3VtbWFyeU9wZW4oaSl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cImRhdGFMaXN0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57cm93LnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdXRob3J9IHN0eWxlPXt7bWFyZ2luVG9wOicxMHB4J319PnsnQnkgJyArIHJvdy5hdXRob3JfbmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N1bW1hcnlPcGVuID09PSBpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1bW1hcnlCbG9ja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuc3VtbWFyeX0+eyByb3cuc3VtbWFyeSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3Q7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJveFwiOiBcIkFwcF9ib3hfXzNYOE9sXCIsXG5cdFwib3V0ZXJCbG9ja1wiOiBcIkFwcF9vdXRlckJsb2NrX18zQ3BiT1wiLFxuXHRcImJsb2NrXCI6IFwiQXBwX2Jsb2NrX18zUkM1YlwiLFxuXHRcImhlYWRlclwiOiBcIkFwcF9oZWFkZXJfXzJnanQ4XCIsXG5cdFwiaW5wdXRcIjogXCJBcHBfaW5wdXRfXzJIazJjXCIsXG5cdFwiaW5wdXRCYWNrZ3JvdW5kXCI6IFwiQXBwX2lucHV0QmFja2dyb3VuZF9fMVc5aW1cIixcblx0XCJuZXh0UGFnZUJ1dHRvblwiOiBcIkFwcF9uZXh0UGFnZUJ1dHRvbl9fM01kbXNcIixcblx0XCJkYXRhQW1vdW50XCI6IFwiQXBwX2RhdGFBbW91bnRfXzFlSzg5XCIsXG5cdFwibGlzdEJsb2NrXCI6IFwiQXBwX2xpc3RCbG9ja19fMkR3UVpcIixcblx0XCJ0aXRsZVwiOiBcIkFwcF90aXRsZV9fMmNTZFZcIixcblx0XCJhdXRob3JcIjogXCJBcHBfYXV0aG9yX18yTk9kMlwiLFxuXHRcInN1bW1hcnlCbG9ja1wiOiBcIkFwcF9zdW1tYXJ5QmxvY2tfX2Qta2xuXCIsXG5cdFwic3VtbWFyeVwiOiBcIkFwcF9zdW1tYXJ5X18yUk1wSVwiLFxuXHRcInBhZ2VCbG9ja1wiOiBcIkFwcF9wYWdlQmxvY2tfX2lOeGlLXCIsXG5cdFwicGFnZUxpc3RcIjogXCJBcHBfcGFnZUxpc3RfXzJObndFXCIsXG5cdFwicGFnZUJ1dHRvblwiOiBcIkFwcF9wYWdlQnV0dG9uX18zbVF5ZFwiLFxuXHRcInBhZ2VTZWxlY3RlZFwiOiBcIkFwcF9wYWdlU2VsZWN0ZWRfXzMxTHB2XCIsXG5cdFwicGFnZVwiOiBcIkFwcF9wYWdlX18yaXFGQ1wiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQWxnb2xpYSBmcm9tICcuLi9jb21wb25lbnQvQWxnb2xpYS9BbGdvbGlhJ1xyXG5cclxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PntcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG5cclxuICAgICAgICAgIDxBbGdvbGlhLz5cclxuXHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxuXHJcbn1cclxuICBcclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2UiLCJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbidcclxuXHJcbmxldCBzdG9yZVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGlzU2VhcmNoaW5nOiBmYWxzZVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uVHlwZXMgPSB7XHJcbiAgU1RBUlRTRUFSQ0hJTkc6ICdTVEFSVFNFQVJDSElORycsXHJcbiAgRklOSVNIU0VBUkNISU5HOiAnRklOSVNIU0VBUkNISU5HJ1xyXG59XHJcblxyXG4vLyBSRURVQ0VSU1xyXG5leHBvcnQgY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TVEFSVFNFQVJDSElORzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc1NlYXJjaGluZzogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLkZJTklTSFNFQVJDSElORzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc1NlYXJjaGluZzogZmFsc2VcclxuICAgICAgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcblxyXG4vLyBBQ1RJT05TXHJcbmV4cG9ydCBjb25zdCB0b1N0YXJ0U2VhcmNoaW5nID0gKCkgPT4ge1xyXG4gIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLlNUQVJUU0VBUkNISU5HIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHRvRmluaXNoU2VhcmNoaW5nID0gKCkgPT4ge1xyXG4gIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkZJTklTSFNFQVJDSElORyB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRTdG9yZShwcmVsb2FkZWRTdGF0ZSA9IGluaXRpYWxTdGF0ZSkge1xyXG4gIHJldHVybiBjcmVhdGVTdG9yZShcclxuICAgIHJlZHVjZXIsXHJcbiAgICBwcmVsb2FkZWRTdGF0ZSxcclxuICAgIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKCkpXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZVN0b3JlID0gKHByZWxvYWRlZFN0YXRlKSA9PiB7XHJcbiAgbGV0IF9zdG9yZSA9IHN0b3JlID8/IGluaXRTdG9yZShwcmVsb2FkZWRTdGF0ZSlcclxuXHJcblxyXG4gIGlmIChwcmVsb2FkZWRTdGF0ZSAmJiBzdG9yZSkge1xyXG4gICAgX3N0b3JlID0gaW5pdFN0b3JlKHtcclxuICAgICAgLi4uc3RvcmUuZ2V0U3RhdGUoKSxcclxuICAgICAgLi4ucHJlbG9hZGVkU3RhdGUsXHJcbiAgICB9KVxyXG4gIFxyXG4gICAgc3RvcmUgPSB1bmRlZmluZWRcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIF9zdG9yZVxyXG5cclxuICBpZiAoIXN0b3JlKSBzdG9yZSA9IF9zdG9yZVxyXG5cclxuICByZXR1cm4gX3N0b3JlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VTdG9yZShpbml0aWFsU3RhdGUpIHtcclxuICBjb25zdCBzdG9yZSA9IHVzZU1lbW8oKCkgPT4gaW5pdGlhbGl6ZVN0b3JlKGluaXRpYWxTdGF0ZSksIFtpbml0aWFsU3RhdGVdKVxyXG4gIHJldHVybiBzdG9yZVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFsZ29saWFzZWFyY2gvbGl0ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=