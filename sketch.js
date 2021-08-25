

var a = prompt('Enter the first variable: ');
var b= prompt('Enter the second variable: ');
function setup(){
  var b1 = createButton("click here to Swap the variable");
 b1.mousePressed(swap);
  }


function draw()
{

}
function swap(){
[a,b]=[b,a]

console.log ("The first variable after swapping: " +a);
console.log ("The second variable after swapping: " +b);
}