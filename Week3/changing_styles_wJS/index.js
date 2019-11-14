
var someAvengers = [
    'Captain America',
    'Captain Marvel',
    'Iron Man',
    'Hulk',
    'Thor',
    'GotG',
    'Ant-Man',
    'Doctor Strange',
    'Spider-Man',
    'Black Panther',
    'Wasp'
];

var avengersList = document.getElementById('avengers');
for(var i = 0; i < someAvengers.length; i++){
    var newName = document.createElement('li');
    newName.textContent = someAvengers[i];
    avengersList.append(newName);
    newName.style.fontSize = '20px';
    newName.style.fontWeight = 'lighter';
    newName.style.fontFamily = 'sans-serif';
    newName.style.color = 'cornflowerblue';
    newName.classList.add('border');
}
