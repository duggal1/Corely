"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/standard-as-callback";
exports.ids = ["vendor-chunks/standard-as-callback"];
exports.modules = {

/***/ "(rsc)/./node_modules/standard-as-callback/built/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/standard-as-callback/built/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst utils_1 = __webpack_require__(/*! ./utils */ \"(rsc)/./node_modules/standard-as-callback/built/utils.js\");\nfunction throwLater(e) {\n    setTimeout(function () {\n        throw e;\n    }, 0);\n}\nfunction asCallback(promise, nodeback, options) {\n    if (typeof nodeback === \"function\") {\n        promise.then((val) => {\n            let ret;\n            if (options !== undefined &&\n                Object(options).spread &&\n                Array.isArray(val)) {\n                ret = utils_1.tryCatch(nodeback).apply(undefined, [null].concat(val));\n            }\n            else {\n                ret =\n                    val === undefined\n                        ? utils_1.tryCatch(nodeback)(null)\n                        : utils_1.tryCatch(nodeback)(null, val);\n            }\n            if (ret === utils_1.errorObj) {\n                throwLater(ret.e);\n            }\n        }, (cause) => {\n            if (!cause) {\n                const newReason = new Error(cause + \"\");\n                Object.assign(newReason, { cause });\n                cause = newReason;\n            }\n            const ret = utils_1.tryCatch(nodeback)(cause);\n            if (ret === utils_1.errorObj) {\n                throwLater(ret.e);\n            }\n        });\n    }\n    return promise;\n}\nexports[\"default\"] = asCallback;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvc3RhbmRhcmQtYXMtY2FsbGJhY2svYnVpbHQvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsZ0JBQWdCLG1CQUFPLENBQUMseUVBQVM7QUFDakM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSwyQ0FBMkMsT0FBTztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esa0JBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9ub2RlX21vZHVsZXMvc3RhbmRhcmQtYXMtY2FsbGJhY2svYnVpbHQvaW5kZXguanM/ZWNmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcbmZ1bmN0aW9uIHRocm93TGF0ZXIoZSkge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBlO1xuICAgIH0sIDApO1xufVxuZnVuY3Rpb24gYXNDYWxsYmFjayhwcm9taXNlLCBub2RlYmFjaywgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygbm9kZWJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBwcm9taXNlLnRoZW4oKHZhbCkgPT4ge1xuICAgICAgICAgICAgbGV0IHJldDtcbiAgICAgICAgICAgIGlmIChvcHRpb25zICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICBPYmplY3Qob3B0aW9ucykuc3ByZWFkICYmXG4gICAgICAgICAgICAgICAgQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgICAgICAgICAgcmV0ID0gdXRpbHNfMS50cnlDYXRjaChub2RlYmFjaykuYXBwbHkodW5kZWZpbmVkLCBbbnVsbF0uY29uY2F0KHZhbCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0ID1cbiAgICAgICAgICAgICAgICAgICAgdmFsID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdXRpbHNfMS50cnlDYXRjaChub2RlYmFjaykobnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdXRpbHNfMS50cnlDYXRjaChub2RlYmFjaykobnVsbCwgdmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXQgPT09IHV0aWxzXzEuZXJyb3JPYmopIHtcbiAgICAgICAgICAgICAgICB0aHJvd0xhdGVyKHJldC5lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgKGNhdXNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWNhdXNlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UmVhc29uID0gbmV3IEVycm9yKGNhdXNlICsgXCJcIik7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihuZXdSZWFzb24sIHsgY2F1c2UgfSk7XG4gICAgICAgICAgICAgICAgY2F1c2UgPSBuZXdSZWFzb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXQgPSB1dGlsc18xLnRyeUNhdGNoKG5vZGViYWNrKShjYXVzZSk7XG4gICAgICAgICAgICBpZiAocmV0ID09PSB1dGlsc18xLmVycm9yT2JqKSB7XG4gICAgICAgICAgICAgICAgdGhyb3dMYXRlcihyZXQuZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGFzQ2FsbGJhY2s7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/standard-as-callback/built/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/standard-as-callback/built/utils.js":
/*!**********************************************************!*\
  !*** ./node_modules/standard-as-callback/built/utils.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.tryCatch = exports.errorObj = void 0;\n//Try catch is not supported in optimizing\n//compiler, so it is isolated\nexports.errorObj = { e: {} };\nlet tryCatchTarget;\nfunction tryCatcher(err, val) {\n    try {\n        const target = tryCatchTarget;\n        tryCatchTarget = null;\n        return target.apply(this, arguments);\n    }\n    catch (e) {\n        exports.errorObj.e = e;\n        return exports.errorObj;\n    }\n}\nfunction tryCatch(fn) {\n    tryCatchTarget = fn;\n    return tryCatcher;\n}\nexports.tryCatch = tryCatch;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvc3RhbmRhcmQtYXMtY2FsbGJhY2svYnVpbHQvdXRpbHMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsZ0JBQWdCLEdBQUcsZ0JBQWdCO0FBQ25DO0FBQ0E7QUFDQSxnQkFBZ0IsS0FBSztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrQkFBa0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9ub2RlX21vZHVsZXMvc3RhbmRhcmQtYXMtY2FsbGJhY2svYnVpbHQvdXRpbHMuanM/ZmU0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudHJ5Q2F0Y2ggPSBleHBvcnRzLmVycm9yT2JqID0gdm9pZCAwO1xuLy9UcnkgY2F0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBvcHRpbWl6aW5nXG4vL2NvbXBpbGVyLCBzbyBpdCBpcyBpc29sYXRlZFxuZXhwb3J0cy5lcnJvck9iaiA9IHsgZToge30gfTtcbmxldCB0cnlDYXRjaFRhcmdldDtcbmZ1bmN0aW9uIHRyeUNhdGNoZXIoZXJyLCB2YWwpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSB0cnlDYXRjaFRhcmdldDtcbiAgICAgICAgdHJ5Q2F0Y2hUYXJnZXQgPSBudWxsO1xuICAgICAgICByZXR1cm4gdGFyZ2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGV4cG9ydHMuZXJyb3JPYmouZSA9IGU7XG4gICAgICAgIHJldHVybiBleHBvcnRzLmVycm9yT2JqO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHRyeUNhdGNoKGZuKSB7XG4gICAgdHJ5Q2F0Y2hUYXJnZXQgPSBmbjtcbiAgICByZXR1cm4gdHJ5Q2F0Y2hlcjtcbn1cbmV4cG9ydHMudHJ5Q2F0Y2ggPSB0cnlDYXRjaDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/standard-as-callback/built/utils.js\n");

/***/ })

};
;