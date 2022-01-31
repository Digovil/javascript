const node = document.querySelector('title');

;


document.addEventListener('visibilitychange',()=>{
    document.visibilityState === "visible" ? node.textContent = "Estas mirando!" :node.textContent = "No estas mirando, vuelve :(";
});