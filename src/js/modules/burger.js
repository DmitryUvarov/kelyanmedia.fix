const html = document.querySelector('html'),
    checkbox = document.querySelector('.checkbox1'),
    burger = document.querySelector('.burger'),
    round = document.querySelector('.round'),
    headerMain = document.querySelector('.header__main');

checkbox.addEventListener('click', () => {
    checkbox.classList.toggle('active');
    html.classList.toggle('active');
    burger.classList.toggle('active');
    round.classList.toggle('active');
    headerMain.classList.toggle('active');
});



document.addEventListener('DOMContentLoaded', () => {
    const htmlTag = document.documentElement;

    htmlTag.addEventListener('click', (event) => {
        const eventTarget = event.target

        if (eventTarget.closest('.burger-blog-btn')) {
            htmlTag.classList.toggle('menu-open-blog')
        }

        if (eventTarget.closest('.search-btn')) {

            if (htmlTag.closest('.menu-open-blog')) {
                htmlTag.classList.remove('menu-open-blog')
            }

            htmlTag.classList.toggle('search-active')
        }

        if (eventTarget.closest('.close-search')) {
            htmlTag.classList.remove('search-active')
        }

    })


})

