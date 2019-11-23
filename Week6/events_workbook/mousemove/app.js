const redBox = document.getElementsByClassName('red-box')[0];
onMouseMove = (event) => redBox.innerHTML = "Coordinates: " + event.clientX + ", " + event.clientY;
redBox.addEventListener('mousemove', onMouseMove);