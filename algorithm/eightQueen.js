let p = [
    [1,0,0,0,0],
    [0,0,1,0,0],
    [0,0,0,0,1],
    [0,1,0,0,0],
    [0,0,0,1,0],

];

function calQueen(n) {
    let queenPosition =[];
   let leftTopToRightBottom=[];
   let rightTopToLeftBottom=[];
   let column=[];

    function tag(row,col,bool) {
        leftTopToRightBottom[row+col] =bool;
        rightTopToLeftBottom[row-col+n-1]=bool;
        column[col]=bool;
    }

    function chair(row,currentChessboard) {
        if (row > n-1){
            let board = new Array(n).fill(new Array(n).fill("-",0),0)
            for(let i =0 ,len=currentChessboard.length;i<len;i++){
                board[i][currentChessboard[i]]="*";
            }
            queenPosition.push(currentChessboard)
            return;
        }

        for (let col=0; col<n;col++){
            if (!column[col]&& !leftTopToRightBottom[row+col]
                &&!rightTopToLeftBottom[row-col+n-1]){
                tag(row,col,true);
                chair(row+1,currentChessboard.concat(col));
                tag(row,col,false)
            }
        }
    }

    chair(0,[]);
    return queenPosition


}


