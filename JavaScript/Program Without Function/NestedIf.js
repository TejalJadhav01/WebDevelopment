var maths=45;
var sci=56;
var eng=56;
var marathi=90;
var hindi=45;
var sum=0;

sum= maths+sci+eng+marathi+hindi;
console.log("Sum is:"+sum);

var avg=sum/5;
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
