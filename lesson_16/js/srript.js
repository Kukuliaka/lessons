
document.addEventListener('click', function (e) {
	const targetElement = e.target;
	if (targetElement.closest('.menu-icon')) {
		document.documentElement.classList.toggle('menu-open');
	}
})
document.addEventListener('click', function (e) {
	const targetElement = e.target;
	if (targetElement.closest('.link-phone')) {
		document.documentElement.classList.toggle('phone-open');
	}
})
document.addEventListener('click', function (e) {
	const targetElement = e.target;
	if (targetElement.closest('.actions-middle-header__icon--search')) {
		document.documentElement.classList.toggle('search-open');
	}
})