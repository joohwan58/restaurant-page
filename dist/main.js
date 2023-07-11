/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contactPage: () => (/* binding */ contactPage)
/* harmony export */ });
const contactPage = document.createElement('div');
contactPage.classList.add('contact-page');

const phoneContainer = document.createElement('div');
phoneContainer.classList.add('phone-container');

const phoneImage = document.createElement('img');
phoneImage.classList.add('phone-logo');
phoneImage.src = "./images/phone-svgrepo-com.svg";
phoneImage.alt = "phone number";

const phoneNumber = document.createElement('span');
phoneNumber.classList.add('phone-number');
phoneNumber.textContent = '123 456 789';

phoneContainer.appendChild(phoneImage);
phoneContainer.appendChild(phoneNumber);
contactPage.appendChild(phoneContainer);

const addressContainer = document.createElement('div');
addressContainer.classList.add("address-container");

const addressImage = document.createElement('img');
addressImage.classList.add('address-logo');
addressImage.src = "./images/address-svgrepo-com.svg";
addressImage.alt = 'address';

const address = document.createElement('span');
address.classList.add("address");
address.textContent = "Hollywood Boulevard 42, Los Angeles, USA";

addressContainer.appendChild(addressImage);
addressContainer.appendChild(address);
contactPage.appendChild(addressContainer);

const mapImage = document.createElement('img');
mapImage.src = "./images/restaurant-location.png";
mapImage.alt = "map";

contactPage.appendChild(mapImage);



/***/ }),

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
/* harmony export */   homePage: () => (/* binding */ homePage)
/* harmony export */ });
const homePage = document.createElement('div');
homePage.classList.add('homepage');

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

homePage.appendChild(line1);
homePage.appendChild(line2);
homePage.appendChild(image);
homePage.appendChild(line3);



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
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");






const body = document.querySelector('body');
body.appendChild(_header_js__WEBPACK_IMPORTED_MODULE_0__.header);

const mainContent = document.createElement('div');
mainContent.classList.add('main-content');
mainContent.appendChild(_contact_js__WEBPACK_IMPORTED_MODULE_4__.contactPage);

body.appendChild(mainContent);

body.appendChild(_footer_js__WEBPACK_IMPORTED_MODULE_1__.footer);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDakJBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUNoQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcUM7QUFDQTtBQUNJO0FBQ0M7QUFDQzs7QUFFM0M7QUFDQSxpQkFBaUIsOENBQU07O0FBRXZCO0FBQ0E7QUFDQSx3QkFBd0Isb0RBQVc7O0FBRW5DOztBQUVBLGlCQUFpQiw4Q0FBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRhY3RQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb250YWN0UGFnZS5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXBhZ2UnKTtcblxuY29uc3QgcGhvbmVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnBob25lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Bob25lLWNvbnRhaW5lcicpO1xuXG5jb25zdCBwaG9uZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5waG9uZUltYWdlLmNsYXNzTGlzdC5hZGQoJ3Bob25lLWxvZ28nKTtcbnBob25lSW1hZ2Uuc3JjID0gXCIuL2ltYWdlcy9waG9uZS1zdmdyZXBvLWNvbS5zdmdcIjtcbnBob25lSW1hZ2UuYWx0ID0gXCJwaG9uZSBudW1iZXJcIjtcblxuY29uc3QgcGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5waG9uZU51bWJlci5jbGFzc0xpc3QuYWRkKCdwaG9uZS1udW1iZXInKTtcbnBob25lTnVtYmVyLnRleHRDb250ZW50ID0gJzEyMyA0NTYgNzg5JztcblxucGhvbmVDb250YWluZXIuYXBwZW5kQ2hpbGQocGhvbmVJbWFnZSk7XG5waG9uZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwaG9uZU51bWJlcik7XG5jb250YWN0UGFnZS5hcHBlbmRDaGlsZChwaG9uZUNvbnRhaW5lcik7XG5cbmNvbnN0IGFkZHJlc3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmFkZHJlc3NDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFkZHJlc3MtY29udGFpbmVyXCIpO1xuXG5jb25zdCBhZGRyZXNzSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbmFkZHJlc3NJbWFnZS5jbGFzc0xpc3QuYWRkKCdhZGRyZXNzLWxvZ28nKTtcbmFkZHJlc3NJbWFnZS5zcmMgPSBcIi4vaW1hZ2VzL2FkZHJlc3Mtc3ZncmVwby1jb20uc3ZnXCI7XG5hZGRyZXNzSW1hZ2UuYWx0ID0gJ2FkZHJlc3MnO1xuXG5jb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuYWRkcmVzcy5jbGFzc0xpc3QuYWRkKFwiYWRkcmVzc1wiKTtcbmFkZHJlc3MudGV4dENvbnRlbnQgPSBcIkhvbGx5d29vZCBCb3VsZXZhcmQgNDIsIExvcyBBbmdlbGVzLCBVU0FcIjtcblxuYWRkcmVzc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRyZXNzSW1hZ2UpO1xuYWRkcmVzc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRyZXNzKTtcbmNvbnRhY3RQYWdlLmFwcGVuZENoaWxkKGFkZHJlc3NDb250YWluZXIpO1xuXG5jb25zdCBtYXBJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xubWFwSW1hZ2Uuc3JjID0gXCIuL2ltYWdlcy9yZXN0YXVyYW50LWxvY2F0aW9uLnBuZ1wiO1xubWFwSW1hZ2UuYWx0ID0gXCJtYXBcIjtcblxuY29udGFjdFBhZ2UuYXBwZW5kQ2hpbGQobWFwSW1hZ2UpO1xuXG5leHBvcnQgeyBjb250YWN0UGFnZSB9OyIsImNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuXG5jb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xudGV4dC5jbGFzc0xpc3QuYWRkKCdmb290ZXItdGV4dCcpO1xudGV4dC50ZXh0Q29udGVudCA9ICdTZWUgdGhlIGNvZGUgYXQgR2l0aHViJztcbmZvb3Rlci5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbmxpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL2pvb2h3YW41OC9yZXN0YXVyYW50LXBhZ2VcIjtcbmxpbmsudGFyZ2V0ID0gXCJfYmxhbmtcIjtcbmNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbmljb24uc3JjID0gXCIuL2ltYWdlcy9naXRodWItMTQyLXN2Z3JlcG8tY29tLnN2Z1wiO1xuaWNvbi5hbHQgPSBcImdpdGh1YlwiO1xuaWNvbi5jbGFzc0xpc3QuYWRkKFwiZ2l0aHViLWljb25cIik7XG5saW5rLmFwcGVuZENoaWxkKGljb24pO1xuXG5mb290ZXIuYXBwZW5kQ2hpbGQobGluayk7XG5cbmV4cG9ydCB7IGZvb3RlciB9OyIsImNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuXG5jb25zdCBsb2dvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5sb2dvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xvZ28tY29udGFpbmVyJyk7XG5cbmNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbmxvZ28uc3JjID0gXCIuL2ltYWdlcy9tY2RvbmFsZHMtc3ZncmVwby1jb20ucG5nXCI7XG5sb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcbmxvZ28uYWx0ID0gXCJsb2dvXCI7XG5cbmxvZ29Db250YWluZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG5cbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbnRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbnRpdGxlLnRleHRDb250ZW50ID0gXCJXY21vbmFsZHNcIjtcblxubG9nb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbmhlYWRlci5hcHBlbmRDaGlsZChsb2dvQ29udGFpbmVyKTtcblxuY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG5jb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5ob21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25hdi1idXR0b24nLCAnaG9tZScpO1xuaG9tZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xubWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduYXYtYnV0dG9uJywgJ21lbnUnKTtcbm1lbnVCdXR0b24udGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbmNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmF2LWJ1dHRvbicsICdjb250YWN0Jyk7XG5jb250YWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG5uYXYuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbik7XG5uYXYuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG5uYXYuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbik7XG5cbmhlYWRlci5hcHBlbmRDaGlsZChuYXYpO1xuXG5leHBvcnQgeyBoZWFkZXIgfTsiLCJjb25zdCBob21lUGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuaG9tZVBhZ2UuY2xhc3NMaXN0LmFkZCgnaG9tZXBhZ2UnKTtcblxuY29uc3QgbGluZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5saW5lMS50ZXh0Q29udGVudCA9ICdUaGUgZmFrZSBmYXN0IGZvb2QgY2hhaW4geW91IGtub3cgYW5kIGxvdmUnO1xuXG5jb25zdCBsaW5lMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbmxpbmUyLnRleHRDb250ZW50ID0gJ0ZsaXBwaW5nIHBhdHRpZXMgc2luY2UgMTk1NSc7XG5cbi8qIDxpbWcgY2xhc3M9XCJpbnRyby1pbWFnZVwiIHNyYz1cIi4vaW1hZ2VzL3RpdGxlLXBhZ2UtaW1hZ2UuanBnXCIgYWx0PVwiRW1wbG95ZWVcIj48L2ltZz4gKi9cbmNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5pbWFnZS5jbGFzc0xpc3QuYWRkKCdpbnRyby1pbWFnZScpO1xuaW1hZ2Uuc3JjID0gXCIuL2ltYWdlcy90aXRsZS1wYWdlLWltYWdlLmpwZ1wiO1xuaW1hZ2UuYWx0ID0gXCJFbXBsb3llZVwiO1xuXG5jb25zdCBsaW5lMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbmxpbmUzLnRleHRDb250ZW50ID0gJ09yZGVyIG9ubGluZSBvciBWaXNpdCB1cyEnO1xuXG5ob21lUGFnZS5hcHBlbmRDaGlsZChsaW5lMSk7XG5ob21lUGFnZS5hcHBlbmRDaGlsZChsaW5lMik7XG5ob21lUGFnZS5hcHBlbmRDaGlsZChpbWFnZSk7XG5ob21lUGFnZS5hcHBlbmRDaGlsZChsaW5lMyk7XG5cbmV4cG9ydCB7IGhvbWVQYWdlIH0iLCJjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5tZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtY29udGFpbmVyJyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtKG5hbWUsIGltYWdlLCBkZXNjcmlwdGlvbikge1xuICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG5cbiAgICBjb25zdCBpbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWVudS1pbWFnZScpO1xuICAgIGltYWdlRWxlbWVudC5zcmMgPSBpbWFnZTtcbiAgICBpbWFnZUVsZW1lbnQuYWx0ID0gbmFtZTtcblxuICAgIGNvbnN0IG5hbWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG5hbWVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21lbnUtbmFtZScpO1xuICAgIG5hbWVFbGVtZW50LnRleHRDb250ZW50ID0gbmFtZTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkZXNjcmlwdGlvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWVudS1leHBsYWluYXRpb24nKTtcbiAgICBkZXNjcmlwdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcblxuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGltYWdlRWxlbWVudCk7XG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQobmFtZUVsZW1lbnQpO1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRWxlbWVudCk7XG5cbiAgICByZXR1cm4gbWVudUl0ZW07XG59XG5cbm1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oXCJXY2hpY2tlblwiLCBcIi4vaW1hZ2VzL21jaGlja2VuLmpwZ1wiLCBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFBoYXNlbGx1cyBhYyBudW5jIG1vbGxpcywgcGhhcmV0cmEgdG9ydG9yIHNpdCBhbWV0LlwiKSk7XG5tZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKFwiV2NoaWNrZW5cIiwgXCIuL2ltYWdlcy9tY2hpY2tlbi5qcGdcIiwgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBQaGFzZWxsdXMgYWMgbnVuYyBtb2xsaXMsIHBoYXJldHJhIHRvcnRvciBzaXQgYW1ldC5cIikpO1xubWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShcIldjaGlja2VuXCIsIFwiLi9pbWFnZXMvbWNoaWNrZW4uanBnXCIsIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUGhhc2VsbHVzIGFjIG51bmMgbW9sbGlzLCBwaGFyZXRyYSB0b3J0b3Igc2l0IGFtZXQuXCIpKTtcbm1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oXCJXY2hpY2tlblwiLCBcIi4vaW1hZ2VzL21jaGlja2VuLmpwZ1wiLCBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFBoYXNlbGx1cyBhYyBudW5jIG1vbGxpcywgcGhhcmV0cmEgdG9ydG9yIHNpdCBhbWV0LlwiKSk7XG5tZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKFwiV2NoaWNrZW5cIiwgXCIuL2ltYWdlcy9tY2hpY2tlbi5qcGdcIiwgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBQaGFzZWxsdXMgYWMgbnVuYyBtb2xsaXMsIHBoYXJldHJhIHRvcnRvciBzaXQgYW1ldC5cIikpO1xubWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShcIldjaGlja2VuXCIsIFwiLi9pbWFnZXMvbWNoaWNrZW4uanBnXCIsIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUGhhc2VsbHVzIGFjIG51bmMgbW9sbGlzLCBwaGFyZXRyYSB0b3J0b3Igc2l0IGFtZXQuXCIpKTtcblxuZXhwb3J0IHsgbWVudUNvbnRhaW5lciB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBoZWFkZXIgfSBmcm9tIFwiLi9oZWFkZXIuanNcIjtcbmltcG9ydCB7IGZvb3RlciB9IGZyb20gXCIuL2Zvb3Rlci5qc1wiO1xuaW1wb3J0IHsgaG9tZVBhZ2UgfSBmcm9tIFwiLi9ob21lcGFnZS5qc1wiO1xuaW1wb3J0IHsgbWVudUNvbnRhaW5lciB9IGZyb20gXCIuL21lbnUuanNcIjtcbmltcG9ydCB7IGNvbnRhY3RQYWdlIH0gZnJvbSBcIi4vY29udGFjdC5qc1wiO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG5jb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubWFpbkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250ZW50Jyk7XG5tYWluQ29udGVudC5hcHBlbmRDaGlsZChjb250YWN0UGFnZSk7XG5cbmJvZHkuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQpO1xuXG5ib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=