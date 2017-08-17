function addTogether() {
  var checkNum = function(num) {
    if (typeof num !== 'number') {
      return undefined;
    } else
      return num;
  };

  if (arguments.length > 1) {
    var number1 = checkNum(arguments[0]);
    var number2 = checkNum(arguments[1]);
    if (number1 === undefined || number2 === undefined) {
      return undefined;
    } else {
      return number1 + number2;
    }
  } else {

    var number3 = arguments[0];
    if (checkNum(number3)) {
      return function(arg2) {
        if (number3 === undefined || checkNum(arg2) === undefined) {
          return undefined;
        } else {
          return number3 + arg2;
        }
      };
    }
  }
}

// test here
addTogether(2,3);
