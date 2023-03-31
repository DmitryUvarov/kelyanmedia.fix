const tabTriggers = document.querySelectorAll('.tabs__title'),
	tabsBody = document.querySelectorAll('.tabs__body');

tabTriggers.forEach(item => {
	item.addEventListener('click', (e) => {
		tabTriggers.forEach(item => item.classList.remove('_tab-active'));
		item.classList.add('_tab-active');
		tabsBody.forEach(item => item.classList.remove('active'));
		tabsBody[item.getAttribute('data-num')].classList.add('active');
	})
});