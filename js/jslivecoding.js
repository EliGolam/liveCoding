console.log('JS OK');

// Scrive nella pagina HTML
//document.write('Hello World'); // CHIEDI 

// Opens a notification/warning panel
// alert('Notification Alert Test')

document.getElementById('my_id').innerHTML = 'Hello Bitches';
// Doesn't work if left by itself. Because if the rest of the HTML is not
// loaded, so my_id doesn't exist. 
// How to fix?  
// METHOD 1: Load JS at the end. 
// METHOD 2: defer/async

// Variables
const numA = 21; // Const must be initialized
let numB;
var numC; 

numC = 10;
console.log("var initial", numC);
numC -= 5; 
console.log("var after", numC);

numB = 4;
console.log("let initial", numB);
numB = numB * 10;
console.log("let after", numB);

// numA = 10; Gives an error
console.log("const", numA);


const PI = 3.14; 
let radius = 5; 

console.log("Circumference", PI * radius * 2)

let str = 'Finding the Circumference';

let string = 'here';
let string2 = "there";

console.log (
    `
    ${string} and ${string2}
    `
)

const input = prompt("What's your name?");
console.log(input)

const birthYear = prompt("When were you born?");
let birthYearNum = 2022 - parseInt(birthYear);
if (isNaN(birthYearNum)) {
    birthYearNum = 'mysterious';
} 

console.log(
    `
    You are ${birthYearNum} years old
    `
)

document.getElementById('presentation').innerHTML = `I am ${input}, a ${birthYearNum} weirdo`;

let number;

while (isNaN(number)) {
    let numberino = prompt("Input a number:");
    number = parseInt(numberino);
    divByTwo = number % 2 === 0;
    divByThree = number % 3 === 0;
}

if (divByTwo) {
    document.getElementById('calc').innerHTML = `${number} is divisible by two`
}

if (divByThree) {
    document.getElementById('calc1').innerHTML = `${number} is divisible by three`
}

console.log('8' == 8);
console.log('8' === 8);