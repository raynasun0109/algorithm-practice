class Node {
    //every node structure
    constructor(value){
        this.value=value; //data
        this.next=undefined;//pointer
    }
}

class LinkedList {
    // #count=0 #head=undefined; private value
    constructor(){
        this.count=0;
        this.head=undefined;
    }

    push(value){
        let node = new Node(value);
        let current; // current node
        if (!this.head){
            this.head=node;
        } else {
            current=this.head;
            while (current.next){
                current=current.next
            }

            current.next=node;
        }
        this.count++;
    }

    removeAt(index){
        if (index<this.count&&index>=0){
            let current = this.head;
            let removed;
            if (index===0){
                removed=current;
                this.head=current.next;

            } else {
                for (let i =0;i<index;i++){
                    console.log(current)
                    console.log(i,index)

                    current=current.next;//the node before the removed node
                }
                removed=current.next;
                current.next=current.next.next;
            }
            this.count--;
            return removed;
        }
    }

    pop(){
        return this.removeAt(this.count-1)
    }

    indexOf(value){
        let current=this.head;
        if (value===current.value){
            return 0
        }
        for (let i =1;i<this.count;i++){
            current=current.next
            if (value===current.value){
                return i
            }
        }
        return undefined;
    }

    getNodeAt(index){
        if (index<this.count && index>=0){
            let current = this.head;
            if (index===0){
                return current;
            } else {
                for (let i =0;i<index;i++){

                    current=current.next;//the node before the removed node
                    console.log(i,index)
                    console.log(current)
                }
                console.log(current)
                return current.next;
            }
        }
    }

    insert(value,index){
        let node = new Node(value);
        if (index<=this.count && index>=0){
            let current = this.head;
            if (index===0){
                this.head=node;
                this.head.next=current;
            } else {
                for (let i =1;i<index;i++){
                    current=current.next;
                    console.log(i,index)
                    console.log(current)
                }
                let nextEle=current.next;
                current.next=node;
                node.next=nextEle;
                this.count++;
            }
        } else {
            throw new Error("wrong index")
        }
    }

    unshift(value){
        this.insert(value,0)
    }

    getHead(){
        console.log(this.head.next)
        return this.head.value;
    }

    removeValue(value){
        let current= this.head;
        let pre=null;

        if (current.value===value){
            this.head=current.next;

        } else {
            for (let i =1;i<this.count;i++){
                pre=current;
                current=current.next;
                if (current.value===value){
                    pre.next=current.next;
                    //break delete the first value that fits the requirement
                }
            }
        }

       this.count--;

    }

    isEmpty(){
        return !this.count;
    }

    size(){
        return this.count;
    }

    toString(){
        let objString='';
        let current=this.head;
        if (!current){
            return ''
        } else {
            do {
                objString=`${objString},${current.value}`;
                current=current.next
            } while (current);
            console.log(objString.slice(1))
           return objString.slice(1);
        }
    }

}

let linkdata=new LinkedList()
linkdata.push('hello')
linkdata.push('world')
linkdata.push("three")
linkdata.push("four")
linkdata.toString();
// linkdata.insert("insert",2)
// linkdata.get()
// console.log(linkdata.head.next)
