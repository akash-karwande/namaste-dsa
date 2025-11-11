// find f(n) where f(0) = 0, f(1) = 1

// f(n) = f(n-1) + f(n-2);

function getNumberFromFibonacci(n) {
    if(n <= 1) return n;

    return getNumberFromFibonacci(n-1) + getNumberFromFibonacci(n-2);
}

console.log(getNumberFromFibonacci(16));