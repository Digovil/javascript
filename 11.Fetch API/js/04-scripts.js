const cargarAPI = document.querySelector("#cargarAPI");

eventListener();
function eventListener(){

    cargarAPI.addEventListener('click',obtenerDatos);


}


function obtenerDatos(){
    const url = 'https://picsum.photos/list';

    fetch(url)
        .then(resp => resp.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}