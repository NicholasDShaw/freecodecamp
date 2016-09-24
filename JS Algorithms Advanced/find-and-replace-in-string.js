// find and replace in a string
function myReplace(str, before, after) {
  str = str.replace(before, after);
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

