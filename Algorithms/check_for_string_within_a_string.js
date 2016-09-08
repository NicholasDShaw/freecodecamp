// check for string within a string
function mutation(arr) {
  
 var letters = arr[1].toLowerCase().split("");
  for(var i in letters) {
    if(arr[0].toLowerCase().includes(letters[i])) {
      result = true;
    } else {
      result = false;
      break;
    }
  }
 
  return result;
}

mutation(["Mary", "xaary"]);
