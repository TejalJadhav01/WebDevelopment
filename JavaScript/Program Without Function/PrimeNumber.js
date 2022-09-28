var a=2;
flag=0;

for(let i=2; i<a; i++){
    if(a%i==0){
        flag=1;
        break;
    }
}
if(flag==1){
    console.log("The Number is not Prime");
}
else{
    console.log("The Number is prime");
}