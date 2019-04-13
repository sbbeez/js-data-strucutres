const { Node } = require("./LinkedLists/Node");
const { SingleLinkedList } = require("./LinkedLists/SingleLinkedList");

sl1 = new SingleLinkedList();
node1 = new Node(1);
node2 = new Node(2);
node3 = new Node(3);
sl1.start = node1;
node1.next_node = node2;
node2.next_node = node3;
// sl1.displayList();
// sl1.countNodes();
sl1.search(7);