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
}

exports.SingleLinkedList = SingleLinkedList;