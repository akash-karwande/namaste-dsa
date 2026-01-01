// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and 
// rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.

function houseRobber(houses) {
    if(houses.length == 1) return houses[0];
    let dp = [];
    dp[0] = houses[0];
    dp[1] = Math.max(houses[0], houses[1]);
    for(let i = 2; i < houses.length; i++) {
        dp[i] = Math.max(dp[i-2] + houses[i], dp[i-1])
    }
    return dp[dp.length-1]
}

console.log(houseRobber([2,7,9,3,1]))