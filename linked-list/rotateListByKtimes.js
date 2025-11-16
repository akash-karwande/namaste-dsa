

function rotateListByKtimes(head , k) {

    // calculate length of list
    if(!head || !head.next) return head;

    let length = 0;
    let curr = head;
    while(curr) {
        curr = curr.next;
        length++;
    }

    k = k % length;

    let s =head;
    let f = head;

    // move f by k times ahead;
    for(let i = 0; i < k; i++) {
        f = f.next;
    };

    // reach the end of list
    while(f.next) {
        s = s.next;
        f = f.next;
    }

    // make pointer to start and return newHead;
    f.next = head;
    let newHead = s.next;
    s.next = null;

    return newHead;
}

