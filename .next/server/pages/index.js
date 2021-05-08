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
  const [listLength, setListLength] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0); // const [ listPage, setListPage ] = React.useState([]);

  const handleChange = e => {
    setInputValue(e.target.value);
    dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_6__["toStartSearching"])());

    if (e.target.value) {
      let data = [];
      index.search(e.target.value).then(({
        hits,
        nbHits
      }) => {
        console.log(hits, Math.round(nbHits / 100), 888);
        setList(hits);

        if (!hits[0]) {
          setListLength(0);
        } else {
          setListLength(nbHits); // for(let i = 0; i < Math.round(nbHits/100); i++) {
          //     data.push(i);
          // }
          // setListPage(data);
        }

        dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_6__["toFinishSearching"])());
      }).catch(err => {
        dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_6__["toFinishSearching"])());
      });
    } else {
      setList([]);
      dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_6__["toFinishSearching"])());
      setListLength(0);
    }
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
              lineNumber: 66,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
            inputValue: inputValue,
            listLength: listLength,
            list: list // listPage={listPage}

          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.nextPageButton,
            onClick: () => {
              console.log(listPage, 55);
            },
            children: "View Next Page"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 58,
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
  const [listPage, setListPage] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]);
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
    listLength
  } = props;
  let data = [];

  for (let i = 1; i < Math.ceil(listLength / 100) + 1; i++) {
    data.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.page,
      children: i
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, undefined));
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: [isSearching ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dataAmount,
      children: "Searching..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dataAmount,
        children: [listLength, " posts found"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 21
      }, undefined), data]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
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
        lineNumber: 78,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.author,
        style: {
          marginTop: '10px'
        },
        children: 'By ' + row.author_name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 21
      }, undefined), summaryOpen === i && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.summaryBlock,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.summary,
          children: 'By' + row.summary
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 29
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 25
      }, undefined)]
    }, i, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L0FsZ29saWEvQWxnb2xpYS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvQWxnb2xpYS9MaXN0LmpzIiwid2VicGFjazovLy8uL2Nzcy9BcHAubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbGdvbGlhc2VhcmNoL2xpdGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZS9jcmVhdGVXZWJTdG9yYWdlXCIiXSwibmFtZXMiOlsiY2xpZW50IiwiYWxnb2xpYXNlYXJjaCIsInByb3RvY29sIiwiaW5kZXgiLCJpbml0SW5kZXgiLCJBbGdvbGlhIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImxpc3QiLCJzZXRMaXN0IiwibGlzdExlbmd0aCIsInNldExpc3RMZW5ndGgiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0b1N0YXJ0U2VhcmNoaW5nIiwiZGF0YSIsInNlYXJjaCIsInRoZW4iLCJoaXRzIiwibmJIaXRzIiwiY29uc29sZSIsImxvZyIsIk1hdGgiLCJyb3VuZCIsInRvRmluaXNoU2VhcmNoaW5nIiwiY2F0Y2giLCJlcnIiLCJzdHlsZXMiLCJib3giLCJvdXRlckJsb2NrIiwiYmxvY2siLCJwYWRkaW5nQm90dG9tIiwiaW5wdXRCYWNrZ3JvdW5kIiwiaW5wdXQiLCJuZXh0UGFnZUJ1dHRvbiIsImxpc3RQYWdlIiwiTGlzdCIsInByb3BzIiwic3VtbWFyeU9wZW4iLCJzZXRTdW1tYXJ5T3BlbiIsImhvdmVyIiwic2V0SG92ZXIiLCJzZXRMaXN0UGFnZSIsImlzU2VhcmNoaW5nIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZUVmZmVjdCIsImhhbmRsZVN1bW1hcnlPcGVuIiwiaSIsImhhbmRsZU1vdXNlT3ZlciIsImhhbmRsZU1vdXNlTGVhdmUiLCJjZWlsIiwicHVzaCIsInBhZ2UiLCJkYXRhQW1vdW50IiwibWFwIiwicm93IiwibGlzdEJsb2NrT25Ib3ZlciIsImxpc3RCbG9jayIsInRpdGxlIiwiYXV0aG9yIiwibWFyZ2luVG9wIiwiYXV0aG9yX25hbWUiLCJzdW1tYXJ5QmxvY2siLCJzdW1tYXJ5IiwiSG9tZVBhZ2UiLCJjcmVhdGVOb29wU3RvcmFnZSIsImdldEl0ZW0iLCJfa2V5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsInN0b3JhZ2UiLCJjcmVhdGVXZWJTdG9yYWdlIiwic3RvcmUiLCJleGFtcGxlSW5pdGlhbFN0YXRlIiwibW9kZSIsImxhbmciLCJhY3Rpb25UeXBlcyIsIkRBWSIsIk5JR0hUIiwiRU4iLCJaSEhBTlQiLCJSRVNFVCIsIlNVTU1BUllPUEVOIiwiU1VNTUFSWUNMT1NFIiwiU1RBUlRTRUFSQ0hJTkciLCJGSU5JU0hTRUFSQ0hJTkciLCJyZWR1Y2VyIiwiYWN0aW9uIiwidHlwZSIsInRvRGF5IiwidG9OaWdodCIsInRvRW4iLCJ0b1poSGFudCIsInJlc2V0Q291bnQiLCJwZXJzaXN0Q29uZmlnIiwia2V5Iiwid2hpdGVsaXN0IiwicGVyc2lzdGVkUmVkdWNlciIsInBlcnNpc3RSZWR1Y2VyIiwibWFrZVN0b3JlIiwiaW5pdGlhbFN0YXRlIiwiY3JlYXRlU3RvcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwiaW5pdGlhbGl6ZVN0b3JlIiwicHJlbG9hZGVkU3RhdGUiLCJfc3RvcmUiLCJnZXRTdGF0ZSIsInVuZGVmaW5lZCIsInVzZVN0b3JlIiwidXNlTWVtbyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxNQUFNLEdBQUdDLHlEQUFhLENBQ3hCLFlBRHdCLEVBRXhCLGtDQUZ3QixFQUd4QjtBQUFDQyxVQUFRLEVBQUU7QUFBWCxDQUh3QixDQUE1QjtBQU1BLE1BQU1DLEtBQUssR0FBR0gsTUFBTSxDQUFDSSxTQUFQLENBQWlCLDRCQUFqQixDQUFk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QUFtQyxPQUFPRixNQUFQLENBZmMsQ0FnQmpEOztBQUNBLE1BQUksQ0FBQ2xDLEtBQUwsRUFBWUEsS0FBSyxHQUFHa0MsTUFBUjtBQUVaLFNBQU9BLE1BQVA7QUFDRCxDQXBCTTtBQXNCQSxTQUFTRyxRQUFULENBQWtCVCxZQUFsQixFQUFnQztBQUNyQyxRQUFNNUIsS0FBSyxHQUFHc0MscURBQU8sQ0FBQyxNQUFNTixlQUFlLENBQUNKLFlBQUQsQ0FBdEIsRUFBc0MsQ0FBQ0EsWUFBRCxDQUF0QyxDQUFyQjtBQUNBLFNBQU81QixLQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7QUMvSkQsK0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsdUUiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9jc3MvQXBwLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgTGlzdCBmcm9tICcuL0xpc3QnO1xyXG5pbXBvcnQgYWxnb2xpYXNlYXJjaCBmcm9tICdhbGdvbGlhc2VhcmNoL2xpdGUnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgdG9TdGFydFNlYXJjaGluZywgdG9GaW5pc2hTZWFyY2hpbmcgfSBmcm9tICcuLi8uLi9zdG9yZSc7XHJcblxyXG5jb25zdCBjbGllbnQgPSBhbGdvbGlhc2VhcmNoKFxyXG4gICAgJ1hJTVJOVkpMUTcnLFxyXG4gICAgJ2M3MzEyN2ZkZDNhZjExMzY1MGJkOWI4OGVlYzM3N2I1JyxcclxuICAgIHtwcm90b2NvbDogJ2h0dHBzOid9XHJcbik7XHJcblxyXG5jb25zdCBpbmRleCA9IGNsaWVudC5pbml0SW5kZXgoJ0NvbW11bml0eV9hcnRpY2xlc19zdGFnaW5nJyk7XHJcblxyXG5jb25zdCBBbGdvbGlhID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gICAgY29uc3QgWyBpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlIF0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbIGxpc3QgLCBzZXRMaXN0IF0gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbIGxpc3RMZW5ndGggLCBzZXRMaXN0TGVuZ3RoIF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICAgIC8vIGNvbnN0IFsgbGlzdFBhZ2UsIHNldExpc3RQYWdlIF0gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuXHJcbiAgICAgICAgc2V0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgZGlzcGF0Y2godG9TdGFydFNlYXJjaGluZygpKTtcclxuICAgICAgICBcclxuICAgICAgICBpZihlLnRhcmdldC52YWx1ZSl7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gW107XHJcbiAgICAgICAgICAgIGluZGV4XHJcbiAgICAgICAgICAgIC5zZWFyY2goZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgIC50aGVuKCh7IGhpdHMsIG5iSGl0cyB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhoaXRzLCBNYXRoLnJvdW5kKG5iSGl0cy8xMDApLCA4ODgpO1xyXG4gICAgICAgICAgICAgICAgc2V0TGlzdChoaXRzKTtcclxuICAgICAgICAgICAgICAgIGlmKCFoaXRzWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TGlzdExlbmd0aCgwKTtcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMaXN0TGVuZ3RoKG5iSGl0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZm9yKGxldCBpID0gMDsgaSA8IE1hdGgucm91bmQobmJIaXRzLzEwMCk7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBkYXRhLnB1c2goaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNldExpc3RQYWdlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2godG9GaW5pc2hTZWFyY2hpbmcoKSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2godG9GaW5pc2hTZWFyY2hpbmcoKSk7XHJcbiAgICAgICAgICAgIH0pOyBcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgIHNldExpc3QoW10pO1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh0b0ZpbmlzaFNlYXJjaGluZygpKTtcclxuICAgICAgICAgICAgc2V0TGlzdExlbmd0aCgwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3h9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm91dGVyQmxvY2t9PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmxvY2t9IHN0eWxlPXt7cGFkZGluZ0JvdHRvbTonNXB4J319PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0QmFja2dyb3VuZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRWYWx1ZT17aW5wdXRWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdExlbmd0aD17bGlzdExlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdD17bGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGlzdFBhZ2U9e2xpc3RQYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubmV4dFBhZ2VCdXR0b259IG9uQ2xpY2s9eygpPT57Y29uc29sZS5sb2cobGlzdFBhZ2UsIDU1KX19PlZpZXcgTmV4dCBQYWdlPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWxnb2xpYSIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vY3NzL0FwcC5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5jb25zdCBMaXN0ID0gKHByb3BzKSA9PiB7ICAgIFxyXG5cclxuICAgIGNvbnN0IFsgc3VtbWFyeU9wZW4gLCBzZXRTdW1tYXJ5T3BlbiBdID0gUmVhY3QudXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgWyBob3ZlciAsIHNldEhvdmVyIF0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbIGxpc3RQYWdlLCBzZXRMaXN0UGFnZSBdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IGlzU2VhcmNoaW5nID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5pc1NlYXJjaGluZyk7XHJcblxyXG4gICAgLy8g5pCc5bCL5pu05paw5pmC5riF56m6c3VtbWFyeemWi+mXnFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgc2V0U3VtbWFyeU9wZW4oJycpO1xyXG4gICAgICB9LFtpc1NlYXJjaGluZ10pXHJcblxyXG4gICAgLy/mjqfliLZzdW1tYXJ56ZaL6ZecICBcclxuICAgIGNvbnN0IGhhbmRsZVN1bW1hcnlPcGVuID0gKGkpID0+IHtcclxuICAgICAgICBpZihzdW1tYXJ5T3BlbiA9PT0gaSkge1xyXG4gICAgICAgICAgICBzZXRTdW1tYXJ5T3BlbignJyk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBzZXRTdW1tYXJ5T3BlbihpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5ri45qiZ56e76Iez6KGo5ZauXHJcbiAgICBjb25zdCBoYW5kbGVNb3VzZU92ZXIgPSAoaSkgPT4ge1xyXG4gICAgICAgIHNldEhvdmVyKGkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyDmuLjmqJnpm6Lplovooajllq5cclxuICAgIGNvbnN0IGhhbmRsZU1vdXNlTGVhdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0SG92ZXIoJycpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBsaXN0LFxyXG4gICAgICAgIGxpc3RMZW5ndGgsXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgbGV0IGRhdGEgPSBbXTtcclxuXHJcbiAgICBmb3IobGV0IGkgPSAxOyBpIDwgTWF0aC5jZWlsKGxpc3RMZW5ndGgvMTAwKSArIDE7IGkrKykge1xyXG4gICAgICAgIGRhdGEucHVzaChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlfT57aX08L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHsvKiDmkJzlsIvni4DmhYvlkozmkJzlsIvntZDmnpwgKi99XHJcbiAgICAgICAgICAgIHtpc1NlYXJjaGluZz9cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0YUFtb3VudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgU2VhcmNoaW5nLi4uXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj46XHJcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXRhQW1vdW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2xpc3RMZW5ndGh9IHBvc3RzIGZvdW5kXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YX1cclxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHsvKiB7ZGF0YX0gKi99XHJcblxyXG4gICAgICAgICAgICB7Lyog5pCc5bCL57WQ5p6cbGlzdCAqL31cclxuICAgICAgICAgICAge2xpc3QubWFwKChyb3csIGkpID0+IFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2l9IFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aG92ZXI9PT1pP3N0eWxlcy5saXN0QmxvY2tPbkhvdmVyOnN0eWxlcy5saXN0QmxvY2t9IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT57aGFuZGxlU3VtbWFyeU9wZW4oaSl9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyPXsoKT0+e2hhbmRsZU1vdXNlT3ZlcihpKX19XHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKT0+e2hhbmRsZU1vdXNlTGVhdmUoaSl9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57cm93LnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF1dGhvcn0gc3R5bGU9e3ttYXJnaW5Ub3A6JzEwcHgnfX0+eydCeSAnICsgcm93LmF1dGhvcl9uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzdW1tYXJ5T3BlbiA9PT0gaSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1bW1hcnlCbG9ja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zdW1tYXJ5fT57J0J5JyArIHJvdy5zdW1tYXJ5fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdDtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYm94XCI6IFwiQXBwX2JveF9fM1g4T2xcIixcblx0XCJvdXRlckJsb2NrXCI6IFwiQXBwX291dGVyQmxvY2tfXzNDcGJPXCIsXG5cdFwiYmxvY2tcIjogXCJBcHBfYmxvY2tfXzNSQzViXCIsXG5cdFwiaGVhZGVyXCI6IFwiQXBwX2hlYWRlcl9fMmdqdDhcIixcblx0XCJpbnB1dFwiOiBcIkFwcF9pbnB1dF9fMkhrMmNcIixcblx0XCJpbnB1dEJhY2tncm91bmRcIjogXCJBcHBfaW5wdXRCYWNrZ3JvdW5kX18xVzlpbVwiLFxuXHRcIm5leHRQYWdlQnV0dG9uXCI6IFwiQXBwX25leHRQYWdlQnV0dG9uX18zTWRtc1wiLFxuXHRcImRhdGFBbW91bnRcIjogXCJBcHBfZGF0YUFtb3VudF9fMWVLODlcIixcblx0XCJsaXN0QmxvY2tcIjogXCJBcHBfbGlzdEJsb2NrX18yRHdRWlwiLFxuXHRcImxpc3RCbG9ja09uSG92ZXJcIjogXCJBcHBfbGlzdEJsb2NrT25Ib3Zlcl9fVXZDNjhcIixcblx0XCJ0aXRsZVwiOiBcIkFwcF90aXRsZV9fMmNTZFZcIixcblx0XCJhdXRob3JcIjogXCJBcHBfYXV0aG9yX18yTk9kMlwiLFxuXHRcInN1bW1hcnlCbG9ja1wiOiBcIkFwcF9zdW1tYXJ5QmxvY2tfX2Qta2xuXCIsXG5cdFwic3VtbWFyeVwiOiBcIkFwcF9zdW1tYXJ5X18yUk1wSVwiLFxuXHRcInBhZ2VcIjogXCJBcHBfcGFnZV9fMmlxRkNcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEFsZ29saWEgZnJvbSAnLi4vY29tcG9uZW50L0FsZ29saWEvQWxnb2xpYSdcclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gKCkgPT57XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuXHJcbiAgICAgICAgICA8QWxnb2xpYS8+XHJcblxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcblxyXG59XHJcbiAgXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlIiwiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nXHJcbmltcG9ydCB7IHBlcnNpc3RSZWR1Y2VyIH0gZnJvbSAncmVkdXgtcGVyc2lzdCdcclxuaW1wb3J0IGNyZWF0ZVdlYlN0b3JhZ2UgZnJvbSBcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2UvY3JlYXRlV2ViU3RvcmFnZVwiO1xyXG5cclxuY29uc3QgY3JlYXRlTm9vcFN0b3JhZ2UgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGdldEl0ZW0oX2tleSkge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xyXG4gICAgfSxcclxuICAgIHNldEl0ZW0oX2tleSwgdmFsdWUpIHtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlSXRlbShfa2V5KSB7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IHN0b3JhZ2UgPVxyXG4gIHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIgPyBjcmVhdGVOb29wU3RvcmFnZSgpIDogY3JlYXRlV2ViU3RvcmFnZSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmFnZTtcclxuXHJcbmxldCBzdG9yZVxyXG5cclxuY29uc3QgZXhhbXBsZUluaXRpYWxTdGF0ZSA9IHtcclxuICBtb2RlOidkYXknLFxyXG4gIGxhbmc6J2VuJyxcclxuICBpc1NlYXJjaGluZzogZmFsc2VcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvblR5cGVzID0ge1xyXG4gIERBWTogJ0RBWScsXHJcbiAgTklHSFQ6ICdOSUdIVCcsXHJcbiAgRU46ICdFTicsXHJcbiAgWkhIQU5UOiAnWkhIQU5UJyxcclxuICBSRVNFVDogJ1JFU0VUJyxcclxuICBTVU1NQVJZT1BFTjogJ1NVTU1BUllPUEVOJyxcclxuICBTVU1NQVJZQ0xPU0U6ICdTVU1NQVJZQ0xPU0UnLFxyXG4gIFNUQVJUU0VBUkNISU5HOiAnU1RBUlRTRUFSQ0hJTkcnLFxyXG4gIEZJTklTSFNFQVJDSElORzogJ0ZJTklTSFNFQVJDSElORydcclxufVxyXG5cclxuLy8gUkVEVUNFUlNcclxuZXhwb3J0IGNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBleGFtcGxlSW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNUQVJUU0VBUkNISU5HOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzU2VhcmNoaW5nOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuRklOSVNIU0VBUkNISU5HOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzU2VhcmNoaW5nOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLkRBWTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBtb2RlOiAnZGF5J1xyXG4gICAgICB9XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLk5JR0hUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG1vZGU6ICduaWdodCdcclxuICAgICAgfVxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5FTjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsYW5nOiAnZW4nXHJcbiAgICAgIH1cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuWkhIQU5UOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxhbmc6ICd6aEhhbnQnXHJcbiAgICAgIH0gXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlJFU0VUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG1vZGU6ICdkYXknLFxyXG4gICAgICAgIGxhbmc6ICdlbidcclxuICAgICAgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcblxyXG4vLyBBQ1RJT05TXHJcbmV4cG9ydCBjb25zdCB0b1N0YXJ0U2VhcmNoaW5nID0gKCkgPT4ge1xyXG4gIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLlNUQVJUU0VBUkNISU5HIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHRvRmluaXNoU2VhcmNoaW5nID0gKCkgPT4ge1xyXG4gIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkZJTklTSFNFQVJDSElORyB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0b0RheSA9ICgpID0+IHtcclxuICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5EQVkgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdG9OaWdodCA9ICgpID0+IHtcclxuICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5OSUdIVCB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0b0VuID0gKCkgPT4ge1xyXG4gIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkVOIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHRvWmhIYW50ID0gKCkgPT4ge1xyXG4gIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLlpISEFOVCB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZXNldENvdW50ID0gKCkgPT4ge1xyXG4gIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLlJFU0VUIH1cclxufVxyXG5cclxuY29uc3QgcGVyc2lzdENvbmZpZyA9IHtcclxuICBrZXk6ICdwcmltYXJ5JyxcclxuICBzdG9yYWdlLFxyXG4gIHdoaXRlbGlzdDogWydtb2RlJywgJ2xhbmcnXSwgLy8gcGxhY2UgdG8gc2VsZWN0IHdoaWNoIHN0YXRlIHlvdSB3YW50IHRvIHBlcnNpc3RcclxufVxyXG5cclxuY29uc3QgcGVyc2lzdGVkUmVkdWNlciA9IHBlcnNpc3RSZWR1Y2VyKHBlcnNpc3RDb25maWcsIHJlZHVjZXIpXHJcblxyXG5mdW5jdGlvbiBtYWtlU3RvcmUoaW5pdGlhbFN0YXRlID0gZXhhbXBsZUluaXRpYWxTdGF0ZSkge1xyXG4gIHJldHVybiBjcmVhdGVTdG9yZShcclxuICAgIHBlcnNpc3RlZFJlZHVjZXIsXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSgpKVxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVTdG9yZSA9IChwcmVsb2FkZWRTdGF0ZSkgPT4ge1xyXG4gIGxldCBfc3RvcmUgPSBzdG9yZSA/PyBtYWtlU3RvcmUocHJlbG9hZGVkU3RhdGUpXHJcblxyXG4gIC8vIEFmdGVyIG5hdmlnYXRpbmcgdG8gYSBwYWdlIHdpdGggYW4gaW5pdGlhbCBSZWR1eCBzdGF0ZSwgbWVyZ2UgdGhhdCBzdGF0ZVxyXG4gIC8vIHdpdGggdGhlIGN1cnJlbnQgc3RhdGUgaW4gdGhlIHN0b3JlLCBhbmQgY3JlYXRlIGEgbmV3IHN0b3JlXHJcbiAgaWYgKHByZWxvYWRlZFN0YXRlICYmIHN0b3JlKSB7XHJcbiAgICBfc3RvcmUgPSBtYWtlU3RvcmUoe1xyXG4gICAgICAuLi5zdG9yZS5nZXRTdGF0ZSgpLFxyXG4gICAgICAuLi5wcmVsb2FkZWRTdGF0ZSxcclxuICAgIH0pXHJcbiAgICAvLyBSZXNldCB0aGUgY3VycmVudCBzdG9yZVxyXG4gICAgc3RvcmUgPSB1bmRlZmluZWRcclxuICB9XHJcblxyXG4gIC8vIEZvciBTU0cgYW5kIFNTUiBhbHdheXMgY3JlYXRlIGEgbmV3IHN0b3JlXHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gX3N0b3JlXHJcbiAgLy8gQ3JlYXRlIHRoZSBzdG9yZSBvbmNlIGluIHRoZSBjbGllbnRcclxuICBpZiAoIXN0b3JlKSBzdG9yZSA9IF9zdG9yZVxyXG5cclxuICByZXR1cm4gX3N0b3JlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VTdG9yZShpbml0aWFsU3RhdGUpIHtcclxuICBjb25zdCBzdG9yZSA9IHVzZU1lbW8oKCkgPT4gaW5pdGlhbGl6ZVN0b3JlKGluaXRpYWxTdGF0ZSksIFtpbml0aWFsU3RhdGVdKVxyXG4gIHJldHVybiBzdG9yZVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFsZ29saWFzZWFyY2gvbGl0ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZS9jcmVhdGVXZWJTdG9yYWdlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=