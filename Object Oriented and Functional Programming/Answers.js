//Declare JavaScript Objects as Variables
var MotorBike = {
"engines":1,
  "wheels":2,
  "seats":2,
};

//Declare JavaScript Objects as Variables

var MotorBike = function() {
  this.wheels = 2;
  this.engines = 1;
  this.seats = 2;
};

//Construct JavaScript Objects with Functions

var myCar = new Car();
myCar.nickname = "Fordan";

//Make Instances of Objects with a Constructor Function

var Car = function(wheels, seats, engines) {
  this.wheels = wheels;
  this.seats = seats;
  this.engines = engines;
};

var myCar = new Car(2,3,4);

//Make Unique Objects by Passing Parameters to our Constructor

var gear = 0;
  this.getGear = function(){
    return gear;
  };
  this.setGear = function(set){
    gear = set;
  };

//Make Object Properties Private

var gear = 0;
  this.getGear = function(){
    return gear;
  };
  this.setGear = function(set){
    gear = set;
  };

//Iterate over Arrays with .map

var addThree = oldArray.map(function(val) {
  return val + 3;
});

var newArray = addThree;

//Condense arrays with .reduce

var singleVal = array.reduce(function(previousVal, currentVal){
  return previousVal+currentVal;
});

//Filter Arrays with .filter

var newArray = oldArray.filter(function (val){
  return val < 6;
});

//Sort Arrays with .sort

array.sort(function(a, b){
  return a < b;
} );

//Reverse Arrays with .reverse

newArray = array.reverse();

//Concatenate Arrays with .concat

newArray = oldArray.concat(concatMe);

//Split Strings with .split

array = string.split(' ');

//Join Strings with .join

joinedString = joinMe.join(" ");
