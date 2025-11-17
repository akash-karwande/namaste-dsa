// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"

// Input: s = "abcd", k = 2
// Output: "bacd"

function reverseString(str , k) {
    str = str.split('');
    let mid = Math.floor(k/2);
    for(let i = 0; i < str.length; i = i + (2*k)) {
        console.log(str[i]);
        for(let j = 0; j < mid; j++) {
            let temp = str[i+j];
            str[i+j] = str[i+ k-1-j];
            str[i+ k-1-j] = temp
        }
    }

    return str.join('');
}

console.log(reverseString('abcdefg', 2))

// time is O(n), space is O(n)