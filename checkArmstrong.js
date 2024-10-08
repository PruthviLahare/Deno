let num=99,rem=0,digits=0,sum=0;
let isArmstrong=num , cube=1;

while(num>0){
    rem=num%10;
    digits++;
    num=(num-rem)/10;
}

rem=0;
num=isArmstrong;

while(num>0){
              rem=num%10;
              cube=rem**digits;
              sum=cube+sum;
              num=(num-rem)/10;
              cube=1;
              
        
            }
if(isArmstrong===sum){
    console.log(true);
}else{
    console.log(false);
}   
