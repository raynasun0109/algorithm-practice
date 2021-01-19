function loseHasCode(key) {
    if (typeof key==='number'){
        return key;
    }

    let tablekey=toStringFN(key);
    let hasCode=0;
    for (let i =0; i <tablekey.length;i++){
        hasCode +=tablekey.charAt(i);
    }

    return hasCode%37;
}

function toStringFN(item){
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
