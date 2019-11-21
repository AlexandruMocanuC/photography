webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Gradient/index.js":
false,

/***/ "./components/Header/index.js":
false,

/***/ "./components/Logo/index.js":
false,

/***/ "./components/Menu/MenuItem/index.js":
false,

/***/ "./components/Menu/index.js":
false,

/***/ "./components/View/PageView/index.js":
false,

/***/ "./components/View/index.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
false,

/***/ "./node_modules/react-spring/node_modules/@babel/runtime/helpers/esm/extends.js":
false,

/***/ "./node_modules/react-spring/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
false,

/***/ "./node_modules/react-spring/web.js":
false,

/***/ "./pages/home/App/index.js":
false,

/***/ "./pages/home/MobileApp/index.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/reducer.js */ "./reducer.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./pages/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/elena/projects/amc/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      data = _useState[0],
      setData = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    fetch("data.json", {}).then(function (reply) {
      reply.json().then(function (selected) {
        setData(selected);
      });
    })["catch"](function (reply) {
      console.log("HTTP Error", reply);
    });
  }, []);
  return !data ? null : __jsx("b", {
    className: _style_css__WEBPACK_IMPORTED_MODULE_4___default.a.application,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Montserrat:300,500,700|Lato:400",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), __jsx(Home, {
    data: data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.0100a59aaa7c600a1d31.hot-update.js.map