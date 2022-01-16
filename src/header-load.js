function loadHeader() {
    const header = document.querySelector('header');

    const headerText = document.createElement('h1');
    headerText.textContent = 'Mariano\'s Pizza';
    headerText.classList.add('header-text');

    const headerNav = document.createElement('ul');
    headerNav.classList.add('header-nav');

    const navHome = document.createElement('li');
    navHome.setAttribute('id', 'home');
    navHome.textContent = 'menu';
    const navMenu = document.createElement('li');
    navMenu.setAttribute('id', 'menu');
    navMenu.textContent = 'menu';
    const navContact = document.createElement('li');
    navContact.setAttribute('id', 'contact');
    navContact.textContent = 'contact';

    headerNav.appendChild(navHome);
    headerNav.appendChild(navMenu);
    headerNav.appendChild(navContact);
    header.appendChild(headerText);
    header.appendChild(headerNav);
}

export {loadHeader};

