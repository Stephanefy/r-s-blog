"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var _home_sti_my_next_js_blog_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var _hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useWindowDimension */ \"./hooks/useWindowDimension.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/sti/my-next-js-blog/web/components/Header.tsx\",\n    _templateObject,\n    _templateObject2,\n    _templateObject3,\n    _templateObject4,\n    _templateObject5,\n    _templateObject6,\n    _s = $RefreshSig$();\n\n/* eslint-disable react/no-unescaped-entities */\n\n\n\n\n\nvar Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject || (_templateObject = (0,_home_sti_my_next_js_blog_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  width: 100%;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n\"])));\n_c = Container;\nvar HeaderNav = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__[\"default\"].header(_templateObject2 || (_templateObject2 = (0,_home_sti_my_next_js_blog_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    display: flex;\\n    justify-content: center;\\n    background: #fff\\n    margin: auto;\\n    width: 1200px;\\n\\n    @media only screen and (max-width: 1170px) {\\n\\n      position: fixed;\\n      width: 100%;\\n      background-color: #fff;\\n      justify-content: space-between;\\n      align-items: center;\\n      padding:0 2em;\\n      z-index: 99;\\n\\n    }\\n\"])));\n_c2 = HeaderNav;\nvar NavBar = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__[\"default\"].nav(_templateObject3 || (_templateObject3 = (0,_home_sti_my_next_js_blog_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    display: flex;\\n    justify-content: space-around;\\n    align-items: center;\\n    width: 100%;\\n    margin: auto;\\n\\n\\n    @media only screen and (max-width: 1170px) {\\n          position: fixed;\\n          left: -100%;\\n          top: 1rem;\\n          height: 500px;\\n          flex-direction: column;\\n          background-color: #fff;\\n          width: 100%;\\n          border-radius: 10px;\\n          text-align: center;\\n          transition: 0.1s;\\n          left: \", \";\\n\\n        \\n          .nav-item {\\n                margin: \", \";\\n          }\\n      }\\n\"])), function (props) {\n  return props.windowWidth < 1170 && props.isOpen && 0;\n}, function (props) {\n  return props.windowWidth < 1170 && props.isOpen && \"2.5rem 0\";\n});\n_c3 = NavBar;\nvar ListItem = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__[\"default\"].li(_templateObject4 || (_templateObject4 = (0,_home_sti_my_next_js_blog_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    list-style-type: none;\\n    cursor: pointer;\\n    font-size: 1.25em;\\n    &:hover {\\n        text-decoration: underline;\\n    }\\n\"])));\n_c4 = ListItem;\nvar Hamburger = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject5 || (_templateObject5 = (0,_home_sti_my_next_js_blog_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    display: none;\\n    opacity: \", \";\\n    @media only screen and (max-width: 1170px) {\\n      display: block;\\n      cursor: pointer;\\n\\n      & :nth-of-type(2) {\\n        opacity: \", \";\\n      }\\n      & :nth-of-type(1) {\\n          transform: \", \";\\n      }\\n\\n      & :nth-of-type(3) {\\n          transform: \", \";\\n      }\\n    }  \\n\\n\"])), function (props) {\n  return props.windowWidth > 1170 ? 0 : 1;\n}, function (props) {\n  return props.isOpen && 0;\n}, function (props) {\n  return props.isOpen && 'translateY(8px) rotate(45deg)';\n}, function (props) {\n  return props.isOpen && 'translateY(-8px) rotate(-45deg)';\n});\n_c5 = Hamburger;\nvar Bar = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__[\"default\"].span(_templateObject6 || (_templateObject6 = (0,_home_sti_my_next_js_blog_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    display: block;\\n    width: 25px;\\n    height: 3px;\\n    margin: 5px auto;\\n    -webkit-transition: all 0.3s ease-in-out;\\n    transition: all 0.3s ease-in-out;\\n    background-color: #101010;\\n\"])));\n_c6 = Bar;\nvar navLinks = [{\n  id: 1,\n  name: \"ホーム\",\n  path: \"/\"\n}, {\n  id: 2,\n  name: \"à propos de moi\",\n  path: \"/about\"\n}, {\n  id: 3,\n  name: \"旅行\",\n  path: \"/travel\"\n} // {\n//   name: \"Blog\",\n//   path: \"/blog\",\n// },\n// {\n//   id:4,\n//   name: \"Contact\",\n//   path: \"#contact\",\n// },\n];\nfunction Header() {\n  _s();\n\n  var _this = this;\n\n  var _useWindowDimensions = (0,_hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(),\n      width = _useWindowDimensions.width,\n      height = _useWindowDimensions.height;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Container, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(HeaderNav, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"brand\",\n        style: {\n          cursor: 'pointer'\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n          href: \"/\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h4\", {\n            children: \"Lilly's blog\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 150,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 149,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 148,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(NavBar, {\n          className: \"nav-menu\",\n          windowWidth: width ? width : 0,\n          isOpen: isOpen,\n          children: navLinks.map(function (link, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n              href: link.path,\n              passHref: true,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(ListItem, {\n                className: \"nav-item\",\n                children: link.name\n              }, link.id, false, {\n                fileName: _jsxFileName,\n                lineNumber: 162,\n                columnNumber: 21\n              }, _this)\n            }, link.id, false, {\n              fileName: _jsxFileName,\n              lineNumber: 161,\n              columnNumber: 19\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 154,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 153,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Hamburger, {\n        id: \"hamburger\",\n        windowWidth: width ? width : 0,\n        isOpen: isOpen,\n        onClick: function onClick() {\n          return setIsOpen(!isOpen);\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Bar, {\n          className: \"bar\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 175,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Bar, {\n          className: \"bar\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 176,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Bar, {\n          className: \"bar\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 177,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 169,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 146,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Header, \"SBoS8HZ08UheWOnbU3A74PzGRCI=\", false, function () {\n  return [_hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n});\n\n_c7 = Header;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"HeaderNav\");\n$RefreshReg$(_c3, \"NavBar\");\n$RefreshReg$(_c4, \"ListItem\");\n$RefreshReg$(_c5, \"Hamburger\");\n$RefreshReg$(_c6, \"Bar\");\n$RefreshReg$(_c7, \"Header\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBYSxVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDN0IsZ0NBQ0ksOERBQUMsa0RBQUQ7QUFBb0Isa0JBQUksRUFBRUQsSUFBSSxDQUFDUCxJQUEvQjtBQUFxQyxzQkFBUSxNQUE3QztBQUFBLHFDQUNFLDhEQUFDLFFBQUQ7QUFBd0IseUJBQVMsRUFBQyxVQUFsQztBQUFBLDBCQUE4Q08sSUFBSSxDQUFDUjtBQUFuRCxpQkFBZVEsSUFBSSxDQUFDVCxFQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsZUFBV1MsSUFBSSxDQUFDVCxFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKO0FBS0QsV0FOQTtBQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkYsZUFzQkUsOERBQUMsU0FBRDtBQUNFLFVBQUUsRUFBQyxXQURMO0FBRUUsbUJBQVcsRUFBRUksS0FBSyxHQUFHQSxLQUFILEdBQVcsQ0FGL0I7QUFHRSxjQUFNLEVBQUVYLE1BSFY7QUFJRSxlQUFPLEVBQUU7QUFBQSxpQkFBTWEsU0FBUyxDQUFDLENBQUNiLE1BQUYsQ0FBZjtBQUFBLFNBSlg7QUFBQSxnQ0FNRSw4REFBQyxHQUFEO0FBQUssbUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkYsZUFPRSw4REFBQyxHQUFEO0FBQUssbUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEYsZUFRRSw4REFBQyxHQUFEO0FBQUssbUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFDRDs7R0EzQ3VCVTtVQUVJbkI7OztNQUZKbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIudHN4PzAzNjgiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tdW5lc2NhcGVkLWVudGl0aWVzICovXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB1c2VXaW5kb3dEaW1lbnNpb25zIGZyb20gJy4uL2hvb2tzL3VzZVdpbmRvd0RpbWVuc2lvbic7XG5cbmludGVyZmFjZSBIYW1idXJnZXJJc0FjdGl2ZXtcbiAgd2luZG93V2lkdGg6IG51bWJlcjtcbiAgaXNPcGVuOiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOYXZCYXJ7XG4gIGNsYXNzTmFtZTogc3RyaW5nO1xuICB3aW5kb3dXaWR0aDogbnVtYmVyO1xuICBpc09wZW46IGJvb2xlYW5cbn1cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5jb25zdCBIZWFkZXJOYXYgPSBzdHlsZWQuaGVhZGVyYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogI2ZmZlxuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogMTIwMHB4O1xuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTcwcHgpIHtcblxuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6MCAyZW07XG4gICAgICB6LWluZGV4OiA5OTtcblxuICAgIH1cbmBcblxuY29uc3QgTmF2QmFyID0gc3R5bGVkLm5hdjxOYXZCYXI+YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IGF1dG87XG5cblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE3MHB4KSB7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIGxlZnQ6IC0xMDAlO1xuICAgICAgICAgIHRvcDogMXJlbTtcbiAgICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjFzO1xuICAgICAgICAgIGxlZnQ6ICR7cHJvcHMgPT4gcHJvcHMud2luZG93V2lkdGggPCAxMTcwICYmIHByb3BzLmlzT3BlbiAmJiAwIH07XG5cbiAgICAgICAgXG4gICAgICAgICAgLm5hdi1pdGVtIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46ICR7cHJvcHMgPT4gcHJvcHMud2luZG93V2lkdGggPCAxMTcwICYmIHByb3BzLmlzT3BlbiAmJiBcIjIuNXJlbSAwXCIgfTtcbiAgICAgICAgICB9XG4gICAgICB9XG5gXG5cbmNvbnN0IExpc3RJdGVtID0gc3R5bGVkLmxpYFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjI1ZW07XG4gICAgJjpob3ZlciB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cbmBcbmNvbnN0IEhhbWJ1cmdlciA9IHN0eWxlZC5kaXY8SGFtYnVyZ2VySXNBY3RpdmU+YFxuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgb3BhY2l0eTogJHtwcm9wcyA9PiBwcm9wcy53aW5kb3dXaWR0aCAgPiAxMTcwID8gMCA6IDF9O1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE3MHB4KSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgJiA6bnRoLW9mLXR5cGUoMikge1xuICAgICAgICBvcGFjaXR5OiAke3Byb3BzID0+IHByb3BzLmlzT3BlbiAmJiAwfTtcbiAgICAgIH1cbiAgICAgICYgOm50aC1vZi10eXBlKDEpIHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICR7cHJvcHMgPT4gcHJvcHMuaXNPcGVuICYmICd0cmFuc2xhdGVZKDhweCkgcm90YXRlKDQ1ZGVnKSd9O1xuICAgICAgfVxuXG4gICAgICAmIDpudGgtb2YtdHlwZSgzKSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiAke3Byb3BzID0+IHByb3BzLmlzT3BlbiAmJiAndHJhbnNsYXRlWSgtOHB4KSByb3RhdGUoLTQ1ZGVnKSd9O1xuICAgICAgfVxuICAgIH0gIFxuXG5gXG5cbmNvbnN0IEJhciA9IHN0eWxlZC5zcGFuYFxuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogM3B4O1xuICAgIG1hcmdpbjogNXB4IGF1dG87XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAxMDEwO1xuYFxuXG5jb25zdCBuYXZMaW5rcyA9IFtcbiAgICB7IFxuICAgICBpZDogMSwgXG4gICAgIG5hbWU6IFwi44Ob44O844OgXCIsIFxuICAgICBwYXRoOiBcIi9cIiBcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgbmFtZTogXCLDoCBwcm9wb3MgZGUgbW9pXCIsXG4gICAgICBwYXRoOiBcIi9hYm91dFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDMsXG4gICAgICBuYW1lOiBcIuaXheihjFwiLFxuICAgICAgcGF0aDogXCIvdHJhdmVsXCIsXG4gICAgfSxcbiAgICAvLyB7XG4gICAgLy8gICBuYW1lOiBcIkJsb2dcIixcbiAgICAvLyAgIHBhdGg6IFwiL2Jsb2dcIixcbiAgICAvLyB9LFxuICAgIC8vIHtcbiAgICAvLyAgIGlkOjQsXG4gICAgLy8gICBuYW1lOiBcIkNvbnRhY3RcIixcbiAgICAvLyAgIHBhdGg6IFwiI2NvbnRhY3RcIixcbiAgICAvLyB9LFxuICBdO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcblxuICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHVzZVdpbmRvd0RpbWVuc2lvbnMoKVxuXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8SGVhZGVyTmF2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYW5kXCIgc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxoND5MaWxseSdzIGJsb2c8L2g0PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPE5hdkJhciBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1tZW51XCJcbiAgICAgICAgICAgIHdpbmRvd1dpZHRoPXt3aWR0aCA/IHdpZHRoIDogMH1cbiAgICAgICAgICAgIGlzT3Blbj17aXNPcGVufVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAge25hdkxpbmtzLm1hcCgobGluaywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGtleT17bGluay5pZH0gaHJlZj17bGluay5wYXRofSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGtleT17bGluay5pZH0gY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj57bGluay5uYW1lfTwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L05hdkJhcj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEhhbWJ1cmdlciBcbiAgICAgICAgICBpZD1cImhhbWJ1cmdlclwiIFxuICAgICAgICAgIHdpbmRvd1dpZHRoPXt3aWR0aCA/IHdpZHRoIDogMH0gXG4gICAgICAgICAgaXNPcGVuPXtpc09wZW59XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pfVxuICAgICAgICAgID5cbiAgICAgICAgICA8QmFyIGNsYXNzTmFtZT1cImJhclwiLz5cbiAgICAgICAgICA8QmFyIGNsYXNzTmFtZT1cImJhclwiLz5cbiAgICAgICAgICA8QmFyIGNsYXNzTmFtZT1cImJhclwiLz5cbiAgICAgICAgPC9IYW1idXJnZXI+XG4gICAgICA8L0hlYWRlck5hdj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJMaW5rIiwic3R5bGVkIiwidXNlV2luZG93RGltZW5zaW9ucyIsIkNvbnRhaW5lciIsImRpdiIsIkhlYWRlck5hdiIsImhlYWRlciIsIk5hdkJhciIsIm5hdiIsInByb3BzIiwid2luZG93V2lkdGgiLCJpc09wZW4iLCJMaXN0SXRlbSIsImxpIiwiSGFtYnVyZ2VyIiwiQmFyIiwic3BhbiIsIm5hdkxpbmtzIiwiaWQiLCJuYW1lIiwicGF0aCIsIkhlYWRlciIsIndpZHRoIiwiaGVpZ2h0Iiwic2V0SXNPcGVuIiwiY3Vyc29yIiwibWFwIiwibGluayIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.tsx\n");

/***/ })

});