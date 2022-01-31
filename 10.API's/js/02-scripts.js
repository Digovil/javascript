// document.addEventListener('DOMContentLoaded',()=>{
//     console.log(navigator.onLine)
// });

window.addEventListener('online',estasConectando())
window.addEventListener('offline',estasConectando())

function  estasConectando(){
    console.log(navigator.onLine ? "Estas conectado!" : "No estas conectado!")
}