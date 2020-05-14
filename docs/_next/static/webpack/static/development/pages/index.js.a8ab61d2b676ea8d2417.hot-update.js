webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Menu/MenuItem/index.js":
/*!*******************************************!*\
  !*** ./components/Menu/MenuItem/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _playground_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/playground.js */ \"./playground.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./components/Menu/MenuItem/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/elena/projects/photography/components/Menu/MenuItem/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function (_ref) {\n  _s();\n\n  var isSubItem = _ref.isSubItem,\n      view = _ref.view,\n      isSelected = _ref.isSelected;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])(); // console.log(router);\n\n  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/\".concat(view == \"home\" ? \"\" : view),\n    as: \"/\".concat(_playground_js__WEBPACK_IMPORTED_MODULE_3__[\"BASE\"], \"/\").concat(view == \"home\" ? \"\" : view),\n    shallow: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 3\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 4\n    }\n  }, __jsx(\"b\", {\n    className: \"\".concat(_style_css__WEBPACK_IMPORTED_MODULE_4___default.a.item, \" \").concat(isSelected ? _style_css__WEBPACK_IMPORTED_MODULE_4___default.a.is_selected : \"\", \" \").concat(isSubItem ? _style_css__WEBPACK_IMPORTED_MODULE_4___default.a.sub_menu : \"\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  }, view)));\n}, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n}));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01lbnUvTWVudUl0ZW0vaW5kZXguanM/N2Y3MSJdLCJuYW1lcyI6WyJpc1N1Ykl0ZW0iLCJ2aWV3IiwiaXNTZWxlY3RlZCIsInJvdXRlciIsInVzZVJvdXRlciIsIkJBU0UiLCIkIiwiaXRlbSIsImlzX3NlbGVjdGVkIiwic3ViX21lbnUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxrRkFBcUM7QUFBQTs7QUFBQSxNQUFsQ0EsU0FBa0MsUUFBbENBLFNBQWtDO0FBQUEsTUFBdkJDLElBQXVCLFFBQXZCQSxJQUF1QjtBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7QUFDbkQsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QixDQURtRCxDQUVuRDs7QUFDQSxTQUNDLE1BQUMsZ0RBQUQ7QUFDQyxRQUFJLGFBQU1ILElBQUksSUFBSSxNQUFSLEdBQWlCLEVBQWpCLEdBQXNCQSxJQUE1QixDQURMO0FBRUMsTUFBRSxhQUFNSSxtREFBTixjQUFjSixJQUFJLElBQUksTUFBUixHQUFpQixFQUFqQixHQUFzQkEsSUFBcEMsQ0FGSDtBQUdDLFdBQU8sTUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQ0MsYUFBUyxZQUFLSyxpREFBQyxDQUFDQyxJQUFQLGNBQWVMLFVBQVUsR0FBR0ksaURBQUMsQ0FBQ0UsV0FBTCxHQUFtQixFQUE1QyxjQUNSUixTQUFTLEdBQUdNLGlEQUFDLENBQUNHLFFBQUwsR0FBZ0IsRUFEakIsQ0FEVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0VSLElBTEYsQ0FERCxDQUxELENBREQ7QUFpQkEsQ0FwQkQ7QUFBQSxVQUNnQkcscURBRGhCO0FBQUEiLCJmaWxlIjoiLi9jb21wb25lbnRzL01lbnUvTWVudUl0ZW0vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgQkFTRSB9IGZyb20gXCJ+L3BsYXlncm91bmQuanNcIjtcbmltcG9ydCAkLCB7IGNzcyB9IGZyb20gXCIuL3N0eWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBpc1N1Ykl0ZW0sIHZpZXcsIGlzU2VsZWN0ZWQgfSkgPT4ge1xuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblx0Ly8gY29uc29sZS5sb2cocm91dGVyKTtcblx0cmV0dXJuIChcblx0XHQ8TGlua1xuXHRcdFx0aHJlZj17YC8ke3ZpZXcgPT0gXCJob21lXCIgPyBcIlwiIDogdmlld31gfVxuXHRcdFx0YXM9e2AvJHtCQVNFfS8ke3ZpZXcgPT0gXCJob21lXCIgPyBcIlwiIDogdmlld31gfVxuXHRcdFx0c2hhbGxvd1xuXHRcdD5cblx0XHRcdDxhPlxuXHRcdFx0XHQ8YlxuXHRcdFx0XHRcdGNsYXNzTmFtZT17YCR7JC5pdGVtfSAke2lzU2VsZWN0ZWQgPyAkLmlzX3NlbGVjdGVkIDogXCJcIn0gJHtcblx0XHRcdFx0XHRcdGlzU3ViSXRlbSA/ICQuc3ViX21lbnUgOiBcIlwiXG5cdFx0XHRcdFx0fWB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7dmlld31cblx0XHRcdFx0PC9iPlxuXHRcdFx0PC9hPlxuXHRcdDwvTGluaz5cblx0KTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Menu/MenuItem/index.js\n");

/***/ })

})