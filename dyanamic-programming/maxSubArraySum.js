// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.


// Kadane's algorithm
function maxSubArrSum(arr) {
    let currSum = arr[0];
    let maxSum = arr[0];

    for(let i = 1; i < arr.length; i++) {
        currSum = Math.max(currSum + arr[i], arr[i]);
        maxSum = Math.max(maxSum, currSum);
    }

    return maxSum;
}

console.log(maxSubArrSum([-2,1,-3,4,-1,2,1,-5,4]))