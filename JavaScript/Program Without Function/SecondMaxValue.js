
// Program for Find the Second Max of an Array

var array=[10,65,78,98,34,90,56];
var maxvalue=array[0];
var secmax=array[0];

var x=array.length;

for(let i=0; i<array.length; i++){

    if(array[i]>maxvalue){
        secmax =maxvalue;
        maxvalue=array[i];
    }
    else if(array[i]>secmax)
    {
        secmax=array[i];
    }
        
   
}
console.log(maxvalue);
console.log(secmax);