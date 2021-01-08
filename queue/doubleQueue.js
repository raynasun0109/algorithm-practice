/*
* enqueue: add more than one object to the end of the queue ==>push
* dequeue:remove the first object in the queue and return the one that deleted==>shift
* peek: return the first object
* is Empty: check whether is empty or not
* size: number of the queue
* */

class DoubleQueue {
    constructor(){
        this.count=0;
        this.item={};
    }

    addBack(...eles){ //push
        for (let i =0, len=eles.length;i<len;i++){
            this.item[this.count++]=eles[i]
        }
    }



    isEmpty(){
        return !this.count;
    }

    removeFront(){ //shift
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

    addFront(...eles){ //unshift
        for (let e =0, len=eles.length;e<len;e++){
            for (let i =this.count;i>0;i--){
                this.item[i]=this.item[i-1]
            }
            this.item[0]=eles[e];
            this.count++;
        }

    }

    removeBack(){ //pop
        if (this.isEmpty()){
            return undefined
        } else {
            this.count--;
            let result=this.item[this.count];
            delete this.item[this.count];
            return result;
        }
    }

    peekFront(){
        if (!this.isEmpty){
            return undefined
        } else {
            return this.item[0]
        }
    }
    peekBack(){
        if (!this.isEmpty){
            return undefined
        } else {
            return this.item[this.count-1]
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
