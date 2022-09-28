
// Write a program to calculate sum of given array elements and find Average of given array

var x=[10,20,30,40,50];
var sum;
var sum=0;
var avg=0;

for(let i=0;i<x.length;i++){
    sum=sum+x[i];
}
console.log(sum);
avg=sum/5;
console.log(avg);