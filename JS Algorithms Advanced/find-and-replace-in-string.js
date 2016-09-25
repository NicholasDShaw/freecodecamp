// find and replace in a string, preserving case
function myReplace(str, before, after) {
  var i=0;
  var result=[];
  while (i <= after.length){
    charac = before.charAt(i);
    if (!isNaN(charac * 1)){
        result.push(after.charAt(i));
    }else{
      if (charac == charac.toUpperCase()) {
        result.push(after.charAt(i).toUpperCase());
      }
      if (charac == charac.toLowerCase()){
        result.push(after.charAt(i).toLowerCase());
      }
    }
    i++;
  }
  after = result.join("");
  str = str.replace(before, after);
  return str;
}

myReplace("Let us get back to more Coding", "Coding", "algorithms");

