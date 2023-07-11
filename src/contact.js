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

export { contactPage };