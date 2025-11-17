// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

// brute force approach Time is O(n * m) space is O(1)
function findJewelsInStones(jewels, stones) {
    let count = 0;

    for(let i = 0; i < stones.length; i++) {
        for(let j = 0; j < jewels.length; j++) {
            if(jewels[j] == stones[i]) {
                count++;
                break
            }
        }
    }
    return count
}
let jewels = "aA";
let stones = "aAAbbbb"
// console.log(findJewelsInStones(jewels, stones))


// time is O(n) and space is O(1);
function findJewelsInStones2(jewels, stones) {
    let jSet = new Set();
    for(let i = 0; i < jewels.length; i++) {
        jSet.add(jewels[i])
    }
    console.log(jSet)
    let count = 0;
    for(let i = 0; i < stones.length; i++) {
        if(jSet.has(stones[i])) {
            count++;
        }
    }

    return count

}

console.log(findJewelsInStones2(jewels, stones));
