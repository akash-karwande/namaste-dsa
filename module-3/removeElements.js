// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]


function removeElements(arr, ele) {
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== ele) {
            arr[x] = arr[i];
            x = x +1
        }
    }
    console.log(arr);
    return x;
}

console.log(removeElements([3,2,2,3], 3));