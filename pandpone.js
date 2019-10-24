//Boxes Controls
var blueButton = document.getElementById("blue");
var greenButton = document.getElementById("green");
var redButton = document.getElementById("red");
var purpleButton = document.getElementById("purple");
var yellowButton = document.getElementById("yellow");

blue.addEventListener("click", function() {
    document.body.style.backgroundColor = "blue";
})

green.addEventListener("click", function() {
    document.body.style.backgroundColor = "green";
})

red.addEventListener("click", function() {
    document.body.style.backgroundColor = "red";
})

purple.addEventListener("click", function() {
    document.body.style.backgroundColor = "purple";
})

yellow.addEventListener("click", function() {
    document.body.style.backgroundColor = "yellow";
})

// Counter controls
var count = 0;
var subtractButton = document.getElementById("subtract");
var addButtonn = document.getElementById("add");

subtract.addEventListener("click", function() {
    count--
    document.getElementById("counter").innerText = count;
})

add.addEventListener("click", function() {
    count++
    document.getElementById("counter").innerText = count;
})

console.log(document);