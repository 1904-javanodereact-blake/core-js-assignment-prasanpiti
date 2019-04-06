/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray){
    let arrayLength = numArray.length;
    let flag = true;
    let n = 0;
    let temp = 0;
    while(flag==true){
        flag = false; //start flag with false in case no swap means done
        for(let i=0; i<arrayLength; i++){
            if(numArray[i] > numArray[i+1]){
                temp = numArray[i]; //start swab
                numArray[i] = numArray[i+1];
                numArray[i+1] = temp; //swab complete
                flag = true; //set flag to true means not done
            }
        }
    }
    return numArray;

}
console.log(bubbleSort([101,97,55,78,66,2]));
