// CLL.js

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
  }

  // Traverse and print the list continuously
  traverse() {
    if (!this.head) {
      console.log("List is empty");
      return;
    }

    let current = this.head;
    let output = "";
    do {
      output += current.data + " -> ";
      current = current.next;
    } while (current !== this.head);

    output += "(back to head)";
    console.log("CLL: " + output);
  }

  // Insert at end
  insertAtEnd(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head;
    } else {
      let current = this.head;
      while (current.next !== this.head) {
        current = current.next;
      }
      current.next = newNode;
      newNode.next = this.head;
    }
  }

  // Delete at beginning
  deleteAtBeginning() {
    if (!this.head) return;

    if (this.head.next === this.head) {
      // Only one node
      this.head = null;
      return;
    }

    // Find last node to update its next pointer
    let current = this.head;
    while (current.next !== this.head) {
      current = current.next;
    }

    current.next = this.head.next;
    this.head = this.head.next;
  }

  // Find nth node (1-based index)
  findNthNode(n) {
    if (!this.head || n <= 0) return null;

    let current = this.head;
    let count = 1;

    do {
      if (count === n) return current.data;
      current = current.next;
      count++;
    } while (current !== this.head);

    return null; // n is larger than list size
  }
}

// Test function with 3 test cases per method
function testCircularLinkedList() {
  const cll = new CircularLinkedList();

  console.log("InsertAtEnd:");
  cll.insertAtEnd(10);
  cll.insertAtEnd(20);
  cll.insertAtEnd(30);
  cll.traverse(); // Expected: 10 -> 20 -> 30 -> (back to head)

  console.log("DeleteAtBeginning:");
  cll.deleteAtBeginning();
  cll.traverse(); // Expected: 20 -> 30 -> (back to head)
  cll.deleteAtBeginning();
  cll.traverse(); // Expected: 30 -> (back to head)
  cll.deleteAtBeginning();
  cll.traverse(); // Expected: List is empty

  console.log("FindNthNode:");
  cll.insertAtEnd(100);
  cll.insertAtEnd(200);
  cll.insertAtEnd(300);
  console.log(cll.findNthNode(1)); // Expected: 100
  console.log(cll.findNthNode(3)); // Expected: 300
  console.log(cll.findNthNode(5)); // Expected: null (out of bounds)
}

testCircularLinkedList();
