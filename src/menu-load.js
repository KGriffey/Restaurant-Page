import {loadHeader} from './header-load';
import {loadFooter} from './footer-load';
import Menu from './menu.json5';
import Entree1 from './images/pizza.jpg';
import Entree2 from './images/pasta.jpg';
import Drink1 from './images/espresso.jpg';
import Drink2 from './images/wine.jpg';
import Dessert1 from './images/cannoli.jpg';
import Dessert2 from './images/tiramisu.jpg';

function loadMenuPage() {
    // Load the header
    loadHeader();

    // Grab the content container in the DOM
    const content = document.querySelector('#content');
    
    const main = document.createElement('main');
    main.classList.add('main');
    main.setAttribute('id', 'main');

    main.textContent = Menu[0].name;

    content.appendChild(main);
   
    // Load the footer
    loadFooter();
}

export {loadMenuPage};