const notificarBtn      = document.querySelector("#notificar");
const verNotificacion   = document.querySelector("#verNotificacion");


notificarBtn.addEventListener('click',() =>{
    Notification
        .requestPermission()
        .then(resp =>{
            console.log("El resultado es: ",resp);
        })
})

verNotificacion.addEventListener('click',() =>{
    if(Notification.permission === 'granted'){
        const noti = new Notification('Hola, soy Masha',{
            icon:'img/masha.jpg',
            body:'Ven a jugar conmigo!'
        });

        noti.onclick = function(){
            window.open('https://github.com/Digovil');
        }
    }
})

