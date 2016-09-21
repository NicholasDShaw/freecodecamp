// Sum all numbers in a range
function sumAll(arr) {
  var max = Math.max(...arr);
  var min = Math.min(...arr);
  var dif = max-min-1;
  var all = [];
  
  all.push(min);
  for(var i=1; i <= dif; i++) {
    all.push(i+min);
  }
  
  all.push(max);

  all = all.reduce( ( a, b ) => a + b, 0 );
  
  return all;
}

sumAll([5, 10]);
