var countLetters = function(string) {
  var cleanUp = string.split("");
  var isMultiple = {};
  for (var i = 0; i < cleanUp.length; i++) {
    var letter = cleanUp[i];
    var stringPosition = i.toString();
    if (isMultiple[letter] !== undefined){
      isMultiple[letter] += "," + stringPosition;
    } else {
      isMultiple[letter] = stringPosition;
    }
  }
  console.log(isMultiple);

}

countLetters("lighthouse in the house");