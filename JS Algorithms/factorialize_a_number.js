// factorialize a number
function factorialize(num) {
  result=1;
  for (i=1; i < num; i++) {
    result = result*(i+1);
  }
  return result;
}

factorialize(4);