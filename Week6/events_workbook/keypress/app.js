onKeyPress = (event) => {
  const myOutput = document.getElementById('output');
  myOutput.innerHTML = "You've pressed the '" + String.fromCharCode(event.which) + "' key. Its key code is " + event.which + '.';
};
document.addEventListener('keypress', onKeyPress);