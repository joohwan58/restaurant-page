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



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuContainer: () => (/* binding */ menuContainer)
/* harmony export */ });
const menuContainer = document.createElement('div');
menuContainer.classList.add('menu-container');

function createMenuItem(name, image, description) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const imageElement = document.createElement('img');
    imageElement.classList.add('menu-image');
    imageElement.src = image;
    imageElement.alt = name;

    const nameElement = document.createElement('p');
    nameElement.classList.add('menu-name');
    nameElement.textContent = name;

    const descriptionElement = document.createElement('p');
    descriptionElement.classList.add('menu-explaination');
    descriptionElement.textContent = description;

    menuItem.appendChild(imageElement);
    menuItem.appendChild(nameElement);
    menuItem.appendChild(descriptionElement);

    return menuItem;
}

menuContainer.appendChild(createMenuItem("Wchicken", "./images/mchicken.jpg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nunc mollis, pharetra tortor sit amet."));
menuContainer.appendChild(createMenuItem("Wchicken", "./images/mchicken.jpg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nunc mollis, pharetra tortor sit amet."));
menuContainer.appendChild(createMenuItem("Wchicken", "./images/mchicken.jpg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nunc mollis, pharetra tortor sit amet."));
menuContainer.appendChild(createMenuItem("Wchicken", "./images/mchicken.jpg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nunc mollis, pharetra tortor sit amet."));
menuContainer.appendChild(createMenuItem("Wchicken", "./images/mchicken.jpg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nunc mollis, pharetra tortor sit amet."));
menuContainer.appendChild(createMenuItem("Wchicken", "./images/mchicken.jpg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nunc mollis, pharetra tortor sit amet."));



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
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");





const body = document.querySelector('body');
// body.appendChild(header);

body.insertBefore(_header_js__WEBPACK_IMPORTED_MODULE_0__.header, body.firstChild)

// const mainContent = document.createElement('div');
// mainContent.classList.add('main-content');
// mainContent.appendChild(menuContainer);

// body.appendChild(mainContent);

body.appendChild(_footer_js__WEBPACK_IMPORTED_MODULE_1__.footer);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDaENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOcUM7QUFDQTtBQUNJO0FBQ0M7O0FBRTFDO0FBQ0E7O0FBRUEsa0JBQWtCLDhDQUFNOztBQUV4QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUJBQWlCLDhDQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5mb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG5cbmNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG50ZXh0LmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci10ZXh0Jyk7XG50ZXh0LnRleHRDb250ZW50ID0gJ1NlZSB0aGUgY29kZSBhdCBHaXRodWInO1xuZm9vdGVyLmFwcGVuZENoaWxkKHRleHQpO1xuXG5jb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xubGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vam9vaHdhbjU4L3Jlc3RhdXJhbnQtcGFnZVwiO1xubGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xuY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuaWNvbi5zcmMgPSBcIi4vaW1hZ2VzL2dpdGh1Yi0xNDItc3ZncmVwby1jb20uc3ZnXCI7XG5pY29uLmFsdCA9IFwiZ2l0aHViXCI7XG5pY29uLmNsYXNzTGlzdC5hZGQoXCJnaXRodWItaWNvblwiKTtcbmxpbmsuYXBwZW5kQ2hpbGQoaWNvbik7XG5cbmZvb3Rlci5hcHBlbmRDaGlsZChsaW5rKTtcblxuZXhwb3J0IHsgZm9vdGVyIH07IiwiY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cbmNvbnN0IGxvZ29Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmxvZ29Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbG9nby1jb250YWluZXInKTtcblxuY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xubG9nby5zcmMgPSBcIi4vaW1hZ2VzL21jZG9uYWxkcy1zdmdyZXBvLWNvbS5wbmdcIjtcbmxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpO1xubG9nby5hbHQgPSBcImxvZ29cIjtcblxubG9nb0NvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvKTtcblxuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xudGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xudGl0bGUudGV4dENvbnRlbnQgPSBcIldjbW9uYWxkc1wiO1xuXG5sb2dvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuaGVhZGVyLmFwcGVuZENoaWxkKGxvZ29Db250YWluZXIpO1xuXG5jb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbmNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmF2LWJ1dHRvbicsICdob21lJyk7XG5ob21lQnV0dG9uLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5tZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25hdi1idXR0b24nLCAnbWVudScpO1xubWVudUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduYXYtYnV0dG9uJywgJ2NvbnRhY3QnKTtcbmNvbnRhY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbm5hdi5hcHBlbmRDaGlsZChob21lQnV0dG9uKTtcbm5hdi5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcbm5hdi5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKTtcblxuaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XG5cbmV4cG9ydCB7IGhlYWRlciB9OyIsImNvbnN0IGhvbWVwYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5ob21lcGFnZS5jbGFzc0xpc3QuYWRkKCdob21lcGFnZScpO1xuXG5jb25zdCBsaW5lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbmxpbmUxLnRleHRDb250ZW50ID0gJ1RoZSBmYWtlIGZhc3QgZm9vZCBjaGFpbiB5b3Uga25vdyBhbmQgbG92ZSc7XG5cbmNvbnN0IGxpbmUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xubGluZTIudGV4dENvbnRlbnQgPSAnRmxpcHBpbmcgcGF0dGllcyBzaW5jZSAxOTU1JztcblxuLyogPGltZyBjbGFzcz1cImludHJvLWltYWdlXCIgc3JjPVwiLi9pbWFnZXMvdGl0bGUtcGFnZS1pbWFnZS5qcGdcIiBhbHQ9XCJFbXBsb3llZVwiPjwvaW1nPiAqL1xuY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbmltYWdlLmNsYXNzTGlzdC5hZGQoJ2ludHJvLWltYWdlJyk7XG5pbWFnZS5zcmMgPSBcIi4vaW1hZ2VzL3RpdGxlLXBhZ2UtaW1hZ2UuanBnXCI7XG5pbWFnZS5hbHQgPSBcIkVtcGxveWVlXCI7XG5cbmNvbnN0IGxpbmUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xubGluZTMudGV4dENvbnRlbnQgPSAnT3JkZXIgb25saW5lIG9yIFZpc2l0IHVzISc7XG5cbmhvbWVwYWdlLmFwcGVuZENoaWxkKGxpbmUxKTtcbmhvbWVwYWdlLmFwcGVuZENoaWxkKGxpbmUyKTtcbmhvbWVwYWdlLmFwcGVuZENoaWxkKGltYWdlKTtcbmhvbWVwYWdlLmFwcGVuZENoaWxkKGxpbmUzKTtcblxuZXhwb3J0IHsgaG9tZXBhZ2UgfSIsImNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1jb250YWluZXInKTtcblxuZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0obmFtZSwgaW1hZ2UsIGRlc2NyaXB0aW9uKSB7XG4gICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcblxuICAgIGNvbnN0IGltYWdlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltYWdlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtZW51LWltYWdlJyk7XG4gICAgaW1hZ2VFbGVtZW50LnNyYyA9IGltYWdlO1xuICAgIGltYWdlRWxlbWVudC5hbHQgPSBuYW1lO1xuXG4gICAgY29uc3QgbmFtZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbmFtZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWVudS1uYW1lJyk7XG4gICAgbmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRlc2NyaXB0aW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtZW51LWV4cGxhaW5hdGlvbicpO1xuICAgIGRlc2NyaXB0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuXG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaW1hZ2VFbGVtZW50KTtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChuYW1lRWxlbWVudCk7XG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25FbGVtZW50KTtcblxuICAgIHJldHVybiBtZW51SXRlbTtcbn1cblxubWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShcIldjaGlja2VuXCIsIFwiLi9pbWFnZXMvbWNoaWNrZW4uanBnXCIsIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUGhhc2VsbHVzIGFjIG51bmMgbW9sbGlzLCBwaGFyZXRyYSB0b3J0b3Igc2l0IGFtZXQuXCIpKTtcbm1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oXCJXY2hpY2tlblwiLCBcIi4vaW1hZ2VzL21jaGlja2VuLmpwZ1wiLCBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFBoYXNlbGx1cyBhYyBudW5jIG1vbGxpcywgcGhhcmV0cmEgdG9ydG9yIHNpdCBhbWV0LlwiKSk7XG5tZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKFwiV2NoaWNrZW5cIiwgXCIuL2ltYWdlcy9tY2hpY2tlbi5qcGdcIiwgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBQaGFzZWxsdXMgYWMgbnVuYyBtb2xsaXMsIHBoYXJldHJhIHRvcnRvciBzaXQgYW1ldC5cIikpO1xubWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShcIldjaGlja2VuXCIsIFwiLi9pbWFnZXMvbWNoaWNrZW4uanBnXCIsIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUGhhc2VsbHVzIGFjIG51bmMgbW9sbGlzLCBwaGFyZXRyYSB0b3J0b3Igc2l0IGFtZXQuXCIpKTtcbm1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oXCJXY2hpY2tlblwiLCBcIi4vaW1hZ2VzL21jaGlja2VuLmpwZ1wiLCBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFBoYXNlbGx1cyBhYyBudW5jIG1vbGxpcywgcGhhcmV0cmEgdG9ydG9yIHNpdCBhbWV0LlwiKSk7XG5tZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKFwiV2NoaWNrZW5cIiwgXCIuL2ltYWdlcy9tY2hpY2tlbi5qcGdcIiwgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBQaGFzZWxsdXMgYWMgbnVuYyBtb2xsaXMsIHBoYXJldHJhIHRvcnRvciBzaXQgYW1ldC5cIikpO1xuXG5leHBvcnQgeyBtZW51Q29udGFpbmVyIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGhlYWRlciB9IGZyb20gXCIuL2hlYWRlci5qc1wiO1xuaW1wb3J0IHsgZm9vdGVyIH0gZnJvbSBcIi4vZm9vdGVyLmpzXCI7XG5pbXBvcnQgeyBob21lcGFnZSB9IGZyb20gXCIuL2hvbWVwYWdlLmpzXCI7XG5pbXBvcnQgeyBtZW51Q29udGFpbmVyIH0gZnJvbSBcIi4vbWVudS5qc1wiO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuLy8gYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG5ib2R5Lmluc2VydEJlZm9yZShoZWFkZXIsIGJvZHkuZmlyc3RDaGlsZClcblxuLy8gY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vIG1haW5Db250ZW50LmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGVudCcpO1xuLy8gbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG5cbi8vIGJvZHkuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQpO1xuXG5ib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=