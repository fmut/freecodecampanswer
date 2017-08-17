function steamrollArray(arr) {
  var basbasArray = [];
  var basbas = function(arg) {
    if (!Array.isArray(arg)) {
      basbasArray.push(arg);
    } else {
      for (var a in arg) {
        basbas(arg[a]);
      }
    }
  };

  arr.forEach(basbas);
  return basbasArray;
}


steamrollArray([1, [2], [3, [[4]]]]);
