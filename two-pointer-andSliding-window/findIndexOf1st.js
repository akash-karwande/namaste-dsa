// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.


function find1stIndex(haystack, needle) {
    let n = haystack.length;
    for(let i = 0 ; i <= n - needle.length; i++) {
        let j;
        for(j = 0; j < needle.length; j++) {
            if(needle[j] !== haystack[i + j]) {
                break;
            }
        }
        if(j === needle.length) {
            return i;
        }
    }

    return -1;

}

console.log(find1stIndex("sadbutsad", "sad"));