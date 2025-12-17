// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array 
// [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) 
// are being trapped.


function trap(arr) {
    let n = arr.length;
    let maxL = []
    let maxR = [];
    maxL[0] = arr[0];
    maxR[n-1] = arr[n-1];
    // calculate max L And R
    for(let i = 1; i < n; i++) {
        maxL[i] = Math.max(arr[i], maxL[i-1]);
        maxR[n-1-i] = Math.max(arr[n-1-i], maxR[n-i]);
    }

    let ans = 0;
    for(let i = 0; i < n; i++) {
        let waterTrapped = Math.min(maxL[i], maxR[i]) - arr[i];
        ans = ans + Math.max(waterTrapped, 0);
    }

    return ans;
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))