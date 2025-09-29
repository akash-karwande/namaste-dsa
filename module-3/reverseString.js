function reverseString(strArr) {
    let n = strArr.length;
    for(let i = 0; Math.floor(i < n/2); i++) {
        let temp = strArr[i];
        strArr[i] = strArr[n-1-i];
        strArr[n-1-i] = temp;
    }

    return strArr
}

console.log(reverseString(['a', 'k', 'a', 's', 'h']))