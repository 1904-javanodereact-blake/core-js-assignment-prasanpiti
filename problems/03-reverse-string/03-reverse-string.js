/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */

function reverseStr(someStr){
    let strLength = someStr.length;
    let resultStr = ''; //storage for final reversed string
    for(let i=strLength-1; i>=0; i--){ //loop from the back
        resultStr = resultStr + someStr.charAt(i); //use charAt to extract 1 char from the back
    }
    return resultStr;
}
console.log(reverseStr('abcd123xyz'));