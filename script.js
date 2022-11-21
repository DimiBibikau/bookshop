const renderBookshop = () => {

//introducing the element factory function
    const elementFactory = (tag, className, parentNode, index = 0) => {
        const element = document.createElement(tag);
        element.classList.add(className);
        document.querySelectorAll(parentNode)[index].append(element);
    }
//introduce the book cards factory function
    const bookFactory = (book, data, parentNode) => {
        elementFactory('div', 'book', parentNode);
        elementFactory('img', 'book__image', '.book', book);
        elementFactory('div', 'title__box', '.book', book);
        elementFactory('h4', 'book__title', '.title__box', book);
        elementFactory('p', 'book__author', '.title__box', book);
        elementFactory('p', 'book__price', '.book', book);
        elementFactory('div', 'button__box', '.book', book);
    // create buttons
        elementFactory('button', 'button__info', '.button__box', book);
        document.querySelectorAll('.button__info')[book].innerHTML = 'Show more';
        elementFactory('button', 'button__add', '.button__box', book);
        document.querySelectorAll('.button__add')[book].innerHTML = 'Add to the cart'
    // creating the pop-up
        elementFactory('div', 'book__pop-up', '.book', book);
        elementFactory('div', 'button__close-round__box', '.book__pop-up', book);
        elementFactory('h4', 'book__title', '.book__pop-up', book);
        elementFactory('p', 'book__description', '.book__pop-up', book);
    // create close buttons for the pop-up
        elementFactory('button', 'button__close', '.book__pop-up', book);
        document.querySelectorAll('.button__close')[book].innerHTML = 'Close';
        elementFactory('button', 'button__close-round', '.button__close-round__box', book);
        document.querySelectorAll('.button__close-round')[book].innerHTML = '✗';

    // populating the book card
        document.querySelectorAll('.book__image')[book].src = data[book].imageLink;
        document.querySelectorAll('.book__image')[book].alt = data[book].title;
        document.querySelectorAll('.book__title')[book].innerHTML = data[book].title;
        document.querySelectorAll('.book__author')[book].innerHTML = data[book].author;
        document.querySelectorAll('.book__price')[book].innerHTML = `Price: ${data[book].price} $`;

        // populating the pop-up
        document.querySelectorAll('.book__title')[book].innerHTML = data[book].title;
        document.querySelectorAll('.book__description')[book].innerHTML = data[book].description;
    // actions on the buttons
        const buttonInfoArray = document.querySelectorAll('.button__info');
        const buttonCloseArray = document.querySelectorAll('.button__close');
        const buttonCloseRoundArray = document.querySelectorAll('.button__close-round');

        for(let [index, buttonElem] of buttonInfoArray.entries()) {
            buttonElem.addEventListener('click', () => {
                document.querySelectorAll('.book__pop-up')[index].classList.add('active');
                document.querySelector('.background-dim').classList.add('active');
                document.querySelector('body').style.overflow = 'hidden';
                document.querySelector('.background-dim').addEventListener(('click'), () => {
                    document.querySelectorAll('.book__pop-up')[index].classList.remove('active');
                    document.querySelector('.background-dim').classList.remove('active');
                    document.querySelector('body').style.overflow = 'visible';
                })
            })
        }

        for(let [index, buttonElem] of buttonCloseArray.entries()) {
            buttonElem.addEventListener('click', () => {
                document.querySelectorAll('.book__pop-up')[index].classList.remove('active');
                document.querySelector('.background-dim').classList.remove('active');
                document.querySelector('body').style.overflow = 'visible';
            })
        }

        for(let [index, buttonElem] of buttonCloseRoundArray.entries()) {
            buttonElem.addEventListener('click', () => {
                document.querySelectorAll('.book__pop-up')[index].classList.remove('active');
                document.querySelector('.background-dim').classList.remove('active');
                document.querySelector('body').style.overflow = 'visible';
            })
        }
        // return this;
    }

//creating basic doc structure
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
//creating basic page structure
//header
    elementFactory('div', 'background-dim', 'body');
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
//book catalog section
    elementFactory('section', 'book-cards', 'body');
    document.querySelector('.book-cards').id = 'catalog';
    elementFactory('div', 'wrapper__book-cards', '.book-cards');
    elementFactory('div', 'book-catalog', '.wrapper__book-cards')
// shopping cart
    elementFactory('section', 'shopping-cart', 'body');
    document.querySelector('.shopping-cart').id = 'shopping-cart';
    elementFactory('div', 'wrapper__shopping-cart', '.shopping-cart');
    elementFactory('div', 'shopping-cart__contents', '.wrapper__shopping-cart');

    elementFactory('h3', 'shopping-cart__list', '.shopping-cart__contents');
    document.querySelector('.shopping-cart__list').textContent = 'Your order:';

    elementFactory('div', 'shopping-cart__cart', '.shopping-cart__contents');

    elementFactory('h3', 'shopping-cart__price', '.shopping-cart__contents');
    document.querySelector('.shopping-cart__price').textContent = `Price: $`;

    elementFactory('button', 'button__checkout', '.shopping-cart__contents');
    const buyButton = document.querySelector('.button__checkout');
    buyButton.textContent = 'Confirm order';
    buyButton.type = 'button';
    buyButton.addEventListener('click', () => {
        document.querySelector('.checkout-form__layout').style.display= 'flex';
    })
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

            const buttonAddArray = document.querySelectorAll('.button__add');
            let purchase = 0;

            for(let [index, buttonElem] of buttonAddArray.entries()) {
                buttonElem.addEventListener('click', () => {
                    const bookCatalog = document.querySelectorAll('.book')[index];
                    const bookShoppingCart = bookCatalog.cloneNode(true);

                    bookShoppingCart.classList.add('book__shopping-cart');
                    bookShoppingCart.classList.remove('book');

                    const bookShoppingCartButtons = bookShoppingCart.querySelector('.button__box');
                    bookShoppingCartButtons.style.display = 'none';

                    let otherPrice = bookShoppingCart.querySelector('.book__price').textContent;
                    let bookPrice = +otherPrice.replace(/\D/g, '');
                    purchase += bookPrice;

                    document.querySelector('.shopping-cart__cart').classList.add('active');
                    document.querySelector('.shopping-cart__cart').append(bookShoppingCart);
                })
            }
            // console.log(purchase);
// adding draggability to the books
            const shoppingCart = document.querySelector('.shopping-cart__cart');
            const booksDraggable = document.querySelectorAll('.book');

            booksDraggable.forEach(draggableBook => {
                draggableBook.setAttribute('draggable', true);
            })

            booksDraggable.forEach(draggableBook => {
                draggableBook.addEventListener('dragstart', () => {
                    draggableBook.classList.add('dragging');
                    console.log('drag start');
                })

                draggableBook.addEventListener('dragend', () => {
                    draggableBook.classList.remove('dragging');
                    console.log('drag end');
                })
            })

            shoppingCart.addEventListener('dragend', e => {
                e.preventDefault();
                draggableBook.classList.remove('dragging');
                draggable = document.querySelectorAll('.dragging');
                shoppingCart.append(draggable)
            })
        })
// checkout from
    elementFactory('section', 'checkout-form', 'body');
    document.querySelector('.checkout-form').id = 'checkout-form';
    elementFactory('div', 'wrapper__checkout-form', '.checkout-form');

    const checkoutForm = document.querySelector('.checkout-form__layout');
    document.querySelector('.wrapper__checkout-form').append(checkoutForm);

    elementFactory('button', 'button__form-complete', '.checkout-form__layout');
    const submitButton = document.querySelector('.button__form-complete');
    submitButton.type = 'submit';
    submitButton.innerHTML = 'Complete';
//footer
    elementFactory('footer', 'footer', 'body');
    elementFactory('div', 'wrapper__footer', '.footer');
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

