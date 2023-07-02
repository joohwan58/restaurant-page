import { header } from "./header.js";
import { footer } from "./footer.js";

const body = document.querySelector('body');
// body.appendChild(header);
body.insertBefore(header, body.firstChild);//temporary, for testing

body.appendChild(footer);