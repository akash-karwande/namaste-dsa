// input arr = [1,2,3,4,5];
// output 15

let arr = [1, 2, 3, 4, 5];
function sum(n) {
    if (n == 0) return arr[n];
    return arr[n] + sum(n - 1);
}

console.log(sum(arr.length - 1));