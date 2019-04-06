/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index){
    for(let i=index; i<someArr.length; i++){ //loop start at index to splice
        someArr[i] = someArr[i+1]; //copy element to move 1 slot to fill in splice position and each slot till end
    }
    someArr.length = someArr.length - 1; //cut last position of array by reducing length by 1
}
let arr = [1,2,3,4,5];
console.log(arr);
spliceElement(arr, 3);
console.log(arr);