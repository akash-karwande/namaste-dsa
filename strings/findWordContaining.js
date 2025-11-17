// input words = ["abc", "bcd", "bca"] k = "a"
// ouput [0, 2]


function findWordContaining(words, k) {
    let res = [];

    for(let i = 0; i < words.length; i++) {
        // if(words[i].includes(k)) {
        //     res.push(i)
        // }

        for(let j = 0; j < words[i].length; j++) {
            if(words[i][j] === k){
                res.push(i);
                break;
            }
        }
    }

    return res;
}