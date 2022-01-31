// Set debil o weakset - solo le puedes colocar objetos

const objPersona    = {nombre: "Dilan",edad: 22}
const objAnimal     = {nombre: "Scott",edad: 12}

const weakset = new WeakSet();

weakset.add(objPersona)
weakset.add(objAnimal)

console.log(weakset.has(objAnimal)) //Sirve para saber si un objeto se encuentra dentro de la lista
weakset.delete(objAnimal)
console.log(weakset.has(objAnimal))
console.log(weakset.size)//No trabaja con  size para saber su tamaño

// weakset.forEach(element => {
//     console.log("No es iterable!")
// });
