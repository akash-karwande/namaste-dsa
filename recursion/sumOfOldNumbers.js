// input arr = [1,2,3,4,5]
// output 9
// odd numbers 1 + 3 + 5 = 9

let arr = [1, 2, 3, 4, 5, 7]
function sumOddNumbers(n) {
    let isOdd = (arr[n] % 2 !== 0);
    if (n == 0) return isOdd ? arr[n] : 0;
    return isOdd ? arr[n] + sumOddNumbers(n - 1) : 0 + sumOddNumbers(n - 1);

}

console.log(sumOddNumbers(arr.length - 1));