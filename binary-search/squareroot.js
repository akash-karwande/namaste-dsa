// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and 
// since we round it down to the nearest integer, 2 is returned.

function squareRoot(x) {
    if(x < 2) return x;

    let left = 2;
    let right = Math.floor(x/2);

    while(left <= right) {
        let middle = Math.floor((left+ right)/2);
        if(middle ** 2 == x) {
            return middle
        } else if(middle ** 2 > x) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }

    return right;
}