// to find the number is Even or Odd using function.


function add(even){
    if(even%2==0){
        console.log("The number is Even:" +even);
    }
    else{
        console.log("The number is odd:" +even);
    }
    return even;
}
 var a=7;
var x=add(a);
console.log(x);