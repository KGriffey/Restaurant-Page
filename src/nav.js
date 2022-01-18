import {loadHomePage} from './home-load';
import {loadMenuPage} from './menu-load';
import {loadContactPage} from './contact-load';

function changeTab(e) {
    clearPage();
    if (e.target.id === 'home') {
        loadHomePage();
    } else if (e.target.id === 'menu') {
        loadMenuPage();
    } else {
        // loadContactPage();
    }
}

function clearPage() {
    const content = document.querySelector('#content');
    while(content.lastElementChild) {
        content.removeChild(content.lastElementChild);
    }
}

export {changeTab}