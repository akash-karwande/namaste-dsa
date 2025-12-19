// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]


function groupAnagram(strs) {
    let group = [];
    if(strs.length < 2) {
        group.push(strs);
        return group
    }
    let map = {};
    for(let i = 0; i < strs.length; i++) {
        let sorted = strs[i].split('').sort().join('');
        if(map[sorted]) {
            map[sorted].push(strs[i])
        } else {
            map[sorted] = [strs[i]]
        }
    }
    return [...Object.values(map)];
}

console.log(groupAnagram(["eat","tea","tan","ate","nat","bat"]))