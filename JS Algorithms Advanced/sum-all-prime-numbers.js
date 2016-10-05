// Sum all prime numbers

function sumPrimes(num) {
  var i,x,y,sum = 0;
  // init range of numbers, mark all as true
  var prime = [];
  for (i=0; i <= num; i++) prime.push(true);

  // mark composit numbers
  for (i=2; i <= Math.sqrt(num)|0; i++) {
    if (prime[i]) {
      for (x = i*i; x <= num ;x += i) {
        prime[x] = false;
      }
    }
  }

  // extract primes
  var primes = [];
  for (i=2; i <= num; i++) {
    if (prime[i]) primes.push(i);
  }

   // Add the primes
  for (y=0; y < primes.length; y++) {
    sum += primes[y];
  }

  return sum;
}
