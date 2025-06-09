// SLL.js

// Node class represents each element in the singly linked list
class Node {
    constructor(data) {
        this.data = data; // Value stored in the node
        this.next = null; // Pointer to the next node
    }
}

// SinglyLinkedList class manages the linked list operations
class SinglyLinkedList {
    constructor() {
        this.head = null; // Head pointer to the first node
    }

    // Print all nodes in the list
    printList() {
        let current = this.head;
        let output = "";
        while (current !== null) {
            output += current.data + " -> ";
            current = current.next;
        }
        output += "null";
        console.log("SLL: " + output);
    }

    // Insert a new node at the beginning of the list
    insertAtBeginning(data) {
        const newNode = new Node(data);
        newNode.next = this.head; // Point new node to current head
        this.head = newNode; // Update head to new node
    }

    // Insert a new node at the end of the list
    insertAtEnd(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode; // If list is empty, new node becomes head
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next; // Traverse to the last node
        }
        current.next = newNode; // Link last node to new node
    }

    // Delete the first node with the given data value
    deleteByValue(data) {
        if (this.head === null) return; // List is empty

        if (this.head.data === data) {
            this.head = this.head.next; // Remove head node
            return;
        }

        let current = this.head;
        // Traverse to the node before the one to delete
        while (current.next !== null && current.next.data !== data) {
            current = current.next;
        }

        if (current.next !== null) {
            current.next = current.next.next; // Bypass the node to delete
        }
    }

    // Search for a node with the given data value
    search(data) {
        let current = this.head;
        while (current !== null) {
            if (current.data === data) return true; // Value found
            current = current.next;
        }
        return false; // Value not found
    }
}

// Test function with 3 test cases for each method
function testSinglyLinkedList() {
    const sll = new SinglyLinkedList();

    console.log("InsertAtBeginning:");
    sll.insertAtBeginning(10);
    sll.insertAtBeginning(20);
    sll.insertAtBeginning(30);
    sll.printList();  // 30 -> 20 -> 10 -> null

    console.log("InsertAtEnd:");
    sll.insertAtEnd(40);
    sll.insertAtEnd(50);
    sll.insertAtEnd(60);
    sll.printList();  // 30 -> 20 -> 10 -> 40 -> 50 -> 60 -> null

    console.log("DeleteByValue:");
    sll.deleteByValue(20);    // Delete middle node
    sll.deleteByValue(60);    // Delete last node
    sll.deleteByValue(100);   // Try to delete non-existing value
    sll.printList();  // 30 -> 10 -> 40 -> 50 -> null

    console.log("Search:");
    console.log(sll.search(10));  // true
    console.log(sll.search(100)); // false
    console.log(sll.search(50));  // true
}

testSinglyLinkedList();
