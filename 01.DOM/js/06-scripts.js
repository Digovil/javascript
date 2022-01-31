const elem = document.querySelector('.contenido-hero h1');


console.log(elem.innerText)     //Si en el CSS - visibility: hidden; no lo va a encontrar
console.log(elem.innerHTML)     //Si lo va a encontrar
console.log(elem.textContent)   //Se trae todo el html

elem.innerText = "Hola"

console.log(elem)

const image = document.querySelector('.card img');
const nameImg = document.querySelectorAll('.contenedor-cards .card img');

console.log(image.outerHTML)

let listImg = []
let aux

for (const iterator of nameImg) {
    aux = iterator.outerHTML.replace('/',"\/")
    listImg.push(aux)
    console.log(aux)
}

listImg.forEach(img=>{
        
    console.log(img)
    
})

