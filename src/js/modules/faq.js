const faqBtns = document.querySelectorAll('.faq__header');

faqBtns.forEach(item => {
	item.addEventListener('click', (e) => {
		const faqText = item.nextElementSibling;
		if (faqText.style.maxHeight) {
			faqBtns.forEach(item => {
				item.classList.remove('active');
			});
			document.querySelectorAll('.faq__text').forEach((text) => {
				text.style.maxHeight = null
				text.style.padding = 0;
				faqText.style.marginBottom = '0';
			});
		} else {
			faqBtns.forEach(item => {
				item.classList.remove('active');
			});
			document.querySelectorAll('.faq__text').forEach((text) => {
				text.style.maxHeight = null
				text.style.padding = 0;
				faqText.style.marginBottom = '0';
			});

			item.classList.add('active');
			faqText.style.maxHeight = faqText.scrollHeight + 40 + 'px';
			faqText.style.padding = '20px';
			faqText.style.paddingBottom = '0';
			faqText.style.marginBottom = '20px';
		}
	});
});