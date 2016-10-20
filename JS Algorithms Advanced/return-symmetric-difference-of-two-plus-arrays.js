// Return Symetric Differnce of 2+ arrays

function sym(args) {
  
var sym = [], diff;
  
for (var i=0; i<(arguments.length-1); i++) {
  var next = i+1;
  var prev = i-1;
  if (i===0) {
    diff = arguments[i].filter(a => arguments[next].indexOf(a) == -1)
    .concat(arguments[next].filter(a => arguments[i].indexOf(a) == -1));
    sym.push(diff);
  } else {
    diff = sym[prev].filter(a => arguments[next].indexOf(a) == -1)
    .concat(arguments[next].filter(a => sym[prev].indexOf(a) == -1));
    sym.push(diff);
  }
}
  
sym = sym[sym.length-1].sort().filter((v, i, a) => a.indexOf(v) === i);

return sym;
}

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);
