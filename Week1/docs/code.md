//variable declaration
var x = 3;

const y = 5;
let z = 7;

z = 9;

// 111112

const name = 'John';
name = 'Jane';

const fruit = {
  name: 'apple',
};

fruit.name = 'banana';

// this condition will always return false since JavaScript compares objects by reference, not value
if ({} === {}) {
  console.log('true');
} else {
  console.log('false');
}

//Primitive types
//string
//number
//boolean

if (5 == 5) {
  console.log('true');
}

//Non-primitive types
//object
//array

const person = {};
const otherPerson = {};
// 11112
// 11113

if (JSON.stringify({ name: 'John' }) === JSON.stringify({ name: 'John' })) {
  console.log('true');
} else {
  console.log('false');
}

//type equality

const number1 = 5;
const number2 = '5';

if (number1 === number2) {
  console.log('true');
} else {
  console.log('false');
}

let text = Array(16).join('wat' - 1) + ' Batman!';

console.log(text);
