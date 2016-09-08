// Remove args from array ([array], args)
function destroyer(arr) {

  var args = [];

  for (var i=1; i < arguments.length; i++) {
    args.push(arguments[i]);
  }

  var filtered = arr.filter(function(val) {
    return args.indexOf(val) < 0 ? true : false;

  });

  return filtered;

}

destroyer([1, 2, 3, 1, 2, 3], 1, 3);

