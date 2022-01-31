//Son listas de llaves y valor, dichas llaves pueden ser cualquier dato
//Son mejores que los objetos a la hora de agregar y quitar elemento

const maps = new Map();

maps.set(42,"Dilan") //Para agregar
maps.set("Nombre","German") 
maps.set(true,"Fernando") 
maps.set(0.1,"Ximena") 
//maps.set([0],"David") Se pone raro
//maps.set({nombre:"Sait"},"Andrea") Se pone raro

console.log(maps)

console.log(maps.size)//Determina el tamaño de nuestro set

console.log(maps.has("Andrea"))//Verfica si una llave existe
console.log(maps.has(0.1))//Verfica si una llave existe

//Para obtener lo que contiene la llave

console.log(maps.get(0.1))//Ximena
console.log(maps.delete(0.1))
console.log(maps.get(0.1))//undefined   

//Limpiar todo un map

maps.clear();