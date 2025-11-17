// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", 
// each substring contains same number of 'L' and 'R'.


function balancedString(str) {
    let lCount = 0;
    let rCount = 0;
    let balancedCount = 0;

    for(let i = 0; i < str.length; i++) {
        if(str[i] === 'R') {
            rCount++
        } else {
            lCount++
        }

        if(lCount === rCount) {
            balancedCount++;
            lCount = 0;
            rCount = 0;
        }
    }

    return balancedCount
}

console.log(balancedString('LLLLRRRR'))