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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var _home_sti_my_next_js_blog_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _home_sti_my_next_js_blog_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var _hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useWindowDimension */ \"./hooks/useWindowDimension.ts\");\n/* harmony import */ var hamburger_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hamburger-react */ \"./node_modules/hamburger-react/dist-esm/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/sti/my-next-js-blog/web/components/Header.tsx\",\n    _templateObject,\n    _templateObject2,\n    _templateObject3,\n    _templateObject4,\n    _templateObject5,\n    _s = $RefreshSig$();\n\n/* eslint-disable react/no-unescaped-entities */\n\n\n\n\n\n\nvar Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject || (_templateObject = (0,_home_sti_my_next_js_blog_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  display: flex;\\n  width: 100%;\\n  justify-content: center;\\n\"])));\n_c = Container;\nvar HeaderNav = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__[\"default\"].header(_templateObject2 || (_templateObject2 = (0,_home_sti_my_next_js_blog_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    background: #fff\\n    margin: auto;\\n    width: 1200px;\\n\\n    @media only screen and (max-width: 1170px) {\\n\\n      position: fixed\\n      top: 5%;\\n      width: 100%;\\n      background-color: #fff;\\n      justify-content: space-between;\\n      align-items: center;\\n      padding:0 2em;\\n\\n    }\\n\"])));\n_c2 = HeaderNav;\nvar NavBar = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__[\"default\"].nav(_templateObject3 || (_templateObject3 = (0,_home_sti_my_next_js_blog_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n    display: flex;\\n    justify-content: space-around;\\n    align-items: center;\\n    width: 100%;\\n    margin: auto;\\n\\n\\n    @media only screen and (max-width: 1170px) {\\n          position: fixed;\\n          left: -100%;\\n          top: 1rem;\\n          height: 500px;\\n          flex-direction: column;\\n          background-color: #fff;\\n          width: 100%;\\n          border-radius: 10px;\\n          text-align: center;\\n          transition: 0.1s;\\n          left: \", \";\\n\\n        \\n          .nav-item {\\n                margin: \", \";\\n          }\\n      }\\n\"])), function (props) {\n  return props.windowWidth < 1170 && props.isOpen && 0;\n}, function (props) {\n  return props.windowWidth < 1170 && props.isOpen && \"2.5rem 0\";\n});\n_c3 = NavBar;\nvar ListItem = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__[\"default\"].li(_templateObject4 || (_templateObject4 = (0,_home_sti_my_next_js_blog_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n    list-style-type: none;\\n    cursor: pointer;\\n    margin:0 2em;\\n    font-size: 1.25em;\\n\\n    &:nth-of-type(3) {\\n        margin: 0 0 0 2em;\\n    }\\n    &:hover {\\n        text-decoration: underline;\\n    }\\n\"]))); // const Hamburger = styled.div<HamburgerIsActive>`\n//     display: none;\n//     opacity: ${props => props.windowWidth  > 1170 ? 0 : 1};\n//     @media only screen and (max-width: 1170px) {\n//       display: block;\n//       cursor: pointer;\n//       &: nth-of-type(2) {\n//         opacity: ${props => props.isOpen && 0};\n//       }\n//       &: nth-of-type(1) {\n//           transform: ${props => props.isOpen && 'translateY(8px) rotate(45deg)'};\n//       }\n//       &: nth-of-type(3) {\n//           transform: ${props => props.isOpen && 'translateY(-8px) rotate(-45deg)'};\n//       }\n//     }  \n// `\n\n_c4 = ListItem;\nvar Bar = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__[\"default\"].span(_templateObject5 || (_templateObject5 = (0,_home_sti_my_next_js_blog_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n    display: block;\\n    width: 25px;\\n    height: 3px;\\n    margin: 5px auto;\\n    -webkit-transition: all 0.3s ease-in-out;\\n    transition: all 0.3s ease-in-out;\\n    background-color: #101010;\\n\"])));\nvar navLinks = [{\n  id: 1,\n  name: \"ホーム\",\n  path: \"/\"\n}, {\n  id: 2,\n  name: \"à propos de moi\",\n  path: \"/about\"\n}, {\n  id: 3,\n  name: \"旅行\",\n  path: \"/travel\"\n} // {\n//   name: \"Blog\",\n//   path: \"/blog\",\n// },\n// {\n//   id:4,\n//   name: \"Contact\",\n//   path: \"#contact\",\n// },\n];\nfunction Header() {\n  _s();\n\n  var _this = this;\n\n  var _useWindowDimensions = (0,_hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(),\n      width = _useWindowDimensions.width,\n      height = _useWindowDimensions.height;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Container, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(HeaderNav, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        className: \"brand\",\n        style: {\n          cursor: 'pointer'\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n          href: \"/\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"h4\", {\n            children: \"Lilly's blog\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 155,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 154,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 153,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(NavBar, {\n          className: \"nav-menu\",\n          windowWidth: width ? width : 0,\n          isOpen: isOpen,\n          children: navLinks.map(function (link, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n              href: link.path,\n              passHref: true,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(ListItem, {\n                className: \"nav-item\",\n                children: link.name\n              }, link.id, false, {\n                fileName: _jsxFileName,\n                lineNumber: 167,\n                columnNumber: 21\n              }, _this)\n            }, link.id, false, {\n              fileName: _jsxFileName,\n              lineNumber: 166,\n              columnNumber: 19\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 159,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 158,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(hamburger_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], (0,_home_sti_my_next_js_blog_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        toggle: isOpen\n      }, \"toggle\", setIsOpen), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 173,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 152,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 151,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Header, \"SBoS8HZ08UheWOnbU3A74PzGRCI=\", false, function () {\n  return [_hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\n});\n\n_c5 = Header;\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"HeaderNav\");\n$RefreshReg$(_c3, \"NavBar\");\n$RefreshReg$(_c4, \"ListItem\");\n$RefreshReg$(_c5, \"Header\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UyxJQUFJLENBQUNULEVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREo7QUFLRCxXQU5BO0FBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORixlQXFCRSw4REFBQyx1REFBRDtBQUNFLGNBQU0sRUFBRU47QUFEVixtQkFFVVksU0FGVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQStCRDs7R0FyQ3VCSDtVQUVJbkI7OztNQUZKbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIudHN4PzAzNjgiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tdW5lc2NhcGVkLWVudGl0aWVzICovXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB1c2VXaW5kb3dEaW1lbnNpb25zIGZyb20gJy4uL2hvb2tzL3VzZVdpbmRvd0RpbWVuc2lvbic7XG5pbXBvcnQgSGFtYnVyZ2VyIGZyb20gJ2hhbWJ1cmdlci1yZWFjdCdcblxuaW50ZXJmYWNlIEhhbWJ1cmdlcklzQWN0aXZle1xuICB3aW5kb3dXaWR0aDogbnVtYmVyO1xuICBpc09wZW46IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5hdkJhcntcbiAgY2xhc3NOYW1lOiBzdHJpbmc7XG4gIHdpbmRvd1dpZHRoOiBudW1iZXI7XG4gIGlzT3BlbjogYm9vbGVhblxufVxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYDtcbmNvbnN0IEhlYWRlck5hdiA9IHN0eWxlZC5oZWFkZXJgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmXG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiAxMjAwcHg7XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExNzBweCkge1xuXG4gICAgICBwb3NpdGlvbjogZml4ZWRcbiAgICAgIHRvcDogNSU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZzowIDJlbTtcblxuICAgIH1cbmBcblxuY29uc3QgTmF2QmFyID0gc3R5bGVkLm5hdjxOYXZCYXI+YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IGF1dG87XG5cblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE3MHB4KSB7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIGxlZnQ6IC0xMDAlO1xuICAgICAgICAgIHRvcDogMXJlbTtcbiAgICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjFzO1xuICAgICAgICAgIGxlZnQ6ICR7cHJvcHMgPT4gcHJvcHMud2luZG93V2lkdGggPCAxMTcwICYmIHByb3BzLmlzT3BlbiAmJiAwIH07XG5cbiAgICAgICAgXG4gICAgICAgICAgLm5hdi1pdGVtIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46ICR7cHJvcHMgPT4gcHJvcHMud2luZG93V2lkdGggPCAxMTcwICYmIHByb3BzLmlzT3BlbiAmJiBcIjIuNXJlbSAwXCIgfTtcbiAgICAgICAgICB9XG4gICAgICB9XG5gXG5cbmNvbnN0IExpc3RJdGVtID0gc3R5bGVkLmxpYFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luOjAgMmVtO1xuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xuXG4gICAgJjpudGgtb2YtdHlwZSgzKSB7XG4gICAgICAgIG1hcmdpbjogMCAwIDAgMmVtO1xuICAgIH1cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxuYFxuLy8gY29uc3QgSGFtYnVyZ2VyID0gc3R5bGVkLmRpdjxIYW1idXJnZXJJc0FjdGl2ZT5gXG4vLyAgICAgZGlzcGxheTogbm9uZTtcbi8vICAgICBvcGFjaXR5OiAke3Byb3BzID0+IHByb3BzLndpbmRvd1dpZHRoICA+IDExNzAgPyAwIDogMX07XG4vLyAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTcwcHgpIHtcbi8vICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4vLyAgICAgICAmOiBudGgtb2YtdHlwZSgyKSB7XG4vLyAgICAgICAgIG9wYWNpdHk6ICR7cHJvcHMgPT4gcHJvcHMuaXNPcGVuICYmIDB9O1xuLy8gICAgICAgfVxuLy8gICAgICAgJjogbnRoLW9mLXR5cGUoMSkge1xuLy8gICAgICAgICAgIHRyYW5zZm9ybTogJHtwcm9wcyA9PiBwcm9wcy5pc09wZW4gJiYgJ3RyYW5zbGF0ZVkoOHB4KSByb3RhdGUoNDVkZWcpJ307XG4vLyAgICAgICB9XG5cbi8vICAgICAgICY6IG50aC1vZi10eXBlKDMpIHtcbi8vICAgICAgICAgICB0cmFuc2Zvcm06ICR7cHJvcHMgPT4gcHJvcHMuaXNPcGVuICYmICd0cmFuc2xhdGVZKC04cHgpIHJvdGF0ZSgtNDVkZWcpJ307XG4vLyAgICAgICB9XG4vLyAgICAgfSAgXG5cbi8vIGBcblxuY29uc3QgQmFyID0gc3R5bGVkLnNwYW5gXG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgbWFyZ2luOiA1cHggYXV0bztcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDEwMTA7XG5gXG5cbmNvbnN0IG5hdkxpbmtzID0gW1xuICAgIHsgXG4gICAgIGlkOiAxLCBcbiAgICAgbmFtZTogXCLjg5vjg7zjg6BcIiwgXG4gICAgIHBhdGg6IFwiL1wiIFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDIsXG4gICAgICBuYW1lOiBcIsOgIHByb3BvcyBkZSBtb2lcIixcbiAgICAgIHBhdGg6IFwiL2Fib3V0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMyxcbiAgICAgIG5hbWU6IFwi5peF6KGMXCIsXG4gICAgICBwYXRoOiBcIi90cmF2ZWxcIixcbiAgICB9LFxuICAgIC8vIHtcbiAgICAvLyAgIG5hbWU6IFwiQmxvZ1wiLFxuICAgIC8vICAgcGF0aDogXCIvYmxvZ1wiLFxuICAgIC8vIH0sXG4gICAgLy8ge1xuICAgIC8vICAgaWQ6NCxcbiAgICAvLyAgIG5hbWU6IFwiQ29udGFjdFwiLFxuICAgIC8vICAgcGF0aDogXCIjY29udGFjdFwiLFxuICAgIC8vIH0sXG4gIF07XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xuXG4gIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdXNlV2luZG93RGltZW5zaW9ucygpXG5cbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxIZWFkZXJOYXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhbmRcIiBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGg0PkxpbGx5J3MgYmxvZzwvaDQ+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TmF2QmFyIFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LW1lbnVcIlxuICAgICAgICAgICAgd2luZG93V2lkdGg9e3dpZHRoID8gd2lkdGggOiAwfVxuICAgICAgICAgICAgaXNPcGVuPXtpc09wZW59XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICB7bmF2TGlua3MubWFwKChsaW5rLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPExpbmsga2V5PXtsaW5rLmlkfSBocmVmPXtsaW5rLnBhdGh9IHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0ga2V5PXtsaW5rLmlkfSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPntsaW5rLm5hbWV9PC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvTmF2QmFyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEhhbWJ1cmdlciBcbiAgICAgICAgICB0b2dnbGU9e2lzT3Blbn1cbiAgICAgICAgICB0b2dnbGU9e3NldElzT3Blbn1cbiAgICAgICAgICA+XG4gICAgICAgIDwvSGFtYnVyZ2VyPlxuICAgICAgPC9IZWFkZXJOYXY+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTGluayIsInN0eWxlZCIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJIYW1idXJnZXIiLCJDb250YWluZXIiLCJkaXYiLCJIZWFkZXJOYXYiLCJoZWFkZXIiLCJOYXZCYXIiLCJuYXYiLCJwcm9wcyIsIndpbmRvd1dpZHRoIiwiaXNPcGVuIiwiTGlzdEl0ZW0iLCJsaSIsIkJhciIsInNwYW4iLCJuYXZMaW5rcyIsImlkIiwibmFtZSIsInBhdGgiLCJIZWFkZXIiLCJ3aWR0aCIsImhlaWdodCIsInNldElzT3BlbiIsImN1cnNvciIsIm1hcCIsImxpbmsiLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.tsx\n");

/***/ })

});