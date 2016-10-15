// Sum two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

function addTogether() {
  var a = Array.from(arguments), n = 'number';

  return a.some(b => typeof b !== n) ? undefined: 
    a.length > 1 ? a.reduce((c, b) => c += b, 0):
      (b) => typeof b === n ? b + a[0] : undefined;
}

addTogether(8)(3);

/* 
addTogether(2, 3) should return 5.
addTogether(2)(3) should return 5.
addTogether("http://bit.ly/IqT6zt") should return undefined.
addTogether(2, "3") should return undefined.
addTogether(2)([3]) should return undefined.
*/
