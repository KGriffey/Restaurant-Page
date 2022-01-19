import {loadHeader} from './header';
import {loadFooter} from './footer';
import {loadHomePage} from './home';
import {loadMenuPage} from './menu';
import {loadContactPage} from './contact';
import {clearPage} from './util';

function changeTab(e) {
    clearPage();
    loadHeader();

    if (e.target.id === 'home') {
        loadHomePage();
    } else if (e.target.id === 'menu') {
        loadMenuPage();
    } else {
        loadContactPage();
    }

    loadFooter();
}

function loadInit() {
    loadHeader();
    loadHomePage();
    loadFooter();
}

export {changeTab, loadInit}