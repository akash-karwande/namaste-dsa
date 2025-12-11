// Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
// Output: [-1,3,-1]

function findNextGreaterElement(nums1, nums2) {
    let stack = [];
    let result = {};
    let n = nums2.length - 1;
    result[nums2[n]] = -1
    stack.push(nums2[n]);
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length) {
            if (stack[stack.length - 1] > nums2[i]) {
                result[nums2[i]] = stack[stack.length - 1];
                break;
            } else {
                stack.pop();
            }
        }
        if (stack.length === 0) {
            result[nums2[i]] = -1
        }
        stack.push(nums2[i]);
    }
    let final = [];
    for (let i = 0; i < nums1.length; i++) {
        final.push(result[nums1[i]])
    }
    return final;
}


console.log(findNextGreaterElement([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7]))
// findNextGreaterElement([4, 1, 2], [1, 3, 4, 2])