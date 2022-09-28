function add(Array){
    let sum=0;
    for(let i=0; i<Array.length; i++){
        sum=sum+Array[i];
    }
    return sum;
}

var array=[10,20,30,40,50];
var z=add(array);
console.log(z);