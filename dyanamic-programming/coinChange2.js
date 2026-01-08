// Input: amount = 5, coins = [1,2,5]
// Output: 4
// Explanation: there are four ways to make up the amount:
// 5=5
// 5=2+2+1
// 5=2+1+1+1
// 5=1+1+1+1+1



function coinChange(amount, coins) {
    let dp = {};
    const fn = (remA, start) => {
        if(remA === 0) return 1;
        if(remA < 0) return 0;
        let key = start + '-' + remA;
        if(key in dp) return dp[key]
        let combinations = 0;
        for(let i = start; i < coins.length; i++) {
            combinations = combinations + fn(remA-coins[i], i);
        }
        return dp[key] = combinations;
    }

    return fn(amount, 0)
}

console.log(coinChange(5, [1,2,5]))