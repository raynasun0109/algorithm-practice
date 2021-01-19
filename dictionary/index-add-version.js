class ValurPair {
    constructor(key,value){
        this.key=key;
        this.value=value;
    }

    toString(){
        return `[${this.key}:${this.value}]`;
    }
}

class Dictionary {
    constructor(){
        this.table={};
        this.id=1;
    }

    toStringFN(item){
        if (item===null){
            return "Null"
        } else if (item === undefined){
            return "Undefined"
        } else if (typeof item === 'string' || item instanceof String){
            return `${item}`;
        }

        if (item['_id']){
            return item.toString()+item['_id']
        }
        return item.toString();
    }

    hasKey(key){
        return this.table[this.toStringFN(key)]!==undefined;
    }

    set(key,value){
        if (key != null && value!=null){
            let tableKey = this.toStringFN(key);
            if (this.hasKey(key)){
                if (this.table[tableKey].key!==key){
                    key['_id']=this.id++;
                    tableKey=this.toStringFN(key);
                    this.set(key,value);
                } else {
                    this.table[tableKey]=new ValurPair(key,value)
                }
            }else {

                this.table[tableKey]= new ValurPair(key,value);

            }
        }

    }

    remove(key){
        if (this.hasKey(key)){
            delete this.table[this.toStringFN(key)];
        }
        return false;
    }

    get(key){
        return this.table[this.toStringFN(key)];
    }

    keyValues(key){
        let ValuePairs=[];
        for (let k in this.table){
            if (this.hasKey(key)){
                ValuePairs.push(this.table[k])
            }
        }
        return ValuePairs;
    }

    keys(){
        return this.keyValues().map(item => item.key);
    }

    values(){
        return this.keyValues().map(item => item.value);
    }

    forEach(cb){
        let valuePairs=this.keyValues();
        for (let index=0;index<valuePairs.length;index++){
            cb(index,valuePairs[index].value,valuePairs)
        }
    }

    size(){
        return this.keyValues().length
    }

    clear(){
        this.table={}
    }

    isEmpty(){
        return this.size()===0
    }

    toString(){
        if (this.isEmpty()){
            return ''
        }
        let valuePairs= this.keyValues();
        let objString='';
        for (let i =0;i<valuePairs.length;i++){
            objString=`${objString},${valuePairs[i].toString()}`
        }
        return objString.slice(1);
    }
}

let d = new Dictionary();
d.set({x:1},"x:1,no.1");
d.set({x:1},"x:1");
