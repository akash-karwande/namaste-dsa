// given an arr of integer is sorted in non decresing order
// input  [0 0 1 1 1 2 2 3 3 4 4 5]
// output 5 with updated given array like [0 1 2 3 4 5 2 3 3 4 4 5]
// 1st 5 element is unique and sorted
// 
function removeDuplicate(arr) {
    let x = 0; // 1st pointer 
    for (let i = 0; i < arr.length; i++) {
       if(arr[i] > arr[x]) {
        x = x + 1;
        arr[x] = arr[i]
       }
    }
    console.log(arr)
    return x + 1
}

console.log(removeDuplicate( [0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 5]))