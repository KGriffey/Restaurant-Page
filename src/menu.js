import menuData from './menu.json5';
import pizza from './images/pizza.jpg';
import pasta from './images/pasta.jpg';
import espresso from './images/espresso.jpg';
import wine from './images/wine.jpg';
import cannoli from './images/cannoli.jpg';
import tiramisu from './images/tiramisu.jpg';

function loadMenuPage() {
    // Grab the content container in the DOM
    const content = document.querySelector('#content');
    
    const main = document.createElement('main');
    main.classList.add('main');
    main.setAttribute('id', 'main');

    const container = document.createElement('div');
    container.classList.add('container');
    container.setAttribute('id', 'menu');

    const entrees = document.createElement('div');
    entrees.classList.add('menu');
    entrees.setAttribute('id', 'entree-menu');
    const entreesLabel = document.createElement('h2');
    entreesLabel.classList.add('menu-label');
    entreesLabel.textContent = 'entrees';
    entrees.appendChild(entreesLabel);

    const drinks = document.createElement('div');
    drinks.classList.add('menu');
    drinks.setAttribute('id', 'drink-menu');
    const drinksLabel = document.createElement('h2');
    drinksLabel.classList.add('menu-label');
    drinksLabel.textContent = 'drinks';
    drinks.appendChild(drinksLabel);

    const desserts = document.createElement('div');
    desserts.classList.add('menu');
    desserts.setAttribute('id', 'dessert-menu');
    const dessertsLabel = document.createElement('h2');
    dessertsLabel.classList.add('menu-label');
    dessertsLabel.textContent = 'desserts';
    desserts.appendChild(dessertsLabel);

    // Loop over and generate a div for each menu item
    const imageSources = [pizza, pasta, espresso, wine, cannoli, tiramisu];
    for (let i = 0; i < menuData.length; i++) {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        const menuItemName = document.createElement('h3');
        menuItemName.classList.add('item-name');
        menuItemName.textContent = menuData[i].name;
        const menuItemDesc = document.createElement('p');
        menuItemDesc.classList.add('item-description');
        menuItemDesc.textContent = menuData[i].description;
        const menuItemImg = document.createElement('img');
        menuItemImg.classList.add('item-image');
        menuItemImg.src = imageSources[i];
        menuItemImg.alt = menuData[i].name;
        menuItem.appendChild(menuItemName);
        menuItem.appendChild(menuItemDesc);
        menuItem.appendChild(menuItemImg);

        if (menuData[i].category === 'entree') {
            entrees.appendChild(menuItem);
        } else if (menuData[i].category === 'drink') {
            drinks.appendChild(menuItem);
        } else {
            desserts.appendChild(menuItem);
        }
    }

    container.appendChild(entrees);
    container.appendChild(drinks);
    container.appendChild(desserts);
    main.appendChild(container);
    content.appendChild(main);
}

export {loadMenuPage};