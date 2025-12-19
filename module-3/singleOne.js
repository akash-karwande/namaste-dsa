// input arr = [2,2,1]
// output 1

// input arr = [1,2,3,4, 1,2,3]
// output 4

// other numbers appears two times but 1 and 4 only times

function findSingleCountDigit(arr) {
    let xor = 0;
    for (let i = 0; i < arr.length; i++) {
        xor = xor ^ arr[i]
    }
    return xor
}

console.log(findSingleCountDigit([2, 2, 1]));

// ^ bitwise xor operator

// a ^ 0 = a;
// a ^ a = 0

// so bitwise xor(^) operator can be used to remove duplicates 