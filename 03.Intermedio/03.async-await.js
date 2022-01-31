/**
 * Asyn await
 * 
 * Convierte en una promesa el resultado de una función,
 * se ejecuta de manera asincrona.
 */


//let getNombre = async () => 'Dilan' 


/*
Esto es lo que realiza el async,
te convierte lo que retorna la funcion en una promesa
*/  

let getNombre = () => {
return new Promise((resolve, reject)=> setTimeout(()=>resolve('Dilan'),3000))
}



// console.log(getNombre());

let saludo = async () => {
    let nombre = await getNombre(); 
    return `Hola ${nombre}`;
}

getNombre()
    .then(response => console.log(response))
    .catch(error => console.log('Error en la funcion: ',error));