// Example 1:
// Input: s = "abc", t = "ahbgdc"
// Output: true

// Example 2:
// Input: s = "axc", t = "ahbgdc"
// Output: false

function isInSequence(s, t) {
    let p1 = 0;
    let p2 = 0;

    for(let i = 0; i < t.length; i++) {
        if(s[p1] === t[p2]) {
            p1++;
            p2++;
        } else {
            p2++;
        }
    }

    return p1 === s.length;
}

console.log(isInSequence("bac", "ahbgdc"))