class Set {
    constructor(){
        this.items={};
    }

    has(ele){
        return Object.prototype.hasOwnProperty.call(this.items,ele);
    }

    add(ele){
        if (!this.has(ele)){
            this.items[ele]=ele;
            return true;
        }

        return false;
    }
    delete(ele){
        if (this.has(ele)){
            delete this.items[ele];
            return true;
        }
        return false;
    }
    clear(){
        this.items={}
    }
    size(){
        return Object.keys(this.items).length;
    }
    values(){
        return Object.values(this.items);
    }

    union(otherSet){
        let unionSet= new Set();
        this.values().forEach(value=>unionSet.add(value));
        otherSet.values().forEach(value=>unionSet.add(value));
        console.log(unionSet)
        return unionSet;
    }

    intersection(otherSet){
        let intersection= new Set();
        let values = this.values();
        let otherValues = otherSet.values();
        let bigger,smaller;
        if (values.length>otherValues.length){
            bigger=this;
            smaller=otherValues;
        }else {
            bigger = otherSet;
            smaller=values;
        }
       // let bigger = value.length>otherValues.length?this:otherSet;
       //  let smaller = value.length>otherValues.length?otherValues:value;
        smaller.forEach(value=>{
            if (bigger.has(value)){
                intersection.add(value);
            }
        })
        console.log(intersection);
        return intersection;
    }

    difference(otherSet){
        let different = new Set();
        this.values().forEach(value=>{
            if (!otherSet.has(value)){
                different.add(value)
            }
        })
        console.log(different)
        return different;
    }

    isSubsetOf(otherSet){
        if (this.size()>otherSet.size()){
            console.log("111")
            return false;
        }
        let isSubSet=true;
        let values=this.values();
        console.log(values)
        for (let i =0;i<values.length;i++){
            console.log(values[i])
            if (!otherSet.has(values[i])){
                // isSubSet = false;
                // break;
                console.log(values[i])
                return false
            }
        }
        // console.log(isSubSet)
        // return isSubSet;
    }
}

let testArray=["a","b","c","d"];
let s1= new Set();
s1.add("1");
s1.add("2");
s1.add("3");
let s2 = new Set();
// s2.add("1");
// s2.add("2");
s2.add("3");
s2.add("4");
// s1.difference(s2)
s1.isSubsetOf(s2)
// s1.intersection(s2)
// s1.union(s2);
console.log()
