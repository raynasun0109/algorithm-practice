/*
*
* binary and decimal
*
*/

class Stack {
    constructor(){
        this.count=0;//counter
        this.items={};//database
    }

    push(...ele){
        for (let i =0, len=ele.length;i<len;i++){
            this.items[this.count]=ele[i];
            this.count++;
        }
    }

    size(){
        return this.count;
    }

    isEmpty(){
        return !!this.count;
    }

    pop(){
        if (this.isEmpty()){
            return undefined;
        }

        this.count--;

        let result=this.items[this.count];

        delete this.items[this.count];
        return result;
    }

    peek(){
        if (this.isEmpty()){
            return undefined;
        }

        return this.items[this.count-1];
    }

    clear(){
        while(!this.isEmpty()){
            this.pop();
        }
    }

    toString(){
        if (this.isEmpty()){
            return '';
        }

        let resultString='';
        for (let i=0;i<this.count;i++){
            resultString=`${resultString},${this.items[i]}`;
        }

        return resultString.slice(1);
    }

    forEach(callBack){
        for (let i=0;i<this.count;i++){
            callBack(i,this.items[i],this);
        }
    }

    [Symbol.iterator](){
        let self= this;
        let index=0;
        return{
            next(){
                if(index < self.count){
                    return {
                        value:self.items[index++],
                        done:false
                    }
                }else{
                    return {
                        value: undefined,
                        done: true
                    }
                }

            }
        }
    }

}

//decimal to binary
function decimalToBinary(decNumber) {
    let remStack=new Stack();//save remainder
    let number=decNumber;
    let rem;
    let binaryString='';
    while (number>0){
        rem= Math.floor(number %2);
        console.log(rem);
        remStack.push(rem);
        number=Math.floor(number/2);
    }
    while (!remStack.isEmpty){
        binaryString+=remStack.pop().toString();
    }

    return binaryString;

}
const x = decimalToBinary(10);
console.log(x);
