# fullstack-practice-SLL-DLL-CLL
Mastering SLL, DLL, and CLL Operations

### 1. Singly Linked List (SLL)

**Methods:**

* `insertAtBeginning(data)` — Adds a node at the start.
* `insertAtEnd(data)` — Adds a node at the end.
* `deleteByValue(data)` — Deletes the first node that has the given data.
* `printList()` — Prints all elements.

**Time Complexity:**

* Insert at beginning: O(1) — just change the head pointer.
* Insert at end: O(n) — have to travel to the end.
* Delete by value: O(n) — need to search for the node.
* Print list: O(n) — print each node once.

---

### 2. Doubly Linked List (DLL)

**Methods:**

* `insertAtBeginning(data)` — Adds node at the start.
* `insertAtEnd(data)` — Adds node at the end.
* `deleteFromBeginning()` — Removes the first node.
* `deleteFromEnd()` — Removes the last node.
* `printForward()` — Prints list from head to tail.
* `printBackward()` — Prints list from tail to head.

**Time Complexity:**

* Insertions at beginning or end: O(1) — direct access to head/tail.
* Deletions at beginning or end: O(1).
* Printing forward or backward: O(n).

---

### 3. Circular Linked List (CLL)

**Methods:**

* `insert(data)` — Adds node at the end (circularly).
* `delete(data)` — Deletes the node with given data.
* `printList()` — Prints all nodes circularly.

**Time Complexity:**

* Insert at end: O(n) — need to find the last node before head.
* Delete by value: O(n) — search and delete.
* Print list: O(n) — print each node once.
