const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Print all the numbers in the array
array.forEach(item => console.log(item));

// 2. Print all the numbers in the array multiplied by 2
array.forEach(item => console.log(item * 2));

// 3. div for each number in the array, add the div to the page
array.forEach(item => {
    let div = document.createElement('div');
    div.id = item;
    div.textContent = item * 2;
    document.body.appendChild(div);
});

//a function that takes 2 params:
function myForEach(arr, callbackFn){
    for(let i = 0; i < arr.length; i++){
        let item = arr[i];
        callbackFn(item);
    }
}

function print(item){
    console.log(item);
}

myForEach([1, 2, 3], print);
 