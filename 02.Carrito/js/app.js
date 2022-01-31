

//Creando variables
const carrito       = document.querySelector('#carrito'); //Selecciona la caja que contiene el id
const contentCar    = document.querySelector('#lista-carrito tbody'); //Selecciona la etiqueta tbody que esta dentro de la caja lista-carrito
const vacearCar     = document.querySelector('#vaciar-carrito'); //Selecciona el botón que vacea el carrito
const listaCursos   = document.querySelector('#lista-cursos'); //Contenedor de las tarjetas
let   articlesCar   = [] //Sirve para llenar el carrito

//Cargando oyente de eventos
loadingEventListerners();
function loadingEventListerners(){
    //Cuando agregas un curso presionando "Agregar al carrito"
    listaCursos.addEventListener('click',agregarCurso);
    //Vaciando carrito
    vacearCar.addEventListener('click',(e)=>{
        e.preventDefault();
        articlesCar   = [];
        limpiarContentCar();
    });
    carrito.addEventListener('click',eliminarCurso);

}

//Funciones
function agregarCurso(e){
    e.preventDefault();
    // console.log(e.target.classList) para poder ver las clases
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;

        leerDatosCurso(cursoSeleccionado);
    }
}

//Lee el contido del html al cual le dimos click y extrae la información del curso
function leerDatosCurso(curso){
    // console.log(curso)
    //Crear objeto con el contenido del curso actual
    let bandera = false;
    const infCurso = {
        imagen  : curso.querySelector('img').src,
        titulo  : curso.querySelector('h4').textContent,
        precio  : curso.querySelector('.precio span').textContent,
        id      : curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    articlesCar.forEach( (element,i) => {
        if(element.id === infCurso.id){
            articlesCar[i].cantidad +=1
            bandera = true;
        }
    });

    if(!bandera){
        articlesCar = [...articlesCar,infCurso]
    }
    
    //Agregando elementos al arreglo de carrito

    muestraHtml();
}

//Muestra el carrito de compras en el html
function muestraHtml(){

    //Limpiar html
    limpiarContentCar();

    articlesCar.forEach(curso =>{
        const {imagen,titulo,precio,cantidad,id} = curso;
        const row = document.createElement('tr');

        row.innerHTML = `   
            <td> <img src="${imagen}" width="50"> </td>
            <td style="font-size: 9px;"> ${titulo} </td>
            <td style="font-size: 9px;"> ${precio} </td>
            <td style="font-size: 9px;"> ${cantidad} </td>
            <td> <a href="#" class="borrar-curso" data-id="${id}"> x </a> </td>
            
        `
        //Agrega el html del carrito en el tbody
        contentCar.appendChild(row);

    });
}


function limpiarContentCar(){
    //Forma lenta
    //contentCar.innerHTML = "";

    while(contentCar.firstChild){
        contentCar.removeChild(contentCar.firstChild)
    }
}

function eliminarCurso(e){
    if(e.target.classList.contains("borrar-curso")){
        const id = e.target.getAttribute('data-id');

        articlesCar = articlesCar.filter(curso => curso.id !== id);
        muestraHtml();
    }
}