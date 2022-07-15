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

/***/ "./src/components/Projects/DvdScreensaver/DvdScreensaver.tsx":
/*!*******************************************************************!*\
  !*** ./src/components/Projects/DvdScreensaver/DvdScreensaver.tsx ***!
  \*******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hooks/useWindowSize */ \"./src/hooks/useWindowSize.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _DvdScreensaver_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DvdScreensaver.module.scss */ \"./src/components/Projects/DvdScreensaver/DvdScreensaver.module.scss\");\n/* harmony import */ var _DvdScreensaver_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_DvdScreensaver_module_scss__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar randomColor = function() {\n    var n = (Math.random() * 0xfffff * 1000000).toString(16);\n    return \"#\" + n.slice(0, 6);\n};\nvar DvdScreensaver = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"#fff\"), color = ref[0], setColor = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        x: 10,\n        y: 10\n    }), position = ref1[0], setPosition = ref1[1];\n    var ref2 = (0,hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), width = ref2.width, height = ref2.height;\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(30), angle = ref3[0], setAngle = ref3[1];\n    var initialAngle = 30;\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(5), speed = ref4[0], setSpeed = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"none\"), lastBounce = ref5[0], setLastBounce = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), perfect = ref6[0], setPerfect = ref6[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var timer1 = setTimeout(function() {\n            return setPosition({\n                x: position.x + Math.cos(angle * Math.PI / 180) * speed,\n                y: position.y + Math.sin(angle * Math.PI / 180) * speed\n            });\n        }, 10);\n        return function() {\n            clearTimeout(timer1);\n        };\n    }, [\n        angle,\n        position,\n        speed\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setColor(randomColor());\n    }, [\n        lastBounce\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (perfect) {\n            setTimeout(function() {\n                setPerfect(false);\n            }, 1000);\n        }\n    }, [\n        perfect\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (width > 0 && height > 0 && (position.x + 111 >= width && position.y + 72 >= height || position.x <= 0 && position.y <= 0 || position.x + 111 >= width && position.y <= 0 || position.x <= 0 && position.y + 72 >= height)) {\n            setPerfect(true);\n        }\n        if (position.x + 111 - 30 >= width && width > 0 && lastBounce !== \"right\") {\n            setAngle(angle >= 90 ? 180 + initialAngle : 180 - initialAngle);\n            setLastBounce(\"right\");\n        }\n        if (position.y + 72 - 30 >= height && height > 0 && lastBounce !== \"top\") {\n            setAngle(angle >= 90 ? 180 + initialAngle : 360 - initialAngle);\n            setLastBounce(\"top\");\n        }\n        if (position.x <= -2 && width > 0 && lastBounce !== \"left\") {\n            setAngle(angle >= 180 ? 360 - initialAngle : initialAngle);\n            setLastBounce(\"left\");\n        }\n        if (position.y <= -2 && height > 0 && lastBounce !== \"bottom\") {\n            setAngle(angle >= 270 ? initialAngle : 180 - initialAngle);\n            setLastBounce(\"bottom\");\n        }\n    }, [\n        angle,\n        height,\n        lastBounce,\n        position.x,\n        position.y,\n        width\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"\".concat((_DvdScreensaver_module_scss__WEBPACK_IMPORTED_MODULE_3___default().root), \" \").concat(perfect && (_DvdScreensaver_module_scss__WEBPACK_IMPORTED_MODULE_3___default().perfectBg)),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n            xmlns: \"http://www.w3.org/2000/svg\",\n            width: \"100%\",\n            height: \"100%\",\n            viewBox: \"0 0 210 107\",\n            className: (_DvdScreensaver_module_scss__WEBPACK_IMPORTED_MODULE_3___default().logo),\n            style: {\n                fill: color,\n                bottom: position.y,\n                left: position.x\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                    d: \"M118.895,20.346c0,0-13.743,16.922-13.04,18.001c0.975-1.079-4.934-18.186-4.934-18.186s-1.233-3.597-5.102-15.387H81.81H47.812H22.175l-2.56,11.068h19.299h4.579c12.415,0,19.995,5.132,17.878,14.225c-2.287,9.901-13.123,14.128-24.665,14.128H32.39l5.552-24.208H18.647l-8.192,35.368h27.398c20.612,0,40.166-11.067,43.692-25.288c0.617-2.614,0.53-9.185-1.054-13.053c0-0.093-0.091-0.271-0.178-0.537c-0.087-0.093-0.178-0.722,0.178-0.814c0.172-0.092,0.525,0.271,0.525,0.358c0,0,0.179,0.456,0.351,0.813l17.44,50.315l44.404-51.216l18.761-0.092h4.579c12.424,0,20.09,5.132,17.969,14.225c-2.29,9.901-13.205,14.128-24.75,14.128h-4.405L161,19.987h-19.287l-8.198,35.368h27.398c20.611,0,40.343-11.067,43.604-25.288c3.347-14.225-11.101-25.293-31.89-25.293h-18.143h-22.727C120.923,17.823,118.895,20.346,118.895,20.346L118.895,20.346z\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\users\\\\Documents\\\\GitHub\\\\afjaimes\\\\src\\\\components\\\\Projects\\\\DvdScreensaver\\\\DvdScreensaver.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                    d: \"M99.424,67.329C47.281,67.329,5,73.449,5,81.012c0,7.558,42.281,13.678,94.424,13.678c52.239,0,94.524-6.12,94.524-13.678C193.949,73.449,151.664,67.329,99.424,67.329z M96.078,85.873c-11.98,0-21.58-2.072-21.58-4.595c0-2.523,9.599-4.59,21.58-4.59c11.888,0,21.498,2.066,21.498,4.59C117.576,83.801,107.966,85.873,96.078,85.873z\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\users\\\\Documents\\\\GitHub\\\\afjaimes\\\\src\\\\components\\\\Projects\\\\DvdScreensaver\\\\DvdScreensaver.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\users\\\\Documents\\\\GitHub\\\\afjaimes\\\\src\\\\components\\\\Projects\\\\DvdScreensaver\\\\DvdScreensaver.tsx\",\n            lineNumber: 76,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\users\\\\Documents\\\\GitHub\\\\afjaimes\\\\src\\\\components\\\\Projects\\\\DvdScreensaver\\\\DvdScreensaver.tsx\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, _this);\n};\n_s(DvdScreensaver, \"N9FRdcK7cEcpPVXW4vQ6Ln1EVA4=\", false, function() {\n    return [\n        hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = DvdScreensaver;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DvdScreensaver);\nvar _c;\n$RefreshReg$(_c, \"DvdScreensaver\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0cy9EdmRTY3JlZW5zYXZlci9EdmRTY3JlZW5zYXZlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBZ0Q7QUFDZTtBQUNoQjs7QUFFL0MsSUFBTUksV0FBVyxHQUFHLFdBQU07SUFDeEIsSUFBSUMsQ0FBQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsTUFBTSxFQUFFLEdBQUcsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsRUFBRSxDQUFDO0lBQ3hELE9BQU8sR0FBRyxHQUFHSCxDQUFDLENBQUNJLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Q0FDNUI7QUFFRCxJQUFNQyxjQUFjLEdBQXNCLFdBQU07O0lBQzlDLElBQTBCUixHQUFnQixHQUFoQkEsK0NBQVEsQ0FBQyxNQUFNLENBQUMsRUFBbkNTLEtBQUssR0FBY1QsR0FBZ0IsR0FBOUIsRUFBRVUsUUFBUSxHQUFJVixHQUFnQixHQUFwQjtJQUN0QixJQUFnQ0EsSUFBMEIsR0FBMUJBLCtDQUFRLENBQUM7UUFBRVcsQ0FBQyxFQUFFLEVBQUU7UUFBRUMsQ0FBQyxFQUFFLEVBQUU7S0FBRSxDQUFDLEVBQW5EQyxRQUFRLEdBQWlCYixJQUEwQixHQUEzQyxFQUFFYyxXQUFXLEdBQUlkLElBQTBCLEdBQTlCO0lBQzVCLElBQTBCRixJQUFlLEdBQWZBLCtEQUFhLEVBQUUsRUFBakNpQixLQUFLLEdBQWFqQixJQUFlLENBQWpDaUIsS0FBSyxFQUFFQyxNQUFNLEdBQUtsQixJQUFlLENBQTFCa0IsTUFBTTtJQUNyQixJQUEwQmhCLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBL0JpQixLQUFLLEdBQWNqQixJQUFZLEdBQTFCLEVBQUVrQixRQUFRLEdBQUlsQixJQUFZLEdBQWhCO0lBQ3RCLElBQU1tQixZQUFZLEdBQUcsRUFBRTtJQUN2QixJQUEwQm5CLElBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFBOUJvQixLQUFLLEdBQWNwQixJQUFXLEdBQXpCLEVBQUVxQixRQUFRLEdBQUlyQixJQUFXLEdBQWY7SUFDdEIsSUFBb0NBLElBQWdCLEdBQWhCQSwrQ0FBUSxDQUFDLE1BQU0sQ0FBQyxFQUE3Q3NCLFVBQVUsR0FBbUJ0QixJQUFnQixHQUFuQyxFQUFFdUIsYUFBYSxHQUFJdkIsSUFBZ0IsR0FBcEI7SUFDaEMsSUFBOEJBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBdEN3QixPQUFPLEdBQWdCeEIsSUFBZSxHQUEvQixFQUFFeUIsVUFBVSxHQUFJekIsSUFBZSxHQUFuQjtJQUUxQkQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBSTJCLE1BQU0sR0FBR0MsVUFBVSxDQUNyQjttQkFDRWIsV0FBVyxDQUFDO2dCQUNWSCxDQUFDLEVBQUVFLFFBQVEsQ0FBQ0YsQ0FBQyxHQUFHUCxJQUFJLENBQUN3QixHQUFHLENBQUMsS0FBTSxHQUFHeEIsSUFBSSxDQUFDeUIsRUFBRSxHQUFJLEdBQUcsQ0FBQyxHQUFHVCxLQUFLO2dCQUN6RFIsQ0FBQyxFQUFFQyxRQUFRLENBQUNELENBQUMsR0FBR1IsSUFBSSxDQUFDMEIsR0FBRyxDQUFDLEtBQU0sR0FBRzFCLElBQUksQ0FBQ3lCLEVBQUUsR0FBSSxHQUFHLENBQUMsR0FBR1QsS0FBSzthQUMxRCxDQUFDO1NBQUEsRUFDSixFQUFFLENBQ0g7UUFDRCxPQUFPLFdBQU07WUFDWFcsWUFBWSxDQUFDTCxNQUFNLENBQUMsQ0FBQztTQUN0QixDQUFDO0tBQ0gsRUFBRTtRQUFDVCxLQUFLO1FBQUVKLFFBQVE7UUFBRU8sS0FBSztLQUFDLENBQUMsQ0FBQztJQUU3QnJCLGdEQUFTLENBQUMsV0FBTTtRQUNkVyxRQUFRLENBQUNSLFdBQVcsRUFBRSxDQUFDLENBQUM7S0FDekIsRUFBRTtRQUFDb0IsVUFBVTtLQUFDLENBQUMsQ0FBQztJQUVqQnZCLGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQUl5QixPQUFPLEVBQUU7WUFDWEcsVUFBVSxDQUFDLFdBQU07Z0JBQ2ZGLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNuQixFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ1Y7S0FDRixFQUFFO1FBQUNELE9BQU87S0FBQyxDQUFDLENBQUM7SUFFZHpCLGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQ0VnQixLQUFLLEdBQUcsQ0FBQyxJQUNUQyxNQUFNLEdBQUcsQ0FBQyxJQUNWLENBQUMsUUFBUyxDQUFDTCxDQUFDLEdBQUcsR0FBRyxJQUFJSSxLQUFLLElBQUlGLFFBQVEsQ0FBQ0QsQ0FBQyxHQUFHLEVBQUUsSUFBSUksTUFBTSxJQUNyREgsUUFBUSxDQUFDRixDQUFDLElBQUksQ0FBQyxJQUFJRSxRQUFRLENBQUNELENBQUMsSUFBSSxDQUFDLElBQ2xDQyxRQUFRLENBQUNGLENBQUMsR0FBRyxHQUFHLElBQUlJLEtBQUssSUFBSUYsUUFBUSxDQUFDRCxDQUFDLElBQUksQ0FBQyxJQUM1Q0MsUUFBUSxDQUFDRixDQUFDLElBQUksQ0FBQyxJQUFJRSxRQUFRLENBQUNELENBQUMsR0FBRyxFQUFFLElBQUlJLE1BQU0sQ0FBRSxFQUNqRDtZQUNBUyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbEI7UUFDRCxJQUFJWixRQUFRLENBQUNGLENBQUMsR0FBRyxHQUFHLEdBQUMsRUFBRSxJQUFJSSxLQUFLLElBQUlBLEtBQUssR0FBRyxDQUFDLElBQUlPLFVBQVUsS0FBSyxPQUFPLEVBQUU7WUFDdkVKLFFBQVEsQ0FBQ0QsS0FBSyxJQUFJLEVBQUUsR0FBRyxHQUFHLEdBQUdFLFlBQVksR0FBRyxHQUFHLEdBQUdBLFlBQVksQ0FBQyxDQUFDO1lBQ2hFSSxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDeEI7UUFDRCxJQUFJVixRQUFRLENBQUNELENBQUMsR0FBRyxFQUFFLEdBQUMsRUFBRSxJQUFJSSxNQUFNLElBQUlBLE1BQU0sR0FBRyxDQUFDLElBQUlNLFVBQVUsS0FBSyxLQUFLLEVBQUU7WUFDdEVKLFFBQVEsQ0FBQ0QsS0FBSyxJQUFJLEVBQUUsR0FBRyxHQUFHLEdBQUdFLFlBQVksR0FBRyxHQUFHLEdBQUdBLFlBQVksQ0FBQyxDQUFDO1lBQ2hFSSxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEI7UUFDRCxJQUFJVixRQUFRLENBQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSUksS0FBSyxHQUFHLENBQUMsSUFBSU8sVUFBVSxLQUFLLE1BQU0sRUFBRTtZQUMxREosUUFBUSxDQUFDRCxLQUFLLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBR0UsWUFBWSxHQUFHQSxZQUFZLENBQUMsQ0FBQztZQUMzREksYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3ZCO1FBQ0QsSUFBSVYsUUFBUSxDQUFDRCxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUlJLE1BQU0sR0FBRyxDQUFDLElBQUlNLFVBQVUsS0FBSyxRQUFRLEVBQUU7WUFDN0RKLFFBQVEsQ0FBQ0QsS0FBSyxJQUFJLEdBQUcsR0FBR0UsWUFBWSxHQUFHLEdBQUcsR0FBR0EsWUFBWSxDQUFDLENBQUM7WUFDM0RJLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN6QjtLQUNGLEVBQUU7UUFBQ04sS0FBSztRQUFFRCxNQUFNO1FBQUVNLFVBQVU7UUFBRVQsUUFBUSxDQUFDRixDQUFDO1FBQUVFLFFBQVEsQ0FBQ0QsQ0FBQztRQUFFRyxLQUFLO0tBQUMsQ0FBQyxDQUFDO0lBQy9ELHFCQUNFLDhEQUFDaUIsU0FBTztRQUFDQyxTQUFTLEVBQUUsRUFBQyxDQUFjVCxNQUF3QixDQUFwQ3ZCLHlFQUFRLEVBQUMsR0FBQyxDQUEyQixRQUF6QnVCLE9BQU8sSUFBSXZCLDhFQUFhLENBQUU7a0JBQzNELDRFQUFDbUMsS0FBRztZQUNGQyxLQUFLLEVBQUMsNEJBQTRCO1lBQ2xDdEIsS0FBSyxFQUFDLE1BQU07WUFDWkMsTUFBTSxFQUFDLE1BQU07WUFDYnNCLE9BQU8sRUFBQyxhQUFhO1lBQ3JCTCxTQUFTLEVBQUVoQyx5RUFBUTtZQUNuQnVDLEtBQUssRUFBRTtnQkFBRUMsSUFBSSxFQUFFaEMsS0FBSztnQkFBRWlDLE1BQU0sRUFBRTdCLFFBQVEsQ0FBQ0QsQ0FBQztnQkFBRStCLElBQUksRUFBRTlCLFFBQVEsQ0FBQ0YsQ0FBQzthQUFFOzs4QkFFNUQsOERBQUNpQyxNQUFJO29CQUFDQyxDQUFDLEVBQUMseXlCQUF5eUI7Ozs7O3lCQUFHOzhCQUNwekIsOERBQUNELE1BQUk7b0JBQUNDLENBQUMsRUFBQyxpVUFBaVU7Ozs7O3lCQUFHOzs7Ozs7aUJBQ3hVOzs7OzthQUNFLENBQ1Y7Q0FDSDtHQS9FS3JDLGNBQWM7O1FBR1FWLDJEQUFhOzs7QUFIbkNVLEtBQUFBLGNBQWM7QUFpRnBCLCtEQUFlQSxjQUFjLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvRHZkU2NyZWVuc2F2ZXIvRHZkU2NyZWVuc2F2ZXIudHN4PzM4NDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVdpbmRvd1NpemUgZnJvbSBcImhvb2tzL3VzZVdpbmRvd1NpemVcIjtcclxuaW1wb3J0IHsgRnVuY3Rpb25Db21wb25lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwiLi9EdmRTY3JlZW5zYXZlci5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuY29uc3QgcmFuZG9tQ29sb3IgPSAoKSA9PiB7XHJcbiAgbGV0IG4gPSAoTWF0aC5yYW5kb20oKSAqIDB4ZmZmZmYgKiAxMDAwMDAwKS50b1N0cmluZygxNik7XHJcbiAgcmV0dXJuIFwiI1wiICsgbi5zbGljZSgwLCA2KTtcclxufTtcclxuXHJcbmNvbnN0IER2ZFNjcmVlbnNhdmVyOiBGdW5jdGlvbkNvbXBvbmVudCA9ICgpID0+IHtcclxuICBjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IHVzZVN0YXRlKFwiI2ZmZlwiKTtcclxuICBjb25zdCBbcG9zaXRpb24sIHNldFBvc2l0aW9uXSA9IHVzZVN0YXRlKHsgeDogMTAsIHk6IDEwIH0pO1xyXG4gIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdXNlV2luZG93U2l6ZSgpO1xyXG4gIGNvbnN0IFthbmdsZSwgc2V0QW5nbGVdID0gdXNlU3RhdGUoMzApO1xyXG4gIGNvbnN0IGluaXRpYWxBbmdsZSA9IDMwO1xyXG4gIGNvbnN0IFtzcGVlZCwgc2V0U3BlZWRdID0gdXNlU3RhdGUoNSk7XHJcbiAgY29uc3QgW2xhc3RCb3VuY2UsIHNldExhc3RCb3VuY2VdID0gdXNlU3RhdGUoXCJub25lXCIpO1xyXG4gIGNvbnN0IFtwZXJmZWN0LCBzZXRQZXJmZWN0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCB0aW1lcjEgPSBzZXRUaW1lb3V0KFxyXG4gICAgICAoKSA9PlxyXG4gICAgICAgIHNldFBvc2l0aW9uKHtcclxuICAgICAgICAgIHg6IHBvc2l0aW9uLnggKyBNYXRoLmNvcygoYW5nbGUgKiBNYXRoLlBJKSAvIDE4MCkgKiBzcGVlZCxcclxuICAgICAgICAgIHk6IHBvc2l0aW9uLnkgKyBNYXRoLnNpbigoYW5nbGUgKiBNYXRoLlBJKSAvIDE4MCkgKiBzcGVlZCxcclxuICAgICAgICB9KSxcclxuICAgICAgMTBcclxuICAgICk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGltZXIxKTtcclxuICAgIH07XHJcbiAgfSwgW2FuZ2xlLCBwb3NpdGlvbiwgc3BlZWRdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldENvbG9yKHJhbmRvbUNvbG9yKCkpO1xyXG4gIH0sIFtsYXN0Qm91bmNlXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocGVyZmVjdCkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBzZXRQZXJmZWN0KGZhbHNlKTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcbiAgfSwgW3BlcmZlY3RdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChcclxuICAgICAgd2lkdGggPiAwICYmXHJcbiAgICAgIGhlaWdodCA+IDAgJiZcclxuICAgICAgKChwb3NpdGlvbi54ICsgMTExID49IHdpZHRoICYmIHBvc2l0aW9uLnkgKyA3MiA+PSBoZWlnaHQpIHx8XHJcbiAgICAgICAgKHBvc2l0aW9uLnggPD0gMCAmJiBwb3NpdGlvbi55IDw9IDApIHx8XHJcbiAgICAgICAgKHBvc2l0aW9uLnggKyAxMTEgPj0gd2lkdGggJiYgcG9zaXRpb24ueSA8PSAwKSB8fFxyXG4gICAgICAgIChwb3NpdGlvbi54IDw9IDAgJiYgcG9zaXRpb24ueSArIDcyID49IGhlaWdodCkpXHJcbiAgICApIHtcclxuICAgICAgc2V0UGVyZmVjdCh0cnVlKTtcclxuICAgIH1cclxuICAgIGlmIChwb3NpdGlvbi54ICsgMTExLTMwID49IHdpZHRoICYmIHdpZHRoID4gMCAmJiBsYXN0Qm91bmNlICE9PSBcInJpZ2h0XCIpIHtcclxuICAgICAgc2V0QW5nbGUoYW5nbGUgPj0gOTAgPyAxODAgKyBpbml0aWFsQW5nbGUgOiAxODAgLSBpbml0aWFsQW5nbGUpO1xyXG4gICAgICBzZXRMYXN0Qm91bmNlKFwicmlnaHRcIik7XHJcbiAgICB9XHJcbiAgICBpZiAocG9zaXRpb24ueSArIDcyLTMwID49IGhlaWdodCAmJiBoZWlnaHQgPiAwICYmIGxhc3RCb3VuY2UgIT09IFwidG9wXCIpIHtcclxuICAgICAgc2V0QW5nbGUoYW5nbGUgPj0gOTAgPyAxODAgKyBpbml0aWFsQW5nbGUgOiAzNjAgLSBpbml0aWFsQW5nbGUpO1xyXG4gICAgICBzZXRMYXN0Qm91bmNlKFwidG9wXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKHBvc2l0aW9uLnggPD0gLTIgJiYgd2lkdGggPiAwICYmIGxhc3RCb3VuY2UgIT09IFwibGVmdFwiKSB7XHJcbiAgICAgIHNldEFuZ2xlKGFuZ2xlID49IDE4MCA/IDM2MCAtIGluaXRpYWxBbmdsZSA6IGluaXRpYWxBbmdsZSk7XHJcbiAgICAgIHNldExhc3RCb3VuY2UoXCJsZWZ0XCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKHBvc2l0aW9uLnkgPD0gLTIgJiYgaGVpZ2h0ID4gMCAmJiBsYXN0Qm91bmNlICE9PSBcImJvdHRvbVwiKSB7XHJcbiAgICAgIHNldEFuZ2xlKGFuZ2xlID49IDI3MCA/IGluaXRpYWxBbmdsZSA6IDE4MCAtIGluaXRpYWxBbmdsZSk7XHJcbiAgICAgIHNldExhc3RCb3VuY2UoXCJib3R0b21cIik7XHJcbiAgICB9XHJcbiAgfSwgW2FuZ2xlLCBoZWlnaHQsIGxhc3RCb3VuY2UsIHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIHdpZHRoXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YCR7Y3NzLnJvb3R9ICR7cGVyZmVjdCAmJiBjc3MucGVyZmVjdEJnfWB9PlxyXG4gICAgICA8c3ZnXHJcbiAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICB2aWV3Qm94PVwiMCAwIDIxMCAxMDdcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y3NzLmxvZ299XHJcbiAgICAgICAgc3R5bGU9e3sgZmlsbDogY29sb3IsIGJvdHRvbTogcG9zaXRpb24ueSwgbGVmdDogcG9zaXRpb24ueCB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPHBhdGggZD1cIk0xMTguODk1LDIwLjM0NmMwLDAtMTMuNzQzLDE2LjkyMi0xMy4wNCwxOC4wMDFjMC45NzUtMS4wNzktNC45MzQtMTguMTg2LTQuOTM0LTE4LjE4NnMtMS4yMzMtMy41OTctNS4xMDItMTUuMzg3SDgxLjgxSDQ3LjgxMkgyMi4xNzVsLTIuNTYsMTEuMDY4aDE5LjI5OWg0LjU3OWMxMi40MTUsMCwxOS45OTUsNS4xMzIsMTcuODc4LDE0LjIyNWMtMi4yODcsOS45MDEtMTMuMTIzLDE0LjEyOC0yNC42NjUsMTQuMTI4SDMyLjM5bDUuNTUyLTI0LjIwOEgxOC42NDdsLTguMTkyLDM1LjM2OGgyNy4zOThjMjAuNjEyLDAsNDAuMTY2LTExLjA2Nyw0My42OTItMjUuMjg4YzAuNjE3LTIuNjE0LDAuNTMtOS4xODUtMS4wNTQtMTMuMDUzYzAtMC4wOTMtMC4wOTEtMC4yNzEtMC4xNzgtMC41MzdjLTAuMDg3LTAuMDkzLTAuMTc4LTAuNzIyLDAuMTc4LTAuODE0YzAuMTcyLTAuMDkyLDAuNTI1LDAuMjcxLDAuNTI1LDAuMzU4YzAsMCwwLjE3OSwwLjQ1NiwwLjM1MSwwLjgxM2wxNy40NCw1MC4zMTVsNDQuNDA0LTUxLjIxNmwxOC43NjEtMC4wOTJoNC41NzljMTIuNDI0LDAsMjAuMDksNS4xMzIsMTcuOTY5LDE0LjIyNWMtMi4yOSw5LjkwMS0xMy4yMDUsMTQuMTI4LTI0Ljc1LDE0LjEyOGgtNC40MDVMMTYxLDE5Ljk4N2gtMTkuMjg3bC04LjE5OCwzNS4zNjhoMjcuMzk4YzIwLjYxMSwwLDQwLjM0My0xMS4wNjcsNDMuNjA0LTI1LjI4OGMzLjM0Ny0xNC4yMjUtMTEuMTAxLTI1LjI5My0zMS44OS0yNS4yOTNoLTE4LjE0M2gtMjIuNzI3QzEyMC45MjMsMTcuODIzLDExOC44OTUsMjAuMzQ2LDExOC44OTUsMjAuMzQ2TDExOC44OTUsMjAuMzQ2elwiIC8+XHJcbiAgICAgICAgPHBhdGggZD1cIk05OS40MjQsNjcuMzI5QzQ3LjI4MSw2Ny4zMjksNSw3My40NDksNSw4MS4wMTJjMCw3LjU1OCw0Mi4yODEsMTMuNjc4LDk0LjQyNCwxMy42NzhjNTIuMjM5LDAsOTQuNTI0LTYuMTIsOTQuNTI0LTEzLjY3OEMxOTMuOTQ5LDczLjQ0OSwxNTEuNjY0LDY3LjMyOSw5OS40MjQsNjcuMzI5eiBNOTYuMDc4LDg1Ljg3M2MtMTEuOTgsMC0yMS41OC0yLjA3Mi0yMS41OC00LjU5NWMwLTIuNTIzLDkuNTk5LTQuNTksMjEuNTgtNC41OWMxMS44ODgsMCwyMS40OTgsMi4wNjYsMjEuNDk4LDQuNTlDMTE3LjU3Niw4My44MDEsMTA3Ljk2Niw4NS44NzMsOTYuMDc4LDg1Ljg3M3pcIiAvPlxyXG4gICAgICA8L3N2Zz5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHZkU2NyZWVuc2F2ZXI7XHJcbiJdLCJuYW1lcyI6WyJ1c2VXaW5kb3dTaXplIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjc3MiLCJyYW5kb21Db2xvciIsIm4iLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzbGljZSIsIkR2ZFNjcmVlbnNhdmVyIiwiY29sb3IiLCJzZXRDb2xvciIsIngiLCJ5IiwicG9zaXRpb24iLCJzZXRQb3NpdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwiYW5nbGUiLCJzZXRBbmdsZSIsImluaXRpYWxBbmdsZSIsInNwZWVkIiwic2V0U3BlZWQiLCJsYXN0Qm91bmNlIiwic2V0TGFzdEJvdW5jZSIsInBlcmZlY3QiLCJzZXRQZXJmZWN0IiwidGltZXIxIiwic2V0VGltZW91dCIsImNvcyIsIlBJIiwic2luIiwiY2xlYXJUaW1lb3V0Iiwic2VjdGlvbiIsImNsYXNzTmFtZSIsInJvb3QiLCJwZXJmZWN0QmciLCJzdmciLCJ4bWxucyIsInZpZXdCb3giLCJsb2dvIiwic3R5bGUiLCJmaWxsIiwiYm90dG9tIiwibGVmdCIsInBhdGgiLCJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Projects/DvdScreensaver/DvdScreensaver.tsx\n"));

/***/ })

});