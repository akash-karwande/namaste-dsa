


function findLongestSubarrayWithSumK(arr, k) {
    const sumMap = {}; // Stores { prefixSum: firstSeenIndex }
    let currentSum = 0;
    let maxLength = 0
    let result = [];

      sumMap[0] = -1;

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];
        let target = currentSum - k;
        if (sumMap.hasOwnProperty(target)) {
            let prevIndex = sumMap[target];
            let currentLength = i - prevIndex;
            // console.log(i, maxLength, currentLength)
            if (currentLength > maxLength) {
                maxLength = currentLength;
                result = arr.slice(prevIndex + 1, i + 1);
            }
        }

        // Only store the first occurrence of currentSum to maximize subarray length
        if (!sumMap.hasOwnProperty(currentSum)) {
            sumMap[currentSum] = i;
        }
    }

    return result;
}

const arr = [1, 1, 1, 3, 0,0,0];

console.log(findLongestSubarrayWithSumK(arr, 3))