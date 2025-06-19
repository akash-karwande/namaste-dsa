// 1.  for loop
// This loop will run 5 times, logging the current iteration number

// initialization; condition; increment/change
for (let i = 0; i < 5; i++) {
  console.log("Iteration:", i);
}

// 2.  while loop
// This loop will run as long as the condition is true

let j = 0; // initialization
while (j < 5) {
  // condition
  // body of the loop
  console.log("While Loop Iteration:", j);
  j++; // increment/change
}

// 3.  do-while loop
// This loop will run at least once, then continue as long as the condition is true

let k = 0; // initialization
do {
  // body of the loop
  console.log("Do-While Loop Iteration:", k);
  k++; // increment/change
} while (k < 5); // condition

// 4.  for...of loop
// This loop is used to iterate over iterable objects like arrays   

const array = ["apple", "banana", "cherry"]; // Example array
for (const fruit of array) { // for...of loop
  // body of the loop
  console.log("Fruit:", fruit);
}

// 5.  for...in loop
// This loop is used to iterate over the properties of an object    

const object = { a: 1, b: 2, c: 3 }; // Example object
for (const key in object) { // for...in loop
  // body of the loop
  console.log("Key:", key, "Value:", object[key]);
}

