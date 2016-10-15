/*
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
*/

function truthCheck(collection, pre) {
  // Is everyone being true?
  return collection.every(function (a) {
    return a.hasOwnProperty(pre) && Boolean(a[pre]);
  });
  
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

