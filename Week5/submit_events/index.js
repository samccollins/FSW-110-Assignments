const fNameBox = document.getElementById('fname');
const lNameBox = document.getElementById('lname');
const ageBox = document.getElementById('age');
const submitButton = document.getElementById('submit');

function buttonClick(){
    alert(fname.value + lname.value + age.value);
};
submitButton.addEventListener('click', buttonClick).innerHTML = '';
