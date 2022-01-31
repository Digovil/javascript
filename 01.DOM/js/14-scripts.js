const busqueda = document.querySelector('.busqueda');

//Evento keydown: cuando toco una tecla
busqueda.addEventListener('keydown',()=>{
    console.log('1. evento');
});

//Evento keydown: cuando suelto una tecla
busqueda.addEventListener('keyup',()=>{
    console.log('2. evento');
});

//Evento input: todo en uno
busqueda.addEventListener('input', e =>{
    console.log('3. evento');
    console.log(e.explicitOriginalTarget.name)
    console.log(e.type)
    console.log(e.target.value)
});
