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
        return count;
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

    deleteList() {
        if (!this.start) {
            console.log("list is empty");
            return;
        }
        this.start = undefined;
    }

    deleteFirstNode() {
        if (!this.start) {
            console.log("list is empty");
            return;
        }
        if (!this.start.next_node) {
            this.deleteList();
            return;
        }
        this.start = this.start.next_node;
    }

    deleteLastNode() {
        if (!this.start) {
            console.log("list is empty");
            return;
        }
        if (!this.start.next_node) {
            this.deleteList();
            return;
        }
        let singleNode = this.start;
        while (singleNode) {
            if (!singleNode.next_node.next_node) singleNode.next_node = undefined;
            singleNode = singleNode.next_node;
        }
    }

    deleteNode(value) {
        if (!this.start) {
            console.log("list is empty");
            return;
        }
        if (this.start.info == value) {
            this.deleteFirstNode();
            return;
        }
        let singleNode = this.start;
        while (singleNode.next_node) {
            if (singleNode.next_node.info == value) {
                if (!singleNode.next_node.next_node) {
                    this.deleteLastNode();
                    return;
                }
                singleNode.next_node = singleNode.next_node.next_node
            }
            singleNode = singleNode.next_node;
        }
    }

    reverseList() {
        let prev = undefined;
        let singleNode = this.start;
        while (singleNode) {
            let next_node = singleNode.next_node;
            singleNode.next_node = prev;
            prev = singleNode;
            singleNode = next_node;
        }
        this.start = prev;
    }

    bubbleSortListExchangeData() {
        if (!this.start) {
            console.log("list is empty");
            return;
        }
        let loopTimes = this.countNodes() - 1;
        for (let i = 0; i < loopTimes; i++) {
            let singleNode = this.start;
            while (singleNode.next_node) {
                let next_node = singleNode.next_node;
                if (singleNode.info > next_node.info) {
                    let temp = singleNode.info;
                    singleNode.info = next_node.info;
                    next_node.info = temp;
                }
                singleNode = singleNode.next_node;
            }
        }
    }

    bubbleSortListExchangeDataNoCount() {
        if (!this.start) {
            console.log("list is empty");
            return;
        }
        let end = undefined;
        while (end != this.start.next_node) {
            let singleNode = this.start;
            while (singleNode.next_node != end) {
                let next_node = singleNode.next_node;
                if (singleNode.info > next_node.info) {
                    let temp = singleNode.info;
                    singleNode.info = next_node.info;
                    next_node.info = temp;
                }
                singleNode = singleNode.next_node;
            }
            end = singleNode;
        }
    }

    // bubbleSortListExchangeLink() {
    //     if (!this.start) {
    //         console.log("list is empty");
    //         return;
    //     }
    //     let end = undefined;
    //     while (end != this.start.next_node) {
    //         let singleNode = this.start;
    //         let prev_node = this.start;
    //         while (end != singleNode.next_node) {
    //             let next_node = singleNode.next_node;
    //             if (singleNode.info > next_node.info) {
    //                 singleNode.next_node = next_node.next_node;
    //                 next_node.next_node = singleNode;
    //                 if (this.start == singleNode) {
    //                     this.start = next_node;
    //                 } else {
    //                     prev_node.next_node = next_node;
    //                 }
    //                 next_node = [singleNode, singleNode = next_node][0];
    //                 this.displayList();
    //                 console.log("============")
    //             }
    //             prev_node = singleNode;
    //             singleNode = singleNode.next_node;
    //         }
    //         end = singleNode;
    //     }
    // }

    bubbleSortListExchangeLink() {
        if (!this.start) {
            console.log("list is empty");
            return;
        }
        let end = undefined;
        while (end != this.start.next_node) {
            let singleNode = this.start;
            let next_node = singleNode.next_node;
            let prev_node = undefined;
            while (next_node != end) {
                if (singleNode.info > next_node.info) {
                    singleNode.next_node = next_node.next_node;
                    next_node.next_node = singleNode;
                    if (!prev_node) {
                        this.start = next_node;
                    } else {
                        prev_node.next_node = next_node;
                    }
                    prev_node = next_node;
                } else {
                    prev_node = singleNode;
                    singleNode = singleNode.next_node;
                }
                next_node = singleNode.next_node;
            }
            end = singleNode;
        }
    }
}

exports.SingleLinkedList = SingleLinkedList;