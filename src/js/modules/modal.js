if (document.querySelector('.modal')) {
    const modal = document.querySelector('.modal'),
        modalTrigger = document.querySelectorAll('.modal-trigger-btn'),
        closeBtn = document.querySelector('.modal__close');

    function openModalWindow() {
        modal.classList.add('active');
        body.classList.add('active-body');
    }

    function closeModalWindow() {
        modal.classList.remove('active');
        body.classList.remove('active-body');
    }

    modalTrigger.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            openModalWindow();
        });
    });

    modal.addEventListener('click', (e) => {
        const target = e.target;

        if ((target === modal)) {
            closeModalWindow();
        }
    });

    closeBtn.addEventListener('click', (e) => {
        closeModalWindow()
    });
}

document.documentElement.addEventListener('click', (e) => {
    const targetElement = e.target;

    if (targetElement.closest('[data-step-next]')) {
         document.querySelector('[data-step="one"]').classList.add('hide')
         document.querySelector('[data-step="two"]').classList.add('show')
    }
    if (targetElement.closest('[data-step-back]')) {
        document.querySelector('[data-step="one"]').classList.remove('hide')
        document.querySelector('[data-step="two"]').classList.remove('show')
    }

    if (!targetElement.closest('.modal-blog.active') && document.querySelector('.modal-blog')) {
        document.querySelector('[data-step="one"]').classList.remove('hide')
        document.querySelector('[data-step="two"]').classList.remove('show')
    }

})