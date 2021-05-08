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






const client = algoliasearch_lite__WEBPACK_IMPORTED_MODULE_4___default()('XIMRNVJLQ7', 'c73127fdd3af113650bd9b88eec377b5');
const index = client.initIndex('Community_articles_staging');

const Algolia = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  const [inputValue, setInputValue] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('');
  const [list, setList] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]);
  const [listLength, setListLength] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0);

  const handleChange = e => {
    setInputValue(e.target.value);
    dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_6__["toStartSearching"])());

    if (e.target.value) {
      index.search(e.target.value, {
        // page:1,
        hitsPerPage: 1000
      }).then(({
        hits
      }) => {
        console.log(hits, 888);
        setList(hits);
        setListLength(hits.length);
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
              lineNumber: 58,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
            inputValue: inputValue,
            listLength: listLength,
            list: list
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 50,
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
    listLength
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: [isSearching ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dataAmount,
      children: "Searching..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dataAmount,
      children: [listLength, " posts found"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
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
        lineNumber: 64,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.author,
        style: {
          marginTop: '10px'
        },
        children: 'By ' + row.author_name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 21
      }, undefined), summaryOpen === i && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.summaryBlock,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: _css_App_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.summary,
          children: 'By' + row.summary
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 29
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 25
      }, undefined)]
    }, i, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
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
	"dataAmount": "App_dataAmount__1eK89",
	"listBlock": "App_listBlock__2DwQZ",
	"listBlockOnHover": "App_listBlockOnHover__UvC68",
	"title": "App_title__2cSdV",
	"author": "App_author__2NOd2",
	"summaryBlock": "App_summaryBlock__d-kln",
	"summary": "App_summary__2RMpI"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L0FsZ29saWEvQWxnb2xpYS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvQWxnb2xpYS9MaXN0LmpzIiwid2VicGFjazovLy8uL2Nzcy9BcHAubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbGdvbGlhc2VhcmNoL2xpdGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZS9jcmVhdGVXZWJTdG9yYWdlXCIiXSwibmFtZXMiOlsiY2xpZW50IiwiYWxnb2xpYXNlYXJjaCIsImluZGV4IiwiaW5pdEluZGV4IiwiQWxnb2xpYSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJsaXN0Iiwic2V0TGlzdCIsImxpc3RMZW5ndGgiLCJzZXRMaXN0TGVuZ3RoIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwidG9TdGFydFNlYXJjaGluZyIsInNlYXJjaCIsImhpdHNQZXJQYWdlIiwidGhlbiIsImhpdHMiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwidG9GaW5pc2hTZWFyY2hpbmciLCJjYXRjaCIsImVyciIsInN0eWxlcyIsImJveCIsIm91dGVyQmxvY2siLCJibG9jayIsInBhZGRpbmdCb3R0b20iLCJpbnB1dEJhY2tncm91bmQiLCJpbnB1dCIsIkxpc3QiLCJwcm9wcyIsInN1bW1hcnlPcGVuIiwic2V0U3VtbWFyeU9wZW4iLCJob3ZlciIsInNldEhvdmVyIiwiaXNTZWFyY2hpbmciLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlRWZmZWN0IiwiaGFuZGxlU3VtbWFyeU9wZW4iLCJpIiwiaGFuZGxlTW91c2VPdmVyIiwiaGFuZGxlTW91c2VMZWF2ZSIsImRhdGFBbW91bnQiLCJtYXAiLCJyb3ciLCJsaXN0QmxvY2tPbkhvdmVyIiwibGlzdEJsb2NrIiwidGl0bGUiLCJhdXRob3IiLCJtYXJnaW5Ub3AiLCJhdXRob3JfbmFtZSIsInN1bW1hcnlCbG9jayIsInN1bW1hcnkiLCJIb21lUGFnZSIsImNyZWF0ZU5vb3BTdG9yYWdlIiwiZ2V0SXRlbSIsIl9rZXkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwic3RvcmFnZSIsImNyZWF0ZVdlYlN0b3JhZ2UiLCJzdG9yZSIsImV4YW1wbGVJbml0aWFsU3RhdGUiLCJtb2RlIiwibGFuZyIsImFjdGlvblR5cGVzIiwiREFZIiwiTklHSFQiLCJFTiIsIlpISEFOVCIsIlJFU0VUIiwiU1VNTUFSWU9QRU4iLCJTVU1NQVJZQ0xPU0UiLCJTVEFSVFNFQVJDSElORyIsIkZJTklTSFNFQVJDSElORyIsInJlZHVjZXIiLCJhY3Rpb24iLCJ0eXBlIiwidG9EYXkiLCJ0b05pZ2h0IiwidG9FbiIsInRvWmhIYW50IiwicmVzZXRDb3VudCIsInBlcnNpc3RDb25maWciLCJrZXkiLCJ3aGl0ZWxpc3QiLCJwZXJzaXN0ZWRSZWR1Y2VyIiwicGVyc2lzdFJlZHVjZXIiLCJtYWtlU3RvcmUiLCJpbml0aWFsU3RhdGUiLCJjcmVhdGVTdG9yZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJpbml0aWFsaXplU3RvcmUiLCJwcmVsb2FkZWRTdGF0ZSIsIl9zdG9yZSIsImdldFN0YXRlIiwidW5kZWZpbmVkIiwidXNlU3RvcmUiLCJ1c2VNZW1vIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLE1BQU0sR0FBR0MseURBQWEsQ0FDeEIsWUFEd0IsRUFFeEIsa0NBRndCLENBQTVCO0FBS0EsTUFBTUMsS0FBSyxHQUFHRixNQUFNLENBQUNHLFNBQVAsQ0FBaUIsNEJBQWpCLENBQWQ7O0FBRUEsTUFBTUMsT0FBTyxHQUFHLE1BQU07QUFFbEIsUUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLFFBQU0sQ0FBRUMsVUFBRixFQUFjQyxhQUFkLElBQWdDQyw0Q0FBSyxDQUFDQyxR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Q0EsWUFBbUMsT0FBT0YsTUFBUCxDQWZjLENBZ0JqRDs7QUFDQSxNQUFJLENBQUNsQyxLQUFMLEVBQVlBLEtBQUssR0FBR2tDLE1BQVI7QUFFWixTQUFPQSxNQUFQO0FBQ0QsQ0FwQk07QUFzQkEsU0FBU0csUUFBVCxDQUFrQlQsWUFBbEIsRUFBZ0M7QUFDckMsUUFBTTVCLEtBQUssR0FBR3NDLHFEQUFPLENBQUMsTUFBTU4sZUFBZSxDQUFDSixZQUFELENBQXRCLEVBQXNDLENBQUNBLFlBQUQsQ0FBdEMsQ0FBckI7QUFDQSxTQUFPNUIsS0FBUDtBQUNELEM7Ozs7Ozs7Ozs7O0FDL0pELCtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLHVFIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vY3NzL0FwcC5tb2R1bGUuY3NzJztcclxuaW1wb3J0IExpc3QgZnJvbSAnLi9MaXN0JztcclxuaW1wb3J0IGFsZ29saWFzZWFyY2ggZnJvbSAnYWxnb2xpYXNlYXJjaC9saXRlJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHRvU3RhcnRTZWFyY2hpbmcsIHRvRmluaXNoU2VhcmNoaW5nIH0gZnJvbSAnLi4vLi4vc3RvcmUnO1xyXG5cclxuY29uc3QgY2xpZW50ID0gYWxnb2xpYXNlYXJjaChcclxuICAgICdYSU1STlZKTFE3JyxcclxuICAgICdjNzMxMjdmZGQzYWYxMTM2NTBiZDliODhlZWMzNzdiNSdcclxuKTtcclxuXHJcbmNvbnN0IGluZGV4ID0gY2xpZW50LmluaXRJbmRleCgnQ29tbXVuaXR5X2FydGljbGVzX3N0YWdpbmcnKTtcclxuXHJcbmNvbnN0IEFsZ29saWEgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgICBjb25zdCBbIGlucHV0VmFsdWUsIHNldElucHV0VmFsdWUgXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFsgbGlzdCAsIHNldExpc3QgXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFsgbGlzdExlbmd0aCAsIHNldExpc3RMZW5ndGggXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcblxyXG4gICAgICAgIHNldElucHV0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIGRpc3BhdGNoKHRvU3RhcnRTZWFyY2hpbmcoKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoZS50YXJnZXQudmFsdWUpe1xyXG4gICAgICAgICAgICBpbmRleFxyXG4gICAgICAgICAgICAuc2VhcmNoKGUudGFyZ2V0LnZhbHVlLCB7XHJcbiAgICAgICAgICAgICAgICAvLyBwYWdlOjEsXHJcbiAgICAgICAgICAgICAgICBoaXRzUGVyUGFnZTogMTAwMFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoeyBoaXRzIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGhpdHMsIDg4OCk7XHJcbiAgICAgICAgICAgICAgICBzZXRMaXN0KGhpdHMpO1xyXG4gICAgICAgICAgICAgICAgc2V0TGlzdExlbmd0aChoaXRzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh0b0ZpbmlzaFNlYXJjaGluZygpKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh0b0ZpbmlzaFNlYXJjaGluZygpKTtcclxuICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgc2V0TGlzdChbXSk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHRvRmluaXNoU2VhcmNoaW5nKCkpO1xyXG4gICAgICAgICAgICBzZXRMaXN0TGVuZ3RoKDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJveH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3V0ZXJCbG9ja30+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ibG9ja30gc3R5bGU9e3twYWRkaW5nQm90dG9tOic1cHgnfX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRCYWNrZ3JvdW5kfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlPXtpbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0TGVuZ3RoPXtsaXN0TGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0PXtsaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWxnb2xpYSIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vY3NzL0FwcC5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5jb25zdCBMaXN0ID0gKHByb3BzKSA9PiB7ICAgIFxyXG5cclxuICAgIGNvbnN0IFsgc3VtbWFyeU9wZW4gLCBzZXRTdW1tYXJ5T3BlbiBdID0gUmVhY3QudXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgWyBob3ZlciAsIHNldEhvdmVyIF0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3QgaXNTZWFyY2hpbmcgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmlzU2VhcmNoaW5nKTtcclxuXHJcbiAgICAvLyDmkJzlsIvmm7TmlrDmmYLmuIXnqbpzdW1tYXJ56ZaL6ZecXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBzZXRTdW1tYXJ5T3BlbignJyk7XHJcbiAgICAgIH0sW2lzU2VhcmNoaW5nXSlcclxuXHJcbiAgICAvL+aOp+WItnN1bW1hcnnplovpl5wgIFxyXG4gICAgY29uc3QgaGFuZGxlU3VtbWFyeU9wZW4gPSAoaSkgPT4ge1xyXG4gICAgICAgIGlmKHN1bW1hcnlPcGVuID09PSBpKSB7XHJcbiAgICAgICAgICAgIHNldFN1bW1hcnlPcGVuKCcnKTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFN1bW1hcnlPcGVuKGkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDmuLjmqJnnp7voh7Pooajllq5cclxuICAgIGNvbnN0IGhhbmRsZU1vdXNlT3ZlciA9IChpKSA9PiB7XHJcbiAgICAgICAgc2V0SG92ZXIoaSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIOa4uOaomemboumWi+ihqOWWrlxyXG4gICAgY29uc3QgaGFuZGxlTW91c2VMZWF2ZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRIb3ZlcignJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGxpc3QsXHJcbiAgICAgICAgbGlzdExlbmd0aFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7Lyog5pCc5bCL54uA5oWL5ZKM5pCc5bCL57WQ5p6cICovfVxyXG4gICAgICAgICAgICB7aXNTZWFyY2hpbmc/XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGFBbW91bnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIFNlYXJjaGluZy4uLlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+OlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXRhQW1vdW50fT5cclxuICAgICAgICAgICAgICAgICAgICB7bGlzdExlbmd0aH0gcG9zdHMgZm91bmRcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB7Lyog5pCc5bCL57WQ5p6cbGlzdCAqL31cclxuICAgICAgICAgICAge2xpc3QubWFwKChyb3csIGkpID0+IFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2l9IFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aG92ZXI9PT1pP3N0eWxlcy5saXN0QmxvY2tPbkhvdmVyOnN0eWxlcy5saXN0QmxvY2t9IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT57aGFuZGxlU3VtbWFyeU9wZW4oaSl9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyPXsoKT0+e2hhbmRsZU1vdXNlT3ZlcihpKX19XHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKT0+e2hhbmRsZU1vdXNlTGVhdmUoaSl9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57cm93LnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF1dGhvcn0gc3R5bGU9e3ttYXJnaW5Ub3A6JzEwcHgnfX0+eydCeSAnICsgcm93LmF1dGhvcl9uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzdW1tYXJ5T3BlbiA9PT0gaSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1bW1hcnlCbG9ja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zdW1tYXJ5fT57J0J5JyArIHJvdy5zdW1tYXJ5fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdDtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYm94XCI6IFwiQXBwX2JveF9fM1g4T2xcIixcblx0XCJvdXRlckJsb2NrXCI6IFwiQXBwX291dGVyQmxvY2tfXzNDcGJPXCIsXG5cdFwiYmxvY2tcIjogXCJBcHBfYmxvY2tfXzNSQzViXCIsXG5cdFwiaGVhZGVyXCI6IFwiQXBwX2hlYWRlcl9fMmdqdDhcIixcblx0XCJpbnB1dFwiOiBcIkFwcF9pbnB1dF9fMkhrMmNcIixcblx0XCJpbnB1dEJhY2tncm91bmRcIjogXCJBcHBfaW5wdXRCYWNrZ3JvdW5kX18xVzlpbVwiLFxuXHRcImRhdGFBbW91bnRcIjogXCJBcHBfZGF0YUFtb3VudF9fMWVLODlcIixcblx0XCJsaXN0QmxvY2tcIjogXCJBcHBfbGlzdEJsb2NrX18yRHdRWlwiLFxuXHRcImxpc3RCbG9ja09uSG92ZXJcIjogXCJBcHBfbGlzdEJsb2NrT25Ib3Zlcl9fVXZDNjhcIixcblx0XCJ0aXRsZVwiOiBcIkFwcF90aXRsZV9fMmNTZFZcIixcblx0XCJhdXRob3JcIjogXCJBcHBfYXV0aG9yX18yTk9kMlwiLFxuXHRcInN1bW1hcnlCbG9ja1wiOiBcIkFwcF9zdW1tYXJ5QmxvY2tfX2Qta2xuXCIsXG5cdFwic3VtbWFyeVwiOiBcIkFwcF9zdW1tYXJ5X18yUk1wSVwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQWxnb2xpYSBmcm9tICcuLi9jb21wb25lbnQvQWxnb2xpYS9BbGdvbGlhJ1xyXG5cclxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PntcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG5cclxuICAgICAgICAgIDxBbGdvbGlhLz5cclxuXHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxuXHJcbn1cclxuICBcclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2UiLCJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbidcclxuaW1wb3J0IHsgcGVyc2lzdFJlZHVjZXIgfSBmcm9tICdyZWR1eC1wZXJzaXN0J1xyXG5pbXBvcnQgY3JlYXRlV2ViU3RvcmFnZSBmcm9tIFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZS9jcmVhdGVXZWJTdG9yYWdlXCI7XHJcblxyXG5jb25zdCBjcmVhdGVOb29wU3RvcmFnZSA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgZ2V0SXRlbShfa2V5KSB7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XHJcbiAgICB9LFxyXG4gICAgc2V0SXRlbShfa2V5LCB2YWx1ZSkge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmVJdGVtKF9rZXkpIHtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3Qgc3RvcmFnZSA9XHJcbiAgdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIiA/IGNyZWF0ZU5vb3BTdG9yYWdlKCkgOiBjcmVhdGVXZWJTdG9yYWdlKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yYWdlO1xyXG5cclxubGV0IHN0b3JlXHJcblxyXG5jb25zdCBleGFtcGxlSW5pdGlhbFN0YXRlID0ge1xyXG4gIG1vZGU6J2RheScsXHJcbiAgbGFuZzonZW4nLFxyXG4gIGlzU2VhcmNoaW5nOiBmYWxzZVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uVHlwZXMgPSB7XHJcbiAgREFZOiAnREFZJyxcclxuICBOSUdIVDogJ05JR0hUJyxcclxuICBFTjogJ0VOJyxcclxuICBaSEhBTlQ6ICdaSEhBTlQnLFxyXG4gIFJFU0VUOiAnUkVTRVQnLFxyXG4gIFNVTU1BUllPUEVOOiAnU1VNTUFSWU9QRU4nLFxyXG4gIFNVTU1BUllDTE9TRTogJ1NVTU1BUllDTE9TRScsXHJcbiAgU1RBUlRTRUFSQ0hJTkc6ICdTVEFSVFNFQVJDSElORycsXHJcbiAgRklOSVNIU0VBUkNISU5HOiAnRklOSVNIU0VBUkNISU5HJ1xyXG59XHJcblxyXG4vLyBSRURVQ0VSU1xyXG5leHBvcnQgY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGV4YW1wbGVJbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU1RBUlRTRUFSQ0hJTkc6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNTZWFyY2hpbmc6IHRydWVcclxuICAgICAgfVxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5GSU5JU0hTRUFSQ0hJTkc6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNTZWFyY2hpbmc6IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuREFZOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG1vZGU6ICdkYXknXHJcbiAgICAgIH1cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuTklHSFQ6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbW9kZTogJ25pZ2h0J1xyXG4gICAgICB9XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLkVOOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxhbmc6ICdlbidcclxuICAgICAgfVxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5aSEhBTlQ6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbGFuZzogJ3poSGFudCdcclxuICAgICAgfSBcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuUkVTRVQ6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbW9kZTogJ2RheScsXHJcbiAgICAgICAgbGFuZzogJ2VuJ1xyXG4gICAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuXHJcbi8vIEFDVElPTlNcclxuZXhwb3J0IGNvbnN0IHRvU3RhcnRTZWFyY2hpbmcgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuU1RBUlRTRUFSQ0hJTkcgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdG9GaW5pc2hTZWFyY2hpbmcgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuRklOSVNIU0VBUkNISU5HIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHRvRGF5ID0gKCkgPT4ge1xyXG4gIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkRBWSB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0b05pZ2h0ID0gKCkgPT4ge1xyXG4gIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLk5JR0hUIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHRvRW4gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuRU4gfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdG9aaEhhbnQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuWkhIQU5UIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlc2V0Q291bnQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuUkVTRVQgfVxyXG59XHJcblxyXG5jb25zdCBwZXJzaXN0Q29uZmlnID0ge1xyXG4gIGtleTogJ3ByaW1hcnknLFxyXG4gIHN0b3JhZ2UsXHJcbiAgd2hpdGVsaXN0OiBbJ21vZGUnLCAnbGFuZyddLCAvLyBwbGFjZSB0byBzZWxlY3Qgd2hpY2ggc3RhdGUgeW91IHdhbnQgdG8gcGVyc2lzdFxyXG59XHJcblxyXG5jb25zdCBwZXJzaXN0ZWRSZWR1Y2VyID0gcGVyc2lzdFJlZHVjZXIocGVyc2lzdENvbmZpZywgcmVkdWNlcilcclxuXHJcbmZ1bmN0aW9uIG1ha2VTdG9yZShpbml0aWFsU3RhdGUgPSBleGFtcGxlSW5pdGlhbFN0YXRlKSB7XHJcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxyXG4gICAgcGVyc2lzdGVkUmVkdWNlcixcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKCkpXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZVN0b3JlID0gKHByZWxvYWRlZFN0YXRlKSA9PiB7XHJcbiAgbGV0IF9zdG9yZSA9IHN0b3JlID8/IG1ha2VTdG9yZShwcmVsb2FkZWRTdGF0ZSlcclxuXHJcbiAgLy8gQWZ0ZXIgbmF2aWdhdGluZyB0byBhIHBhZ2Ugd2l0aCBhbiBpbml0aWFsIFJlZHV4IHN0YXRlLCBtZXJnZSB0aGF0IHN0YXRlXHJcbiAgLy8gd2l0aCB0aGUgY3VycmVudCBzdGF0ZSBpbiB0aGUgc3RvcmUsIGFuZCBjcmVhdGUgYSBuZXcgc3RvcmVcclxuICBpZiAocHJlbG9hZGVkU3RhdGUgJiYgc3RvcmUpIHtcclxuICAgIF9zdG9yZSA9IG1ha2VTdG9yZSh7XHJcbiAgICAgIC4uLnN0b3JlLmdldFN0YXRlKCksXHJcbiAgICAgIC4uLnByZWxvYWRlZFN0YXRlLFxyXG4gICAgfSlcclxuICAgIC8vIFJlc2V0IHRoZSBjdXJyZW50IHN0b3JlXHJcbiAgICBzdG9yZSA9IHVuZGVmaW5lZFxyXG4gIH1cclxuXHJcbiAgLy8gRm9yIFNTRyBhbmQgU1NSIGFsd2F5cyBjcmVhdGUgYSBuZXcgc3RvcmVcclxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBfc3RvcmVcclxuICAvLyBDcmVhdGUgdGhlIHN0b3JlIG9uY2UgaW4gdGhlIGNsaWVudFxyXG4gIGlmICghc3RvcmUpIHN0b3JlID0gX3N0b3JlXHJcblxyXG4gIHJldHVybiBfc3RvcmVcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0b3JlKGluaXRpYWxTdGF0ZSkge1xyXG4gIGNvbnN0IHN0b3JlID0gdXNlTWVtbygoKSA9PiBpbml0aWFsaXplU3RvcmUoaW5pdGlhbFN0YXRlKSwgW2luaXRpYWxTdGF0ZV0pXHJcbiAgcmV0dXJuIHN0b3JlXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYWxnb2xpYXNlYXJjaC9saXRlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlL2NyZWF0ZVdlYlN0b3JhZ2VcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==