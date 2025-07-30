// task 01
var money = 2000;
oranges = 1000;
apples = 700;
console.log(oranges - apples);

// task 02

var mathematics = 75.25;
biology = 65;
chemistry = 80;
physics = 35.45;
bangla = 99.5;

//
var marks = [75.25 + 65 + 80 + 35.45 + 99.5];
marks /= 5;
console.log(marks.toFixed(2));

// task 03

var remainder = 119;

remainder /= 5;

console.log(remainder);

// task 04

var a = isNaN("11");
console.log(a);
//

var a = isNaN(2 - 10);
console.log(a);

// Loops

for (let i = 1; i <= 10; i++) {
  console.log(`Outer loop value: ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(i + "*" + j + " = " + i * j);
  }
}

// if else

if ((burger = 500)) {
  console.log("free Coke");
} else {
  console.log("Coke: 30tk");
}

// test
