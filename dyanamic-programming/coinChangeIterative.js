// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1


function coinChange (coins, amount) {
    let dp = new Array(amount+1).fill(Infinity);
    dp[0] = 0;

    for(let rem = 1; rem <= amount; rem++) {
        for(let j = 0; j < coins.length; j++) {
            let remAmount = rem - coins[j];
            if(remAmount >= 0) {
                dp[rem] = Math.min(dp[rem], 1 + dp[remAmount]);
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount]
}

console.log(coinChange([1,2,5], 11))