// Input: cost = [1,100,1,1,1,100,1,1,100,1]
// Output: 6
// Explanation: You will start at index 0.
// - Pay 1 and climb two steps to reach index 2.
// - Pay 1 and climb two steps to reach index 4.
// - Pay 1 and climb two steps to reach index 6.
// - Pay 1 and climb one step to reach index 7.
// - Pay 1 and climb two steps to reach index 9.
// - Pay 1 and climb one step to reach the top.
// The total cost is 6.


function minCostClimbingStairs(arr) {
    let cost = [0, 0];

    for(let i = 2; i <= arr.length; i++) {
        cost[i] = Math.min(arr[i-1]+ cost[i-1], arr[i-2]+ cost[i-2])
    }
    
    return cost[cost.length-1]
}

[10,15,20]
// console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]))

console.log(minCostClimbingStairs([10,15,20]))

