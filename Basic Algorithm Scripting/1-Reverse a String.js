
//Answer#1

function reverseString(str) {
  var answer = '';
  for (var i = str.length - 1; i >= 0; i--)
    answer += str[i];
  return answer;
}

reverseString("hello");

//Answer#2

function reverseString(str) {
  return str.split('').reverse().join('');
}
