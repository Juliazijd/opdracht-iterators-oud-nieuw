//DEEL 1: OLD SCHOOL

/* While loop: */
const colors = ['yellow', 'blue', 'red', 'orange'];
let i = 0;

while (i <= colors.length) {
    console.log(colors[i]);
    i++;
}

/* For loop: */
for (i = 0; i <= colors.length; i++) {
    console.log(colors[i]);
}

//DEEL 2: ARRAY METHODS

/* forEach: */
colors.forEach(color => console.log(color));

/* Looping through the properties of an object */
const person = {
    name: 'Julia',
    age: 31,
    dateOfBirth: 07/10/1989,
    city: 'Amsterdam',
    sport: 'Yoga'
};

Object.keys(person).forEach(info => console.log(info));
