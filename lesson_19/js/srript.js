
document.addEventListener('click', function (e) {
	const targetElement = e.target;
	if (targetElement.closest('.menu-icon')) {
		document.documentElement.classList.toggle('menu-open');
	}
})

function documentAction(event) {
	const elementTarget = event.target
	if (elementTarget.closest('.top-header__btn')) {
		const currentItem = document.querySelector('.top-header__form')
		currentItem.classList.toggle('input-open')
	}
}
document.addEventListener("click", documentAction)


const arrowUp = document.querySelector('.bottom-footer__scroll-up')
arrowUp.addEventListener('click', function(e) {
	const targetElement = e.target
	if (targetElement.closest('.bottom-footer__scroll-up'))
		window.scrollTo({
			top: 0,
			let: 0,
			behavior: "smooth"
		})
})

