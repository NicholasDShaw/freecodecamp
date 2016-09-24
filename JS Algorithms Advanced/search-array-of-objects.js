// Search array of objects
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  
  var prop = Object.keys(source);
  return collection.filter(function(obj) {
    return prop.every(function(key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });