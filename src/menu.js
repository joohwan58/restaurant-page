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

export { menuPage }