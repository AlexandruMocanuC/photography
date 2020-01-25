module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ../node_modules/@nore/std/assert/isGeneratorFunction.js
function isGeneratorFunction(source) {
	return (
		source != null &&
		source.constructor &&
		source.constructor.name === "GeneratorFunction"
	);
}

// EXTERNAL MODULE: ../node_modules/@nore/std/assert/isObject.js
var isObject = __webpack_require__(7);

// CONCATENATED MODULE: ../node_modules/@nore/std/assert/isFunction.js
function isFunction(source) {
	return typeof source === "function";
}

// CONCATENATED MODULE: ../node_modules/@nore/std/assert/isGeneratorObject.js



function isGeneratorObject(source) {
	return (
		Object(isObject["a" /* default */])(source) &&
		isFunction(source.throw) &&
		isFunction(source.return) &&
		isFunction(source.next)
	);
}

// CONCATENATED MODULE: ../node_modules/@nore/std/assert/isAsyncFunction.js
function isAsyncFunction(source) {
	return (
		source != null &&
		source.constructor &&
		source.constructor.name === "AsyncFunction"
	);
}

// CONCATENATED MODULE: ../node_modules/@nore/std/assert/isArguments.js
function isArguments(source) {
	try {
		if (
			typeof source.length === "number" &&
			typeof source.callee === "function"
		) {
			return true;
		}
	} catch (error) {
		if (error.message.indexOf("callee") !== -1) {
			return true;
		}
	}

	return false;
}

// CONCATENATED MODULE: ../node_modules/@nore/std/assert/isBoolean.js
function isBoolean(source) {
	return source === true || source === false;
}

// CONCATENATED MODULE: ../node_modules/@nore/std/assert/isNaN.js
function isNaN_isNaN(source) {
	return source !== source;
}

/* harmony default export */ var assert_isNaN = (Number.isNaN || isNaN_isNaN);

// CONCATENATED MODULE: ../node_modules/@nore/std/assert/isFalsy.js


// https://developer.mozilla.org/en-US/docs/Glossary/Falsy
function isFalsy(source) {
	return (
		source === false ||
		source === undefined ||
		source === null ||
		source === 0 ||
		source === "" ||
		assert_isNaN(source)
	);
}

// CONCATENATED MODULE: ../node_modules/@nore/std/assert/isTruthy.js


/*
	https://developer.mozilla.org/en-US/docs/Glossary/Truthy

	All values are truthy unless they are defined as falsy
	(i.e., except for false, 0, "", null, undefined, and NaN).
*/
function isTruthy(source) {
	return !isFalsy(source);
}

// CONCATENATED MODULE: ../node_modules/@nore/std/assert/isNull.js
function isNull(source) {
	return source === null;
}

// CONCATENATED MODULE: ../node_modules/@nore/std/assert/isNumber.js


function isNumber(source) {
	return typeof source === "number" && !assert_isNaN(source);
}

// CONCATENATED MODULE: ../node_modules/@nore/std/assert/isString.js
function isString(source) {
	return typeof source === "string";
}

// CONCATENATED MODULE: ../node_modules/@nore/std/assert/isSymbol.js
function isSymbol(source) {
	return typeof source === "symbol";
}

// CONCATENATED MODULE: ../node_modules/@nore/std/assert/isPrimitive.js
function isPrimitive(source) {
	const type = typeof source;

	return (type !== "object" && type !== "function") || source === null;
}

// EXTERNAL MODULE: ../node_modules/@nore/std/assert/isArray.js
var isArray = __webpack_require__(9);

// CONCATENATED MODULE: ../node_modules/@nore/std/assert/isBuffer.js
function isBuffer(source) {
	return typeof Buffer === "function" && Buffer.isBuffer(source);
}

// CONCATENATED MODULE: ../node_modules/@nore/std/assert/isRegExp.js
function isRegExp(source) {
	return source instanceof RegExp;
}

// CONCATENATED MODULE: ../node_modules/@nore/std/assert/isDate.js
function isDate(source) {
	return source instanceof Date;
}

// CONCATENATED MODULE: ../node_modules/@nore/std/assert/isError.js
function isError(source) {
	return source instanceof Error;
}

// CONCATENATED MODULE: ../node_modules/@nore/std/assert/isPromise.js
function isPromise(source) {
	return (
		source != null &&
		typeof source === "object" &&
		typeof source.then === "function"
	);
}

// CONCATENATED MODULE: ../node_modules/@nore/std/assert/index.js
/* concated harmony reexport isGeneratorFunction */__webpack_require__.d(__webpack_exports__, "isGeneratorFunction", function() { return isGeneratorFunction; });
/* concated harmony reexport isGeneratorObject */__webpack_require__.d(__webpack_exports__, "isGeneratorObject", function() { return isGeneratorObject; });
/* concated harmony reexport isAsyncFunction */__webpack_require__.d(__webpack_exports__, "isAsyncFunction", function() { return isAsyncFunction; });
/* concated harmony reexport isFunction */__webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* concated harmony reexport isArguments */__webpack_require__.d(__webpack_exports__, "isArguments", function() { return isArguments; });
/* concated harmony reexport isBoolean */__webpack_require__.d(__webpack_exports__, "isBoolean", function() { return isBoolean; });
/* concated harmony reexport isTruthy */__webpack_require__.d(__webpack_exports__, "isTruthy", function() { return isTruthy; });
/* concated harmony reexport isFalsy */__webpack_require__.d(__webpack_exports__, "isFalsy", function() { return isFalsy; });
/* concated harmony reexport isNull */__webpack_require__.d(__webpack_exports__, "isNull", function() { return isNull; });
/* concated harmony reexport isNaN */__webpack_require__.d(__webpack_exports__, "isNaN", function() { return assert_isNaN; });
/* concated harmony reexport isNumber */__webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* concated harmony reexport isString */__webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* concated harmony reexport isSymbol */__webpack_require__.d(__webpack_exports__, "isSymbol", function() { return isSymbol; });
/* concated harmony reexport isPrimitive */__webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return isPrimitive; });
/* concated harmony reexport isObject */__webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject["a" /* default */]; });
/* concated harmony reexport isArray */__webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray["a" /* default */]; });
/* concated harmony reexport isBuffer */__webpack_require__.d(__webpack_exports__, "isBuffer", function() { return isBuffer; });
/* concated harmony reexport isRegExp */__webpack_require__.d(__webpack_exports__, "isRegExp", function() { return isRegExp; });
/* concated harmony reexport isDate */__webpack_require__.d(__webpack_exports__, "isDate", function() { return isDate; });
/* concated harmony reexport isError */__webpack_require__.d(__webpack_exports__, "isError", function() { return isError; });
/* concated harmony reexport isPromise */__webpack_require__.d(__webpack_exports__, "isPromise", function() { return isPromise; });


























/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "PluginError", { enumerable: true, get: function () {return _PluginError.default;} });Object.defineProperty(exports, "Failed", { enumerable: true, get: function () {return _Failed.default;} });Object.defineProperty(exports, "JSONSchema", { enumerable: true, get: function () {return _JSONSchema.default;} });Object.defineProperty(exports, "version", { enumerable: true, get: function () {return _package.version;} });Object.defineProperty(exports, "on", { enumerable: true, get: function () {return _events.on;} });Object.defineProperty(exports, "emit", { enumerable: true, get: function () {return _events.emit;} });Object.defineProperty(exports, "define", { enumerable: true, get: function () {return _services.define;} });Object.defineProperty(exports, "use", { enumerable: true, get: function () {return _services.use;} });Object.defineProperty(exports, "config", { enumerable: true, get: function () {return _configEval.default;} });Object.defineProperty(exports, "plug", { enumerable: true, get: function () {return _plugs.default;} });Object.defineProperty(exports, "log", { enumerable: true, get: function () {return _log.default;} });Object.defineProperty(exports, "uid", { enumerable: true, get: function () {return _cuid.default;} });var _PluginError = _interopRequireDefault(__webpack_require__(16));
var _Failed = _interopRequireDefault(__webpack_require__(12));
var _JSONSchema = _interopRequireDefault(__webpack_require__(18));
var _package = __webpack_require__(34);
var _events = __webpack_require__(13);
var _services = __webpack_require__(20);
var _configEval = _interopRequireDefault(__webpack_require__(35));
var _plugs = _interopRequireDefault(__webpack_require__(36));
var _log = _interopRequireDefault(__webpack_require__(10));
var _cuid = _interopRequireDefault(__webpack_require__(8));


__webpack_require__(38);
__webpack_require__(39);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/@nore/std/assert/isArray.js
var isArray = __webpack_require__(9);

// CONCATENATED MODULE: ../node_modules/@nore/std/array/pickRandom.js
function pickRandom(source) {
	const index = ~~(Math.random() * source.length);

	return source[index];
}

// EXTERNAL MODULE: ../node_modules/@nore/std/assert/index.js + 19 modules
var assert = __webpack_require__(0);

// CONCATENATED MODULE: ../node_modules/@nore/std/array/insertAt.js


function insertAt(list, index, items) {
	if (!Object(assert["isArray"])(list)) {
		throw new TypeError(`Argument "list" must be an array`);
	}

	if (!Object(assert["isNumber"])(index)) {
		throw new TypeError(`Argument "index" must be a number`);
	}

	if (!Object(assert["isArray"])(items)) {
		throw new TypeError(`Argument "items" must be an array`);
	}

	list.splice(index, 0, ...items);

	return list;
}

// CONCATENATED MODULE: ../node_modules/@nore/std/array/flatten.js


function flatten(list) {
	if (!Object(assert["isArray"])(list)) {
		throw new TypeError(`Argument "list" must be an array`);
	}

	const result = [];

	for (let i = 0; i < list.length; i++) {
		const item = list[i];

		if (Object(assert["isArray"])(item)) {
			result.push.apply(result, flatten(item));
		} else {
			result.push(item);
		}
	}

	return result;
}

// CONCATENATED MODULE: ../node_modules/@nore/std/array/shuffle.js
function shuffle(source) {
	const list = source.slice();

	let index = list.length;

	while (index > 0) {
		const random = Math.floor(Math.random() * index--);
		const current = list[index];

		list[index] = list[random];
		list[random] = current;
	}

	return list;
}

// CONCATENATED MODULE: ../node_modules/@nore/std/array/union.js


function union(...sources) {
	const result = [];

	for (let source of sources) {
		if (!Object(assert["isArray"])(source)) continue;

		for (let i = 0; i < source.length; i++) {
			const item = source[i];

			if (result.indexOf(item) === -1) {
				result.push(item);
			}
		}
	}

	return result.sort();
}

// CONCATENATED MODULE: ../node_modules/@nore/std/array/unique.js


function unique(list) {
	if (!Object(assert["isArray"])(list)) {
		throw new TypeError(`Argument "list" must be an array`);
	}

	const result = [];

	for (let item of list) {
		if (!result.includes(item)) {
			result.push(item);
		}
	}

	return result;
}

// CONCATENATED MODULE: ../node_modules/@nore/std/array/index.js
/* concated harmony reexport isArray */__webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray["a" /* default */]; });
/* concated harmony reexport pickRandom */__webpack_require__.d(__webpack_exports__, "pickRandom", function() { return pickRandom; });
/* concated harmony reexport insertAt */__webpack_require__.d(__webpack_exports__, "insertAt", function() { return insertAt; });
/* concated harmony reexport flatten */__webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
/* concated harmony reexport shuffle */__webpack_require__.d(__webpack_exports__, "shuffle", function() { return shuffle; });
/* concated harmony reexport union */__webpack_require__.d(__webpack_exports__, "union", function() { return union; });
/* concated harmony reexport unique */__webpack_require__.d(__webpack_exports__, "unique", function() { return unique; });









/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/@nore/std/assert/isObject.js
var isObject = __webpack_require__(7);

// EXTERNAL MODULE: ../node_modules/@nore/std/assert/index.js + 19 modules
var assert = __webpack_require__(0);

// CONCATENATED MODULE: ../node_modules/@nore/std/object/get.js


function get(target, path) {
	if (!Object(assert["isObject"])(target)) {
		throw new TypeError(`Argument "target" must me an object`);
	}

	path = Object(assert["isArray"])(path) ? path : path.split(".");

	for (let i = 0, node = target; i < path.length; ++i) {
		const isLast = i === path.length - 1;
		const key = path[i];

		if (node === undefined) {
			return undefined;
		}

		if (isLast) {
			return node[key];
		} else {
			node = node[key];

			if (!Object(assert["isObject"])(node)) {
				return undefined;
			}
		}
	}
}

// CONCATENATED MODULE: ../node_modules/@nore/std/object/set.js


function set(target, path, value) {
	if (!Object(assert["isObject"])(target)) {
		throw new TypeError(`Argument "target" must me an object`);
	}

	path = Object(assert["isArray"])(path) ? path : path.split(".");

	for (let i = 0, node = target; i < path.length; ++i) {
		const isLast = i === path.length - 1;
		const key = path[i];

		// add value on leaf
		if (isLast) {
			node[key] = value;
		} else {
			let value = node[key];

			// create nested objects if not available
			if (value == null) {
				node[key] = value = {};
			} else if (!Object(assert["isObject"])(value)) {
				const where = path.slice(0, i).join(".");

				throw new Error(
					`set(): path on object encountered a ${key} "${value}" on "${where}" last: ${isLast} i:${i} l:${path.length}`
				);
			}

			node = value;
		}
	}
}

// CONCATENATED MODULE: ../node_modules/@nore/std/object/pick.js


function pick(source, keys) {
	if (!Object(assert["isObject"])(source)) {
		throw new TypeError(`Argument "source" must be an object`);
	}

	if (!Object(assert["isArray"])(keys)) {
		throw new TypeError(`Argument "keys" must be an array`);
	}

	const result = {};

	for (const key of keys) {
		if (key in source) {
			result[key] = source[key];
		}
	}

	return result;
}

// CONCATENATED MODULE: ../node_modules/@nore/std/object/omit.js


function omit(source, keys) {
	if (!Object(assert["isObject"])(source)) {
		throw new TypeError(`Argument "source" must me an object`);
	}

	if (!Object(assert["isArray"])(keys)) {
		throw new TypeError(`Argument "keys" must me an array`);
	}

	const result = {};

	for (const key in source) {
		if (!keys.includes(key)) {
			result[key] = source[key];
		}
	}

	return result;
}

// CONCATENATED MODULE: ../node_modules/@nore/std/object/first.js


function first(source) {
	if (!Object(assert["isObject"])(source)) {
		throw new TypeError(`Argument "source" must be an object`);
	}

	for (const key in source) {
		return source[key];
	}
}

// CONCATENATED MODULE: ../node_modules/@nore/std/object/firstKey.js


function firstKey(source) {
	if (!Object(assert["isObject"])(source)) {
		throw new TypeError(`Argument "source" must be an object`);
	}

	for (const key in source) {
		return key;
	}
}

// CONCATENATED MODULE: ../node_modules/@nore/std/object/keys.js
/* harmony default export */ var object_keys = (Object.keys);

// CONCATENATED MODULE: ../node_modules/@nore/std/object/values.js
/* harmony default export */ var values = (Object.values);

// EXTERNAL MODULE: ../node_modules/@nore/std/array/index.js + 6 modules
var array = __webpack_require__(3);

// EXTERNAL MODULE: ../node_modules/@nore/std/utils/index.js + 5 modules
var utils = __webpack_require__(15);

// CONCATENATED MODULE: ../node_modules/@nore/std/object/merge.js




const { keys: merge_keys } = Object;

function merge(...sources) {
	if (sources.length === 0) {
		throw new TypeError(`Argument "source" must be an object`);
	}

	const target = {};

	for (const source of sources) {
		if (!Object(assert["isObject"])(source)) continue;

		for (const key of merge_keys(source)) {
			const oldValue = target[key];
			const newValue = source[key];

			if (newValue === undefined) continue;

			if (Object(assert["isArray"])(oldValue)) {
				target[key] = Object(array["union"])(oldValue, newValue);
			} else if (Object(assert["isObject"])(oldValue) && Object(assert["isObject"])(newValue)) {
				target[key] = merge(oldValue, newValue);
			} else {
				target[key] = Object(utils["clone"])(newValue);
			}
		}
	}

	return target;
}

// CONCATENATED MODULE: ../node_modules/@nore/std/object/assign.js
/* harmony default export */ var object_assign = (Object.assign);

// CONCATENATED MODULE: ../node_modules/@nore/std/object/index.js
/* concated harmony reexport isObject */__webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject["a" /* default */]; });
/* concated harmony reexport get */__webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* concated harmony reexport set */__webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* concated harmony reexport pick */__webpack_require__.d(__webpack_exports__, "pick", function() { return pick; });
/* concated harmony reexport omit */__webpack_require__.d(__webpack_exports__, "omit", function() { return omit; });
/* concated harmony reexport first */__webpack_require__.d(__webpack_exports__, "first", function() { return first; });
/* concated harmony reexport firstKey */__webpack_require__.d(__webpack_exports__, "firstKey", function() { return firstKey; });
/* concated harmony reexport keys */__webpack_require__.d(__webpack_exports__, "keys", function() { return object_keys; });
/* concated harmony reexport values */__webpack_require__.d(__webpack_exports__, "values", function() { return values; });
/* concated harmony reexport merge */__webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* concated harmony reexport assign */__webpack_require__.d(__webpack_exports__, "assign", function() { return object_assign; });













/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(6);

// CONCATENATED MODULE: ../node_modules/@nore/std/path/isAbsolute.js
function isAbsolute(path) {
	return path.charAt(0) === "/";
}

// CONCATENATED MODULE: ../node_modules/@nore/std/path/isRelative.js
function isRelative(path) {
	const charAt0 = path.charAt(0);
	const charAt1 = path.charAt(1);

	return charAt0 === "." && (charAt1 === "/" || charAt1 === ".");
}

// CONCATENATED MODULE: ../node_modules/@nore/std/path/index.js
/* concated harmony reexport getExtension */__webpack_require__.d(__webpack_exports__, "getExtension", function() { return external_path_["extname"]; });
/* concated harmony reexport getDirectory */__webpack_require__.d(__webpack_exports__, "getDirectory", function() { return external_path_["dirname"]; });
/* concated harmony reexport getFileName */__webpack_require__.d(__webpack_exports__, "getFileName", function() { return external_path_["basename"]; });
/* concated harmony reexport relative */__webpack_require__.d(__webpack_exports__, "relative", function() { return external_path_["relative"]; });
/* concated harmony reexport resolve */__webpack_require__.d(__webpack_exports__, "resolve", function() { return external_path_["resolve"]; });
/* concated harmony reexport join */__webpack_require__.d(__webpack_exports__, "join", function() { return external_path_["join"]; });
/* concated harmony reexport isAbsolute */__webpack_require__.d(__webpack_exports__, "isAbsolute", function() { return isAbsolute; });
/* concated harmony reexport isRelative */__webpack_require__.d(__webpack_exports__, "isRelative", function() { return isRelative; });


// URL path helpers




/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isObject; });
function isObject(source) {
	const type = typeof source;

	return source != null && (type === "object" || type === "function");
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("cuid");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (Array.isArray);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _pino = _interopRequireDefault(__webpack_require__(37));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const output =  true && {
  translateTime: "HH:MM:ss",
  ignore: "pid,hostname" };


const log = (0, _pino.default)({
  name: "nore",
  level: true ? "debug" : undefined,
  prettyPrint: output });var _default =


log;exports.default = _default;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("xql");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _util = __webpack_require__(17);

/*
                                                                                                                                 	id:       to uniquely identify the error
                                                                                                                                 	type:     containing the error type, e.g. `OAuthException`, `SystemError`
                                                                                                                                 	message:  with the error message
                                                                                                                                 	code:     that can be used to programmatically identify the error
                                                                                                                                 	cause:    an error or set of errors that caused this error
                                                                                                                                 	source:   where the error originated from
                                                                                                                                 */

const messages = {
  DEFAULT: "Something unexpected caused the procedure to fail",
  SCHEMA_VALIDATION: "Schema validation failed",
  SCHEMA_DEFINED: `Field schema "%s" was already defined`,
  SCHEMA_TYPE: `Invalid schema type "%s"` };


function fmtMessage(args) {
  switch (args.type) {
    case "SCHEMA_DEFINED":
    case "SCHEMA_TYPE":
      return (0, _util.format)(messages[args.type], args.schema);

    case "SCHEMA_VALIDATION":
      return (0, _util.format)(messages[args.type]);

    default:
      return messages.DEFAULT;}

}

class Failed extends Error {
  constructor(args) {
    super();

    this.name = this.constructor.name;
    this.message = fmtMessage(args);

    if (args.id) this.id = args.id;
    if (args.type) this.type = args.type;
    if (args.code) this.code = args.code;
    if (args.source) this.source = args.source;

    if (args.cause) {
      this.cause = args.cause;

      if (args.cause.stack) {
        this.stack = this.stack + "\nCause: " + args.cause.stack;
      }
    }
  }}exports.default = Failed;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.on = on;exports.emit = emit;exports.store = void 0;const store = new Map();exports.store = store;

function on(event, handler) {
  if (!store.has(event)) {
    store.set(event, new Set());
  }

  store.get(event).add(handler);
}

function emit(event, data) {
  const handlers = store.get(event);

  // ignore if no handlers available
  if (!handlers || !handlers.size) return null;

  // events are fire and forget, we don't return anything
  Promise.all(Array.from(handlers).map(handler => handler(data)));
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/@nore/std/assert/index.js + 19 modules
var assert = __webpack_require__(0);

// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(2);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);

// CONCATENATED MODULE: ../node_modules/@nore/std/error/InvalidError.js
class InvalidError extends Error {
	constructor({ attribute, expected, value, source, message }) {
		super();

		this.attribute = attribute;
		this.expected = expected;
		this.value = value;
		this.source = source;

		if (message) {
			this.message = message;
		} else {
			this.message = `"${argument}" expected: "${expected}" passed: "${typeof value}"`;
		}

		this.name = "InvalidError";

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, InvalidError);
		}
	}
}

// CONCATENATED MODULE: ../node_modules/@nore/std/error/SystemError.js
class SystemError extends Error {
	constructor({ type, code, cause, message, details }) {
		super();

		this.type = type;
		this.code = code;
		this.cause = cause;
		this.details = details;

		this.message = message || `${type} error: "${code}"`;

		this.name = "SystemError";

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, SystemError);
		}
	}
}

// CONCATENATED MODULE: ../node_modules/@nore/std/error/TaskError.js
class TaskError extends Error {
	constructor({ code, cause, details, message }) {
		super();

		this.code = code;
		this.cause = cause;
		this.details = details || {};

		this.message = message || code;

		this.name = "TaskError";

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, TaskError);
		}
	}
}

// CONCATENATED MODULE: ../node_modules/@nore/std/error/index.js




// CONCATENATED MODULE: ../node_modules/@nore/std/fs/readDirectory.js




async function readDirectory(path, options = {}) {
	if (!Object(assert["isString"])(path)) {
		throw new TypeError(`Argument "path" must be a string`);
	}

	try {
		const files = await external_fs_default.a.promises.readdir(path, options);

		return files.map(fileName => `${path}/${fileName}`);
	} catch (error) {
		throw new SystemError({
			type: "file_system",
			code: error.code,
			cause: error,
		});
	}
}

// CONCATENATED MODULE: ../node_modules/@nore/std/fs/isDirectory.js




async function isDirectory(path) {
	if (!Object(assert["isString"])(path)) {
		throw new TypeError(`Argument "path" must be a string`);
	}

	try {
		const stats = await external_fs_default.a.promises.stat(path);

		return stats.isDirectory();
	} catch (error) {
		if (error.code === "ENOENT") {
			return false;
		} else {
			throw new SystemError({
				type: "file_system",
				code: error.code,
				cause: error,
			});
		}
	}
}

// CONCATENATED MODULE: ../node_modules/@nore/std/fs/traverse.js




async function traverse(path, options = {}) {
	if (!Object(assert["isString"])(path)) {
		throw new TypeError(`Argument "path" must be a string`);
	}

	let level = 0;
	let paths = [path];

	const result = [];

	while (paths) {
		const directories = [];

		for (let path of paths) {
			const files = await readDirectory(path);

			for (let file of files) {
				if (await isDirectory(file)) {
					directories.push(file);
				} else {
					result.push(file);
				}
			}
		}

		if (options.depth !== undefined && options.depth === level) {
			paths = null;
		} else if (!directories.length) {
			paths = null;
		} else {
			level += 1;
			paths = directories;
		}
	}

	return result;
}

// CONCATENATED MODULE: ../node_modules/@nore/std/fs/itExists.js



async function itExists(path) {
	if (!Object(assert["isString"])(path)) {
		throw new TypeError(`Argument "path" must be a string`);
	}

	try {
		await external_fs_default.a.promises.access(path);
	} catch (error) {
		if (error.code === "ENOENT") {
			return false;
		}

		throw error;
	}

	return true;
}

// CONCATENATED MODULE: ../node_modules/@nore/std/fs/getFileStatus.js




async function getFileStatus(path, options = {}) {
	if (!Object(assert["isString"])(path)) {
		throw new TypeError(`Argument "path" must be a string`);
	}

	const handler = options.symlink ? external_fs_default.a.promises.lstat : external_fs_default.a.promises.stat;

	try {
		return await handler(path);
	} catch (error) {
		throw new SystemError({
			type: "file_system",
			code: error.code,
			cause: error,
		});
	}
}

// CONCATENATED MODULE: ../node_modules/@nore/std/fs/isSymbolicLink.js




async function isSymbolicLink(path) {
	if (!Object(assert["isString"])(path)) {
		throw new TypeError(`Argument "path" must be a string`);
	}

	try {
		const status = await external_fs_default.a.promises.lstat(path);

		return status.isSymbolicLink();
	} catch (error) {
		throw new SystemError({
			type: "file_system",
			code: error.code,
			cause: error,
		});
	}
}

// CONCATENATED MODULE: ../node_modules/@nore/std/fs/isFile.js




async function isFile(path) {
	if (!Object(assert["isString"])(path)) {
		throw new TypeError(`Argument "path" must be a string`);
	}

	try {
		const stats = await external_fs_default.a.promises.stat(path);

		return stats.isFile();
	} catch (error) {
		if (error.code === "ENOENT") {
			return false;
		} else {
			throw new SystemError({
				type: "file_system",
				code: error.code,
				cause: error,
			});
		}
	}
}

// CONCATENATED MODULE: ../node_modules/@nore/std/fs/readFile.js




async function readFile(path, options = {}) {
	if (!Object(assert["isString"])(path)) {
		throw new TypeError(`Argument "path" must be a string`);
	}

	// set default encoding to UTF-8
	if (options.encoding === undefined) {
		options.encoding = "utf8";
	}

	try {
		return await external_fs_default.a.promises.readFile(path, options);
	} catch (error) {
		throw new SystemError({
			type: "file_system",
			code: error.code,
			cause: error,
		});
	}
}

// CONCATENATED MODULE: ../node_modules/@nore/std/fs/readJSONFile.js




async function readJSONFile(path) {
	if (!Object(assert["isString"])(path)) {
		throw new TypeError(`Argument "path" must be a string`);
	}

	const data = await readFile(path);

	try {
		return JSON.parse(data);
	} catch (error) {
		throw new SystemError({
			type: "file_system",
			code: error.code,
			cause: error,
		});
	}
}

// CONCATENATED MODULE: ../node_modules/@nore/std/fs/writeFile.js




async function writeFile(path, data, options = {}) {
	if (!Object(assert["isString"])(path)) {
		throw new TypeError(`Argument "path" must be a string`);
	}

	if (!Object(assert["isString"])(data) && !Object(assert["isBuffer"])(data)) {
		throw new TypeError(`Argument "data" must be a string or buffer`);
	}

	// set default encoding to UTF-8
	if (!options.encoding) {
		options.encoding = "utf8";
	}

	// append data to file, throw if it doesn't exist
	if (options.append) {
		options.flag = "a";
	}

	try {
		await external_fs_default.a.promises.writeFile(path, data, options);
	} catch (error) {
		throw new SystemError({
			type: "file_system",
			code: error.code,
			cause: error,
		});
	}
}

// CONCATENATED MODULE: ../node_modules/@nore/std/fs/removeFile.js




async function removeFile(path) {
	if (!Object(assert["isString"])(path)) {
		throw new TypeError(`Argument "path" must be a string`);
	}

	try {
		await external_fs_default.a.promises.unlink(path);
	} catch (error) {
		throw new SystemError({
			type: "file_system",
			code: error.code,
			cause: error,
		});
	}

	return path;
}

// EXTERNAL MODULE: ../node_modules/@nore/std/path/index.js + 2 modules
var std_path = __webpack_require__(5);

// CONCATENATED MODULE: ../node_modules/@nore/std/fs/createDirectory.js





async function $createDirectory(path, mode) {
	try {
		await external_fs_default.a.promises.mkdir(path, mode);
	} catch (error) {
		if (error.code === "ENOENT") {
			// try to create parent directory of `path`
			await $createDirectory(Object(std_path["getDirectory"])(path), mode);

			// retry to create the directory
			await $createDirectory(path, mode);
		} else {
			try {
				// check if directory already exists, otherwise throw error
				const status = await external_fs_default.a.promises.stat(path);

				if (!status.isDirectory()) {
					throw error;
				}
			} catch (e) {
				throw error;
			}
		}
	}
}

async function createDirectory(path, mode) {
	if (!Object(assert["isString"])(path)) {
		throw new TypeError(`Argument "path" must be a string`);
	}

	// http://bit.ly/2NBchZA
	mode = parseInt(mode || "0777", 8) & ~process.umask();

	try {
		await $createDirectory(path, mode);
	} catch (error) {
		throw new SystemError({
			type: "file_system",
			code: error.code,
			cause: error,
		});
	}

	return path;
}

// CONCATENATED MODULE: ../node_modules/@nore/std/fs/removeDirectory.js







async function removeFileOrFolder(path) {
	try {
		const stat = await external_fs_default.a.promises.lstat(path);

		if (stat.isDirectory()) {
			await removeDir(path);
		} else {
			await removeFile(path);
		}
	} catch (error) {
		// if `path` doesn't exist, the desired action is fulfilled
		if (error.code === "ENOENT") return;

		throw error;
	}
}

async function removeDirContent(path) {
	const files = await readDirectory(path);

	await Promise.all(files.map(file => removeFileOrFolder(file)));
}

async function removeDir(path) {
	try {
		await external_fs_default.a.promises.rmdir(path);
	} catch (error) {
		// if `path` doesn't exist, the desired action is fulfilled
		if (error.code === "ENOENT") {
			return path;
		} else if (error.code === "ENOTEMPTY") {
			// empty directory and retry
			await removeDirContent(path);
			await removeDir(path);
		} else {
			throw error;
		}
	}
}

async function removeDirectory(path) {
	if (!Object(assert["isString"])(path)) {
		throw new TypeError(`Argument "path" must be a string`);
	}

	try {
		await removeDir(path);
	} catch (error) {
		throw new SystemError({
			type: "file_system",
			code: error.code,
			cause: error,
		});
	}
}

// CONCATENATED MODULE: ../node_modules/@nore/std/fs/index.js
/* concated harmony reexport traverse */__webpack_require__.d(__webpack_exports__, "traverse", function() { return traverse; });
/* concated harmony reexport itExists */__webpack_require__.d(__webpack_exports__, "itExists", function() { return itExists; });
/* concated harmony reexport getFileStatus */__webpack_require__.d(__webpack_exports__, "getFileStatus", function() { return getFileStatus; });
/* concated harmony reexport isSymbolicLink */__webpack_require__.d(__webpack_exports__, "isSymbolicLink", function() { return isSymbolicLink; });
/* concated harmony reexport isFile */__webpack_require__.d(__webpack_exports__, "isFile", function() { return isFile; });
/* concated harmony reexport isDirectory */__webpack_require__.d(__webpack_exports__, "isDirectory", function() { return isDirectory; });
/* concated harmony reexport readFile */__webpack_require__.d(__webpack_exports__, "readFile", function() { return readFile; });
/* concated harmony reexport readJSONFile */__webpack_require__.d(__webpack_exports__, "readJSONFile", function() { return readJSONFile; });
/* concated harmony reexport writeFile */__webpack_require__.d(__webpack_exports__, "writeFile", function() { return writeFile; });
/* concated harmony reexport removeFile */__webpack_require__.d(__webpack_exports__, "removeFile", function() { return removeFile; });
/* concated harmony reexport readDirectory */__webpack_require__.d(__webpack_exports__, "readDirectory", function() { return readDirectory; });
/* concated harmony reexport createDirectory */__webpack_require__.d(__webpack_exports__, "createDirectory", function() { return createDirectory; });
/* concated harmony reexport removeDirectory */__webpack_require__.d(__webpack_exports__, "removeDirectory", function() { return removeDirectory; });


















/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/@nore/std/assert/index.js + 19 modules
var assert = __webpack_require__(0);

// CONCATENATED MODULE: ../node_modules/@nore/std/utils/typeOf.js
// source: https://github.com/jonschlinkert/kind-of/blob/master/index.js`


const typeOf_toString = Object.prototype.toString;

function getConstructorName(source) {
	return source.constructor ? source.constructor.name : null;
}

function typeOf(source) {
	if (source === void 0) return "undefined";
	if (source === null) return "null";

	const type = typeof source;

	if (type === "boolean") return "boolean";
	if (type === "string") return "string";
	if (type === "number") return "number";
	if (type === "symbol") return "symbol";

	if (type === "function") {
		if (Object(assert["isAsyncFunction"])(source)) {
			return "asyncfunction";
		}

		if (Object(assert["isGeneratorFunction"])(source)) {
			return "generatorfunction";
		}

		return "function";
	}

	if (Object(assert["isArray"])(source)) return "array";
	if (Object(assert["isDate"])(source)) return "date";
	if (Object(assert["isRegExp"])(source)) return "regexp";
	if (Object(assert["isError"])(source)) return "error";
	if (Object(assert["isArguments"])(source)) return "arguments";
	if (Object(assert["isBuffer"])(source)) return "buffer";

	switch (getConstructorName(source)) {
		case "Promise":
			return "promise";

		// Set, Map, WeakSet, WeakMap
		case "WeakMap":
			return "weakmap";
		case "WeakSet":
			return "weakset";
		case "Map":
			return "map";
		case "Set":
			return "set";

		// 8-bit typed arrays
		case "Int8Array":
			return "int8array";
		case "Uint8Array":
			return "uint8array";
		case "Uint8ClampedArray":
			return "uint8clampedarray";

		// 16-bit typed arrays
		case "Int16Array":
			return "int16array";
		case "Uint16Array":
			return "uint16array";

		// 32-bit typed arrays
		case "Int32Array":
			return "int32array";
		case "Uint32Array":
			return "uint32array";
		case "Float32Array":
			return "float32array";
		case "Float64Array":
			return "float64array";
	}

	if (Object(assert["isGeneratorObject"])(source)) {
		return "generator";
	}

	// Non-plain objects
	const stringified = typeOf_toString.call(source);

	switch (stringified) {
		case "[object Object]":
			return "object";
		// iterators
		case "[object Map Iterator]":
			return "mapiterator";
		case "[object Set Iterator]":
			return "setiterator";
		case "[object String Iterator]":
			return "stringiterator";
		case "[object Array Iterator]":
			return "arrayiterator";
	}

	// other
	return stringified
		.slice(8, -1)
		.toLowerCase()
		.replace(/\s/g, "");
}

// CONCATENATED MODULE: ../node_modules/@nore/std/utils/clone.js


const clone_valueOf = Symbol.prototype.valueOf;

function cloneValue(source) {
	switch (typeOf(source)) {
		case "array":
			return source.slice();
		case "object":
			return Object.assign({}, source);
		case "date":
			return new Date(source.getTime());
		case "regexp":
			return new RegExp(source);
		case "error":
			return Object.create(source);
		case "map":
			return new Map(source);
		case "set":
			return new Set(source);
		case "buffer":
			const buffer = Buffer.allocUnsafe
				? Buffer.allocUnsafe(source.length)
				: new Buffer(source.length);
			buffer.copy(buf);
			return buffer;
		case "arraybuffer":
			const array = new source.constructor(source.byteLength);
			new Uint8Array(array).set(new Uint8Array(source));
			return array;
		case "float32array":
		case "float64array":
		case "int16array":
		case "int32array":
		case "int8array":
		case "uint16array":
		case "uint32array":
		case "uint8clampedarray":
		case "uint8array":
			return new source.constructor(
				source.buffer,
				source.byteOffset,
				source.length
			);
		default: {
			return source;
		}
	}
}

function cloneObject(source) {
	const result = source.constructor ? new source.constructor() : {};

	for (const key of Object.keys(source)) {
		result[key] = clone(source[key]);
	}

	return result;
}

function cloneArray(source) {
	const result = new source.constructor(source.length);

	for (let i = 0; i < source.length; i++) {
		result[i] = clone(source[i]);
	}

	return result;
}

function clone(source) {
	switch (typeOf(source)) {
		case "object":
			return cloneObject(source);
		case "array":
			return cloneArray(source);
		default: {
			return cloneValue(source);
		}
	}
}

clone.value = cloneValue;
clone.object = cloneObject;
clone.array = cloneArray;

/* harmony default export */ var utils_clone = (clone);

// CONCATENATED MODULE: ../node_modules/@nore/std/utils/debounce.js


function debounce(target, delay = 166, isLeading = 0) {
	if (Object(assert["isFunction"])(!target)) {
		throw new TypeError(`Argument "target" must be a function`);
	}

	let timeout;

	function debounced(...args) {
		clearTimeout(timeout);

		if (isLeading) {
			if (!timeout) {
				target.apply(this, args);
			}

			timeout = setTimeout(() => (timeout = clearTimeout(timeout)), delay);
		} else {
			timeout = setTimeout(() => target.apply(this, args), delay);
		}
	}

	debounced.cancel = () => {
		timeout = clearTimeout(timeout);
	};

	return debounced;
}

// CONCATENATED MODULE: ../node_modules/@nore/std/utils/throttle.js


function throttle(target, interval = 16, isLeading = 1) {
	if (Object(assert["isFunction"])(!target)) {
		throw new TypeError(`Argument "target" must be a function`);
	}

	let inThrottle = false;

	function throttled(...args) {
		if (inThrottle) return;

		if (isLeading) {
			target.apply(this, args);
			inThrottle = true;
			var onNext = () => (inThrottle = false);
		}
		// trailing
		else {
			inThrottle = true;
			var onNext = () => {
				target.apply(this, args);
				inThrottle = false;
			};
		}

		setTimeout(onNext, interval);
	}

	return throttled;
}

// CONCATENATED MODULE: ../node_modules/@nore/std/utils/emitter.js
function emitter(events = Object.create(null)) {
	return {
		on(type, handler) {
			(events[type] || (events[type] = [])).push(handler);
		},

		off(type, handler) {
			if (events[type]) {
				events[type].splice(events[type].indexOf(handler) >>> 0, 1);
			}
		},

		emit(type, a, b, c) {
			if (events[type]) {
				for (const handler of events[type]) {
					handler(a, b, c);
				}
			}

			if (events["*"]) {
				for (const handler of events["*"]) {
					handler(type, a, b, c);
				}
			}
		},
	};
}

// CONCATENATED MODULE: ../node_modules/@nore/std/utils/index.js
/* concated harmony reexport clone */__webpack_require__.d(__webpack_exports__, "clone", function() { return utils_clone; });
/* concated harmony reexport typeOf */__webpack_require__.d(__webpack_exports__, "typeOf", function() { return typeOf; });
/* concated harmony reexport debounce */__webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* concated harmony reexport throttle */__webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* concated harmony reexport emitter */__webpack_require__.d(__webpack_exports__, "emitter", function() { return emitter; });







/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _util = __webpack_require__(17);
var _Failed = _interopRequireDefault(__webpack_require__(12));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/*
                                                                                                                                                        	Error types:
                                                                                                                                                        
                                                                                                                                                        	NOT_FOUND            - plugin not found
                                                                                                                                                        	INVALID_SETTINGS     - invalid nore.yaml format
                                                                                                                                                        	DEPENDENCY_MISSING   - plugin dependency not found
                                                                                                                                                        	DEPENDENCY_DISABLED  - plugin dependency is disabled
                                                                                                                                                        */

const messages = {
  INVALID_SETTINGS: "Invalid nore.yaml format in %s",
  DEPENDENCY_MISSING: "%s is missing a dependency: %s",
  DEPENDENCY_DISABLED: "%s has a dependency disabled: %s" };


class PluginError extends _Failed.default {
  constructor({ type, plugin, dependency, errors }) {
    const error = { name: "PluginError", cause: errors };

    switch (type) {
      case "INVALID_SETTINGS":
        error.message = (0, _util.format)(messages[type], plugin);
        break;

      case "DEPENDENCY_MISSING":
      case "DEPENDENCY_DISABLED":
        error.message = (0, _util.format)(messages[type], plugin, dependency);
        break;}


    super(error);
  }}exports.default = PluginError;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = JSONSchema;var _Failed = _interopRequireDefault(__webpack_require__(12));
var _betterAjvErrors = _interopRequireDefault(__webpack_require__(33));
var _ajv = _interopRequireDefault(__webpack_require__(19));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const ajv = new _ajv.default({
  jsonPointers: true,
  useDefaults: true,
  coerceTypes: true,
  allErrors: true });


function pick(validator, fields) {
  const schema = validator.schema;
  const result = { type: "object", properties: {} };

  for (const name of fields) {
    if (schema.properties[name]) {
      result.properties[name] = schema.properties[name];
    }
  }

  if (schema.required) {
    result.required = schema.required.filter(name => fields.includes(name));
  }

  return result;
}

function format(validator, data) {
  const isValid = validator(data);

  if (!isValid) {
    throw new _Failed.default({
      type: "SCHEMA_VALIDATION",
      schema: validator.schema.title,
      cause: validator.errors });

  }

  return data;
}

function validate(validator, data) {
  return validator(data) ? null : validator.errors;
}

function toLog(validator, data) {
  return (0, _betterAjvErrors.default)(validator.schema, data, validator.errors, { indent: 2 });
}

function JSONSchema(schema) {
  const $schema = { ...schema };
  const validator = ajv.compile($schema);

  return Object.defineProperties($schema, {
    validate: { enumerable: false, value: data => validate(validator, data) },
    format: { enumerable: false, value: data => format(validator, data) },
    toErrorLog: { enumerable: false, value: data => toLog(validator, data) },
    pick: { enumerable: false, value: fields => pick(validator, fields) } });

}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("ajv");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.define = define;exports.use = use;exports.store = exports.FORMAT = void 0; // ex: "nore/sqlite"
const FORMAT = /^[\w-_\.]+\/[\w-_\.\/]+$/;exports.FORMAT = FORMAT;
const store = new Map();exports.store = store;

function define(namespace, api) {
  if (!FORMAT.test(namespace)) {
    // TODO: add link to docs
    throw Error(`Invalid service namespace: "${namespace}"`);
  }

  if (store.has(namespace)) {
    throw Error(`Service "${namespace}" was already defined`);
  }

  store.set(namespace, api);
}

function use(namespace) {
  if (!store.has(namespace)) {
    throw Error(`Service "${namespace}" is not defined`);
  }

  return store.get(namespace);
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _crypto = _interopRequireDefault(__webpack_require__(22));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// https://gist.github.com/skeggse/52672ddee97c8efec269
const settings = {
  keylen: 32,
  saltBytes: 16,
  digest: "sha512",
  // tune so it takes around 1 sec to gen hash
  iterations: 512 * 1024 };var _default =


{
  verify(password, token) {
    return new Promise((resolve, reject) => {
      // ensure token is a buffer and not a string
      token = Buffer.isBuffer(token) ? token : Buffer.from(token);

      // extract the salt and hash from the token buffer
      const saltBytes = token.readUInt32BE(0);
      const keylen = token.length - saltBytes - 8;
      const iterations = token.readUInt32BE(4);
      const salt = token.slice(8, saltBytes + 8);
      const hash = token.toString("binary", saltBytes + 8);

      function onResult(error, verify) {
        if (error) reject(error);

        resolve(verify.toString("binary") === hash);
      }

      // verify the salt and hash against the password
      _crypto.default.pbkdf2(
      password,
      salt,
      iterations,
      keylen,
      settings.digest,
      onResult);

    });
  },

  hash(password) {
    return new Promise((resolve, reject) => {
      // generate a salt for pbkdf2
      _crypto.default.randomBytes(settings.saltBytes, (error, salt) => {
        if (error) reject(error);

        function onResult(error, hash) {
          if (error) reject(error);

          const token = Buffer.alloc(hash.length + salt.length + 8);

          token.writeUInt32BE(salt.length, 0, true);
          token.writeUInt32BE(settings.iterations, 4, true);

          salt.copy(token, 8);
          hash.copy(token, salt.length + 8);

          resolve(token);
        }

        _crypto.default.pbkdf2(
        password,
        salt,
        settings.iterations,
        settings.keylen,
        settings.digest,
        onResult);

      });
    });
  } };exports.default = _default;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _cms = __webpack_require__(1);

const states = ["pending", "active", "suspended", "locked", "archived"];var _default =

(0, _cms.JSONSchema)({
  type: "object",
  properties: {
    id: { type: "string" },

    email: { type: "string" },
    login: { type: "string" },
    password: { type: "string" },
    name: { type: "string" },

    // groups: members, admins
    groups: {
      type: "array",
      items: { type: "string" },
      default: "members" },


    state: {
      type: "string",
      enum: states,
      default: states[1] },


    createdAt: { type: "number" },
    updatedAt: { type: "number" } },

  table: "nore_accounts",
  primaryKeys: ["id"],
  unique: ["id", "email"],
  required: ["email", "password"] });exports.default = _default;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  noPermission: "No permission to access the resource",
  noSession: "Invalid session",
  notLoggedIn: "You are not logged in",
  invalidLogin: "Invalid login or password" };exports.default = _default;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // collection storage interfaces
const store = new Map();var _default =

{
  store,

  async set(name, api) {
    if (store.has(name)) {
      throw Error(`Collection storage interface "${name}" already defined`);
    }

    store.set(name, api);
  },

  async get(name) {
    return store.get(name);
  },

  async has(name) {
    return store.has(name);
  } };exports.default = _default;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = schema => schema.storage.settings.table || schema.handle;exports.default = _default;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _http = __webpack_require__(27);
var _cms = __webpack_require__(1);

class HTTPError extends _cms.Failed {
  constructor({ code, message, cause }) {
    super({
      code,
      cause,
      name: "HTTPError",
      message: message || _http.STATUS_CODES[code] });


    Error.captureStackTrace(this, HTTPError);
  }}exports.default = HTTPError;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("sharp");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("better-sqlite3");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(32);


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _cms = __webpack_require__(1);

(0, _cms.on)("ready", async () => {
  const { href } = (0, _cms.config)("url");

  _cms.log.info(`Server started: ${href}`);
});

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("better-ajv-errors");

/***/ }),
/* 34 */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"@nore/cms\",\"description\":\"Nore CMS\",\"version\":\"1.0.0\",\"author\":\"Navaru <contact@navaru.com>\",\"license\":\"SEE LICENSE IN license\",\"repository\":\"https://github.com/nore/cms\",\"type\":\"module\",\"module\":\"source/index.js\",\"main\":\"source/index.js\",\"scripts\":{\"test\":\"node --experimental-modules --experimental-json-modules --es-module-specifier-resolution=node tests\"},\"dependencies\":{\"@nore/std\":\"^1.10.0\",\"@nore/cli\":\"^1.5.0\",\"@nore/plugin-sqlite\":\"^1.0.0\",\"@nore/plugin-http-server\":\"^1.0.0\",\"@nore/plugin-http-sessions\":\"^1.0.0\",\"@nore/plugin-fields\":\"^1.0.0\",\"@nore/plugin-collections\":\"^1.0.0\",\"better-ajv-errors\":\"^0.6.0\",\"ajv\":\"^6.10.0\",\"cuid\":\"^2.1.0\"},\"devDependencies\":{\"tape\":\"^4.13.0\"}}");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
var _object = __webpack_require__(4);

const constants = {
  "path": true ? "/Users/elena/projects/amc" : undefined,
  "path.source": "/Users/elena/projects/amc/source" };


// TODO: load config from .env?
const config = { "target": "node", "url": { "protocol": "https:", "auth": null, "origin": "https://alexandrumocanuc.github.io", "host": "alexandrumocanuc.github.io", "port": null, "hostname": "alexandrumocanuc.github.io", "path": "/photography", "pathname": "/photography", "search": null, "query": null, "hash": null, "href": "https://alexandrumocanuc.github.io/photography" }, "aliases": { "$website": "~/client", "$public": "/Users/elena/projects/amc/public", "@admin": "/Users/elena/projects/amc/node_modules/@nore/admin/source" }, "client": { "template": { "path": "client/index.html", "meta": { "url": "https://alexandrumocanuc.github.io/photography/", "title": "Alex Mocanu - Photo Studio" } } }, "handle": "server", "path": "/Users/elena/projects/amc", "mode": "production", "isDebug": true, "buildsPath": ".nore", "cachePath": ".nore/.cache", "plugins": [], "sourcePath": "source", "configPath": "config", "serve": {}, "node_modules": [], "constants": { "IS_WEB": false, "IS_NODE": true, "IS_PRODUCTION": true, "IS_DEVELOPMENT": false, "IS_DEBUG": true, "PROJECT_PATH": "/Users/elena/projects/amc", "SOURCE_PATH": "/Users/elena/projects/amc/source" }, "browserslist": ["since 2015 and last 2 versions, not op_mini all, safari >= 10"], "variables": "source/variables", "http": "unix:/Users/elena/projects/amc/.nore/alexandrumocanuc.github.io.socket" };var _default =

path => {
  const constant = constants[path];
  const value = constant ? constant : (0, _object.get)(config, path);

  return value || null;
};exports.default = _default;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;const store = new Map();

async function plug(namespace, data) {
  const handler = store.get(namespace);

  if (!handler) {
    throw Error(`Invalid plug "${namespace}"`);
  }

  await handler(data);
}

plug.define = function define(namespace, handler) {
  if (store.has(namespace)) {
    throw Error(`Plug "${namespace}" already defined`);
  }

  store.set(namespace, handler);
};var _default =

plug;exports.default = _default;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("pino");

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var events = _interopRequireWildcard(__webpack_require__(13));
var _log = _interopRequireDefault(__webpack_require__(10));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _getRequireWildcardCache() {if (typeof WeakMap !== "function") return null;var cache = new WeakMap();_getRequireWildcardCache = function () {return cache;};return cache;}function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;}if (obj === null || typeof obj !== "object" && typeof obj !== "function") {return { default: obj };}var cache = _getRequireWildcardCache();if (cache && cache.has(obj)) {return cache.get(obj);}var newObj = {};var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;if (desc && (desc.get || desc.set)) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}newObj.default = obj;if (cache) {cache.set(obj, newObj);}return newObj;}

async function exit(code = 0) {
  // run "terminate" event handlers
  if (events.store.has("exit")) {
    for (const handler of events.store.get("exit")) {
      try {
        await handler();
      } catch (error) {
        _log.default.error(error, "TERMINATE_EXCEPTION");
      }
    }
  }

  // allow an extra cycle from terminate event handlers
  setImmediate(() => process.exit(code));
}

// handle uncaught exceptions or promise errors
process.on("uncaughtException", error => {
  _log.default.fatal(error, "UNCAUGHT_EXCEPTION");
  exit(1);
});

process.on("unhandledRejection", (error, promise) => {
  _log.default.fatal(error, "UNHANDLED_REJECTION");
  exit(1);
});

process.on("multipleResolves", (type, promise, reason) => {
  if (reason instanceof Error) {
    _log.default.fatal(error, "MULTIPLE_RESOLVES");
    exit(1);
  }
});

process.on("SIGINT", sig => {
  _log.default.debug("SIGINT - terminate the process, gracefully");
  exit();
});

process.on("SIGTERM", sig => {
  _log.default.debug("SIGTERM - terminate the process, gracefully or not");
  exit();
});

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _assert = __webpack_require__(0);
var _runOnNextEventCycle = _interopRequireDefault(__webpack_require__(40));
var services = _interopRequireWildcard(__webpack_require__(20));
var events = _interopRequireWildcard(__webpack_require__(13));
var plugins = _interopRequireWildcard(__webpack_require__(41));
var _log = _interopRequireDefault(__webpack_require__(10));function _getRequireWildcardCache() {if (typeof WeakMap !== "function") return null;var cache = new WeakMap();_getRequireWildcardCache = function () {return cache;};return cache;}function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;}if (obj === null || typeof obj !== "object" && typeof obj !== "function") {return { default: obj };}var cache = _getRequireWildcardCache();if (cache && cache.has(obj)) {return cache.get(obj);}var newObj = {};var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;if (desc && (desc.get || desc.set)) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}newObj.default = obj;if (cache) {cache.set(obj, newObj);}return newObj;}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// allow loaded code to execute before initializing the CMS
(0, _runOnNextEventCycle.default)(async () => {
  // load plugins
  await plugins.load();

  // load services
  for (const [namespace, api] of services.store) {
    if ((0, _assert.isFunction)(api)) {
      services.store.set(namespace, (await api()));
    }

    _log.default.debug(`Service: ${namespace}`);
  }

  // run "loading" event handlers
  for (const handler of events.store.get("loading")) {
    await handler();
  }

  // run "ready" event handlers
  for (const handler of events.store.get("ready")) {
    await handler();
  }

  // give time to "ready" event handlers to execute
  (0, _runOnNextEventCycle.default)(async () => {
    // run "final" event handlers
    for (const handler of events.store.get("final")) {
      await handler();
    }
  });
});

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = runOnNextEventCycle; // allow other operations to complete before running your code
function runOnNextEventCycle(callback) {
  return new Promise((resolve, reject) => {
    setImmediate(() => resolve(callback()));
  });
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.load = load;exports.store = exports.schema = void 0;var _assert = __webpack_require__(0);
var _PluginError = _interopRequireDefault(__webpack_require__(16));
var _JSONSchema = _interopRequireDefault(__webpack_require__(18));
var _pluginsSchema = _interopRequireDefault(__webpack_require__(42));
var _pluginsAutoloadEval = _interopRequireDefault(__webpack_require__(43));
var _log = _interopRequireDefault(__webpack_require__(10));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const schema = (0, _JSONSchema.default)(_pluginsSchema.default);exports.schema = schema;
const store = new Map();exports.store = store;

async function load() {
  const plugins = await (0, _pluginsAutoloadEval.default)();
  const handles = plugins.map(([config]) => config.handle);
  const stack = Array.from(plugins);

  loading: while (stack.length) {
    const [config, entry] = stack.shift();

    try {
      // check nore.yaml config format
      const errors = schema.validate(config);

      if (errors) {
        throw new _PluginError.default({
          type: "INVALID_SETTINGS",
          plugin: config.handle,
          errors: schema.toErrorLog(config) });

      }

      // check for dependencies
      if (config.dependencies) {
        // TODO: add version checking using semver
        for (const dependency in config.dependencies) {
          // missing dependency
          if (!handles.includes(dependency)) {
            throw new _PluginError.default({
              type: "DEPENDENCY_MISSING",
              plugin: config.handle,
              dependency });

          }
          // if dependency is not loaded, add plugin to the
          // loading stack and continue loading
          else if (!store.has(dependency)) {
              stack.push([config, entry]);

              continue loading;
            }
            // dependency is disabled
            else if (store.get(dependency).isDisabled) {
                throw new _PluginError.default({
                  type: "DEPENDENCY_DISABLED",
                  plugin: config.handle,
                  dependency });

              }
        }
      }

      // load the plugin entry file
      const initialize = await entry();

      // run the initialization function (if any)
      if ((0, _assert.isFunction)(initialize)) {
        await initialize(config.settings);
      }

      _log.default.debug(`Plugin: ${config.handle}`);
    } catch (error) {
      config.isDisabled = true;

      _log.default.warn(error, `Plugin ${config.handle} is disabled due to errors`);
      if (error.cause) _log.default.warn(error.cause);
    }

    // store the plugin config into state
    store.set(config.handle, config);
  }
}

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"type":"object","required":["handle","version","name","description","author"],"properties":{"handle":{"type":"string"},"version":{"type":"string"},"name":{"type":"string"},"description":{"type":"string"},"website":{"type":"string"},"documentation":{"type":"string"},"edition":{"type":"string","default":"FREE"},"author":{"type":"object","properties":{"name":{"type":"string"},"email":{"type":"string"},"url":{"type":"string"}}},"dependencies":{"type":"object","default":{}},"permission":{"type":"object","default":{}},"settings":{"type":"object","default":{}}}});

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function _getRequireWildcardCache() {if (typeof WeakMap !== "function") return null;var cache = new WeakMap();_getRequireWildcardCache = function () {return cache;};return cache;}function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;}if (obj === null || typeof obj !== "object" && typeof obj !== "function") {return { default: obj };}var cache = _getRequireWildcardCache();if (cache && cache.has(obj)) {return cache.get(obj);}var newObj = {};var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;if (desc && (desc.get || desc.set)) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}newObj.default = obj;if (cache) {cache.set(obj, newObj);}return newObj;}var _default =
async () => {
  return [[(await Promise.resolve().then(() => _interopRequireWildcard(__webpack_require__(44)))).default, async () => (await Promise.resolve().then(() => _interopRequireWildcard(__webpack_require__(45)))).default], [(await Promise.resolve().then(() => _interopRequireWildcard(__webpack_require__(51)))).default, async () => (await Promise.resolve().then(() => _interopRequireWildcard(__webpack_require__(52)))).default], [(await Promise.resolve().then(() => _interopRequireWildcard(__webpack_require__(69)))).default, async () => (await Promise.resolve().then(() => _interopRequireWildcard(__webpack_require__(70)))).default], [(await Promise.resolve().then(() => _interopRequireWildcard(__webpack_require__(96)))).default, async () => (await Promise.resolve().then(() => _interopRequireWildcard(__webpack_require__(97)))).default], [(await Promise.resolve().then(() => _interopRequireWildcard(__webpack_require__(109)))).default, async () => (await Promise.resolve().then(() => _interopRequireWildcard(__webpack_require__(110)))).default], [(await Promise.resolve().then(() => _interopRequireWildcard(__webpack_require__(114)))).default, async () => (await Promise.resolve().then(() => _interopRequireWildcard(__webpack_require__(115)))).default], [(await Promise.resolve().then(() => _interopRequireWildcard(__webpack_require__(118)))).default, async () => (await Promise.resolve().then(() => _interopRequireWildcard(__webpack_require__(119)))).default]];
};exports.default = _default;

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"handle":"nore/accounts","version":"1.0.0","name":"Nore accounts","description":"Nore account management","documentation":"https://navaru.com/nore/docs/accounts","author":{"name":"Navaru","email":"office@navaru.com","url":"https://navaru.com"},"dependencies":{"nore/sqlite":"*","nore/http":"*","nore/http-sessions":"*"}});

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _cms = __webpack_require__(1);
var _assert = __webpack_require__(0);
__webpack_require__(46);
__webpack_require__(49);

(0, _cms.on)("loading", async () => {
  const accounts = await (0, _cms.use)("nore/accounts");
  const toCreate = (0, _cms.config)("accounts");

  // ignore if nothing to create
  if (!(0, _assert.isArray)(toCreate)) return;

  // create default accounts
  for (const { login, password } of toCreate) {
    // ignore if already added
    if (await accounts.getByLogin(login)) continue;

    await accounts.create({
      login,
      password,
      email: login,
      status: "active",
      groups: ["admins"] });


    _cms.log.debug(`Created account: ${login}:${password}`);
  }
});

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _cms = __webpack_require__(1);
var _accounts = _interopRequireDefault(__webpack_require__(47));
var _schema = _interopRequireDefault(__webpack_require__(23));
var _hooks = _interopRequireDefault(__webpack_require__(48));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

(0, _cms.define)("nore/accounts", async () => {
  const sqlite = await (0, _cms.use)("nore/sqlite");
  const table = sqlite.table("nore_accounts");

  table.hook("before", _hooks.default.before);
  table.hook("after", _hooks.default.after);

  // create table if it doesn't exist
  if (!(await sqlite.has(table.name))) {
    await sqlite.run(sqlite.toSQL(_schema.default));
  }

  return (0, _accounts.default)({ table });
});

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _array = __webpack_require__(3);
var _crypto = _interopRequireDefault(__webpack_require__(21));
var _schema = _interopRequireDefault(__webpack_require__(23));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =

({ table }) => ({
  table,
  schema: _schema.default,

  async create(data) {
    data.createdAt = Date.now();

    _schema.default.validate(data);
    await table.insert(data);

    return data;
  },

  async getById(id) {
    return table.findOne({ id });
  },

  async getByLogin(login) {
    return table.findOne({ $or: [{ login }, { email: login }] });
  },

  async findOne(query) {
    return table.findOne(query);
  },

  async find(query, filters = {}) {
    return table.find(query, filters);
  },

  async findAndCount(query, filters = {}) {
    const [total, records] = await Promise.all([
    table.count(),
    table.find(query, filters)]);


    return { total, records };
  },

  async update(query, data) {
    return table.update(query, data);
  },

  async save(record) {
    // don't rehash password
    delete record.password;

    return table.update({ id: record.id }, record);
  },

  async remove(query) {
    return table.remove(query);
  },

  async removeById(id) {
    return table.remove({ id });
  },

  async count(query = {}) {
    const options = {
      type: "select",
      columns: "*",
      count: { column: "id", as: "total" },
      table: table.name,
      where: query };


    const [sql, values] = db.nql.build(options);
    const record = await table.db.get(sql, values);

    return record ? record.total : 0;
  },

  async addToGroup(id, group) {
    const groups = isArray(group) ? group : [group];
    const account = await this.getById(id);

    account.groups = (0, _array.unique)(account.groups.concat(group));

    return this.update({ id }, { groups: account.groups });
  },

  async verifyPassword(password, token) {
    return _crypto.default.verify(password, token);
  },

  async hashPassword(password) {
    return _crypto.default.hash(password);
  } });exports.default = _default;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _crypto = _interopRequireDefault(__webpack_require__(21));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =

{
  async before(records) {
    for (const record of records) {
      if (record.password) {
        // hash password for security
        record.password = await _crypto.default.hash(record.password);
      }

      if (record.groups) {
        record.groups = record.groups.join(",");
      }

      record.updatedAt = Date.now();
    }
  },

  async after(records) {
    for (const record of records) {
      if (record.groups) {
        record.groups = record.groups.split(",");
      }
    }
  } };exports.default = _default;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _cms = __webpack_require__(1);
var _object = __webpack_require__(4);
var _errorMessage = _interopRequireDefault(__webpack_require__(24));
var _onRoute = _interopRequireDefault(__webpack_require__(50));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

(0, _cms.on)("loading", async () => {
  const http = await (0, _cms.use)("nore/http");
  const accounts = await (0, _cms.use)("nore/accounts");

  http.addHook("onRoute", (0, _onRoute.default)({ accounts }));

  http.route({
    path: "/api/accounts",
    method: "GET",
    allow: ["admins"],
    async handler(request, reply) {
      const { query = {}, filters = {} } = request.query;
      const { records, total } = await $accounts.findAndCount(query, filters);

      // ignore password hashes
      const data = records.map(account => omit(account, ["password"]));

      return { total, data };
    } });


  http.route({
    path: "/api/accounts",
    method: "POST",
    allow: ["admins"],
    async handler(request, reply) {
      const data = request.body;
      const result = await $accounts.create(data);

      return reply.success(result);
    } });


  http.route({
    path: "/api/accounts",
    method: "PUT",
    allow: ["admins"],
    async handler(request, reply) {
      const query = request.query;
      const data = request.body;

      await $accounts.update(query, data);

      return reply.success();
    } });


  http.route({
    path: "/api/accounts/me",
    method: "GET",
    allow: ["members", "admins"],
    async handler(request, reply) {
      const fields = ["id", "email", "login", "name", "groups", "state"];

      return (0, _object.pick)(request.account, fields);
    } });


  http.route({
    path: "/api/accounts/register",
    method: "POST",
    schema: {
      allErrors: true,
      body: accounts.schema.pick(["email", "password"]) },

    async handler(request, reply) {
      const data = request.body;
      const account = await accounts.create(data);

      // set account ID on session for signin
      request.session.accountId = account.id;

      return { id: account.id };
    } });


  http.route({
    path: "/api/accounts/signin",
    method: "POST",
    schema: {
      allErrors: true,
      body: accounts.schema.pick(["login", "password"]) },

    async handler(request, reply) {
      const data = request.body;
      const account = await accounts.getByLogin(data.login);

      if (!account) {
        throw reply.error(400, _errorMessage.default.invalidLogin);
      }

      const isPasswordValid = await accounts.verifyPassword(
      data.password,
      account.password);


      if (!isPasswordValid) {
        throw reply.error(400, _errorMessage.default.invalidLogin);
      }

      // set account id on session to authorize further requests
      request.session.accountId = account.id;

      return { success: true };
    } });


  http.route({
    path: "/api/accounts/signout",
    method: "POST",
    async handler(request, reply) {
      request.session = null;

      return { success: true };
    } });


  http.route({
    path: "/api/accounts/signout",
    method: "GET",
    async handler(request, reply) {
      // TODO: add redirect query option?

      // destroy session
      request.session = null;
      reply.redirect("/");
    } });

});

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _errorMessage = _interopRequireDefault(__webpack_require__(24));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =

({ accounts }) => async route => {
  if (route.allow && route.allow.length) {
    if (!route.preHandler) {
      route.preHandler = checkPermissions;
    } else if (Array.isArray(route.preHandler)) {
      route.preHandler.unshift(checkPermissions);
    } else {
      route.preHandler = [checkPermissions, route.preHandler];
    }
  }

  async function checkPermissions(request, reply) {
    const { accountId } = request.session;

    // no session
    if (!accountId) {
      throw reply.error(403, _errorMessage.default.notLoggedIn);
    }

    const account = await accounts.getById(accountId);

    // no account
    if (!account) {
      // destroy related session
      request.session = null;

      throw reply.error(403, {
        message: _errorMessage.default.noSession });

    }

    const isAllowed = route.allow.some(group => account.groups.includes(group));

    if (!isAllowed) {
      throw reply.error(403, _errorMessage.default.noPermission);
    }

    request.account = account;
    request.isAdmin = account.groups.includes("admins");
  }
};exports.default = _default;

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"handle":"nore/collections","version":"1.0.0","name":"Nore collection","description":"Nore collection","documentation":"https://navaru.com/nore/docs/collection","author":{"name":"Navaru","email":"office@navaru.com","url":"https://navaru.com"},"dependencies":{"nore/sqlite":"*","nore/http":"*","nore/fields":"*"}});

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _cms = __webpack_require__(1);
__webpack_require__(53);
__webpack_require__(67);function _getRequireWildcardCache() {if (typeof WeakMap !== "function") return null;var cache = new WeakMap();_getRequireWildcardCache = function () {return cache;};return cache;}function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;}if (obj === null || typeof obj !== "object" && typeof obj !== "function") {return { default: obj };}var cache = _getRequireWildcardCache();if (cache && cache.has(obj)) {return cache.get(obj);}var newObj = {};var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;if (desc && (desc.get || desc.set)) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}newObj.default = obj;if (cache) {cache.set(obj, newObj);}return newObj;}

(0, _cms.on)("loading", async () => {
  const collections = await (0, _cms.use)("nore/collections");
  const autoload = await Promise.resolve().then(() => _interopRequireWildcard(__webpack_require__(68)));

  // load collections
  for (const collection of autoload.default) {
    _cms.log.debug(`Collection: ${collection.handle}`);

    // ignore already loaded collections
    if (await collections.schemas.has(collection.handle)) continue;

    try {
      await collections.add(collection);
    } catch (error) {
      console.error(error.data ? error.data.cause : error);

      _cms.log.error(error, `Collection error:`);
    }
  }
});

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _cms = __webpack_require__(1);
var _storage = _interopRequireDefault(__webpack_require__(25));
var _collections2 = _interopRequireDefault(__webpack_require__(54));
var _schemas2 = _interopRequireDefault(__webpack_require__(55));
var _sqlite2 = _interopRequireDefault(__webpack_require__(57));
var _table2 = _interopRequireDefault(__webpack_require__(66));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

(0, _cms.on)("loading", async () => {
  const sqlite = await (0, _cms.use)("nore/sqlite");
  const fields = await (0, _cms.use)("nore/fields");

  const table = await (0, _table2.default)({ sqlite });
  const schemas = await (0, _schemas2.default)({ table, fields });

  // add SQLite storage interface
  await _storage.default.set("sqlite", (0, _sqlite2.default)({ sqlite, schemas, fields }));

  (0, _cms.define)("nore/collections", (0, _collections2.default)({
    table,
    schemas,
    fields }));

});

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _cms = __webpack_require__(1);
var _storage = _interopRequireDefault(__webpack_require__(25));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =

({ schemas, fields }) => ({
  storage: _storage.default,
  schemas,

  async add(collection) {
    if (await schemas.has(collection.handle)) {
      throw new _cms.Failed({ type: "SCHEMA_DEFINED", schema: handle });
    }

    await schemas.add(collection);

    const db = await _storage.default.get(collection.storage.type);

    // ignore if no storage interface
    if (db) await db.add(collection);

    return collection.id;
  },

  async get(handle) {
    const collection = await schemas.get(handle);

    if (!collection) {
      throw new _cms.Failed({ type: "SCHEMA_TYPE", schema: handle });
    }

    const db = await _storage.default.get(collection.storage.type);

    return db ? db.get(collection) : null;
  },

  async update(collection) {
    // validate and format updated schema
    await schemas.format(collection);

    const db = await _storage.default.get(collection.storage.type);

    // make changes to the DB
    if (db) await db.update(collection);

    // if all went well update schema
    await schemas.update(collection);
  },

  async remove(handle) {
    const collection = await schemas.get(handle);

    // nothing to remove, desired action is completed
    if (!collection) return;

    const db = await _storage.default.get(collection.storage.type);

    if (db) await db.remove(collection);

    return await schemas.remove(handle);
  } });exports.default = _default;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _cms = __webpack_require__(1);
var _assert = __webpack_require__(0);
var _collectionsSchema = _interopRequireDefault(__webpack_require__(56));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const schema = (0, _cms.JSONSchema)(_collectionsSchema.default);var _default =

async ({ table, fields }) => ({
  schema,

  async add(data) {
    // validate and format schema
    const collection = await this.format(data);

    await table.upsert({
      id: collection.id,
      handle: collection.handle,
      data: collection });

  },

  async get(handle) {
    const record = await table.findOne({
      $or: { handle, id: handle } });


    return record ? record.data : null;
  },

  async all() {
    const records = await table.find();

    return records.map(record => record.data);
  },

  async update(collection) {
    const record = { handle: collection.handle, data: collection };
    const result = await table.update({ id: collection.id }, record);

    return result ? Boolean(result.changes) : false;
  },

  async remove(handle) {
    const result = await table.remove({
      $or: { handle, id: handle } });


    return result ? Boolean(result.changes) : false;
  },

  async has(handle) {
    const record = await table.findOne({
      $or: { handle, id: handle } });


    return Boolean(record);
  },

  async format(collection) {
    // add an ID to easily keep track
    if (!collection.id) collection.id = (0, _cms.uid)();

    // validate & set defaults
    collection = schema.format(collection);

    // format fields
    const errors = [];

    for (let i = 0; i < collection.fields.length; ++i) {
      let field = collection.fields[i];

      try {
        // the field is a reference to a global field
        if ((0, _assert.isString)(field)) {
          field = await fields.get(field);

          if (!field) {
            throw Error(
            `No field was found for "${collection.fields[i]}" (${collection.handle})`);

          }
        } else {
          field = await fields.format(field);
        }

        // add an unique ID to keep trak of the field during updates
        if (!field.id) field.id = (0, _cms.uid)();

        // validate & set defaults on field
        collection.fields[i] = field;
      } catch (error) {
        errors.push(error);
      }
    }

    if (errors.length) {
      throw new _cms.Failed({
        type: "SCHEMA_VALIDATION",
        cause: errors });

    }

    return collection;
  } });exports.default = _default;

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"title":"collection","type":"object","required":["id","handle","name"],"properties":{"id":{"type":"string","description":"The collection's unique identifier"},"handle":{"type":"string","description":"The property name used in a record"},"name":{"type":"string","description":"The collection's display name"},"description":{"type":"string","default":"","description":"A short phrase describing what the collection is for"},"fields":{"type":"array","default":["id"],"description":"The fields that define the record"},"storage":{"type":"object","default":{},"description":"A set of database specific settings","properties":{"type":{"type":"string","default":"sqlite"},"settings":{"type":"object","default":{"primary_keys":["id"],"unique":["id"]}}}}}});

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _getColumnsRemoved = _interopRequireDefault(__webpack_require__(58));
var _getColumnsRenamed = _interopRequireDefault(__webpack_require__(59));
var _getColumnsAdded = _interopRequireDefault(__webpack_require__(60));
var _getTableRename = _interopRequireDefault(__webpack_require__(61));
var _getTableName = _interopRequireDefault(__webpack_require__(26));
var _interface2 = _interopRequireDefault(__webpack_require__(62));
var _toNQL = _interopRequireDefault(__webpack_require__(65));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =

({ sqlite, schemas, fields }) => ({
  async has(collection) {
    const table = (0, _getTableName.default)(collection);
    const hasTable = await sqlite.has(table);

    return hasTable;
  },

  async add(collection) {
    if (await this.has(collection)) {
      throw Error(
      `Collection table "${(0, _getTableName.default)(collection)}" already exist`);

    }

    const table = (0, _getTableName.default)(collection);
    const definitions = (0, _toNQL.default)(collection.fields, collection.storage);

    await sqlite.create(table, definitions);
  },

  async get(collection) {
    const name = (0, _getTableName.default)(collection);
    const table = sqlite.table(name);

    return (0, _interface2.default)({ table, collection, fields, sqlite });
  },

  async remove(collection) {
    await sqlite.drop((0, _getTableName.default)(collection));
  },

  async update(current) {
    const previous = await schemas.get(current.id);

    if (!previous) {
      throw Error(`Previous collection "${current.handle}" was not found.`);
    }

    return new Promise((resolve, reject) => {
      const transaction = sqlite.transaction(updates);

      async function updates(previous, current) {
        const table = sqlite.table((0, _getTableName.default)(current));
        const tableRenamed = (0, _getTableRename.default)(previous, current);
        const columnsAdded = (0, _getColumnsAdded.default)(previous, current);
        const columnsRemoved = (0, _getColumnsRemoved.default)(previous, current);
        const columnsRenamed = (0, _getColumnsRenamed.default)(previous, current);

        try {
          // the order of tasks is important, don't change
          if (tableRenamed) {
            await sqlite.table(tableRenamed.from).rename(tableRenamed.to);
          }

          if (columnsRemoved) {
            for (const name of columnsRemoved) {
              await table.columns.remove(name);
            }
          }

          if (columnsRenamed) {
            for (const rename of columnsRenamed) {
              await table.columns.rename(rename.from, rename.to);
            }
          }

          if (columnsAdded) {
            for (const definition of (0, _toNQL.default)(columnsAdded, current.storage)) {
              await table.columns.add(definition);
            }
          }

          // TODO: handle field schema changes: text -> select
          // TODO: handle storage: primary_keys, unique, required
          resolve();
        } catch (error) {
          reject(error);
        }
      }

      // run SQLite transaction
      transaction(previous, current);
    });
  } });exports.default = _default;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = (previous, current) => {
  const result = [];

  for (const field of previous.fields) {
    const itExists = current.fields.some(item => item.id === field.id);

    if (!itExists) result.push(field.handle);
  }

  return result.length ? result : null;
};exports.default = _default;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function match(fields, id) {
  for (const field of fields) {
    if (field.id === id) return field;
  }
}var _default =

(previous, current) => {
  const result = [];

  for (const field of current.fields) {
    const prev = match(previous.fields, field.id);

    if (prev && prev.handle !== field.handle) {
      result.push({ from: prev.handle, to: field.handle });
    }
  }

  return result.length ? result : null;
};exports.default = _default;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function match(fields, id) {
  for (const field of fields) {
    if (field.id === id) return field;
  }
}var _default =

(previous, current) => {
  const result = [];

  for (const field of current.fields) {
    if (!match(previous.fields, field.id)) {
      result.push(field);
    }
  }

  return result.length ? result : null;
};exports.default = _default;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _getTableName = _interopRequireDefault(__webpack_require__(26));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =

(previous, current) => {
  const from = (0, _getTableName.default)(previous);
  const to = (0, _getTableName.default)(current);

  // check for any changes
  return from === to ? null : { from, to };
};exports.default = _default;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _cms = __webpack_require__(1);
var _toJSONSchema = _interopRequireDefault(__webpack_require__(63));
var _normalize = _interopRequireDefault(__webpack_require__(64));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =

({ collection, table, fields, sqlite }) => ({
  collection,
  table,

  async add(data) {
    await this.format(data);
    await table.insert(data);
  },

  async upsert(data) {
    await this.format(data);
    await table.upsert(data);
  },

  async update(query, data) {
    await this.format(data);
    await table.update(query, data);
  },

  async get(query) {
    const record = await table.findOne(query);

    if (!record) return null;

    return _normalize.default.output(collection.fields, record);
  },

  async getById(id) {
    const record = await table.findOne({ id });

    if (!record) return null;

    return _normalize.default.output(collection.fields, record);
  },

  async find(query, filters = {}) {
    const records = await table.find(query, filters);

    return records.map(record => _normalize.default.output(collection.fields, record));
  },

  async remove(query) {
    return await table.remove(query);
  },

  async removeById(id) {
    return await table.remove({ id });
  },

  async count(query) {
    if (!query) return await table.count();

    const options = {
      type: "select",
      columns: "*",
      count: { column: "id", as: "total" },
      table: table.name,
      where: query };


    const [sql, values] = sqlite.nql.build(options);
    const record = await table.db.get(sql, values);

    return record ? record.total : 0;
  },

  async format(record) {
    // validate & set defaults
    const invalid = (0, _toJSONSchema.default)(collection.fields).validate(record);

    if (invalid) {
      throw new _cms.Failed({ type: "SCHEMA_VALIDATION", cause: invalid });
    }

    // apply field helpers
    const errors = await fields.helpers.apply(collection.fields, record);

    if (errors) {
      throw new _cms.Failed({ type: "SCHEMA_VALIDATION", cause: errors });
    }

    // normalize record for SQLite tables
    _normalize.default.input(collection.fields, record);
  } });exports.default = _default;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = toJSONSchema;var _cms = __webpack_require__(1);

function toJSONSchema(fields) {
  const properties = {};
  const required = [];

  for (const field of fields) {
    const schema = { type: field.type };

    if (field.default) {
      schema.default = field.default;
    }

    if (field.required) {
      required.push(field.handle);
    }

    properties[field.handle] = schema;
  }

  return (0, _cms.JSONSchema)({ type: "object", properties, required });
}

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  input(fields, data) {
    for (const field of fields) {
      switch (field.type) {
        case "boolean":
          data[field.handle] = data[field.handle] ? 1 : 0;
          break;

        case "object":
        case "array":
          data[field.handle] = JSON.stringify(data[field.handle]);
          break;}

    }

    return data;
  },

  output(fields, data) {
    for (const field of fields) {
      switch (field.type) {
        case "boolean":
          data[field.handle] = data[field.handle] ? true : false;
          break;

        case "object":
        case "array":
          data[field.handle] = JSON.parse(data[field.handle]);
          break;}

    }

    return data;
  } };exports.default = _default;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = toNQL;const typeMap = {
  string: "TEXT",
  number: "REAL",
  boolean: "INTEGER",
  // these must be passed as storage.type
  integer: "INTEGER",
  real: "REAL",
  blob: "BLOB",
  // these will be converted to JSON format
  array: "TEXT",
  object: "TEXT" };


const inList = (list, item) => list && list.includes(item);

function toNQL(fields, storage) {
  const { primary_keys, unique, required } = storage.settings;
  const definitions = [];

  for (const field of fields) {
    const type = typeMap[field.storage.type || field.type];

    if (!type) {
      throw Error(`Invalid field data type "${field.type}"`);
    }

    const definition = {
      name: field.handle,
      type: type };


    if (inList(primary_keys, field.handle) || field.storage.primary_key) {
      definition.isPrimaryKey = true;
    }

    if (inList(unique, field.handle) || field.storage.unique) {
      definition.isUnique = false;
    }

    // Disabled due to SQLite limitation: https://stackoverflow.com/q/3170634
    // if (inList(required, field.handle) || field.required) {
    // 	definition.isNullable = false;
    // }

    definitions.push(definition);
  }

  return definitions;
}

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // format data column to use JSON
const hooks = {
  before(records) {
    for (const record of records) {
      record.data = JSON.stringify(record.data);
    }
  },
  after(records) {
    for (const record of records) {
      record.data = JSON.parse(record.data);
    }
  } };var _default =


async ({ sqlite }) => {
  const table = sqlite.table("nore_collections");

  table.hook("before", hooks.before);
  table.hook("after", hooks.after);

  if (!(await sqlite.has(table.name))) {
    await table.create([
    { name: "id", type: "text", isPrimaryKey: true, isNullable: false },
    { name: "handle", type: "text", isUnique: true, isNullable: false },
    { name: "data", type: "text", isNullable: false }]);

  }

  return table;
};exports.default = _default;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _cms = __webpack_require__(1);

(0, _cms.on)("loading", async () => {
  const http = await (0, _cms.use)("nore/http");
  const collections = await (0, _cms.use)("nore/collections");

  /* COLLECTIONS */

  http.route({
    method: "GET",
    path: "/api/nore/collections",
    async handler(request, reply) {
      const schemas = await collections.schemas.all();

      return {
        data: schemas,
        meta: {} };

    } });


  http.route({
    method: "GET",
    path: "/api/nore/collections/:id",
    async handler(request, reply) {
      const { id } = request.params;
      const schema = await collections.schemas.get(id);

      return schema || reply.error(404);
    } });


  http.route({
    method: "POST",
    path: "/api/nore/collections",
    async handler(request, reply) {
      const collection = request.body;

      await collections.add(collection);

      return { id: collection.id };
    } });


  http.route({
    method: "PUT",
    path: "/api/nore/collections/:id",
    async handler(request, reply) {
      await collections.update(request.body);

      return reply.success();
    } });


  http.route({
    method: "DELETE",
    path: "/api/nore/collections/:id",
    async handler(request, reply) {
      await collections.remove(request.params.id);

      return reply.success();
    } });


  http.route({
    method: "GET",
    path: "/api/nore/collections/schema",
    async handler(request, reply) {
      return collections.schemas.schema;
    } });


  http.route({
    method: "GET",
    path: "/api/nore/collections/new",
    async handler(request, reply) {
      const defaults = { handle: "", name: "" };
      const collection = await collections.schemas.format(defaults);

      return collection;
    } });


  /* ENTRIES */

  http.route({
    method: "GET",
    path: "/api/collections/:handle",
    async handler(request, reply) {
      const query = request.query;
      const handle = request.params.handle;
      const db = await collections.get(handle);

      if (!db) return reply.error(400, `Invalid collection "${handle}"`);

      const [total, records] = await Promise.all([
      db.count(),
      // TODO: add filters
      db.find(query)]);


      // TODO: add pagination
      return {
        data: records,
        meta: { total } };

    } });


  http.route({
    method: "GET",
    path: "/api/collections/:handle/:id",
    async handler(request, reply) {
      const { handle, id } = request.params;
      const db = await collections.get(handle);

      if (!db) return reply.error(400, `Invalid collection "${handle}"`);

      const record = await db.getById(id);

      return record ? record : reply.error(404);
    } });


  http.route({
    method: "POST",
    path: "/api/collections/:handle",
    async handler(request, reply) {
      const handle = request.params.handle;
      const record = request.body;
      const db = await collections.get(handle);

      if (!db) return reply.error(404, `Invalid collections "${handle}"`);

      await db.add(record);

      return reply.success();
    } });


  http.route({
    method: "PUT",
    path: "/api/collections/:handle/:id",
    async handler(request, reply) {
      const { handle, id } = request.params;
      const record = request.body;
      const db = await collections.get(handle);

      if (!db) return reply.error(400, `Invalid collection "${handle}"`);

      const result = await db.upsert(record);

      return reply.success(result);
    } });


  http.route({
    method: "DELETE",
    path: "/api/collections/:handle/:id",
    async handler(request, reply) {
      const { handle, id } = request.params;
      const db = await collections.get(handle);

      if (!db) return reply.error(400, `Invalid collection "${handle}"`);

      const result = await db.removeById(id);

      return reply.success(result);
    } });

});

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
function importAll(r) {
  return r.keys().map(file => r(file).default || r(file));
}var _default =

[];exports.default = _default;

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"handle":"nore/fields","version":"1.0.0","name":"Nore fields","description":"Nore scheams & fields","documentation":"https://navaru.com/nore/docs/fields","author":{"name":"Navaru","email":"office@navaru.com","url":"https://navaru.com"},"dependencies":{"nore/sqlite":"*","nore/http":"*"}});

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(71);
__webpack_require__(78);
__webpack_require__(79);

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _cms = __webpack_require__(1);
var _fields2 = _interopRequireDefault(__webpack_require__(72));
var _table2 = _interopRequireDefault(__webpack_require__(77));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

(0, _cms.on)("loading", async () => {
  const sqlite = await (0, _cms.use)("nore/sqlite");
  const table = await (0, _table2.default)({ sqlite });

  (0, _cms.define)("nore/fields", (0, _fields2.default)({ table }));
});

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _cms = __webpack_require__(1);
var _helpers = _interopRequireDefault(__webpack_require__(73));
var _schemas = _interopRequireDefault(__webpack_require__(75));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =

({ table }) => ({
  table,
  schemas: _schemas.default,
  helpers: _helpers.default,

  async add(field = {}) {
    // validate & set defaults
    await this.format(field);

    await table.upsert({
      id: (0, _cms.uid)(),
      handle: field.handle,
      data: field });

  },

  async get(handle) {
    const record = await table.findOne({ $or: { handle, id: handle } });

    return record ? record.data : null;
  },

  async all() {
    const records = await table.find();

    return records.map(record => record.data);
  },

  async remove(handle) {
    return await table.remove({ $or: { handle, id: handle } });
  },

  async has(handle) {
    const record = await table.findOne({ $or: { handle, id: handle } });

    return Boolean(record);
  },

  async format(field = {}) {
    const schema = await _schemas.default.get(field.schema);

    if (!schema) {
      throw new Error(`Invalid field schema ${field.schema}`);
    }

    // validate & set defaults
    return schema.format(field);
  } });exports.default = _default;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _toHelperArguments = _interopRequireDefault(__webpack_require__(74));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const store = new Map();var _default =

{
  store,

  async set(key, handler) {
    store.set(key, handler);
  },

  async get(key) {
    return store.get(type);
  },

  async all() {
    return Array.from(store.values());
  },

  async remove(key) {
    store.delete(key);
  },

  async apply(fields, record) {
    const invalid = [];

    for (const field of fields) {
      if (!store.has(field.schema)) continue;

      const handler = store.get(field.schema);
      const errors = await handler(field, record, _toHelperArguments.default);

      if (errors) {
        invalid.push({ handle: field.handle, errors });
      }
    }

    return invalid.length ? invalid : null;
  } };exports.default = _default;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = toHelperArguments;const DELIMITER = /\s+(?![^\(]*\))/g;
const CALLER = /(.+)\((.+)?\)/;

function coerce(value) {
  if (value === "true") return true;
  if (value === "false") return false;
  if (value === "null") return null;

  if (value[0] === `"` || value[0] === `'`) {
    return value.slice(1, -1);
  }

  return value ? parseInt(value) : undefined;
}

function format(name) {
  const match = name.match(CALLER);
  const handler = match ? match[1] : name;
  const data = match ? match[2] || "" : "";

  const args = data.
  split(",").
  map(item => coerce(item.trim())).
  filter(i => i !== undefined);

  return [handler, args];
}

// use a simple cache, don't parse everytime
const cache = new Map();

function toHelperArguments(options) {
  if (!options) return [];

  if (cache.has(options)) {
    return cache.get(options);
  }

  const result = options.
  trim().
  split(DELIMITER).
  map(format);

  // prevent memory leaks
  if (cache.size > 500) cache.clear();

  cache.set(options, result);

  return result;
}

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _utils = __webpack_require__(15);
var _cms = __webpack_require__(1);
var _fieldsSchema = _interopRequireDefault(__webpack_require__(76));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const store = new Map();var _default =

{
  async set(handle, config = {}) {
    if (store.has(handle)) {
      throw new _cms.Failed({
        type: "SCHEMA_DEFINED",
        schema: handle });

    }

    const schema = (0, _utils.clone)(_fieldsSchema.default);

    // extend base schema with field type config
    schema.title = handle;

    schema.properties.schema.default = handle;
    schema.properties.type.default = config.value.type;
    schema.properties.default.default = config.value.default;

    schema.properties.settings.properties = config.settings || {};
    schema.properties.storage.properties = config.storage || {};

    // store field type in cache
    store.set(handle, (0, _cms.JSONSchema)(schema));
  },

  async get(handle) {
    return store.get(handle);
  },

  async all() {
    return Array.from(store.values());
  },

  async remove(handle) {
    return store.delete(handle);
  },

  async has(handle) {
    return store.has(handle);
  } };exports.default = _default;

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"title":"field","type":"object","required":["schema","type"],"properties":{"schema":{"type":"string","description":"The field schema name"},"type":{"type":"string","description":"The field's value format"},"default":{"description":"The field's default value"},"id":{"type":"string","default":"","description":"The field's unique identifier"},"handle":{"type":"string","default":"","description":"The property name used in a record"},"name":{"type":"string","default":"","description":"The field's display name"},"description":{"type":"string","default":"","description":"Describes what the field is"},"instructions":{"type":"string","default":"","description":"Describes how to use the field"},"required":{"type":"boolean","default":false,"description":"​​Marks if the field is mandatory or not"},"hidden":{"type":"boolean","default":false,"description":"​​Marks if the field is hidden in the UI"},"readOnly":{"type":"boolean","default":false,"description":"Marks if the field is noneditable"},"settings":{"type":"object","default":{},"description":"A set of field specific settings"},"storage":{"type":"object","default":{},"description":"A set of database specific settings"}}});

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // format data column to use JSON
const hooks = {
  before(records) {
    for (const record of records) {
      record.data = JSON.stringify(record.data);
    }
  },
  after(records) {
    for (const record of records) {
      record.data = JSON.parse(record.data);
    }
  } };var _default =


async ({ sqlite }) => {
  const table = sqlite.table("nore_fields");

  table.hook("before", hooks.before);
  table.hook("after", hooks.after);

  if (!(await sqlite.has(table.name))) {
    await table.create([
    { name: "id", type: "text", isPrimaryKey: true, isNullable: false },
    { name: "handle", type: "text", isUnique: true, isNullable: false },
    { name: "data", type: "text", isNullable: false }]);

  }

  return table;
};exports.default = _default;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _cms = __webpack_require__(1);

(0, _cms.on)("loading", async () => {
  const http = await (0, _cms.use)("nore/http");
  const fields = await (0, _cms.use)("nore/fields");

  // fields
  http.route({
    method: "GET",
    path: "/api/nore/fields",
    async handler(request, reply) {
      const data = await fields.all();

      return { data, meta: {} };
    } });


  http.route({
    method: "GET",
    path: "/api/nore/fields/:id",
    async handler(request, reply) {
      const { id } = request.params;
      const field = await fields.get(id);

      return field || reply.error(404);
    } });


  http.route({
    method: "POST",
    path: "/api/nore/fields",
    async handler(request, reply) {
      const data = request.body;

      // check if exists
      if (await fields.has(data.handle)) {
        return reply.error(422, {
          message: `Field "${data.handle}" already exists` });

      }

      // try to create it
      try {
        await fields.add(data);

        return reply.success();
      } catch (error) {
        return reply.error(400, error.data || { message: error.message });
      }
    } });


  http.route({
    method: "PUT",
    path: "/api/nore/fields/:id",
    async handler(request, reply) {
      // TODO: implement it
      return { message: "Not implemented" };
    } });


  http.route({
    method: "DELETE",
    path: "/api/nore/fields/:id",
    async handler(request, reply) {
      const { handle } = request.body;

      await fields.remove(handle);

      return reply.success();
    } });


  http.route({
    method: "GET",
    path: "/api/nore/fields/schemas",
    async handler(request, reply) {
      const data = await fields.schemas.all();

      return { data, meta: {} };
    } });


  http.route({
    method: "GET",
    path: "/api/nore/fields/new",
    async handler({ query }, reply) {
      const field = { schema: query.type, id: (0, _cms.uid)() };

      if (!query.type) {
        return reply.error(400, `Missing field type in URL query`);
      }

      return await fields.format(field);
    } });

});

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _cms = __webpack_require__(1);
var _autoloadEval = _interopRequireDefault(__webpack_require__(80));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

(0, _cms.on)("loading", async () => {
  const fields = await (0, _cms.use)("nore/fields");

  // load fields
  for (const field of _autoloadEval.default) {
    // ignore already loaded field
    if (await fields.has(field.handle)) continue;

    try {
      await fields.add(field);

      _cms.log.debug(`Field: ${field.handle}`);
    } catch (error) {
      _cms.log.error(error.data ? error.data : error, `Field loading error:`);
    }
  }
});

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
function importAll(r) {
  return r.keys().map(file => r(file).default || r(file));
}

// import field types from "./types" folder
importAll(__webpack_require__(81));var _default =

[...importAll(
__webpack_require__(94))];exports.default = _default;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./fieldset/index.js": 82,
	"./list/index.js": 83,
	"./number/index.js": 84,
	"./richtext/index.js": 86,
	"./select/index.js": 88,
	"./switch/index.js": 90,
	"./text/index.js": 91
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 81;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _cms = __webpack_require__(1);

(0, _cms.on)("loading", async () => {
  const fields = await (0, _cms.use)("nore/fields");

  await fields.schemas.set("fieldset", {
    value: { type: "object", default: {} },
    settings: {
      limit: { type: "number", default: 0 },
      fields: { type: "array", default: [] } } });



  await fields.helpers.set("fieldset", async (field, record, parse) => {
    const value = record[field.handle];
    const _fields = field.settings.fields;

    return await fields.helpers.apply(_fields, value);
  });

  _cms.log.debug("Field type: fieldset");
});

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _cms = __webpack_require__(1);

(0, _cms.on)("loading", async () => {
  const fields = await (0, _cms.use)("nore/fields");

  await fields.schemas.set("list", {
    value: { type: "array", default: [] },
    settings: {
      validate: { type: "string", default: "" },
      item: { type: "object", default: {} } } });



  await fields.helpers.set("list", async (field, record, parse) => {
    // TODO: add a way to validate / generate list items
  });

  _cms.log.debug("Field type: list");
});

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _cms = __webpack_require__(1);
var _validate = _interopRequireDefault(__webpack_require__(85));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

(0, _cms.on)("loading", async () => {
  const fields = await (0, _cms.use)("nore/fields");

  await fields.schemas.set("number", {
    value: { type: "number", default: 0 },
    settings: {
      placeholder: { type: "string", default: "" },
      generate: { type: "string", default: "" },
      validate: { type: "string", default: "" } } });



  await fields.helpers.set("number", async (field, record, parse) => {
    const errors = [];

    if (field.settings.validate) {
      (0, _validate.default)(parse(field.settings.validate), field, record, errors);
    }

    // TODO: add generators

    return errors.length ? errors : null;
  });

  _cms.log.debug("Field type: number");
});

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _cms = __webpack_require__(1);

function length(value, min = 0, max = Infinity) {
  if (value.toString().length < min) return `Minimum length ${min}`;
  if (value.toString().length > max) return `Maximum length ${max}`;
}

function range(value, min = 0, max = Infinity) {
  if (value < min) return `Minimum range ${min}`;
  if (value > max) return `Maximum range ${max}`;
}

function min(value, min = 0) {
  if (value < min) return `Minimum value ${min}`;
}

function max(value, max = Infinity) {
  if (value > max) return `Maximum value ${max}`;
}

const validators = { min, max, length, range, between: range };var _default =

(args, field, record, errors) => {
  const value = record[field.handle];

  for (const [handler, options] of args) {
    const test = validators[handler];

    if (test) {
      const error = test(value, ...options);

      if (error) errors.push(error);
    } else {
      _cms.log.warn(
      `No validator defined for "${handler}", field "${field.handle}"`);

    }
  }
};exports.default = _default;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _cms = __webpack_require__(1);
var _validate = _interopRequireDefault(__webpack_require__(87));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

(0, _cms.on)("loading", async () => {
  const fields = await (0, _cms.use)("nore/fields");

  await fields.schemas.set("richtext", {
    value: {
      type: "object",
      default: {
        doc: { type: "doc", content: [{ type: "paragraph" }] },
        selection: { type: "text", anchor: 1, head: 1 } } },


    settings: {
      validate: { type: "string", default: "" } } });



  await fields.helpers.set("richtext", (field, record, parse) => {
    const errors = [];

    if (field.settings.validate) {
      (0, _validate.default)(parse(field.settings.validate), field, record, errors);
    }

    return errors.length ? errors : null;
  });

  _cms.log.debug("Field type: richtext");
});

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _cms = __webpack_require__(1);

function empty(value) {
  if (value.length === 0) return `Can't be empty`;
}

function length(value, min = 0, max = Infinity) {
  if (value.length < min) return `Minimum length ${min}`;
  if (value.length > max) return `Maximum length ${max}`;
}

function min(value, min = 0) {
  if (value.length < min) return `Minimum length ${min}`;
}

function max(value, max = Infinity) {
  if (value.length > max) return `Maximum length ${max}`;
}

const validators = { empty, length, min, max };var _default =

(args, field, record, errors) => {
  const value = record[field.handle];

  for (const [handler, options] of args) {
    const test = validators[handler];

    if (test) {
      const error = test(value, ...options);

      if (error) errors.push(error);
    } else {
      _cms.log.warn(
      `No validator defined for "${handler}", field "${field.handle}"`);

    }
  }

  if (field.required && !value) {
    errors.push("Required field");
  }
};exports.default = _default;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _cms = __webpack_require__(1);
var _validate = _interopRequireDefault(__webpack_require__(89));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

(0, _cms.on)("loading", async () => {
  const fields = await (0, _cms.use)("nore/fields");

  await fields.schemas.set("select", {
    value: { type: "string", default: "" },
    settings: {
      placeholder: { type: "string", default: "" },
      validate: { type: "string", default: "" },

      // allow to add values or not
      // by default only provided values
      strict: {
        type: "boolean",
        default: false,
        description: "Add new values besides the provided options" },


      options: {
        type: "array",
        default: [{ label: "", value: "" }],
        items: {
          type: "object",
          properties: {
            label: { type: "string" },
            value: { type: "string" } } } } } });






  await fields.helpers.set("select", (field, record, parse) => {
    const errors = [];

    if (field.settings.validate) {
      (0, _validate.default)(parse(field.settings.validate), field, record, errors);
    }

    return errors.length ? errors : null;
  });

  _cms.log.debug("Field type: select");
});

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _cms = __webpack_require__(1);

function empty(value) {
  if (value.length === 0) return `Can't be empty`;
}

function min(value, min = 0) {
  if (value.length < min) return `Minimum size ${min}`;
}

function max(value, max = Infinity) {
  if (value.length > max) return `Maximum size ${max}`;
}

function between(value, min = 0, max = Infinity) {
  if (value.length < min) return `Minimum size ${max}`;
  if (value.length > max) return `Maximum size ${max}`;
}

// adding new values is not allowed in strict mode
function strict(value) {
  if (!value) return;
  if (!field.settings.options.some(option => value === option[0])) {
    const options = field.settings.options.map(o => o[0]).join(", ");
    return `Must be one of: "${options}"`;
  }
}

const validators = { empty, strict, min, max, between };var _default =

(args, field, record, errors) => {
  const value = record[field.handle];

  for (const [handler, options] of args) {
    const test = validators[handler];

    if (test) {
      const error = test(value, ...options);

      if (error) errors.push(error);
    } else {
      _cms.log.warn(
      `No validator defined for "${handler}", field "${field.handle}"`);

    }
  }

  // TODO: validate strict
};exports.default = _default;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _cms = __webpack_require__(1);

(0, _cms.on)("loading", async () => {
  const fields = await (0, _cms.use)("nore/fields");

  await fields.schemas.set("switch", {
    value: { type: "boolean", default: false },
    settings: {
      placeholder: { type: "string", default: "" } } });



  _cms.log.debug("Field type: switch");
});

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _cms = __webpack_require__(1);
var _validate = _interopRequireDefault(__webpack_require__(92));
var _generate = _interopRequireDefault(__webpack_require__(93));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

(0, _cms.on)("loading", async () => {
  const fields = await (0, _cms.use)("nore/fields");

  await fields.schemas.set("text", {
    value: { type: "string", default: "" },
    settings: {
      multiline: { type: "boolean", default: false },
      placeholder: { type: "string", default: "" },
      generate: { type: "string", default: "" },
      validate: { type: "string", default: "" } } });



  await fields.helpers.set("text", (field, record, parse) => {
    const errors = [];

    if (field.settings.generate) {
      (0, _generate.default)(parse(field.settings.generate), field, record, errors);
    }

    if (field.settings.validate) {
      (0, _validate.default)(parse(field.settings.validate), field, record, errors);
    }

    if (field.required && !errors.length && !record[field.handle]) {
      errors.push("Required field");
    }

    return errors.length ? errors : null;
  });

  _cms.log.debug("Field type: text");
});

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = validate;var _cms = __webpack_require__(1);

const EMAIL_REGEX = /^[a-z0-9_\-\.]{2,}@[a-z0-9_\-\.]{2,}\.[a-z]{2,}$/i;

function email(value) {
  if (!EMAIL_REGEX.test(value)) return `Not a valid email`;
}

function empty(value) {
  if (value.length === 0) return `Can't be empty`;
}

function length(value, min = 0, max = Infinity) {
  if (value.length < min) return `Minimum length ${min}`;
  if (value.length > max) return `Maximum length ${max}`;
}

function min(value, min = 0) {
  if (value.length < min) return `Minimum length ${min}`;
}

function max(value, max = Infinity) {
  if (value.length > max) return `Maximum length ${max}`;
}

const validators = { email, empty, length, min, max };

function validate(args, field, record, errors) {
  const value = record[field.handle];

  for (const [handler, options] of args) {
    const test = validators[handler];

    if (test) {
      const error = test(value, ...options);

      if (error) errors.push(error);
    } else {
      _cms.log.warn(
      `No validator defined for "${handler}", field "${field.handle}"`);

    }
  }
}

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = generate;var _cms = __webpack_require__(1);

function now() {
  return Date.now();
}

const generators = { uid: _cms.uid, now };

function generate(args, field, record, errors) {
  // don't overwrite data
  if (record[field.handle]) return;

  const value = [];

  for (const [handler, options] of args) {
    const fn = generators[handler];

    if (fn) {
      value.push(fn(...options));
    } else {
      _cms.log.warn(
      `No generator defined for "${handler}", field "${field.handle}"`);

    }
  }

  record[field.handle] = value.join("");
}

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./id.yaml": 95
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 94;

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"name":"ID","handle":"id","schema":"text","hidden":true,"readOnly":true,"required":true,"settings":{"generate":"uid"},"storage":{"primary_key":true,"unique":true}});

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"handle":"nore/http","version":"1.0.0","name":"Nore HTTP","description":"Nore HTTP server","documentation":"https://navaru.com/nore/docs/http","author":{"name":"Navaru","email":"office@navaru.com","url":"https://navaru.com"}});

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _cms = __webpack_require__(1);
var _assert = __webpack_require__(0);
var _fastify = _interopRequireDefault(__webpack_require__(98));
var _fs = _interopRequireDefault(__webpack_require__(2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

(0, _cms.define)("nore/http", _fastify.default);

_cms.plug.define("nore/http/register", ({ plugin, options, name = "NO_NAME" }) => {
  _fastify.default.plugin(plugin, options);

  _cms.log.debug(`nore/http plugin: ${name}`);
});

(0, _cms.on)("final", async () => {
  const source = (0, _cms.config)("http");
  const isSocket = (0, _assert.isString)(source) && source.includes("unix:");

  // wait for all plugins to load
  await _fastify.default.ready();

  // listen on socket
  if (isSocket) {
    const socket = source.replace("unix:", "");

    // remove the previously created socket, if any
    await _fs.default.promises.unlink(socket).catch(e => {
      /* ignore socket not found errors */
    });

    // allow time for fastify to create the socket
    setImmediate(async () => {
      // set permissions so nginx can proxy upstream
      await _fs.default.promises.chmod(socket, "777");
    });

    // start listen for HTTP requests on socket
    _fastify.default.listen(socket);
  }
  // liste on port
  else {
      // start listen for HTTP requests on host
      _fastify.default.listen(source);
    }
});

(0, _cms.on)("exit", async () => {
  await _fastify.default.close();
});

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _http = __webpack_require__(27);
var _qs = _interopRequireDefault(__webpack_require__(99));
var _fastify = _interopRequireDefault(__webpack_require__(100));
var _fastifyCors = _interopRequireDefault(__webpack_require__(101));
var _fastifyCookie = _interopRequireDefault(__webpack_require__(102));
var _fastifyMultipart = _interopRequireDefault(__webpack_require__(103));
var _fastifyPlugin = _interopRequireDefault(__webpack_require__(104));
var helpers = _interopRequireWildcard(__webpack_require__(105));
var hooks = _interopRequireWildcard(__webpack_require__(106));
var _onError = _interopRequireDefault(__webpack_require__(107));
var _settings = _interopRequireDefault(__webpack_require__(108));function _getRequireWildcardCache() {if (typeof WeakMap !== "function") return null;var cache = new WeakMap();_getRequireWildcardCache = function () {return cache;};return cache;}function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;}if (obj === null || typeof obj !== "object" && typeof obj !== "function") {return { default: obj };}var cache = _getRequireWildcardCache();if (cache && cache.has(obj)) {return cache.get(obj);}var newObj = {};var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;if (desc && (desc.get || desc.set)) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}newObj.default = obj;if (cache) {cache.set(obj, newObj);}return newObj;}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const fastify = (0, _fastify.default)({
  ignoreTrailingSlash: true,
  querystringParser: _qs.default.parse
  // logger: IS_DEVELOPMENT ? log : false,
});

fastify.register(_fastifyCors.default, _settings.default.cors);
fastify.register(_fastifyCookie.default, _settings.default.cookies);
fastify.register(_fastifyMultipart.default, _settings.default.multipart);

fastify.decorateReply("success", helpers.replySuccess);
fastify.decorateReply("error", helpers.replyError);

fastify.addHook("onRoute", hooks.schemaAllErrors);

// reply with 418 to trigger nginx to serve the default index.html file
fastify.setNotFoundHandler(async (request, reply) => {
  reply.type("application/json");
  reply.code(501);

  // reply with status code 418 so nginx will serve the index.html
  if (request.raw.method === "GET") reply.code(418);

  return { code: reply.statusCode, message: _http.STATUS_CODES[reply.statusCode] };
});

fastify.setErrorHandler(_onError.default);

fastify.plugin = (handler, options) => {
  fastify.register((0, _fastifyPlugin.default)(handler), options);
};

fastify.route.prefix = (prefix, handler) => {
  fastify.register(
  async (http, opts) => {
    await handler(options => http.route(options), opts);
  },
  { prefix });

};var _default =

fastify;exports.default = _default;

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = require("fastify");

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = require("fastify-cors");

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = require("fastify-cookie");

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = require("fastify-multipart");

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = require("fastify-plugin");

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.replyError = replyError;exports.replySuccess = replySuccess;var _assert = __webpack_require__(0);
var _HTTPError = _interopRequireDefault(__webpack_require__(28));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

function replyError(code, error) {
  const isError = error instanceof Error;

  return new _HTTPError.default({
    message: isError ? error.message : (0, _assert.isString)(error) ? error : null,
    cause: error,
    code });

}

function replySuccess(data = {}) {
  data = (0, _assert.isString)(data) ? { message: data } : data;

  return { success: true, ...data };
}

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.schemaAllErrors = schemaAllErrors;var _ajv = _interopRequireDefault(__webpack_require__(19));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

function schemaAllErrors(route) {
  // validates all fiels on the schema, doesn't stop at first error
  if (route.schema && route.schema.allErrors) {
    const validator = new _ajv.default({
      removeAdditional: true,
      useDefaults: true,
      coerceTypes: true,
      allErrors: true });


    route.schemaCompiler = schema => validator.compile(schema);
  }
}

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = onError;var _cms = __webpack_require__(1);
var _HTTPError = _interopRequireDefault(__webpack_require__(28));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

async function onError(error, request, reply) {
  if (error instanceof _cms.Failed) {
    reply.type("application/json");
    reply.code(400);

    return { ...error };
  }

  if (error instanceof _HTTPError.default) {
    reply.type("application/json");
    reply.code(error.code);
  }

  // handle edge cases where a plugin misbehaves
  if (reply.res.statusCode < 400 || reply.res.statusCode >= 500) {
    reply.code(500);
  }

  _cms.log.debug(error, error.name);

  return error;
}

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  cors: {
    // allow CORS in development mode (site.local)
    origin: false ? undefined : false,
    credentials: true },

  cookies: {},
  multipart: {} };exports.default = _default;

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"handle":"nore/http-sessions","version":"1.0.0","name":"Nore HTTP sessions","description":"HTTP cookie based sessions","documentation":"https://navaru.com/nore/docs/http","author":{"name":"Navaru","email":"office@navaru.com","url":"https://navaru.com"},"dependencies":{"nore/http":"*","nore/sqlite":"*"},"settings":{"autoclean":true,"autocleanInterval":86400000,"secret":"NOT__SO__SECRET__TOKEN__FOR__COOKIE__SIGNING","cookieName":"NSID","maxAge":604800000,"cookie":{"domain":"localhost","path":"/","expires":0,"secure":false,"httpOnly":true,"sameSite":true}}});

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _cms = __webpack_require__(1);
var _object = __webpack_require__(4);
var _sessions = _interopRequireDefault(__webpack_require__(111));
var _store2 = _interopRequireDefault(__webpack_require__(113));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =

async options => {
  const sqlite = await (0, _cms.use)("nore/sqlite");
  const table = sqlite.table("nore_sessions");
  const store = (0, _store2.default)({ table });

  if (!(await sqlite.has("nore_sessions"))) {
    await table.create([
    { name: "id", type: "text", isNullable: false, isPrimaryKey: true },
    { name: "expires", type: "text", isNullable: false },
    { name: "data", type: "text", isNullable: false }]);

  }

  await (0, _cms.plug)("nore/http/register", {
    name: "http/sessions",
    plugin: (0, _sessions.default)({ store }),
    options: (0, _object.merge)(options, {
      cookie: {
        domain: (0, _cms.config)("url.host"),
        path: (0, _cms.config)("url.path") } }) });




  // delete expired sessions
  if (options.autoclean) {
    setInterval(async () => {
      await store.cleanup();
    }, options.autocleanInterval);
  }
};exports.default = _default;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _cookieSignature = __webpack_require__(112);
var _crypto = _interopRequireDefault(__webpack_require__(22));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =

({ store }) => async (fastify, options) => {
  const sid = () => _crypto.default.randomBytes(20).toString("hex");

  fastify.addHook("preHandler", async (request, reply) => {
    // start from a fresh session object
    request.sessionId = sid();
    request.session = {};

    // get previous session cookie
    const signedId = request.cookies[options.cookieName];

    if (signedId) {
      // decrypt cookie to get session ID
      const sessionId = (0, _cookieSignature.unsign)(signedId, options.secret);

      if (sessionId) {
        // set previous session ID
        request.sessionId = sessionId;

        // check if a previous session was stored
        const session = await store.get(sessionId);

        if (session) {
          request.session = session;
        }
      }
    }
  });

  fastify.addHook("onSend", async (request, reply, payload) => {
    // ignore error requests
    if (reply.statusCode >= 400) return;

    // an error occurred, ignore session reset
    if (!request.sessionId) return;

    // remove previous storred session, we regenerate it below
    await store.remove(request.sessionId);

    // session was destroyed
    if (request.session === null) return;

    // save session under new id so no reply attack can be preformed
    const sessionId = sid();
    const signedId = (0, _cookieSignature.sign)(sessionId, options.secret);
    const expires = Date.now() + options.maxAge;
    const secure =
    options.cookie.secure || request.headers["x-forwarded-proto"] === "https";

    reply.setCookie(options.cookieName, signedId, {
      ...options.cookie,
      expires,
      secure });


    await store.set(sessionId, request.session, expires);
  });
};exports.default = _default;

/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = require("cookie-signature");

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = ({ table }) => ({
  async get(id) {
    const record = await table.findOne({ id });

    if (record && record.data) {
      return JSON.parse(record.data);
    }

    return null;
  },

  async set(id, data, expires) {
    expires = Number(new Date(Number(expires)));
    data = JSON.stringify(data);

    const record = await table.findOne({ id });

    if (record) {
      record.data = data;
      record.expires = expires;

      await table.update({ id: record.id }, record);
    } else {
      await table.insert({ id, data, expires });
    }
  },

  async remove(id) {
    await table.remove({ id });
  },

  async cleanup() {
    await table.remove({ expires: { $lt: Date.now() } });
  } });exports.default = _default;

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"handle":"nore/sqlite","version":"1.0.0","name":"Nore HTTP","description":"Nore SQLite interface","documentation":"https://navaru.com/nore/docs/sqlite","author":{"name":"Navaru","email":"office@navaru.com","url":"https://navaru.com"},"settings":{"file":"sqlite.db","useWAL":false}});

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _cms = __webpack_require__(1);
var sqlite = _interopRequireWildcard(__webpack_require__(133));
var _path = __webpack_require__(5);
var _toSQL = _interopRequireDefault(__webpack_require__(117));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _getRequireWildcardCache() {if (typeof WeakMap !== "function") return null;var cache = new WeakMap();_getRequireWildcardCache = function () {return cache;};return cache;}function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;}if (obj === null || typeof obj !== "object" && typeof obj !== "function") {return { default: obj };}var cache = _getRequireWildcardCache();if (cache && cache.has(obj)) {return cache.get(obj);}var newObj = {};var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;if (desc && (desc.get || desc.set)) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}newObj.default = obj;if (cache) {cache.set(obj, newObj);}return newObj;}var _default =

async options => {
  const file = (0, _cms.config)("sqlite.file") || options.file;
  const useWAL = (0, _cms.config)("sqlite.useWAL") || options.useWAL;

  const db = new sqlite.Database({
    file: (0, _path.join)((0, _cms.config)("path"), file),
    useWAL });


  db.Migrations = sqlite.Migrations;
  db.Database = sqlite.Database;
  db.SQLite = sqlite.SQLite;
  db.Table = sqlite.Table;

  db.timestamp = sqlite.timestamp;
  db.uid = sqlite.uid;
  db.nql = sqlite.nql;
  db.xql = sqlite.xql;
  db.toSQL = _toSQL.default;

  // also define it as a service
  (0, _cms.define)("nore/sqlite", db);
};exports.default = _default;

/***/ }),
/* 116 */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = toSQL;var _object = __webpack_require__(4);

const typeMap = {
  string: "TEXT",
  integer: "INTEGER",
  number: "NUMERIC",
  boolean: "NUMERIC",
  // these must be passed as storage.type
  real: "REAL",
  blob: "BLOB",
  // these will be converted to JSON format
  array: "TEXT",
  object: "TEXT" };


const validTypes = (0, _object.keys)(typeMap);
const inList = (list, item) => list && list.includes(item);

function toSQL(schema) {
  const fields = [];

  for (const name in schema.properties) {
    const field = schema.properties[name];
    const type = field.type;

    if (!inList(validTypes, type)) {
      throw Error("schema could not be converted to SQL");
    }

    let fmt = `${name} ${typeMap[type].toUpperCase()}`;

    if (inList(schema.primaryKeys, name)) {
      fmt += ` PRIMARY KEY`;
    }

    if (inList(schema.unique, name)) {
      fmt += ` UNIQUE`;
    }

    // Disabled due to SQLite limitation: https://stackoverflow.com/q/3170634
    // if (inList(schema.required, name)) {
    // 	fmt += ` NOT NULL`;
    // }

    fields.push(fmt);
  }

  return `CREATE TABLE IF NOT EXISTS ${schema.table} (${fields.join(", ")});`;
}

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"handle":"nore/uploads","version":"1.0.0","name":"Nore file uploads","description":"Static files upload APIs","documentation":"https://navaru.com/nore/docs/uploads","author":{"name":"Navaru","email":"office@navaru.com","url":"https://navaru.com"},"dependencies":{"nore/sqlite":"*","nore/http":"*","nore/fields":"*"}});

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(120);
__webpack_require__(123);
__webpack_require__(124);

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _cms = __webpack_require__(1);
var _schema = _interopRequireDefault(__webpack_require__(121));
var _table2 = _interopRequireDefault(__webpack_require__(122));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

(0, _cms.define)("nore/uploads", async () => {
  const sqlite = await (0, _cms.use)("nore/sqlite");
  const table = await (0, _table2.default)({ sqlite, schema: _schema.default });

  return {
    table,
    schema: _schema.default,

    async add(data) {
      _schema.default.format(data);
      return table.insert(data);
    },

    async get(id) {
      return table.findOne({ id });
    },

    async all() {
      return table.find();
    },

    async find(query, filters = {}) {
      return table.find(query, { orderBy: { createdAt: "desc" }, ...filters });
    },

    async upsert(data) {
      return table.upsert({ id: data.id }, data);
    },

    async update(query, data) {
      return table.update(query, data);
    },

    async remove(query) {
      return table.remove(query);
    },

    async removeById(id) {
      return table.remove({ id });
    } };

});

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _cms = __webpack_require__(1);var _default =

(0, _cms.JSONSchema)({
  type: "object",
  properties: {
    id: { type: "string" },
    url: { type: "string" },
    file: { type: "string" },
    mode: { type: "string" },
    size: { type: "string" },
    lqip: { type: "string" },
    variants: { type: "array" },
    createdAt: { type: "string" } },

  table: "nore_uploads",
  primaryKeys: ["id"],
  unique: ["id", "url"],
  required: ["url", "file"] });exports.default = _default;

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _cms = __webpack_require__(1);

// format columns to strings
const hooks = {
  before(records) {
    for (const record of records) {
      if (!record.createdAt) record.createdAt = Date.now();
      if (!record.id) record.id = (0, _cms.uid)();

      record.variants = JSON.stringify(record.variants);
    }
  },
  after(records) {
    for (const record of records) {
      record.variants = JSON.parse(record.variants);
    }
  } };var _default =


async ({ sqlite, schema }) => {
  const table = sqlite.table(schema.table);

  table.hook("before", hooks.before);
  table.hook("after", hooks.after);

  if (!(await sqlite.has(schema.table))) {
    await sqlite.run(sqlite.toSQL(schema));
  }

  return table;
};exports.default = _default;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _cms = __webpack_require__(1);

(0, _cms.on)("loading", async () => {
  const fields = await (0, _cms.use)("nore/fields");

  await fields.schemas.set("image", {
    value: { type: "array", default: [] },
    settings: {
      sizes: { type: "array", default: [] },
      mode: { type: "string", default: "" } } });



  _cms.log.debug("Field type: image");
});

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _cms = __webpack_require__(1);
var _path = __webpack_require__(5);
var _fs = __webpack_require__(14);
var _imageSize = _interopRequireDefault(__webpack_require__(125));
var _getURLSafeName = _interopRequireDefault(__webpack_require__(126));
var _getLQIP = _interopRequireDefault(__webpack_require__(128));
var _getSize = _interopRequireDefault(__webpack_require__(129));
var _saveTo = _interopRequireDefault(__webpack_require__(130));
var _resize = _interopRequireDefault(__webpack_require__(132));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

(0, _cms.on)("loading", async () => {
  const http = await (0, _cms.use)("nore/http");
  const uploads = await (0, _cms.use)("nore/uploads");

  http.route({
    path: "/api/nore/uploads",
    method: "GET",
    async handler(request, reply) {
      const { query } = request;
      const response = await uploads.find(query);

      if (!response.length) {
        return reply.error(422);
      }

      return { data: response };
    } });


  http.route({
    path: "/api/nore/uploads/:id",
    method: "GET",
    async handler(request, reply) {
      const { id } = request.params;
      const result = await uploads.get(id);

      return result || reply.error(404);
    } });


  http.route({
    path: "/api/nore/uploads",
    method: "POST",
    handler(request, reply) {
      const mp = request.multipart(onFile, onEnd);
      const data = {};

      mp.on("field", (key, value) => data[key] = value);

      async function onFile(field, stream, name, encoding, mimetype) {
        const directory = data.path || "";
        const filename = (0, _getURLSafeName.default)();
        const ext = (0, _path.getExtension)(name);
        const path = (0, _path.join)((0, _cms.config)("path"), "uploads", directory);
        const file = (0, _path.join)(path, `${filename}${ext}`);

        const record = {
          file: name,
          url: (0, _path.join)("/", directory, `${filename}${ext}`),
          mode: data.mode || "",
          variants: [] };


        if (!(await (0, _fs.isDirectory)(path))) {
          await (0, _fs.createDirectory)(path);
        }

        try {
          await (0, _saveTo.default)(stream, file);
        } catch (error) {
          reply.type("application/json");
          reply.send(reply.error(422));

          return _cms.log.error(error, "Can't save stream");
        }

        try {
          for (const size of JSON.parse(data.sizes)) {
            const [width, height] = size.trim().split("x");
            const suffix = `${width || "auto"}x${height || "auto"}`;
            const name = `${filename}.${suffix}${ext}`;
            const target = (0, _path.join)(path, name);
            const url = (0, _path.join)("/", directory, name);

            await (0, _resize.default)(file, target, {
              width: +width,
              height: +height,
              fit: data.mode });


            record.variants.push({ width, height, url });
          }
        } catch (error) {
          reply.type("application/json");
          reply.send(reply.error(422));

          return _cms.log.error(error, "Can't create variants");
        }

        record.size = await (0, _getSize.default)(file);
        record.lqip = await (0, _getLQIP.default)(file, 20);

        await uploads.add(record);

        reply.type("application/json");
        reply.send(record);
      }

      function onEnd(error) {
        if (error) {
          reply.type("application/json");
          reply.send(reply.error(422, error));

          _cms.log.error(error, "File upload error");
        }
      }
    } });


  http.route({
    path: "/api/nore/uploads/resolutions",
    method: "GET",
    async handler(request, reply) {
      const { query } = request;
      const response = await uploads.getResolutions(query);

      if (!response.length) {
        return reply.error(422);
      }

      return { data: response.pop() };
    } });

});

/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports = require("image-size");

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = getURLSafeName;var _generate = _interopRequireDefault(__webpack_require__(127));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const alphabet = "0123456789-abcdefghijklmnopqrstuvwxyz";

function getURLSafeName(n = 20) {
  return (0, _generate.default)(alphabet, n); //=> "m9vdikczokciigd0r3dm"
}

/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports = require("nanoid/generate");

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = getLQIP;var _sharp = _interopRequireDefault(__webpack_require__(29));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

function getLQIP(file, width) {
  return (0, _sharp.default)(file).
  resize(width).
  toBuffer({ resolveWithObject: true }).
  then(
  ({ data, info }) =>
  `data:image/${info.format};base64,${data.toString("base64")}`);

}

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = getSize;var _fs = _interopRequireDefault(__webpack_require__(2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

async function getSize(file) {
  return _fs.default.promises.stat(file).then(stat => stat.size);
}

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = saveTo;var _fs = _interopRequireDefault(__webpack_require__(2));
var _pump = _interopRequireDefault(__webpack_require__(131));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

function saveTo(stream, path) {
  return new Promise((resolve, reject) => {
    (0, _pump.default)(stream, _fs.default.createWriteStream(path), error => {
      error ? reject(error) : resolve(path);
    });
  });
}

/***/ }),
/* 131 */
/***/ (function(module, exports) {

module.exports = require("pump");

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = resize;var _sharp = _interopRequireDefault(__webpack_require__(29));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

function resize(source, target, options) {
  return (0, _sharp.default)(source).
  resize(options).
  toFile(target);
}

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var definitions_namespaceObject = {};
__webpack_require__.r(definitions_namespaceObject);
__webpack_require__.d(definitions_namespaceObject, "toForeignKeys", function() { return toForeignKeys; });
__webpack_require__.d(definitions_namespaceObject, "toDefinition", function() { return toDefinition; });
__webpack_require__.d(definitions_namespaceObject, "toSQL", function() { return toSQL; });
__webpack_require__.d(definitions_namespaceObject, "default", function() { return queryFields_definitions; });
var source_namespaceObject = {};
__webpack_require__.r(source_namespaceObject);
__webpack_require__.d(source_namespaceObject, "queryTypes", function() { return source_queryTypes; });
__webpack_require__.d(source_namespaceObject, "queryFields", function() { return source_queryFields; });
__webpack_require__.d(source_namespaceObject, "operators", function() { return source_operators; });
__webpack_require__.d(source_namespaceObject, "definitions", function() { return definitions_namespaceObject; });
__webpack_require__.d(source_namespaceObject, "build", function() { return build_build; });
__webpack_require__.d(source_namespaceObject, "default", function() { return source; });

// EXTERNAL MODULE: external "cuid"
var external_cuid_ = __webpack_require__(8);
var external_cuid_default = /*#__PURE__*/__webpack_require__.n(external_cuid_);

// EXTERNAL MODULE: ../node_modules/@nore/std/assert/index.js + 19 modules
var assert = __webpack_require__(0);

// CONCATENATED MODULE: ../node_modules/@nore/nql/source/queryFields/definitions.js


const keywords = ["CURRENT_TIME", "CURRENT_DATE", "CURRENT_TIMESTAMP"];

function toForeignKeysSQL({ name, foreignKey: [table, column] }) {
	return `FOREIGN KEY ("${name}") REFERENCES "${table}" ("${column}")`;
}

function toForeignKeys(definitions) {
	const foreignKeys = definitions
		.filter(e => e.foreignKey)
		.map(toForeignKeysSQL)
		.join(", ");

	return foreignKeys ? `, ${foreignKeys}` : "";
}

function toDefinition(data) {
	let def = `"${data.name}"`;

	if (data.isAutoIncrement) {
		def += " INTEGER AUTOINCREMENT";
	} else {
		def += " " + (data.type ? data.type.toUpperCase() : "TEXT");
	}

	if (data.isPrimaryKey) {
		def += " PRIMARY KEY NOT NULL";
	} else if (data.isNullable === false) {
		def += " NOT NULL";
	}

	if (data.isUnique) {
		def += " UNIQUE";
	}

	if (data.default) {
		const isKeyword = keywords.includes(data.default);
		const value = isKeyword ? data.default : `'${data.default}'`;

		def += ` DEFAULT ${value}`;
	}

	return def;
}

function toSQL(data) {
	const columns = data.map(toDefinition).join(", ");
	const foreignKeys = toForeignKeys(data);

	return columns + foreignKeys;
}

/* harmony default export */ var queryFields_definitions = ((data, query, build) => {
	if (Object(assert["isArray"])(data)) {
		// ignore empty arrays
		if (!data.length) return null;

		return `(${toSQL(data)})`;
	}

	// ignore unsuported values
	return null;
});

// CONCATENATED MODULE: ../node_modules/@nore/nql/source/utils/FieldsMap.js
class QueryFieldsMap extends Map {
	add(field, handler) {
		this.set(field, handler);
	}
}

// CONCATENATED MODULE: ../node_modules/@nore/nql/source/queryFields/ifNotExists.js
/* harmony default export */ var ifNotExists = ((data, query, build) => {
	return data === true ? "IF NOT EXISTS" : null;
});

// CONCATENATED MODULE: ../node_modules/@nore/nql/source/queryFields/distinct.js
/* harmony default export */ var queryFields_distinct = ((data, query, build) => {
	return data === true ? "DISTINCT" : null;
});

// EXTERNAL MODULE: ../node_modules/@nore/std/object/index.js + 10 modules
var object = __webpack_require__(4);

// CONCATENATED MODULE: ../node_modules/@nore/nql/source/utils/index.js


function isNullOrBoolean(value) {
	return value === true || value === false || value === null;
}

function toUpperCase(value) {
	return String(value).toUpperCase();
}

function getTable(query) {
	const { table } = query;

	return Object(assert["isString"])(table) ? table : Object(assert["isArray"])(table) ? table[1] : table.as;
}

function setPrefix(column, query) {
	return `"${getTable(query)}"."${column}"`;
}

// CONCATENATED MODULE: ../node_modules/@nore/nql/source/queryFields/columns.js




function fmtColumns(data, table) {
	const columns = [];

	for (const entry of data) {
		if (Object(assert["isString"])(entry)) {
			columns.push(`"${table}"."${entry}"`);
		} else {
			columns.push(`"${table}"."${entry.name}" AS "${entry.as}"`);
		}
	}

	return columns.join(", ");
}

/* harmony default export */ var queryFields_columns = ((data, query, build) => {
	const table = getTable(query);

	// string
	if (Object(assert["isString"])(data)) {
		return data === "*" ? `"${table}".*` : `"${table}"."${data}"`;
	}

	// array
	if (Object(assert["isArray"])(data)) {
		return fmtColumns(data, table);
	}

	// object
	const aliases = Object(object["keys"])(data).map(column => ({
		name: column,
		as: data[column],
	}));

	return fmtColumns(aliases, table);
});

// CONCATENATED MODULE: ../node_modules/@nore/nql/source/queryFields/groupBy.js



/* harmony default export */ var groupBy = ((data, query, build) => {
	const table = getTable(query);

	// array
	if (Object(assert["isArray"])(data)) {
		if (!data.length) return null;

		const columns = data.map(column => `"${table}"."${column}"`);

		return `GROUP BY ${columns.join(", ")}`;
	}

	return `GROUP BY "${table}"."${data}"`;
});

// CONCATENATED MODULE: ../node_modules/@nore/nql/source/queryFields/orderBy.js



/* harmony default export */ var queryFields_orderBy = ((data, query, build) => {
	// array
	if (Object(assert["isArray"])(data)) {
		if (!data.length) return null;

		return `ORDER BY ${queryFields_columns(data, query)}`;
	}

	// object
	if (Object(assert["isObject"])(data)) {
		const asc = [];
		const desc = [];
		const orderBy = [];

		for (const field in data) {
			const value = data[field];

			if (field === "$asc") {
				asc.push.apply(asc, value);
			} else if (field === "$desc") {
				desc.push.apply(desc, value);
			} else {
				(value === "desc" ? desc : asc).push(field);
			}
		}

		if (asc.length) {
			orderBy.push(`${queryFields_columns(asc, query)} ASC`);
		}

		if (desc.length) {
			orderBy.push(`${queryFields_columns(desc, query)} DESC`);
		}

		if (!orderBy.length) return null;

		return `ORDER BY ${orderBy.join(", ")}`;
	}

	// string
	return `ORDER BY ${queryFields_columns(data, query)}`;
});

// CONCATENATED MODULE: ../node_modules/@nore/nql/source/queryFields/offset.js


/* harmony default export */ var queryFields_offset = ((data, query, build) => {
	const offset = Object(assert["isString"])(data) ? parseInt(data, 10) : data;

	if (!Object(assert["isNumber"])(offset)) {
		throw Error(`Invalid field type, query.offset requires a number.`);
	}

	return [`OFFSET ?`, [offset]];
});

// CONCATENATED MODULE: ../node_modules/@nore/nql/source/queryFields/values.js



function format(entry) {
	const params = [];
	const values = [];

	for (const key in entry) {
		const value = entry[key];

		if (value === null) {
			params.push("NULL");
		} else {
			params.push("?");
			values.push(value);
		}
	}

	return [`(${params.join(", ")})`, values];
}

/* harmony default export */ var queryFields_values = ((data, query, build) => {
	data = Object(assert["isArray"])(data) ? data : [data];

	const params = [];
	const values = [];

	for (const entry of data) {
		const result = format(entry);

		params.push(result[0]);
		values.push.apply(values, result[1]);
	}

	const columns = Object(object["keys"])(data[0])
		.map(name => `"${name}"`)
		.join(", ");

	return [`(${columns}) VALUES ${params.join(", ")}`, values];
});

// CONCATENATED MODULE: ../node_modules/@nore/nql/source/queryFields/upsert.js



function getColumns(data, values) {
	const toExcluded = column => `${column}=excluded.${column}`;
	const columns = !Object(assert["isArray"])(data)
		? Object(object["keys"])(values).filter(key => key !== data)
		: data[1];

	return columns.map(toExcluded).join(", ");
}

/* harmony default export */ var queryFields_upsert = ((data, query, build) => {
	const conflict = Object(assert["isArray"])(data) ? data[0] : data;
	const columns = getColumns(data, query.values);

	return `ON CONFLICT("${conflict}") DO UPDATE SET ${columns}`;
});

// CONCATENATED MODULE: ../node_modules/@nore/nql/source/queryFields/table.js


/* harmony default export */ var queryFields_table = ((data, query, build) => {
	if (Object(assert["isString"])(data)) {
		return `"${data}"`;
	}

	if (Object(assert["isArray"])(data)) {
		return `"${data[0]}" AS "${data[1]}"`;
	}

	return `"${data.name}" AS "${data.as}"`;
});

// CONCATENATED MODULE: ../node_modules/@nore/nql/source/operators/$is.js



function $is_$is(options) {
	const { condition, parse, query, column } = options;

	// sub-query
	if (Object(assert["isObject"])(condition)) {
		return parse(options);
	}

	// null or boolean
	if (isNullOrBoolean(condition)) {
		return `${column} IS ${toUpperCase(condition)}`;
	}

	// string
	return [`${column} == ?`, [condition]];
}

// CONCATENATED MODULE: ../node_modules/@nore/nql/source/operators/$not.js




function invert(value) {
	return value.replace(/ == /g, " != ").replace(/ IS /g, " IS NOT ");
}

function invertResult(result) {
	return Object(assert["isArray"])(result) ? [invert(result[0]), result[1]] : invert(result);
}

function $not(options) {
	// sub-query
	if (Object(assert["isObject"])(options.condition)) {
		const result = $is_$is(options);

		return result ? invertResult(result) : "";
	}

	const { condition, query, column } = options;

	// null or boolean
	if (isNullOrBoolean(condition)) {
		return `${column} IS NOT ${toUpperCase(condition)}`;
	}

	// string
	return [`${column} != ?`, [condition]];
}

// EXTERNAL MODULE: ../node_modules/@nore/std/array/index.js + 6 modules
var array = __webpack_require__(3);

// CONCATENATED MODULE: ../node_modules/@nore/nql/source/operators/$or.js


function $or(args) {
	const joiner = " OR ";

	if (Object(array["isArray"])(args.condition)) {
		const result = args.condition
			.map(condition => args.parse({ ...args, condition, joiner }))
			// normalize results: [sql, values]
			.map(result => (Object(array["isArray"])(result) ? result : [result, []]));

		return [
			result.map(entry => entry[0]).join(joiner),
			Object(array["flatten"])(result.map(entry => entry[1])),
		];
	}

	return args.parse({ ...args, joiner });
}

// CONCATENATED MODULE: ../node_modules/@nore/nql/source/operators/$and.js


function $and(args) {
	const joiner = " AND ";

	if (Object(array["isArray"])(args.condition)) {
		const result = args.condition
			.map(condition => args.parse({ ...args, condition, joiner }))
			// normalize results: [sql, values]
			.map(result => (Object(array["isArray"])(result) ? result : [result, []]));

		return [
			result.map(entry => entry[0]).join(joiner),
			Object(array["flatten"])(result.map(entry => entry[1])),
		];
	}

	return args.parse({ ...args, joiner });
}

// CONCATENATED MODULE: ../node_modules/@nore/nql/source/operators/$isNull.js



function $isNull({ condition, column, joiner, query }) {
	if (Object(assert["isArray"])(condition)) {
		// ignore empty arrays
		if (!condition.length) return null;

		return condition
			.map(column => `${setPrefix(column, query)} IS NULL`)
			.join(joiner);
	}

	if (Object(assert["isBoolean"])(condition)) {
		return `${column} ${condition === false ? "IS NOT" : "IS"} NULL`;
	}

	// ignore unsuported values
	return null;
}

// CONCATENATED MODULE: ../node_modules/@nore/nql/source/operators/$lt.js



function $lt({ condition, column, joiner, query }) {
	if (Object(assert["isObject"])(condition)) {
		const conditions = [];
		const values = [];

		for (const column in condition) {
			conditions.push(`${setPrefix(column, query)} < ?`);

			values.push(condition[column]);
		}

		return [conditions.join(joiner), values];
	}

	return [`${column} < ?`, [condition]];
}

// CONCATENATED MODULE: ../node_modules/@nore/nql/source/operators/$lte.js



function $lte_$lt({ condition, column, joiner, query }) {
	if (Object(assert["isObject"])(condition)) {
		const conditions = [];
		const values = [];

		for (const column in condition) {
			conditions.push(`${setPrefix(column, query)} <= ?`);

			values.push(condition[column]);
		}

		return [conditions.join(joiner), values];
	}

	return [`${column} <= ?`, [condition]];
}

// CONCATENATED MODULE: ../node_modules/@nore/nql/source/operators/$gt.js



function $gt({ condition, column, joiner, query }) {
	if (Object(assert["isObject"])(condition)) {
		const conditions = [];
		const values = [];

		for (const column in condition) {
			conditions.push(`${setPrefix(column, query)} > ?`);

			values.push(condition[column]);
		}

		return [conditions.join(joiner), values];
	}

	return [`${column} > ?`, [condition]];
}

// CONCATENATED MODULE: ../node_modules/@nore/nql/source/operators/$gte.js



function $gte({ condition, column, joiner, query }) {
	if (Object(assert["isObject"])(condition)) {
		const conditions = [];
		const values = [];

		for (const column in condition) {
			conditions.push(`${setPrefix(column, query)} >= ?`);

			values.push(condition[column]);
		}

		return [conditions.join(joiner), values];
	}

	return [`${column} >= ?`, [condition]];
}

// CONCATENATED MODULE: ../node_modules/@nore/nql/source/operators/$in.js



function $in({ condition, column, joiner, query, build }) {
	// array
	if (Object(assert["isArray"])(condition)) {
		// ignore empty arrays
		if (!condition.length) return null;

		const values = condition.filter(Boolean);
		const special = condition.filter(isNullOrBoolean);
		const conditions = [];

		if (values.length) {
			conditions.push(`${column} IN (${values.map(i => "?").join(", ")})`);
		}

		if (special.length) {
			conditions.push(...special.map(v => `${column} IS ${toUpperCase(v)}`));
		}

		return [conditions.join(" OR "), values];
	}

	// sub-query
	if (Object(assert["isObject"])(condition)) {
		const [sql, values] = build(condition);

		return [`${column} IN (${sql})`, values];
	}

	// ignore unsuported values
	return null;
}

// CONCATENATED MODULE: ../node_modules/@nore/nql/source/operators/$notIn.js



function $notIn({ condition, column, joiner, query, build }) {
	// array
	if (Object(assert["isArray"])(condition)) {
		// ignore empty arrays
		if (!condition.length) return null;

		const values = condition.filter(Boolean);
		const nullOrBool = condition.filter(isNullOrBoolean);
		const conditions = [];

		if (values.length) {
			conditions.push(`${column} NOT IN (${values.map(i => "?").join(", ")})`);
		}

		if (nullOrBool.length) {
			const fmtCondition = value => `${column} IS NOT ${toUpperCase(value)}`;

			conditions.push.apply(conditions, nullOrBool.map(fmtCondition));
		}

		return [conditions.join(" OR "), values];
	}

	// sub-query
	if (Object(assert["isObject"])(condition)) {
		const [sql, values] = build(condition);

		return [`${column} NOT IN (${sql})`, values];
	}

	// ignore unsuported values
	return null;
}

// CONCATENATED MODULE: ../node_modules/@nore/nql/source/operators/$match.js



function $match({ condition, column, joiner, query }) {
	if (Object(assert["isObject"])(condition)) {
		const conditions = [];
		const values = [];

		for (const column in condition) {
			conditions.push(`${setPrefix(column, query)} GLOB ?`);

			values.push(condition[column]);
		}

		return [conditions.join(joiner), values];
	}

	return [`${column} GLOB ?`, [condition]];
}

// CONCATENATED MODULE: ../node_modules/@nore/nql/source/operators/$like.js



function $like({ condition, column, joiner, query }) {
	if (Object(assert["isString"])(condition)) {
		return [`${column} LIKE ?`, [condition]];
	}

	if (Object(assert["isObject"])(condition)) {
		const conditions = [];
		const values = [];

		for (const column in condition) {
			conditions.push(`${setPrefix(column, query)} LIKE ?`);

			values.push(condition[column]);
		}

		return [conditions.join(joiner), values];
	}

	// ignore unsuported values
	return null;
}

// CONCATENATED MODULE: ../node_modules/@nore/nql/source/operators/$notLike.js



function $notLike_$like({ condition, column, joiner, query }) {
	if (Object(assert["isString"])(condition)) {
		return [`${column} NOT LIKE ?`, [condition]];
	}

	if (Object(assert["isObject"])(condition)) {
		const conditions = [];
		const values = [];

		for (const column in condition) {
			conditions.push(`${setPrefix(column, query)} NOT LIKE ?`);

			values.push(condition[column]);
		}

		return [conditions.join(joiner), values];
	}

	// ignore unsuported values
	return null;
}

// CONCATENATED MODULE: ../node_modules/@nore/nql/source/operators/$sql.js


function $sql({ condition, column, joiner, query }) {
	if (Object(assert["isArray"])(condition)) {
		return [condition[0], condition.slice(1)];
	}

	return condition;
}

// CONCATENATED MODULE: ../node_modules/@nore/nql/source/operators/$between.js



function $between({ condition, column, joiner, query, parse }) {
	if (Object(assert["isArray"])(condition)) {
		// ignore empty arrays
		if (!condition.length) return null;

		return [`${column} BETWEEN ? AND ?`, condition];
	}

	if (Object(assert["isObject"])(condition)) {
		const conditions = [];
		const values = [];

		for (const column in condition) {
			conditions.push(`${setPrefix(column, query)} BETWEEN ? AND ?`);

			values.push.apply(values, condition[column]);
		}

		return [conditions.join(joiner), values];
	}

	// ignore unsuported values
	return null;
}

// CONCATENATED MODULE: ../node_modules/@nore/nql/source/operators/index.js


















const operators = new QueryFieldsMap();

operators.add("$is", $is_$is);
operators.add("$eq", $is_$is);
operators.add("$equal", $is_$is);

operators.add("$not", $not);
operators.add("$neq", $not);
operators.add("$notEqual", $not);

operators.add("$null", $isNull);
operators.add("$isNull", $isNull);

operators.add("$or", $or);
operators.add("$and", $and);

operators.add("$lt", $lt);
operators.add("$lte", $lte_$lt);
operators.add("$gt", $gt);
operators.add("$gte", $gte);

operators.add("$in", $in);
operators.add("$nin", $notIn);
operators.add("$notIn", $notIn);
operators.add("$between", $between);

operators.add("$like", $like);
operators.add("$notLike", $notLike_$like);
operators.add("$nlike", $notLike_$like);
operators.add("$match", $match);
operators.add("$glob", $match);

operators.add("$sql", $sql);

/* harmony default export */ var source_operators = (operators);

// CONCATENATED MODULE: ../node_modules/@nore/nql/source/queryFields/where.js





function where_parse(args) {
	// $is is used as default operator
	const $is = source_operators.get("$is");

	const conditions = [];
	const values = [];

	for (const field in args.condition) {
		const operator = source_operators.get(field) || $is;
		const options = { ...args, condition: args.condition[field] };

		// if no operator, we treat it like a column name
		if (!source_operators.has(field)) {
			// quote and prefix column with target table
			options.column = setPrefix(field, args.query);
		}

		const result = operator(options);

		// ignore operator on null
		if (result === null) continue;

		if (Object(assert["isArray"])(result)) {
			conditions.push(result[0]);
			values.push.apply(values, result[1] || []);
		} else {
			conditions.push(result);
		}
	}

	return [conditions.join(args.joiner), values];
}

/* harmony default export */ var where = ((data, query, build) => {
	if (!Object(assert["isObject"])(data)) {
		throw Error(`Invalid field type, query.where requires an object.`);
	}

	const [sql, values] = where_parse({
		// build and parse functions will be passed to operators
		build,
		parse: where_parse,
		// original query passed to build
		query,
		// the object passed to where
		condition: data,
		// the property name of the parent object, if any
		column: null,
		// the logical operator used to join conditions
		joiner: " AND ",
	});

	return !sql ? null : [`WHERE ${sql}`, values];
});

// CONCATENATED MODULE: ../node_modules/@nore/nql/source/queryFields/limit.js


/* harmony default export */ var queryFields_limit = ((data, query, build) => {
	const limit = Object(assert["isString"])(data) ? parseInt(data, 10) : data;

	if (!Object(assert["isNumber"])(limit)) {
		throw Error(`Invalid field type, query.limit requires a number.`);
	}

	return [`LIMIT ?`, [limit]];
});

// CONCATENATED MODULE: ../node_modules/@nore/nql/source/queryFields/count.js



function fmtColumn(data, table) {
	return data === "*" ? "*" : `"${table}"."${data}"`;
}

function fmtCount(data, table) {
	if (Object(assert["isString"])(data)) {
		return `COUNT(${fmtColumn(data, table)})`;
	}

	const distinct = data.distinct ? `DISTINCT ` : "";
	const alias = data.as ? ` AS "${data.as}"` : "";
	const column = fmtColumn(data.column, table);

	return `COUNT(${distinct}${column})${alias}`;
}

/* harmony default export */ var count = ((data, query, build) => {
	const table = getTable(query);
	const prefix = query.columns ? ", " : "";

	// string
	if (Object(assert["isString"])(data)) {
		return `${prefix}${fmtCount(data, table)}`;
	}

	// array
	if (Object(assert["isArray"])(data)) {
		// ignore an empty array
		if (!data.length) return null;

		const counts = data.map(item => fmtCount(item, table));

		return `${prefix}${counts.join(", ")}`;
	}

	// object
	return `${prefix}${fmtCount(data, table)}`;
});

// CONCATENATED MODULE: ../node_modules/@nore/nql/source/queryFields/join.js





function toCondition(from, to, conditions) {
	const columns = [];

	for (const column in conditions) {
		columns.push(`"${from}"."${column}" = "${to}"."${conditions[column]}"`);
	}

	return columns.join(", ");
}

function fmtJoin(data, query, result) {
	const table = getTable(query);
	const joinedTable = getTable(data);
	const type = data.type ? data.type.toUpperCase() : "INNER";
	const condition = toCondition(table, joinedTable, data.on);

	if (data.columns) {
		result.columns += `, ${queryFields_columns(data.columns, data)}`;
	}

	return `${type} JOIN ${queryFields_table(data.table)} ON ${condition}`;
}

/* harmony default export */ var join = ((data, query, build, result) => {
	const toJoin = Object(assert["isArray"])(data) ? data : [data];

	return toJoin.map(data => fmtJoin(data, query, result)).join(" ");
});

// CONCATENATED MODULE: ../node_modules/@nore/nql/source/queryFields/set.js


/* harmony default export */ var set = ((data, query, build) => {
	if (!Object(assert["isObject"])(data)) {
		throw Error(`Invalid field type, query.set requires an object.`);
	}

	const updates = [];
	const values = [];

	for (const key in data) {
		const isNull = data[key] === null;
		const sql = `"${key}" = ${isNull ? "NULL" : "?"}`;

		updates.push(sql);

		if (!isNull) values.push(data[key]);
	}

	if (!updates.length) {
		throw Error(`Invalid field data, query.set received an empty object.`);
	}

	return [`SET ${updates.join(", ")}`, values];
});

// CONCATENATED MODULE: ../node_modules/@nore/nql/source/queryFields/index.js


















const queryFields = new QueryFieldsMap();

queryFields.add("definitions", queryFields_definitions);
queryFields.add("ifNotExists", ifNotExists);
queryFields.add("distinct", queryFields_distinct);
queryFields.add("columns", queryFields_columns);
queryFields.add("groupBy", groupBy);
queryFields.add("orderBy", queryFields_orderBy);
queryFields.add("offset", queryFields_offset);
queryFields.add("values", queryFields_values);
queryFields.add("upsert", queryFields_upsert);
queryFields.add("table", queryFields_table);
queryFields.add("where", where);
queryFields.add("limit", queryFields_limit);
queryFields.add("count", count);
queryFields.add("join", join);
queryFields.add("set", set);

/* harmony default export */ var source_queryFields = (queryFields);

// CONCATENATED MODULE: ../node_modules/@nore/nql/source/utils/TypesMap.js
const REGEX_SPACES = /\s\s+/g;

class QueryTypesMap extends Map {
	add(type, template) {
		const tmpl = template
			.trim()
			.replace(REGEX_SPACES, " ")
			.split(" ")
			.map(v => (v[0] === "{" ? v.slice(1, -1) : v));

		this.set(type, tmpl);
	}
}

// CONCATENATED MODULE: ../node_modules/@nore/nql/source/queryTypes/createTable.js
/* harmony default export */ var createTable = (`
	CREATE TABLE {ifNotExists} {table} {definitions}
`);

// CONCATENATED MODULE: ../node_modules/@nore/nql/source/queryTypes/insert.js
/* harmony default export */ var insert = (`
	INSERT INTO {table}
	{values}
	{upsert}
`);

// CONCATENATED MODULE: ../node_modules/@nore/nql/source/queryTypes/select.js
/* harmony default export */ var queryTypes_select = (`
	SELECT {distinct} {columns} {count}
	FROM {table} {join}
	{where}
	{groupBy} {orderBy} {limit} {offset}
`);

// CONCATENATED MODULE: ../node_modules/@nore/nql/source/queryTypes/update.js
/* harmony default export */ var update = (`
	UPDATE {table} {set} {where}
`);

// CONCATENATED MODULE: ../node_modules/@nore/nql/source/queryTypes/delete.js
/* harmony default export */ var queryTypes_delete = (`
	DELETE FROM {table} {where}
`);

// CONCATENATED MODULE: ../node_modules/@nore/nql/source/queryTypes/index.js







const queryTypes = new QueryTypesMap();

queryTypes.add("create table", createTable);
queryTypes.add("insert", insert);
queryTypes.add("select", queryTypes_select);
queryTypes.add("update", update);
queryTypes.add("delete", queryTypes_delete);

/* harmony default export */ var source_queryTypes = (queryTypes);

// CONCATENATED MODULE: ../node_modules/@nore/nql/source/build.js




function build_build(query = {}) {
	if (!source_queryTypes.has(query.type)) {
		throw Error(`Invalid query type: ${query.type}`);
	}

	const segments = [];
	const fields = {};
	const values = [];

	for (const field of source_queryTypes.get(query.type)) {
		if (source_queryFields.has(field)) {
			// ignore unset fields
			if (query[field] === undefined) continue;

			const handler = source_queryFields.get(field);
			const result = handler(query[field], query, build_build, fields);

			// ignore field if it returns null
			if (result === null) continue;

			if (Object(assert["isArray"])(result)) {
				values.push.apply(values, result[1]);

				fields[field] = result[0];
			} else {
				fields[field] = result;
			}
		}

		segments.push(field);
	}

	const sql = segments.map(segment => fields[segment] || segment).join(" ");

	return [sql, values];
}

// CONCATENATED MODULE: ../node_modules/@nore/nql/source/index.js







/* harmony default export */ var source = (build_build);

// CONCATENATED MODULE: ../node_modules/@nore/sqlite/source/utils/timestamp.js
// ensure that we have 2 places for each of the date segments.
function timestamp_format(n, segment) {
	return segment.toString().padStart(n, "0");
}

// format: yyyymmddhhmmssmmm
function timestamp(now = new Date()) {
	const year = now.getFullYear().toString();
	const month = timestamp_format(2, now.getMonth() + 1);
	const date = timestamp_format(2, now.getDate());
	const hours = timestamp_format(2, now.getHours());
	const minutes = timestamp_format(2, now.getMinutes());
	const seconds = timestamp_format(2, now.getSeconds());
	const milliseconds = timestamp_format(3, now.getMilliseconds());

	return year + month + date + hours + minutes + seconds + milliseconds;
}

// EXTERNAL MODULE: external "xql"
var external_xql_ = __webpack_require__(11);
var external_xql_default = /*#__PURE__*/__webpack_require__.n(external_xql_);

// CONCATENATED MODULE: ../node_modules/@nore/sqlite/source/utils/xql.js


const ctx = external_xql_default.a.dialect.newContext({ dialect: "sqlite" });

external_xql_default.a.node.QueryStatement.prototype.toSQL = function toSQL() {
	return this.compileStatement(ctx);
};

/* harmony default export */ var xql = (external_xql_default.a);

// EXTERNAL MODULE: external "better-sqlite3"
var external_better_sqlite3_ = __webpack_require__(30);
var external_better_sqlite3_default = /*#__PURE__*/__webpack_require__.n(external_better_sqlite3_);

// EXTERNAL MODULE: ../node_modules/@nore/std/path/index.js + 2 modules
var path = __webpack_require__(5);

// CONCATENATED MODULE: ../node_modules/@nore/sqlite/source/SQLite.js




// https://github.com/JoshuaWise/better-sqlite3/wiki/API
class SQLite_SQLite {
	constructor(options = {}) {
		const { file, inMemory, isReadOnly, throwOnMissingFile } = options;

		if (!Object(assert["isString"])(file)) {
			throw Error(`Missing path to Connection database file.`);
		}

		if (!Object(path["isAbsolute"])(file)) {
			throw Error(`The database file path must be an absolute path.`);
		}

		this.connection = new external_better_sqlite3_default.a(file, {
			fileMustExist: throwOnMissingFile || false,
			readonly: isReadOnly || false,
			memory: inMemory || false,
		});

		// use WAL journaling mode by default
		if (options.useWAL !== false) {
			this.pragma("journal_mode = WAL");
		}

		// enable "FOREIGN KEY" support
		this.pragma("foreign_keys = ON");
	}

	async runRaw(sql) {
		return this.connection.exec(sql);
	}

	async run(sql, values = []) {
		return this.connection.prepare(sql).run(values);
	}

	async get(sql, values = []) {
		return this.connection.prepare(sql).get(values);
	}

	async all(sql, values = []) {
		return this.connection.prepare(sql).all(values);
	}

	async pragma(sql) {
		return this.connection.pragma(sql);
	}

	iterate(sql, values = []) {
		return this.connection.prepare(sql).iterate(values);
	}

	prepare(sql) {
		return this.connection.prepare(sql);
	}

	transaction(handler) {
		return this.connection.transaction(handler);
	}
}

// CONCATENATED MODULE: ../node_modules/@nore/sqlite/source/utils/applyHooks.js
/* harmony default export */ var applyHooks = (async (hooks, records) => {
	// no hooks to run
	if (hooks.length === 0) return;

	// record is null
	if (!records) return;

	const isArray = Array.isArray(records);

	// records is an empty array
	if (isArray && !records.length) return;

	// records is an object, transform it to an array
	if (!isArray) records = [records];

	// apply hook handlers
	for (const handler of hooks) {
		await handler(records);
	}
});

// CONCATENATED MODULE: ../node_modules/@nore/sqlite/source/utils/addIDsToRecords.js


function addIDsToRecords(data, getID) {
	data = Object(assert["isArray"])(data) ? data : [data];

	for (const record of data) {
		if (!record.id) {
			record.id = getID();
		}
	}
}

// CONCATENATED MODULE: ../node_modules/@nore/sqlite/source/Indexes.js


const types = {
	c: "index",
	u: "unique",
	pk: "primary_key",
};

class Indexes_Indexes {
	constructor(table) {
		this.table = table;
		this.db = table.db;
	}

	async add(name, columns) {
		columns = !columns ? [name] : Object(array["isArray"])(columns) ? columns : [columns];
		columns = columns.map(name => `"${name}"`).join(", ");

		await this.db.run(
			`CREATE INDEX "${name}" ON ${this.table.name} (${columns})`
		);
	}

	async getInfo(name) {
		return await this.db.pragma(`index_info(${name})`);
	}

	async all() {
		const indexes = await this.db.pragma(`index_list(${this.table.name})`);
		const tasks = indexes.map(entry => this.getInfo(entry.name));
		const infos = await Promise.all(tasks);

		const result = infos.map((list, n) =>
			list.map(index => ({
				type: types[indexes[n].origin],
				name: indexes[n].name,
				column: index.name,
			}))
		);

		return Object(array["flatten"])(result);
	}

	async get(name) {
		return await this.all().then(indexes =>
			indexes.filter(e => e.name === name)
		);
	}

	async getByColumn(column) {
		return await this.all().then(indexes =>
			indexes.filter(e => e.column === column)
		);
	}

	async remove(name) {
		return await this.db.run(`DROP INDEX "${name}"`);
	}

	async removeByColumn(column) {
		const indexes = await this.getByColumn(column);

		const tasks = indexes
			.filter(index => index.type === "index")
			.map(index => this.remove(index.name));

		return await Promise.all(tasks);
	}
}

// CONCATENATED MODULE: ../node_modules/@nore/sqlite/source/utils/metaToDefs.js
function metaToDefs(meta) {
	return {
		name: meta.name,
		type: meta.type.toLowerCase(),
		default: meta.dflt_value,
		isNullable: !Boolean(meta.notnull),
		isPrimaryKey: Boolean(meta.pk),
		// TODO: how to properly get the uniqueness of a column?
		isUnique: Boolean(meta.pk),
	};
}

// CONCATENATED MODULE: ../node_modules/@nore/sqlite/source/utils/parseCreateTableSQL.js
const DELIMITER = "⌇";
const FOREIGN_KEY = "FOREIGN KEY";
const REGEX_COMMAS = /(?<=^([^']|'[^']*')*),\s/g;
const REGEX_DEFINITIONS = /\((.+)\)$/;

function parseCreateTableSQL(sql) {
	const [_, match] = sql.match(REGEX_DEFINITIONS);
	const definitions = match.replace(REGEX_COMMAS, DELIMITER).split(DELIMITER);

	const columns = definitions.filter(def => def.indexOf(FOREIGN_KEY) !== 0);
	const foreignKeys = definitions.filter(def => def.indexOf(FOREIGN_KEY) === 0);

	return { columns, foreignKeys };
}

// CONCATENATED MODULE: ../node_modules/@nore/sqlite/source/utils/alterColumn.js



const REGEX_COLUMN = /^(["']?[\w_-]+["']?) /;

function toSQLDefinitions({ columns, foreignKeys }) {
	let sql = columns.join(", ");

	if (foreignKeys.length) {
		sql += `, ${foreignKeys.join(", ")}`;
	}

	return sql;
}

function getColumnsName(columns) {
	return columns.map(definition => definition.match(REGEX_COLUMN)[1]);
}

function updateTransform(column, createTableSQL) {
	let { columns, foreignKeys } = parseCreateTableSQL(createTableSQL);
	let quotedName = `"${column.name}"`;

	// set the updated definition
	columns = columns.map(def =>
		def.indexOf(quotedName) === 0 ? definitions_namespaceObject.toDefinition(column) : def
	);

	// add or remove from FOREIGN KEY constraint
	const isNameInForeignKey = e => e.indexOf(quotedName) === 13;
	const isInKeys = foreignKeys.filter(isNameInForeignKey).length;

	if (column.foreignKey && !isInKeys) {
		foreignKeys.push(definitions_namespaceObject.toForeignKeys([column]));
	} else if (!column.foreignKey && isInKeys) {
		foreignKeys = foreignKeys.filter(e => !isNameInForeignKey(e));
	}

	return { columns, foreignKeys };
}

function removeTransform(column, createTableSQL) {
	let { columns, foreignKeys } = parseCreateTableSQL(createTableSQL);

	// match the index of the column name in: `FOREIGN KEY "column" ...`
	foreignKeys = foreignKeys.filter(e => e.indexOf(column) !== 13);

	// the column names are quoted so the index will be 1 to skip the quote
	columns = columns.filter(e => e.indexOf(column) !== 1);

	return { columns, foreignKeys };
}

const transformers = {
	update: updateTransform,
	remove: removeTransform,
};

// procedure from: https://www.sqlite.org/lang_altertable.html
async function transaction(table, action, column) {
	await table.db.pragma("foreign_keys = OFF");

	const sqliteTableInfo = await table.db.all(
		`SELECT type, sql FROM sqlite_master WHERE tbl_name == '${table.name}'`
	);

	const transform = transformers[action];
	const defs = transform(column, sqliteTableInfo[0].sql);
	const sqlDefs = toSQLDefinitions(defs);
	const columns = getColumnsName(defs.columns).join(", ");

	// create a new table with the updated column definitions
	await table.db.run(`CREATE TABLE "${table.name}__tmp" (${sqlDefs})`);

	// copy data from the old table to the new one
	await table.db.run(
		`INSERT INTO "${table.name}__tmp" SELECT ${columns} FROM "${table.name}"`
	);

	// remove the old table
	await table.db.run(`DROP TABLE ${table.name}`);

	// rename the new table as the old one
	await table.db.run(
		`ALTER TABLE "${table.name}__tmp" RENAME TO ${table.name}`
	);

	await table.db.pragma("foreign_keys = ON");

	// TODO: use meta to CREATE INDEX and CREATE TRIGGER
}

async function alterColumn(table, type, column) {
	return table.db.transaction(transaction)(table, type, column);
}

// CONCATENATED MODULE: ../node_modules/@nore/sqlite/source/Columns.js





class Columns_Columns {
	constructor(table) {
		this.table = table;
		this.db = table.db;
	}

	async has(name) {
		const columns = await this.all();
		const filtered = columns.filter(e => e.name === name);

		return filtered.length > 0;
	}

	async add(definition) {
		const defs = definitions_namespaceObject.toSQL([definition]);

		return await this.db.run(
			`ALTER TABLE ${this.table.name} ADD COLUMN ${defs}`
		);
	}

	async all(options = {}) {
		if (options.isUnique) {
			const indexes = await this.table.indexes.all();
			const uniques = indexes.filter(e => e.type === "unique");

			return uniques.map(e => e.column);
		}

		return await this.db.pragma(`table_info(${this.table.name})`);
	}

	async get(name) {
		const columns = await this.all();
		const uniques = await this.all({ isUnique: true });
		const meta = columns.filter(c => c.name === name);
		const column = metaToDefs(meta[0]);

		if (uniques.includes(column.name)) {
			column.isUnique = true;
		}

		return column;
	}

	async update(definition) {
		return await alterColumn(this.table, "update", definition);
	}

	async rename(from, to) {
		return await this.db.run(
			`ALTER TABLE ${this.table.name} RENAME COLUMN ${from} TO ${to}`
		);
	}

	async remove(name) {
		return await alterColumn(this.table, "remove", name);
	}
}

// CONCATENATED MODULE: ../node_modules/@nore/sqlite/source/Table.js








class Table_Table {
	constructor({ db, name }) {
		this.db = db;
		this.tableName = name;

		// set after table.drop() to flag it as  dropped
		this.wasRemoved = false;

		this.indexes = new Indexes_Indexes(this);
		this.columns = new Columns_Columns(this);

		this.hooks = {
			before: [],
			after: [],
		};

		this.settings = {
			limit: undefined,
			columns: "*",
			upsert: "id",
			getID: external_cuid_default.a,
		};
	}

	get name() {
		if (this.wasRemoved) {
			throw Error(`Table ${this.tableName} was deleted.`);
		}

		return this.tableName;
	}

	hook(type, handler) {
		if (!this.hooks[type]) {
			throw Error(`Invalid hook "${type}" set for table "${this.tableName}"`);
		}

		this.hooks[type].push(handler);
	}

	async create(definitions, options = {}) {
		const [sql, values] = source({
			definitions,
			type: "create table",
			table: this.tableName,
			ifNotExists: options.ifNotExists,
		});

		this.wasRemoved = false;

		return await this.db.run(sql, values);
	}

	async drop() {
		// added "IF EXISTS" to prevent SqliteError: no such table
		await this.db.run(`DROP TABLE IF EXISTS ${this.name}`);

		return (this.wasRemoved = true);
	}

	async rename(name) {
		const sql = `ALTER TABLE ${this.name} RENAME TO ${name}`;
		this.tableName = name;

		return await this.db.run(sql);
	}

	async count(target = "*") {
		const [sql] = source({
			type: "select",
			table: this.name,
			count: target,
		});

		return await this.db.get(sql).then(result => Object(object["first"])(result));
	}

	async insert(data) {
		// apply before hooks
		await applyHooks(this.hooks["before"], data);

		// by default add IDs to records
		addIDsToRecords(data, this.settings.getID);

		const [sql, values] = source({
			type: "insert",
			table: this.name,
			values: data,
		});

		return await this.db.run(sql, values);
	}

	async upsert(data, upsert) {
		// apply before hooks
		await applyHooks(this.hooks["before"], data);

		const [sql, values] = source({
			type: "insert",
			table: this.name,
			values: data,
			upsert: upsert || this.settings.upsert,
		});

		return await this.db.run(sql, values);
	}

	async find(query, filters = {}) {
		const [sql, values] = source({
			type: "select",
			table: this.name,
			where: query,
			columns: filters.columns || this.settings.columns,
			orderBy: filters.orderBy,
			groupBy: filters.groupBy,
			offset: filters.offset,
			limit: filters.limit || this.settings.limit,
			distinct: filters.distinct,
		});

		const records = await this.db.all(sql, values);

		// apply after hooks
		await applyHooks(this.hooks["after"], records);

		return records;
	}

	async findOne(query, filters = {}) {
		const [sql, values] = source({
			type: "select",
			table: this.name,
			where: query,
			columns: filters.columns || this.settings.columns,
		});

		const record = await this.db.get(sql, values);

		// apply after hooks
		await applyHooks(this.hooks["after"], record);

		return record;
	}

	async update(query, data) {
		// apply before hooks
		await applyHooks(this.hooks["before"], data);

		const [sql, values] = source({
			type: "update",
			table: this.name,
			set: data,
			where: query,
		});

		return await this.db.run(sql, values);
	}

	async remove(query) {
		const [sql, values] = source({
			type: "delete",
			table: this.name,
			where: query,
		});

		return await this.db.run(sql, values);
	}
}

// CONCATENATED MODULE: ../node_modules/@nore/sqlite/source/Database.js



class Database_Database {
	constructor(options = {}) {
		this.sqlite = new SQLite_SQLite(options);
		this.file = options.file;
	}

	async run(sql) {
		return this.sqlite.runRaw(sql);
	}

	async list() {
		const sql = `SELECT name FROM sqlite_master WHERE type == 'table'`;

		return this.sqlite.all(sql).then(result => result.map(e => e.name));
	}

	async has(table) {
		const tables = await this.list();

		return tables.includes(table);
	}

	async create(table, definitions) {
		return await this.table(table).create(definitions);
	}

	async rename(table, newName) {
		return await this.table(table).rename(newName);
	}

	async drop(table) {
		return await this.table(table).drop();
	}

	async pragma(sql) {
		return this.sqlite.connection.pragma(sql);
	}

	table(name) {
		return new Table_Table({ name, db: this.sqlite });
	}

	iterate(sql, values = []) {
		return this.sqlite.connection.prepare(sql).iterate(values);
	}

	prepare(sql) {
		return this.sqlite.connection.prepare(sql);
	}

	transaction(handler) {
		return this.sqlite.connection.transaction(handler);
	}
}

// EXTERNAL MODULE: ../node_modules/@nore/std/fs/index.js + 17 modules
var fs = __webpack_require__(14);

// CONCATENATED MODULE: ../node_modules/@nore/sqlite/source/Migrations.js



class Migrations_Migrations {
	constructor({ path, db, tableName }) {
		this.db = db;
		this.path = path;
		this.tableName = tableName || "migrations";
		this.table = db.table(this.tableName);
	}

	async initialize() {
		if (!this.path) {
			throw new Error("Missing migrations directory path.");
		}

		if (await this.db.has(this.tableName)) return;

		await this.db.run(`
			CREATE TABLE ${this.tableName} (
				id TEXT PRIMARY KEY NOT NULL,
				file TEXT NOT NULL,
				date TEXT NOT NULL
			);

			INSERT INTO ${this.tableName} (id, file, date) VALUES ("settings", "", "");
		`);
	}

	async migrate(fileName) {
		const files = await Object(fs["readDirectory"])(this.path);
		const lastFileRan = await this.getLastRanMigration();

		let lastRunMigration = null;
		let error = null;

		// a target migration file, useful for rollback
		if (fileName) {
			const target = Object(path["join"])(this.path, fileName);
			const targetIndex = files.indexOf(target);
			const lastIndex = files.indexOf(lastFileRan);

			// migrate or rollback to specific file
			const method = lastIndex > targetIndex ? "down" : "up";

			const migrations =
				lastIndex > targetIndex
					? files.slice(targetIndex + 1).reverse()
					: files.slice(lastIndex + 1, targetIndex + 1);

			const result = await this.runMigrations(migrations, method);

			lastRunMigration = result.error ? result.file : target;
			error = result.error;
		} else {
			const index = files.indexOf(lastFileRan);
			const migrations = files.slice(index === -1 ? 0 : index + 1);
			const result = await this.runMigrations(migrations, "up");

			lastRunMigration = result.file;
			error = result.error;
		}

		if (lastRunMigration) {
			await this.setLastRanMigration(lastRunMigration);
		}

		if (error) {
			throw error;
		}
	}

	async runMigrations(files, method) {
		for (let i = 0; i < files.length; ++i) {
			try {
				await this.runMigration(files[i], method);
			} catch (error) {
				// return previous file when an error occurs
				return { error, file: files[i - 1] };
			}
		}

		return {
			error: null,
			file: files[files.length - 1],
		};
	}

	async runMigration(file, method) {
		const migration = await this.loadMigration(file);
		const procedure = migration[method];
		const type = typeof procedure;

		// migration is a raw SQL string
		if (type === "string") {
			await this.db.run(procedure);
		}

		// migration is a function, so we pass the db instance
		if (type === "function") {
			await procedure({ db: this.db });
		}
	}

	async loadMigration(file) {
		return __webpack_require__(116)(file);
	}

	async getLastRanMigration() {
		const lastRun = await this.table.findOne({ id: "settings" });

		if (lastRun && lastRun.file) {
			return Object(path["join"])(this.path, lastRun.file);
		}

		return null;
	}

	async setLastRanMigration(file) {
		const update = {
			file: file.substring(file.lastIndexOf("/") + 1),
			date: String(new Date()),
		};

		await this.table.update({ id: "settings" }, update);
	}
}

// CONCATENATED MODULE: ../node_modules/@nore/sqlite/source/index.js
/* concated harmony reexport SQLite */__webpack_require__.d(__webpack_exports__, "SQLite", function() { return SQLite_SQLite; });
/* concated harmony reexport Database */__webpack_require__.d(__webpack_exports__, "Database", function() { return Database_Database; });
/* concated harmony reexport Migrations */__webpack_require__.d(__webpack_exports__, "Migrations", function() { return Migrations_Migrations; });
/* concated harmony reexport Table */__webpack_require__.d(__webpack_exports__, "Table", function() { return Table_Table; });
/* concated harmony reexport nql */__webpack_require__.d(__webpack_exports__, "nql", function() { return source_namespaceObject; });
/* concated harmony reexport xql */__webpack_require__.d(__webpack_exports__, "xql", function() { return xql; });
/* concated harmony reexport timestamp */__webpack_require__.d(__webpack_exports__, "timestamp", function() { return timestamp; });
/* concated harmony reexport uid */__webpack_require__.d(__webpack_exports__, "uid", function() { return external_cuid_default.a; });











/* harmony default export */ var sqlite_source = __webpack_exports__["default"] = (Database_Database);


/***/ })
/******/ ]);