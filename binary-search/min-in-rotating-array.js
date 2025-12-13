// Problem Statement:
// This problem asks us to find the smallest element in an array that was 
// originally sorted in ascending order and then rotated. The array has no duplicates.

// Approach:
// We use binary search to locate the minimum element efficiently.
// Initialize l = 0 and r = a.length - 1.
// While l ≤ r.
// If a[l] ≤ a[r] → subarray is sorted → return a[l].
// Find mid: m = l + floor((r - l) / 2).
// If a[m] < a[m - 1] → pivot found → return a[m].
// If a[l] > a[m] → rotation point is left → r = m - 1.
// Else → rotation point is right → l = m + 1.
// Time & Space Complexity:
// Time Complexity: O(logn)

// Space Complexity: O(1)

// Dry Run
// Input: a = [4,5,6,7,0,1,2]

// Initial:
// l = 0, r = 6
// a = [4,5,6,7,0,1,2]

// Loop 1:
// a[l] <= a[r] → 4 <= 2 → false
// m = 0 + Math.floor((6 - 0) / 2) = 3
// a[m] = 7, a[m - 1] = 6
// Check: a[m] < a[m - 1]? → 7 < 6 → false
// Check: a[l] > a[m]? → 4 > 7 → false
// Else → l = m + 1 = 4

// Loop 2:
// l = 4, r = 6
// a[l] <= a[r] → 0 <= 2 → true
// Return a[l] = 0

var findMin = function(a) {
    let l = 0;
    let r = a.length - 1;

    while (l <= r) {
        if (a[l] <= a[r]) {
            return a[l];
        }

        let m = l + Math.floor((r - l) / 2);
        if (a[m] < a[m - 1]) {
            return a[m];
        }

        if (a[l] > a[m]) {
            r = m - 1;
        } else {
            l = m + 1;
        }
    }
};
  