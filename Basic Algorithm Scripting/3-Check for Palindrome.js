
function palindrome(str) {
  // Good luck!
  var normalizedStr = str.replace(/[\W_]/g, '').toLowerCase();
  var reverseStr = normalizedStr.split('').reverse().join('');
  if(normalizedStr === reverseStr)return true;
  else  return false;

}

palindrome("eye");
palindrome("test");
palindrome("ey edip adanada pide ye");
