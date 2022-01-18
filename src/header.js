import {changeTab} from './nav';

function loadHeader() {
    // Grab the content container in the DOM
    const content = document.querySelector('#content');

    // Create the header and nav bar
    const header = document.createElement('header');
    header.classList.add('header');
    header.setAttribute('id', 'header');

    const headerText = document.createElement('h1');
    headerText.classList.add('header-text');
    headerText.textContent = 'Mariano\'s Pizza';

    const headerNav = document.createElement('nav');
    headerNav.classList.add('header-nav');

    const navBar = document.createElement('ul');
    navBar.classList.add('nav-bar');

    const navHome = document.createElement('li');
    navHome.setAttribute('class', 'nav-tab');
    navHome.setAttribute('id', 'home');
    navHome.textContent = 'home';
    navHome.addEventListener('click', changeTab);

    const navMenu = document.createElement('li');
    navMenu.setAttribute('class', 'nav-tab');
    navMenu.setAttribute('id', 'menu');
    navMenu.textContent = 'menu';
    navMenu.addEventListener('click', changeTab);

    const navContact = document.createElement('li');
    navContact.setAttribute('class', 'nav-tab');
    navContact.setAttribute('id', 'contact');
    navContact.textContent = 'contact';
    navContact.addEventListener('click', changeTab);

    // Build the DOM
    navBar.appendChild(navHome);
    navBar.appendChild(navMenu);
    navBar.appendChild(navContact);
    headerNav.appendChild(navBar);
    header.appendChild(headerText);
    header.appendChild(headerNav);
    content.appendChild(header);
}

export {loadHeader};

