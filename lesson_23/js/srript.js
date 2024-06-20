// "Строгий режим"
"use.strict"

// * Задача №1
// Отримати в константу елемент <body>

const bodyElement = document.body
console.log(bodyElement)

// * Задача №2
// Написати функцію, яка додає в <body> список UL
// з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)

function addUlToBody(n = 4) {
	const someList = document.createElement('ul')
	if (n === Number && n !== 0) return
	for (let i = 0; i < n; ++i) {
		someList.innerHTML += `<li>Пункт №${i + 1}</li>`
	}
	bodyElement.insertAdjacentElement("beforebegin", someList)
}
addUlToBody(8)

// * Задача №3
// Додати до елементу <body> класс loaded.
// Потім перевірити чи є клас loaded у елемента <body>
// і, якщо є, додати стиль кольору тесту зедлений.

const colorFont = bodyElement.color

bodyElement.classList.add('loaded')
if (bodyElement.classList.contains('loaded')) {
	console.log('loaded is')
	bodyElement.style.color = `green`
}
console.log(bodyElement)

// * Задача №4
// Дано в html: три елементи з класом item.
// Треба отримати ці елементи в константу, кожному додати клас active, 
// та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".

const itemElements = document.querySelectorAll('.item')
const itemElement = document.querySelector('.item')
console.log(itemElements)

itemElements.forEach((itemElement, index) => {
	if (itemElements.length) {
		itemElement.classList.add('active')
		itemElement.textContent = `Елемент №${index + 1}`
	}
})

// * Задача №5
// Дано в html: текст, далі кнопка з класом button.
// Треба прокрутити скрол сторінки до кнопки

const button = document.querySelector('.button')
if (button) {
	function scrollToBlock(element) {
	element.scrollIntoView({
		block: "end",
		inline: "nearest",
		behavior: "smooth"
	})
}
scrollToBlock(button)
}

// * Задача №6
// Дано в html: посилання з класом link
// Треба додати до посилання дата атрибут зі значенням 100
// Потім отримати значення aтрибуту, та, якщо значення меньше 200
// пофарбувати колір тексту посилання в червоний

const link = document.querySelector('.link')
link.setAttribute('data', "100")

const linkAttribute = parseInt(link.getAttribute('data'))
console.log(linkAttribute)
if (linkAttribute < 200) {
	link.style.color = 'red'
}


// опрацювання теорії


const firstBodyElement = bodyElement.firstElementChild
console.log(firstBodyElement)
const lastBodyElement = bodyElement.lastElementChild
console.log(lastBodyElement)
const childNodes = bodyElement.children
console.log(childNodes)

for (let childNode of childNodes) {
	console.log(childNode)
}
const previousElementBody = bodyElement.previousElementSibling
console.log(previousElementBody)


const someElement = document.querySelector('.problem__title')
if (someElement) {
	console.log(someElement)
}

const parentDocument = someElement.parentElement
console.log(parentDocument)

const closestElement = someElement.closest('.page')
console.log(closestElement)

const someElements = document.querySelectorAll('[class*="__title"]')
if (someElements.length) {
	console.log(someElements)
	console.log(someElements.length)
}

const listElement = document.querySelector('.list__item')
console.log(listElement)
const listElements = document.querySelectorAll('li.list__item')
console.log(listElements)

listElements.forEach((listElement, index) => {
	console.log(listElement.innerHTML)
	listElement.innerHTML = `Hello, guy ${index}`
	// listElement.textContent = '<span>Hello</span>'
})

const list = document.querySelector('.list')
console.log(list)


const pageText = document.querySelector('.page__text')
let someObject = document.createElement ('div')
someObject.innerHTML = `<span>Привіт, ментор!</span><span>Дякую за перевірку</span>`

console.log(someObject)
pageText.insertAdjacentElement("afterbegin", someObject)

const windowWidth = window.innerWidth
const windowHeight = window.innerHeight
const windowClientWidth = bodyElement.ClientWidth
const windowClientHeight = bodyElement.clientHeight
console.log(windowWidth)
console.log(windowHeight)
console.log(windowClientWidth)
console.log(windowClientHeight)

function addUl(n = 2) {
	const someUl = document.createElement('ul')
	if (n === Number && n !== 0) return
	for (let i = 0; i < n; ++i) {
		const someItem = document.createElement('li')
		someItem.textContent = `Item №${i + 1}`
		someUl.append(someItem)
	}
	document.body.append(someUl)
}
addUl(4)
