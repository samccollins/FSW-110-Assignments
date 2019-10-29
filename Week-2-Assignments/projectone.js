var navBar = document.createElement("ul");
document.body.append(navBar); 
navBar.style.listStyle = "none";
navBar.style.textAlign = "center";

var firstLi = document.createElement("li");
firstLi.textContent = "Home";
var myList = navBar.append(firstLi);
firstLi.style.display = "inline";
firstLi.style.margin = "20px";
firstLi.style.fontSize = "30px";
var a = document.createElement("a");
a.href = "http://www.google.com";
a.appendChild(firstLi);
document.body.appendChild(a);
firstLi.style.textAlign = "center";
a.style.marginLeft = "769px";


var secondLi = document.createElement("li");
secondLi.textContent = "About";
var myList = navBar.append(secondLi);
secondLi.style.display = "inline";
secondLi.style.margin = "20px";
secondLi.style.fontSize = "30px";
a.appendChild(secondLi);
document.body.appendChild(a);
secondLi.style.textAlign = "center";

var thirdLi = document.createElement("li");
thirdLi.textContent = "Contact";
var myList = navBar.append(thirdLi);
thirdLi.style.display = "inline";
thirdLi.style.margin = "20px";
thirdLi.style.fontSize = "30px";
a.appendChild(thirdLi);
document.body.appendChild(a);
thirdLi.style.textAlign = "center";

var myHeader = document.createElement("h1");
myHeader.textContent = "Welcome to my basic JS site";
document.body.append(myHeader);
myHeader.style.textAlign = "center";

var myParagraph = document.createElement("p");
myParagraph.textContent = "I created this entire website using only JavaScript!";
document.body.append(myParagraph);
myParagraph.style.textAlign = "center";

var myOl = document.createElement("ol");
document.body.append(myOl); 
myOl.style.textAlign = "center";
myOl.style.listStylePosition = "inside";


var fourthLi = document.createElement("li");
fourthLi.textContent = "This is a list item created in Javascript";
var myList = myOl.append(fourthLi);

var fifthLi = document.createElement("li");
fifthLi.textContent = "So is this";
var myList = myOl.append(fifthLi);

var sixthLi = document.createElement("li");
sixthLi.textContent = "This is too";
var myList = myOl.append(sixthLi);

var myFooter = document.createElement("footer");
myFooter.textContent = "© Samantha Collins";
document.body.append(myFooter);
myFooter.style.textAlign = "center";