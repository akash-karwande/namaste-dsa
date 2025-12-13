// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

function search(arr, target) {
    let l = 0;
    let r = arr.length - 1;

    while(l <= r) {
        let m = l + Math.floor((r-l)/2);
        if(arr[m] === target) {
            return m;
        }

        // left is sorted
        if(arr[l] <= arr[m]) { //
            if(target >= arr[l] && target < arr[m]) {
                r = m - 1;
            } else {
                l = m + 1
            }
        } else {
            if(target <= arr[r] && target > arr[m]) {
                l = m + 1
            } else {
                r = m - 1
            }
        }
    }
    return -1
}

console.log(search([1,0], 0));