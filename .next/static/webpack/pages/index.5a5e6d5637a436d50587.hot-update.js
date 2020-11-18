webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/src/Components/Card/index.js":
/*!********************************************!*\
  !*** ./pages/src/Components/Card/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/josh/devprojects/joshbillington-portfolio/pages/src/Components/Card/index.js\",\n    _this = undefined;\n\n\n\n\nvar SimpleCard = function SimpleCard(_ref) {\n  var title = _ref.title,\n      text = _ref.text,\n      img = _ref.img,\n      link = _ref.link;\n\n  var imageAppend = function imageAppend() {\n    var position = profileImage.publicUrl.indexOf('upload/');\n    position += 7;\n    console.log(position);\n    var imageUrl = profileImage.publicUrl.substring(0, position) + 'h_600/' + profileImage.publicUrl.substring(position);\n    setUrl(imageUrl);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n    href: link,\n    className: \"card-hover\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n      className: \"simple-card\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Img, {\n        variant: \"top\",\n        src: img,\n        style: {\n          borderRadius: '15px 15px 0 0',\n          opacity: '0.5'\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 3\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Body, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Title, {\n          children: [\" \", title, \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 5\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Text, {\n          children: text\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 5\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 3\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 1\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 1\n  }, _this);\n};\n\n_c = SimpleCard;\nSimpleCard.propTypes = {\n  img: String,\n  title: String,\n  text: String,\n  link: String\n};\nSimpleCard.defaultProps = {\n  img: 'https://res.cloudinary.com/ddd2lfnyh/image/upload/v1605294214/Screen_Shot_2020-11-13_at_1.21.54_PM_ywyjyl.png',\n  title: 'Rego Realty',\n  text: 'Some quick example text to build on the card title and make up the bulk of the content.',\n  link: ''\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (SimpleCard);\n\nvar _c;\n\n$RefreshReg$(_c, \"SimpleCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3JjL0NvbXBvbmVudHMvQ2FyZC9pbmRleC5qcz8yNmIwIl0sIm5hbWVzIjpbIlNpbXBsZUNhcmQiLCJ0aXRsZSIsInRleHQiLCJpbWciLCJsaW5rIiwiaW1hZ2VBcHBlbmQiLCJwb3NpdGlvbiIsInByb2ZpbGVJbWFnZSIsInB1YmxpY1VybCIsImluZGV4T2YiLCJjb25zb2xlIiwibG9nIiwiaW1hZ2VVcmwiLCJzdWJzdHJpbmciLCJzZXRVcmwiLCJib3JkZXJSYWRpdXMiLCJvcGFjaXR5IiwicHJvcFR5cGVzIiwiU3RyaW5nIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBOEI7QUFBQSxNQUE1QkMsS0FBNEIsUUFBNUJBLEtBQTRCO0FBQUEsTUFBckJDLElBQXFCLFFBQXJCQSxJQUFxQjtBQUFBLE1BQWZDLEdBQWUsUUFBZkEsR0FBZTtBQUFBLE1BQVZDLElBQVUsUUFBVkEsSUFBVTs7QUFHL0MsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QixRQUFJQyxRQUFRLEdBQUdDLFlBQVksQ0FBQ0MsU0FBYixDQUF1QkMsT0FBdkIsQ0FBK0IsU0FBL0IsQ0FBZjtBQUNBSCxZQUFRLElBQUksQ0FBWjtBQUNBSSxXQUFPLENBQUNDLEdBQVIsQ0FBWUwsUUFBWjtBQUNBLFFBQUlNLFFBQVEsR0FBR0wsWUFBWSxDQUFDQyxTQUFiLENBQXVCSyxTQUF2QixDQUFpQyxDQUFqQyxFQUFvQ1AsUUFBcEMsSUFBZ0QsUUFBaEQsR0FBMkRDLFlBQVksQ0FBQ0MsU0FBYixDQUF1QkssU0FBdkIsQ0FBaUNQLFFBQWpDLENBQTFFO0FBQ0FRLFVBQU0sQ0FBQ0YsUUFBRCxDQUFOO0FBQ0QsR0FORDs7QUFjRSxzQkFNSjtBQUFHLFFBQUksRUFBRVIsSUFBVDtBQUFlLGFBQVMsRUFBQyxZQUF6QjtBQUFBLDJCQUNBLHFFQUFDLG9EQUFEO0FBQU0sZUFBUyxFQUFDLGFBQWhCO0FBQUEsOEJBQ0UscUVBQUMsb0RBQUQsQ0FBTSxHQUFOO0FBQVUsZUFBTyxFQUFDLEtBQWxCO0FBQXdCLFdBQUcsRUFBRUQsR0FBN0I7QUFBa0MsYUFBSyxFQUFFO0FBQUNZLHNCQUFZLEVBQUUsZUFBZjtBQUFnQ0MsaUJBQU8sRUFBRTtBQUF6QztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSxxRUFBQyxvREFBRCxDQUFNLElBQU47QUFBQSxnQ0FDRSxxRUFBQyxvREFBRCxDQUFNLEtBQU47QUFBQSwwQkFBY2YsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSxxRUFBQyxvREFBRCxDQUFNLElBQU47QUFBQSxvQkFDR0M7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FOSTtBQW9CSCxDQXJDRDs7S0FBTUYsVTtBQXNDTkEsVUFBVSxDQUFDaUIsU0FBWCxHQUF1QjtBQUNuQmQsS0FBRyxFQUFFZSxNQURjO0FBRW5CakIsT0FBSyxFQUFFaUIsTUFGWTtBQUduQmhCLE1BQUksRUFBRWdCLE1BSGE7QUFJbkJkLE1BQUksRUFBRWM7QUFKYSxDQUF2QjtBQU9BbEIsVUFBVSxDQUFDbUIsWUFBWCxHQUEwQjtBQUN0QmhCLEtBQUcsRUFBRSwrR0FEaUI7QUFFdEJGLE9BQUssRUFBRSxhQUZlO0FBR3RCQyxNQUFJLEVBQUUseUZBSGdCO0FBSXRCRSxNQUFJLEVBQUU7QUFKZ0IsQ0FBMUI7QUFXZUoseUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9zcmMvQ29tcG9uZW50cy9DYXJkL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZCwgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJzsgXG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNvbnN0IFNpbXBsZUNhcmQgPSAoe3RpdGxlLCB0ZXh0LCBpbWcsIGxpbmt9KSA9PiB7XG5cblxuICBjb25zdCBpbWFnZUFwcGVuZCA9ICgpID0+IHtcbiAgICBsZXQgcG9zaXRpb24gPSBwcm9maWxlSW1hZ2UucHVibGljVXJsLmluZGV4T2YoJ3VwbG9hZC8nKTsgXG4gICAgcG9zaXRpb24gKz0gNzsgXG4gICAgY29uc29sZS5sb2cocG9zaXRpb24pOyBcbiAgICBsZXQgaW1hZ2VVcmwgPSBwcm9maWxlSW1hZ2UucHVibGljVXJsLnN1YnN0cmluZygwLCBwb3NpdGlvbikgKyAnaF82MDAvJyArIHByb2ZpbGVJbWFnZS5wdWJsaWNVcmwuc3Vic3RyaW5nKHBvc2l0aW9uKTtcbiAgICBzZXRVcmwoaW1hZ2VVcmwpOyBcbiAgfTsgXG5cblxuXG5cblxuXG5cbiAgICByZXR1cm4gKFxuXG5cblxuXG5cbjxhIGhyZWY9e2xpbmt9IGNsYXNzTmFtZT0nY2FyZC1ob3Zlcic+ICBcbjxDYXJkIGNsYXNzTmFtZT0nc2ltcGxlLWNhcmQnPlxuICA8Q2FyZC5JbWcgdmFyaWFudD1cInRvcFwiIHNyYz17aW1nfSBzdHlsZT17e2JvcmRlclJhZGl1czogJzE1cHggMTVweCAwIDAnLCBvcGFjaXR5OiAnMC41JyB9fSAvPlxuICA8Q2FyZC5Cb2R5PlxuICAgIDxDYXJkLlRpdGxlPiB7dGl0bGV9IDwvQ2FyZC5UaXRsZT5cbiAgICA8Q2FyZC5UZXh0PlxuICAgICAge3RleHR9XG4gICAgPC9DYXJkLlRleHQ+XG4gIDwvQ2FyZC5Cb2R5PlxuPC9DYXJkPlxuPC9hPiAgICBcblxuICAgICk7IFxuXG59XG5TaW1wbGVDYXJkLnByb3BUeXBlcyA9IHtcbiAgICBpbWc6IFN0cmluZywgXG4gICAgdGl0bGU6IFN0cmluZywgXG4gICAgdGV4dDogU3RyaW5nLCBcbiAgICBsaW5rOiBTdHJpbmcsIFxufVxuXG5TaW1wbGVDYXJkLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBpbWc6ICdodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZGQybGZueWgvaW1hZ2UvdXBsb2FkL3YxNjA1Mjk0MjE0L1NjcmVlbl9TaG90XzIwMjAtMTEtMTNfYXRfMS4yMS41NF9QTV95d3lqeWwucG5nJywgXG4gICAgdGl0bGU6ICdSZWdvIFJlYWx0eScsIFxuICAgIHRleHQ6ICdTb21lIHF1aWNrIGV4YW1wbGUgdGV4dCB0byBidWlsZCBvbiB0aGUgY2FyZCB0aXRsZSBhbmQgbWFrZSB1cCB0aGUgYnVsayBvZiB0aGUgY29udGVudC4nLFxuICAgIGxpbms6ICcnLCBcbn1cblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBTaW1wbGVDYXJkOyAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/src/Components/Card/index.js\n");

/***/ })

})