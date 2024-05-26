
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function reverseLinkedList(head) {
    let prevNode = null;
    let currentNode = head;
  
    while (currentNode !== null) {
      let nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
  
    return prevNode;
  }
  let head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(5);
  
  let newHead = reverseLinkedList(head);
  let currentNode = newHead;
  while (currentNode !== null) {
    console.log(currentNode.data);
    currentNode = currentNode.next;
  }

