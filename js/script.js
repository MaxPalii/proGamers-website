// const userName = 'Maks'
// let age
// age = 30
// let favFood = 'Schabowy'

// console.log(`Mam na imię ${userName}, mam ${age} lat i lubię ${favFood}`)

// let x = 8
// let y = 4

// x = x * y
// x = x / y
// x = x % y

// console.log(x);

// let score = 15 % 2
// console.log(`wynik modulo: ${score}`);

// let num1 = 8
// num1++
// num1++
// console.log(num1);

// let x = 5
// let y = 10

// console.log(x*=y);
// console.log(x/=y);

// const passLength = 11

// if (passLength > 10) {
//     console.log(`Masz bardzo dobre hasło!`);
// } else if (passLength >= 5 && passLength <= 10){
//   console.log(`Masz dobre hasło`);
// }else{
//     console.log(`Masz słabe hasło...`);
// }

// let addNumbers = [1, 2, 3, 4, 5, 6]

// for (let i = 0; i < addNumbers.length; i++) {
// 	console.log(addNumbers[i])
// }

// function square(arg1, arg2, arg3) {
// 	console.log(arg1 + arg2 * arg3);
// }
// square(1, 2, 3)

// if (addNumbers.length > 5) {
// 	console.log(`True`)
// } else {
// 	console.log(`False`)
// }

// const btn1 = document.querySelector('#btn1')
// const btn2 = document.querySelector('.btn2')

// function handleClick() {
//     console.log('Kliknięto przycisk nr 1');
// }

// function add() {
//     console.log(2 + 2);
// }

// btn1.addEventListener('click', handleClick)
// btn2.addEventListener('click', add)

// const btn1 = document.querySelector('#btn1')
// const btn2 = document.querySelector('.btn2')
// const square = document.querySelector('.color')
// const removeColor = document.querySelector('.remove-color')

// function redColor() {
// 	square.classList.toggle('red')
// }

// function blueColor() {
// 	square.classList.toggle('blue')
// }

// function deleteColor() {
// 	square.classList.remove('red')
// 	square.classList.remove('blue')
// }

// btn1.addEventListener('click', redColor)
// btn2.addEventListener('click', blueColor)
// removeColor.addEventListener('click', deleteColor)

// const arrowIcon = document.querySelector('.fas')
// const btn = document.querySelector('.arrow')
// const img = document.querySelector('.item1')

// function showImage() {
// 	img.classList.toggle('show')

// 	if (img.classList.contains('show')) {
// 		arrowIcon.style.transform = 'rotate(180deg)'
// 	}else{
// 		arrowIcon.style.transform = 'rotate(0)'
// 	}
// }

// btn.addEventListener('click', showImage)

document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar')
	const allNavItems = document.querySelectorAll('.nav-link')
	const navList = document.querySelector('.navbar-collapse')

	function addShadow() {
		if (window.scrollY >= 300) {
			nav.classList.add('shadow-bg')
		} else {
			nav.classList.remove('shadow-bg')
		}
	}

	allNavItems.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')))

	window.addEventListener('scroll', addShadow)
})
