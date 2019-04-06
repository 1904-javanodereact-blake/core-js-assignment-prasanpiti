/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum){
    if(sumNum == 0){
        return 1; //0! = 1
    } else if(sumNum == 1){
        return 1; //1! = 1
    } else {
        let fac = 1;
        for(let i=2; i<=sumNum; i++){//loop start with 2
            fac = fac * i;
        }
        return fac;
    }
}
console.log(factorial(5));