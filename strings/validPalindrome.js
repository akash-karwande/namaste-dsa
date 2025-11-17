// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

function validPalindrome(str) {
    str = str.replace(/[^a-zA-Z0-9\s]/g, '');
    let strArr = [];

    for(let i = 0; i < str.length; i++) {
        if(str[i] !== ' ') {
            strArr.push(str[i].toLowerCase())
        }
    }

    let mid = Math.floor(strArr.length/2);
    let copyArr = [...strArr];
    for(let i = 0; i < mid; i++) {
        let temp = strArr[i];
        strArr[i] = strArr[strArr.length - 1 - i];
        strArr[strArr.length - 1 - i] = temp;
    }

    return strArr.join('') === copyArr.join('')
}


// akshay saini's solution

function validPalindrome2(str) {
    str = str.toLowerCase();
    let filteredString = '';
    let reversedString = '';
    for(let i = 0; i < str.length; i++) {
        if(str[i].match(/[a-z0-9i]/)){
            filteredString = filteredString + str[i];
            reversedString = str[i] + reversedString;
        }
    }

     console.log(filteredString);
    console.log(reversedString)
    return filteredString === reversedString
}

// using two pointer;
function validPalindrome3(str) {
    str = str.toLowerCase();
    let f = 0;
    let s = str.length -1;

    while(f < s) {
        if(!str[f].match(/[a-z0-9i]/)){
            f++;
        }else if(!str[s].match(/[a-z0-9i]/)) {
            s--;
        }else if(str[f] === str[s]) {
            f++;
            s--;
        } else {
            return false
        }
    }

    return true
}


console.log(validPalindrome3('A man, a plan, a canal: Panama'))
console.log(validPalindrome3('race a car'))