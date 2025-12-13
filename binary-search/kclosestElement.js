// Problem Statement:
// Given a sorted array, this algorithm returns the k elements closest to a 
// target value x. The output is sorted in ascending order.

// Approach:
// We apply binary search to find the best starting index of the k closest elements window.
// We compare arr[m + k] - x and x - arr[m] to decide whether to shift the window left or right.
// Once we find the optimal window, return the subarray from index l to l + k - 1.
// Time & Space Complexity:
// Time Complexity: O(log(n – k) + k)
// Space Complexity: O(k)

// Dry Run
// Input (assumed): arr = [1, 3, 5, 6, 4, 2], k = 3, x = 5

// Initial:
// l = 0, r = arr.length - k = 6 - 3 = 3
// --- While Loop Execution ---
// Loop 1:
// m = l + Math.floor((r - l) / 2) = 0 + Math.floor((3 - 0) / 2) = 1
// arr[m + k] = arr[1 + 3] = arr[4] = 4
// arr[m] = arr[1] = 3
// Compute comparisons:
// (arr[m + k] - x) = 4 - 5 = -1
// (x - arr[m]) = 5 - 3 = 2
// Check: (arr[m + k] - x) < (x - arr[m]) → -1 < 2 → true
// Action: l = m + 1 = 2
// Loop 2:
// l = 2, r = 3
// m = 2 + Math.floor((3 - 2) / 2) = 2
// arr[m + k] = arr[2 + 3] = arr[5] = 2
// arr[m] = arr[2] = 5
// Compute comparisons:
// (arr[m + k] - x) = 2 - 5 = -3
// (x - arr[m]) = 5 - 5 = 0
// Check: -3 < 0 → true
// Action: l = m + 1 = 3
// Exit Condition:
// l = 3, r = 3 → loop ends
// Build answer:
// Take elements from index l to l + k - 1:
// indices 3, 4, 5 → arr[3] = 6, arr[4] = 4, arr[5] = 2
// ans = [6, 4, 2]
// --- Final Result ---
// Function returns: [6, 4, 2]
// Note: The algorithm assumes arr is sorted (non-decreasing). Using an 
// unsorted array (like the input above) still runs, but results may not match
// the intended "k closest elements" semantics for sorted inputs.

var findClosestElements = function(arr, k, x) {
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        let m = l + Math.floor((r - l) / 2);
        if ((arr[m + k] - x) < (x - arr[m])) {
            l = m + 1;
        } else {
            r = m;
        }
    }
    let ans = [];
    for(let i = l; i < l + k; i++) {
        ans.push(arr[i]);
    }
    return ans;
};