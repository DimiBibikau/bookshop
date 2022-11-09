'use strict';


const renderBookshop = () => {
    //fetching the books json
    fetch('./books.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            for (let book in data) {
                console.log(data[book].author);
            }
        })
    //introducing the tag factory function
    const tagFactory = (tag, className, parentTag, indexParentTag = 0) => {
        const element = document.createElement(tag);
        element.classList.add(className);
        document.querySelectorAll(parentTag)[indexParentTag].append(element);
    }
//creating basic page structure
// head
    tagFactory('title', 'title', 'head');
    document.querySelector('.title').innerHTML = 'Bookshop'
    tagFactory('link', 'styles', 'head');
    document.querySelector('.styles').href = 'style.css';
    document.querySelector('.styles').rel = 'stylesheet';
    tagFactory('link', 'normalize', 'head');
    document.querySelector('.normalize').href = 'normalize.css';
    document.querySelector('.normalize').rel = 'stylesheet';
//header
    tagFactory('header', 'header', 'body');
    tagFactory('div', 'wrapper__header', '.header');
    tagFactory('div', 'header__contents', '.wrapper__header');
    tagFactory('img', 'logo__header', '.header__contents');
    document.querySelector('.logo__header').src = './assets/icons/logo_bookshop.png';
    tagFactory('h1', 'h1', '.header__contents');
    document.querySelector('.h1').textContent = 'Welcome to the JS bookshop!';
//book cards section
    tagFactory('section', 'book-cards', 'body');
    tagFactory('div', 'wrapper__book-cards', '.book-cards');
    tagFactory('div', 'wrapper__book-cards', '.book-cards')
//footer
    tagFactory('footer', 'footer', 'body');
    tagFactory('div', 'wrapper__footer', '.footer')
    tagFactory('div', 'footer__contents', '.wrapper__footer');
    tagFactory('img', 'rs-logo__footer', '.footer__contents');
    document.querySelector('.rs-logo__footer').src = './assets/icons/rss.svg';
    tagFactory('p', 'AD__footer', '.footer__contents');
    document.querySelector('.AD__footer').textContent = '2022';
    tagFactory('a', 'author__footer', '.footer__contents');
    document.querySelector('.author__footer').textContent = 'DimiBibikau';
    document.querySelector('.author__footer').href = 'https://github.com/DimiBibikau';
}

renderBookshop()