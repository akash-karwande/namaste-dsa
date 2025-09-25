function reverseInteger(n) {
    let nCopy = n;
    n = Math.abs(n);

    let rev = 0;
    while(n > 0) {
        let last = n % 10; // for getting last digit
        rev = last + (rev * 10);
        n = Math.floor(n / 10); // reduce one digit
    }

    return nCopy < 0 ? - rev : rev
}

console.log(reverseInteger(-1234));