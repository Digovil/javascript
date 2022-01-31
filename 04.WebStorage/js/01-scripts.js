
//Sirve para almacenar datos en el navegador aun despues de ver cerrado el mismo
localStorage.setItem('Nombre','Dilan Gonzalez')

//Alamacena datos solo en la sesión
sessionStorage.setItem('Sueldo',3000000)

//Eliminar un registro
//localStorage.removeItem('Nombre')

//Limpia el local storage
localStorage.clear()

const nombre = localStorage.getItem('Nombre')
const sueldo = sessionStorage.getItem('Sueldo')

console.log(nombre)
console.log(sueldo)