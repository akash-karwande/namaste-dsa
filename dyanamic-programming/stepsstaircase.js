// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step


// 1. top bottom approach/recursive approach
let dp = {};
function stepStairCase(n) {
    if (n <= 2) return n;

    if (!dp[n]) {
        dp[n] = stepStairCase(n - 1) + stepStairCase(n - 2)
    }

    return dp[n];
}

// 2. bottom up/ iterative approach
function stepStairCase2(n) {
    let dp = [0, 1, 2];
    for(let i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }

    return dp[n];
}