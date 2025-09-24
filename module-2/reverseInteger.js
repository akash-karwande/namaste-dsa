function reverseInteger(n) {
    let nCopy = n;
    n = Math.abs(n);

    let rev = 0;
    while(n > 0) {
        let last = n % 10;
        rev = last + (rev * 10);
        n = Math.floor(n / 10);
    }

    return nCopy < 0 ? - rev : rev
}

console.log(reverseInteger(-1234));