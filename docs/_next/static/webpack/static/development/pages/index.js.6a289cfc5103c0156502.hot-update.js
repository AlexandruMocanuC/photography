webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/View/PageView/index.js":
/*!*******************************************!*\
  !*** ./components/View/PageView/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/Header */ "./components/Header/index.js");
/* harmony import */ var _components_Gradient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/Gradient */ "./components/Gradient/index.js");
/* harmony import */ var _views_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/views/contact */ "./views/contact/index.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./components/View/PageView/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/elena/projects/amc/components/View/PageView/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var data = _ref.data,
      view = _ref.view,
      constants = _ref.constants,
      colors = _ref.colors;
  return __jsx("b", {
    className: _style_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    heading: data.heading,
    description: data.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), view == "home" ? colors.gradients.map(function (gradient, key) {
    return __jsx(_components_Gradient__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: key,
      first: colors.palette[gradient.first],
      last: colors.palette[gradient.last],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx("b", {
      style: {
        color: colors.palette[gradient.text],
        fontSize: "2rem",
        fontWeight: "bold"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "testing"));
  }) : view == "contact" ? __jsx(_views_contact__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: data,
    email: constants.email,
    phone: constants.phone,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }) : __jsx("b", {
    className: _style_css__WEBPACK_IMPORTED_MODULE_4___default.a.gallery,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "page not found"));
});

/***/ })

})
//# sourceMappingURL=index.js.6a289cfc5103c0156502.hot-update.js.map