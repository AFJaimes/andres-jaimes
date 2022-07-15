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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hooks/useWindowSize */ \"./src/hooks/useWindowSize.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _DvdScreensaver_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DvdScreensaver.module.scss */ \"./src/components/Projects/DvdScreensaver/DvdScreensaver.module.scss\");\n/* harmony import */ var _DvdScreensaver_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_DvdScreensaver_module_scss__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar randomColor = function() {\n    var n = (Math.random() * 0xfffff * 1000000).toString(16);\n    return \"#\" + n.slice(0, 6);\n};\nvar DvdScreensaver = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"#fff\"), color = ref[0], setColor = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        x: 10,\n        y: 10\n    }), position = ref1[0], setPosition = ref1[1];\n    var ref2 = (0,hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), width = ref2.width, height = ref2.height;\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(30), angle = ref3[0], setAngle = ref3[1];\n    var initialAngle = 30;\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(5), speed = ref4[0], setSpeed = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"none\"), lastBounce = ref5[0], setLastBounce = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), perfect = ref6[0], setPerfect = ref6[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var timer1 = setTimeout(function() {\n            return setPosition({\n                x: position.x + Math.cos(angle * Math.PI / 180) * speed,\n                y: position.y + Math.sin(angle * Math.PI / 180) * speed\n            });\n        }, 10);\n        return function() {\n            clearTimeout(timer1);\n        };\n    }, [\n        angle,\n        position,\n        speed\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setColor(randomColor());\n    }, [\n        lastBounce\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (perfect) {\n            setTimeout(function() {\n                setPerfect(false);\n            }, 1000);\n        }\n    }, [\n        perfect\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (width > 0 && height > 0 && (position.x + 111 >= width && position.y + 72 >= height || position.x <= 0 && position.y <= 0 || position.x + 111 >= width && position.y <= 0 || position.x <= 0 && position.y + 72 >= height)) {\n            setPerfect(true);\n        }\n        if (position.x + 111 + 45 >= width && width > 0 && lastBounce !== \"right\") {\n            setAngle(angle >= 90 ? 180 + initialAngle : 180 - initialAngle);\n            setLastBounce(\"right\");\n        }\n        if (position.y + 72 + 40 >= height && height > 0 && lastBounce !== \"top\") {\n            setAngle(angle >= 90 ? 180 + initialAngle : 360 - initialAngle);\n            setLastBounce(\"top\");\n        }\n        if (position.x <= -2 && width > 0 && lastBounce !== \"left\") {\n            setAngle(angle >= 180 ? 360 - initialAngle : initialAngle);\n            setLastBounce(\"left\");\n        }\n        if (position.y <= -2 && height > 0 && lastBounce !== \"bottom\") {\n            setAngle(angle >= 270 ? initialAngle : 180 - initialAngle);\n            setLastBounce(\"bottom\");\n        }\n    }, [\n        angle,\n        height,\n        lastBounce,\n        position.x,\n        position.y,\n        width\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"\".concat((_DvdScreensaver_module_scss__WEBPACK_IMPORTED_MODULE_3___default().root), \" \").concat(perfect && (_DvdScreensaver_module_scss__WEBPACK_IMPORTED_MODULE_3___default().perfectBg)),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n            xmlns: \"http://www.w3.org/2000/svg\",\n            width: \"100%\",\n            height: \"100%\",\n            viewBox: \"0 0 210 107\",\n            className: (_DvdScreensaver_module_scss__WEBPACK_IMPORTED_MODULE_3___default().logo),\n            style: {\n                fill: color,\n                bottom: position.y,\n                left: position.x\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                    d: \"M118.895,20.346c0,0-13.743,16.922-13.04,18.001c0.975-1.079-4.934-18.186-4.934-18.186s-1.233-3.597-5.102-15.387H81.81H47.812H22.175l-2.56,11.068h19.299h4.579c12.415,0,19.995,5.132,17.878,14.225c-2.287,9.901-13.123,14.128-24.665,14.128H32.39l5.552-24.208H18.647l-8.192,35.368h27.398c20.612,0,40.166-11.067,43.692-25.288c0.617-2.614,0.53-9.185-1.054-13.053c0-0.093-0.091-0.271-0.178-0.537c-0.087-0.093-0.178-0.722,0.178-0.814c0.172-0.092,0.525,0.271,0.525,0.358c0,0,0.179,0.456,0.351,0.813l17.44,50.315l44.404-51.216l18.761-0.092h4.579c12.424,0,20.09,5.132,17.969,14.225c-2.29,9.901-13.205,14.128-24.75,14.128h-4.405L161,19.987h-19.287l-8.198,35.368h27.398c20.611,0,40.343-11.067,43.604-25.288c3.347-14.225-11.101-25.293-31.89-25.293h-18.143h-22.727C120.923,17.823,118.895,20.346,118.895,20.346L118.895,20.346z\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\users\\\\Documents\\\\GitHub\\\\afjaimes\\\\src\\\\components\\\\Projects\\\\DvdScreensaver\\\\DvdScreensaver.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                    d: \"M99.424,67.329C47.281,67.329,5,73.449,5,81.012c0,7.558,42.281,13.678,94.424,13.678c52.239,0,94.524-6.12,94.524-13.678C193.949,73.449,151.664,67.329,99.424,67.329z M96.078,85.873c-11.98,0-21.58-2.072-21.58-4.595c0-2.523,9.599-4.59,21.58-4.59c11.888,0,21.498,2.066,21.498,4.59C117.576,83.801,107.966,85.873,96.078,85.873z\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\users\\\\Documents\\\\GitHub\\\\afjaimes\\\\src\\\\components\\\\Projects\\\\DvdScreensaver\\\\DvdScreensaver.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\users\\\\Documents\\\\GitHub\\\\afjaimes\\\\src\\\\components\\\\Projects\\\\DvdScreensaver\\\\DvdScreensaver.tsx\",\n            lineNumber: 76,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\users\\\\Documents\\\\GitHub\\\\afjaimes\\\\src\\\\components\\\\Projects\\\\DvdScreensaver\\\\DvdScreensaver.tsx\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, _this);\n};\n_s(DvdScreensaver, \"N9FRdcK7cEcpPVXW4vQ6Ln1EVA4=\", false, function() {\n    return [\n        hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = DvdScreensaver;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DvdScreensaver);\nvar _c;\n$RefreshReg$(_c, \"DvdScreensaver\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0cy9EdmRTY3JlZW5zYXZlci9EdmRTY3JlZW5zYXZlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBZ0Q7QUFDZTtBQUNoQjs7QUFFL0MsSUFBTUksV0FBVyxHQUFHLFdBQU07SUFDeEIsSUFBSUMsQ0FBQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsTUFBTSxFQUFFLEdBQUcsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsRUFBRSxDQUFDO0lBQ3hELE9BQU8sR0FBRyxHQUFHSCxDQUFDLENBQUNJLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Q0FDNUI7QUFFRCxJQUFNQyxjQUFjLEdBQXNCLFdBQU07O0lBQzlDLElBQTBCUixHQUFnQixHQUFoQkEsK0NBQVEsQ0FBQyxNQUFNLENBQUMsRUFBbkNTLEtBQUssR0FBY1QsR0FBZ0IsR0FBOUIsRUFBRVUsUUFBUSxHQUFJVixHQUFnQixHQUFwQjtJQUN0QixJQUFnQ0EsSUFBMEIsR0FBMUJBLCtDQUFRLENBQUM7UUFBRVcsQ0FBQyxFQUFFLEVBQUU7UUFBRUMsQ0FBQyxFQUFFLEVBQUU7S0FBRSxDQUFDLEVBQW5EQyxRQUFRLEdBQWlCYixJQUEwQixHQUEzQyxFQUFFYyxXQUFXLEdBQUlkLElBQTBCLEdBQTlCO0lBQzVCLElBQTBCRixJQUFlLEdBQWZBLCtEQUFhLEVBQUUsRUFBakNpQixLQUFLLEdBQWFqQixJQUFlLENBQWpDaUIsS0FBSyxFQUFFQyxNQUFNLEdBQUtsQixJQUFlLENBQTFCa0IsTUFBTTtJQUNyQixJQUEwQmhCLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBL0JpQixLQUFLLEdBQWNqQixJQUFZLEdBQTFCLEVBQUVrQixRQUFRLEdBQUlsQixJQUFZLEdBQWhCO0lBQ3RCLElBQU1tQixZQUFZLEdBQUcsRUFBRTtJQUN2QixJQUEwQm5CLElBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFBOUJvQixLQUFLLEdBQWNwQixJQUFXLEdBQXpCLEVBQUVxQixRQUFRLEdBQUlyQixJQUFXLEdBQWY7SUFDdEIsSUFBb0NBLElBQWdCLEdBQWhCQSwrQ0FBUSxDQUFDLE1BQU0sQ0FBQyxFQUE3Q3NCLFVBQVUsR0FBbUJ0QixJQUFnQixHQUFuQyxFQUFFdUIsYUFBYSxHQUFJdkIsSUFBZ0IsR0FBcEI7SUFDaEMsSUFBOEJBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBdEN3QixPQUFPLEdBQWdCeEIsSUFBZSxHQUEvQixFQUFFeUIsVUFBVSxHQUFJekIsSUFBZSxHQUFuQjtJQUUxQkQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBSTJCLE1BQU0sR0FBR0MsVUFBVSxDQUNyQjttQkFDRWIsV0FBVyxDQUFDO2dCQUNWSCxDQUFDLEVBQUVFLFFBQVEsQ0FBQ0YsQ0FBQyxHQUFHUCxJQUFJLENBQUN3QixHQUFHLENBQUMsS0FBTSxHQUFHeEIsSUFBSSxDQUFDeUIsRUFBRSxHQUFJLEdBQUcsQ0FBQyxHQUFHVCxLQUFLO2dCQUN6RFIsQ0FBQyxFQUFFQyxRQUFRLENBQUNELENBQUMsR0FBR1IsSUFBSSxDQUFDMEIsR0FBRyxDQUFDLEtBQU0sR0FBRzFCLElBQUksQ0FBQ3lCLEVBQUUsR0FBSSxHQUFHLENBQUMsR0FBR1QsS0FBSzthQUMxRCxDQUFDO1NBQUEsRUFDSixFQUFFLENBQ0g7UUFDRCxPQUFPLFdBQU07WUFDWFcsWUFBWSxDQUFDTCxNQUFNLENBQUMsQ0FBQztTQUN0QixDQUFDO0tBQ0gsRUFBRTtRQUFDVCxLQUFLO1FBQUVKLFFBQVE7UUFBRU8sS0FBSztLQUFDLENBQUMsQ0FBQztJQUU3QnJCLGdEQUFTLENBQUMsV0FBTTtRQUNkVyxRQUFRLENBQUNSLFdBQVcsRUFBRSxDQUFDLENBQUM7S0FDekIsRUFBRTtRQUFDb0IsVUFBVTtLQUFDLENBQUMsQ0FBQztJQUVqQnZCLGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQUl5QixPQUFPLEVBQUU7WUFDWEcsVUFBVSxDQUFDLFdBQU07Z0JBQ2ZGLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNuQixFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ1Y7S0FDRixFQUFFO1FBQUNELE9BQU87S0FBQyxDQUFDLENBQUM7SUFFZHpCLGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQ0VnQixLQUFLLEdBQUcsQ0FBQyxJQUNUQyxNQUFNLEdBQUcsQ0FBQyxJQUNWLENBQUMsUUFBUyxDQUFDTCxDQUFDLEdBQUcsR0FBRyxJQUFJSSxLQUFLLElBQUlGLFFBQVEsQ0FBQ0QsQ0FBQyxHQUFHLEVBQUUsSUFBSUksTUFBTSxJQUNyREgsUUFBUSxDQUFDRixDQUFDLElBQUksQ0FBQyxJQUFJRSxRQUFRLENBQUNELENBQUMsSUFBSSxDQUFDLElBQ2xDQyxRQUFRLENBQUNGLENBQUMsR0FBRyxHQUFHLElBQUlJLEtBQUssSUFBSUYsUUFBUSxDQUFDRCxDQUFDLElBQUksQ0FBQyxJQUM1Q0MsUUFBUSxDQUFDRixDQUFDLElBQUksQ0FBQyxJQUFJRSxRQUFRLENBQUNELENBQUMsR0FBRyxFQUFFLElBQUlJLE1BQU0sQ0FBRSxFQUNqRDtZQUNBUyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbEI7UUFDRCxJQUFJWixRQUFRLENBQUNGLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxJQUFJSSxLQUFLLElBQUlBLEtBQUssR0FBRyxDQUFDLElBQUlPLFVBQVUsS0FBSyxPQUFPLEVBQUU7WUFDekVKLFFBQVEsQ0FBQ0QsS0FBSyxJQUFJLEVBQUUsR0FBRyxHQUFHLEdBQUdFLFlBQVksR0FBRyxHQUFHLEdBQUdBLFlBQVksQ0FBQyxDQUFDO1lBQ2hFSSxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDeEI7UUFDRCxJQUFJVixRQUFRLENBQUNELENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJSSxNQUFNLElBQUlBLE1BQU0sR0FBRyxDQUFDLElBQUlNLFVBQVUsS0FBSyxLQUFLLEVBQUU7WUFDeEVKLFFBQVEsQ0FBQ0QsS0FBSyxJQUFJLEVBQUUsR0FBRyxHQUFHLEdBQUdFLFlBQVksR0FBRyxHQUFHLEdBQUdBLFlBQVksQ0FBQyxDQUFDO1lBQ2hFSSxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEI7UUFDRCxJQUFJVixRQUFRLENBQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSUksS0FBSyxHQUFHLENBQUMsSUFBSU8sVUFBVSxLQUFLLE1BQU0sRUFBRTtZQUMxREosUUFBUSxDQUFDRCxLQUFLLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBR0UsWUFBWSxHQUFHQSxZQUFZLENBQUMsQ0FBQztZQUMzREksYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3ZCO1FBQ0QsSUFBSVYsUUFBUSxDQUFDRCxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUlJLE1BQU0sR0FBRyxDQUFDLElBQUlNLFVBQVUsS0FBSyxRQUFRLEVBQUU7WUFDN0RKLFFBQVEsQ0FBQ0QsS0FBSyxJQUFJLEdBQUcsR0FBR0UsWUFBWSxHQUFHLEdBQUcsR0FBR0EsWUFBWSxDQUFDLENBQUM7WUFDM0RJLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN6QjtLQUNGLEVBQUU7UUFBQ04sS0FBSztRQUFFRCxNQUFNO1FBQUVNLFVBQVU7UUFBRVQsUUFBUSxDQUFDRixDQUFDO1FBQUVFLFFBQVEsQ0FBQ0QsQ0FBQztRQUFFRyxLQUFLO0tBQUMsQ0FBQyxDQUFDO0lBQy9ELHFCQUNFLDhEQUFDaUIsU0FBTztRQUFDQyxTQUFTLEVBQUUsRUFBQyxDQUFjVCxNQUF3QixDQUFwQ3ZCLHlFQUFRLEVBQUMsR0FBQyxDQUEyQixRQUF6QnVCLE9BQU8sSUFBSXZCLDhFQUFhLENBQUU7a0JBQzNELDRFQUFDbUMsS0FBRztZQUNGQyxLQUFLLEVBQUMsNEJBQTRCO1lBQ2xDdEIsS0FBSyxFQUFDLE1BQU07WUFDWkMsTUFBTSxFQUFDLE1BQU07WUFDYnNCLE9BQU8sRUFBQyxhQUFhO1lBQ3JCTCxTQUFTLEVBQUVoQyx5RUFBUTtZQUNuQnVDLEtBQUssRUFBRTtnQkFBRUMsSUFBSSxFQUFFaEMsS0FBSztnQkFBRWlDLE1BQU0sRUFBRTdCLFFBQVEsQ0FBQ0QsQ0FBQztnQkFBRStCLElBQUksRUFBRTlCLFFBQVEsQ0FBQ0YsQ0FBQzthQUFFOzs4QkFFNUQsOERBQUNpQyxNQUFJO29CQUFDQyxDQUFDLEVBQUMseXlCQUF5eUI7Ozs7O3lCQUFHOzhCQUNwekIsOERBQUNELE1BQUk7b0JBQUNDLENBQUMsRUFBQyxpVUFBaVU7Ozs7O3lCQUFHOzs7Ozs7aUJBQ3hVOzs7OzthQUNFLENBQ1Y7Q0FDSDtHQS9FS3JDLGNBQWM7O1FBR1FWLDJEQUFhOzs7QUFIbkNVLEtBQUFBLGNBQWM7QUFpRnBCLCtEQUFlQSxjQUFjLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvRHZkU2NyZWVuc2F2ZXIvRHZkU2NyZWVuc2F2ZXIudHN4PzM4NDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVdpbmRvd1NpemUgZnJvbSBcImhvb2tzL3VzZVdpbmRvd1NpemVcIjtcclxuaW1wb3J0IHsgRnVuY3Rpb25Db21wb25lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwiLi9EdmRTY3JlZW5zYXZlci5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuY29uc3QgcmFuZG9tQ29sb3IgPSAoKSA9PiB7XHJcbiAgbGV0IG4gPSAoTWF0aC5yYW5kb20oKSAqIDB4ZmZmZmYgKiAxMDAwMDAwKS50b1N0cmluZygxNik7XHJcbiAgcmV0dXJuIFwiI1wiICsgbi5zbGljZSgwLCA2KTtcclxufTtcclxuXHJcbmNvbnN0IER2ZFNjcmVlbnNhdmVyOiBGdW5jdGlvbkNvbXBvbmVudCA9ICgpID0+IHtcclxuICBjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IHVzZVN0YXRlKFwiI2ZmZlwiKTtcclxuICBjb25zdCBbcG9zaXRpb24sIHNldFBvc2l0aW9uXSA9IHVzZVN0YXRlKHsgeDogMTAsIHk6IDEwIH0pO1xyXG4gIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdXNlV2luZG93U2l6ZSgpO1xyXG4gIGNvbnN0IFthbmdsZSwgc2V0QW5nbGVdID0gdXNlU3RhdGUoMzApO1xyXG4gIGNvbnN0IGluaXRpYWxBbmdsZSA9IDMwO1xyXG4gIGNvbnN0IFtzcGVlZCwgc2V0U3BlZWRdID0gdXNlU3RhdGUoNSk7XHJcbiAgY29uc3QgW2xhc3RCb3VuY2UsIHNldExhc3RCb3VuY2VdID0gdXNlU3RhdGUoXCJub25lXCIpO1xyXG4gIGNvbnN0IFtwZXJmZWN0LCBzZXRQZXJmZWN0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCB0aW1lcjEgPSBzZXRUaW1lb3V0KFxyXG4gICAgICAoKSA9PlxyXG4gICAgICAgIHNldFBvc2l0aW9uKHtcclxuICAgICAgICAgIHg6IHBvc2l0aW9uLnggKyBNYXRoLmNvcygoYW5nbGUgKiBNYXRoLlBJKSAvIDE4MCkgKiBzcGVlZCxcclxuICAgICAgICAgIHk6IHBvc2l0aW9uLnkgKyBNYXRoLnNpbigoYW5nbGUgKiBNYXRoLlBJKSAvIDE4MCkgKiBzcGVlZCxcclxuICAgICAgICB9KSxcclxuICAgICAgMTBcclxuICAgICk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGltZXIxKTtcclxuICAgIH07XHJcbiAgfSwgW2FuZ2xlLCBwb3NpdGlvbiwgc3BlZWRdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldENvbG9yKHJhbmRvbUNvbG9yKCkpO1xyXG4gIH0sIFtsYXN0Qm91bmNlXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocGVyZmVjdCkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBzZXRQZXJmZWN0KGZhbHNlKTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcbiAgfSwgW3BlcmZlY3RdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChcclxuICAgICAgd2lkdGggPiAwICYmXHJcbiAgICAgIGhlaWdodCA+IDAgJiZcclxuICAgICAgKChwb3NpdGlvbi54ICsgMTExID49IHdpZHRoICYmIHBvc2l0aW9uLnkgKyA3MiA+PSBoZWlnaHQpIHx8XHJcbiAgICAgICAgKHBvc2l0aW9uLnggPD0gMCAmJiBwb3NpdGlvbi55IDw9IDApIHx8XHJcbiAgICAgICAgKHBvc2l0aW9uLnggKyAxMTEgPj0gd2lkdGggJiYgcG9zaXRpb24ueSA8PSAwKSB8fFxyXG4gICAgICAgIChwb3NpdGlvbi54IDw9IDAgJiYgcG9zaXRpb24ueSArIDcyID49IGhlaWdodCkpXHJcbiAgICApIHtcclxuICAgICAgc2V0UGVyZmVjdCh0cnVlKTtcclxuICAgIH1cclxuICAgIGlmIChwb3NpdGlvbi54ICsgMTExICsgNDUgPj0gd2lkdGggJiYgd2lkdGggPiAwICYmIGxhc3RCb3VuY2UgIT09IFwicmlnaHRcIikge1xyXG4gICAgICBzZXRBbmdsZShhbmdsZSA+PSA5MCA/IDE4MCArIGluaXRpYWxBbmdsZSA6IDE4MCAtIGluaXRpYWxBbmdsZSk7XHJcbiAgICAgIHNldExhc3RCb3VuY2UoXCJyaWdodFwiKTtcclxuICAgIH1cclxuICAgIGlmIChwb3NpdGlvbi55ICsgNzIgKyA0MCA+PSBoZWlnaHQgJiYgaGVpZ2h0ID4gMCAmJiBsYXN0Qm91bmNlICE9PSBcInRvcFwiKSB7XHJcbiAgICAgIHNldEFuZ2xlKGFuZ2xlID49IDkwID8gMTgwICsgaW5pdGlhbEFuZ2xlIDogMzYwIC0gaW5pdGlhbEFuZ2xlKTtcclxuICAgICAgc2V0TGFzdEJvdW5jZShcInRvcFwiKTtcclxuICAgIH1cclxuICAgIGlmIChwb3NpdGlvbi54IDw9IC0yICYmIHdpZHRoID4gMCAmJiBsYXN0Qm91bmNlICE9PSBcImxlZnRcIikge1xyXG4gICAgICBzZXRBbmdsZShhbmdsZSA+PSAxODAgPyAzNjAgLSBpbml0aWFsQW5nbGUgOiBpbml0aWFsQW5nbGUpO1xyXG4gICAgICBzZXRMYXN0Qm91bmNlKFwibGVmdFwiKTtcclxuICAgIH1cclxuICAgIGlmIChwb3NpdGlvbi55IDw9IC0yICYmIGhlaWdodCA+IDAgJiYgbGFzdEJvdW5jZSAhPT0gXCJib3R0b21cIikge1xyXG4gICAgICBzZXRBbmdsZShhbmdsZSA+PSAyNzAgPyBpbml0aWFsQW5nbGUgOiAxODAgLSBpbml0aWFsQW5nbGUpO1xyXG4gICAgICBzZXRMYXN0Qm91bmNlKFwiYm90dG9tXCIpO1xyXG4gICAgfVxyXG4gIH0sIFthbmdsZSwgaGVpZ2h0LCBsYXN0Qm91bmNlLCBwb3NpdGlvbi54LCBwb3NpdGlvbi55LCB3aWR0aF0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Ake2Nzcy5yb290fSAke3BlcmZlY3QgJiYgY3NzLnBlcmZlY3RCZ31gfT5cclxuICAgICAgPHN2Z1xyXG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgdmlld0JveD1cIjAgMCAyMTAgMTA3XCJcclxuICAgICAgICBjbGFzc05hbWU9e2Nzcy5sb2dvfVxyXG4gICAgICAgIHN0eWxlPXt7IGZpbGw6IGNvbG9yLCBib3R0b206IHBvc2l0aW9uLnksIGxlZnQ6IHBvc2l0aW9uLnggfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxwYXRoIGQ9XCJNMTE4Ljg5NSwyMC4zNDZjMCwwLTEzLjc0MywxNi45MjItMTMuMDQsMTguMDAxYzAuOTc1LTEuMDc5LTQuOTM0LTE4LjE4Ni00LjkzNC0xOC4xODZzLTEuMjMzLTMuNTk3LTUuMTAyLTE1LjM4N0g4MS44MUg0Ny44MTJIMjIuMTc1bC0yLjU2LDExLjA2OGgxOS4yOTloNC41NzljMTIuNDE1LDAsMTkuOTk1LDUuMTMyLDE3Ljg3OCwxNC4yMjVjLTIuMjg3LDkuOTAxLTEzLjEyMywxNC4xMjgtMjQuNjY1LDE0LjEyOEgzMi4zOWw1LjU1Mi0yNC4yMDhIMTguNjQ3bC04LjE5MiwzNS4zNjhoMjcuMzk4YzIwLjYxMiwwLDQwLjE2Ni0xMS4wNjcsNDMuNjkyLTI1LjI4OGMwLjYxNy0yLjYxNCwwLjUzLTkuMTg1LTEuMDU0LTEzLjA1M2MwLTAuMDkzLTAuMDkxLTAuMjcxLTAuMTc4LTAuNTM3Yy0wLjA4Ny0wLjA5My0wLjE3OC0wLjcyMiwwLjE3OC0wLjgxNGMwLjE3Mi0wLjA5MiwwLjUyNSwwLjI3MSwwLjUyNSwwLjM1OGMwLDAsMC4xNzksMC40NTYsMC4zNTEsMC44MTNsMTcuNDQsNTAuMzE1bDQ0LjQwNC01MS4yMTZsMTguNzYxLTAuMDkyaDQuNTc5YzEyLjQyNCwwLDIwLjA5LDUuMTMyLDE3Ljk2OSwxNC4yMjVjLTIuMjksOS45MDEtMTMuMjA1LDE0LjEyOC0yNC43NSwxNC4xMjhoLTQuNDA1TDE2MSwxOS45ODdoLTE5LjI4N2wtOC4xOTgsMzUuMzY4aDI3LjM5OGMyMC42MTEsMCw0MC4zNDMtMTEuMDY3LDQzLjYwNC0yNS4yODhjMy4zNDctMTQuMjI1LTExLjEwMS0yNS4yOTMtMzEuODktMjUuMjkzaC0xOC4xNDNoLTIyLjcyN0MxMjAuOTIzLDE3LjgyMywxMTguODk1LDIwLjM0NiwxMTguODk1LDIwLjM0NkwxMTguODk1LDIwLjM0NnpcIiAvPlxyXG4gICAgICAgIDxwYXRoIGQ9XCJNOTkuNDI0LDY3LjMyOUM0Ny4yODEsNjcuMzI5LDUsNzMuNDQ5LDUsODEuMDEyYzAsNy41NTgsNDIuMjgxLDEzLjY3OCw5NC40MjQsMTMuNjc4YzUyLjIzOSwwLDk0LjUyNC02LjEyLDk0LjUyNC0xMy42NzhDMTkzLjk0OSw3My40NDksMTUxLjY2NCw2Ny4zMjksOTkuNDI0LDY3LjMyOXogTTk2LjA3OCw4NS44NzNjLTExLjk4LDAtMjEuNTgtMi4wNzItMjEuNTgtNC41OTVjMC0yLjUyMyw5LjU5OS00LjU5LDIxLjU4LTQuNTljMTEuODg4LDAsMjEuNDk4LDIuMDY2LDIxLjQ5OCw0LjU5QzExNy41NzYsODMuODAxLDEwNy45NjYsODUuODczLDk2LjA3OCw4NS44NzN6XCIgLz5cclxuICAgICAgPC9zdmc+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IER2ZFNjcmVlbnNhdmVyO1xyXG4iXSwibmFtZXMiOlsidXNlV2luZG93U2l6ZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY3NzIiwicmFuZG9tQ29sb3IiLCJuIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic2xpY2UiLCJEdmRTY3JlZW5zYXZlciIsImNvbG9yIiwic2V0Q29sb3IiLCJ4IiwieSIsInBvc2l0aW9uIiwic2V0UG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsImFuZ2xlIiwic2V0QW5nbGUiLCJpbml0aWFsQW5nbGUiLCJzcGVlZCIsInNldFNwZWVkIiwibGFzdEJvdW5jZSIsInNldExhc3RCb3VuY2UiLCJwZXJmZWN0Iiwic2V0UGVyZmVjdCIsInRpbWVyMSIsInNldFRpbWVvdXQiLCJjb3MiLCJQSSIsInNpbiIsImNsZWFyVGltZW91dCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJyb290IiwicGVyZmVjdEJnIiwic3ZnIiwieG1sbnMiLCJ2aWV3Qm94IiwibG9nbyIsInN0eWxlIiwiZmlsbCIsImJvdHRvbSIsImxlZnQiLCJwYXRoIiwiZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Projects/DvdScreensaver/DvdScreensaver.tsx\n"));

/***/ })

});