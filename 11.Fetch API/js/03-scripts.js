const cargarJONArray = document.querySelector("#cargarJONArray");

eventListener();
function eventListener(){

    cargarJONArray.addEventListener('click',obtenerDatos);


}


function obtenerDatos(){
    const url = 'data/empleado.json';

    fetch(url)
        .then(resp => resp.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}