## Modules

### Module 2: Nested Loops (`nestedLoops.js`)

This module demonstrates the use of nested loops in JavaScript. Nested loops are useful for generating patterns, grids, matrices, or performing operations on multi-dimensional arrays.

#### Example: Nested Loop
The code runs two loops:
1. **Outer Loop (`i`)**: Runs 5 times, representing rows.
2. **Inner Loop (`j`)**: Runs 5 times for each iteration of the outer loop, representing columns.

**Total Iterations**: `5 (i) * 5 (j) = 25 iterations`

**Code Example**:
```javascript
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        console.log(`Nested Loop Iteration: i=${i}, j=${j}`);
    }
}

```
// this loop will run 5 times for i and 5 times for j, resulting in 25 iterations in total

// i will indicate the row number and j will indicate the column number in a grid-like structure

// i = 0, j loop will run 5 times (0 to 4)
// i = 1, j loop will run 5 times (0 to 4)  
// i = 2, j loop will run 5 times (0 to 4)
// i = 3, j loop will run 5 times (0 to 4)
// i = 4, j loop will run 5 times (0 to 4)
//// Total iterations = 5 (i) * 5 (j) = 25 iterations


// this will be helpful for generating patterns, grids, or matrices in programming tasks
// or for performing operations on multi-dimensional arrays

You can find the implementation in [nestedLoops.js](nestedLoops.js)

For more examples on nested loops please refer [star-pattern.js](star-pattern.js)
