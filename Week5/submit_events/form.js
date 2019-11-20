const submitButton = document.getElementById('submit');
const form = document['info'];

form.addEventListener('submit', function(e){
    e.preventDefault();
    const fname = form.firstname.value;
    const lname = form.lastname.value;
    const travAge = form.age.value;
    const travGender = form.gender.value;
    const goingTo = form.location.value;
    const travDiet = form.dietary;
    const dietRes = [];
    for (var i = 0; i < form.dietary.length; i++) {
        if(travDiet[i].checked) {
            dietRes.push(travDiet[i].value);
        };
    };
    console.log(dietRes);
    alert(('First name: ') + fname + '\n' + 
    ('Last name: ') + lname + '\n' +
    ('Age: ')+ travAge + '\n' + 
    ('Gender: ') + travGender + '\n' +
    ('Destination: ') + goingTo + '\n' +
    ('Dietary Restrictions: ') + dietRes )

});

