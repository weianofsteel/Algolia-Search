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
              onChange: handleChange,
              autocomplete: "off"
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
            lineNumber: 101,
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
            children: 'By' + row.summary
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L0FsZ29saWEvQWxnb2xpYS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvQWxnb2xpYS9MaXN0LmpzIiwid2VicGFjazovLy8uL2Nzcy9BcHAubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbGdvbGlhc2VhcmNoL2xpdGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiJdLCJuYW1lcyI6WyJjbGllbnQiLCJhbGdvbGlhc2VhcmNoIiwicHJvdG9jb2wiLCJpbmRleCIsImluaXRJbmRleCIsIkFsZ29saWEiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJSZWFjdCIsInVzZVN0YXRlIiwibGlzdCIsInNldExpc3QiLCJsaXN0TGVuZ3RoIiwic2V0TGlzdExlbmd0aCIsInBhZ2VTZWxlY3RlZCIsInNldFBhZ2VTZWxlY3RlZCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0b1N0YXJ0U2VhcmNoaW5nIiwidGFyZ2V0IiwidmFsdWUiLCJzZWFyY2giLCJwYWdlIiwiaGl0c1BlclBhZ2UiLCJ0aGVuIiwiaGl0cyIsIm5iSGl0cyIsInRvRmluaXNoU2VhcmNoaW5nIiwiY2F0Y2giLCJlcnIiLCJhbGVydCIsImhhbmRsZVRvUGFnZSIsImkiLCJzdHlsZXMiLCJib3giLCJvdXRlckJsb2NrIiwiYmxvY2siLCJwYWRkaW5nQm90dG9tIiwiaW5wdXRCYWNrZ3JvdW5kIiwiaW5wdXQiLCJMaXN0IiwicHJvcHMiLCJzdW1tYXJ5T3BlbiIsInNldFN1bW1hcnlPcGVuIiwiaG92ZXIiLCJzZXRIb3ZlciIsImlzU2VhcmNoaW5nIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZUVmZmVjdCIsImhhbmRsZVN1bW1hcnlPcGVuIiwiaGFuZGxlTW91c2VPdmVyIiwiaGFuZGxlTW91c2VMZWF2ZSIsImRhdGEiLCJNYXRoIiwiY2VpbCIsInB1c2giLCJwYWdlQnV0dG9uIiwidGV4dEFsaWduIiwiZGF0YUFtb3VudCIsInBhZ2VCbG9jayIsInBhZ2VMaXN0IiwibWFwIiwicm93IiwibGlzdEJsb2NrT25Ib3ZlciIsImxpc3RCbG9jayIsInRpdGxlIiwiYXV0aG9yIiwibWFyZ2luVG9wIiwiYXV0aG9yX25hbWUiLCJzdW1tYXJ5QmxvY2siLCJzdW1tYXJ5IiwiSG9tZVBhZ2UiLCJzdG9yZSIsImluaXRpYWxTdGF0ZSIsImFjdGlvblR5cGVzIiwiU1RBUlRTRUFSQ0hJTkciLCJGSU5JU0hTRUFSQ0hJTkciLCJyZWR1Y2VyIiwiYWN0aW9uIiwidHlwZSIsImluaXRTdG9yZSIsInByZWxvYWRlZFN0YXRlIiwiY3JlYXRlU3RvcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwiaW5pdGlhbGl6ZVN0b3JlIiwiX3N0b3JlIiwiZ2V0U3RhdGUiLCJ1bmRlZmluZWQiLCJ1c2VTdG9yZSIsInVzZU1lbW8iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7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LGNBRmEsRUFBbEI7QUFLQVQsU0FBSyxHQUFHZ0IsU0FBUjtBQUNEOztBQUVELFlBQW1DLE9BQU9GLE1BQVA7QUFFbkMsTUFBSSxDQUFDZCxLQUFMLEVBQVlBLEtBQUssR0FBR2MsTUFBUjtBQUVaLFNBQU9BLE1BQVA7QUFDRCxDQWxCTTtBQW9CQSxTQUFTRyxRQUFULENBQWtCaEIsWUFBbEIsRUFBZ0M7QUFDckMsUUFBTUQsS0FBSyxHQUFHa0IscURBQU8sQ0FBQyxNQUFNTCxlQUFlLENBQUNaLFlBQUQsQ0FBdEIsRUFBc0MsQ0FBQ0EsWUFBRCxDQUF0QyxDQUFyQjtBQUNBLFNBQU9ELEtBQVA7QUFDRCxDOzs7Ozs7Ozs7OztBQ3pFRCwrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL2Nzcy9BcHAubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBMaXN0IGZyb20gJy4vTGlzdCc7XHJcbmltcG9ydCBhbGdvbGlhc2VhcmNoIGZyb20gJ2FsZ29saWFzZWFyY2gvbGl0ZSc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyB0b1N0YXJ0U2VhcmNoaW5nLCB0b0ZpbmlzaFNlYXJjaGluZyB9IGZyb20gJy4uLy4uL3N0b3JlJztcclxuXHJcbmNvbnN0IGNsaWVudCA9IGFsZ29saWFzZWFyY2goXHJcbiAgICAnWElNUk5WSkxRNycsXHJcbiAgICAnYzczMTI3ZmRkM2FmMTEzNjUwYmQ5Yjg4ZWVjMzc3YjUnLFxyXG4gICAge3Byb3RvY29sOiAnaHR0cHM6J31cclxuKTtcclxuXHJcbmNvbnN0IGluZGV4ID0gY2xpZW50LmluaXRJbmRleCgnQ29tbXVuaXR5X2FydGljbGVzX3N0YWdpbmcnKTtcclxuXHJcbmNvbnN0IEFsZ29saWEgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgICBjb25zdCBbIGlucHV0VmFsdWUsIHNldElucHV0VmFsdWUgXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFsgbGlzdCAsIHNldExpc3QgXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFsgbGlzdExlbmd0aCAsIHNldExpc3RMZW5ndGggXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgWyBwYWdlU2VsZWN0ZWQsIHNldFBhZ2VTZWxlY3RlZCBdID0gUmVhY3QudXNlU3RhdGUoMSk7XHJcblxyXG4gICAgLy/mkJzlsItcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKHRvU3RhcnRTZWFyY2hpbmcoKSk7Ly/mkJzlsIvkuK1cclxuICAgICAgICBzZXRQYWdlU2VsZWN0ZWQoMSk7Ly/ph43mlrDmkJzlsIvoqK3lrprpoIHnorzngroxXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoZS50YXJnZXQudmFsdWUpe1xyXG4gICAgICAgICAgICBpbmRleFxyXG4gICAgICAgICAgICAuc2VhcmNoKGUudGFyZ2V0LnZhbHVlLHtcclxuICAgICAgICAgICAgICAgIHBhZ2U6MCxcclxuICAgICAgICAgICAgICAgIGhpdHNQZXJQYWdlOjEwMFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoeyBoaXRzLCBuYkhpdHMgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2godG9GaW5pc2hTZWFyY2hpbmcoKSk7Ly/mkJzlsIvlrozmiJBcclxuICAgICAgICAgICAgICAgIGlmKCFoaXRzWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TGlzdExlbmd0aCgwKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMaXN0KFtdKTtcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMaXN0TGVuZ3RoKG5iSGl0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TGlzdChoaXRzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh0b0ZpbmlzaFNlYXJjaGluZygpKTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdXb29wcyEgVHJ5IGFnYWluIScpO1xyXG4gICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICBzZXRMaXN0KFtdKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2godG9GaW5pc2hTZWFyY2hpbmcoKSk7XHJcbiAgICAgICAgICAgIHNldExpc3RMZW5ndGgoMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRJbnB1dFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+iuiuaPm+mggeeivFxyXG4gICAgY29uc3QgaGFuZGxlVG9QYWdlID0gKGlucHV0VmFsdWUsIGkpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh0b1N0YXJ0U2VhcmNoaW5nKCkpO1xyXG4gICAgICAgIHNldFBhZ2VTZWxlY3RlZChpICsgMSk7XHJcbiAgICAgICAgaW5kZXhcclxuICAgICAgICAuc2VhcmNoKGlucHV0VmFsdWUse1xyXG4gICAgICAgICAgICBwYWdlOmksXHJcbiAgICAgICAgICAgIGhpdHNQZXJQYWdlOjEwMFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHsgaGl0cyB9KSA9PiB7XHJcbiAgICAgICAgICAgIHNldExpc3QoaGl0cyk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHRvRmluaXNoU2VhcmNoaW5nKCkpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHRvRmluaXNoU2VhcmNoaW5nKCkpO1xyXG4gICAgICAgICAgICBhbGVydCgnV29vcHMhIFRyeSBhZ2FpbiEnKTtcclxuICAgICAgICB9KTsgXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3h9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vdXRlckJsb2NrfT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmxvY2t9IHN0eWxlPXt7cGFkZGluZ0JvdHRvbTonNXB4J319PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIOaQnOWwi+ashOS9jSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dEJhY2tncm91bmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNlYXJjaElucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJzZWFyY2hJbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIOWIl+ihqCAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0TGVuZ3RoPXtsaXN0TGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdD17bGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVRvUGFnZT17aGFuZGxlVG9QYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVNlbGVjdGVkPXtwYWdlU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbGdvbGlhIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9jc3MvQXBwLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmNvbnN0IExpc3QgPSAocHJvcHMpID0+IHsgICAgXHJcblxyXG4gICAgY29uc3QgWyBzdW1tYXJ5T3BlbiAsIHNldFN1bW1hcnlPcGVuIF0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbIGhvdmVyICwgc2V0SG92ZXIgXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCBpc1NlYXJjaGluZyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuaXNTZWFyY2hpbmcpO1xyXG5cclxuICAgIC8vIOaQnOWwi+abtOaWsOaZgua4heepunN1bW1hcnnplovpl5xcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHNldFN1bW1hcnlPcGVuKCcnKTtcclxuICAgICAgfSxbaXNTZWFyY2hpbmddKVxyXG5cclxuICAgIC8v5o6n5Yi2c3VtbWFyeemWi+mXnCAgXHJcbiAgICBjb25zdCBoYW5kbGVTdW1tYXJ5T3BlbiA9IChpKSA9PiB7XHJcbiAgICAgICAgaWYoc3VtbWFyeU9wZW4gPT09IGkpIHtcclxuICAgICAgICAgICAgc2V0U3VtbWFyeU9wZW4oJycpO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgc2V0U3VtbWFyeU9wZW4oaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOa4uOaomeenu+iHs+ihqOWWrlxyXG4gICAgY29uc3QgaGFuZGxlTW91c2VPdmVyID0gKGkpID0+IHtcclxuICAgICAgICBzZXRIb3ZlcihpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8g5ri45qiZ6Zui6ZaL6KGo5ZauXHJcbiAgICBjb25zdCBoYW5kbGVNb3VzZUxlYXZlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEhvdmVyKCcnKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgbGlzdCxcclxuICAgICAgICBsaXN0TGVuZ3RoLFxyXG4gICAgICAgIGhhbmRsZVRvUGFnZSxcclxuICAgICAgICBpbnB1dFZhbHVlLFxyXG4gICAgICAgIHBhZ2VTZWxlY3RlZFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIC8v6aCB56K8ICYmIOmggeexpFxyXG4gICAgbGV0IGRhdGEgPSBbXTtcclxuXHJcbiAgICBmb3IobGV0IGkgPSAxOyBpIDwgTWF0aC5jZWlsKGxpc3RMZW5ndGgvMTAwKSArIDE7IGkrKykge1xyXG4gICAgICAgIGRhdGEucHVzaChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT17c3R5bGVzLnBhZ2V9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3BhZ2VTZWxlY3RlZD09PWk/c3R5bGVzLnBhZ2VTZWxlY3RlZDpzdHlsZXMucGFnZUJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVUb1BhZ2UoaW5wdXRWYWx1ZSwgaS0xKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpfVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgey8qIOaQnOWwi+eLgOaFiyAgJibmkJzlsIvntZDmnpwgJiYg6aCB56K8ICovfVxyXG4gICAgICAgICAgICB7aXNTZWFyY2hpbmc/XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtdGVzdGlkPVwic2VhcmNoUmVzdWx0XCIgc3R5bGU9e3t0ZXh0QWxpZ246J2xlZnQnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXRhQW1vdW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU2VhcmNoaW5nLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj46XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtdGVzdGlkPVwic2VhcmNoUmVzdWx0XCIgc3R5bGU9e3t0ZXh0QWxpZ246J2xlZnQnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXRhQW1vdW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2xpc3RMZW5ndGh9IHBvc3RzIGZvdW5kXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge2xpc3RMZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnZUJsb2NrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnZUxpc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHsvKiDmkJzlsIvntZDmnpxsaXN0ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibGlzdFwiPlxyXG4gICAgICAgICAgICAgICAge2xpc3QubWFwKChyb3csIGkpID0+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aG92ZXI9PT1pP3N0eWxlcy5saXN0QmxvY2tPbkhvdmVyOnN0eWxlcy5saXN0QmxvY2t9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+e2hhbmRsZVN1bW1hcnlPcGVuKGkpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9eygpPT57aGFuZGxlTW91c2VPdmVyKGkpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKT0+e2hhbmRsZU1vdXNlTGVhdmUoaSl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cImRhdGFMaXN0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57cm93LnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdXRob3J9IHN0eWxlPXt7bWFyZ2luVG9wOicxMHB4J319PnsnQnkgJyArIHJvdy5hdXRob3JfbmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N1bW1hcnlPcGVuID09PSBpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1bW1hcnlCbG9ja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuc3VtbWFyeX0+eydCeScgKyByb3cuc3VtbWFyeX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdDtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYm94XCI6IFwiQXBwX2JveF9fM1g4T2xcIixcblx0XCJvdXRlckJsb2NrXCI6IFwiQXBwX291dGVyQmxvY2tfXzNDcGJPXCIsXG5cdFwiYmxvY2tcIjogXCJBcHBfYmxvY2tfXzNSQzViXCIsXG5cdFwiaGVhZGVyXCI6IFwiQXBwX2hlYWRlcl9fMmdqdDhcIixcblx0XCJpbnB1dFwiOiBcIkFwcF9pbnB1dF9fMkhrMmNcIixcblx0XCJpbnB1dEJhY2tncm91bmRcIjogXCJBcHBfaW5wdXRCYWNrZ3JvdW5kX18xVzlpbVwiLFxuXHRcIm5leHRQYWdlQnV0dG9uXCI6IFwiQXBwX25leHRQYWdlQnV0dG9uX18zTWRtc1wiLFxuXHRcImRhdGFBbW91bnRcIjogXCJBcHBfZGF0YUFtb3VudF9fMWVLODlcIixcblx0XCJsaXN0QmxvY2tcIjogXCJBcHBfbGlzdEJsb2NrX18yRHdRWlwiLFxuXHRcImxpc3RCbG9ja09uSG92ZXJcIjogXCJBcHBfbGlzdEJsb2NrT25Ib3Zlcl9fVXZDNjhcIixcblx0XCJ0aXRsZVwiOiBcIkFwcF90aXRsZV9fMmNTZFZcIixcblx0XCJhdXRob3JcIjogXCJBcHBfYXV0aG9yX18yTk9kMlwiLFxuXHRcInN1bW1hcnlCbG9ja1wiOiBcIkFwcF9zdW1tYXJ5QmxvY2tfX2Qta2xuXCIsXG5cdFwic3VtbWFyeVwiOiBcIkFwcF9zdW1tYXJ5X18yUk1wSVwiLFxuXHRcInBhZ2VCbG9ja1wiOiBcIkFwcF9wYWdlQmxvY2tfX2lOeGlLXCIsXG5cdFwicGFnZUxpc3RcIjogXCJBcHBfcGFnZUxpc3RfXzJObndFXCIsXG5cdFwicGFnZUJ1dHRvblwiOiBcIkFwcF9wYWdlQnV0dG9uX18zbVF5ZFwiLFxuXHRcInBhZ2VTZWxlY3RlZFwiOiBcIkFwcF9wYWdlU2VsZWN0ZWRfXzMxTHB2XCIsXG5cdFwicGFnZVwiOiBcIkFwcF9wYWdlX18yaXFGQ1wiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQWxnb2xpYSBmcm9tICcuLi9jb21wb25lbnQvQWxnb2xpYS9BbGdvbGlhJ1xyXG5cclxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PntcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG5cclxuICAgICAgICAgIDxBbGdvbGlhLz5cclxuXHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxuXHJcbn1cclxuICBcclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2UiLCJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbidcclxuXHJcbmxldCBzdG9yZVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGlzU2VhcmNoaW5nOiBmYWxzZVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uVHlwZXMgPSB7XHJcbiAgU1RBUlRTRUFSQ0hJTkc6ICdTVEFSVFNFQVJDSElORycsXHJcbiAgRklOSVNIU0VBUkNISU5HOiAnRklOSVNIU0VBUkNISU5HJ1xyXG59XHJcblxyXG4vLyBSRURVQ0VSU1xyXG5leHBvcnQgY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TVEFSVFNFQVJDSElORzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc1NlYXJjaGluZzogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLkZJTklTSFNFQVJDSElORzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc1NlYXJjaGluZzogZmFsc2VcclxuICAgICAgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcblxyXG4vLyBBQ1RJT05TXHJcbmV4cG9ydCBjb25zdCB0b1N0YXJ0U2VhcmNoaW5nID0gKCkgPT4ge1xyXG4gIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLlNUQVJUU0VBUkNISU5HIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHRvRmluaXNoU2VhcmNoaW5nID0gKCkgPT4ge1xyXG4gIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkZJTklTSFNFQVJDSElORyB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRTdG9yZShwcmVsb2FkZWRTdGF0ZSA9IGluaXRpYWxTdGF0ZSkge1xyXG4gIHJldHVybiBjcmVhdGVTdG9yZShcclxuICAgIHJlZHVjZXIsXHJcbiAgICBwcmVsb2FkZWRTdGF0ZSxcclxuICAgIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKCkpXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZVN0b3JlID0gKHByZWxvYWRlZFN0YXRlKSA9PiB7XHJcbiAgbGV0IF9zdG9yZSA9IHN0b3JlID8/IGluaXRTdG9yZShwcmVsb2FkZWRTdGF0ZSlcclxuXHJcblxyXG4gIGlmIChwcmVsb2FkZWRTdGF0ZSAmJiBzdG9yZSkge1xyXG4gICAgX3N0b3JlID0gaW5pdFN0b3JlKHtcclxuICAgICAgLi4uc3RvcmUuZ2V0U3RhdGUoKSxcclxuICAgICAgLi4ucHJlbG9hZGVkU3RhdGUsXHJcbiAgICB9KVxyXG4gIFxyXG4gICAgc3RvcmUgPSB1bmRlZmluZWRcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIF9zdG9yZVxyXG5cclxuICBpZiAoIXN0b3JlKSBzdG9yZSA9IF9zdG9yZVxyXG5cclxuICByZXR1cm4gX3N0b3JlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VTdG9yZShpbml0aWFsU3RhdGUpIHtcclxuICBjb25zdCBzdG9yZSA9IHVzZU1lbW8oKCkgPT4gaW5pdGlhbGl6ZVN0b3JlKGluaXRpYWxTdGF0ZSksIFtpbml0aWFsU3RhdGVdKVxyXG4gIHJldHVybiBzdG9yZVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFsZ29saWFzZWFyY2gvbGl0ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=