// Initial Handshake
console.log('Script: LOADED!');

// Initialize containers
const liveCoding = document.getElementById('live-coding');
const exercise = [];
let message = '';

// EXERCISE 1: 
let sum = 0;
let max = 10;
let min = 1;

for (let i = 0; i < 10; i++) {
    sum += Math.floor(Math.random() * (max - min + 1)) + min;
}

message = `EX1 - Sum: ${sum}, Average: ${sum / 10}`
exercise.push(message);

// EXERCISE 2: 
let userInp = '';
// while (isNaN(parseInt(userInp)) || userInp.trim().length !== 4) {
//     userInp = prompt('Enter a number with 4 digits');
// }

userInp = userInp.trim();
message = `EX2 - Sum2: ${sumNumStr(userInp)}`;
exercise.push(message);

function sumNumStr(str) {
    let sum = 0;
    for (let digit of str) {
        sum += parseInt(digit);
    }
    return sum;
}

// JSNACK 1: 
const numArr = []; // ARRAY numbers

let numInp = '';
let sumInp = 0;

while (sumInp < 50) {
    while(isNaN(parseInt(numInp))){
        numInp = prompt('Enter a new number');
    }
    numArr.push(parseInt(numInp));
    sumInp += parseInt(numInp);
}

message = `JSnack - Sum: ${sumInp}, Array: ${numArr}`
exercise.push(message);

// JSNACK 2:
const randArr = generateRandArr(10,10,5); // Prova a fare random
const oddArr = [];
const evenArr = [];

const oddBox = document.getElementById('odd');
const evenBox = document.getElementById('even');
console.log(oddBox, evenBox);

for (let i = 0; i < randArr.length; i++) {
    if(randArr[i] % 2 == 0) {
        evenArr.push(randArr[i]);
    } else {
        oddArr.push(randArr[i]);
    }
}

printToScreen(oddArr, oddBox);
printToScreen(evenArr, evenBox);


// oddBox.append(oddArr.join('-'));
// evenBox.append(evenArr.join('-'));

function printToScreen (arr, container) {
    for (let item in arr) {
        const par = document.createElement('p');
        par.classList.add('text-center');
        par.innerHTML = arr[item];
        container.append(par);
    }
}

function generateRandArr(length, max, min) {
    let arr = [];
    min = (typeof min === 'undefined') ? 0 : min;
    max = (typeof min === 'undefined') ? 1 : max;
    length = (typeof min === 'undefined') ? 0 : length;

    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    return arr;
}

// JSNACK 3: 
let wordInp1 = '';
let wordInp2 = '';

while (checkInp(wordInp1)) {
    wordInp1 = prompt('Insert first word');
}

while (checkInp(wordInp2)) {
    wordInp2 = prompt('Insert second word');
}

wordInp1 = wordInp1.trim();
wordInp2 = wordInp2.trim();

if (wordInp1.length === wordInp2.length) {
    message = `JSnack 3 - Longest Word: ${wordInp1} and ${wordInp2}`
}
else if (wordInp1.length > wordInp2.length) {
    message = `JSnack 3 - Longest Word: ${wordInp1}`;
} 
else {
    message = `JSnack 3 - Longest Word: ${wordInp2}`;
}

exercise.push(message);

function checkInp(str) {
    if (str === null || str.trim() === '') {
        return true;
    } else {
        return false;
    }
}




// RESULTS
for (let i = 0; i < exercise.length; i++) {
    const result = document.createElement('p');
    result.classList.add('result');
    result.innerHTML = exercise[i];
    liveCoding.append(result);
}
 