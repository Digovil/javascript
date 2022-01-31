const nav = document.querySelector('.navegacion')

//Registrando un evento con click: tienes que darle click para que suceda
nav.addEventListener('click',()=>{
    console.log("1. evento")
});

//Registrando un evento con mouseenter: tienes que superponer el mause en la etiqueta para que suceda
nav.addEventListener('mouseenter',()=>{
    console.log("2. evento")
    //nav.style.display = "none";
});


//Registrando un evento con mouseout: saliendo de la navegacion
nav.addEventListener('mouseout',()=>{
    console.log("3. evento")
    //nav.style.display = "block";

});

//Registrando un evento con mousedown: cuando doy click
nav.addEventListener('mousedown',()=>{
    console.log("4. evento")

});

//Registrando un evento con mouseup: cuando suelto el click
nav.addEventListener('mouseup',()=>{
    console.log("5. evento")

});

//Registrando un evento con dblclick: doble click para que funcione
nav.addEventListener('dblclick',()=>{
    console.log("6. evento")

});
