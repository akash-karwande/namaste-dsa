function getInterSectionOfTwoList(headA, headB) {
    // store all node of B in a set
    let store = new Set();
    while(headB) {
        store.add(headB);
        headB = headB.next;
    }
    // check all nodes of A in set if present itersection is present 
    // and return that node
    while(headA) {
        if(store.has(headA)) {
            return headA
        }
        headA = headA.next;
    }

    return null
   
}