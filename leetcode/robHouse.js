// Input: nums = [1,2,3,1]
// Output: 4

// Input: nums = [2,7,9,3,1]
// Output: 12

var robHouses = function (nums) {
    // consider for small case [9, 3, 1];

    // if you decide to rob house 1 i.e 9 or (n-2)
    // loot(n-2) = loot(n-2) + loot(n)

    // if you decide to rob house 2 i.e 3 or (n-1)
    // loot(n-1) = loot(n-1);

    // max loot at n houses is
    // loot(n) = Math.max(loot(n-2), loot(n-1))
    if (nums.length < 2) return nums[0];
    let max = Math.max(nums[0], nums[1])
    if (nums.length === 2) return max;
    let rodArr = Array(nums.length).fill(0);
    rodArr[0] = nums[0];
    rodArr[1] = max;
    for (let i = 2; i < nums.length; i++) {
        rodArr[i] = Math.max(rodArr[i - 2] + nums[i], rodArr[i - 1]);
    }
    console.log(rodArr)
    return rodArr[rodArr.length - 1];
};

// console.log(robHouses([1, 2, 3, 1]));
// console.log(robHouses([2, 7, 9, 3, 1]));

// console.log(robHouses([2, 1, 1, 2]))

var findDuplicate = function (nums) {
    let duplicate = nums[0];
    let isfound = false;

    for (let i = 0; i < nums.length; i++) {
        if(isfound) {
            return duplicate;
        } else {
            duplicate = nums[i]
        }
        for (let j = i + 1; j < nums.length; j++) {
            if (duplicate === nums[j]) {
                isfound = true;
                return duplicate;
            }
        }
    }

    return duplicate

};

function findDuplicate2(nums) {
    let map = {};
    let dup = 0;

    for (let i = 0; i < nums.length; i++) {
        if(map[nums[i]]) {
            map[nums[i]]++
        } else {
            map[nums[i]] = 1
        }
    }

    for (let key in map) {
        if(map[key] >= 2) {
            dup = key;
        }
    }

    return Number(dup)
}
          
function findDuplicate3(nums) {
    let p1 = 0, p2 = 1;

    while(p2 <= nums.length) {

    }
}
console.log(findDuplicate2([8, 1, 1, 9, 5, 4, 2, 7, 3, 6]))



