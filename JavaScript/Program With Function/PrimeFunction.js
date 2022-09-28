
// Program for Prime Number using Function

function prime1(num) {
    let flag = 0;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            flag = 1;
            break;
        }
    }
    if (flag == 1) {
        console.log(" The number is not Prime");
    }
    else {
        console.log("The number is Prime");
    }
}
var a = 97;
var x = prime1(a);
