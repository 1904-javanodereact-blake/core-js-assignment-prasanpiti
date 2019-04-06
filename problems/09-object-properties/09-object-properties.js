/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj){
    for(let key in someObj){ //use let .. in to loop through properties of object
        console.log(`key = ${key}, value = ${someObj[key]}`);
    }
}

objectProperties({name: 'jj', phone: '1234567890', email: 'abc@efg.com'});