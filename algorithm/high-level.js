function memorize(fn) {
    let cache={};
    return function () {
        let key= arguments.length + Array.prototype.join.call(arguments,',');
        console.log(arguments)
        if (key in cache){
            console.log(cache)
            return cache[key];
        } else {
            return cache[key] = fn.apply(this,arguments);
        }
    }
}

function factorial(n) {
    if (n===1 || n===0){
        return n;
    }
    console.log("workd")
    return n*f(n-1);
}

let f=memorize(factorial);
f(5)
