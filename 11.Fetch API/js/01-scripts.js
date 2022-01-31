//Con Fetch API puedes enviar y recibir datos
const cargarTxt = document.querySelector("#cargarTXT");

eventListener();
function eventListener(){

    cargarTxt.addEventListener('click',obtenerDatos);


}


function obtenerDatos(){
    const url = 'data/datos.txt';

    fetch(url)//Trabaja con promesas
        .then(resp =>{
            console.log('Imprimiendo response: ',resp)
            console.log(`Imprimiendo el status: ${resp.status}`)
            console.log(`Imprimiendo el status pero en text: ${resp.statusText}`)
            console.log(`Imprimiendo la url: ${resp.url}`)
            console.log(`Imprimiendo el tipo de consulta: ${resp.type}`)
            console.clear()

            return resp.text()
        })
        .then(data => console.log(data))
        .catch(err => console.log(err))
}