//Creation of square
const colorfulSquare = document.getElementById('square');
colorfulSquare.classList.add('squareDisplay');
//Question #1 - Answer - Blue when the mouse hovers over the square
const handleMouseHover = () => {
    square.style.backgroundColor = 'blue';
}
square.addEventListener('mouseover', handleMouseHover);

//Question #2 - Answer - Red when the mouse button is held down over the square
const handleMouseClick = () => {
    square.style.backgroundColor = 'red';
}
square.addEventListener('mousedown', handleMouseClick);

//Question #3 - Answer - Yellow when the mouse button is let go over the square
const handleMouseRelease = () => {
    square.style.backgroundColor = 'yellow';
}
square.addEventListener('mouseup', handleMouseRelease);

//Question #4 - Answer - Green when the mouse is double clicked in the square 
const handleDoubleClick = () => {
    square.style.backgroundColor = 'green';
}
square.addEventListener('dblclick', handleDoubleClick);

//Question #5 - Answer - Orange when the mouse scroll is used somewhere in the window (not just over the square)
const handleMouseScroll = () => {
    document.body.style.backgroundColor = 'orange';

}
document.body.addEventListener('wheel', handleMouseScroll);

/*Question #6 - Answer - You should also be able to press the first letter of the colors 
(typing "r" on the keyboard for "red", for example) and have the box change to that color*/

handleKeyPress = (event) => {
    return (event.which === 66 ? square.style.backgroundColor = 'blue' : 
            event.which === 82 ? square.style.backgroundColor = 'red' : 
            event.which === 89 ? square.style.backgroundColor = 'yellow' : 
            event.which === 71 ? square.style.backgroundColor = 'green' : 
            event.which === 79 ? document.body.style.backgroundColor = 'orange' : 
            event.which === 87 ? document.body.style.backgroundColor = 'white' :
            console.log ('Please press b, r, y, g, or o.'));
    
    
};


document.addEventListener('keydown', handleKeyPress);
