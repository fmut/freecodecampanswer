function convertHTML(str) {
  var exm = str.split('');

  for (var i = 0; i < exm.length; i++) {
    switch (exm[i]) {
      case '<':
        exm[i] = '&lt;';
        break;
      case '&':
        exm[i] = '&amp;';
        break;
      case '>':
        exm[i] = '&gt;';
        break;
      case '"':
        exm[i] = '&quot;';
        break;
      case "'":
        exm[i] = "&apos;";
        break;
    }
  }

  exm = exm.join('');
  return exm;
}
convertHTML("Dolce & Gabbana");
