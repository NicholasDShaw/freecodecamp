// Confirm the Ending
function confirmEnding(str, target) {
  
  var end = str.length;
  var start = end-target.length;
  var result = (target == str.substring(start, end)) ? true : false;
  
  return result;

}

confirmEnding("Bastian", "n");
