//Remove elements from beginning of array
function slasher(arr, howMany) {
  
  arr.splice(arr, howMany);
  return arr;
}

console.log(slasher([1, 2, 3], 2));
