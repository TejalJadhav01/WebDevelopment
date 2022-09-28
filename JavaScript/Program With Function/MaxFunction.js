function Max1(array){
    var max=0;
    var max=array[0];

    for(let i=0; i<array.length;i++){
        if(array[i]>max){
            max=array[i];
        }
    }
    return max;
}

const arr=[89,90,40,60,101,30];
const x=Max1(arr);
console.log(x);