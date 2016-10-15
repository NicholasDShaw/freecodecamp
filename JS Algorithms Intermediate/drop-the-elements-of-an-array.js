/*
Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.

Return the rest of the array, otherwise return an empty array.
*/

function dropElements(arr, func) {
  // Drop them elements.
  var f = 0,
      t = 0;
  
  for(var i=0; i<arr.length; i++) {
    console.log(func(arr[i]));
    if(func(arr[i]) === false) {
      if(t === 0) {
        f++;
      }
    } else if (func(arr[i]) === true) {
        t++;
    }
  }
  
  if (t !== arr.length-1 && f !== 0) {
    if (f > 0) {
      arr.splice(0, f);
    } else {
      arr.splice(0, arr.length);
    }
  }

  return arr;
}

dropElements([0, 1, 0, 1], function(n) {return n === 1;}); //should return [0, 1, 0]

