function clearPage() {
    const content = document.querySelector('#content');
    while(content.lastElementChild) {
        content.removeChild(content.lastElementChild);
    }
}

export {clearPage};