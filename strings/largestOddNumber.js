// Input: num = "52"
// Output: "5"
// Explanation: The only non-empty substrings are "5", "2", and "52". 
// "5" is the only odd number.


function largestOddNumber(str) {
    let num = parseInt(str);
    if (num % 2 !== 0) return String(num);

    while (num % 2 == 0) {
        num = Math.floor(num / 10);
    }

    return String(num)
}

// Akshay saini'n solution

function largestOddNumber2(str) {
    let n = str.length - 1;
    while (n >= 0) {
        if (Number(str[n]) % 2 === 1) {
            return str.substring(0, n + 1)
        }
        n--
    }

    return "";
}

console.log(largestOddNumber2("22245"))

