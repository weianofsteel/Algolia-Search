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
    setInputValue(e.target.value);
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
      console.log(hits, Math.round(nbHits / 100), 888);
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
              className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.input,
              onChange: handleChange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
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
          lineNumber: 82,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 78,
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
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, undefined));
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: [isSearching ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
      lineNumber: 92,
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
/*! exports provided: default, actionTypes, reducer, toStartSearching, toFinishSearching, toDay, toNight, toEn, toZhHant, resetCount, initializeStore, useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toStartSearching", function() { return toStartSearching; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toFinishSearching", function() { return toFinishSearching; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDay", function() { return toDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNight", function() { return toNight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toEn", function() { return toEn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toZhHant", function() { return toZhHant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetCount", function() { return resetCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStore", function() { return useStore; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_persist_lib_storage_createWebStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-persist/lib/storage/createWebStorage */ "redux-persist/lib/storage/createWebStorage");
/* harmony import */ var redux_persist_lib_storage_createWebStorage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage_createWebStorage__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },

    setItem(_key, value) {
      return Promise.resolve(value);
    },

    removeItem(_key) {
      return Promise.resolve();
    }

  };
};

const storage = true ? createNoopStorage() : undefined;
/* harmony default export */ __webpack_exports__["default"] = (storage);
let store;
const exampleInitialState = {
  mode: 'day',
  lang: 'en',
  isSearching: false
};
const actionTypes = {
  DAY: 'DAY',
  NIGHT: 'NIGHT',
  EN: 'EN',
  ZHHANT: 'ZHHANT',
  RESET: 'RESET',
  SUMMARYOPEN: 'SUMMARYOPEN',
  SUMMARYCLOSE: 'SUMMARYCLOSE',
  STARTSEARCHING: 'STARTSEARCHING',
  FINISHSEARCHING: 'FINISHSEARCHING'
}; // REDUCERS

const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.STARTSEARCHING:
      return _objectSpread(_objectSpread({}, state), {}, {
        isSearching: true
      });

    case actionTypes.FINISHSEARCHING:
      return _objectSpread(_objectSpread({}, state), {}, {
        isSearching: false
      });

    case actionTypes.DAY:
      return _objectSpread(_objectSpread({}, state), {}, {
        mode: 'day'
      });

    case actionTypes.NIGHT:
      return _objectSpread(_objectSpread({}, state), {}, {
        mode: 'night'
      });

    case actionTypes.EN:
      return _objectSpread(_objectSpread({}, state), {}, {
        lang: 'en'
      });

    case actionTypes.ZHHANT:
      return _objectSpread(_objectSpread({}, state), {}, {
        lang: 'zhHant'
      });

    case actionTypes.RESET:
      return _objectSpread(_objectSpread({}, state), {}, {
        mode: 'day',
        lang: 'en'
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
const toDay = () => {
  return {
    type: actionTypes.DAY
  };
};
const toNight = () => {
  return {
    type: actionTypes.NIGHT
  };
};
const toEn = () => {
  return {
    type: actionTypes.EN
  };
};
const toZhHant = () => {
  return {
    type: actionTypes.ZHHANT
  };
};
const resetCount = () => {
  return {
    type: actionTypes.RESET
  };
};
const persistConfig = {
  key: 'primary',
  storage,
  whitelist: ['mode', 'lang'] // place to select which state you want to persist

};
const persistedReducer = Object(redux_persist__WEBPACK_IMPORTED_MODULE_3__["persistReducer"])(persistConfig, reducer);

function makeStore(initialState = exampleInitialState) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(persistedReducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])()));
}

const initializeStore = preloadedState => {
  var _store2;

  let _store = (_store2 = store) !== null && _store2 !== void 0 ? _store2 : makeStore(preloadedState); // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store


  if (preloadedState && store) {
    _store = makeStore(_objectSpread(_objectSpread({}, store.getState()), preloadedState)); // Reset the current store

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

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/lib/storage/createWebStorage":
/*!*************************************************************!*\
  !*** external "redux-persist/lib/storage/createWebStorage" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/storage/createWebStorage");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L0FsZ29saWEvQWxnb2xpYS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvQWxnb2xpYS9MaXN0LmpzIiwid2VicGFjazovLy8uL2Nzcy9BcHAubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbGdvbGlhc2VhcmNoL2xpdGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZS9jcmVhdGVXZWJTdG9yYWdlXCIiXSwibmFtZXMiOlsiY2xpZW50IiwiYWxnb2xpYXNlYXJjaCIsInByb3RvY29sIiwiaW5kZXgiLCJpbml0SW5kZXgiLCJBbGdvbGlhIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImxpc3QiLCJzZXRMaXN0IiwibGlzdExlbmd0aCIsInNldExpc3RMZW5ndGgiLCJwYWdlU2VsZWN0ZWQiLCJzZXRQYWdlU2VsZWN0ZWQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0b1N0YXJ0U2VhcmNoaW5nIiwic2VhcmNoIiwicGFnZSIsImhpdHNQZXJQYWdlIiwidGhlbiIsImhpdHMiLCJuYkhpdHMiLCJ0b0ZpbmlzaFNlYXJjaGluZyIsImNhdGNoIiwiZXJyIiwiaGFuZGxlVG9QYWdlIiwiaSIsImNvbnNvbGUiLCJsb2ciLCJNYXRoIiwicm91bmQiLCJzdHlsZXMiLCJib3giLCJvdXRlckJsb2NrIiwiYmxvY2siLCJwYWRkaW5nQm90dG9tIiwiaW5wdXRCYWNrZ3JvdW5kIiwiaW5wdXQiLCJMaXN0IiwicHJvcHMiLCJzdW1tYXJ5T3BlbiIsInNldFN1bW1hcnlPcGVuIiwiaG92ZXIiLCJzZXRIb3ZlciIsImlzU2VhcmNoaW5nIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZUVmZmVjdCIsImhhbmRsZVN1bW1hcnlPcGVuIiwiaGFuZGxlTW91c2VPdmVyIiwiaGFuZGxlTW91c2VMZWF2ZSIsImRhdGEiLCJjZWlsIiwicHVzaCIsInBhZ2VCdXR0b24iLCJ0ZXh0QWxpZ24iLCJkYXRhQW1vdW50IiwicGFnZUJsb2NrIiwicGFnZUxpc3QiLCJtYXAiLCJyb3ciLCJsaXN0QmxvY2tPbkhvdmVyIiwibGlzdEJsb2NrIiwidGl0bGUiLCJhdXRob3IiLCJtYXJnaW5Ub3AiLCJhdXRob3JfbmFtZSIsInN1bW1hcnlCbG9jayIsInN1bW1hcnkiLCJIb21lUGFnZSIsImNyZWF0ZU5vb3BTdG9yYWdlIiwiZ2V0SXRlbSIsIl9rZXkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwic3RvcmFnZSIsImNyZWF0ZVdlYlN0b3JhZ2UiLCJzdG9yZSIsImV4YW1wbGVJbml0aWFsU3RhdGUiLCJtb2RlIiwibGFuZyIsImFjdGlvblR5cGVzIiwiREFZIiwiTklHSFQiLCJFTiIsIlpISEFOVCIsIlJFU0VUIiwiU1VNTUFSWU9QRU4iLCJTVU1NQVJZQ0xPU0UiLCJTVEFSVFNFQVJDSElORyIsIkZJTklTSFNFQVJDSElORyIsInJlZHVjZXIiLCJhY3Rpb24iLCJ0eXBlIiwidG9EYXkiLCJ0b05pZ2h0IiwidG9FbiIsInRvWmhIYW50IiwicmVzZXRDb3VudCIsInBlcnNpc3RDb25maWciLCJrZXkiLCJ3aGl0ZWxpc3QiLCJwZXJzaXN0ZWRSZWR1Y2VyIiwicGVyc2lzdFJlZHVjZXIiLCJtYWtlU3RvcmUiLCJpbml0aWFsU3RhdGUiLCJjcmVhdGVTdG9yZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJpbml0aWFsaXplU3RvcmUiLCJwcmVsb2FkZWRTdGF0ZSIsIl9zdG9yZSIsImdldFN0YXRlIiwidW5kZWZpbmVkIiwidXNlU3RvcmUiLCJ1c2VNZW1vIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLE1BQU0sR0FBR0MseURBQWEsQ0FDeEIsWUFEd0IsRUFFeEIsa0NBRndCLEVBR3hCO0FBQUNDLFVBQVEsRUFBRTtBQUFYLENBSHdCLENBQTVCO0FBTUEsTUFBTUMsS0FBSyxHQUFHSCxNQUFNLENBQUNJLFNBQVAsQ0FBaUIsNEJBQWpCLENBQWQ7O0FBRUEsTUFBTUMsT0FBTyxHQUFHLE1BQU07QUFFbEIsUUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLFFBQU0sQ0FBRUMsVUFBRixFQUFjQyxhQUFkLElBQWdDQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUF0QztBQUNBLFFBQU0sQ0FBRUMsSUFBRixFQUFTQyxPQUFULElBQXFCSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUEzQjtBQUNBLFFBQU0sQ0FBRUcsVUFBRixFQUFlQyxhQUFmLElBQWlDTCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsQ0FBZixDQUF2QztBQUNBLFFBQU0sQ0FBRUssWUFBRixFQUFnQkMsZUFBaEIsSUFBb0NQLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxDQUFmLENBQTFDLENBTmtCLENBUWxCOztBQUNBLFFBQU1PLFlBQVksR0FBSUMsQ0FBRCxJQUFPO0FBRXhCVixpQkFBYSxDQUFDVSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFiO0FBQ0FmLFlBQVEsQ0FBQ2dCLCtEQUFnQixFQUFqQixDQUFSLENBSHdCLENBR0s7O0FBQzdCTCxtQkFBZSxDQUFDLENBQUQsQ0FBZixDQUp3QixDQUlMOztBQUVuQixRQUFHRSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBWixFQUFrQjtBQUNkbEIsV0FBSyxDQUNKb0IsTUFERCxDQUNRSixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FEakIsRUFDdUI7QUFDbkJHLFlBQUksRUFBQyxDQURjO0FBRW5CQyxtQkFBVyxFQUFDO0FBRk8sT0FEdkIsRUFLQ0MsSUFMRCxDQUtNLENBQUM7QUFBRUMsWUFBRjtBQUFRQztBQUFSLE9BQUQsS0FBc0I7QUFDeEJmLGVBQU8sQ0FBQ2MsSUFBRCxDQUFQOztBQUVBLFlBQUcsQ0FBQ0EsSUFBSSxDQUFDLENBQUQsQ0FBUixFQUFhO0FBQ1RaLHVCQUFhLENBQUMsQ0FBRCxDQUFiO0FBQ0gsU0FGRCxNQUVNO0FBQ0ZBLHVCQUFhLENBQUNhLE1BQUQsQ0FBYjtBQUNIOztBQUVEdEIsZ0JBQVEsQ0FBQ3VCLGdFQUFpQixFQUFsQixDQUFSLENBVHdCLENBU007QUFDakMsT0FmRCxFQWdCQ0MsS0FoQkQsQ0FnQk9DLEdBQUcsSUFBSTtBQUNWekIsZ0JBQVEsQ0FBQ3VCLGdFQUFpQixFQUFsQixDQUFSO0FBQ0gsT0FsQkQ7QUFtQkgsS0FwQkQsTUFvQk07QUFDRmhCLGFBQU8sQ0FBQyxFQUFELENBQVA7QUFDQVAsY0FBUSxDQUFDdUIsZ0VBQWlCLEVBQWxCLENBQVI7QUFDQWQsbUJBQWEsQ0FBQyxDQUFELENBQWI7QUFDSDtBQUNKLEdBL0JELENBVGtCLENBMENsQjs7O0FBQ0EsUUFBTWlCLFlBQVksR0FBRyxDQUFDeEIsVUFBRCxFQUFheUIsQ0FBYixLQUFtQjtBQUNwQzNCLFlBQVEsQ0FBQ2dCLCtEQUFnQixFQUFqQixDQUFSO0FBQ0FMLG1CQUFlLENBQUNnQixDQUFDLEdBQUcsQ0FBTCxDQUFmO0FBQ0E5QixTQUFLLENBQ0pvQixNQURELENBQ1FmLFVBRFIsRUFDbUI7QUFDZmdCLFVBQUksRUFBQ1MsQ0FEVTtBQUVmUixpQkFBVyxFQUFDO0FBRkcsS0FEbkIsRUFLQ0MsSUFMRCxDQUtNLENBQUM7QUFBRUMsVUFBRjtBQUFRQztBQUFSLEtBQUQsS0FBc0I7QUFDeEJNLGFBQU8sQ0FBQ0MsR0FBUixDQUFZUixJQUFaLEVBQWtCUyxJQUFJLENBQUNDLEtBQUwsQ0FBV1QsTUFBTSxHQUFDLEdBQWxCLENBQWxCLEVBQTBDLEdBQTFDO0FBQ0FmLGFBQU8sQ0FBQ2MsSUFBRCxDQUFQO0FBQ0FyQixjQUFRLENBQUN1QixnRUFBaUIsRUFBbEIsQ0FBUjtBQUNILEtBVEQsRUFVQ0MsS0FWRCxDQVVPQyxHQUFHLElBQUk7QUFDVnpCLGNBQVEsQ0FBQ3VCLGdFQUFpQixFQUFsQixDQUFSO0FBQ0gsS0FaRDtBQWFILEdBaEJEOztBQWtCQSxzQkFDSSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBRVMsMERBQU0sQ0FBQ0MsR0FBdkI7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUVELDBEQUFNLENBQUNFLFVBQXZCO0FBQUEsK0JBRUk7QUFBSyxtQkFBUyxFQUFFRiwwREFBTSxDQUFDRyxLQUF2QjtBQUE4QixlQUFLLEVBQUU7QUFBQ0MseUJBQWEsRUFBQztBQUFmLFdBQXJDO0FBQUEsa0NBR0k7QUFBSyxxQkFBUyxFQUFFSiwwREFBTSxDQUFDSyxlQUF2QjtBQUFBLG1DQUVJO0FBQ0ksa0JBQUksRUFBQyxNQURUO0FBRUksbUJBQUssRUFBRW5DLFVBRlg7QUFHSSx1QkFBUyxFQUFFOEIsMERBQU0sQ0FBQ00sS0FIdEI7QUFJSSxzQkFBUSxFQUFFMUI7QUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFISixlQWVJLHFFQUFDLDZDQUFEO0FBQ0ksc0JBQVUsRUFBRVYsVUFEaEI7QUFFSSxzQkFBVSxFQUFFTSxVQUZoQjtBQUdJLGdCQUFJLEVBQUVGLElBSFY7QUFJSSx3QkFBWSxFQUFFb0IsWUFKbEI7QUFLSSx3QkFBWSxFQUFFaEI7QUFMbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQWlDSCxDQTlGRDs7QUFnR2VYLHNFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0dBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNd0MsSUFBSSxHQUFJQyxLQUFELElBQVc7QUFFcEIsUUFBTSxDQUFFQyxXQUFGLEVBQWdCQyxjQUFoQixJQUFtQ3RDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBQXpDO0FBQ0EsUUFBTSxDQUFFc0MsS0FBRixFQUFVQyxRQUFWLElBQXVCeEMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FBN0I7QUFFQSxRQUFNd0MsV0FBVyxHQUFHQywrREFBVyxDQUFFQyxLQUFELElBQVdBLEtBQUssQ0FBQ0YsV0FBbEIsQ0FBL0IsQ0FMb0IsQ0FPcEI7O0FBQ0FHLHlEQUFTLENBQUMsTUFBSTtBQUNWTixrQkFBYyxDQUFDLEVBQUQsQ0FBZDtBQUNELEdBRk0sRUFFTCxDQUFDRyxXQUFELENBRkssQ0FBVCxDQVJvQixDQVlwQjs7QUFDQSxRQUFNSSxpQkFBaUIsR0FBSXRCLENBQUQsSUFBTztBQUM3QixRQUFHYyxXQUFXLEtBQUtkLENBQW5CLEVBQXNCO0FBQ2xCZSxvQkFBYyxDQUFDLEVBQUQsQ0FBZDtBQUNILEtBRkQsTUFFTTtBQUNGQSxvQkFBYyxDQUFDZixDQUFELENBQWQ7QUFDSDtBQUNKLEdBTkQsQ0Fib0IsQ0FxQnBCOzs7QUFDQSxRQUFNdUIsZUFBZSxHQUFJdkIsQ0FBRCxJQUFPO0FBQzNCaUIsWUFBUSxDQUFDakIsQ0FBRCxDQUFSO0FBQ0gsR0FGRCxDQXRCb0IsQ0EwQnBCOzs7QUFDQSxRQUFNd0IsZ0JBQWdCLEdBQUcsTUFBTTtBQUMzQlAsWUFBUSxDQUFDLEVBQUQsQ0FBUjtBQUNILEdBRkQ7O0FBSUEsUUFBTTtBQUNGdEMsUUFERTtBQUVGRSxjQUZFO0FBR0ZrQixnQkFIRTtBQUlGeEIsY0FKRTtBQUtGUTtBQUxFLE1BTUY4QixLQU5KLENBL0JvQixDQXVDcEI7O0FBQ0EsTUFBSVksSUFBSSxHQUFHLEVBQVg7O0FBRUEsT0FBSSxJQUFJekIsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHRyxJQUFJLENBQUN1QixJQUFMLENBQVU3QyxVQUFVLEdBQUMsR0FBckIsSUFBNEIsQ0FBL0MsRUFBa0RtQixDQUFDLEVBQW5ELEVBQXVEO0FBQ25EeUIsUUFBSSxDQUFDRSxJQUFMLGVBQ0k7QUFBSyxlQUFTLEVBQUV0QiwwREFBTSxDQUFDZCxJQUF2QjtBQUFBLDZCQUNJO0FBQ0ksaUJBQVMsRUFBRVIsWUFBWSxLQUFHaUIsQ0FBZixHQUFpQkssMERBQU0sQ0FBQ3RCLFlBQXhCLEdBQXFDc0IsMERBQU0sQ0FBQ3VCLFVBRDNEO0FBRUksZUFBTyxFQUFFLE1BQUk7QUFDVDdCLHNCQUFZLENBQUN4QixVQUFELEVBQWF5QixDQUFDLEdBQUMsQ0FBZixDQUFaO0FBQ0gsU0FKTDtBQUFBLGtCQU1LQTtBQU5MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKO0FBWUg7O0FBRUQsc0JBQ0kscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsZUFHS2tCLFdBQVcsZ0JBQ1I7QUFBSyxXQUFLLEVBQUU7QUFBQ1csaUJBQVMsRUFBQztBQUFYLE9BQVo7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUV4QiwwREFBTSxDQUFDeUIsVUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURRLGdCQU1SO0FBQUssV0FBSyxFQUFFO0FBQUNELGlCQUFTLEVBQUM7QUFBWCxPQUFaO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFFeEIsMERBQU0sQ0FBQ3lCLFVBQXZCO0FBQUEsbUJBQ0tqRCxVQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixFQUlLQSxVQUFVLEdBQUcsQ0FBYixpQkFDRyxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSxnQ0FDSTtBQUFLLG1CQUFTLEVBQUV3QiwwREFBTSxDQUFDMEIsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFJSTtBQUFLLG1CQUFTLEVBQUUxQiwwREFBTSxDQUFDMkIsUUFBdkI7QUFBQSxvQkFDS1A7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVFIsRUEyQks5QyxJQUFJLENBQUNzRCxHQUFMLENBQVMsQ0FBQ0MsR0FBRCxFQUFNbEMsQ0FBTixrQkFFTjtBQUVJLGVBQVMsRUFBRWdCLEtBQUssS0FBR2hCLENBQVIsR0FBVUssMERBQU0sQ0FBQzhCLGdCQUFqQixHQUFrQzlCLDBEQUFNLENBQUMrQixTQUZ4RDtBQUdJLGFBQU8sRUFBRSxNQUFJO0FBQUNkLHlCQUFpQixDQUFDdEIsQ0FBRCxDQUFqQjtBQUFxQixPQUh2QztBQUlJLGlCQUFXLEVBQUUsTUFBSTtBQUFDdUIsdUJBQWUsQ0FBQ3ZCLENBQUQsQ0FBZjtBQUFtQixPQUp6QztBQUtJLGtCQUFZLEVBQUUsTUFBSTtBQUFDd0Isd0JBQWdCLENBQUN4QixDQUFELENBQWhCO0FBQW9CLE9BTDNDO0FBQUEsOEJBT0k7QUFBTSxpQkFBUyxFQUFFSywwREFBTSxDQUFDZ0MsS0FBeEI7QUFBQSxrQkFBZ0NILEdBQUcsQ0FBQ0c7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQSixlQVFJO0FBQUssaUJBQVMsRUFBRWhDLDBEQUFNLENBQUNpQyxNQUF2QjtBQUErQixhQUFLLEVBQUU7QUFBQ0MsbUJBQVMsRUFBQztBQUFYLFNBQXRDO0FBQUEsa0JBQTJELFFBQVFMLEdBQUcsQ0FBQ007QUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSSixFQVNLMUIsV0FBVyxLQUFLZCxDQUFoQixpQkFDRztBQUFLLGlCQUFTLEVBQUVLLDBEQUFNLENBQUNvQyxZQUF2QjtBQUFBLCtCQUNJO0FBQU0sbUJBQVMsRUFBRXBDLDBEQUFNLENBQUNxQyxPQUF4QjtBQUFBLG9CQUFrQyxPQUFPUixHQUFHLENBQUNRO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVZSO0FBQUEsT0FDUzFDLENBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSCxDQTNCTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQWdESCxDQXpHRDs7QUEyR2VZLG1FQUFmLEU7Ozs7Ozs7Ozs7O0FDL0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTs7QUFFQSxNQUFNK0IsUUFBUSxHQUFHLE1BQUs7QUFDbEIsc0JBQ0kscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsMkJBRUUscUVBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQVFILENBVEQ7O0FBV2VBLHVFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1DLGlCQUFpQixHQUFHLE1BQU07QUFDOUIsU0FBTztBQUNMQyxXQUFPLENBQUNDLElBQUQsRUFBTztBQUNaLGFBQU9DLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQixJQUFoQixDQUFQO0FBQ0QsS0FISTs7QUFJTEMsV0FBTyxDQUFDSCxJQUFELEVBQU8xRCxLQUFQLEVBQWM7QUFDbkIsYUFBTzJELE9BQU8sQ0FBQ0MsT0FBUixDQUFnQjVELEtBQWhCLENBQVA7QUFDRCxLQU5JOztBQU9MOEQsY0FBVSxDQUFDSixJQUFELEVBQU87QUFDZixhQUFPQyxPQUFPLENBQUNDLE9BQVIsRUFBUDtBQUNEOztBQVRJLEdBQVA7QUFXRCxDQVpEOztBQWNBLE1BQU1HLE9BQU8sR0FDWCxPQUFnQ1AsaUJBQWlCLEVBQWpELEdBQXNEUSxTQUR4RDtBQUdlRCxzRUFBZjtBQUVBLElBQUlFLEtBQUo7QUFFQSxNQUFNQyxtQkFBbUIsR0FBRztBQUMxQkMsTUFBSSxFQUFDLEtBRHFCO0FBRTFCQyxNQUFJLEVBQUMsSUFGcUI7QUFHMUJ0QyxhQUFXLEVBQUU7QUFIYSxDQUE1QjtBQU1PLE1BQU11QyxXQUFXLEdBQUc7QUFDekJDLEtBQUcsRUFBRSxLQURvQjtBQUV6QkMsT0FBSyxFQUFFLE9BRmtCO0FBR3pCQyxJQUFFLEVBQUUsSUFIcUI7QUFJekJDLFFBQU0sRUFBRSxRQUppQjtBQUt6QkMsT0FBSyxFQUFFLE9BTGtCO0FBTXpCQyxhQUFXLEVBQUUsYUFOWTtBQU96QkMsY0FBWSxFQUFFLGNBUFc7QUFRekJDLGdCQUFjLEVBQUUsZ0JBUlM7QUFTekJDLGlCQUFlLEVBQUU7QUFUUSxDQUFwQixDLENBWVA7O0FBQ08sTUFBTUMsT0FBTyxHQUFHLENBQUMvQyxLQUFLLEdBQUdrQyxtQkFBVCxFQUE4QmMsTUFBOUIsS0FBeUM7QUFDOUQsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBS1osV0FBVyxDQUFDUSxjQUFqQjtBQUNFLDZDQUNLN0MsS0FETDtBQUVFRixtQkFBVyxFQUFFO0FBRmY7O0FBSUYsU0FBS3VDLFdBQVcsQ0FBQ1MsZUFBakI7QUFDRSw2Q0FDSzlDLEtBREw7QUFFRUYsbUJBQVcsRUFBRTtBQUZmOztBQUlGLFNBQUt1QyxXQUFXLENBQUNDLEdBQWpCO0FBQ0UsNkNBQ0t0QyxLQURMO0FBRUVtQyxZQUFJLEVBQUU7QUFGUjs7QUFJRixTQUFLRSxXQUFXLENBQUNFLEtBQWpCO0FBQ0UsNkNBQ0t2QyxLQURMO0FBRUVtQyxZQUFJLEVBQUU7QUFGUjs7QUFJRixTQUFLRSxXQUFXLENBQUNHLEVBQWpCO0FBQ0UsNkNBQ0t4QyxLQURMO0FBRUVvQyxZQUFJLEVBQUU7QUFGUjs7QUFJRixTQUFLQyxXQUFXLENBQUNJLE1BQWpCO0FBQ0UsNkNBQ0t6QyxLQURMO0FBRUVvQyxZQUFJLEVBQUU7QUFGUjs7QUFJRixTQUFLQyxXQUFXLENBQUNLLEtBQWpCO0FBQ0UsNkNBQ0sxQyxLQURMO0FBRUVtQyxZQUFJLEVBQUUsS0FGUjtBQUdFQyxZQUFJLEVBQUU7QUFIUjs7QUFLRjtBQUNFLGFBQU9wQyxLQUFQO0FBdENKO0FBd0NELENBekNNLEMsQ0EyQ1A7O0FBQ08sTUFBTS9CLGdCQUFnQixHQUFHLE1BQU07QUFDcEMsU0FBTztBQUFFZ0YsUUFBSSxFQUFFWixXQUFXLENBQUNRO0FBQXBCLEdBQVA7QUFDRCxDQUZNO0FBSUEsTUFBTXJFLGlCQUFpQixHQUFHLE1BQU07QUFDckMsU0FBTztBQUFFeUUsUUFBSSxFQUFFWixXQUFXLENBQUNTO0FBQXBCLEdBQVA7QUFDRCxDQUZNO0FBSUEsTUFBTUksS0FBSyxHQUFHLE1BQU07QUFDekIsU0FBTztBQUFFRCxRQUFJLEVBQUVaLFdBQVcsQ0FBQ0M7QUFBcEIsR0FBUDtBQUNELENBRk07QUFJQSxNQUFNYSxPQUFPLEdBQUcsTUFBTTtBQUMzQixTQUFPO0FBQUVGLFFBQUksRUFBRVosV0FBVyxDQUFDRTtBQUFwQixHQUFQO0FBQ0QsQ0FGTTtBQUlBLE1BQU1hLElBQUksR0FBRyxNQUFNO0FBQ3hCLFNBQU87QUFBRUgsUUFBSSxFQUFFWixXQUFXLENBQUNHO0FBQXBCLEdBQVA7QUFDRCxDQUZNO0FBSUEsTUFBTWEsUUFBUSxHQUFHLE1BQU07QUFDNUIsU0FBTztBQUFFSixRQUFJLEVBQUVaLFdBQVcsQ0FBQ0k7QUFBcEIsR0FBUDtBQUNELENBRk07QUFJQSxNQUFNYSxVQUFVLEdBQUcsTUFBTTtBQUM5QixTQUFPO0FBQUVMLFFBQUksRUFBRVosV0FBVyxDQUFDSztBQUFwQixHQUFQO0FBQ0QsQ0FGTTtBQUlQLE1BQU1hLGFBQWEsR0FBRztBQUNwQkMsS0FBRyxFQUFFLFNBRGU7QUFFcEJ6QixTQUZvQjtBQUdwQjBCLFdBQVMsRUFBRSxDQUFDLE1BQUQsRUFBUyxNQUFULENBSFMsQ0FHUzs7QUFIVCxDQUF0QjtBQU1BLE1BQU1DLGdCQUFnQixHQUFHQyxvRUFBYyxDQUFDSixhQUFELEVBQWdCUixPQUFoQixDQUF2Qzs7QUFFQSxTQUFTYSxTQUFULENBQW1CQyxZQUFZLEdBQUczQixtQkFBbEMsRUFBdUQ7QUFDckQsU0FBTzRCLHlEQUFXLENBQ2hCSixnQkFEZ0IsRUFFaEJHLFlBRmdCLEVBR2hCRSxvRkFBbUIsQ0FBQ0MsNkRBQWUsRUFBaEIsQ0FISCxDQUFsQjtBQUtEOztBQUVNLE1BQU1DLGVBQWUsR0FBSUMsY0FBRCxJQUFvQjtBQUFBOztBQUNqRCxNQUFJQyxNQUFNLGNBQUdsQyxLQUFILDZDQUFZMkIsU0FBUyxDQUFDTSxjQUFELENBQS9CLENBRGlELENBR2pEO0FBQ0E7OztBQUNBLE1BQUlBLGNBQWMsSUFBSWpDLEtBQXRCLEVBQTZCO0FBQzNCa0MsVUFBTSxHQUFHUCxTQUFTLGlDQUNiM0IsS0FBSyxDQUFDbUMsUUFBTixFQURhLEdBRWJGLGNBRmEsRUFBbEIsQ0FEMkIsQ0FLM0I7O0FBQ0FqQyxTQUFLLEdBQUdvQyxTQUFSO0FBQ0QsR0FaZ0QsQ0FjakQ7OztBQUNBLFlBQW1DLE9BQU9GLE1BQVAsQ0FmYyxDQWdCakQ7O0FBQ0EsTUFBSSxDQUFDbEMsS0FBTCxFQUFZQSxLQUFLLEdBQUdrQyxNQUFSO0FBRVosU0FBT0EsTUFBUDtBQUNELENBcEJNO0FBc0JBLFNBQVNHLFFBQVQsQ0FBa0JULFlBQWxCLEVBQWdDO0FBQ3JDLFFBQU01QixLQUFLLEdBQUdzQyxxREFBTyxDQUFDLE1BQU1OLGVBQWUsQ0FBQ0osWUFBRCxDQUF0QixFQUFzQyxDQUFDQSxZQUFELENBQXRDLENBQXJCO0FBQ0EsU0FBTzVCLEtBQVA7QUFDRCxDOzs7Ozs7Ozs7OztBQy9KRCwrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSx1RSIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL2Nzcy9BcHAubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBMaXN0IGZyb20gJy4vTGlzdCc7XHJcbmltcG9ydCBhbGdvbGlhc2VhcmNoIGZyb20gJ2FsZ29saWFzZWFyY2gvbGl0ZSc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyB0b1N0YXJ0U2VhcmNoaW5nLCB0b0ZpbmlzaFNlYXJjaGluZyB9IGZyb20gJy4uLy4uL3N0b3JlJztcclxuXHJcbmNvbnN0IGNsaWVudCA9IGFsZ29saWFzZWFyY2goXHJcbiAgICAnWElNUk5WSkxRNycsXHJcbiAgICAnYzczMTI3ZmRkM2FmMTEzNjUwYmQ5Yjg4ZWVjMzc3YjUnLFxyXG4gICAge3Byb3RvY29sOiAnaHR0cHM6J31cclxuKTtcclxuXHJcbmNvbnN0IGluZGV4ID0gY2xpZW50LmluaXRJbmRleCgnQ29tbXVuaXR5X2FydGljbGVzX3N0YWdpbmcnKTtcclxuXHJcbmNvbnN0IEFsZ29saWEgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgICBjb25zdCBbIGlucHV0VmFsdWUsIHNldElucHV0VmFsdWUgXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFsgbGlzdCAsIHNldExpc3QgXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFsgbGlzdExlbmd0aCAsIHNldExpc3RMZW5ndGggXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgWyBwYWdlU2VsZWN0ZWQsIHNldFBhZ2VTZWxlY3RlZCBdID0gUmVhY3QudXNlU3RhdGUoMSk7XHJcblxyXG4gICAgLy/mkJzlsItcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcblxyXG4gICAgICAgIHNldElucHV0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIGRpc3BhdGNoKHRvU3RhcnRTZWFyY2hpbmcoKSk7Ly/mkJzlsIvkuK1cclxuICAgICAgICBzZXRQYWdlU2VsZWN0ZWQoMSk7Ly/ph43mlrDmkJzlsIvoqK3lrprpoIHnorzngroxXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoZS50YXJnZXQudmFsdWUpe1xyXG4gICAgICAgICAgICBpbmRleFxyXG4gICAgICAgICAgICAuc2VhcmNoKGUudGFyZ2V0LnZhbHVlLHtcclxuICAgICAgICAgICAgICAgIHBhZ2U6MCxcclxuICAgICAgICAgICAgICAgIGhpdHNQZXJQYWdlOjEwMFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoeyBoaXRzLCBuYkhpdHMgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0TGlzdChoaXRzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZighaGl0c1swXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExpc3RMZW5ndGgoMCk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TGlzdExlbmd0aChuYkhpdHMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHRvRmluaXNoU2VhcmNoaW5nKCkpOy8v5pCc5bCL5a6M5oiQXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2godG9GaW5pc2hTZWFyY2hpbmcoKSk7XHJcbiAgICAgICAgICAgIH0pOyBcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgIHNldExpc3QoW10pO1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh0b0ZpbmlzaFNlYXJjaGluZygpKTtcclxuICAgICAgICAgICAgc2V0TGlzdExlbmd0aCgwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/orormj5vpoIHnorxcclxuICAgIGNvbnN0IGhhbmRsZVRvUGFnZSA9IChpbnB1dFZhbHVlLCBpKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2godG9TdGFydFNlYXJjaGluZygpKTtcclxuICAgICAgICBzZXRQYWdlU2VsZWN0ZWQoaSArIDEpO1xyXG4gICAgICAgIGluZGV4XHJcbiAgICAgICAgLnNlYXJjaChpbnB1dFZhbHVlLHtcclxuICAgICAgICAgICAgcGFnZTppLFxyXG4gICAgICAgICAgICBoaXRzUGVyUGFnZToxMDBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKCh7IGhpdHMsIG5iSGl0cyB9KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGhpdHMsIE1hdGgucm91bmQobmJIaXRzLzEwMCksIDg4OCk7XHJcbiAgICAgICAgICAgIHNldExpc3QoaGl0cyk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHRvRmluaXNoU2VhcmNoaW5nKCkpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHRvRmluaXNoU2VhcmNoaW5nKCkpO1xyXG4gICAgICAgIH0pOyBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJveH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm91dGVyQmxvY2t9PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ibG9ja30gc3R5bGU9e3twYWRkaW5nQm90dG9tOic1cHgnfX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyog5pCc5bCL5qyE5L2NICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0QmFja2dyb3VuZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIOWIl+ihqCAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0TGVuZ3RoPXtsaXN0TGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdD17bGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVRvUGFnZT17aGFuZGxlVG9QYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVNlbGVjdGVkPXtwYWdlU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbGdvbGlhIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9jc3MvQXBwLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmNvbnN0IExpc3QgPSAocHJvcHMpID0+IHsgICAgXHJcblxyXG4gICAgY29uc3QgWyBzdW1tYXJ5T3BlbiAsIHNldFN1bW1hcnlPcGVuIF0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbIGhvdmVyICwgc2V0SG92ZXIgXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCBpc1NlYXJjaGluZyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuaXNTZWFyY2hpbmcpO1xyXG5cclxuICAgIC8vIOaQnOWwi+abtOaWsOaZgua4heepunN1bW1hcnnplovpl5xcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHNldFN1bW1hcnlPcGVuKCcnKTtcclxuICAgICAgfSxbaXNTZWFyY2hpbmddKVxyXG5cclxuICAgIC8v5o6n5Yi2c3VtbWFyeemWi+mXnCAgXHJcbiAgICBjb25zdCBoYW5kbGVTdW1tYXJ5T3BlbiA9IChpKSA9PiB7XHJcbiAgICAgICAgaWYoc3VtbWFyeU9wZW4gPT09IGkpIHtcclxuICAgICAgICAgICAgc2V0U3VtbWFyeU9wZW4oJycpO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgc2V0U3VtbWFyeU9wZW4oaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOa4uOaomeenu+iHs+ihqOWWrlxyXG4gICAgY29uc3QgaGFuZGxlTW91c2VPdmVyID0gKGkpID0+IHtcclxuICAgICAgICBzZXRIb3ZlcihpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8g5ri45qiZ6Zui6ZaL6KGo5ZauXHJcbiAgICBjb25zdCBoYW5kbGVNb3VzZUxlYXZlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEhvdmVyKCcnKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgbGlzdCxcclxuICAgICAgICBsaXN0TGVuZ3RoLFxyXG4gICAgICAgIGhhbmRsZVRvUGFnZSxcclxuICAgICAgICBpbnB1dFZhbHVlLFxyXG4gICAgICAgIHBhZ2VTZWxlY3RlZFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIC8v6aCB56K8ICYmIOmggeexpFxyXG4gICAgbGV0IGRhdGEgPSBbXTtcclxuXHJcbiAgICBmb3IobGV0IGkgPSAxOyBpIDwgTWF0aC5jZWlsKGxpc3RMZW5ndGgvMTAwKSArIDE7IGkrKykge1xyXG4gICAgICAgIGRhdGEucHVzaChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlfT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwYWdlU2VsZWN0ZWQ9PT1pP3N0eWxlcy5wYWdlU2VsZWN0ZWQ6c3R5bGVzLnBhZ2VCdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlVG9QYWdlKGlucHV0VmFsdWUsIGktMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7aX1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHsvKiDmkJzlsIvni4DmhYsgICYm5pCc5bCL57WQ5p6cICYmIOmggeeivCAqL31cclxuICAgICAgICAgICAge2lzU2VhcmNoaW5nP1xyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjonbGVmdCd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGFBbW91bnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTZWFyY2hpbmcuLi5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PjpcclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246J2xlZnQnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXRhQW1vdW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2xpc3RMZW5ndGh9IHBvc3RzIGZvdW5kXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge2xpc3RMZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnZUJsb2NrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnZUxpc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHsvKiDmkJzlsIvntZDmnpxsaXN0ICovfVxyXG4gICAgICAgICAgICB7bGlzdC5tYXAoKHJvdywgaSkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aX0gXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtob3Zlcj09PWk/c3R5bGVzLmxpc3RCbG9ja09uSG92ZXI6c3R5bGVzLmxpc3RCbG9ja30gXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PntoYW5kbGVTdW1tYXJ5T3BlbihpKX19XHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9eygpPT57aGFuZGxlTW91c2VPdmVyKGkpfX1cclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpPT57aGFuZGxlTW91c2VMZWF2ZShpKX19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pntyb3cudGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXV0aG9yfSBzdHlsZT17e21hcmdpblRvcDonMTBweCd9fT57J0J5ICcgKyByb3cuYXV0aG9yX25hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge3N1bW1hcnlPcGVuID09PSBpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3VtbWFyeUJsb2NrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnN1bW1hcnl9PnsnQnknICsgcm93LnN1bW1hcnl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJib3hcIjogXCJBcHBfYm94X18zWDhPbFwiLFxuXHRcIm91dGVyQmxvY2tcIjogXCJBcHBfb3V0ZXJCbG9ja19fM0NwYk9cIixcblx0XCJibG9ja1wiOiBcIkFwcF9ibG9ja19fM1JDNWJcIixcblx0XCJoZWFkZXJcIjogXCJBcHBfaGVhZGVyX18yZ2p0OFwiLFxuXHRcImlucHV0XCI6IFwiQXBwX2lucHV0X18ySGsyY1wiLFxuXHRcImlucHV0QmFja2dyb3VuZFwiOiBcIkFwcF9pbnB1dEJhY2tncm91bmRfXzFXOWltXCIsXG5cdFwibmV4dFBhZ2VCdXR0b25cIjogXCJBcHBfbmV4dFBhZ2VCdXR0b25fXzNNZG1zXCIsXG5cdFwiZGF0YUFtb3VudFwiOiBcIkFwcF9kYXRhQW1vdW50X18xZUs4OVwiLFxuXHRcImxpc3RCbG9ja1wiOiBcIkFwcF9saXN0QmxvY2tfXzJEd1FaXCIsXG5cdFwibGlzdEJsb2NrT25Ib3ZlclwiOiBcIkFwcF9saXN0QmxvY2tPbkhvdmVyX19VdkM2OFwiLFxuXHRcInRpdGxlXCI6IFwiQXBwX3RpdGxlX18yY1NkVlwiLFxuXHRcImF1dGhvclwiOiBcIkFwcF9hdXRob3JfXzJOT2QyXCIsXG5cdFwic3VtbWFyeUJsb2NrXCI6IFwiQXBwX3N1bW1hcnlCbG9ja19fZC1rbG5cIixcblx0XCJzdW1tYXJ5XCI6IFwiQXBwX3N1bW1hcnlfXzJSTXBJXCIsXG5cdFwicGFnZUJsb2NrXCI6IFwiQXBwX3BhZ2VCbG9ja19faU54aUtcIixcblx0XCJwYWdlTGlzdFwiOiBcIkFwcF9wYWdlTGlzdF9fMk5ud0VcIixcblx0XCJwYWdlQnV0dG9uXCI6IFwiQXBwX3BhZ2VCdXR0b25fXzNtUXlkXCIsXG5cdFwicGFnZVNlbGVjdGVkXCI6IFwiQXBwX3BhZ2VTZWxlY3RlZF9fMzFMcHZcIixcblx0XCJwYWdlXCI6IFwiQXBwX3BhZ2VfXzJpcUZDXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBBbGdvbGlhIGZyb20gJy4uL2NvbXBvbmVudC9BbGdvbGlhL0FsZ29saWEnXHJcblxyXG5jb25zdCBIb21lUGFnZSA9ICgpID0+e1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4gICAgICAgICAgPEFsZ29saWEvPlxyXG5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG5cclxufVxyXG4gIFxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZSIsImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJ1xyXG5pbXBvcnQgeyBwZXJzaXN0UmVkdWNlciB9IGZyb20gJ3JlZHV4LXBlcnNpc3QnXHJcbmltcG9ydCBjcmVhdGVXZWJTdG9yYWdlIGZyb20gXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlL2NyZWF0ZVdlYlN0b3JhZ2VcIjtcclxuXHJcbmNvbnN0IGNyZWF0ZU5vb3BTdG9yYWdlID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBnZXRJdGVtKF9rZXkpIHtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcclxuICAgIH0sXHJcbiAgICBzZXRJdGVtKF9rZXksIHZhbHVlKSB7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZUl0ZW0oX2tleSkge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBzdG9yYWdlID1cclxuICB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiID8gY3JlYXRlTm9vcFN0b3JhZ2UoKSA6IGNyZWF0ZVdlYlN0b3JhZ2UoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JhZ2U7XHJcblxyXG5sZXQgc3RvcmVcclxuXHJcbmNvbnN0IGV4YW1wbGVJbml0aWFsU3RhdGUgPSB7XHJcbiAgbW9kZTonZGF5JyxcclxuICBsYW5nOidlbicsXHJcbiAgaXNTZWFyY2hpbmc6IGZhbHNlXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25UeXBlcyA9IHtcclxuICBEQVk6ICdEQVknLFxyXG4gIE5JR0hUOiAnTklHSFQnLFxyXG4gIEVOOiAnRU4nLFxyXG4gIFpISEFOVDogJ1pISEFOVCcsXHJcbiAgUkVTRVQ6ICdSRVNFVCcsXHJcbiAgU1VNTUFSWU9QRU46ICdTVU1NQVJZT1BFTicsXHJcbiAgU1VNTUFSWUNMT1NFOiAnU1VNTUFSWUNMT1NFJyxcclxuICBTVEFSVFNFQVJDSElORzogJ1NUQVJUU0VBUkNISU5HJyxcclxuICBGSU5JU0hTRUFSQ0hJTkc6ICdGSU5JU0hTRUFSQ0hJTkcnXHJcbn1cclxuXHJcbi8vIFJFRFVDRVJTXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyID0gKHN0YXRlID0gZXhhbXBsZUluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TVEFSVFNFQVJDSElORzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc1NlYXJjaGluZzogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLkZJTklTSFNFQVJDSElORzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc1NlYXJjaGluZzogZmFsc2VcclxuICAgICAgfVxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5EQVk6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbW9kZTogJ2RheSdcclxuICAgICAgfVxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5OSUdIVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBtb2RlOiAnbmlnaHQnXHJcbiAgICAgIH1cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuRU46XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbGFuZzogJ2VuJ1xyXG4gICAgICB9XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlpISEFOVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsYW5nOiAnemhIYW50J1xyXG4gICAgICB9IFxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5SRVNFVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBtb2RlOiAnZGF5JyxcclxuICAgICAgICBsYW5nOiAnZW4nXHJcbiAgICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gIH1cclxufVxyXG5cclxuLy8gQUNUSU9OU1xyXG5leHBvcnQgY29uc3QgdG9TdGFydFNlYXJjaGluZyA9ICgpID0+IHtcclxuICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5TVEFSVFNFQVJDSElORyB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0b0ZpbmlzaFNlYXJjaGluZyA9ICgpID0+IHtcclxuICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5GSU5JU0hTRUFSQ0hJTkcgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdG9EYXkgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuREFZIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHRvTmlnaHQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuTklHSFQgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdG9FbiA9ICgpID0+IHtcclxuICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5FTiB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0b1poSGFudCA9ICgpID0+IHtcclxuICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5aSEhBTlQgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVzZXRDb3VudCA9ICgpID0+IHtcclxuICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5SRVNFVCB9XHJcbn1cclxuXHJcbmNvbnN0IHBlcnNpc3RDb25maWcgPSB7XHJcbiAga2V5OiAncHJpbWFyeScsXHJcbiAgc3RvcmFnZSxcclxuICB3aGl0ZWxpc3Q6IFsnbW9kZScsICdsYW5nJ10sIC8vIHBsYWNlIHRvIHNlbGVjdCB3aGljaCBzdGF0ZSB5b3Ugd2FudCB0byBwZXJzaXN0XHJcbn1cclxuXHJcbmNvbnN0IHBlcnNpc3RlZFJlZHVjZXIgPSBwZXJzaXN0UmVkdWNlcihwZXJzaXN0Q29uZmlnLCByZWR1Y2VyKVxyXG5cclxuZnVuY3Rpb24gbWFrZVN0b3JlKGluaXRpYWxTdGF0ZSA9IGV4YW1wbGVJbml0aWFsU3RhdGUpIHtcclxuICByZXR1cm4gY3JlYXRlU3RvcmUoXHJcbiAgICBwZXJzaXN0ZWRSZWR1Y2VyLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoKSlcclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsaXplU3RvcmUgPSAocHJlbG9hZGVkU3RhdGUpID0+IHtcclxuICBsZXQgX3N0b3JlID0gc3RvcmUgPz8gbWFrZVN0b3JlKHByZWxvYWRlZFN0YXRlKVxyXG5cclxuICAvLyBBZnRlciBuYXZpZ2F0aW5nIHRvIGEgcGFnZSB3aXRoIGFuIGluaXRpYWwgUmVkdXggc3RhdGUsIG1lcmdlIHRoYXQgc3RhdGVcclxuICAvLyB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIGluIHRoZSBzdG9yZSwgYW5kIGNyZWF0ZSBhIG5ldyBzdG9yZVxyXG4gIGlmIChwcmVsb2FkZWRTdGF0ZSAmJiBzdG9yZSkge1xyXG4gICAgX3N0b3JlID0gbWFrZVN0b3JlKHtcclxuICAgICAgLi4uc3RvcmUuZ2V0U3RhdGUoKSxcclxuICAgICAgLi4ucHJlbG9hZGVkU3RhdGUsXHJcbiAgICB9KVxyXG4gICAgLy8gUmVzZXQgdGhlIGN1cnJlbnQgc3RvcmVcclxuICAgIHN0b3JlID0gdW5kZWZpbmVkXHJcbiAgfVxyXG5cclxuICAvLyBGb3IgU1NHIGFuZCBTU1IgYWx3YXlzIGNyZWF0ZSBhIG5ldyBzdG9yZVxyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIF9zdG9yZVxyXG4gIC8vIENyZWF0ZSB0aGUgc3RvcmUgb25jZSBpbiB0aGUgY2xpZW50XHJcbiAgaWYgKCFzdG9yZSkgc3RvcmUgPSBfc3RvcmVcclxuXHJcbiAgcmV0dXJuIF9zdG9yZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RvcmUoaW5pdGlhbFN0YXRlKSB7XHJcbiAgY29uc3Qgc3RvcmUgPSB1c2VNZW1vKCgpID0+IGluaXRpYWxpemVTdG9yZShpbml0aWFsU3RhdGUpLCBbaW5pdGlhbFN0YXRlXSlcclxuICByZXR1cm4gc3RvcmVcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbGdvbGlhc2VhcmNoL2xpdGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2UvY3JlYXRlV2ViU3RvcmFnZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9