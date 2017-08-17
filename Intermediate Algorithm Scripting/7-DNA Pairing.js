#Answer1
function pairElement(str) {
  var paired = [];
  var search = function(char) {
    switch (char) {
      case 'A':
        paired.push(['A', 'T']);
        break;
      case 'T':
        paired.push(['T', 'A']);
        break;
      case 'C':
        paired.push(['C', 'G']);
        break;
      case 'G':
        paired.push(['G', 'C']);
        break;
    }
  };
  for (var i = 0; i < str.length; i++) {
    search(str[i]);
  }
  return paired;
}

pairElement("GCG");


#Answer2
function pairElement(str) {
  var map = {T:'A', A:'T', G:'C', C:'G'};
  strArr = str.split('');
  for (var i=0;i<strArr.length;i++){
    strArr[i]=[strArr[i], map[strArr[i]]];
  }
 return strArr;
}

pairElement("GCG");
