// make the box disapear when the user clicks it
const box = document.getElementsByClassName('red-box')[0];
box.addEventListener('mousedown', () => document.getElementsByClassName('red-box')[0].remove());

