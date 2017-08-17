#Answer1
function findLongestWord(str) {
  var strsplit = str.split(' ');
  var longestWord = 0;
  for(var i = 0; i < strsplit.length; i++){
    if(strsplit[i].length > longestWord){
	longestWord = strsplit[i].length;
     }
  }
  return longestWord;
}

#Answer2
function findLongestWord(str) {
  var longestWord = str.split(' ').reduce(function(longest, currentWord) {
    return currentWord.length > longest.length ? currentWord : longest;
  }, "");
  return longestWord.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

findLongestWord("Lorem ipsum dolar");

findLongestWord("Do not try and bend the spoon. That's imposibble.Instead... only try to realize the truth.");
