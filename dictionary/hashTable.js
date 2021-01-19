class ValuePair {
    constructor(key,value){
        this.key=key;
        this.value=value;
    }

    toString(){
        return `[${this.key}:${this.value}]`;
    }
}

class HashTable {
    constructor() {
        this.table={};
    }


    loseHasCode(key) {
        if (typeof key==='number'){
            return key;
        }

        let tablekey=this.toStringFN(key);
        let hasCode=0;
        for (let i =0; i <tablekey.length;i++){
            hasCode +=tablekey.charAt(i);
        }

        return hasCode%37;
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

    add(key,value){
        if (key !=null && key!=undefined){
            let position = this.loseHasCode(key);
            this.table[position]=new ValuePair(key,value);
            return true;
        }

        return false;
    }

    get(key){
        return this.table[this.loseHasCode(key)]
    }

    remove(key){
        return delete this.table[this.loseHasCode(key)];
    }

}
