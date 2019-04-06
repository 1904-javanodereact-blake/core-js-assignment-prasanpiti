/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
    let i; //declare i outside loop scope
    for(i = someNum; i > 0; i = i -2){ //each loop minus 2 until get 0 or 1
        if(i <= 1){ //if 1 or 0 break out of for loop
            break;
        }
    }
    if(i === 0) { //if 0 then even
        return true; 
    } else { //if 1 then odd
        return false;
    }
}
console.log(isEven(101));