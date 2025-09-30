// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

function mergeArray(arr1, m, arr2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  for (let i = m + n - 1; i >= 0; i--) {
    if(p2 < 0) break
    if (p1 >= 0 && arr1[p1] > arr2[p2]) {
      arr1[i] = arr1[p1];
      p1 = p1 - 1;
    } else {
      arr1[i] = arr2[p2];
      p2 = p2 - 1;
    }
  }

  return arr1
}

console.log(mergeArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
