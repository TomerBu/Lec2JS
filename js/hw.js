const cart1 = [99.90, 195.9, 30, 9.9, 80.1];

console.log(cart1);//print without spread //[99.90, 195.9, 30, 9.9, 80.1]
console.log(...cart1);//print with spread //99.9 195.9 30 9.9 80.1


//object are ref types
let cart2 = cart1;
cart2[0] = 121.90;

//both changed:
console.log(cart1);
console.log(cart2);

//shallow copy:
cart2 = [...cart1];
console.log(cart1);
console.log(cart2);

//change one prod in cart1:
cart1[0] = 99.90;

//only one changed: //2 seperate copies
console.log(cart1);
console.log(cart2);



const person1 = { firstName: 'dave', hobbies: ['music', 'games'] }
const person2 = JSON.parse(JSON.stringify(person1));

person2.hobbies[0] = 'Damka';
person2.firstName = 'Dave';
console.log(person1);



// let messyText = "one,,two,,,three,,";

// while (messyText.includes(',,')) {
//     messyText = messyText.replace(',,', ',');
// }

// if(messyText.endsWith(',')){
//     messyText = messyText.substring(0, messyText.length - 1);
// }

// console.log(messyText);

// const messyArray = messyText.split(',');
// console.log(messyArray);



// let messyText = "one,,two,,,three,,";
// let messyArray = messyText.split(',');

// let arr = [];
// for (let i = 0; i < messyArray.length; i++) {
//     let item = messyArray[i];
//     if (item !== '') {
//         arr.push(item);
//     }
// }

// console.log(arr);




