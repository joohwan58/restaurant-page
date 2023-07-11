import { header } from "./header.js";
import { footer } from "./footer.js";
import { homePage } from "./homepage.js";
import { menuContainer } from "./menu.js";
import { contactPage } from "./contact.js";

const body = document.querySelector('body');
body.appendChild(header);

const mainContent = document.createElement('div');
mainContent.classList.add('main-content');
mainContent.appendChild(contactPage);

body.appendChild(mainContent);

body.appendChild(footer);
