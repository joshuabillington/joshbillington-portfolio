webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/src/Components/Card/index.js":
/*!********************************************!*\
  !*** ./pages/src/Components/Card/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/josh/devprojects/joshbillington-portfolio/pages/src/Components/Card/index.js\",\n    _this = undefined;\n\n\n\n\nvar SimpleCard = function SimpleCard(_ref) {\n  var title = _ref.title,\n      text = _ref.text,\n      img = _ref.img,\n      link = _ref.link;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n    href: link,\n    className: \"card-hover\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n      className: \"simple-card\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Img, {\n        variant: \"top\",\n        src: img,\n        style: {\n          borderRadius: '15px 15px 0 0',\n          opacity: '0.5'\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 3\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Body, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Title, {\n          children: [\" \", title, \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 5\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Text, {\n          children: text\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 5\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 3\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 1\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 1\n  }, _this);\n};\n\n_c = SimpleCard;\nSimpleCard.propTypes = {\n  img: String,\n  title: String,\n  text: String,\n  link: String\n};\nSimpleCard.defaultProps = {\n  img: 'https://res.cloudinary.com/ddd2lfnyh/image/upload/v1605294214/Screen_Shot_2020-11-13_at_1.21.54_PM_ywyjyl.png',\n  title: 'Rego Realty',\n  text: 'Some quick example text to build on the card title and make up the bulk of the content.',\n  link: ''\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (SimpleCard);\n\nvar _c;\n\n$RefreshReg$(_c, \"SimpleCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3JjL0NvbXBvbmVudHMvQ2FyZC9pbmRleC5qcz8yNmIwIl0sIm5hbWVzIjpbIlNpbXBsZUNhcmQiLCJ0aXRsZSIsInRleHQiLCJpbWciLCJsaW5rIiwiYm9yZGVyUmFkaXVzIiwib3BhY2l0eSIsInByb3BUeXBlcyIsIlN0cmluZyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQThCO0FBQUEsTUFBNUJDLEtBQTRCLFFBQTVCQSxLQUE0QjtBQUFBLE1BQXJCQyxJQUFxQixRQUFyQkEsSUFBcUI7QUFBQSxNQUFmQyxHQUFlLFFBQWZBLEdBQWU7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7QUFXN0Msc0JBTUo7QUFBRyxRQUFJLEVBQUVBLElBQVQ7QUFBZSxhQUFTLEVBQUMsWUFBekI7QUFBQSwyQkFDQSxxRUFBQyxvREFBRDtBQUFNLGVBQVMsRUFBQyxhQUFoQjtBQUFBLDhCQUNFLHFFQUFDLG9EQUFELENBQU0sR0FBTjtBQUFVLGVBQU8sRUFBQyxLQUFsQjtBQUF3QixXQUFHLEVBQUVELEdBQTdCO0FBQWtDLGFBQUssRUFBRTtBQUFDRSxzQkFBWSxFQUFFLGVBQWY7QUFBZ0NDLGlCQUFPLEVBQUU7QUFBekM7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUscUVBQUMsb0RBQUQsQ0FBTSxJQUFOO0FBQUEsZ0NBQ0UscUVBQUMsb0RBQUQsQ0FBTSxLQUFOO0FBQUEsMEJBQWNMLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUscUVBQUMsb0RBQUQsQ0FBTSxJQUFOO0FBQUEsb0JBQ0dDO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBTkk7QUFvQkgsQ0EvQkQ7O0tBQU1GLFU7QUFnQ05BLFVBQVUsQ0FBQ08sU0FBWCxHQUF1QjtBQUNuQkosS0FBRyxFQUFFSyxNQURjO0FBRW5CUCxPQUFLLEVBQUVPLE1BRlk7QUFHbkJOLE1BQUksRUFBRU0sTUFIYTtBQUluQkosTUFBSSxFQUFFSTtBQUphLENBQXZCO0FBT0FSLFVBQVUsQ0FBQ1MsWUFBWCxHQUEwQjtBQUN0Qk4sS0FBRyxFQUFFLCtHQURpQjtBQUV0QkYsT0FBSyxFQUFFLGFBRmU7QUFHdEJDLE1BQUksRUFBRSx5RkFIZ0I7QUFJdEJFLE1BQUksRUFBRTtBQUpnQixDQUExQjtBQVdlSix5RUFBZiIsImZpbGUiOiIuL3BhZ2VzL3NyYy9Db21wb25lbnRzL0NhcmQvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkLCBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnOyBcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuY29uc3QgU2ltcGxlQ2FyZCA9ICh7dGl0bGUsIHRleHQsIGltZywgbGlua30pID0+IHtcblxuXG5cblxuXG5cblxuXG5cbiAgXG4gICAgcmV0dXJuIChcblxuXG5cblxuXG48YSBocmVmPXtsaW5rfSBjbGFzc05hbWU9J2NhcmQtaG92ZXInPiAgXG48Q2FyZCBjbGFzc05hbWU9J3NpbXBsZS1jYXJkJz5cbiAgPENhcmQuSW1nIHZhcmlhbnQ9XCJ0b3BcIiBzcmM9e2ltZ30gc3R5bGU9e3tib3JkZXJSYWRpdXM6ICcxNXB4IDE1cHggMCAwJywgb3BhY2l0eTogJzAuNScgfX0gLz5cbiAgPENhcmQuQm9keT5cbiAgICA8Q2FyZC5UaXRsZT4ge3RpdGxlfSA8L0NhcmQuVGl0bGU+XG4gICAgPENhcmQuVGV4dD5cbiAgICAgIHt0ZXh0fVxuICAgIDwvQ2FyZC5UZXh0PlxuICA8L0NhcmQuQm9keT5cbjwvQ2FyZD5cbjwvYT4gICAgXG5cbiAgICApOyBcblxufVxuU2ltcGxlQ2FyZC5wcm9wVHlwZXMgPSB7XG4gICAgaW1nOiBTdHJpbmcsIFxuICAgIHRpdGxlOiBTdHJpbmcsIFxuICAgIHRleHQ6IFN0cmluZywgXG4gICAgbGluazogU3RyaW5nLCBcbn1cblxuU2ltcGxlQ2FyZC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgaW1nOiAnaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGRkMmxmbnloL2ltYWdlL3VwbG9hZC92MTYwNTI5NDIxNC9TY3JlZW5fU2hvdF8yMDIwLTExLTEzX2F0XzEuMjEuNTRfUE1feXd5anlsLnBuZycsIFxuICAgIHRpdGxlOiAnUmVnbyBSZWFsdHknLCBcbiAgICB0ZXh0OiAnU29tZSBxdWljayBleGFtcGxlIHRleHQgdG8gYnVpbGQgb24gdGhlIGNhcmQgdGl0bGUgYW5kIG1ha2UgdXAgdGhlIGJ1bGsgb2YgdGhlIGNvbnRlbnQuJyxcbiAgICBsaW5rOiAnJywgXG59XG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgU2ltcGxlQ2FyZDsgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/src/Components/Card/index.js\n");

/***/ })

})