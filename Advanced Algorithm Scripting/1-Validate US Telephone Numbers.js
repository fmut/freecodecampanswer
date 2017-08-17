function telephoneCheck(str) {
   //Good Luck ! Thanks Cınım...
   var numerö = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
   return numerö.test(str);
}

telephoneCheck("555-555-5555");
