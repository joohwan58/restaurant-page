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
homeButton.classList.add('nav-button', 'home', 'selected');
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
/* harmony export */   menuPage: () => (/* binding */ menuPage)
/* harmony export */ });
const menuPage = document.createElement('div');
menuPage.classList.add('menu-container');

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

menuPage.appendChild(createMenuItem("Wchicken", "./images/mchicken.jpg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nunc mollis, pharetra tortor sit amet."));
menuPage.appendChild(createMenuItem("Wchicken", "./images/mchicken.jpg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nunc mollis, pharetra tortor sit amet."));
menuPage.appendChild(createMenuItem("Wchicken", "./images/mchicken.jpg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nunc mollis, pharetra tortor sit amet."));
menuPage.appendChild(createMenuItem("Wchicken", "./images/mchicken.jpg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nunc mollis, pharetra tortor sit amet."));
menuPage.appendChild(createMenuItem("Wchicken", "./images/mchicken.jpg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nunc mollis, pharetra tortor sit amet."));
menuPage.appendChild(createMenuItem("Wchicken", "./images/mchicken.jpg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nunc mollis, pharetra tortor sit amet."));



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
mainContent.appendChild(_homepage_js__WEBPACK_IMPORTED_MODULE_2__.homePage);

body.appendChild(mainContent);

body.appendChild(_footer_js__WEBPACK_IMPORTED_MODULE_1__.footer);

const homeButton = document.querySelector('.home');
const menuButton = document.querySelector('.menu');
const contactButton = document.querySelector('.contact');

const resetButton = (element) => {
    element.classList.remove('selected');
}

const styleButton = (element) => {
    resetButton(homeButton);
    resetButton(menuButton);
    resetButton(contactButton);
    element.classList.add('selected');
}

const changePage = (element) => {
    mainContent.replaceChildren(element);
}

homeButton.addEventListener('click', () => {
    styleButton(homeButton);
    changePage(_homepage_js__WEBPACK_IMPORTED_MODULE_2__.homePage);
})

menuButton.addEventListener('click', () => {
    styleButton(menuButton);
    changePage(_menu_js__WEBPACK_IMPORTED_MODULE_3__.menuPage);
})

contactButton.addEventListener('click', () => {
    styleButton(contactButton);
    changePage(_contact_js__WEBPACK_IMPORTED_MODULE_4__.contactPage);
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDakJBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUNoQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcUM7QUFDQTtBQUNJO0FBQ0o7QUFDTTs7QUFFM0M7QUFDQSxpQkFBaUIsOENBQU07O0FBRXZCO0FBQ0E7QUFDQSx3QkFBd0Isa0RBQVE7O0FBRWhDOztBQUVBLGlCQUFpQiw4Q0FBTTs7QUFFdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLGtEQUFRO0FBQ3ZCLENBQUM7O0FBRUQ7QUFDQTtBQUNBLGVBQWUsOENBQVE7QUFDdkIsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsZUFBZSxvREFBVztBQUMxQixDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb250YWN0UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29udGFjdFBhZ2UuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1wYWdlJyk7XG5cbmNvbnN0IHBob25lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5waG9uZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwaG9uZS1jb250YWluZXInKTtcblxuY29uc3QgcGhvbmVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xucGhvbmVJbWFnZS5jbGFzc0xpc3QuYWRkKCdwaG9uZS1sb2dvJyk7XG5waG9uZUltYWdlLnNyYyA9IFwiLi9pbWFnZXMvcGhvbmUtc3ZncmVwby1jb20uc3ZnXCI7XG5waG9uZUltYWdlLmFsdCA9IFwicGhvbmUgbnVtYmVyXCI7XG5cbmNvbnN0IHBob25lTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xucGhvbmVOdW1iZXIuY2xhc3NMaXN0LmFkZCgncGhvbmUtbnVtYmVyJyk7XG5waG9uZU51bWJlci50ZXh0Q29udGVudCA9ICcxMjMgNDU2IDc4OSc7XG5cbnBob25lQ29udGFpbmVyLmFwcGVuZENoaWxkKHBob25lSW1hZ2UpO1xucGhvbmVDb250YWluZXIuYXBwZW5kQ2hpbGQocGhvbmVOdW1iZXIpO1xuY29udGFjdFBhZ2UuYXBwZW5kQ2hpbGQocGhvbmVDb250YWluZXIpO1xuXG5jb25zdCBhZGRyZXNzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5hZGRyZXNzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhZGRyZXNzLWNvbnRhaW5lclwiKTtcblxuY29uc3QgYWRkcmVzc0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5hZGRyZXNzSW1hZ2UuY2xhc3NMaXN0LmFkZCgnYWRkcmVzcy1sb2dvJyk7XG5hZGRyZXNzSW1hZ2Uuc3JjID0gXCIuL2ltYWdlcy9hZGRyZXNzLXN2Z3JlcG8tY29tLnN2Z1wiO1xuYWRkcmVzc0ltYWdlLmFsdCA9ICdhZGRyZXNzJztcblxuY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbmFkZHJlc3MuY2xhc3NMaXN0LmFkZChcImFkZHJlc3NcIik7XG5hZGRyZXNzLnRleHRDb250ZW50ID0gXCJIb2xseXdvb2QgQm91bGV2YXJkIDQyLCBMb3MgQW5nZWxlcywgVVNBXCI7XG5cbmFkZHJlc3NDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkcmVzc0ltYWdlKTtcbmFkZHJlc3NDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG5jb250YWN0UGFnZS5hcHBlbmRDaGlsZChhZGRyZXNzQ29udGFpbmVyKTtcblxuY29uc3QgbWFwSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbm1hcEltYWdlLnNyYyA9IFwiLi9pbWFnZXMvcmVzdGF1cmFudC1sb2NhdGlvbi5wbmdcIjtcbm1hcEltYWdlLmFsdCA9IFwibWFwXCI7XG5cbmNvbnRhY3RQYWdlLmFwcGVuZENoaWxkKG1hcEltYWdlKTtcblxuZXhwb3J0IHsgY29udGFjdFBhZ2UgfTsiLCJjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcblxuY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbnRleHQuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLXRleHQnKTtcbnRleHQudGV4dENvbnRlbnQgPSAnU2VlIHRoZSBjb2RlIGF0IEdpdGh1Yic7XG5mb290ZXIuYXBwZW5kQ2hpbGQodGV4dCk7XG5cbmNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5saW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9qb29od2FuNTgvcmVzdGF1cmFudC1wYWdlXCI7XG5saW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XG5jb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5pY29uLnNyYyA9IFwiLi9pbWFnZXMvZ2l0aHViLTE0Mi1zdmdyZXBvLWNvbS5zdmdcIjtcbmljb24uYWx0ID0gXCJnaXRodWJcIjtcbmljb24uY2xhc3NMaXN0LmFkZChcImdpdGh1Yi1pY29uXCIpO1xubGluay5hcHBlbmRDaGlsZChpY29uKTtcblxuZm9vdGVyLmFwcGVuZENoaWxkKGxpbmspO1xuXG5leHBvcnQgeyBmb290ZXIgfTsiLCJjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcblxuY29uc3QgbG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubG9nb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsb2dvLWNvbnRhaW5lcicpO1xuXG5jb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5sb2dvLnNyYyA9IFwiLi9pbWFnZXMvbWNkb25hbGRzLXN2Z3JlcG8tY29tLnBuZ1wiO1xubG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7XG5sb2dvLmFsdCA9IFwibG9nb1wiO1xuXG5sb2dvQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ28pO1xuXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG50aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG50aXRsZS50ZXh0Q29udGVudCA9IFwiV2Ntb25hbGRzXCI7XG5cbmxvZ29Db250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG5oZWFkZXIuYXBwZW5kQ2hpbGQobG9nb0NvbnRhaW5lcik7XG5cbmNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduYXYtYnV0dG9uJywgJ2hvbWUnLCAnc2VsZWN0ZWQnKTtcbmhvbWVCdXR0b24udGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbmNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbm1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmF2LWJ1dHRvbicsICdtZW51Jyk7XG5tZW51QnV0dG9uLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG5jb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5jb250YWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25hdi1idXR0b24nLCAnY29udGFjdCcpO1xuY29udGFjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xubmF2LmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xubmF2LmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xubmF2LmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pO1xuXG5oZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcblxuZXhwb3J0IHsgaGVhZGVyIH07IiwiY29uc3QgaG9tZVBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmhvbWVQYWdlLmNsYXNzTGlzdC5hZGQoJ2hvbWVwYWdlJyk7XG5cbmNvbnN0IGxpbmUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xubGluZTEudGV4dENvbnRlbnQgPSAnVGhlIGZha2UgZmFzdCBmb29kIGNoYWluIHlvdSBrbm93IGFuZCBsb3ZlJztcblxuY29uc3QgbGluZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5saW5lMi50ZXh0Q29udGVudCA9ICdGbGlwcGluZyBwYXR0aWVzIHNpbmNlIDE5NTUnO1xuXG4vKiA8aW1nIGNsYXNzPVwiaW50cm8taW1hZ2VcIiBzcmM9XCIuL2ltYWdlcy90aXRsZS1wYWdlLWltYWdlLmpwZ1wiIGFsdD1cIkVtcGxveWVlXCI+PC9pbWc+ICovXG5jb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuaW1hZ2UuY2xhc3NMaXN0LmFkZCgnaW50cm8taW1hZ2UnKTtcbmltYWdlLnNyYyA9IFwiLi9pbWFnZXMvdGl0bGUtcGFnZS1pbWFnZS5qcGdcIjtcbmltYWdlLmFsdCA9IFwiRW1wbG95ZWVcIjtcblxuY29uc3QgbGluZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5saW5lMy50ZXh0Q29udGVudCA9ICdPcmRlciBvbmxpbmUgb3IgVmlzaXQgdXMhJztcblxuaG9tZVBhZ2UuYXBwZW5kQ2hpbGQobGluZTEpO1xuaG9tZVBhZ2UuYXBwZW5kQ2hpbGQobGluZTIpO1xuaG9tZVBhZ2UuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuaG9tZVBhZ2UuYXBwZW5kQ2hpbGQobGluZTMpO1xuXG5leHBvcnQgeyBob21lUGFnZSB9IiwiY29uc3QgbWVudVBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm1lbnVQYWdlLmNsYXNzTGlzdC5hZGQoJ21lbnUtY29udGFpbmVyJyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtKG5hbWUsIGltYWdlLCBkZXNjcmlwdGlvbikge1xuICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG5cbiAgICBjb25zdCBpbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWVudS1pbWFnZScpO1xuICAgIGltYWdlRWxlbWVudC5zcmMgPSBpbWFnZTtcbiAgICBpbWFnZUVsZW1lbnQuYWx0ID0gbmFtZTtcblxuICAgIGNvbnN0IG5hbWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG5hbWVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21lbnUtbmFtZScpO1xuICAgIG5hbWVFbGVtZW50LnRleHRDb250ZW50ID0gbmFtZTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkZXNjcmlwdGlvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWVudS1leHBsYWluYXRpb24nKTtcbiAgICBkZXNjcmlwdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcblxuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGltYWdlRWxlbWVudCk7XG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQobmFtZUVsZW1lbnQpO1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRWxlbWVudCk7XG5cbiAgICByZXR1cm4gbWVudUl0ZW07XG59XG5cbm1lbnVQYWdlLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKFwiV2NoaWNrZW5cIiwgXCIuL2ltYWdlcy9tY2hpY2tlbi5qcGdcIiwgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBQaGFzZWxsdXMgYWMgbnVuYyBtb2xsaXMsIHBoYXJldHJhIHRvcnRvciBzaXQgYW1ldC5cIikpO1xubWVudVBhZ2UuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oXCJXY2hpY2tlblwiLCBcIi4vaW1hZ2VzL21jaGlja2VuLmpwZ1wiLCBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFBoYXNlbGx1cyBhYyBudW5jIG1vbGxpcywgcGhhcmV0cmEgdG9ydG9yIHNpdCBhbWV0LlwiKSk7XG5tZW51UGFnZS5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShcIldjaGlja2VuXCIsIFwiLi9pbWFnZXMvbWNoaWNrZW4uanBnXCIsIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUGhhc2VsbHVzIGFjIG51bmMgbW9sbGlzLCBwaGFyZXRyYSB0b3J0b3Igc2l0IGFtZXQuXCIpKTtcbm1lbnVQYWdlLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKFwiV2NoaWNrZW5cIiwgXCIuL2ltYWdlcy9tY2hpY2tlbi5qcGdcIiwgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBQaGFzZWxsdXMgYWMgbnVuYyBtb2xsaXMsIHBoYXJldHJhIHRvcnRvciBzaXQgYW1ldC5cIikpO1xubWVudVBhZ2UuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oXCJXY2hpY2tlblwiLCBcIi4vaW1hZ2VzL21jaGlja2VuLmpwZ1wiLCBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFBoYXNlbGx1cyBhYyBudW5jIG1vbGxpcywgcGhhcmV0cmEgdG9ydG9yIHNpdCBhbWV0LlwiKSk7XG5tZW51UGFnZS5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShcIldjaGlja2VuXCIsIFwiLi9pbWFnZXMvbWNoaWNrZW4uanBnXCIsIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUGhhc2VsbHVzIGFjIG51bmMgbW9sbGlzLCBwaGFyZXRyYSB0b3J0b3Igc2l0IGFtZXQuXCIpKTtcblxuZXhwb3J0IHsgbWVudVBhZ2UgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaGVhZGVyIH0gZnJvbSBcIi4vaGVhZGVyLmpzXCI7XG5pbXBvcnQgeyBmb290ZXIgfSBmcm9tIFwiLi9mb290ZXIuanNcIjtcbmltcG9ydCB7IGhvbWVQYWdlIH0gZnJvbSBcIi4vaG9tZXBhZ2UuanNcIjtcbmltcG9ydCB7IG1lbnVQYWdlIH0gZnJvbSBcIi4vbWVudS5qc1wiO1xuaW1wb3J0IHsgY29udGFjdFBhZ2UgfSBmcm9tIFwiLi9jb250YWN0LmpzXCI7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbmNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5tYWluQ29udGVudC5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRlbnQnKTtcbm1haW5Db250ZW50LmFwcGVuZENoaWxkKGhvbWVQYWdlKTtcblxuYm9keS5hcHBlbmRDaGlsZChtYWluQ29udGVudCk7XG5cbmJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxuY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lJyk7XG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKTtcbmNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdCcpO1xuXG5jb25zdCByZXNldEJ1dHRvbiA9IChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xufVxuXG5jb25zdCBzdHlsZUJ1dHRvbiA9IChlbGVtZW50KSA9PiB7XG4gICAgcmVzZXRCdXR0b24oaG9tZUJ1dHRvbik7XG4gICAgcmVzZXRCdXR0b24obWVudUJ1dHRvbik7XG4gICAgcmVzZXRCdXR0b24oY29udGFjdEJ1dHRvbik7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xufVxuXG5jb25zdCBjaGFuZ2VQYWdlID0gKGVsZW1lbnQpID0+IHtcbiAgICBtYWluQ29udGVudC5yZXBsYWNlQ2hpbGRyZW4oZWxlbWVudCk7XG59XG5cbmhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc3R5bGVCdXR0b24oaG9tZUJ1dHRvbik7XG4gICAgY2hhbmdlUGFnZShob21lUGFnZSk7XG59KVxuXG5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHN0eWxlQnV0dG9uKG1lbnVCdXR0b24pO1xuICAgIGNoYW5nZVBhZ2UobWVudVBhZ2UpO1xufSlcblxuY29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzdHlsZUJ1dHRvbihjb250YWN0QnV0dG9uKTtcbiAgICBjaGFuZ2VQYWdlKGNvbnRhY3RQYWdlKTtcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9