import {loadHeader} from './header-load';
import {loadFooter} from './footer-load';

function loadHomePage() {
    // Load the header
    loadHeader();

    // Grab the content container in the DOM
    const content = document.querySelector('#content');

    // Load the footer
    loadFooter();
}

export {loadHomePage};