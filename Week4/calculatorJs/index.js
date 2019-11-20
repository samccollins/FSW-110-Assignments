//Addition
document.getElementById('addButton').addEventListener('click', function(){
    document.getElementById('sumResult').innerHTML = '';
    let mySumNum1 = parseInt(document.getElementById('sumNum1').value);
    let mySumNum2 = parseInt(document.getElementById('sumNum2').value);
    console.log(mySumNum1, mySumNum2);
    document.getElementById('sumResult').innerHTML += (mySumNum1)+(mySumNum2);
});


//Subtraction
document.getElementById('subButton').addEventListener('click', function(){
    document.getElementById('subResult').innerHTML = '';
    let mySubNum1 = parseInt(document.getElementById('subNum1').value);
    let mySubNum2 = parseInt(document.getElementById('subNum2').value);
    console.log(mySubNum1, mySubNum2);
    document.getElementById('subResult').innerHTML += (mySubNum1)-(mySubNum2);
});


//Multiplication
document.getElementById('mulButton').addEventListener('click', function(){
    document.getElementById('mulResult').innerHTML = '';
    let myMulNum1 = parseInt(document.getElementById('mulNum1').value);
    let myMulNum2 = parseInt(document.getElementById('mulNum2').value);
    console.log(myMulNum1, myMulNum2);
    document.getElementById('mulResult').innerHTML += (myMulNum1)*(myMulNum2);
});


