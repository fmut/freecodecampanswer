
//Comment your JavaScript Code

//This is an in-line comment.
/* This is a
   multi-line comment */

//Declare JavaScript Variables

var myName;

//Storing Values with the Assignment Operator

a=7;
b=a;

//Initializing Variables with the Assignment Operator

var a = 9;

//Understanding Uninitialized Variable

a = 5;
b = 10;
c = "I am a";
a = a + 1;
b = b + 5;
c = c + " String!";

//Understanding Case Sensitivity in Variables

var studlyCapVar, properCamelCase, titleCaseOver;
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver= 9000;

//Add Two Numbers with JavaScript

var sum = 10 + 10;

//Subtract One Number from Another with JavaScript

var difference = 45 - 33;

//Multiply Two Numbers with JavaScript

var product = 8 * 10;

//Divide One Number by Another with JavaScript

var quotient = 66 / 33;

//Increment a Number with JavaScript Complete

var myVar = 87;
myVar++;

//Decrement a Number with JavaScript Complete

var myVar = 11;
myVar--;

//Create Decimal Numbers with JavaScript Complete

var ourDecimal = 5.7;
var myDecimal = 6.1;

//Multiply Two Decimals with JavaScript Complete

var product = 2.0 * 2.5;

//Divide one Decimal by Another with JavaScript Complete

var quotient = 4.4 / 2.0;

//Finding a Remainder in JavaScript Complete

var remainder;
remainder = 7 % 5 ;

//Compound Assignment With Augmented Addition Complete

var a = 3;
var b = 17;
var c = 12;
a += 12;
b += 9;
c += 7;

//Compound Assignment With Augmented Subtraction Complete

var a = 11;
var b = 9;
var c = 3;
a -= 6;
b -= 15;
c -= 1;

//Compound Assignment With Augmented Multiplication Complete

var a = 5;
var b = 12;
var c = 4.6;
a *= 5;
b *= 3;
c *= 10;

//Compound Assignment With Augmented Division Complete

var a = 48;
var b = 108;
var c = 33;
a /= 12;
b /= 4;
c /= 11;

//Convert Celsius to Fahrenheit Complete

function convertToF(celsius) {
  var fahrenheit;
  fahrenheit = (celsius/5)*9+32;
  return fahrenheit;
}

convertToF(-30);
convertToF(-10);
convertToF(0);
convertToF(20);
convertToF(30);

//Declare String Variables

var firstName = "Alan";
var lastName = "Turing";
var myFirstName = "Furkan";
var myLastName = "Mut";

//Escaping Literal Quotes in Strings

var myStr;
myStr = "I am a \"double quoted\" string inside \"double quotes\".";

//Quoting Strings with Single Quotes

var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

//Concatenating Strings with Plus Operator

var myStr="This is the start. "+"This is the end.";

//Concatenating Strings with the Plus Equals Operator

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

//Constructing Strings with Variables

var myName = "Furkan";
var myStr = "My name is " + myName + "and I am swell!";

//Appending Variables to Strings

var someAdjective = "hii";
var myStr = "Learning to code is ";
myStr += someAdjective;

//Find the Length of a String

lastNameLength = lastName.length;

//Use Bracket Notation to Find the First Character in a String

firstLetterOfLastName = lastName[0];

//Understand String Immutability

myStr = "Hello World";

//Use Bracket Notation to Find the Nth Character in a String

var thirdLetterOfLastName = lastName[2];

//Use Bracket Notation to Find the Last Character in a String

var lastLetterOfLastName = lastName[lastName.length - 1];

//Use Bracket Notation to Find the NthtoLast Character in a String

var secondToLastLetterOfLastName = lastName[lastName.length - 2];

//Word Blanks

result+= "My "+myAdjective+" "+myNoun+" "+myVerb+" very "+myAdverb+".";

//Store Multiple Values in one Variable using JavaScript Arrays

var myArray = ["Furkan", 22];

//Nest one Array within Another Array

var myArray = [["furkan", 22], ["mut", 23]];

//Access Array Data with Indexes

var myData = myArray[0];

//Modify Array Data With Indexes

myArray[0] = 3;

//Access MultiDimensional Arrays With Indexes

var myData = myArray[2][1];

//Manipulate Arrays With push

myArray.push(["dog", 3]);

//Manipulate Arrays With pop

var removedFromMyArray = myArray.pop();

//Manipulate Arrays With shift

var removedFromMyArray = myArray.shift();

//Manipulate Arrays With unshift

myArray.push(["Paul", 35]);
myArray.unshift(["Paul", 35]);
myArray.pop();

//Shopping List

var myList = [["Yumurta", 3],["Süt", 1],["Pirinç", 2],["Un", 12],["Gevrek", 1]];

//Write Reusable JavaScript with Functions

function reusableFunction() {
    console.log("Hi World");
}

reusableFunction();

//Passing Values to Functions with Arguments

function functionWithArgs(c,d) {
  console.log(c + d);
}

functionWithArgs(1, 2);
functionWithArgs(7, 9);

//Global Scope and Functions

var myGlobal = 10;
function fun1() {
  oopsGlobal = 5;
}

//Local Scope and Functions

var myVar = "strict";

//Global vs Local Scope in Functions

var outerWear = "sweater";

//Return a Value from a Function with Return

function timesFive(num1){
  return num1 * 5;
}

//Assignment with a Returned Value

processed = processArg(7);

//Stand in Line

arr.push(item);
  var removed = arr.shift();

  return removed;

//Understanding Boolean Values

return true;

//Use Conditional Logic with If Statements

if(wasThatTrue){
  return "Yes, that was true";
}
return "No, that was false";

//Comparison with the Equality Operator

if (val== 12)

//Comparison with the Strict Equality Operator

if (val === 7)

//Comparison with the Inequality Operator

if (val != 99)

//Comparison with the Strict Inequality Operator

if (val !== 17)

//Comparison with the Greater Than Operator

if (val > 100)
if (val > 10)

//Comparison with the Greater Than Or Equal To Operator

if (val >= 20 )
if (val >= 10 )

//Comparison with the Less Than Operator

if (val < 25 )
if (val < 5 )

//Comparison with the Less Than Or Equal To Operator

if (val <= 12)
if (val <= 24)

//Comparisons with the Logical And Operator

if (val >= 25 && val<= 50)

//Comparisons with the Logical Or Operator


  if (val < 10 || val > 20)


//Introducing Else Statements

else {
    result = "5 or Smaller";
  }

//Introducing Else If Statements

if (val > 10) {
  return "Greater than 10";
}

else if (val < 5) {
  return "Smaller than 5";
}
else
return "Between 5 and 10";

//Logical Order in If Else Statements

if (val < 5) {
  return "Less than 5";
} else if (val < 10) {
  return "Less than 10";
} else {
  return "Greater than or equal to 10";
}

//Chaining If Else Statements

if(num < 5){
  return "Tiny";
}
else if(num < 10){
  return "Small";
}
else if(num < 15){
  return "Medium";
}
else if(num < 20){
  return "Large";
}
else
    return "Huge";

//Golf Code

if (strokes === 1){
    return "Hole-in-one!";
  } else if (strokes <= par - 2){
    return "Eagle";
  } else if (strokes === par - 1) {
    return "Birdie";
  } else if (strokes === par) {
    return "Par";
  } else if (strokes === par + 1) {
    return "Bogey";
  } else if (strokes === par + 2) {
    return "Double Bogey";
  } else if (strokes >= par + 3) {
    return "Go Home!";
  }

//Selecting from many options with Switch Statements

switch (val) {
  case 1:
    answer = "alpha";
    break;
  case 2:
    answer = "beta";
    break;
  case 3:
    answer = "gamma";
    break;
  case 4:
    answer = "delta";
    break;
}

//Adding a default option in Switch statements

switch (val) {
  case "a":
    answer = "apple";
    break;

  case "b":
    answer = "bird";
    break;

  case "c":
    answer = "cat";
    break;

  default:
    answer ="staff";
}

//Multiple Identical Options in Switch Statements

switch (val) {
  case 1:
  case 2:
  case 3:
    answer = "Low";
    break;
  case 4:
  case 5:
  case 6:
    answer = "Mid";
    break;
  case 7:
  case 8:
  case 9:
    answer = "High";
    break;
}

//Replacing If Else Chains with Switch

switch(val){
  case "bob":
    answer = "Marley";
    break;
  case 42:
    answer = "The Answer";
    break;
  case 1:
    answer = "There is no #1";
    break;
  case 99:
    answer = "Missed me by this much!";
    break;
  case 7:
    answer = "Ate Nine";
    break;
}

//Returning Boolean Values from Functions

return a < b;

//Return Early Pattern for Functions

if (a < 0 || b < 0) {
  return console.log("undefined");
}

//Counting Cards

switch (card){
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    count+=1;
    break;
  case 7:
  case 8:
  case 9:
    count+=0;
    break;
  case 10:
  case 'J':
  case 'Q':
  case 'K':
  case 'A':
    count-= 1;
    break;
}

return count + (count > 0 ? " Bet" : " Hold");

//Build JavaScript Objects

var myDog = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "friends": ["Lion", "Jaguar"]
};

//Accessing Objects Properties with the Dot Operator

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

//Accessing Objects Properties with Bracket Notation

var entreeValue = testObj["an entree"];
var drinkValue = testObj['the drink'];

//Accessing Objects Properties with Variables

var playerNumber = 16;
var player = testObj[playerNumber];

//Updating Object Properties

myDog.name = "Happy Coder";

//Add New Properties to a JavaScript Object

myDog.bark = "bow-wow";

//Delete Properties from a JavaScript Object

delete myDog.tails;

//Using Objects for Lookups

var lookup = {
   "alpha":"Adams",
   "bravo":"Boston",
   "charlie":"Chicago",
   "delta":"Denver",
   "echo":"Easy",
   "foxtrot":"Frank"
   };

 result = lookup[val];

 return result;

//Testing Objects for Properties

if (myObj.hasOwnProperty(checkProp)) return myObj[checkProp];
return "Not Found" ;

//Manipulating Complex Objects

{
     "artist": "Müslüm Gürses",
     "title": "BABA",
     "release_year": 1953,
     "formats": [
        "CD",
        "Cassette",
        "LP"
    ]
 }
//OR
myMusic.push(
  {"artist": "Müslüm Gürses", "title": "BABA", "release_year": 1953, "formats": ["CD", "Cassette", "LP"]}
);

//Accessing Nested Objects

var gloveBoxContents = myStorage.car.inside["glove box"];

//Accessing Nested Arrays

var secondTree = myPlants[1].list[1];

//Iterate with JavaScript For Loops

for(var k = 1; k < 6; k++){
  myArray.push(k);
}

//Iterate Odd Numbers With a For Loop

for (var k = 1; k <10; k += 2){
  myArray.push(k);
}

//Count Backwards With a For Loop

for (var k = 9; k > 0; k -= 2) {
  myArray.push(k);
}

//Iterate Through an Array with a For Loop

var total = 0;

for (var k = 0; k < myArr.length;k++){
  total += myArr[k];
}

//Nesting For Loops

for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    product *= arr[i][j];

  }
}

//Iterate with JavaScript While Loops

var i = 0;
while(i < 5) {
  myArray.push(i);
  i++;
}

//Profile Lookup

var answer = "No such contact";
contacts.some(function(arg) {
  if (arg.firstName === firstName && arg.hasOwnProperty(prop) === true) {
    answer = arg[prop];
  } else if (arg.hasOwnProperty(prop) === false) {
    answer = "No such property";
  }
});
return answer;

//Generate Random Fractions with JavaScript

var i;
i = Math.random();
return i;

//Generate Random Whole Numbers with JavaScript

return Math.floor(Math.random() * 10);

//Generate Random Whole Numbers within a Range

return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;

//Sift through Text with Regular Expressions

var expression = /and/gi;

//Find Numbers with Regular Expressions

var expression = /\d+/g;

//Find Whitespace with Regular Expressions

var expression = /\s+/g;

//Invert Regular Expression Matches with JavaScript

var expression = /\S/g;
