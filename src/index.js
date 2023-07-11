import { header } from "./header.js";
import { footer } from "./footer.js";
import { homepage } from "./homepage.js";
import { menuContainer } from "./menu.js";

const body = document.querySelector('body');
// body.appendChild(header);

body.insertBefore(header, body.firstChild)

// const mainContent = document.createElement('div');
// mainContent.classList.add('main-content');
// mainContent.appendChild(menuContainer);

// body.appendChild(mainContent);

body.appendChild(footer);
