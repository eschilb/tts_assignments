// VARIABLE EXAMPLES below - var is the most common declarative keyword.
// A variable declared with the var keyword is available from the function it is declared in
//String var a = "abc";
// Integer var b = 1;
//Number var c =1.23;
//Boolean var d=true;
var dogName = "Styles";
document.getElementById("demo").innerHTML = dogName;
//"getelementbyid" is a method. it finds the html element "demo" and
//changes the element content "innerhtml"
// variable example 1  "demo" is the Id we assign to p in the html document
var person = "Irish", showName = "Survivor", prize = 200;
document.getElementById("demo2").innerHTML = showName;
// declare variable in one statement. Start the statement with var and separate the variables by comma. Only showName will output
var x = "Firstname" + " " + "Lastname";
document.getElementById("demo3").innerHTML = x;
// how to create a dead space between Firstname and Lastname instead of the strings being concatenated.
var x = "Firstname" + "Lastname";
document.getElementById("demo4").innerHTML = x;
// strings Firstname and Lastname are concatenated
var x = 1 + 2 + 3;
document.getElementById("demo5").innerHTML = x;
// simple algebra - you can do arithmetic with variables using operators = and +
var x = 2 + 3 + "5"
document.getElementById("demo6").innerHTML = x;
// when you put a number in quotes it gets treated as a string and its concatenated
// BOOLEANS below - Boolean represents one of two values: true or false.
document.getElementById("demo7").innerHTML = Boolean(10 > 9);
// simple example of 10 being greater than 9 so boolean output is true
var b1 = Boolean(100);
var b2 = Boolean(3.14);
var b3 = Boolean(-15);
var b4 = Boolean("Hello");
var b5 = Boolean('false');
var b6 = Boolean(1 + 7 + 3.14);
document.getElementById("demo8").innerHTML =
"100 is " + b1 + "<br>" +
"3.14 is " + b2 + "<br>" +
"-15 is " + b3 + "<br>" +
"Any (not empty) string is " + b4 + "<br>" +
"Even the string 'false' is " + b5 + "<br>" +
"Any expression (except zero) is " + b6;
// example of how everything assigned a value is treated as true
var y = "";
  document.getElementById("demo9").innerHTML = Boolean(y);
// empty string is assigned boolean false
 var z;
  document.getElementById("demo10").innerHTML = Boolean(z);
  // undefined var is assigned boolean false.
// COMPARISON OPERATORS below
// 10 < 6 false
// 10 > 6 true
// 10 <= 45 true
// 10 >= 10 true
// 10 == 6   false
// 10 == "10" true
// 10 === "10" false
// 10 != 6  true
// 10 != "10"false
// 10 !== "10" true
// == and === difference - =X3 is strict equality whereas =x2 is because of type coercion, meaning js will try to convert.
// Runtime engine automatically converts vars to the type that makes the most sense
// Leads to unexpected behavior so '1'+2 // 12
// thats why 10=="10"is true and 10==="10" is false. For == although "10" is techincally a string js is loosely converting
// source https://www.w3schools.com/js/js_comparisons.asp
// other notes: null is false and false is false
// IF ELSE STATEMENT EXAMPLES
// Use if to specify a block of code to be executed, if a specified condition is true
// Use else to specify a block of code to be executed, if the same condition is false
// Use else if to specify a new condition to test, if the first condition is false
// Use switch to specify many alternative blocks of code to be executed
// syntax as follows for if statement, and if must be lowercase
// if (condition) {
//  (block of code to be executed if the condition is true)
// }
if (new Date().getHours() < 18) {
  document.getElementById("demo11").innerHTML = "Good day! if before6pm";
}
// syntax as follows for if and else, which both if and else must be lowercase
// if (condition) {
//  block of code to be executed if the condition is true
// } else {
//  block of code to be executed if the condition is false
// }
var hour = new Date().getHours();
  var greeting;
  if (hour < 18) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }
  document.getElementById("demo12").innerHTML = greeting;
// FUNCTION EXAMPLES BELOW
// check this out for function syntax https://www.w3schools.com/js/js_functions.asp
var x = myFunction(4, 3);
document.getElementById("demofunction").innerHTML = x;
function myFunction(a, b) {
  return a * b;
}
// Functions often compute a return value. The return value is "returned" back to the "caller":
document.getElementById("demo14").innerHTML =
"The temperature is " + toCelsius(77) + " Celsius";
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}
// Functions can be used the same way as you use variables, in all types of formulas, assignments, and calculations.
// DOM STUFF BELOW
function myFunction() {
  var person = prompt("Please enter your name", "Type here");
  if (person != null) {
    document.getElementById("demo15").innerHTML =
    "Hello " + person + "! How are you today?";
  }
}
// FINDING/USING NODES BELOW
var el = document.getElementById('username'); // just the input with id username
var paragraphs = document.getElementsByTagName('p'); // all paragraphs <-- in a nodelist
var introductions = document.getElementsByClassName('introduction'); // all paragraphs <-- in a nodelist
var firstButton = document.querySelector('ul'); // uses css selectors and grabs first instance it sees
var inError = document.querySelectorAll('li'); // uses css selectors and returns a nodelist
// straight from the slides
// EDITING A NODE BELOW
//Get all inputs
var div = document.querySelector('div');
var a = document.querySelector('a');
a.innerHTML; //"click me"
div.innerHTML; //'<a href="#">Click me</a>'
a.innerHTML = "Changed link name once you click";
//Get an attribute
a.href; //"http://google.com"
//Set an attribute
a.name = 'new link name';
//Add a new attribute
a.target = "_blank";
//end of editing node
// adding a node
var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);
var element = document.getElementById("div1");
var child = document.getElementById("p1");
element.insertBefore(para,child);
// end of adding node -
//removing a node
function myRemove() {
  var elmnt = document.getElementById("p3");
  elmnt.remove();
}
//end of removing a node
// DOM EVENT LISTENER
document.getElementById("myP1").addEventListener("click", function() {
  alert("You clicked the white element!");
}, false);
document.getElementById("myDiv1").addEventListener("click", function() {
  alert("You clicked the orange element!");
}, false);
document.getElementById("myP2").addEventListener("click", function() {
  alert("You clicked the white element!");
}, true);
document.getElementById("myDiv2").addEventListener("click", function() {
  alert("You clicked the orange element!");
}, true);
//JQUERY stuff below
$(document).ready(function() {
  var myElements = $("#id01");
  $("#dem").text("The text from the id01 paragraph is: " + myElements[0].innerHTML);
});
