// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
// In this case, the max area of water (blue section) the container can contain is 49.

// steps/approach
// Initialize two pointers i = 0 and j = arr.length - 1.
// Calculate the area between the two lines at i and j:
// area = min(arr[i], arr[j]) * (j - i)

// Track the maximum area found so far.
// Move the pointer pointing to the shorter line inward (to potentially find a taller line and maximize area).
// Repeat until i < j


function findMaxWaterContainer(arr) {
    let p1 = 0;
    let p2 = arr.length -1;
    let maxWater = 0;

    while(p1 < p2) {
        let area = Math.min(arr[p1], arr[p2]) * (p2-p1);
        maxWater = Math.max(maxWater, area);
        if(arr[p1] > arr[p2]) {
            p2--
        } else {
            p1++
        }
    }

    return maxWater

}


console.log(findMaxWaterContainer([1,8,6,2,5,4,8,3,7]));