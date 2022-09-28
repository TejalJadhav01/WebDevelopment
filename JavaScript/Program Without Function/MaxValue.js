const a=[10,30,67,99,90,45,67,56];
var max;
 var max=0;

for(let i=0;i<=a.length;i++){
    if(a[i]>max){
        max=a[i];
    }
}
console.log(max);