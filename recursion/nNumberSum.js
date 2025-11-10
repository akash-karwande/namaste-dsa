// FIND the sum of n numbers
// input n = 5;
// output 15
// 5+4+3+2+1 = 15


function sum(n) {
    if(n === 0) return 0 // base condition

    return n + sum(n-1)
}

console.log(sum(5));
