// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1


function coinChange(coins, amount) {
    let n = coins.length;
    let dp = {}

    let helper = (remAmount) => {
        if(remAmount === 0) return 0
        if(remAmount < 0) return -1;
        if(dp[remAmount]) return dp[remAmount];
        let minCoins = Infinity;

        for(let i = 0; i < n; i++) {
            let res = helper(remAmount - coins[i]);
            if(res != -1) {
                minCoins = Math.min(minCoins, 1 + res)
            }
        }

        dp[remAmount] = minCoins === Infinity ? -1 : minCoins;

        return dp[remAmount];

    }
    return helper(amount);
}

console.log(coinChange([1,2,5], 11));