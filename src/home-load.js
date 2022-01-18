import {loadHeader} from './header-load';
import {loadFooter} from './footer-load';
import Image from './images/pizza-chef.jpg';

function loadHomePage() {
    // Load the header
    loadHeader();

    // Grab the content container in the DOM
    const content = document.querySelector('#content');
    
    const main = document.createElement('main');
    main.classList.add('main');
    main.setAttribute('id', 'main');

    const headline = document.createElement('p');
    headline.textContent = 'Not your Nonno\'s pizza!'

    const image = document.createElement('img');
    image.src = Image;
    image.alt = 'Pizza Chef';

    const quote = document.createElement('div');
    quote.classList.add('quote');
    const quoteText = document.createElement('p');
    quoteText.textContent = 'A great time for the whole family. The food and drinks are delicious. Better than Marino\'s by a mile!';
    const quoteName = document.createElement('span');
    quoteName.textContent = 'Kyle';

    quote.appendChild(quoteText);
    quote.appendChild(quoteName);
    main.appendChild(headline);
    main.appendChild(image);
    main.appendChild(quote);
    content.appendChild(main);

    // Load the footer
    loadFooter();
}

export {loadHomePage};