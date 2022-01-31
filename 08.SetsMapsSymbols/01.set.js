//Te permite crear una lista de valores sin duplicados
const shopList  = ["Computadora","Telefono","Celular","Celular","Computadora","Computadora"]
const carrito   = new Set(shopList);

//Para agregar
carrito.add("Camisa");
carrito.add("Camisilla");
carrito.add("Jean");
carrito.add("Almohada");
carrito.add("Almohada"); //No lo grega

console.log(carrito)

//Para saber el tamaño
console.log(carrito.size);

//Cómo saber si un elemento existe en el carrito
console.log(carrito.has("Camisilla"));
console.log(carrito.has("camisilla"));

//Eliminar un elemento
console.log(carrito.delete("Camisilla"));
console.log(carrito.delete("camisilla"));

//Los set son iterables
carrito.forEach(element => console.log(`Producto: ${element}`));

//Eliminar todos los elementos del set
carrito.clear();

console.log(carrito)