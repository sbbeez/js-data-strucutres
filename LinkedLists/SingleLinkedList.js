class SingleLinkedList {
    constructor() {
        this.start = undefined;
    }

    displayList() {
        if (!this.start) console.log("list is empty");
        let singleNode = this.start;
        while (singleNode) {
            console.log(singleNode.info);
            singleNode = singleNode.next_node;
        }
    }
    countNodes() {
        let singleNode = this.start;
        let count = 0;
        while (singleNode) {
            singleNode = singleNode.next_node;
            count += 1;
        }
        console.log(count);
    }

    search(value) {
        let singleNode = this.start;
        let position = 1;
        while (singleNode) {
            if (singleNode.info == value) {
                console.log(position);
                return;
            }
            position++;
            singleNode = singleNode.next_node;
        }
        console.log("Value not Found");
    }

    insertInBeginning(node) {
        node.next_node = this.start;
        this.start = node;
    }

    insertInEnd(node) {
        let singleNode = this.start;
        if (!singleNode) {
            this.start = node;
            return;
        }
        while (singleNode.next_node) {
            singleNode = singleNode.next_node;
        }
        singleNode.next_node = node;
    }

    insertAfterNode(beforeNodeInfo, nextNode) {
        if (!this.start) {
            console.log("linked list is empty");
            return;
        }
        let singleNode = this.start;
        while (singleNode) {
            if (singleNode.info == beforeNodeInfo) {
                nextNode.next_node = singleNode.next_node;
                singleNode.next_node = nextNode;
                return;
            }
            singleNode = singleNode.next_node;
        }
        console.log("no node with value is found");
    }

    insertBeforeNode(afterNodeInfo, node) {
        if (!this.start) {
            console.log("linked list is empty");
            return;
        }
        let singleNode = this.start;
        if (singleNode.info == afterNodeInfo) { 
            this.insertInBeginning(node);
            return;
        }
        while (singleNode.next_node) {
            if (singleNode.next_node.info == afterNodeInfo) {
                node.next_node = singleNode.next_node;
                singleNode.next_node = node;
                return;
            }
            singleNode = singleNode.next_node;
        }
        console.log("no node with value is found");
    }

    insertAtPosition(position, node) {
        let curPos = 1;
        if (position == 1) {
            this.insertInBeginning(node);
            return;
        }
        let singleNode = this.start;
        while (singleNode) {
            if (curPos == position - 1) {
                node.next_node = singleNode.next_node;
                singleNode.next_node = node;
                return;
            }
            curPos++;
            singleNode = singleNode.next_node;
        }
        console.log("list is not having less number of nodes");
    }
}

exports.SingleLinkedList = SingleLinkedList;