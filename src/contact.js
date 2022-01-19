function loadContactPage() {
    // Grab the content container in the DOM
    const content = document.querySelector('#content');

    const main = document.createElement('main');
    main.classList.add('main');
    main.setAttribute('id', 'main');

    const contact = document.createElement('div');
    contact.classList.add('contact-info');

    const address = document.createElement('p');
    address.classList.add('address');
    address.textContent = 'Address:' + '\r\n' + '123 Sicilian Court' + '\r\n' + 'Denver' + '\r\n' + 'Colorado 80000' + '\r\n' + 'United States';

    const phoneNumber = document.createElement('p');
    phoneNumber.classList.add('phone');
    phoneNumber.textContent = 'Phone:' + '\r\n' + '+11234567890';

    const email = document.createElement('p');
    email.classList.add('email');
    email.textContent = 'Email:' + '\r\n' + 'real.email@gmail.com';
    
    contact.appendChild(address);
    contact.appendChild(phoneNumber);
    contact.appendChild(email);
    main.appendChild(contact);
    content.appendChild(main);
}

export {loadContactPage};