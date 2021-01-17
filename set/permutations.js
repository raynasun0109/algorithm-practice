let a =[['A','B'],['a','b'],['1','2']];
let b = ['a','b','c','d']
// function compisteionStr(arr1,arr2) {
//     let resultStrArr=[];
//     for (let i =0; i <arr1.length;i++){
//         for (let j =0; j<arr2.length;j++){
//             resultStrArr.push(String(arr1[i])+String(arr2[j]))
//         }
//     }
//     return resultStrArr;
// }
//
// function PAC(arr) {
//     arr.reduce((total,current)=>{
//         return compisteionStr(total,current)
//     },[])
// }
//
// PAC(a)

// function fibonacci(length) {
//     let [pre,curr]=[0,1];
//
//     for (let index=0;index<length;index++){
//         console.log(pre);
//         [pre, curr]=[curr,curr+pre];
//         // const ele=arr[index];
//     }
//
// }
//
// fibonacci(10)

let arr=[[11,22],[[33],[444]],[55,[66,[77]]]];
function wFlat(arr) {
    return arr.reduce((pre,current)=>{
        return pre.concat(Array.isArray(current)?wFlat(current):current)
    },[]);
}
wFlat(arr);
// console.log(wFlat(arr))

function test(arr) {
    arr.reduce((pre,current)=>{
        console.log("pre",pre,"current",current)
    })
}

test(b)
