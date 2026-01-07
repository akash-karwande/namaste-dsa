// Input: s = "226"
// Output: 3
// Explanation:
// "226" could be decoded as "BZ" (2 26), "VF" (22 6), 
// or "BBF" (2 2 6).

function decodeWays(str) {
    let dp = {};
    const fn = (remS) => {
        if(remS === '') return 1;
        if(remS === '0') return 0;

        console.log(dp)
        if(remS in dp) return dp[remS];

        let n = remS.length;
        let oneDigit = remS.substring(n-1);
        let twoDigit = remS.substring(n-2);

        let ans = 0;
        if(oneDigit != "0") {
            ans = ans + fn(remS.substring(0, n-1));
        }

        if(twoDigit >= 10 && twoDigit <= 26) {
            ans = ans + fn(remS.substring(0, n-2))
        }

        dp[remS] = ans;
        return ans;
    }

    return fn(str);
}

console.log(decodeWays("1325"))

