// input s = '  fly   to   the moon    '
// ouput 4
// description: last word is moon and its length is 4

function lastWordLength(str) {
    let n = str.length - 1;
    // trim the spaces from end
    while(n >= 0) {
        if(str[n] !== ' ') break
        n--;
    }

    let count = 0;
    // return the count of last word
    while(n >= 0) {
        if(str[n] === ' ') break; 
        count++;
        n--;
    }

    return count;
}

console.log(lastWordLength('  fly   to   the moon    '))