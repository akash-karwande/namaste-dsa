function isNumberPalindrome(n) {
    let nCopy = n;
    let rev = 0;

    while (n > 0) {
        let rem = n % 10; // getting last digit
        rev = rem + (rev * 10);
        n = Math.floor(n / 10) // reduce one digit
    }

    return rev == nCopy
}

console.log(isNumberPalindrome(121));