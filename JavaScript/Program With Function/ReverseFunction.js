
//Program to write a Reverse String using Function.

function rev(str){
    var RevStr="";
    for(let i=str.length-1; i>=0; i--){
        RevStr=RevStr+str[i];
    }
    return RevStr;
}
var string="Hello";
var x= rev(string);
console.log(x);
