"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/[slug]",{

/***/ "./pages/posts/[slug].tsx":
/*!********************************!*\
  !*** ./pages/posts/[slug].tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var _home_sti_my_next_js_blog_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _home_sti_my_next_js_blog_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_sti_my_next_js_blog_web_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_sti_my_next_js_blog_web_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_sti_my_next_js_blog_web_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../client */ \"./client.js\");\n/* harmony import */ var _components_Article__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Article */ \"./components/Article.tsx\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @portabletext/react */ \"./node_modules/@portabletext/react/dist/react-portable-text.mjs\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var utils_devices__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/devices */ \"./utils/devices.ts\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/sti/my-next-js-blog/web/pages/posts/[slug].tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _templateObject,\n    _templateObject2,\n    _templateObject3,\n    _templateObject4,\n    _templateObject5,\n    _templateObject6;\n\n\n// import { GetStaticPropsContext, InferGetStaticPropsType, GetStaticPaths } from \"next\";\n// import type { Post } from '../index';\n// import Head from 'next/head';\n// import { useEffect, useState } from \"react\";\n// export default function BlogPost( { post }: InferGetStaticPropsType<typeof getStaticProps>) {\n//   const {title, body} = post\n//   const [imgSrc, setImgSrc] = useState(\"\")\n//   useEffect(() => {\n//     let random = Math.floor(Math.random() * (48 - 1) + 1)\n//     async function fetchParisPhoto() {\n//       const myHeaders = new Headers();\n//       myHeaders.append('Authorization', '563492ad6f91700001000001e23717f6d62149c9a641e2fa6ec329f6')\n//       let myInit: RequestInit = { method: 'GET',\n//                 headers: myHeaders,\n//                 mode: 'cors',\n//                 cache: 'default' };\n//       const myRequest = new Request(`https://api.pexels.com/v1/search?query=Paris&per_page=${random}`,myInit);\n//       const data = await fetch(myRequest, myInit);\n//       const json = await data.json();\n//       setImgSrc(json.photos[Math.floor(Math.random() * (json.photos.length - 1) + 1)].src.original)\n//     } \n//     fetchParisPhoto()\n//     .catch(err => console.log(err))\n//   },[])\n//   console.log('img',imgSrc)\n//   return (\n//     <Article>\n//       <Head>\n//         <title>{title}</title>\n//         <meta property='og:title' content={title} />\n//       </Head>\n//       <h1>{title}</h1>\n//       {imgSrc ? (\n//         <BlogPostImage src={imgSrc} alt=\"cute picture\"/>\n//       ): <p>chargement...</p> }\n//       <p>{body}</p>\n//     </Article>\n//   );\n// }\n// export const getStaticPaths: GetStaticPaths = async () => {\n//   const res = await fetch(\"https://jsonplaceholder.typicode.com/posts\");\n//   const posts: Post[] = await res.json();\n//   const paths = posts.map((post) => ({\n//     params: { id: post.id.toString() },\n//   }));\n//   return {\n//     paths,\n//     fallback: false,\n//   };\n// };\n// export const getStaticProps = async (context: GetStaticPropsContext) => {\n//   const { params } = context;\n//   const emptyPost: Post = {\n//     title: \"Post not found\",\n//     body: \"\",\n//     id: 0,\n//     userId: 0,\n//   };\n//   if (!params?.id) {\n//     return {\n//       props: {\n//         post: emptyPost,\n//       },\n//     };\n//   }\n//   const res = await fetch(\n//     `https://jsonplaceholder.typicode.com/posts/${params.id}`\n//   );\n//   const post: Post = await res.json();\n//   return {\n//     props: {\n//       post,\n//     },\n//   };\n// };\n\n\n\n\n\n\n\n\n\n\nfunction urlFor(source) {\n  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_9___default()(_client__WEBPACK_IMPORTED_MODULE_4__[\"default\"]).image(source);\n}\n\nvar ptComponents = {\n  types: {\n    image: function image(_ref) {\n      var _value$asset;\n\n      var value = _ref.value;\n\n      if (!(value !== null && value !== void 0 && (_value$asset = value.asset) !== null && _value$asset !== void 0 && _value$asset._ref)) {\n        return null;\n      }\n\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"img\", {\n        alt: value.alt || ' ',\n        loading: \"lazy\",\n        src: urlFor(value).quality(50).fit('max').auto('format').url()\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 137,\n        columnNumber: 9\n      }, _this);\n    }\n  }\n};\n\nvar Post = function Post(_ref2) {\n  _s();\n\n  var post = _ref2.post;\n\n  var _ref3 = post !== null && post !== void 0 ? post : {},\n      _id = _ref3._id,\n      _createdAt = _ref3._createdAt,\n      _ref3$title = _ref3.title,\n      title = _ref3$title === void 0 ? 'Missing title' : _ref3$title,\n      _ref3$name = _ref3.name,\n      name = _ref3$name === void 0 ? 'Missing name' : _ref3$name,\n      categories = _ref3.categories,\n      authorImage = _ref3.authorImage,\n      _ref3$body = _ref3.body,\n      body = _ref3$body === void 0 ? [] : _ref3$body,\n      mainImage = _ref3.mainImage,\n      likes = _ref3.likes;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(likes),\n      likesState = _useState[0],\n      setLikesState = _useState[1];\n\n  console.log(body);\n\n  var addLike = /*#__PURE__*/function () {\n    var _ref4 = (0,_home_sti_my_next_js_blog_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_sti_my_next_js_blog_web_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n      var _yield$fetch$then, newLikesState;\n\n      return _home_sti_my_next_js_blog_web_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return fetch('/api/handle-like', {\n                method: 'POST',\n                body: JSON.stringify({\n                  _id: _id\n                })\n              }).then(function (response) {\n                return response.json();\n              });\n\n            case 2:\n              _yield$fetch$then = _context.sent;\n              newLikesState = _yield$fetch$then.likes;\n              setLikesState(newLikesState);\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function addLike() {\n      return _ref4.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n    style: {\n      position: 'relative'\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Article__WEBPACK_IMPORTED_MODULE_5__.Article, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"h1\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 184,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"span\", {\n        children: [\"By \", name]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 185,\n        columnNumber: 9\n      }, _this), categories && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(TagList, {\n        children: [\"\\u30C6\\u30FC\\u30DE\", categories.map(function (category) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(TagLigtItem, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"span\", {\n              children: category\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 189,\n              columnNumber: 69\n            }, _this)\n          }, category, false, {\n            fileName: _jsxFileName,\n            lineNumber: 189,\n            columnNumber: 41\n          }, _this);\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 187,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"p\", {\n        children: new Date(_createdAt).toLocaleDateString()\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 192,\n        columnNumber: 9\n      }, _this), authorImage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"img\", {\n          style: {\n            borderRadius: '50%'\n          },\n          src: urlFor(authorImage).width(50).url()\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 195,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 194,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Article__WEBPACK_IMPORTED_MODULE_5__.BlogPostImageContainer, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_10__.PortableText, {\n          value: mainImage,\n          components: ptComponents\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 204,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 203,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_10__.PortableText, {\n        value: body,\n        components: ptComponents\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 209,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 183,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(LikesList, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"ul\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(LikesListItem, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(HeartLikeButton, {\n            onClick: addLike,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_11__.BsSuitHeartFill, {\n              color: \"red\",\n              size: 30\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 218,\n              columnNumber: 21\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 217,\n            columnNumber: 19\n          }, _this), likesState]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 216,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 215,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 214,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 182,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Post, \"6jn1JuYb6RVDXqKGUbHRG5lwoCk=\");\n\n_c = Post;\n// export type SinglePost = {\n//   _id: number,\n//   _createdAt: Date,\n//   title : string, \n//   name :string, \n//   categories : string[],\n//   authorImage: string,\n//   body : any,\n//   mainImage: any,\n//   likes: number\n// }\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar likesListWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject || (_templateObject = (0,_home_sti_my_next_js_blog_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n\"])));\nvar TagList = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__[\"default\"].ul(_templateObject2 || (_templateObject2 = (0,_home_sti_my_next_js_blog_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  margin: 1.3em 0;\\n  padding: 0;\\n\"])));\n_c2 = TagList;\nvar TagLigtItem = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__[\"default\"].li(_templateObject3 || (_templateObject3 = (0,_home_sti_my_next_js_blog_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  list-style-type: none;\\n\\n\"])));\n_c3 = TagLigtItem;\nvar LikesList = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__[\"default\"].aside(_templateObject4 || (_templateObject4 = (0,_home_sti_my_next_js_blog_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  position: static;\\n  text-align: right;\\n\\n  @media \", \" {\\n    position:fixed;\\n    width: 300px;\\n    height: 600px;\\n    right: 5%;\\n    bottom: 0;\\n  }\\n\"])), utils_devices__WEBPACK_IMPORTED_MODULE_7__.devices.laptop);\n_c4 = LikesList;\nvar LikesListItem = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__[\"default\"].li(_templateObject5 || (_templateObject5 = (0,_home_sti_my_next_js_blog_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  list-style: none;\\n\"])));\n_c5 = LikesListItem;\nvar HeartLikeButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__[\"default\"].button(_templateObject6 || (_templateObject6 = (0,_home_sti_my_next_js_blog_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  background: transparent;\\n  border:none;\\n  transition: transform 0.3s, background 0.3s;\\n  cursor: pointer;\\n\\n  &:hover {\\n    transform: scale(1.1);\\n  }\\n\"])));\n_c6 = HeartLikeButton;\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"Post\");\n$RefreshReg$(_c2, \"TagList\");\n$RefreshReg$(_c3, \"TagLigtItem\");\n$RefreshReg$(_c4, \"LikesList\");\n$RefreshReg$(_c5, \"LikesListItem\");\n$RefreshReg$(_c6, \"HeartLikeButton\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TW1EO0FBT04sSUFBTUUsU0FBUyxHQUFHckQsNkRBQUgsNFdBSUpDLHlEQUpJLENBQWY7TUFBTW9EO0FBYU4sSUFBTUcsYUFBYSxHQUFHeEQsMERBQUgsaU9BQW5CO01BQU13RDtBQUlOLElBQU1DLGVBQWUsR0FBR3pELDhEQUFILDRXQUFyQjtNQUFNeUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW3NsdWddLnRzeD8xYmViIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IEdldFN0YXRpY1Byb3BzQ29udGV4dCwgSW5mZXJHZXRTdGF0aWNQcm9wc1R5cGUsIEdldFN0YXRpY1BhdGhzIH0gZnJvbSBcIm5leHRcIjtcbi8vIGltcG9ydCB0eXBlIHsgUG9zdCB9IGZyb20gJy4uL2luZGV4Jztcbi8vIGltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG4vLyBpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2dQb3N0KCB7IHBvc3QgfTogSW5mZXJHZXRTdGF0aWNQcm9wc1R5cGU8dHlwZW9mIGdldFN0YXRpY1Byb3BzPikge1xuXG4vLyAgIGNvbnN0IHt0aXRsZSwgYm9keX0gPSBwb3N0XG4gIFxuLy8gICBjb25zdCBbaW1nU3JjLCBzZXRJbWdTcmNdID0gdXNlU3RhdGUoXCJcIilcbiBcblxuICBcbi8vICAgdXNlRWZmZWN0KCgpID0+IHtcblxuLy8gICAgIGxldCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNDggLSAxKSArIDEpXG4gICAgXG4vLyAgICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hQYXJpc1Bob3RvKCkge1xuLy8gICAgICAgY29uc3QgbXlIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbi8vICAgICAgIG15SGVhZGVycy5hcHBlbmQoJ0F1dGhvcml6YXRpb24nLCAnNTYzNDkyYWQ2ZjkxNzAwMDAxMDAwMDAxZTIzNzE3ZjZkNjIxNDljOWE2NDFlMmZhNmVjMzI5ZjYnKVxuLy8gICAgICAgbGV0IG15SW5pdDogUmVxdWVzdEluaXQgPSB7IG1ldGhvZDogJ0dFVCcsXG4vLyAgICAgICAgICAgICAgICAgaGVhZGVyczogbXlIZWFkZXJzLFxuLy8gICAgICAgICAgICAgICAgIG1vZGU6ICdjb3JzJyxcbi8vICAgICAgICAgICAgICAgICBjYWNoZTogJ2RlZmF1bHQnIH07XG4vLyAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdChgaHR0cHM6Ly9hcGkucGV4ZWxzLmNvbS92MS9zZWFyY2g/cXVlcnk9UGFyaXMmcGVyX3BhZ2U9JHtyYW5kb219YCxteUluaXQpO1xuLy8gICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKG15UmVxdWVzdCwgbXlJbml0KTtcbi8vICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCBkYXRhLmpzb24oKTtcblxuLy8gICAgICAgc2V0SW1nU3JjKGpzb24ucGhvdG9zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChqc29uLnBob3Rvcy5sZW5ndGggLSAxKSArIDEpXS5zcmMub3JpZ2luYWwpXG4gICAgICBcbi8vICAgICB9IFxuICAgIFxuLy8gICAgIGZldGNoUGFyaXNQaG90bygpXG4vLyAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxuICAgIFxuICAgIFxuLy8gICB9LFtdKVxuICBcbi8vICAgY29uc29sZS5sb2coJ2ltZycsaW1nU3JjKVxuXG5cblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDxBcnRpY2xlPlxuLy8gICAgICAgPEhlYWQ+XG4vLyAgICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbi8vICAgICAgICAgPG1ldGEgcHJvcGVydHk9J29nOnRpdGxlJyBjb250ZW50PXt0aXRsZX0gLz5cbi8vICAgICAgIDwvSGVhZD5cbi8vICAgICAgIDxoMT57dGl0bGV9PC9oMT5cbi8vICAgICAgIHtpbWdTcmMgPyAoXG4gICAgICAgIFxuLy8gICAgICAgICA8QmxvZ1Bvc3RJbWFnZSBzcmM9e2ltZ1NyY30gYWx0PVwiY3V0ZSBwaWN0dXJlXCIvPlxuXG4vLyAgICAgICApOiA8cD5jaGFyZ2VtZW50Li4uPC9wPiB9XG4vLyAgICAgICA8cD57Ym9keX08L3A+XG4vLyAgICAgPC9BcnRpY2xlPlxuLy8gICApO1xuLy8gfVxuXG4vLyBleHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHM6IEdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuLy8gICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0c1wiKTtcbi8vICAgY29uc3QgcG9zdHM6IFBvc3RbXSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbi8vICAgY29uc3QgcGF0aHMgPSBwb3N0cy5tYXAoKHBvc3QpID0+ICh7XG4vLyAgICAgcGFyYW1zOiB7IGlkOiBwb3N0LmlkLnRvU3RyaW5nKCkgfSxcbi8vICAgfSkpO1xuXG4vLyAgIHJldHVybiB7XG4vLyAgICAgcGF0aHMsXG4vLyAgICAgZmFsbGJhY2s6IGZhbHNlLFxuLy8gICB9O1xuLy8gfTtcblxuLy8gZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKGNvbnRleHQ6IEdldFN0YXRpY1Byb3BzQ29udGV4dCkgPT4ge1xuLy8gICBjb25zdCB7IHBhcmFtcyB9ID0gY29udGV4dDtcblxuLy8gICBjb25zdCBlbXB0eVBvc3Q6IFBvc3QgPSB7XG4vLyAgICAgdGl0bGU6IFwiUG9zdCBub3QgZm91bmRcIixcbi8vICAgICBib2R5OiBcIlwiLFxuLy8gICAgIGlkOiAwLFxuLy8gICAgIHVzZXJJZDogMCxcbi8vICAgfTtcblxuLy8gICBpZiAoIXBhcmFtcz8uaWQpIHtcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgcHJvcHM6IHtcbi8vICAgICAgICAgcG9zdDogZW1wdHlQb3N0LFxuLy8gICAgICAgfSxcbi8vICAgICB9O1xuLy8gICB9XG5cbi8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4vLyAgICAgYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy8ke3BhcmFtcy5pZH1gXG4vLyAgICk7XG5cbi8vICAgY29uc3QgcG9zdDogUG9zdCA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbi8vICAgcmV0dXJuIHtcbi8vICAgICBwcm9wczoge1xuLy8gICAgICAgcG9zdCxcbi8vICAgICB9LFxuLy8gICB9O1xuLy8gfTtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsaWVudCBmcm9tICcuLi8uLi9jbGllbnQnXG5pbXBvcnQgeyBBcnRpY2xlLCBCbG9nUG9zdEltYWdlQ29udGFpbmVyIH0gZnJvbSBcIkBjb21wb25lbnRzL0FydGljbGVcIjtcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnXG5pbXBvcnQge1BvcnRhYmxlVGV4dH0gZnJvbSAnQHBvcnRhYmxldGV4dC9yZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGRldmljZXMgfSBmcm9tICd1dGlscy9kZXZpY2VzJztcblxuXG5pbXBvcnQgZ3JvcSBmcm9tICdncm9xJ1xuXG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wc0NvbnRleHQsIEluZmVyR2V0U3RhdGljUHJvcHNUeXBlLCBHZXRTdGF0aWNQYXRocyB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgU2FuaXR5SW1hZ2VTb3VyY2UgfSBmcm9tICdAc2FuaXR5L2ltYWdlLXVybC9saWIvdHlwZXMvdHlwZXMnO1xuaW1wb3J0IHsgQnNTdWl0SGVhcnRGaWxsIH0gZnJvbSAncmVhY3QtaWNvbnMvYnMnXG5cbmludGVyZmFjZSBJUGFyYW1zIGV4dGVuZHMgUGFyc2VkVXJsUXVlcnkge1xuICBzbHVnOiBzdHJpbmdcbn1cblxuXG5mdW5jdGlvbiB1cmxGb3IgKHNvdXJjZTogU2FuaXR5SW1hZ2VTb3VyY2UpIHtcbiAgcmV0dXJuIGltYWdlVXJsQnVpbGRlcihjbGllbnQpLmltYWdlKHNvdXJjZSlcbn1cblxuXG5jb25zdCBwdENvbXBvbmVudHMgPSB7XG4gIHR5cGVzOiB7XG4gICAgaW1hZ2U6ICh7IHZhbHVlIH0pID0+IHtcbiAgICAgIGlmICghdmFsdWU/LmFzc2V0Py5fcmVmKSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8aW1nXG4gICAgICAgICAgYWx0PXt2YWx1ZS5hbHQgfHwgJyAnfVxuICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICBzcmM9e3VybEZvcih2YWx1ZSkucXVhbGl0eSg1MCkuZml0KCdtYXgnKS5hdXRvKCdmb3JtYXQnKS51cmwoKX1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9XG4gIH1cbn1cblxuXG5jb25zdCBQb3N0ID0gKHsgcG9zdCB9OiBJbmZlckdldFN0YXRpY1Byb3BzVHlwZTx0eXBlb2YgZ2V0U3RhdGljUHJvcHM+KSA9PiB7XG5cblxuXG5cbiAgY29uc3QgeyBcbiAgICBfaWQsXG4gICAgX2NyZWF0ZWRBdCxcbiAgICB0aXRsZSA9ICdNaXNzaW5nIHRpdGxlJywgXG4gICAgbmFtZSA9ICdNaXNzaW5nIG5hbWUnLCBcbiAgICBjYXRlZ29yaWVzLCBcbiAgICBhdXRob3JJbWFnZSxcbiAgICBib2R5ID0gW10sXG4gICAgbWFpbkltYWdlLFxuICAgIGxpa2VzXG4gIH0gPSBwb3N0ID8/IHt9XG5cbiAgY29uc3QgW2xpa2VzU3RhdGUsIHNldExpa2VzU3RhdGVdID0gdXNlU3RhdGUobGlrZXMpXG4gIFxuXG5cblxuICBjb25zb2xlLmxvZyhib2R5KVxuXG4gIGNvbnN0IGFkZExpa2UgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgeyBsaWtlczogbmV3TGlrZXNTdGF0ZSB9ID0gYXdhaXQgZmV0Y2goJy9hcGkvaGFuZGxlLWxpa2UnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtfaWR9KVxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG5cbiAgICBzZXRMaWtlc1N0YXRlKG5ld0xpa2VzU3RhdGUpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3twb3NpdGlvbjogJ3JlbGF0aXZlJ319PlxuICAgICAgPEFydGljbGU+XG4gICAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgICAgPHNwYW4+Qnkge25hbWV9PC9zcGFuPlxuICAgICAgICB7Y2F0ZWdvcmllcyAmJiAoXG4gICAgICAgICAgPFRhZ0xpc3Q+XG4gICAgICAgICAgICDjg4bjg7zjg55cbiAgICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcChjYXRlZ29yeSA9PiA8VGFnTGlndEl0ZW0ga2V5PXtjYXRlZ29yeX0+PHNwYW4+e2NhdGVnb3J5fTwvc3Bhbj48L1RhZ0xpZ3RJdGVtPil9XG4gICAgICAgICAgPC9UYWdMaXN0PlxuICAgICAgICApfVxuICAgICAgICA8cD57bmV3IERhdGUoX2NyZWF0ZWRBdCkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9PC9wPlxuICAgICAgICB7YXV0aG9ySW1hZ2UgJiYgKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHN0eWxlPXt7Ym9yZGVyUmFkaXVzOic1MCUnfX1cbiAgICAgICAgICAgICAgc3JjPXt1cmxGb3IoYXV0aG9ySW1hZ2UpXG4gICAgICAgICAgICAgICAgLndpZHRoKDUwKVxuICAgICAgICAgICAgICAgIC51cmwoKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDxCbG9nUG9zdEltYWdlQ29udGFpbmVyPlxuICAgICAgICAgIDxQb3J0YWJsZVRleHRcbiAgICAgICAgICAgIHZhbHVlPXttYWluSW1hZ2V9XG4gICAgICAgICAgICBjb21wb25lbnRzPXtwdENvbXBvbmVudHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9CbG9nUG9zdEltYWdlQ29udGFpbmVyPlxuICAgICAgICA8UG9ydGFibGVUZXh0XG4gICAgICAgICAgdmFsdWU9e2JvZHl9XG4gICAgICAgICAgY29tcG9uZW50cz17cHRDb21wb25lbnRzfVxuICAgICAgICAvPlxuICAgICAgPC9BcnRpY2xlPlxuICAgICAgPExpa2VzTGlzdD5cbiAgICAgICAgPHVsPlxuICAgICAgICAgICAgPExpa2VzTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICA8SGVhcnRMaWtlQnV0dG9uIG9uQ2xpY2s9e2FkZExpa2V9PlxuICAgICAgICAgICAgICAgICAgICA8QnNTdWl0SGVhcnRGaWxsIGNvbG9yPSdyZWQnIHNpemU9ezMwfSAvPlxuICAgICAgICAgICAgICAgICAgPC9IZWFydExpa2VCdXR0b24+e2xpa2VzU3RhdGV9XG4gICAgICAgICAgICAgICAgPC9MaWtlc0xpc3RJdGVtPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9MaWtlc0xpc3Q+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgcXVlcnkgPSBncm9xYCpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgc2x1Zy5jdXJyZW50ID09ICRzbHVnXVswXXtcbiAgX2lkLFxuICBfY3JlYXRlZEF0LFxuICB0aXRsZSxcbiAgXCJuYW1lXCI6IGF1dGhvci0+bmFtZSxcbiAgXCJjYXRlZ29yaWVzXCI6IGNhdGVnb3JpZXNbXS0+dGl0bGUsXG4gIFwiYXV0aG9ySW1hZ2VcIjogYXV0aG9yLT5pbWFnZSxcbiAgYm9keSxcbiAgbWFpbkltYWdlLFxuICBsaWtlc1xufWBcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBwYXRocyA9IGF3YWl0IGNsaWVudC5mZXRjaChcbiAgICBgKltfdHlwZSA9PSBcInBvc3RcIiAmJiBkZWZpbmVkKHNsdWcuY3VycmVudCldW10uc2x1Zy5jdXJyZW50YFxuICApXG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoczogcGF0aHMubWFwKChzbHVnOiBzdHJpbmcpID0+ICh7cGFyYW1zOiB7c2x1Z319KSksXG4gICAgZmFsbGJhY2s6IHRydWUsXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQ6IEdldFN0YXRpY1Byb3BzQ29udGV4dCkge1xuICAvLyBJdCdzIGltcG9ydGFudCB0byBkZWZhdWx0IHRoZSBzbHVnIHNvIHRoYXQgaXQgZG9lc24ndCByZXR1cm4gXCJ1bmRlZmluZWRcIlxuICBjb25zdCB7IHNsdWcgPSBcIlwiIH0gPSBjb250ZXh0LnBhcmFtcyBhcyBJUGFyYW1zXG4gIGNvbnN0IHBvc3QgPSBhd2FpdCBjbGllbnQuZmV0Y2gocXVlcnksIHsgc2x1ZyB9KVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3QsXG4gICAgfVxuICB9XG59XG5cblxuLy8gZXhwb3J0IHR5cGUgU2luZ2xlUG9zdCA9IHtcbi8vICAgX2lkOiBudW1iZXIsXG4vLyAgIF9jcmVhdGVkQXQ6IERhdGUsXG4vLyAgIHRpdGxlIDogc3RyaW5nLCBcbi8vICAgbmFtZSA6c3RyaW5nLCBcbi8vICAgY2F0ZWdvcmllcyA6IHN0cmluZ1tdLFxuLy8gICBhdXRob3JJbWFnZTogc3RyaW5nLFxuLy8gICBib2R5IDogYW55LFxuLy8gICBtYWluSW1hZ2U6IGFueSxcbi8vICAgbGlrZXM6IG51bWJlclxuLy8gfVxuXG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RcblxuXG5cbmNvbnN0IGxpa2VzTGlzdFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuYFxuXG5cbmNvbnN0IFRhZ0xpc3QgPSBzdHlsZWQudWxgXG4gIG1hcmdpbjogMS4zZW0gMDtcbiAgcGFkZGluZzogMDtcbmBcblxuY29uc3QgVGFnTGlndEl0ZW0gPSBzdHlsZWQubGlgXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcblxuYFxuXG5cblxuY29uc3QgTGlrZXNMaXN0ID0gc3R5bGVkLmFzaWRlYFxuICBwb3NpdGlvbjogc3RhdGljO1xuICB0ZXh0LWFsaWduOiByaWdodDtcblxuICBAbWVkaWEgJHtkZXZpY2VzLmxhcHRvcH0ge1xuICAgIHBvc2l0aW9uOmZpeGVkO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDYwMHB4O1xuICAgIHJpZ2h0OiA1JTtcbiAgICBib3R0b206IDA7XG4gIH1cbmBcblxuY29uc3QgTGlrZXNMaXN0SXRlbSA9IHN0eWxlZC5saWBcbiAgbGlzdC1zdHlsZTogbm9uZTtcbmBcblxuY29uc3QgSGVhcnRMaWtlQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjpub25lO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgYmFja2dyb3VuZCAwLjNzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB9XG5gIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiY2xpZW50IiwiQXJ0aWNsZSIsIkJsb2dQb3N0SW1hZ2VDb250YWluZXIiLCJpbWFnZVVybEJ1aWxkZXIiLCJQb3J0YWJsZVRleHQiLCJzdHlsZWQiLCJkZXZpY2VzIiwiQnNTdWl0SGVhcnRGaWxsIiwidXJsRm9yIiwic291cmNlIiwiaW1hZ2UiLCJwdENvbXBvbmVudHMiLCJ0eXBlcyIsInZhbHVlIiwiYXNzZXQiLCJfcmVmIiwiYWx0IiwicXVhbGl0eSIsImZpdCIsImF1dG8iLCJ1cmwiLCJQb3N0IiwicG9zdCIsIl9pZCIsIl9jcmVhdGVkQXQiLCJ0aXRsZSIsIm5hbWUiLCJjYXRlZ29yaWVzIiwiYXV0aG9ySW1hZ2UiLCJib2R5IiwibWFpbkltYWdlIiwibGlrZXMiLCJsaWtlc1N0YXRlIiwic2V0TGlrZXNTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJhZGRMaWtlIiwiZmV0Y2giLCJtZXRob2QiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsIm5ld0xpa2VzU3RhdGUiLCJwb3NpdGlvbiIsIm1hcCIsImNhdGVnb3J5IiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImJvcmRlclJhZGl1cyIsIndpZHRoIiwibGlrZXNMaXN0V3JhcHBlciIsImRpdiIsIlRhZ0xpc3QiLCJ1bCIsIlRhZ0xpZ3RJdGVtIiwibGkiLCJMaWtlc0xpc3QiLCJhc2lkZSIsImxhcHRvcCIsIkxpa2VzTGlzdEl0ZW0iLCJIZWFydExpa2VCdXR0b24iLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/[slug].tsx\n");

/***/ })

});