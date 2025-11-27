// input s = '  fly   to   the moon    '
// ouput 4
// description: last word is moon and its length is 4

function lastWordLength(str) {
    let n = str.length - 1;
    console.log(n)
    // trim the spaces from end
    while(n >= 0) {
        if(str[n] !== ' ') break
        n--;
    }

    console.log(n)

    let count = 0;
    // return the count of last word
    while(n >= 0) {
        if(str[n] === ' ') break; 
        count++;
        n--;
    }

    console.log(n)

    return count;
}

// 2nd approach with one while 

function lastWordLength2(str) {
    let n = str.length - 1;
    let count = 0;

    while(n >= 0) {
        if(str[n] !== ' ') {
            count++;
        } else if(count > 0){
            break
        }

        n--;
    }
    return count
}

console.log(lastWordLength('  fly   to   the moon    '))