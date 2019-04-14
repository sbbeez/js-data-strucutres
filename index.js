const { Node } = require("./LinkedLists/Node");
const { SingleLinkedList } = require("./LinkedLists/SingleLinkedList");

// sl1 = new SingleLinkedList();
// node1 = new Node(10);
// node2 = new Node(3);
// node3 = new Node(6);
// node4 = new Node(9);
// node5 = new Node(1);
// node6 = new Node(2);
// node7 = new Node(4);
// sl1.start = node1;
// node1.next_node = node2;
// node2.next_node = node3;
// sl1.countNodes();
// sl1.search(7);
// sl1.insertInBeginning(node4);
// sl1.insertInEnd(node4);
// sl1.insertInEnd(node5);
// sl1.insertInEnd(node6);
// sl1.insertInEnd(node7);
// sl1.insertAfterNode(3, node4);
// sl1.insertBeforeNode(1, node5);
// sl1.insertAtPosition(1, node4);
// sl1.deleteList();
// sl1.deleteFirstNode();
// sl1.deleteLastNode();
// sl1.deleteNode(5);
// sl1.reverseList();
// sl1.bubbleSortListExchangeData();
// sl1.bubbleSortListExchangeDataNoCount();
// sl1.bubbleSortListExchangeLink();

let l1 = new SingleLinkedList();
l1.createRandomLinkedList(6);

let l2 = new SingleLinkedList();
l2.createRandomLinkedList(6);