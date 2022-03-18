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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var _home_sti_my_next_js_blog_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var _hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useWindowDimension */ \"./hooks/useWindowDimension.ts\");\n/* harmony import */ var hamburger_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hamburger-react */ \"./node_modules/hamburger-react/dist-esm/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/sti/my-next-js-blog/web/components/Header.tsx\",\n    _templateObject,\n    _templateObject2,\n    _templateObject3,\n    _templateObject4,\n    _templateObject5,\n    _s = $RefreshSig$();\n\n/* eslint-disable react/no-unescaped-entities */\n\n\n\n\n\n\nvar Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject || (_templateObject = (0,_home_sti_my_next_js_blog_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  width: 100%;\\n  justify-content: center;\\n\"])));\n_c = Container;\nvar HeaderNav = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__[\"default\"].header(_templateObject2 || (_templateObject2 = (0,_home_sti_my_next_js_blog_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    background: #fff\\n    margin: auto;\\n    width: 1200px;\\n\\n    @media only screen and (max-width: 1170px) {\\n\\n      position: fixed\\n      top: 5%;\\n      width: 100%;\\n      background-color: #fff;\\n      justify-content: space-between;\\n      align-items: center;\\n      padding:0 2em;\\n\\n    }\\n\"])));\n_c2 = HeaderNav;\nvar NavBar = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__[\"default\"].nav(_templateObject3 || (_templateObject3 = (0,_home_sti_my_next_js_blog_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    display: flex;\\n    justify-content: space-around;\\n    align-items: center;\\n    width: 100%;\\n    margin: auto;\\n\\n\\n    @media only screen and (max-width: 1170px) {\\n          position: fixed;\\n          left: -100%;\\n          top: 1rem;\\n          height: 500px;\\n          flex-direction: column;\\n          background-color: #fff;\\n          width: 100%;\\n          border-radius: 10px;\\n          text-align: center;\\n          transition: 0.1s;\\n          left: \", \";\\n\\n        \\n          .nav-item {\\n                margin: \", \";\\n          }\\n      }\\n\"])), function (props) {\n  return props.windowWidth < 1170 && props.isOpen && 0;\n}, function (props) {\n  return props.windowWidth < 1170 && props.isOpen && \"2.5rem 0\";\n});\n_c3 = NavBar;\nvar ListItem = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__[\"default\"].li(_templateObject4 || (_templateObject4 = (0,_home_sti_my_next_js_blog_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    list-style-type: none;\\n    cursor: pointer;\\n    margin:0 2em;\\n    font-size: 1.25em;\\n\\n    &:nth-of-type(3) {\\n        margin: 0 0 0 2em;\\n    }\\n    &:hover {\\n        text-decoration: underline;\\n    }\\n\"]))); // const Hamburger = styled.div<HamburgerIsActive>`\n//     display: none;\n//     opacity: ${props => props.windowWidth  > 1170 ? 0 : 1};\n//     @media only screen and (max-width: 1170px) {\n//       display: block;\n//       cursor: pointer;\n//       &: nth-of-type(2) {\n//         opacity: ${props => props.isOpen && 0};\n//       }\n//       &: nth-of-type(1) {\n//           transform: ${props => props.isOpen && 'translateY(8px) rotate(45deg)'};\n//       }\n//       &: nth-of-type(3) {\n//           transform: ${props => props.isOpen && 'translateY(-8px) rotate(-45deg)'};\n//       }\n//     }  \n// `\n\n_c4 = ListItem;\nvar Bar = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__[\"default\"].span(_templateObject5 || (_templateObject5 = (0,_home_sti_my_next_js_blog_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    display: block;\\n    width: 25px;\\n    height: 3px;\\n    margin: 5px auto;\\n    -webkit-transition: all 0.3s ease-in-out;\\n    transition: all 0.3s ease-in-out;\\n    background-color: #101010;\\n\"])));\nvar navLinks = [{\n  id: 1,\n  name: \"ホーム\",\n  path: \"/\"\n}, {\n  id: 2,\n  name: \"à propos de moi\",\n  path: \"/about\"\n}, {\n  id: 3,\n  name: \"旅行\",\n  path: \"/travel\"\n} // {\n//   name: \"Blog\",\n//   path: \"/blog\",\n// },\n// {\n//   id:4,\n//   name: \"Contact\",\n//   path: \"#contact\",\n// },\n];\nfunction Header() {\n  _s();\n\n  var _this = this;\n\n  var _useWindowDimensions = (0,_hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(),\n      width = _useWindowDimensions.width,\n      height = _useWindowDimensions.height;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Container, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(HeaderNav, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"brand\",\n        style: {\n          cursor: 'pointer'\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n          href: \"/\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h4\", {\n            children: \"Lilly's blog\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 155,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 154,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 153,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(NavBar, {\n          className: \"nav-menu\",\n          windowWidth: width ? width : 0,\n          isOpen: isOpen,\n          children: navLinks.map(function (link, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n              href: link.path,\n              passHref: true,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(ListItem, {\n                className: \"nav-item\",\n                children: link.name\n              }, link.id, false, {\n                fileName: _jsxFileName,\n                lineNumber: 167,\n                columnNumber: 21\n              }, _this)\n            }, link.id, false, {\n              fileName: _jsxFileName,\n              lineNumber: 166,\n              columnNumber: 19\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 159,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 158,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(hamburger_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        toggled: isOpen,\n        toggle: setIsOpen\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 173,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 152,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 151,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Header, \"SBoS8HZ08UheWOnbU3A74PzGRCI=\", false, function () {\n  return [_hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n});\n\n_c5 = Header;\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"HeaderNav\");\n$RefreshReg$(_c3, \"NavBar\");\n$RefreshReg$(_c4, \"ListItem\");\n$RefreshReg$(_c5, \"Header\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxDQUFDVCxFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKO0FBS0QsV0FOQTtBQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkYsZUFxQkUsOERBQUMsdURBQUQ7QUFDRSxlQUFPLEVBQUVOLE1BRFg7QUFFRSxjQUFNLEVBQUVZO0FBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUErQkQ7O0dBckN1Qkg7VUFFSW5COzs7TUFGSm1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyLnRzeD8wMzY4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLXVuZXNjYXBlZC1lbnRpdGllcyAqL1xuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgdXNlV2luZG93RGltZW5zaW9ucyBmcm9tICcuLi9ob29rcy91c2VXaW5kb3dEaW1lbnNpb24nO1xuaW1wb3J0IEhhbWJ1cmdlciBmcm9tICdoYW1idXJnZXItcmVhY3QnXG5cbmludGVyZmFjZSBIYW1idXJnZXJJc0FjdGl2ZXtcbiAgd2luZG93V2lkdGg6IG51bWJlcjtcbiAgaXNPcGVuOiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOYXZCYXJ7XG4gIGNsYXNzTmFtZTogc3RyaW5nO1xuICB3aW5kb3dXaWR0aDogbnVtYmVyO1xuICBpc09wZW46IGJvb2xlYW5cbn1cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG5jb25zdCBIZWFkZXJOYXYgPSBzdHlsZWQuaGVhZGVyYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogI2ZmZlxuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogMTIwMHB4O1xuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTcwcHgpIHtcblxuICAgICAgcG9zaXRpb246IGZpeGVkXG4gICAgICB0b3A6IDUlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6MCAyZW07XG5cbiAgICB9XG5gXG5cbmNvbnN0IE5hdkJhciA9IHN0eWxlZC5uYXY8TmF2QmFyPmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuXG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExNzBweCkge1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICBsZWZ0OiAtMTAwJTtcbiAgICAgICAgICB0b3A6IDFyZW07XG4gICAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4xcztcbiAgICAgICAgICBsZWZ0OiAke3Byb3BzID0+IHByb3BzLndpbmRvd1dpZHRoIDwgMTE3MCAmJiBwcm9wcy5pc09wZW4gJiYgMCB9O1xuXG4gICAgICAgIFxuICAgICAgICAgIC5uYXYtaXRlbSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAke3Byb3BzID0+IHByb3BzLndpbmRvd1dpZHRoIDwgMTE3MCAmJiBwcm9wcy5pc09wZW4gJiYgXCIyLjVyZW0gMFwiIH07XG4gICAgICAgICAgfVxuICAgICAgfVxuYFxuXG5jb25zdCBMaXN0SXRlbSA9IHN0eWxlZC5saWBcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbjowIDJlbTtcbiAgICBmb250LXNpemU6IDEuMjVlbTtcblxuICAgICY6bnRoLW9mLXR5cGUoMykge1xuICAgICAgICBtYXJnaW46IDAgMCAwIDJlbTtcbiAgICB9XG4gICAgJjpob3ZlciB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cbmBcbi8vIGNvbnN0IEhhbWJ1cmdlciA9IHN0eWxlZC5kaXY8SGFtYnVyZ2VySXNBY3RpdmU+YFxuLy8gICAgIGRpc3BsYXk6IG5vbmU7XG4vLyAgICAgb3BhY2l0eTogJHtwcm9wcyA9PiBwcm9wcy53aW5kb3dXaWR0aCAgPiAxMTcwID8gMCA6IDF9O1xuLy8gICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE3MHB4KSB7XG4vLyAgICAgICBkaXNwbGF5OiBibG9jaztcbi8vICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuLy8gICAgICAgJjogbnRoLW9mLXR5cGUoMikge1xuLy8gICAgICAgICBvcGFjaXR5OiAke3Byb3BzID0+IHByb3BzLmlzT3BlbiAmJiAwfTtcbi8vICAgICAgIH1cbi8vICAgICAgICY6IG50aC1vZi10eXBlKDEpIHtcbi8vICAgICAgICAgICB0cmFuc2Zvcm06ICR7cHJvcHMgPT4gcHJvcHMuaXNPcGVuICYmICd0cmFuc2xhdGVZKDhweCkgcm90YXRlKDQ1ZGVnKSd9O1xuLy8gICAgICAgfVxuXG4vLyAgICAgICAmOiBudGgtb2YtdHlwZSgzKSB7XG4vLyAgICAgICAgICAgdHJhbnNmb3JtOiAke3Byb3BzID0+IHByb3BzLmlzT3BlbiAmJiAndHJhbnNsYXRlWSgtOHB4KSByb3RhdGUoLTQ1ZGVnKSd9O1xuLy8gICAgICAgfVxuLy8gICAgIH0gIFxuXG4vLyBgXG5cbmNvbnN0IEJhciA9IHN0eWxlZC5zcGFuYFxuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogM3B4O1xuICAgIG1hcmdpbjogNXB4IGF1dG87XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAxMDEwO1xuYFxuXG5jb25zdCBuYXZMaW5rcyA9IFtcbiAgICB7IFxuICAgICBpZDogMSwgXG4gICAgIG5hbWU6IFwi44Ob44O844OgXCIsIFxuICAgICBwYXRoOiBcIi9cIiBcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgbmFtZTogXCLDoCBwcm9wb3MgZGUgbW9pXCIsXG4gICAgICBwYXRoOiBcIi9hYm91dFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDMsXG4gICAgICBuYW1lOiBcIuaXheihjFwiLFxuICAgICAgcGF0aDogXCIvdHJhdmVsXCIsXG4gICAgfSxcbiAgICAvLyB7XG4gICAgLy8gICBuYW1lOiBcIkJsb2dcIixcbiAgICAvLyAgIHBhdGg6IFwiL2Jsb2dcIixcbiAgICAvLyB9LFxuICAgIC8vIHtcbiAgICAvLyAgIGlkOjQsXG4gICAgLy8gICBuYW1lOiBcIkNvbnRhY3RcIixcbiAgICAvLyAgIHBhdGg6IFwiI2NvbnRhY3RcIixcbiAgICAvLyB9LFxuICBdO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcblxuICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHVzZVdpbmRvd0RpbWVuc2lvbnMoKVxuXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8SGVhZGVyTmF2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYW5kXCIgc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxoND5MaWxseSdzIGJsb2c8L2g0PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPE5hdkJhciBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1tZW51XCJcbiAgICAgICAgICAgIHdpbmRvd1dpZHRoPXt3aWR0aCA/IHdpZHRoIDogMH1cbiAgICAgICAgICAgIGlzT3Blbj17aXNPcGVufVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAge25hdkxpbmtzLm1hcCgobGluaywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGtleT17bGluay5pZH0gaHJlZj17bGluay5wYXRofSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGtleT17bGluay5pZH0gY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj57bGluay5uYW1lfTwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L05hdkJhcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxIYW1idXJnZXIgXG4gICAgICAgICAgdG9nZ2xlZD17aXNPcGVufVxuICAgICAgICAgIHRvZ2dsZT17c2V0SXNPcGVufVxuICAgICAgICAgID5cbiAgICAgICAgPC9IYW1idXJnZXI+XG4gICAgICA8L0hlYWRlck5hdj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJMaW5rIiwic3R5bGVkIiwidXNlV2luZG93RGltZW5zaW9ucyIsIkhhbWJ1cmdlciIsIkNvbnRhaW5lciIsImRpdiIsIkhlYWRlck5hdiIsImhlYWRlciIsIk5hdkJhciIsIm5hdiIsInByb3BzIiwid2luZG93V2lkdGgiLCJpc09wZW4iLCJMaXN0SXRlbSIsImxpIiwiQmFyIiwic3BhbiIsIm5hdkxpbmtzIiwiaWQiLCJuYW1lIiwicGF0aCIsIkhlYWRlciIsIndpZHRoIiwiaGVpZ2h0Iiwic2V0SXNPcGVuIiwiY3Vyc29yIiwibWFwIiwibGluayIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.tsx\n");

/***/ })

});