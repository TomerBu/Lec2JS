const yesNoQuestion = (text) => {
    let userAnswer = prompt(text);

    while (userAnswer !== "yes" && userAnswer !== "no") {
        userAnswer = prompt(text + ' try again yes/no');
    }

    if (userAnswer === 'yes') {
        return true;
    } else if (userAnswer === 'no') {
        return false;
    } else {
        return false;
    }
}

const inputNumber = (text, min, max) => {
    let result = Number(prompt(text));

    while (result > max || result < min) {
        //result = Number(prompt(text + " try again " + min + " to " + max));
        result = Number(prompt(`${text} try again ${min}-${max}`));
    }

    return result;
}

const random = (min, max) =>
    min + Math.round(Math.random() * (max - min));

const pretty = (array) => {

    let total = '';

    for (let i = 0; i < array.length; i++) {
        total += array[i];
        if (i !== array.length - 1) {
            total += ', ';
        }
    }

    return total;
}

//פונקציה שמקבלת פרמטר - כמה אותיות רוצים בסיסמא
const passwordGenerator = (len) => {

    //מערך של כל האותיות האפשרוית לסיסמא
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
        'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    // מחרוזת ריקה לסיסמא
    let password = '';

    // לולאה שרצה מספר פעמים כמספר האותיות בסיסמא
    for (let i = 0; i < len; i++) {
        // מגרילים איבר רנדומלי ממערך האותיות 
        let randomIndex = random(0, letters.length - 1);
        //ומוסיפים אותו לסיסמא
        password += letters[randomIndex];
    }

    return password;
}

const capitalize = (text) => {
    //first letter in upperCase
    const firstLetter = text.charAt(0).toUpperCase(); //first letter in caps

    const rest = text.substring(1);// omer


    return firstLetter + rest;
}


const sum = (...numbers) => {
    let s = 0;
    for (let i = 0; i < numbers.length; i++) {
        s += numbers[i];
    }
    return s;
}


//[200, 100, 2, -1, 3]
const min = (...numbers) => {

    let m = numbers[0];  

    for (let i = 1; i < numbers.length; i++) {
        if(numbers[i] < m){  
            m = numbers[i];  
        }
    }

    return m;
}