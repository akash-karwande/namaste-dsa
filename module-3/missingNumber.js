// Input: nums = [3,0,1]

// Output: 2

// Explanation:

// n = 3 since there are 3 numbers, so all numbers are in the range [0,3].
// 2 is the missing number in the range since it does not appear in nums.

function findMissingNumber(nums) {
  let n = nums.length;
  let totalSum = n * (n + 1) / 2;
  let arrSum = 0;
  for (let i = 0; i < n; i++) {
    arrSum = arrSum + nums[i];
  }

  return totalSum - arrSum
}

console.log(findMissingNumber([3, 0, 1]));
