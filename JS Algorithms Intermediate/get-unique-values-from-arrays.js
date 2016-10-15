// get unique values from arrays
function uniteUnique(arr) {
  var result = [];
  for(var i=0; i<arguments.length; i++) {
    result = result.concat(arguments[i]);
  }
  result = [...new Set(result)];
  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);