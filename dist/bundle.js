/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ex10/index.ts":
/*!***************************!*\
  !*** ./src/ex10/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\n// index.ts\nvar math = __webpack_require__(/*! ./math.ts */ \"./src/ex10/math.ts\"); // Charger math.js avec require\n//const result = math.add(2, 3); // Utiliser la fonction add\n// Mettre à jour le contenu d'un élément HTML avec le résultat\n//(document.getElementById('result') as HTMLDivElement).innerText = `2 + 3 = ${result}`;\n// Fonction pour appeler add avec deux paramètres et afficher le résultat\nfunction addAndDisplay(x, y) {\n    var result = math.add(x, y);\n    var resultElement = document.getElementById('resultex10');\n    if (resultElement) {\n        resultElement.innerText = \"\".concat(x, \" + \").concat(y, \" = \").concat(result);\n    }\n}\nwindow.addAndDisplay = addAndDisplay;\n\n\n//# sourceURL=webpack://mon-projet/./src/ex10/index.ts?");

/***/ }),

/***/ "./src/ex10/math.ts":
/*!**************************!*\
  !*** ./src/ex10/math.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.add = void 0;\n// math.ts\nfunction add(x, y) {\n    return x + y;\n}\nexports.add = add;\n\n\n//# sourceURL=webpack://mon-projet/./src/ex10/math.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ex10/index.ts");
/******/ 	
/******/ })()
;