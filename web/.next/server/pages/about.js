"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/about";
exports.ids = ["pages/about"];
exports.modules = {

/***/ "./client.js":
/*!*******************!*\
  !*** ./client.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({\n  projectId: 'bposf7qg',\n  // you can find this in sanity.json\n  dataset: 'production',\n  // or the name you chose in step 1\n  apiVersion: '2022-03-10',\n  useCdn: true // `false` if you want to ensure fresh data\n\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQSxpRUFBZUEscURBQVksQ0FBQztBQUMxQkMsRUFBQUEsU0FBUyxFQUFFLFVBRGU7QUFDSDtBQUN2QkMsRUFBQUEsT0FBTyxFQUFFLFlBRmlCO0FBRUg7QUFDdkJDLEVBQUFBLFVBQVUsRUFBRSxZQUhjO0FBSTFCQyxFQUFBQSxNQUFNLEVBQUUsSUFKa0IsQ0FJYjs7QUFKYSxDQUFELENBQTNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktbmV4dC1qcy1ibG9nLy4vY2xpZW50LmpzPzk3MTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNhbml0eUNsaWVudCBmcm9tICdAc2FuaXR5L2NsaWVudCdcblxuZXhwb3J0IGRlZmF1bHQgc2FuaXR5Q2xpZW50KHtcbiAgcHJvamVjdElkOiAnYnBvc2Y3cWcnLCAvLyB5b3UgY2FuIGZpbmQgdGhpcyBpbiBzYW5pdHkuanNvblxuICBkYXRhc2V0OiAncHJvZHVjdGlvbicsIC8vIG9yIHRoZSBuYW1lIHlvdSBjaG9zZSBpbiBzdGVwIDFcbiAgYXBpVmVyc2lvbjogJzIwMjItMDMtMTAnLFxuICB1c2VDZG46IHRydWUgLy8gYGZhbHNlYCBpZiB5b3Ugd2FudCB0byBlbnN1cmUgZnJlc2ggZGF0YVxufSkiXSwibmFtZXMiOlsic2FuaXR5Q2xpZW50IiwicHJvamVjdElkIiwiZGF0YXNldCIsImFwaVZlcnNpb24iLCJ1c2VDZG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client.js\n");

/***/ }),

/***/ "./pages/about.tsx":
/*!*************************!*\
  !*** ./pages/about.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ About),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @portabletext/react */ \"@portabletext/react\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! groq */ \"groq\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client */ \"./client.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_portabletext_react__WEBPACK_IMPORTED_MODULE_1__]);\n_portabletext_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\nvar _jsxFileName = \"/home/sti/projects/my-next-js-blog/web/pages/about.tsx\";\n\n\n\n\n\nconst Container = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`\nmax-width: 1150px;\nmin-height: 100vh;\npadding: 4rem 0;\nmargin: auto;\nflex: 1;\ndisplay: flex;\nflex-direction: column;\njustify-content: start;\nalign-items: center;\n`;\nconst Main = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().main)`\nmin-height: 100vh;\npadding: 4rem 0;\nflex: 1;\ndisplay: flex;\nflex-direction: column;\njustify-content: start;\nalign-items: center;\n`;\nfunction About({\n  authorBio\n}) {\n  const [bioContainer = []] = authorBio;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Container, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Main, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h1\", {\n        children: \"\\xE0 propos de moi\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_1__.PortableText, {\n        value: bioContainer.bio.map(b => b)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 9\n  }, this);\n}\nconst query = (groq__WEBPACK_IMPORTED_MODULE_2___default())`*[_type == \"author\"]{\n    bio,\n  }`;\nasync function getStaticProps(context) {\n  // It's important to default the slug so that it doesn't return \"undefined\"\n  const authorBio = await _client__WEBPACK_IMPORTED_MODULE_3__[\"default\"].fetch(query);\n  return {\n    props: {\n      authorBio\n    }\n  };\n}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hYm91dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFJQSxNQUFNSSxTQUFTLEdBQUdKLDREQUFXO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBVkE7QUFXQSxNQUFNTSxJQUFJLEdBQUdOLDZEQUFhO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FSQTtBQWVlLFNBQVNRLEtBQVQsQ0FBZTtBQUFFQyxFQUFBQTtBQUFGLENBQWYsRUFBOEU7QUFHekYsUUFBTSxDQUNGQyxZQUFZLEdBQUcsRUFEYixJQUVMRCxTQUZEO0FBS0Esc0JBQ0ksOERBQUMsU0FBRDtBQUFBLDJCQUNJLDhEQUFDLElBQUQ7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBR0ksOERBQUMsNkRBQUQ7QUFDSSxhQUFLLEVBQUVDLFlBQVksQ0FBQ0MsR0FBYixDQUFpQkMsR0FBakIsQ0FBcUJDLENBQUMsSUFBSUEsQ0FBMUI7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBYUg7QUFHRCxNQUFNQyxLQUFLLEdBQUdaLDZDQUFLO0FBQ25CO0FBQ0EsSUFGQTtBQU1TLGVBQWVhLGNBQWYsQ0FBOEJDLE9BQTlCLEVBQThEO0FBQ25FO0FBQ0EsUUFBTVAsU0FBUyxHQUFHLE1BQU1OLHFEQUFBLENBQWFXLEtBQWIsQ0FBeEI7QUFFQSxTQUFPO0FBQ0xJLElBQUFBLEtBQUssRUFBRTtBQUNMVCxNQUFBQTtBQURLO0FBREYsR0FBUDtBQUtELEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1uZXh0LWpzLWJsb2cvLi9wYWdlcy9hYm91dC50c3g/NTk5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQge1BvcnRhYmxlVGV4dCwgUG9ydGFibGVUZXh0Q29tcG9uZW50c30gZnJvbSAnQHBvcnRhYmxldGV4dC9yZWFjdCdcbmltcG9ydCBncm9xIGZyb20gJ2dyb3EnXG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wc0NvbnRleHQsIEluZmVyR2V0U3RhdGljUHJvcHNUeXBlLCBHZXRTdGF0aWNQYXRocyB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgY2xpZW50IGZyb20gJy4uL2NsaWVudCdcblxuXG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG5tYXgtd2lkdGg6IDExNTBweDtcbm1pbi1oZWlnaHQ6IDEwMHZoO1xucGFkZGluZzogNHJlbSAwO1xubWFyZ2luOiBhdXRvO1xuZmxleDogMTtcbmRpc3BsYXk6IGZsZXg7XG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuanVzdGlmeS1jb250ZW50OiBzdGFydDtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuY29uc3QgTWFpbiA9IHN0eWxlZC5tYWluIGBcbm1pbi1oZWlnaHQ6IDEwMHZoO1xucGFkZGluZzogNHJlbSAwO1xuZmxleDogMTtcbmRpc3BsYXk6IGZsZXg7XG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuanVzdGlmeS1jb250ZW50OiBzdGFydDtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXQoeyBhdXRob3JCaW8gfTogSW5mZXJHZXRTdGF0aWNQcm9wc1R5cGU8dHlwZW9mIGdldFN0YXRpY1Byb3BzPikge1xuXG5cbiAgICBjb25zdCBbXG4gICAgICAgIGJpb0NvbnRhaW5lciA9IFtdIFxuIF0gPSBhdXRob3JCaW8gXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICA8TWFpbj5cbiAgICAgICAgICAgICAgICA8aDE+w6AgcHJvcG9zIGRlIG1vaTwvaDE+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPFBvcnRhYmxlVGV4dFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YmlvQ29udGFpbmVyLmJpby5tYXAoYiA9PiBiKX1cbiAgICAgICAgICAgICAgICAvPlxuXG5cbiAgICAgICAgICAgIDwvTWFpbj5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgKVxufVxuXG5cbmNvbnN0IHF1ZXJ5ID0gZ3JvcWAqW190eXBlID09IFwiYXV0aG9yXCJde1xuICAgIGJpbyxcbiAgfWBcbiAgXG5cblxuICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dDogR2V0U3RhdGljUHJvcHNDb250ZXh0KSB7XG4gICAgLy8gSXQncyBpbXBvcnRhbnQgdG8gZGVmYXVsdCB0aGUgc2x1ZyBzbyB0aGF0IGl0IGRvZXNuJ3QgcmV0dXJuIFwidW5kZWZpbmVkXCJcbiAgICBjb25zdCBhdXRob3JCaW8gPSBhd2FpdCBjbGllbnQuZmV0Y2gocXVlcnkpXG4gIFxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBhdXRob3JCaW8sXG4gICAgICB9XG4gICAgfVxuICB9Il0sIm5hbWVzIjpbInN0eWxlZCIsIlBvcnRhYmxlVGV4dCIsImdyb3EiLCJjbGllbnQiLCJDb250YWluZXIiLCJkaXYiLCJNYWluIiwibWFpbiIsIkFib3V0IiwiYXV0aG9yQmlvIiwiYmlvQ29udGFpbmVyIiwiYmlvIiwibWFwIiwiYiIsInF1ZXJ5IiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwiZmV0Y2giLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/about.tsx\n");

/***/ }),

/***/ "@emotion/styled":
/*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@emotion/styled");

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ "groq":
/*!***********************!*\
  !*** external "groq" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("groq");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@portabletext/react":
/*!**************************************!*\
  !*** external "@portabletext/react" ***!
  \**************************************/
/***/ ((module) => {

module.exports = import("@portabletext/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/about.tsx"));
module.exports = __webpack_exports__;

})();