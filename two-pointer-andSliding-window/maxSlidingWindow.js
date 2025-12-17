// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3

// Output: [3,3,5,5,6,7]

// Explanation:

// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7


// Approach
// Initialize:
// res[] to store result.
// q[] to store elements in decreasing order (front always holds the max).
// Two pointers: i (window start) and j (window end).
// Traverse the array:
// Remove elements from the back of the queue if they are smaller than current (arr[j]), since they can't be max.
// Add arr[j] to the queue.
// When window size k is hit (j >= k - 1):
// Push the front of the queue to res (it's the current max).
// If the element going out of the window (arr[i]) is equal to the front of the queue, remove it (q.shift()).
// Move window ahead by incrementing i.
// Return the result array res.


var maxSlidingWindow = function(arr, k) {
  let res = [];
  let q = [];

  let i = j = 0;
  while (j < arr.length) {
    while (q.length && arr[j] > q[q.length - 1]) {
      q.pop();
    }
    q.push(arr[j]);

    if (j >= k - 1) {
      res.push(q[0]);
      if (arr[i] == q[0]) q.shift();
      ++i;
    }
    ++j;
  }
  return res;
};