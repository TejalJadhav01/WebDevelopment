const x=[56,89,67,45,34];
sum=0;

for(let i=0; i<5; i++){
    sum=sum+x[i];
}
console.log("Sum is:"+sum);

let avg=sum/5;
console.log("Average is:"+avg);

if(avg>=75){
    console.log("Distinction");
}

else if(avg>=60){
    console.log("First Class");
}

else if(avg>35){
    console.log("Pass");
}

else if(avg<35){
    console.log("Fail")
}
else{
   console.log("All clear")
}
