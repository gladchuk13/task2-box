function mouseMoving(e) {
    let box = document.getElementById('box');
    box.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    
}
let boxStopper = _.debounce(mouseMoving, 3400)
window.addEventListener('mousemove', mouseMoving)