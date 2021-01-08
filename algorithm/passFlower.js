/*
*
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
        if (this.isEmpty()){
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
        if (!this.isEmpty()){
            return undefined
        } else {
            return this.item[0]
        }
    }
    peekBack(){
        if (!this.isEmpty()){
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

function game(programmer, number) {

    //create queue
    const allList= new DoubleQueue();

    //fired
    const firedStaff = new DoubleQueue();

    for (let i =0; i<programmer.length;i++){
        allList.addBack(programmer[i]);
    }

    while (allList.size()>1){
        for (let i =0; i < number;i++){
            allList.addBack(allList.removeFront())
        }

        firedStaff.addBack(allList.removeFront())
        console.log(firedStaff)
    }

    return {
        firedStaff,
        winner:allList.removeFront()
    }

}

let allList=['a','b','c','d'];

function randomInt(min,max) {
    return Math.floor(Math.random()*(max-min)+min)
}

game(allList,randomInt(30,45))
