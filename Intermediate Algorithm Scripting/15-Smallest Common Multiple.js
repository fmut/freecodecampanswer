function smallestCommons(arr) {
    var range = [];
    for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
    range.push(i);
    }

    var exmp = range[0];
    for (i = 1; i < range.length; i++) {
    var GCD = gcd(exmp, range[i]);
    exmp = (exmp* range[i]) / GCD;
    }
    return exmp;

    function gcd(x, y) {
    if (y === 0)
        return x;
    else
        return gcd(y, x%y);
    }
}


smallestCommons([1,5]);
