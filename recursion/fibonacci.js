// find f(n) where f(0) = 0, f(1) = 1

// f(n) = f(n-1) + f(n-2);

let store = {};
function getNumberFromFibonacci(n) {
    if (n <= 1) return n;
    if (!store[n]) {
         console.log("store...", store)
         store[n] = getNumberFromFibonacci(n - 1) + getNumberFromFibonacci(n - 2);
    }
    console.log("getting from store");
    console.log("store...", store)
    return store[n];
}

console.log(getNumberFromFibonacci(2));