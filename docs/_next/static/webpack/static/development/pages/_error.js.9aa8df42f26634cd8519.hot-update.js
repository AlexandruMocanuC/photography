webpackHotUpdate("static/development/pages/_error.js",{

/***/ "./components/Menu/MenuItem/index.js":
/*!*******************************************!*\
  !*** ./components/Menu/MenuItem/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./components/Menu/MenuItem/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/elena/projects/amc/components/Menu/MenuItem/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var isSubItem = _ref.isSubItem,
      view = _ref.view,
      isSelected = _ref.isSelected,
      _ref$onSelect = _ref.onSelect,
      onSelect = _ref$onSelect === void 0 ? function () {} : _ref$onSelect;
  return __jsx("b", {
    className: "".concat(_style_css__WEBPACK_IMPORTED_MODULE_3___default.a.item, " ").concat(isSelected ? _style_css__WEBPACK_IMPORTED_MODULE_3___default.a.is_selected : "", " ").concat(isSubItem ? _style_css__WEBPACK_IMPORTED_MODULE_3___default.a.sub_menu : ""),
    onClick: function onClick() {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/", "/".concat(view == "home" ? "" : view));
      onSelect(view);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, view);
});

/***/ })

})
//# sourceMappingURL=_error.js.9aa8df42f26634cd8519.hot-update.js.map