const { Node } = require("./LinkedLists/Node");
const { SingleLinkedList } = require("./LinkedLists/SingleLinkedList");

sl1 = new SingleLinkedList();
node1 = new Node(1);
node2 = new Node(2);
node3 = new Node(3);
node4 = new Node(4);
node5 = new Node(5);
sl1.start = node1;
node1.next_node = node2;
node2.next_node = node3;
// sl1.countNodes();
// sl1.search(7);
// sl1.insertInBeginning(node4);
// sl1.insertInEnd(node4);
// sl1.insertAfterNode(3, node5);
// sl1.insertBeforeNode(1, node5)
// sl1.insertAtPosition(1, node4);
sl1.displayList();