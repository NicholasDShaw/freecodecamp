// find logest word in sentence
function findLongestWord(str) {

  var words = str.split(" ");
  
  for(var i=0; i < words.length; i++) {
    words[i] = words[i].length;
  }
  
  words.sort(function(a, b) {
    return b-a;
  });

  return words[0];
}

findLongestWord("What if we try a super-long word such as otorhinolaryngology");
