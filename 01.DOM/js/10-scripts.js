const enlace  = document.createElement('a');

// Agregandole el nuevo enlace
enlace.textContent = 'Nuevo enlace';

// Añadiendo href
enlace.href = '\/nuevo-enlace'

enlace.target = '_blank'

enlace.setAttribute('data-enlance','nuevo-enlace') //Para agregar atributos personalizados

enlace.classList.add('alguna-clase') //Para agregar una clase

console.log(enlace)

enlace.onclick = miFuncion;

//Seleccionar la navegación
const nav = document.querySelector('.navegacion')

nav.appendChild(enlace) //Añadir hijo de navegación 
console.log(nav.children) //Para mostrar donde queda 
nav.insertBefore(enlace,nav.children[1]) //Insertando enlace antes de la posición número uno.


function miFuncion(){
    alert('Diste click')
}

//Creando CARD

const parrafo1 = document.createElement('p')
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria','concierto')