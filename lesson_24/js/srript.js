// "Строгий режим"
"use.strict"

// Задача №1
// Дано в html: три елементи з класом item.
// При кліку на кожен з елментів додати клас active,
// при повторному кліку прибрати клас 

function documentAction(event) {
	const elementTarget = event.target
	if (elementTarget.closest('.item')) {
		const currentElement = elementTarget.closest('.item')
		currentElement.classList.toggle('active')
	}
}
document.addEventListener("click", documentAction)


// Задача №2
// Дано в css/scss: body прозорий
// При повному завантаженню сторінки додати клас до body який прибирає прозорість.

const bodyElement = document.querySelector('body')
window.addEventListener("load", pageLoaded)
function pageLoaded(event) {
	bodyElement.classList.add('loaded')
}

// Задача №3
// Дано в html: header main footer
// Пpи наведенні курсору на header змінювати колір фону у footer.
// Коли курсор йде з header повертати початковий фон для footer.

const header = document.querySelector('.header')
const footer = document.querySelector('.footer')
header.addEventListener("mouseenter", changeColor)
header.addEventListener("mouseleave", changeColorBack)
function changeColor(event) {
	footer.classList.add('background')
}
function changeColorBack(event) {
	footer.classList.remove('background')
}

// Задача №4
// Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпорта.
// Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
// Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
// Функція має запускатись коли ми доскролюємо до елементу item (його видно), і не запускатись повторно.

let i = 1
const count = document.querySelector(".count")
const speed = parseFloat(count.dataset.speed) || 200
const limit = parseFloat(count.dataset.limit) || 20

const options = {
	root: null,
	rootMargin: "0px 0px 0px 0px",
	threshold: 1,
}

const callback = (entries, observer) => {
	entries.forEach(entry => {
		const currentElement = entry.target
		if (entry.isIntersecting) {
			let timer = setInterval(() => {
				count.innerHTML = i
				// console.log(i)
				i === limit ? clearInterval(timer) : null
				++i
			}, speed)
			}
	})
}

const observer = new IntersectionObserver(callback, options)

const target = document.querySelector('.count')
observer.observe(target)


// опрацювання теорії

// const options = {
// 	root: null,
// 	rootMargin: "0px 0px 0px 0px",
// 	threshold: 0,
// }

// const callback = (entries, observer) => {
// 	entries.forEach(entry => {
// 		const currentElement = entry.target
// 		if (entry.isIntersecting) {
// 			currentElement.classList.add('animate')
// 		} else {
// 			currentElement.classList.remove('animate')
// 		}
// 	})
// }

//const observer = new IntersectionObserver(callback, options)

// const animElements = document.querySelectorAll(".problem__answer")
// animElements.forEach(animElement => {
// 	observer.observe(animElement)
// })

// const target = document.querySelector('.problem__answer')
// observer.observe(target)
