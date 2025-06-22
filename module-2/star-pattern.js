let n = 5;

// 1. Print the following pattern using nested loops

/*

* * * * *
* * * * *
* * * * *
* * * * *
* * * * *

*/

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n; j++) {
    row = row + "* ";
  }
  console.log(row);
}

// loop will run 5 times for i and 5 times for j, resulting in 25 iterations in total
// i will indicate the row number and j will indicate the column number in a grid-like structure
// i = 0, j loop will run 5 times (0 to 4)
// i = 1, j loop will run 5 times (0 to 4)
// i = 2, j loop will run 5 times (0 to 4)
// i = 3, j loop will run 5 times (0 to 4)
// i = 4, j loop will run 5 times (0 to 4)
// Total iterations = 5 (i) * 5 (j) = 25 iterations

// After each completion of j loop, a new line is printed to start a new row
// This will create a grid-like structure with 5 rows and 5 columns of asterisks
// This pattern can be useful for generating simple text-based graphics or for understanding nested loops in programming

// 2. Print the following pattern using nested loops

/*

* 
* * 
* * *
* * * * 
* * * * *

*/

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row = row + "* ";
  }
  console.log(row);
}

// If you carefully look pattern for i is 0, j will run 1 time i.e i + 1 times
// If i is 1, j will run 2 times i.e i + 1
// If i is 2, j will run 3 times i.e i + 1 and so on

// This will create a right-angled triangle pattern with 5 rows
// Each row will have an increasing number of asterisks, starting from 1 up
// to 5, creating a triangular shape

// 3. Print the following pattern using nested loops

/*

1
1 2
1 2 3
1 2 3 4
1 2 3 4 5

*/

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row = row + (j + 1) + " ";
  }
  console.log(row);
}

// 4. Print the following pattern using nested loops

/*
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5

*/

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row = row + (i + 1) + " "; // Use (i + 1) to print the row number
  }
  console.log(row);
}

// 5. Print the following pattern using nested loops

/*

1 2 3 4 5
1 2 3 4
1 2 3
1 2
1   

*/

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n - i; j++) {
    // Decrease the number of elements in each row
    row = row + (j + 1) + " "; // Print numbers from 1 to n-i
  }
  console.log(row);
}

// 6. Print the following pattern using nested loops

/*  
 - - - - *
 - - - * *
 - - * * * 
 - * * * *
 * * * * *

*/

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n - (i + 1); j++) { // Print dashes
    row = row + "- ";
  }
  for (let k = 0; k < i + 1; k++) {  // Print asterisks
    row = row + "* ";
  }
  console.log(row);
}


// 7. Print the following pattern using nested loops

/*

1
1 0
1 0 1
1 0 1 0
1 0 1 0 1

*/

for (let i = 0; i < n; i++) {
    let toggle = 1; // Initialize toggle to 1 for each row
    let row = "";   
    for(let j =0; j < i + 1; j++) {
        row = row + toggle + " "; // Append the current toggle value to the row
        toggle = toggle === 1 ? 0 : 1; // Toggle between 1 and 0
    }
    console.log(row); // Print the completed row
}

// 8. Print the following pattern using nested loops

/*

1
0 1 
0 1 0
1 0 1 0 
1 0 1 0 1

*/
let toggle = 1; // Initialize toggle in global scope
// This will ensure that the toggle starts with 1 for the first row and alternates correctly
for (let i = 0; i < n; i++) {
    let row = "";   
    for(let j = 0; j < i + 1; j++) {
        row = row + toggle + " "; // Append the current toggle value to the row
        toggle = toggle === 1 ? 0 : 1; // Toggle between 1 and 0
    }
    console.log(row); // Print the completed row
}