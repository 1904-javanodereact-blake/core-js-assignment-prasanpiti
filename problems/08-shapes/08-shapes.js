/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character){
  if (shape === 'square') {
      for(let i=0; i<height; i++){ //row
          for(let j=0; j<height; j++){ //column
              process.stdout.write(character); //print without new line
          }
          console.log(''); //new line
      }
  } else if(shape === 'triangle') {
      for(let i=0; i<=height; i++){
          for(let j=0; j<i; j++){ //j length limit by i
              process.stdout.write(character);
          }
          console.log('');
      }
  } else if(shape === 'diamond') {
      let position = 0;
      for(let i=1; i<=height; i = i+2){ //first half of rows including middle row
          position = (height - i)/2;
          for(let m=0; m<position; m++){
              process.stdout.write(' '); //print blank from left
          }
          for(let j=0; j<i; j++){
              process.stdout.write(character); //print characters limited by i
          }
          console.log(''); //new line
      }
      for(let i=height-2; i>0; i = i-2){ //print second half less middle
          position = (height - i)/2;
          for(let m=0; m<position; m++){
              process.stdout.write(' ');
          }
          for(let j=0; j<i; j++){
              process.stdout.write(character);
          }
          console.log('');
      }
  } else {
      console.log('wrong shape');
  }
}

printShape('square', 3, '*');
printShape('triangle', 3, '*');
printShape('diamond', 5, '*');