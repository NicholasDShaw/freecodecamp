// Split arr into groups the lenth of size and return a 2 dimentional array
function chunkArrayInGroups(arr, size) {
  result = [];
  while(arr.length) {
      result.push(arr.splice(0,size));
  }
  
  // Break it up.
  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"],2);

