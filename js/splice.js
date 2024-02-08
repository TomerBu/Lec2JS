const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');

months.splice(4, 1, 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
console.log(months);


const fruit = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'];

//replace fig with almond:
fruit.splice(5, 1, 'almond');



let messyArray = ['one', '', 'two', '', '', 'three', '', '']

while (messyArray.includes('')) {

    //find the index of the first empty string:
    let index = messyArray.indexOf('');

    //remove the empty string from the array:
    messyArray.splice(index, 1);

    console.log();
}



const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.forEach(function(item){
    console.log(item)
});