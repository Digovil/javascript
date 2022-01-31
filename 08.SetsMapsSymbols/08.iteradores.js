const ciudades  = ['Londres','Bogota','Caracas','Lima'];
const ordenes   = new Set([123,231,131,102]);
const datos     = new Map();

datos.set('nombre','Dilan');
datos.set('profesion','Desarrollo web');

// Default
for (const ciudad of ciudades) { 
    console.log(ciudad);
}

for (const orden of ordenes) { 
    console.log(orden);
}

for (const dato of datos) { 
    console.log(dato);
}



// Key Iteratpr - Se imprime las llaves
// for (const keys of ciudades.keys()) { 
//     console.log(keys);
// }

// for (const keys of ordenes.keys()) { 
//     console.log(keys);
// }

// for (const keys of datos.keys()) { 
//     console.log(keys);
// }


// Values Iterator

// for (const value of ciudades.values()) { //bucle para arrays
//     console.log(value);
// }

// for (const orden of ordenes.values()) { 
//     console.log(orden);
// }

// for (const dato of datos.values()) { 
//     console.log(dato);
// }

//Entries Iterator

// console.log("Array String")
// for(let entry of ciudades.entries()){
//     console.log(entry);
// }

// console.log("Set")
// for(let entry of ordenes.entries()){
//     console.log(entry);
// }

// console.log("Map")
// for(let entry of datos.entries()){
//     console.log(entry);
// }