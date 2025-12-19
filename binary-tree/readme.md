Tree:
Non-linear structure.
Hierarchical in nature.
Node:
Can have zero or more children.
Has only one parent (except root).
Cannot have cycles: Mean node have only one parent, otherwise it will form cycle (graphs).
Exactly one path exists between any two nodes.
No two parents can share the same child.
Why Tree Data Structures?
Not every type of data can be stored in an array or linked list.
When we need to store hierarchical data, we use trees.
Examples:
File Systems
HTML DOM
Databases
Hierarchical Data Models
Types of Trees:
General Tree: Any number of children.
Binary Tree: At most two children per node.
Binary Search Tree (BST): left < root < right.
Complete Binary Tree: All levels filled except possibly the last.
Full Binary Tree: Each node has 0 or 2 children.
Perfect Binary Tree: Full and all leaves are at the same level.
Balanced Binary Tree: Height is log(n).
Visualization:
Tree Visualisation
Tree Terminology:
Node
Parent
Child
Sibling
Height
Sub-tree
Tree Representation:
Using Nodes & Pointers:

Tree Visualisation
root.val = 1;
root.left = 2;
root.right = 3;



Pre-Order Traversal
Order: Root → Left → Right

[1, 2, 4, 5, 6, 7, 3, 8, 9]

In-Order Traversal
Order: Left → Root → Right

[4, 2, 6, 5, 7, 1, 3, 9, 8]

Post-Order Traversal
Order: Left → Right → Root

[4, 6, 7, 5, 2, 9, 8, 3, 1]

Level-Order Traversal
Order: Traverse Level by Level (Top to Bottom)

[12, 3, 4, 5, 8, 6, 7, 9]