/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr){
    let wholeLength = someStr.length;
    let compareLength = Math.floor(wholeLength/2); //use only half length to compare 2 halves
    let flag = false; 
    for(let i=0,j=wholeLength-1; i<=compareLength; i++,j--){ //move left index and right index in loop
        if(someStr.charAt(i) == someStr.charAt(j)){
            flag = true; //flag must be true all the time to stay in loop
        } else {
            flag = false; //if flag false only once then not palindrome
            break;
        }
    }
    return flag;
}
console.log(isPalindrome('zandnaz'));