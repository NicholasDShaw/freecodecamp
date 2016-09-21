// Repeat a string repeat a string
function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return "";
  }
  var repeat = str;
  for (var i=1; i < num; i++) {
    repeat += str;
  }
  
  return repeat;
}

repeatStringNumTimes("abc", -2);
