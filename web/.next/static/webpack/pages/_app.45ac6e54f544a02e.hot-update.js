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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var _home_sti_my_next_js_blog_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var _hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useWindowDimension */ \"./hooks/useWindowDimension.ts\");\n/* harmony import */ var hamburger_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hamburger-react */ \"./node_modules/hamburger-react/dist-esm/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/sti/my-next-js-blog/web/components/Header.tsx\",\n    _templateObject,\n    _templateObject2,\n    _templateObject3,\n    _templateObject4,\n    _templateObject5,\n    _s = $RefreshSig$();\n\n/* eslint-disable react/no-unescaped-entities */\n\n\n\n\n\n\nvar Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject || (_templateObject = (0,_home_sti_my_next_js_blog_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  width: 100%;\\n  justify-content: center;\\n\"])));\n_c = Container;\nvar HeaderNav = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__[\"default\"].header(_templateObject2 || (_templateObject2 = (0,_home_sti_my_next_js_blog_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    background: #fff\\n    margin: auto;\\n    width: 1200px;\\n\\n    @media only screen and (max-width: 1170px) {\\n\\n      position: fixed\\n      top: 5%;\\n      width: 100%;\\n      background-color: #fff;\\n      justify-content: space-between;\\n      align-items: center;\\n      padding:0 2em;\\n\\n    }\\n\"])));\n_c2 = HeaderNav;\nvar NavBar = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__[\"default\"].nav(_templateObject3 || (_templateObject3 = (0,_home_sti_my_next_js_blog_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    display: flex;\\n    justify-content: space-around;\\n    align-items: center;\\n    width: 100%;\\n    margin: auto;\\n\\n\\n    @media only screen and (max-width: 1170px) {\\n          position: fixed;\\n          left: -100%;\\n          top: 1rem;\\n          height: 500px;\\n          flex-direction: column;\\n          background-color: #fff;\\n          width: 100%;\\n          border-radius: 10px;\\n          text-align: center;\\n          transition: 0.1s;\\n          left: \", \";\\n\\n        \\n          .nav-item {\\n                margin: \", \";\\n          }\\n      }\\n\"])), function (props) {\n  return props.windowWidth < 1170 && props.isOpen && 0;\n}, function (props) {\n  return props.windowWidth < 1170 && props.isOpen && \"2.5rem 0\";\n});\n_c3 = NavBar;\nvar ListItem = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__[\"default\"].li(_templateObject4 || (_templateObject4 = (0,_home_sti_my_next_js_blog_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    list-style-type: none;\\n    cursor: pointer;\\n    margin:0 2em;\\n    font-size: 1.25em;\\n\\n    &:nth-of-type(3) {\\n        margin: 0 0 0 2em;\\n    }\\n    &:hover {\\n        text-decoration: underline;\\n    }\\n\"]))); // const Hamburger = styled.div<HamburgerIsActive>`\n//     display: none;\n//     opacity: ${props => props.windowWidth  > 1170 ? 0 : 1};\n//     @media only screen and (max-width: 1170px) {\n//       display: block;\n//       cursor: pointer;\n//       &: nth-of-type(2) {\n//         opacity: ${props => props.isOpen && 0};\n//       }\n//       &: nth-of-type(1) {\n//           transform: ${props => props.isOpen && 'translateY(8px) rotate(45deg)'};\n//       }\n//       &: nth-of-type(3) {\n//           transform: ${props => props.isOpen && 'translateY(-8px) rotate(-45deg)'};\n//       }\n//     }  \n// `\n\n_c4 = ListItem;\nvar Bar = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__[\"default\"].span(_templateObject5 || (_templateObject5 = (0,_home_sti_my_next_js_blog_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    display: block;\\n    width: 25px;\\n    height: 3px;\\n    margin: 5px auto;\\n    -webkit-transition: all 0.3s ease-in-out;\\n    transition: all 0.3s ease-in-out;\\n    background-color: #101010;\\n\"])));\nvar navLinks = [{\n  id: 1,\n  name: \"ホーム\",\n  path: \"/\"\n}, {\n  id: 2,\n  name: \"à propos de moi\",\n  path: \"/about\"\n}, {\n  id: 3,\n  name: \"旅行\",\n  path: \"/travel\"\n} // {\n//   name: \"Blog\",\n//   path: \"/blog\",\n// },\n// {\n//   id:4,\n//   name: \"Contact\",\n//   path: \"#contact\",\n// },\n];\nfunction Header() {\n  _s();\n\n  var _this = this;\n\n  var _useWindowDimensions = (0,_hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(),\n      width = _useWindowDimensions.width,\n      height = _useWindowDimensions.height;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Container, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(HeaderNav, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"brand\",\n        style: {\n          cursor: 'pointer'\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n          href: \"/\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h4\", {\n            children: \"Lilly's blog\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 155,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 154,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 153,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(NavBar, {\n          className: \"nav-menu\",\n          windowWidth: width ? width : 0,\n          isOpen: isOpen,\n          children: navLinks.map(function (link, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n              href: link.path,\n              passHref: true,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(ListItem, {\n                className: \"nav-item\",\n                children: link.name\n              }, link.id, false, {\n                fileName: _jsxFileName,\n                lineNumber: 167,\n                columnNumber: 21\n              }, _this)\n            }, link.id, false, {\n              fileName: _jsxFileName,\n              lineNumber: 166,\n              columnNumber: 19\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 159,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 158,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(hamburger_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        id: \"hamburger\",\n        windowWidth: width ? width : 0,\n        isOpen: isOpen,\n        onClick: function onClick() {\n          return setIsOpen(!isOpen);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 173,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 152,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 151,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Header, \"SBoS8HZ08UheWOnbU3A74PzGRCI=\", false, function () {\n  return [_hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n});\n\n_c5 = Header;\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"HeaderNav\");\n$RefreshReg$(_c3, \"NavBar\");\n$RefreshReg$(_c4, \"ListItem\");\n$RefreshReg$(_c5, \"Header\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxDQUFDVCxFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKO0FBS0QsV0FOQTtBQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkYsZUFxQkUsOERBQUMsdURBQUQ7QUFDRSxVQUFFLEVBQUMsV0FETDtBQUVFLG1CQUFXLEVBQUVJLEtBQUssR0FBR0EsS0FBSCxHQUFXLENBRi9CO0FBR0UsY0FBTSxFQUFFVixNQUhWO0FBSUUsZUFBTyxFQUFFO0FBQUEsaUJBQU1ZLFNBQVMsQ0FBQyxDQUFDWixNQUFGLENBQWY7QUFBQTtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUNEOztHQXZDdUJTO1VBRUluQjs7O01BRkptQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci50c3g/MDM2OCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby11bmVzY2FwZWQtZW50aXRpZXMgKi9cbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSAnLi4vaG9va3MvdXNlV2luZG93RGltZW5zaW9uJztcbmltcG9ydCBIYW1idXJnZXIgZnJvbSAnaGFtYnVyZ2VyLXJlYWN0J1xuXG5pbnRlcmZhY2UgSGFtYnVyZ2VySXNBY3RpdmV7XG4gIHdpbmRvd1dpZHRoOiBudW1iZXI7XG4gIGlzT3BlbjogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmF2QmFye1xuICBjbGFzc05hbWU6IHN0cmluZztcbiAgd2luZG93V2lkdGg6IG51bWJlcjtcbiAgaXNPcGVuOiBib29sZWFuXG59XG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gO1xuY29uc3QgSGVhZGVyTmF2ID0gc3R5bGVkLmhlYWRlcmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICNmZmZcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDEyMDBweDtcblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE3MHB4KSB7XG5cbiAgICAgIHBvc2l0aW9uOiBmaXhlZFxuICAgICAgdG9wOiA1JTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOjAgMmVtO1xuXG4gICAgfVxuYFxuXG5jb25zdCBOYXZCYXIgPSBzdHlsZWQubmF2PE5hdkJhcj5gXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogYXV0bztcblxuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTcwcHgpIHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgbGVmdDogLTEwMCU7XG4gICAgICAgICAgdG9wOiAxcmVtO1xuICAgICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHRyYW5zaXRpb246IDAuMXM7XG4gICAgICAgICAgbGVmdDogJHtwcm9wcyA9PiBwcm9wcy53aW5kb3dXaWR0aCA8IDExNzAgJiYgcHJvcHMuaXNPcGVuICYmIDAgfTtcblxuICAgICAgICBcbiAgICAgICAgICAubmF2LWl0ZW0ge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogJHtwcm9wcyA9PiBwcm9wcy53aW5kb3dXaWR0aCA8IDExNzAgJiYgcHJvcHMuaXNPcGVuICYmIFwiMi41cmVtIDBcIiB9O1xuICAgICAgICAgIH1cbiAgICAgIH1cbmBcblxuY29uc3QgTGlzdEl0ZW0gPSBzdHlsZWQubGlgXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW46MCAyZW07XG4gICAgZm9udC1zaXplOiAxLjI1ZW07XG5cbiAgICAmOm50aC1vZi10eXBlKDMpIHtcbiAgICAgICAgbWFyZ2luOiAwIDAgMCAyZW07XG4gICAgfVxuICAgICY6aG92ZXIge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG5gXG4vLyBjb25zdCBIYW1idXJnZXIgPSBzdHlsZWQuZGl2PEhhbWJ1cmdlcklzQWN0aXZlPmBcbi8vICAgICBkaXNwbGF5OiBub25lO1xuLy8gICAgIG9wYWNpdHk6ICR7cHJvcHMgPT4gcHJvcHMud2luZG93V2lkdGggID4gMTE3MCA/IDAgOiAxfTtcbi8vICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExNzBweCkge1xuLy8gICAgICAgZGlzcGxheTogYmxvY2s7XG4vLyAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbi8vICAgICAgICY6IG50aC1vZi10eXBlKDIpIHtcbi8vICAgICAgICAgb3BhY2l0eTogJHtwcm9wcyA9PiBwcm9wcy5pc09wZW4gJiYgMH07XG4vLyAgICAgICB9XG4vLyAgICAgICAmOiBudGgtb2YtdHlwZSgxKSB7XG4vLyAgICAgICAgICAgdHJhbnNmb3JtOiAke3Byb3BzID0+IHByb3BzLmlzT3BlbiAmJiAndHJhbnNsYXRlWSg4cHgpIHJvdGF0ZSg0NWRlZyknfTtcbi8vICAgICAgIH1cblxuLy8gICAgICAgJjogbnRoLW9mLXR5cGUoMykge1xuLy8gICAgICAgICAgIHRyYW5zZm9ybTogJHtwcm9wcyA9PiBwcm9wcy5pc09wZW4gJiYgJ3RyYW5zbGF0ZVkoLThweCkgcm90YXRlKC00NWRlZyknfTtcbi8vICAgICAgIH1cbi8vICAgICB9ICBcblxuLy8gYFxuXG5jb25zdCBCYXIgPSBzdHlsZWQuc3BhbmBcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICBtYXJnaW46IDVweCBhdXRvO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwMTAxMDtcbmBcblxuY29uc3QgbmF2TGlua3MgPSBbXG4gICAgeyBcbiAgICAgaWQ6IDEsIFxuICAgICBuYW1lOiBcIuODm+ODvOODoFwiLCBcbiAgICAgcGF0aDogXCIvXCIgXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMixcbiAgICAgIG5hbWU6IFwiw6AgcHJvcG9zIGRlIG1vaVwiLFxuICAgICAgcGF0aDogXCIvYWJvdXRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAzLFxuICAgICAgbmFtZTogXCLml4XooYxcIixcbiAgICAgIHBhdGg6IFwiL3RyYXZlbFwiLFxuICAgIH0sXG4gICAgLy8ge1xuICAgIC8vICAgbmFtZTogXCJCbG9nXCIsXG4gICAgLy8gICBwYXRoOiBcIi9ibG9nXCIsXG4gICAgLy8gfSxcbiAgICAvLyB7XG4gICAgLy8gICBpZDo0LFxuICAgIC8vICAgbmFtZTogXCJDb250YWN0XCIsXG4gICAgLy8gICBwYXRoOiBcIiNjb250YWN0XCIsXG4gICAgLy8gfSxcbiAgXTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XG5cbiAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB1c2VXaW5kb3dEaW1lbnNpb25zKClcblxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEhlYWRlck5hdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFuZFwiIHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8aDQ+TGlsbHkncyBibG9nPC9oND5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxOYXZCYXIgXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbWVudVwiXG4gICAgICAgICAgICB3aW5kb3dXaWR0aD17d2lkdGggPyB3aWR0aCA6IDB9XG4gICAgICAgICAgICBpc09wZW49e2lzT3Blbn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIHtuYXZMaW5rcy5tYXAoKGxpbmssIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8TGluayBrZXk9e2xpbmsuaWR9IGhyZWY9e2xpbmsucGF0aH0gcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBrZXk9e2xpbmsuaWR9IGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+e2xpbmsubmFtZX08L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9OYXZCYXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8SGFtYnVyZ2VyIFxuICAgICAgICAgIGlkPVwiaGFtYnVyZ2VyXCIgXG4gICAgICAgICAgd2luZG93V2lkdGg9e3dpZHRoID8gd2lkdGggOiAwfSBcbiAgICAgICAgICBpc09wZW49e2lzT3Blbn1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oIWlzT3Blbil9XG4gICAgICAgICAgPlxuICAgICAgICA8L0hhbWJ1cmdlcj5cbiAgICAgIDwvSGVhZGVyTmF2PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkxpbmsiLCJzdHlsZWQiLCJ1c2VXaW5kb3dEaW1lbnNpb25zIiwiSGFtYnVyZ2VyIiwiQ29udGFpbmVyIiwiZGl2IiwiSGVhZGVyTmF2IiwiaGVhZGVyIiwiTmF2QmFyIiwibmF2IiwicHJvcHMiLCJ3aW5kb3dXaWR0aCIsImlzT3BlbiIsIkxpc3RJdGVtIiwibGkiLCJCYXIiLCJzcGFuIiwibmF2TGlua3MiLCJpZCIsIm5hbWUiLCJwYXRoIiwiSGVhZGVyIiwid2lkdGgiLCJoZWlnaHQiLCJzZXRJc09wZW4iLCJjdXJzb3IiLCJtYXAiLCJsaW5rIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.tsx\n");

/***/ })

});