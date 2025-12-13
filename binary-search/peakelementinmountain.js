// Problem Statement:
// This algorithm finds the peak element in a mountain array using binary search. 
// A mountain array increases to a peak and then decreases.

// Approach:
// Initialize l = 0 and r = arr.length - 1.
// Use binary search:
// If arr[m + 1] > arr[m], peak is to the right → l = m + 1.
// Else peak is at m or to the left → r = m.
// When loop ends, l (or r) is the peak index.
// Time & Space Complexity:
// Time Complexity: O(logn)
// Space Complexity: O(1)

// Dry Run
// Input: arr = [1, 3, 5, 6, 4, 2]

// Initial:
// l = 0, r = 5

// --- While Loop Execution ---

// Loop 1:
// m = 0 + Math.floor((5 - 0) / 2) = 2
// arr[m] = 5, arr[m+1] = 6
// Condition: arr[m+1] > arr[m] → 6 > 5 → true
// l = m + 1 = 3

// Loop 2:
// l = 3, r = 5
// m = 3 + Math.floor((5 - 3) / 2) = 4
// arr[m] = 4, arr[m+1] = 2
// Condition: arr[m+1] > arr[m] → 2 > 4 → false
// r = m = 4

// Loop 3:
// l = 3, r = 4
// m = 3 + Math.floor((4 - 3) / 2) = 3
// arr[m] = 6, arr[m+1] = 4
// Condition: arr[m+1] > arr[m] → 4 > 6 → false
// r = m = 3

// Exit Condition:
// l = 3, r = 3 → loop ends

// --- Final Result ---
// Return r = 3
// Peak element index = 3 (value = 6)

// Input: arr = [1, 3, 5, 6, 4, 2]
function findPeakElement(arr) {
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        let m = l + Math.floor((r - l) / 2);

        if (arr[m + 1] > arr[m]) {
            l = m + 1;
        } else {
            r = m;
        }
    }

    return arr[l];

}
console.log(findPeakElement([1, 3, 5, 6, 4, 2]))