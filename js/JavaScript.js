// Initial Handshake Script
console.log('DEBUG SCRIPT - JavaScript.js: OK!');

const form = document.getElementById('inputForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const message = [];

    // EXERCISE 1
    

    // EXERCISE 2
    const word1 = (document.getElementById('first-word').value).trim();
    const word2 = (document.getElementById('second-word').value).trim();
    console.log('DEBUG - word1, word2 type: ', typeof word1);


    if (word1.length <= word2.length) {
        console.log(word1, word2);
        message.push(`${word1}, ${word2}`);
    } else if (word1.length > word2.length) {
        console.log(word2, word1);
        message.push(`${word2}, ${word1}`);
    }

    // EXERCISE 3
    let sum = 0; 

    const nums = document.querySelectorAll('.numbers');
    console.log(nums[0].value);

    for (let i = 0; i < nums.length; i++) {
        sum += parseInt(nums[i].value);
    }
    console.log(sum);
    message.push(sum);

    // EXERCISE 4
    const invitedList = ['lorraine', 'britney', 'vivian', 'antoinette', 'lisa'];
    const name = (document.getElementById('name').value).trim();

    if (invitedList.includes(name.toLowerCase())) {
        message.push(`You are invited ${name}`);
        console.log('You are invited', name);
    } else {
        message.push(`You are not on the list ${name}`);
        console.log('You are not on the list', name);
    }

    // let found = false;
    // for(let j=0; j < invitedList.length && !found; j++) {
    //     if ( invitedList[j] === name ) {
    //         found = true;
    //     }
    // }
    // if (found) {
    //     console.log('Found, you are invited!!');
    // } else {
    //     console.log('NOT FOUND GET OUT');
    // }

    // EXERCISE 5
    const odd_arr = [];
    const otherNums = document.querySelectorAll('.numbers_arr');

    for (let i = 0; i < otherNums.length; i++) {
        if (otherNums[i].value % 2 !== 0){
            //console.log('DEGUB', otherNums[i].value);
            odd_arr.push(otherNums[i].value);
        }
    }

    message.push(odd_arr);
    console.log(message);

    // EXERCISE 6:
    let numToReach = 150;
    let sumToReach = 0;
    while(sumToReach < numToReach) {
        sumToReach += Math.floor(Math.random() * 100) + 1; 
        console.log(sumToReach);
    }

    for (let sumFor = 0; sumFor < numToReach; sumFor += (Math.floor(Math.random() * 100) + 1)) {
        console.log(sumFor);
    }

    // PRINT results on DOM
    for(let i = 0; i < message.length; i++) {
        const resDiv = document.querySelector('div.results');
        const result = document.createElement('p');
        result.classList.add('text-center');
        result.append(message[i]);
        resDiv.prepend(result);
    }
})


let userInp = '';

// while (isNaN(parseInt(userInp)) || parseInt(userInp) % 2 === 0) {
//     userInp = prompt('Please enter an odd number');
// }

// console.log(userInp);


const arrNum = [2, 4, 6, 12];
const arrNum2 = [3, 1];

console.log(sumArr(arrNum, arrNum2));

function sumArr (nums1, nums2) {
    console.log('Initiated');
    let sum = 0;

    for (let i = 0; i < nums1.length; i++ ){
        sum += nums1[i];
    }
    for (let i = 0; i < nums2.length; i++ ){
        sum += nums2[i];
    }

    return sum;
}


console.log(generateRand(5,20));
console.log(generateRand(12));

function generateRand (num1, num2) {
    if (num2 === undefined || isNaN(num2)) {
        num2 = 0;
    }

    let max = Math.max(num1, num2);
    let min = Math.min(num1, num2);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate 10 random numbers
const randomSet = new Set(); 
const NUM_AMOUNT = 10;
const randomRange = [1, 10];
let flag = false;

// Avoid Infinite Loop: 
if (NUM_AMOUNT <= (Math.max(...randomRange) - Math.min(...randomRange) + 1)) {
    while (randomSet.size < NUM_AMOUNT) {
        console.log('Generating');
        randomSet.add(generateRand(randomRange[0], randomRange[1]));
    }
    console.log('Ok!')
} else {
    console.log('Range not large enough');
}
console.log(randomSet);

console.log(getFactorial(23));

// Get Factorial
function getFactorial (number) {
    let factorial = 1;
    if (number > 0) {
        for(let i = number; i > 0; i--) {
            factorial *= i;
        }
    }
    return factorial;
}


// const firstNum = parseInt(prompt("Insert a number"));
// const secondNum = parseInt(prompt('Insert another one'));

// let message = 'Largest number is ';

// if (firstNum > secondNum) {
//     console.log(firstNum);
//     message += firstNum;
// } else if (firstNum < secondNum) {
//     console.log(secondNum);
//     message += secondNum;
// } else {
//     console.log("Equal", firstNum);
//     message = 'The numbers are equal'
// }



