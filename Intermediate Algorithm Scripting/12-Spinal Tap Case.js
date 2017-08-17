function spinalCase(str) {
  var exmp = /\s+|_+/g;
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  return str.replace(exmp, '-').toLowerCase();
}

spinalCase('This Is Spinal Tap');
