console.log('JS OK');

let i; // it's always better to declare the initializer as let either in or out of the for loop
for (i = 0; i < 10; i++) {
    console.log(i);
}
console.log("End", i);
console.log(typeof i)

for (i = 10; i > 0; i--) {
    console.log(i);
    console.log(typeof i)
}
console.log("End", i);

for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log("End", i);

for (i = 0; i < 100; i += 10) {
    console.log(i);
}
console.log("End", i);

let x = 0; 
console.log("initial x", x);
console.log("return x++", x++);
console.log("x after x++", x);
console.log("return ++x", ++x);
console.log("final", x);


const ul = document.querySelector('ul.list');

for (let j = 0; j < 10; j++) {
    const li = document.createElement('li');
    li.append('Elemento ' + j);
    ul.append(li);
}

const grid = document.querySelector('div.grid'); 

for (let x = 0; x < 100; x++) {
    const square = document.createElement('div');
    square.classList.add('box');
    grid.append(square);

    square.addEventListener ('mouseenter', function() {
        console.log('Entering in', x);
        square.style.backgroundColor = 'cyan';
    })

    square.addEventListener ('mouseleave', function() {
        square.style.backgroundColor = 'greenyellow';
    })

    square.addEventListener ('click', function() {
        square.style.backgroundColor = 'white';
    })
}


// ***************************************************************
// LiveCoding 26 August

const girlfriends = ['Lorraine'];
console.log(girlfriends);

girlfriends.push('Vivi', 'Britney');
console.log(girlfriends);
girlfriends.push('Antoinette');
console.log(girlfriends)

char = girlfriends.length;
let message = ''

if (char === 1) {
    message = `${girlfriends[0]} is alone.`
} else {
    for (let idx = 0; idx < char - 2; idx++){
        message += girlfriends[idx] + ', '
    }
    message += girlfriends[char - 2] + ' and ' + girlfriends[char - 1] + ' love each other!';
}
console.log(message);

locations = [];
locations.push('Los Angeles', 'Chicago', 'New York');

const inp = parseInt(prompt("Insert Numbers"));
console.log(locations[inp]);










// ***************************************************************


// const random = Math.random(); // Number between 0(included) to 1(excluded)

// console.log(Math.floor(Math.random() * 25)); // Number between 0 and 24

// console.log(Math.ceil(Math.random() * 25)); // Number between 1 and 25

// console.log(Math.floor(Math.random() * 16) + 10) // Number from 10 to 25

// console.log(Math.ceil(Math.random() * 16) + 9) // Number from 10 to 25


// const element = document.querySelector('.number');

// console.log(element.innerHTML);
// console.log("Class name:", element.className);

// element.className = 'found';
// console.log("Class name:", element.className);

// element.className += ' number';
// console.log("Class name:", element.className);

// console.log("Class List:", element.classList);

// element.classList.add("sec");
// // You can also .remove
// console.log("New Class List:", element.classList);

// // Add element
// element.innerHTML += 'Found';
// element.append(' !!');
// element.prepend('- ');

// const setElement = document.querySelector('.set');
// setElement.innerHTML += '<p style="text-align:center">Kiss</p>';
// setElement.innerHTML += '<p style="text-align:center">Me</p>';


// const element3 = document.querySelector('.greetings');

// element3.addEventListener('click',
//     function () {
//         console.log("Clicked");
        
//         element3.innerHTML = 'Wonderful';
//         setElement.classList.add('active');
//     }
// )

// const lightsInput = document.getElementById('lights');
// const press = document.getElementById('press');

// press.addEventListener('click', 
//     function() {
//         const lightColor = lightsInput.value;

//         switch (lightColor) {
//             case 'red': {
//                 console.log('STOP');
//                 break;
//             }
//             case 'yellow': {
//                 console.log('RUN');
//                 break;
//             }
//             case 'green': {
//                 console.log('GO');
//                 break;
//             }
//             default: {
//                 console.log('broken');
//             }
//         }
//     }
// )

