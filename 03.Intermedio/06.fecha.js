const diaHoy = new Date(); //La hora de javascript es un objeto

let valor;

valor = diaHoy;

valor = diaHoy.getFullYear();
valor = diaHoy.getMonth(); //Los meses comienzan en contando desde el cero
valor = diaHoy.getMinutes();
valor = diaHoy.getHours();
valor = diaHoy.getTime();
valor = diaHoy.setFullYear(2010);

console.log(valor)