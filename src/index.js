import { header } from "./header.js";

const body = document.querySelector('body');
// body.appendChild(header);
body.insertBefore(header, body.firstChild);//temporary, for testing