function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var num1 = 2 * Math.PI;
  var newArr = [];
  var getOrbPeriod = function(obj) {
    var num3 = Math.pow(earthRadius + obj.avgAlt, 3);
    var num2 = Math.sqrt(num3 / GM);
    var orbPeriod = Math.round(num1 * num2);
    delete obj.avgAlt;
    obj.orbitalPeriod = orbPeriod;
    return obj;
  };

  for (var elem in arr) {
    newArr.push(getOrbPeriod(arr[elem]));
  }

  return newArr;
}
