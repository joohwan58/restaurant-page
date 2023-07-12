import { header } from "./header.js";
import { footer } from "./footer.js";
import { homePage } from "./homepage.js";
import { menuPage } from "./menu.js";
import { contactPage } from "./contact.js";

const body = document.querySelector('body');
body.appendChild(header);

const mainContent = document.createElement('div');
mainContent.classList.add('main-content');
mainContent.appendChild(homePage);

body.appendChild(mainContent);

body.appendChild(footer);

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
    changePage(homePage);
})

menuButton.addEventListener('click', () => {
    styleButton(menuButton);
    changePage(menuPage);
})

contactButton.addEventListener('click', () => {
    styleButton(contactButton);
    changePage(contactPage);
})