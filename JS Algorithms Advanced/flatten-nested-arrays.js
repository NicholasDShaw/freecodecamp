//flatten nested arrays
function steamrollArray(arr) {
  // I'm a steamroller, baby
  return arr.reduce(function (a, b) {
    return a.concat(Array.isArray(b) ? steamrollArray(b) : b);
  }, []);
}

steamrollArray([1, [2], [3, [[4]]]]);

