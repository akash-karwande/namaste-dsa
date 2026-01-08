// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".

// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false


function wordBreak(str, wordDict) {
    let dp = {};
    const fn = (remS) => {
        if(remS === "") return true;
        if(remS in dp) return dp[remS];
        let result = false;
        for(let i = 0; i < remS.length; i++) {
            let subStr = remS.substring(0, i + 1);
            if(wordDict.includes(subStr) &&  fn(remS.substring(i+1))) {
                result = true;
            }
        }
        return dp[remS] = result;
    }
    return fn(str);
}

console.log(wordBreak("catsandog", ["cats","dog","sand","and","cat"]));

