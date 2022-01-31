const form = document.querySelector('#formulario')

form.addEventListener('submit',validarFormulario)

function validarFormulario(e){
    e.preventDefault() //Previene lo que esta por defecto

    console.log('1. evento')
}