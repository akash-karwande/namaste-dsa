// Input: s = "paper", t = "title"
// Output: true

// Input: s = "foo", t = "bar"
// Output: false

function isopormicString(s, t) {
    if(s.length !== t.length) return false;
    let charIndexS = {}, charIndexT = {};
    for(let i = 0; i < s.length; i++) {
        if(!charIndexS[s[i]]) charIndexS[s[i]] = i + 1;
        if(!charIndexT[t[i]]) charIndexT[t[i]] = i + 1;
        console.log(charIndexS, charIndexT)
        if(charIndexS[s[i]] !== charIndexT[t[i]]) {
            return false
        }
        if(!charIndexS[s[i]] || !charIndexT[t[i]]) return false;
    }
    console.log(charIndexS, charIndexT)
    return true;
}


console.log(isopormicString('paper', 'title'));