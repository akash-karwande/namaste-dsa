// time O(n) and space O(n);

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

// fyode's cycle algorithm/ or slow and fast pointer in cycle

// time O(n) and space O(1);
function hasCycle2(head) {
    let slow = head;
    let fast = null;
    if(head && head.next) {
        fast = fast.next;
    }
    while(fast && fast.next) {
        if(slow == fast) {
            return true
        } else {
            slow = slow.next;
            fast = fast.next.next;
        }
    }
    return false
}