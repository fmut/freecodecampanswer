function fearNotLetter(str) {
  var check = str.charCodeAt(0), missing;

  str.split('').map(function(letter,index) {
    if (str.charCodeAt(index) == check) {
      ++check;
    } else {
      missing = String.fromCharCode(check);
    }
  });

  return missing;
}

fearNotLetter("abce");
