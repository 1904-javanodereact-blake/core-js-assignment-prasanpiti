/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function subString(someStr, startIndex, endIndex){
    let resultString = ''; //store result
    for(let i=startIndex; i<=endIndex; i++){ //loop starts at start index
        resultString = resultString + someStr.charAt(i); //cumulate char at each index
    }
    return resultString;
}
console.log(subString('abcde', 1, 3));