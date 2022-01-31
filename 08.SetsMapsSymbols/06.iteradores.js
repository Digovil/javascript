//Como se construyen los iteradores

function crearIterador(carrito){
    
    let i = 0;

    return {
        siguiente: ()=>{
            const fin   = (i>=carrito.length);
            const valor = !fin?carrito[i++]:undefined;
            return {
                fin,valor
            }
        }
    }
}

const carrito = ['Producto 1','Producto 2','Producto 3']; //Array de strings

//creo una variable que almacena el resultado de la funcion al cual le pasamos como argumento el carrito
const recorrerCarrito = crearIterador(carrito); 

console.log(recorrerCarrito.siguiente())
console.log(recorrerCarrito.siguiente())
console.log(recorrerCarrito.siguiente())
console.log(recorrerCarrito.siguiente())