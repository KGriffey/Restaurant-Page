import PizzaChef from './images/pizza-chef.jpg';

function loadHomePage() {
    // Grab the content container in the DOM
    const content = document.querySelector('#content');
    
    const main = document.createElement('main');
    main.classList.add('main');
    main.setAttribute('id', 'main');

    const container = document.createElement('div');
    container.classList.add('container');
    container.setAttribute('id', 'home');

    const headline = document.createElement('p');
    headline.classList.add('headline');
    headline.textContent = 'Not your Nonno\'s pizza!'

    const image = document.createElement('img');
    image.src = PizzaChef;
    image.alt = 'Pizza Chef';

    const quote = document.createElement('div');
    quote.classList.add('quote');
    const quoteText = document.createElement('p');
    quoteText.textContent = '"A great time for the whole family. The food and drinks are delicious. Better than Marino\'s by a mile!"';
    const quoteName = document.createElement('span');
    quoteName.textContent = '- Kyle';

    quote.appendChild(quoteText);
    quote.appendChild(quoteName);
    container.appendChild(headline);
    container.appendChild(image);
    container.appendChild(quote);
    main.appendChild(container);
    content.appendChild(main);
}

export {loadHomePage};