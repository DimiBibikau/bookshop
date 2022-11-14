const renderBookshop = () => {

//introducing the element factory function
    const elementFactory = (tag, className, parentNode, index = 0) => {
        const element = document.createElement(tag);
        element.classList.add(className);
        document.querySelectorAll(parentNode)[index].append(element);
    }
//introducing the book cards factory function
    const bookFactory = (book, data, parentNode) => {
        elementFactory('article', 'book', parentNode);
        elementFactory('img', 'book__image', '.book', book);
        elementFactory('h4', 'book__title', '.book', book);
        elementFactory('p', 'book__author', '.book', book);
        elementFactory('p', 'book__price', '.book', book);
        elementFactory('div', 'button__box', '.book', book);
        elementFactory('button', 'button__info', '.button__box', book);
        document.querySelectorAll('.button__info')[book].innerHTML = 'Show more';
        elementFactory('button', 'button__add', '.button__box', book);
        document.querySelectorAll('.button__add')[book].innerHTML = 'Add to the cart'

// populating the book card stags
        document.querySelectorAll('.book__image')[book].src = data[book].imageLink;
        document.querySelectorAll('.book__image')[book].alt = data[book].title;
        document.querySelectorAll('.book__title')[book].innerHTML = data[book].title;
        document.querySelectorAll('.book__author')[book].innerHTML = data[book].author;
        document.querySelectorAll('.book__price')[book].innerHTML = `Price: ${data[book].price} $`;

        // return this;
    }
//creating basic page structure
// head
    elementFactory('title', 'title', 'head');
    document.querySelector('.title').innerHTML = 'Bookshop'
    elementFactory('link', 'styles', 'head');
    document.querySelector('.styles').href = 'style.css';
    document.querySelector('.styles').rel = 'stylesheet';
    elementFactory('link', 'normalize', 'head');
    document.querySelector('.normalize').href = 'normalize.css';
    document.querySelector('.normalize').rel = 'stylesheet';
    elementFactory('link', 'favicon', 'head');
    document.querySelector('.favicon').href = '/assets/icons/favicon.svg'; // something is wrong!
    document.querySelector('.favicon').rel = 'icon';
//header
    elementFactory('header', 'header', 'body');
    elementFactory('div', 'wrapper__header', '.header');
    elementFactory('div', 'header__contents', '.wrapper__header');
    elementFactory('img', 'logo__header', '.header__contents');
    document.querySelector('.logo__header').src = './assets/icons/logo_bookshop.png';
    elementFactory('div', 'header__nav', '.header__contents');
    elementFactory('a', 'header__nav__catalog', '.header__nav');
    document.querySelector('.header__nav__catalog').innerHTML = 'Catalog';
    document.querySelector('.header__nav__catalog').href = '#catalog';
    elementFactory('a', 'header__nav__shopping-cart', '.header__nav');
    document.querySelector('.header__nav__shopping-cart').innerHTML = 'Shopping cart';
    document.querySelector('.header__nav__shopping-cart').href = '#shopping-cart'
    elementFactory('a', 'header__nav__checkout-form', '.header__nav');
    document.querySelector('.header__nav__checkout-form').innerHTML = 'Checkout';
    document.querySelector('.header__nav__checkout-form').href = '#checkout-form';
    elementFactory('h1', 'h1', '.header__contents');
    document.querySelector('.h1').textContent = 'Welcome to the JS bookshop!';
    // possibly include navigation?
//book catalog section
    elementFactory('section', 'book-cards', 'body');
    document.querySelector('.book-cards').id = 'catalog';
    elementFactory('div', 'wrapper__book-cards', '.book-cards');
    elementFactory('div', 'book-catalog', '.wrapper__book-cards')
    //fetching the books json
    const bookCatalog = {}
    fetch('./books.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            for(let book in data) {
                bookFactory(book, data, '.book-catalog');
            }
        })
// shopping cart
    elementFactory('section', 'shopping-cart', 'body');
    document.querySelector('.shopping-cart').id = 'shopping-cart';
    elementFactory('div', 'wrapper__shopping-cart', '.shopping-cart');
    elementFactory('div', 'shopping-cart__contents', '.wrapper__shopping-cart');

    elementFactory('h3', 'shopping-cart__list', '.shopping-cart__contents');
    document.querySelector('.shopping-cart__list').textContent = 'Your order:';

    elementFactory('h3', 'shopping-cart__price', '.shopping-cart__contents');
    document.querySelector('.shopping-cart__price').textContent = `Price: $`;

    elementFactory('button', 'button__checkout', '.shopping-cart__contents');
    document.querySelector('.button__checkout').textContent = 'Buy';
    document.querySelector('.button__checkout').type = 'submit';
// checkout from
    elementFactory('section', 'checkout-form', 'body');
    document.querySelector('.checkout-form').id = 'checkout-form';
    elementFactory('div', 'wrapper__checkout-form', '.checkout-form');
    const checkoutForm = document.querySelector('.checkout-form__layout');
    document.querySelector('.wrapper__checkout-form').append(checkoutForm)
    elementFactory('button', 'button__form-complete', '.checkout-form__layout');
    document.querySelector('.button__form-complete').type = 'submit';
    document.querySelector('.button__form-complete').innerHTML = 'Submit';

//footer
    elementFactory('footer', 'footer', 'body');
    elementFactory('div', 'wrapper__footer', '.footer')
    elementFactory('div', 'footer__contents', '.wrapper__footer');

    elementFactory('a', 'rs-logo__footer', '.footer__contents');
    document.querySelector('.rs-logo__footer').href = 'https://rs.school/js-en/';
    document.querySelector('.rs-logo__footer').innerHTML = '<img class="rs-logo__footer" alt="RS logo" src = "./assets/icons/rss.svg">';

    elementFactory('p', 'AD__footer', '.footer__contents');
    document.querySelector('.AD__footer').textContent = '2022';

    elementFactory('a', 'author__footer', '.footer__contents');
    document.querySelector('.author__footer').textContent = 'DimiBibikau';
    document.querySelector('.author__footer').href = 'https://github.com/DimiBibikau';
}

renderBookshop()