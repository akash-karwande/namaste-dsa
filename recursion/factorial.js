// input n = 3;
// output 3*2*1 = 6

function fact(n) {
    if (n == 1) return 1;

    return n * fact(n - 1);
}

console.log(fact(5));