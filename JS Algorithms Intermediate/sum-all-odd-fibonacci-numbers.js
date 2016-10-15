// sum all odd fibonacci numbers
function sumFibs(num) {

  var a = 0, b = 1, f = 1, sum = 0, arr = [0, 1];

  while (f <= num) {
    if (f % 2 == 1) sum += f;
    arr.push(f);
    f = a + b;
    a = b; 
    b = f;       
  }
  
  return sum;
}

sumFibs(20);
