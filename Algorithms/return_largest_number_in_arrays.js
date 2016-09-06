// Return Largest Numbers in Arrays
function largestOfFour(arr) {
  
  var result = [];
  for(var i=0; i < arr.length; i++) {
    var sorted = arr[i].sort(function (a, b) {
                   return b-a;
                 });
    
    result[i] = sorted[0];
    
  }
  
  return result;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

