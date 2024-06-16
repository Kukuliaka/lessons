// "Строгий режим"
"use.strict"

// Задача №1
// Що потрапить в консоль?

let someVar = 0;
++someVar;

if (someVar) {
	console.log(someVar);
}

// Задача №2
// За допомогою циклу FOR виведіть в консоль 10 рядків:
// Пункт №1
// Пункт №2
// і т.д.

for (let i = 1; i < 11; ++i) {
	console.log(`Пункт №${i}`)
}


// Задача №3
// Що потрапить в консоль ?

if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
	console.log('000');
}

// 40 <= 10 || 15 < 5 && 10 <= 10 || 20 === "20"
// false || false && true || false
// false || false || false


// Задача №4
// Створіть функцію, яка повертає результат ділення числа a на число b з додаванням рядка "Результат ділення: "
// Викличте функцію передаючі різні значення, у тому числі не передаючи зовсім.
// Функція не має повертати NaN, Infinite або помилку 

function calcDiv(a, b) {
	const result = a / b
	if (typeof a === `number` && typeof b === `number` && b !== 0  && !Number.isNaN(result)) {
		return `Результат ділення: ${result}`
	}
	else {
		return `Перевірте дані`
	}
}
calcDiv(8, 4)
console.log(calcDiv(NaN, 7))


// Задача №5
// Створіть масив даних - 5 елементів, один з яких число 10
// Обробіть масив за допомогою методу перебору
// Перевіряйте елемент на відповідність числу 10, та у разі відповідності, виводьте в консоль

const arrayOne = [12, "parrot", 10, "87", false]
console.table(arrayOne)
arrayOne.forEach((item) => {
	if (item === 10) {
		console.log(item)
	}
})

// Oпрацювання теорії

let someString = "Hello, everybody!!!"
for (let i = 0; i < someString.length; ++i){
	console.log(someString[i])
}

let someArray = [22, 8, "rabbit", "445"]
console.log(someArray)
console.log(Array.isArray(someArray))
console.log (someArray.length)
console.log(someArray[2])

for (let i = 0; i < someArray.length; ++i) {
	console.log(someArray[i])
	if (someArray[i] > 100) {
		console.log(someArray[i])
	}
}

someArray.forEach((item, index) => {
	console.log(item)
	console.log(index)
})

someArray.push("book")
console.log(someArray)

console.log (someArray.includes(445))

if (!someArray.includes(34)) {
	someArray.push(34)
	console.log(someArray)
}

let someArrayTwo = ["grey", "green", "red", "blue"]
someArrayTwo.push("yellow")
console.log(someArrayTwo.join(' / '))

const user = {
	age: 18,
	name: "Alexa",
	contact: "*****.gmail.com"
}
console.log(user)
console.table(user)
console.log(user.name)
user.name = "Sandra"
console.log(user.name)
