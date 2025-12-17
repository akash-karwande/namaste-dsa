// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3. 
// Note that "bca" and "cab" are also correct answers.


function longestSubString(str) {
    let map = {};
    let max = 0;
    let p1 = 0;
    let p2 = 0;

    for (p2 = 0; p2 < str.length; p2++) {
        if (map[str[p2]] != undefined && map[str[p2]] >= p1) {
            p1 = map[str[p2]] + 1
        }

        map[str[p2]] = p2;
        currWS = (p2 - p1) + 1;
        max = Math.max(max, currWS);
    }
    return max;
}

console.log(longestSubString("abcabcbb"))