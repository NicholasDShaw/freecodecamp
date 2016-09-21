// Find Sequential Insert Position in Array
function getIndexToIns(arr, num) {
  
  arr.sort(function compareNumbers(a, b) {
  return a - b;
});

  for (var i=0; i < arr.length; i++) {
    
    if(arr[i] >= num) {
      result =  i;
      break;
    } else if (i == arr.length-1) {
      result = i+1;
    }
    
  }
  
  console.log(result);
  
}

getIndexToIns([2, 5, 10], 15);
