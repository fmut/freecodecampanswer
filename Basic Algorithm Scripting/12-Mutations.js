function mutation(arr) {
  var first = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (i=0;i<first.length;i++) {
    if (target.indexOf(first[i]) === -1)
      return false;
  }
  return true;
 }

mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
