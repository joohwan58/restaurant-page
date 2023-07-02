/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   footer: () => (/* binding */ footer)
/* harmony export */ });
const footer = document.createElement('div');
footer.classList.add('footer');

const text = document.createElement('p');
text.classList.add('footer-text');
text.textContent = 'See the code at Github';
footer.appendChild(text);

const link = document.createElement('a');
link.href = "https://github.com/joohwan58/restaurant-page";
link.target = "_blank";
const icon = document.createElement('img');
icon.src = "./images/github-142-svgrepo-com.svg";
icon.alt = "github";
icon.classList.add("github-icon");
link.appendChild(icon);

footer.appendChild(link);



/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   header: () => (/* binding */ header)
/* harmony export */ });
const header = document.createElement('header');

const logoContainer = document.createElement('div');
logoContainer.classList.add('logo-container');

const logo = document.createElement('img');
logo.src = "./images/mcdonalds-svgrepo-com.png";
logo.classList.add('logo');
logo.alt = "logo";

logoContainer.appendChild(logo);

const title = document.createElement('h1');
title.classList.add("title");
title.textContent = "Wcmonalds";

logoContainer.appendChild(title);

header.appendChild(logoContainer);

const nav = document.createElement('nav');
const homeButton = document.createElement('button');
homeButton.classList.add('nav-button', 'home');
homeButton.textContent = "Home";
const menuButton = document.createElement('button');
menuButton.classList.add('nav-button', 'menu');
menuButton.textContent = "Menu";
const contactButton = document.createElement('button');
contactButton.classList.add('nav-button', 'contact');
contactButton.textContent = "Contact";
nav.appendChild(homeButton);
nav.appendChild(menuButton);
nav.appendChild(contactButton);

header.appendChild(nav);



/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   homepage: () => (/* binding */ homepage)
/* harmony export */ });
const homepage = document.createElement('div');
homepage.classList.add('homepage');

const line1 = document.createElement('p');
line1.textContent = 'The fake fast food chain you know and love';

const line2 = document.createElement('p');
line2.textContent = 'Flipping patties since 1955';

/* <img class="intro-image" src="./images/title-page-image.jpg" alt="Employee"></img> */
const image = document.createElement('img');
image.classList.add('intro-image');
image.src = "./images/title-page-image.jpg";
image.alt = "Employee";

const line3 = document.createElement('p');
line3.textContent = 'Order online or Visit us!';

homepage.appendChild(line1);
homepage.appendChild(line2);
homepage.appendChild(image);
homepage.appendChild(line3);



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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.js */ "./src/footer.js");
/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage.js */ "./src/homepage.js");




const body = document.querySelector('body');
body.appendChild(_header_js__WEBPACK_IMPORTED_MODULE_0__.header);

const mainContent = document.createElement('div');
mainContent.classList.add('main-content');
mainContent.appendChild(_homepage_js__WEBPACK_IMPORTED_MODULE_2__.homepage);

body.appendChild(mainContent);

body.appendChild(_footer_js__WEBPACK_IMPORTED_MODULE_1__.footer);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDckJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05xQztBQUNBO0FBQ0k7O0FBRXpDO0FBQ0EsaUJBQWlCLDhDQUFNOztBQUV2QjtBQUNBO0FBQ0Esd0JBQXdCLGtEQUFROztBQUVoQzs7QUFFQSxpQkFBaUIsOENBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcblxuY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbnRleHQuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLXRleHQnKTtcbnRleHQudGV4dENvbnRlbnQgPSAnU2VlIHRoZSBjb2RlIGF0IEdpdGh1Yic7XG5mb290ZXIuYXBwZW5kQ2hpbGQodGV4dCk7XG5cbmNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5saW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9qb29od2FuNTgvcmVzdGF1cmFudC1wYWdlXCI7XG5saW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XG5jb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5pY29uLnNyYyA9IFwiLi9pbWFnZXMvZ2l0aHViLTE0Mi1zdmdyZXBvLWNvbS5zdmdcIjtcbmljb24uYWx0ID0gXCJnaXRodWJcIjtcbmljb24uY2xhc3NMaXN0LmFkZChcImdpdGh1Yi1pY29uXCIpO1xubGluay5hcHBlbmRDaGlsZChpY29uKTtcblxuZm9vdGVyLmFwcGVuZENoaWxkKGxpbmspO1xuXG5leHBvcnQgeyBmb290ZXIgfTsiLCJjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcblxuY29uc3QgbG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubG9nb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsb2dvLWNvbnRhaW5lcicpO1xuXG5jb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5sb2dvLnNyYyA9IFwiLi9pbWFnZXMvbWNkb25hbGRzLXN2Z3JlcG8tY29tLnBuZ1wiO1xubG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7XG5sb2dvLmFsdCA9IFwibG9nb1wiO1xuXG5sb2dvQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ28pO1xuXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG50aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG50aXRsZS50ZXh0Q29udGVudCA9IFwiV2Ntb25hbGRzXCI7XG5cbmxvZ29Db250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG5oZWFkZXIuYXBwZW5kQ2hpbGQobG9nb0NvbnRhaW5lcik7XG5cbmNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduYXYtYnV0dG9uJywgJ2hvbWUnKTtcbmhvbWVCdXR0b24udGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbmNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbm1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmF2LWJ1dHRvbicsICdtZW51Jyk7XG5tZW51QnV0dG9uLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG5jb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5jb250YWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25hdi1idXR0b24nLCAnY29udGFjdCcpO1xuY29udGFjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xubmF2LmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xubmF2LmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xubmF2LmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pO1xuXG5oZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcblxuZXhwb3J0IHsgaGVhZGVyIH07IiwiY29uc3QgaG9tZXBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmhvbWVwYWdlLmNsYXNzTGlzdC5hZGQoJ2hvbWVwYWdlJyk7XG5cbmNvbnN0IGxpbmUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xubGluZTEudGV4dENvbnRlbnQgPSAnVGhlIGZha2UgZmFzdCBmb29kIGNoYWluIHlvdSBrbm93IGFuZCBsb3ZlJztcblxuY29uc3QgbGluZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5saW5lMi50ZXh0Q29udGVudCA9ICdGbGlwcGluZyBwYXR0aWVzIHNpbmNlIDE5NTUnO1xuXG4vKiA8aW1nIGNsYXNzPVwiaW50cm8taW1hZ2VcIiBzcmM9XCIuL2ltYWdlcy90aXRsZS1wYWdlLWltYWdlLmpwZ1wiIGFsdD1cIkVtcGxveWVlXCI+PC9pbWc+ICovXG5jb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuaW1hZ2UuY2xhc3NMaXN0LmFkZCgnaW50cm8taW1hZ2UnKTtcbmltYWdlLnNyYyA9IFwiLi9pbWFnZXMvdGl0bGUtcGFnZS1pbWFnZS5qcGdcIjtcbmltYWdlLmFsdCA9IFwiRW1wbG95ZWVcIjtcblxuY29uc3QgbGluZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5saW5lMy50ZXh0Q29udGVudCA9ICdPcmRlciBvbmxpbmUgb3IgVmlzaXQgdXMhJztcblxuaG9tZXBhZ2UuYXBwZW5kQ2hpbGQobGluZTEpO1xuaG9tZXBhZ2UuYXBwZW5kQ2hpbGQobGluZTIpO1xuaG9tZXBhZ2UuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuaG9tZXBhZ2UuYXBwZW5kQ2hpbGQobGluZTMpO1xuXG5leHBvcnQgeyBob21lcGFnZSB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBoZWFkZXIgfSBmcm9tIFwiLi9oZWFkZXIuanNcIjtcbmltcG9ydCB7IGZvb3RlciB9IGZyb20gXCIuL2Zvb3Rlci5qc1wiO1xuaW1wb3J0IHsgaG9tZXBhZ2UgfSBmcm9tIFwiLi9ob21lcGFnZS5qc1wiO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG5jb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubWFpbkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250ZW50Jyk7XG5tYWluQ29udGVudC5hcHBlbmRDaGlsZChob21lcGFnZSk7XG5cbmJvZHkuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQpO1xuXG5ib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=