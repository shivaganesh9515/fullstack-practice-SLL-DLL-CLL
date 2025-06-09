// DLL.js

// Node class represents each element in the doubly linked list
class Node {
    constructor(data) {
        this.data = data;   // Value stored in the node
        this.prev = null;   // Pointer to previous node
        this.next = null;   // Pointer to next node
    }
}

// DoublyLinkedList class manages the linked list operations
class DoublyLinkedList {
    constructor() {
        this.head = null; // First node in the list
        this.tail = null; // Last node in the list
    }

    // Print list from head to tail
    displayForward() {
        let current = this.head;
        let output = "";
        while (current !== null) {
            output += current.data + " <-> ";
            current = current.next;
        }
        output += "null";
        console.log("DLL Forward: " + output);
    }

    // Print list from tail to head
    displayBackward() {
        let current = this.tail;
        let output = "";
        while (current !== null) {
            output += current.data + " <-> ";
            current = current.prev;
        }
        output += "null";
        console.log("DLL Backward: " + output);
    }

    // Insert node at specific position (0-based index)
    insertAtPosition(data, pos) {
        const newNode = new Node(data);
        if (pos < 0) return; // invalid position

        // If list is empty
        if (this.head === null) {
            if (pos === 0) {
                this.head = newNode;
                this.tail = newNode;
            }
            return;
        }

        // Insert at beginning
        if (pos === 0) {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
            return;
        }

        // Traverse to position - 1
        let current = this.head;
        let index = 0;
        while (current.next !== null && index < pos - 1) {
            current = current.next;
            index++;
        }

        if (index !== pos - 1) {
            // Position greater than list length, insert at end
            current.next = newNode;
            newNode.prev = current;
            this.tail = newNode;
        } else {
            // Insert in the middle
            newNode.next = current.next;
            if (current.next !== null) current.next.prev = newNode;
            current.next = newNode;
            newNode.prev = current;
            if (newNode.next === null) this.tail = newNode; // Update tail if inserted at end
        }
    }

    // Delete node at specific position (0-based index)
    deleteAtPosition(pos) {
        if (pos < 0 || this.head === null) return;

        // Delete head node
        if (pos === 0) {
            if (this.head === this.tail) {
                // Only one node in the list
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
                this.head.prev = null;
            }
            return;
        }

        // Traverse to the node at position
        let current = this.head;
        let index = 0;
        while (current !== null && index < pos) {
            current = current.next;
            index++;
        }

        if (current === null) return; // position out of bounds

        if (current === this.tail) {
            // Delete tail node
            this.tail = current.prev;
            this.tail.next = null;
        } else {
            // Delete node in the middle
            current.prev.next = current.next;
            if (current.next !== null) current.next.prev = current.prev;
        }
    }
}

// Test function with 3 test cases per method
function testDoublyLinkedList() {
    const dll = new DoublyLinkedList();

    console.log("InsertAtPosition:");
    dll.insertAtPosition(10, 0); // [10]
    dll.insertAtPosition(20, 1); // [10, 20]
    dll.insertAtPosition(5, 0);  // [5, 10, 20]
    dll.insertAtPosition(15, 2); // [5, 10, 15, 20]
    dll.displayForward();        // 5 <-> 10 <-> 15 <-> 20 <-> null
    dll.displayBackward();       // 20 <-> 15 <-> 10 <-> 5 <-> null

    console.log("DeleteAtPosition:");
    dll.deleteAtPosition(2);     // Delete 15: [5, 10, 20]
    dll.deleteAtPosition(0);     // Delete 5: [10, 20]
    dll.deleteAtPosition(10);    // Out of bounds, no change
    dll.displayForward();        // 10 <-> 20 <-> null
    dll.displayBackward();       // 20 <-> 10 <-> null
}

testDoublyLinkedList();
