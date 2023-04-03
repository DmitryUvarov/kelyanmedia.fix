
     function menuInit() {
        if (document.querySelector(".hamburger ")) {
            document.addEventListener("click", function (e) {
                if (e.target.closest('.hamburger ')) {
                    document.documentElement.classList.toggle("menu-open");
                }
            });
        };
    }
    export function menuOpen() {
        document.documentElement.classList.add("menu-open");
    }
    export function menuClose() {
        document.documentElement.classList.remove("menu-open");
    }
    menuInit()

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

