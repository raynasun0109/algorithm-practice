// function factorial(n) {
//     if (n===1 || n===0){
//         return n;
//     }
//     return n*factorial(n-1);
// }

function fibonacci(n) {
    if (n==1){
        return 0;
    }
    if (n==2){
        return 1;
    }

    return fibonacci(n-1)+fibonacci(n-2);
}
