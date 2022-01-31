//Traversing the DOM 

const navegation = document.querySelector('nav.navegacion');

console.log(navegation.firstElementChild)//Primer elemento
console.log(navegation.firstElementChild.nextElementSibling)
console.log(navegation.lastElementChild)//Ultimo elemento

console.log(navegation.childNodes)//Los espacios en blanco se convierten en elemento
console.log(navegation.children)

console.log(navegation.children[0])

const card = document.querySelector('.card')

console.log(card.children[1].children);//Va al hijo
console.log(card.parentElement.parentElement);//Va al padre

console.log(card.nextElementSibling)//El siguiente elemento
console.log(card.previousElementSibling)//El siguiente elemento