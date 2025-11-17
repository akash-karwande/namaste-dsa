// Example 1:
// Input: s = "successes"
// Output: 6
// Explanation:
// The vowels are: 'u' (frequency 1), 'e' (frequency 2). The maximum frequency is 2.
// The consonants are: 's' (frequency 4), 'c' (frequency 2). The maximum frequency is 4.
// The output is 2 + 4 = 6.


function findSumOfMaxVowelConsonant(str) {
    let vowels = 'aeiou';
    let vSet = new Set(vowels);
    let obj = {};
    
    for(let i = 0; i < str.length; i++) {
        if(obj[str[i]]) {
            obj[str[i]]++
        } else {
            obj[str[i]] = 1
        }
    }
    let maxVowel = 0;
    let maxConso = 0;
    let objKeys = Object.keys(obj)
    for(let i = 0; i < objKeys.length; i++) {
        if(vSet.has(objKeys[i])) {
            if(obj[objKeys[i]] > maxVowel) {
                maxVowel = obj[objKeys[i]]
            }
        } else {
            if(obj[objKeys[i]] > maxConso) {
                maxConso = obj[objKeys[i]]
            }
        }
    }
    return maxVowel + maxConso;
}

console.log(findSumOfMaxVowelConsonant('successes'))

//time is O(n) and space is O(1);