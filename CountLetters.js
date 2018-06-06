var countLetters = function(string) {
  var cleanUp = string.split(" ").join("");
  //console.log(cleanUp);

  var isMultiple = {};
  for (var i = 0; i < cleanUp.length; i++) {
    if (isMultiple[cleanUp[i]] >= 1){
      isMultiple[cleanUp[i]] += 1;
    } else {
      isMultiple[cleanUp[i]] = 1;
    }
  }
  console.log(isMultiple);

}

countLetters("lighthouse in the house");