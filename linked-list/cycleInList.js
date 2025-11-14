function hasCycle(head) {
    let curr = head;
    let nodes = new Set();

    while(curr) {
        if(nodes.has(curr)) {
            return true
        }
        nodes.add(curr);
        curr = curr.next;
    }
    return false;
}