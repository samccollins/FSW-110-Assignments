var newHeader = document.createElement("h1");
newHeader.textContent = "Welcome to my JS site";
document.body.prepend(newHeader);

var newParagraph = document.createElement("p");
newParagraph.textContent = "All of this was created with JavaScript";
document.body.append(newParagraph);

var newOl = document.createElement("ol");
document.body.append(newOl); 


var firstLi = document.createElement("li");
firstLi.textContent = "This was created using JavaScript";
var myList = newOl.append(firstLi);

var secondLi = document.createElement("li");
secondLi.textContent = "So was this";
var myList = newOl.append(secondLi);

var thirdLi = document.createElement("li");
thirdLi.textContent = "This was too";
var myList = newOl.append(thirdLi);
