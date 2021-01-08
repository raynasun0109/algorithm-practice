/*
* enqueue: add more than one object to the end of the queue ==>push
* dequeue:remove the first object in the queue and return the one that deleted==>shift
* peek: return the first object
* is Empty: check whether is empty or not
* size: number of the queue
* */

class Queue {
    constructor(){
        this.count=0;
        this.item={};
    }
    enqueue(...eles){
        for (let i =0, len=eles.length;i<len;i++){
            this.item[this.count++]=eles[i]
        }
    }

    isEmpty(){
        return !this.count;
    }

    dequeue(){
        if (this.isEmpty){
            return undefined
        } else {
            let result=this.item[0];
            for (let i =0;i<this.count-1;i++){
                this.item[i]=this.item[i+1]
            }
            delete this.item[this.count-1];
            this.count--;
            return result;
        }
    }

    peek(){
        if (!this.isEmpty){
            return undefined
        } else {
            return this.item[0]
        }
    }

    size(){
        return this.count
    }

    toString(){
        if (this.isEmpty()){
            return "";
        } else {
            let objString='';
            for (let i =0;i<this.count;i++){
                objString=`${objString},${this.item[i]}`
            }
            return objString.slice(1)
        }

    }
}

let queue = new Queue();

queue.enqueue()
