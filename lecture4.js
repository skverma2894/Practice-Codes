// Function Definition
/*function fun() {
  console.log("this is a function.");
}

//Function call
fun();
*/

//Creating a function that would take the name through a prompt and display it on the web page and on the console.

function displayName(a) {
  document.getElementById("name").innerHTML = a;
}
let a = prompt("Enter your name plz");
displayName(a);
consoleName(a);

function consoleName(a) {
  console.log("Hey " + a);
}

//Function to add two numbers by passing them to the function.

function add(b, d) {
  let c = d + b;
  console.log("Hey Sachin we have added the numbers and they total to= " + c);
}

var b = 5;
var d = 6;
add(b, d);
