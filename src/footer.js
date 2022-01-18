function loadFooter() {
    // Grab the content container in the DOM
    const content = document.querySelector('#content');

    // Create the footer
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    footer.setAttribute('id', 'footer');

    const footerText = document.createElement('span');
    footerText.classList.add('footer-text');
    footerText.textContent = 'Copyright \u00A9 2022 Kyle Griffey';

    // Append the footer to the DOM
    footer.appendChild(footerText);
    content.appendChild(footer);
}

export {loadFooter};

