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

export { homepage }