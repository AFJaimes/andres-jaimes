"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Experience/Job/Job.tsx":
/*!***********************************************!*\
  !*** ./src/components/Experience/Job/Job.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_extends_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_extends.mjs */ \"./node_modules/@swc/helpers/src/_extends.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Job_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Job.module.scss */ \"./src/components/Experience/Job/Job.module.scss\");\n/* harmony import */ var _Job_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Job_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _this = undefined;\n\n\nvar Job = function(_param) {\n    var job = (0,_swc_helpers_src_extends_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, _param);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Job_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (_Job_module_scss__WEBPACK_IMPORTED_MODULE_2___default().colorYellow),\n                children: job.jobTitle\n            }, void 0, false, {\n                fileName: \"D:\\\\users\\\\Documents\\\\GitHub\\\\afjaimes\\\\src\\\\components\\\\Experience\\\\Job\\\\Job.tsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\users\\\\Documents\\\\GitHub\\\\afjaimes\\\\src\\\\components\\\\Experience\\\\Job\\\\Job.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (_Job_module_scss__WEBPACK_IMPORTED_MODULE_2___default().colorYellow),\n                children: [\n                    \" \",\n                    job.description\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\users\\\\Documents\\\\GitHub\\\\afjaimes\\\\src\\\\components\\\\Experience\\\\Job\\\\Job.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\users\\\\Documents\\\\GitHub\\\\afjaimes\\\\src\\\\components\\\\Experience\\\\Job\\\\Job.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, _this);\n};\n_c = Job;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Job);\nvar _c;\n$RefreshReg$(_c, \"Job\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9FeHBlcmllbmNlL0pvYi9Kb2IudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7QUFBb0M7QUFJcEMsSUFBTUMsR0FBRyxHQUFtQyxpQkFBZ0I7UUFBVkMsR0FBRztJQUNuRCxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUVKLG1FQUFhOzswQkFDM0IsOERBQUNNLE1BQUk7Z0JBQUNGLFNBQVMsRUFBRUoscUVBQWU7MEJBQUdFLEdBQUcsQ0FBQ00sUUFBUTs7Ozs7cUJBQVE7MEJBQ3ZELDhEQUFDQyxJQUFFOzs7O3FCQUFHOzBCQUNOLDhEQUFDSCxNQUFJO2dCQUFDRixTQUFTLEVBQUVKLHFFQUFlOztvQkFBRSxHQUFDO29CQUFDRSxHQUFHLENBQUNRLFdBQVc7Ozs7OztxQkFBUTs7Ozs7O2FBQ3ZELENBQ047Q0FDSDtBQVJLVCxLQUFBQSxHQUFHO0FBVVQsK0RBQWVBLEdBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9FeHBlcmllbmNlL0pvYi9Kb2IudHN4P2RlOTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tIFwiLi9Kb2IubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSGVhZGVyUHJvcHMgfSBmcm9tIFwiLi9Kb2IucHJvcHR5cGVzXCI7XHJcblxyXG5jb25zdCBKb2I6IEZ1bmN0aW9uQ29tcG9uZW50PEhlYWRlclByb3BzPiA9ICh7IC4uLmpvYiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuY29udGFpbmVyfT5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjc3MuY29sb3JZZWxsb3d9Pntqb2Iuam9iVGl0bGV9PC9zcGFuPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjc3MuY29sb3JZZWxsb3d9PiB7am9iLmRlc2NyaXB0aW9ufTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBKb2I7XHJcbiJdLCJuYW1lcyI6WyJjc3MiLCJKb2IiLCJqb2IiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJzcGFuIiwiY29sb3JZZWxsb3ciLCJqb2JUaXRsZSIsImJyIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Experience/Job/Job.tsx\n"));

/***/ })

});