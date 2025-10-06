// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.
// The maximum number of consecutive 1s is 3.

var findMaxConsecutiveOnes = function (nums) {
  let currentCount = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
       currentCount = currentCount + 1;
    } else {
        max = Math.max(currentCount, max);
        currentCount = 0
    }
    
  }
  return Math.max(currentCount, max);
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1, 0, 1,1,0,1,1,1,1,1]));
