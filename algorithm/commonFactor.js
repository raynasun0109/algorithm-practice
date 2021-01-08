/*
* N number1
* M number2
* common factor:
* 12 18 =>6
* 11 19 =>1
* */

//first
// function maxCommon(n1,n2) {
/*    if (n1-n2>0){
        [n1,n2]=[n2,n1];
    }

    let commonFactor=0;
    for (let i =0;i<=n1;i++){
        if (n1%i===0&& n2%i===0){
            commonFactor =i;
        }
    }
    return commonFactor;
}*/


//second
function maxCommon(n1,n2) {
    let count =1 ;

    while(n1%2===0&&n2%2===0){
        n1=n1/2;
        n2=n2/2;
        count*=2;
    }
    if (n1-n2>0){
        [n1,n2]=[n2,n1];
    }
    let poor=n2-n1;

    while (poor!==n1){
        if (poor<n1){
            [n2,n1]=[n1,poor]
        } else {
            [n2,n1]=[poor,n1]
        }
        poor = n2 -n1
    }

    return count*poor

}
