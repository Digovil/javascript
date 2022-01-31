
/*

El uso más habitual de los generadores es crear Iteradores. 
Un Iterador es un objeto que devuelve un elemento de una colección cada vez que llamamos a su método.

*/

//El * indica que la funcion es un generador
function *crearGenerador(){
    yield 1; //Palabra reservada que indica los valores con los que se pude iterar
    yield 42;
    yield 'Dilan';
}

let iterador = crearGenerador()

console.log(iterador.next())
console.log(iterador.next())
console.log(iterador.next().value)
console.log(iterador.next())

console.log("Generador para carrito de compras")

function *generadorCarrito(carrito){
    for (let i = 0; i < carrito.length; i++) {
        yield carrito[i];
        
    }
}

const carrito = ['Producto 1','Producto 2','Producto 3'];

iterador = generadorCarrito(carrito);


console.log(iterador.next())
console.log(iterador.next())
console.log(iterador.next())
console.log(iterador.next())