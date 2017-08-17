function translatePigLatin(str) {
  function control(obj) {
      return ['a','i','u','e','o'].indexOf(str.charAt(obj)) == -1 ? control(obj + 1) : obj;
  }

  return str.substr(control(0)).concat((control(0) === 0 ? 'w' : str.substr(0, control(0))) + 'ay');
}

translatePigLatin("consonant");
