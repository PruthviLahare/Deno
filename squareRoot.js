let num=4;
let squareRoot=0;
let squareRootOf=num;



    for(let i=1;i<squareRootOf;i++){
            if(i%2!=0){
            squareRoot++;
            num=num-i;
            if(num>0){continue}else{
                break;
            }
        
            
    }
}
console.log(squareRoot);
