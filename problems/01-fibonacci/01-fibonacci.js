/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */

//***fib by loop ***
function fib(n){
    let result = 1;
    let fn_2 = 0; // f(n-2)
    let fn_1 = 1; // f(n-1)
    if(n<0) { //reject negative number
        return 'not possible';
    } else if(n==0){ //first fib number
        return 0;
    } else if(n==1){ //second fib number
        return 1;
    } else {
        let fn = 0;
        for(let i=2; i<=n; i++){ //loop start at third fib number
            fn = fn_1 + fn_2;
            fn_2 = fn_1;
            fn_1 = fn;
        }
        return fn;
    }
}
console.log(fib(6));


//*** another method - fib by recursion also ok ***
// function fib(n){
//     if(n <= 0){
//         return 0;
//     } else if(n == 1){
//         return 1;
//     } else {
//         return fib(n-1) + fib(n-2);
//     }
// }
//console.log(fib(8));