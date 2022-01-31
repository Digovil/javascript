const salida    = document.querySelector('#salida');
const microfono = document.querySelector('#microfono');
const textArea  = document.querySelector('#textArea');

microfono.addEventListener('click',ejecutarSpeechAPI)

function ejecutarSpeechAPI(){
    const SpeechRecognition = webkitSpeechRecognition;
    const recognition       = new SpeechRecognition();

    recognition.start();

    recognition.onstart = function(){
        salida.classList.add('mostrar');
        salida.textContent = 'Escuchando...';
    }

    recognition.onspeechend = function(){
        salida.textContent = 'Se dejo de grabar...';
        recognition.stop();
    }

    recognition.onresult = function(e){
        textArea.value  = e.results[0][0].transcript;
    }
}