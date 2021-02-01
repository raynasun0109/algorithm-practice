arr=["a","b","c"];
var obj={};

obj.id=arr[0];
obj.name=arr[1]

function arrToObj(array) {
    return {
        id:array[0],
        name:array[1]
    }
}
