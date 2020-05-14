webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/DefaultContext/App/index.js":
/*!************************************************!*\
  !*** ./components/DefaultContext/App/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/View */ \"./components/View/index.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./components/DefaultContext/App/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/elena/projects/photography/components/DefaultContext/App/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (props) {\n  var isMenuOpened = props.isMenuOpened,\n      colors = props.colors,\n      staticBackground = props.staticBackground;\n  var order = [\"primary\", \"secondary\", \"accent\", \"neutral\", \"complementary\"];\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"style\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 4\n    }\n  }, \".\".concat(_style_css__WEBPACK_IMPORTED_MODULE_2___default.a.application, \" {\\n\\t\\t\\t\\t\").concat(colors.palette.filter(function (color, index) {\n    console.log(color);\n    return \"--data_color_\".concat(order[index], \": \").concat(color, \";\");\n  }), \"\\n\\t\\t\\t}\")), __jsx(\"b\", {\n    className: \"\".concat(_style_css__WEBPACK_IMPORTED_MODULE_2___default.a.application, \" \").concat(isMenuOpened ? _style_css__WEBPACK_IMPORTED_MODULE_2___default.a.opened_menu : \"\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 4\n    }\n  }, __jsx(\"b\", {\n    className: _style_css__WEBPACK_IMPORTED_MODULE_2___default.a.wrapper,\n    style: {\n      backgroundImage: \"url(\".concat(staticBackground, \")\")\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }\n  }, __jsx(\"b\", {\n    className: _style_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 6\n    }\n  }, __jsx(_components_View__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, props.children)))));\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RlZmF1bHRDb250ZXh0L0FwcC9pbmRleC5qcz9hZGU0Il0sIm5hbWVzIjpbInByb3BzIiwiaXNNZW51T3BlbmVkIiwiY29sb3JzIiwic3RhdGljQmFja2dyb3VuZCIsIm9yZGVyIiwiJCIsImFwcGxpY2F0aW9uIiwicGFsZXR0ZSIsImZpbHRlciIsImNvbG9yIiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwib3BlbmVkX21lbnUiLCJ3cmFwcGVyIiwiYmFja2dyb3VuZEltYWdlIiwiY29udGFpbmVyIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFZSx5RUFBQ0EsS0FBRCxFQUFXO0FBQUEsTUFDakJDLFlBRGlCLEdBQzBCRCxLQUQxQixDQUNqQkMsWUFEaUI7QUFBQSxNQUNIQyxNQURHLEdBQzBCRixLQUQxQixDQUNIRSxNQURHO0FBQUEsTUFDS0MsZ0JBREwsR0FDMEJILEtBRDFCLENBQ0tHLGdCQURMO0FBR3pCLE1BQU1DLEtBQUssR0FBRyxDQUNiLFNBRGEsRUFFYixXQUZhLEVBR2IsUUFIYSxFQUliLFNBSmEsRUFLYixlQUxhLENBQWQ7QUFRQSxTQUNDLG1FQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVlDLGlEQUFDLENBQUNDLFdBQWQseUJBQ0dKLE1BQU0sQ0FBQ0ssT0FBUCxDQUFlQyxNQUFmLENBQXNCLFVBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUN6Q0MsV0FBTyxDQUFDQyxHQUFSLENBQVlILEtBQVo7QUFDQSxrQ0FBdUJMLEtBQUssQ0FBQ00sS0FBRCxDQUE1QixlQUF3Q0QsS0FBeEM7QUFDQSxHQUhDLENBREgsZUFERCxFQU9DO0FBQ0MsYUFBUyxZQUFLSixpREFBQyxDQUFDQyxXQUFQLGNBQ1JMLFlBQVksR0FBR0ksaURBQUMsQ0FBQ1EsV0FBTCxHQUFtQixFQUR2QixDQURWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLQztBQUNDLGFBQVMsRUFBRVIsaURBQUMsQ0FBQ1MsT0FEZDtBQUVDLFNBQUssRUFBRTtBQUFFQyxxQkFBZSxnQkFBU1osZ0JBQVQ7QUFBakIsS0FGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUM7QUFBRyxhQUFTLEVBQUVFLGlEQUFDLENBQUNXLFNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT2hCLEtBQUssQ0FBQ2lCLFFBQWIsQ0FERCxDQUpELENBTEQsQ0FQRCxDQUREO0FBd0JBLENBbkNEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9EZWZhdWx0Q29udGV4dC9BcHAvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFZpZXcgZnJvbSBcIn4vY29tcG9uZW50cy9WaWV3XCI7XG5cbmltcG9ydCAkLCB7IGNzcyB9IGZyb20gXCIuL3N0eWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IHtcblx0Y29uc3QgeyBpc01lbnVPcGVuZWQsIGNvbG9ycywgc3RhdGljQmFja2dyb3VuZCB9ID0gcHJvcHM7XG5cblx0Y29uc3Qgb3JkZXIgPSBbXG5cdFx0XCJwcmltYXJ5XCIsXG5cdFx0XCJzZWNvbmRhcnlcIixcblx0XHRcImFjY2VudFwiLFxuXHRcdFwibmV1dHJhbFwiLFxuXHRcdFwiY29tcGxlbWVudGFyeVwiLFxuXHRdO1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxzdHlsZT57YC4keyQuYXBwbGljYXRpb259IHtcblx0XHRcdFx0JHtjb2xvcnMucGFsZXR0ZS5maWx0ZXIoKGNvbG9yLCBpbmRleCkgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGNvbG9yKTtcblx0XHRcdFx0XHRyZXR1cm4gYC0tZGF0YV9jb2xvcl8ke29yZGVyW2luZGV4XX06ICR7Y29sb3J9O2A7XG5cdFx0XHRcdH0pfVxuXHRcdFx0fWB9PC9zdHlsZT5cblx0XHRcdDxiXG5cdFx0XHRcdGNsYXNzTmFtZT17YCR7JC5hcHBsaWNhdGlvbn0gJHtcblx0XHRcdFx0XHRpc01lbnVPcGVuZWQgPyAkLm9wZW5lZF9tZW51IDogXCJcIlxuXHRcdFx0XHR9YH1cblx0XHRcdD5cblx0XHRcdFx0PGJcblx0XHRcdFx0XHRjbGFzc05hbWU9eyQud3JhcHBlcn1cblx0XHRcdFx0XHRzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtzdGF0aWNCYWNrZ3JvdW5kfSlgIH19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8YiBjbGFzc05hbWU9eyQuY29udGFpbmVyfT5cblx0XHRcdFx0XHRcdDxWaWV3Pntwcm9wcy5jaGlsZHJlbn08L1ZpZXc+XG5cdFx0XHRcdFx0PC9iPlxuXHRcdFx0XHQ8L2I+XG5cdFx0XHQ8L2I+XG5cdFx0PC8+XG5cdCk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/DefaultContext/App/index.js\n");

/***/ })

})