const infoForm = document.forms['info'];

let counter = 0;

infoForm.addEventListener('submit', function(e){
    e.preventDefault();
    let id = 'entry' + counter++;
    document.getElementById('output').innerHTML += `<span id= "${id}" >` + 
    "Name: " + infoForm.elements["nameBox"].value  +
    " | Age: " + infoForm.elements["ageBox"].value  +
    " | Location: " + infoForm.elements["locationBox"].value + ` <button onclick="handleDelete('${id}')">Delete</button><br></span>`;
    infoForm.reset();
});

function handleDelete(id){
    document.getElementById('output').removeChild(document.getElementById(id));
}