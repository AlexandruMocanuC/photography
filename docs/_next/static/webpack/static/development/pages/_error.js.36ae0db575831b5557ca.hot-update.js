webpackHotUpdate("static/development/pages/_error.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: State, Dispatch, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dispatch", function() { return Dispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Application; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/reducer.js */ "./reducer.js");
/* harmony import */ var _playground_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/playground.js */ "./playground.js");
/* harmony import */ var _views_home_MobileApp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/views/home/MobileApp */ "./views/home/MobileApp/index.js");
/* harmony import */ var _views_home_App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/views/home/App */ "./views/home/App/index.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.css */ "./pages/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/elena/projects/amc/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var State = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);
var Dispatch = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);
function Application() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      data = _useState[0],
      setData = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    fetch("".concat(_playground_js__WEBPACK_IMPORTED_MODULE_5__["BASE"], "/data.json"), {}).then(function (reply) {
      reply.json().then(function (selected) {
        setData(selected);
      });
    })["catch"](function (reply) {
      console.log("HTTP Error", reply);
    });
  }, [Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])().asPath]);
  return !data ? null : __jsx("b", {
    className: _style_css__WEBPACK_IMPORTED_MODULE_8___default.a.application,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Montserrat:300,500,700|Lato:400",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })), __jsx(Home, {
    data: data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }));
}

var Home = function Home(_ref) {
  var _ref$data = _ref.data,
      data = _ref$data === void 0 ? {} : _ref$data;
  console.log(Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])());
  var initialState = {
    logo: data.logo,
    nav: data.menu,
    view: Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])().query.view.slice(1) || "home",
    isMenuOpened: false,
    constants: data.constants,
    colors: data.constants.colors[getRandomInt(data.constants.colors.length)]
  };

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_reducer_js__WEBPACK_IMPORTED_MODULE_4__["default"], initialState),
      state = _useReducer[0],
      dispatch = _useReducer[1]; // useEffect(() => {
  // 	const handleRouteChange = url => {
  // 		dispatch({
  // 			type: "selectView",
  // 			view: url.slice(url.indexOf(BASE) + BASE.length + 1) || "home",
  // 		});
  // 	};
  // 	Router.events.on("routeChangeStart", handleRouteChange);
  // 	return () => {
  // 		Router.events.off("routeChangeStart", handleRouteChange);
  // 	};
  // }, []);


  return __jsx(Dispatch.Provider, {
    value: dispatch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(State.Provider, {
    value: state,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react_device_detect__WEBPACK_IMPORTED_MODULE_1__["isMobile"] ? __jsx(_views_home_MobileApp__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: data,
    isMenuOpened: state.isMenuOpened,
    colors: state.colors,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }) : __jsx(_views_home_App__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: data,
    isMenuOpened: state.isMenuOpened,
    colors: state.colors,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  })));
};

/***/ })

})
//# sourceMappingURL=_error.js.36ae0db575831b5557ca.hot-update.js.map