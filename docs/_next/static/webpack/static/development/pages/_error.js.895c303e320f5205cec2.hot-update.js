webpackHotUpdate("static/development/pages/_error.js",{

/***/ "./components/DefaultContext/App/index.js":
/*!************************************************!*\
  !*** ./components/DefaultContext/App/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/View */ \"./components/View/index.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./components/DefaultContext/App/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/elena/projects/photography/components/DefaultContext/App/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (props) {\n  var isMenuOpened = props.isMenuOpened,\n      colors = props.colors,\n      staticBackground = props.staticBackground;\n  var order = [\"primary\", \"secondary\", \"accent\", \"neutral\", \"complementary\"];\n  var colorsVar = colors.palette.map(function (color, index) {\n    console.log(\"--data_color_\".concat(order[index], \": \").concat(color, \";\"));\n    return \"--data_color_\".concat(order[index], \": \").concat(color, \";\");\n  });\n  console.log(colorsVar);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"style\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 4\n    }\n  }, \".\".concat(_style_css__WEBPACK_IMPORTED_MODULE_2___default.a.application, \" {\\n\\t\\t\\t\\t\").concat(colorsVar.filter(function (color) {\n    return color;\n  }), \"\\n\\t\\t\\t}\")), __jsx(\"b\", {\n    className: \"\".concat(_style_css__WEBPACK_IMPORTED_MODULE_2___default.a.application, \" \").concat(isMenuOpened ? _style_css__WEBPACK_IMPORTED_MODULE_2___default.a.opened_menu : \"\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 4\n    }\n  }, __jsx(\"b\", {\n    className: _style_css__WEBPACK_IMPORTED_MODULE_2___default.a.wrapper,\n    style: {\n      backgroundImage: \"url(\".concat(staticBackground, \")\")\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 5\n    }\n  }, __jsx(\"b\", {\n    className: _style_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 6\n    }\n  }, __jsx(_components_View__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }, props.children)))));\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RlZmF1bHRDb250ZXh0L0FwcC9pbmRleC5qcz9hZGU0Il0sIm5hbWVzIjpbInByb3BzIiwiaXNNZW51T3BlbmVkIiwiY29sb3JzIiwic3RhdGljQmFja2dyb3VuZCIsIm9yZGVyIiwiY29sb3JzVmFyIiwicGFsZXR0ZSIsIm1hcCIsImNvbG9yIiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwiJCIsImFwcGxpY2F0aW9uIiwiZmlsdGVyIiwib3BlbmVkX21lbnUiLCJ3cmFwcGVyIiwiYmFja2dyb3VuZEltYWdlIiwiY29udGFpbmVyIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFZSx5RUFBQ0EsS0FBRCxFQUFXO0FBQUEsTUFDakJDLFlBRGlCLEdBQzBCRCxLQUQxQixDQUNqQkMsWUFEaUI7QUFBQSxNQUNIQyxNQURHLEdBQzBCRixLQUQxQixDQUNIRSxNQURHO0FBQUEsTUFDS0MsZ0JBREwsR0FDMEJILEtBRDFCLENBQ0tHLGdCQURMO0FBR3pCLE1BQU1DLEtBQUssR0FBRyxDQUNiLFNBRGEsRUFFYixXQUZhLEVBR2IsUUFIYSxFQUliLFNBSmEsRUFLYixlQUxhLENBQWQ7QUFRQSxNQUFNQyxTQUFTLEdBQUdILE1BQU0sQ0FBQ0ksT0FBUCxDQUFlQyxHQUFmLENBQW1CLFVBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUN0REMsV0FBTyxDQUFDQyxHQUFSLHdCQUE0QlAsS0FBSyxDQUFDSyxLQUFELENBQWpDLGVBQTZDRCxLQUE3QztBQUNBLGtDQUF1QkosS0FBSyxDQUFDSyxLQUFELENBQTVCLGVBQXdDRCxLQUF4QztBQUNBLEdBSGlCLENBQWxCO0FBS0FFLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTixTQUFaO0FBRUEsU0FDQyxtRUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFZTyxpREFBQyxDQUFDQyxXQUFkLHlCQUNHUixTQUFTLENBQUNTLE1BQVYsQ0FBaUIsVUFBQ04sS0FBRDtBQUFBLFdBQVdBLEtBQVg7QUFBQSxHQUFqQixDQURILGVBREQsRUFJQztBQUNDLGFBQVMsWUFBS0ksaURBQUMsQ0FBQ0MsV0FBUCxjQUNSWixZQUFZLEdBQUdXLGlEQUFDLENBQUNHLFdBQUwsR0FBbUIsRUFEdkIsQ0FEVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0M7QUFDQyxhQUFTLEVBQUVILGlEQUFDLENBQUNJLE9BRGQ7QUFFQyxTQUFLLEVBQUU7QUFBRUMscUJBQWUsZ0JBQVNkLGdCQUFUO0FBQWpCLEtBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlDO0FBQUcsYUFBUyxFQUFFUyxpREFBQyxDQUFDTSxTQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9sQixLQUFLLENBQUNtQixRQUFiLENBREQsQ0FKRCxDQUxELENBSkQsQ0FERDtBQXFCQSxDQXZDRCIsImZpbGUiOiIuL2NvbXBvbmVudHMvRGVmYXVsdENvbnRleHQvQXBwL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBWaWV3IGZyb20gXCJ+L2NvbXBvbmVudHMvVmlld1wiO1xuXG5pbXBvcnQgJCwgeyBjc3MgfSBmcm9tIFwiLi9zdHlsZS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XG5cdGNvbnN0IHsgaXNNZW51T3BlbmVkLCBjb2xvcnMsIHN0YXRpY0JhY2tncm91bmQgfSA9IHByb3BzO1xuXG5cdGNvbnN0IG9yZGVyID0gW1xuXHRcdFwicHJpbWFyeVwiLFxuXHRcdFwic2Vjb25kYXJ5XCIsXG5cdFx0XCJhY2NlbnRcIixcblx0XHRcIm5ldXRyYWxcIixcblx0XHRcImNvbXBsZW1lbnRhcnlcIixcblx0XTtcblxuXHRjb25zdCBjb2xvcnNWYXIgPSBjb2xvcnMucGFsZXR0ZS5tYXAoKGNvbG9yLCBpbmRleCkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKGAtLWRhdGFfY29sb3JfJHtvcmRlcltpbmRleF19OiAke2NvbG9yfTtgKTtcblx0XHRyZXR1cm4gYC0tZGF0YV9jb2xvcl8ke29yZGVyW2luZGV4XX06ICR7Y29sb3J9O2A7XG5cdH0pO1xuXG5cdGNvbnNvbGUubG9nKGNvbG9yc1Zhcik7XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PHN0eWxlPntgLiR7JC5hcHBsaWNhdGlvbn0ge1xuXHRcdFx0XHQke2NvbG9yc1Zhci5maWx0ZXIoKGNvbG9yKSA9PiBjb2xvcil9XG5cdFx0XHR9YH08L3N0eWxlPlxuXHRcdFx0PGJcblx0XHRcdFx0Y2xhc3NOYW1lPXtgJHskLmFwcGxpY2F0aW9ufSAke1xuXHRcdFx0XHRcdGlzTWVudU9wZW5lZCA/ICQub3BlbmVkX21lbnUgOiBcIlwiXG5cdFx0XHRcdH1gfVxuXHRcdFx0PlxuXHRcdFx0XHQ8YlxuXHRcdFx0XHRcdGNsYXNzTmFtZT17JC53cmFwcGVyfVxuXHRcdFx0XHRcdHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke3N0YXRpY0JhY2tncm91bmR9KWAgfX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxiIGNsYXNzTmFtZT17JC5jb250YWluZXJ9PlxuXHRcdFx0XHRcdFx0PFZpZXc+e3Byb3BzLmNoaWxkcmVufTwvVmlldz5cblx0XHRcdFx0XHQ8L2I+XG5cdFx0XHRcdDwvYj5cblx0XHRcdDwvYj5cblx0XHQ8Lz5cblx0KTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/DefaultContext/App/index.js\n");

/***/ })

})