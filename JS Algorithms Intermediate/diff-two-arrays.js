// Diff Two Arrays

function diffArray(arr1, arr2) {
  var newArr = [];
  
  for(var i=0; i < arr1.length; i++) {
    if(arr2.indexOf(arr1[i]) === -1 ) {
      newArr.push(arr1[i]);
    }
  }
  
  for(var i=0; i < arr2.length; i++) {
    if(arr1.indexOf(arr2[i]) === -1 ) {
      newArr.push(arr2[i]);
    }
  }
  
  newArr.sort();
  
  return newArr;
}

diffArray([1, 2, 3, 5, 7], [1, 2, 3, 4, 5, 6]);
