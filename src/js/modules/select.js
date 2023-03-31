const selectHeaders = document.querySelectorAll('.select__header'),
	selectItem = document.querySelectorAll('.select__item'),
	selectBody = document.querySelectorAll('.select__body');

selectHeaders.forEach(item => {
	item.addEventListener('click', selectToggle);
});

selectItem.forEach(item => {
	item.addEventListener('click', selectChoose);
});

function selectToggle() {
	this.nextElementSibling.classList.toggle('active');
}

function selectChoose() {
	let text = this.innerHTML,
		currentText = this.closest('.select').querySelector('.select__current');

	currentText.innerHTML = text;
	selectBody.forEach(item => item.classList.remove('active'));
}