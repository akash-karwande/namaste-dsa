// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].



function twoSum(arr, target) {
    const map = {};

    for(let i = 0; i < arr.length; i++) {
        map[arr[i]] = i;
    }

    for(let i = 0; i < arr.length; i++) {
        let pairToFind = target - arr[i];
        if(map[pairToFind] && map[pairToFind] != i) {
            return [i, map[pairToFind]]
        }
    }
}

console.log(twoSum([1,7,2,12,16], 14))