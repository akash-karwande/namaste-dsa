// Problem Statement:
// This algorithm finds the single non-duplicate element in a sorted array where 
// every other element appears exactly twice.

// Approach:
// Use binary search between left (l) and right (r).
// At each mid (m):
// If arr[m] === arr[m - 1], count elements on the left.
// If that count is odd → single lies left → r = m - 2.
// If count is even → single lies right → l = m + 1.
// Same logic applies if arr[m] === arr[m + 1].
// If neither left nor right match → return arr[m].
// Time & Space Complexity:
// Time Complexity: O(logn)
// Space Complexity: O(1)

// Dry Run
// Input: arr = [1, 1, 2, 2, 3, 4, 4, 5, 5]

// Initial:
// l = 0, r = 8
// --- While Loop Execution ---
// Loop 1:
// m = 0 + Math.floor((8 - 0) / 2) = 4
// arr[m] = arr[4] = 3
// arr[m-1] = arr[3] = 2
// arr[m+1] = arr[5] = 4

// Check 1: arr[m] === arr[m - 1] → 3 === 2 → false
// Check 2: arr[m] === arr[m + 1] → 3 === 4 → false

// Since neither neighbor equals arr[m], we hit the else branch:
// return arr[m] → return 3

// --- Final Result ---
// Function returns 3 (the single non-duplicate element)

// Input: arr = [1, 1, 2, 2, 3, 4, 4, 5, 5]
function findSingleElement(arr) {
    let l = 0;
    let r = arr.length - 1;
    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);
        // pair is in left side
        if (arr[m - 1] === arr[m]) {
            let leftCount = m - 1 - l;
            if (leftCount % 2 === 1) {
                r = m - 2
            } else {
                l = m + 1
            }
        } else if (arr[m + 1] === arr[m]) {
            let rightCount = m -l;
            if (rightCount % 2 === 1) {
                r = m - 1
            } else {
                l = m + 2
            }
        } else {
            return arr[m]
        }
    }
}

console.log(findSingleElement([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6]));