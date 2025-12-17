// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].



function twoSum(arr, target) {
    let p1 = 0;
    let p2 = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
        if ((arr[p1] + arr[p2]) == target) {
            return [p1 + 1, p2 + 1]
        }
        if ((arr[p1] + arr[p2]) > target) {
            p2--
        } else {
            p1++;
        }
    }
}

console.log(twoSum([2,7,11,15], 9))