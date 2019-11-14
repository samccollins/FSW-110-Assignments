const names = ['steve', 'larry', 'joe', 'shirley', 'steph', 'nate', 'rick', 'emily']

for (var i = 0; i < names.length; i++){
    var newHead = document.createElement('h1');
    newHead.textContent = names[i];
    document.body.append(newHead);
    newHead.style.color = 'blue';
    newHead.style.textDecoration = 'underline';
    //My attempt to make them upper case. It didn't work. Could use some help with this.
    const namesUpper = names[i].toUpperCase();
}
