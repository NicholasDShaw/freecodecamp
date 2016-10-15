// Return first element in array that passes test

function findElement(arr, func) {
  var num;
  for(var i=0; i<arr.length; i++) {
    if(func(arr[i])) {
      return arr[i];
      break;
    }
  }
  return num;
}

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) //should return 8.
