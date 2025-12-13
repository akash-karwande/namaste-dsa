// Problem Statement:
// This version improves clarity by separating the two binary searches more cleanly. 
// We use one binary search to find the first index, and another to find the last 
// index of the target.

// Approach:
// Binary search for the **first index** (on match, shift right side).
// Binary search for the **last index** (on match, shift left side).
// Update ans[0] and ans[1] accordingly.
// Time & Space Complexity:
// Time Complexity: O(logn)
// Space Complexity: O(1)

// Dry Run
// Input: arr = [5, 7, 7, 8, 8, 10], target = 8

// Initial:
// l = 0, r = 5
// ans = [-1, -1]

// --- First While Loop (find first index) ---
// Loop 1:
// m = 0 + Math.floor((5 - 0) / 2) = 2
// arr[m] = 7 < 8 → true
// l = m + 1 = 3

// Loop 2:
// m = 3 + Math.floor((5 - 3) / 2) = 4
// arr[m] = 8 < 8 → false
// r = m = 4

// Loop 3:
// m = 3 + Math.floor((4 - 3) / 2) = 3
// arr[m] = 8 < 8 → false
// r = m = 3

// Exit (l = 3, r = 3)
// arr[l] = 8 → ans[0] = 3

// --- Second While Loop (find last index) ---

// Reset: l = 0, r = 5

// Loop 1:
// m = 0 + Math.ceil((5 - 0) / 2) = 3
// arr[m] = 8 > 8 → false
// l = m = 3

// Loop 2:
// m = 3 + Math.ceil((5 - 3) / 2) = 4
// arr[m] = 8 > 8 → false
// l = m = 4

// Loop 3:
// m = 4 + Math.ceil((5 - 4) / 2) = 5
// arr[m] = 10 > 8 → true
// r = m - 1 = 4

// Exit (l = 4, r = 4)
// arr[l] = 8 → ans[1] = 4

// --- Final Result ---
// ans = [3, 4]
  
var searchRange = function(arr, target) {
    let l = 0;
    let r = arr.length - 1;
    let ans = [-1, -1];
    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);
        if (arr[m] === target) {
            ans[0] = m;
            r = m - 1;
        } else if (arr[m] < target) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }
    l = 0;
    r = arr.length - 1;
    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);
        if (arr[m] === target) {
            ans[1] = m;
            l = m + 1;
        } else if (arr[m] < target) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }
    return ans;
};