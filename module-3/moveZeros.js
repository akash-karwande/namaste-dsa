// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

function moveZeros(numsArr) {
  let x = 0;
  for (let i = 0; i < numsArr.length; i++) {
    if (numsArr[i] !== 0) {
      numsArr[x] = numsArr[i];
      x = x + 1;
    }
  }
  // to fill zero at end
  for (let i = x; i < numsArr.length; i++) {
    numsArr[i] = 0
  }

  return numsArr;
}

console.log(moveZeros([0, 1, 0, 3, 12]));
