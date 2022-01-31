//Sirve para tener una serie de datos privados

//No se pueden iterar
//No trabajan con .size
//Trabajan con objetos

const product = {id: 12}

const weakMap = new WeakMap();

weakMap.set(product,'Tv');

console.log(weakMap.has(product))
console.log(weakMap.get(product))
console.log(weakMap.delete(product))
console.log(weakMap.get(product))
console.log(weakMap)