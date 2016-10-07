//find the smallest common multiple
function smallestCommons(arr) {
  
  var min = Math.min(arr[0], arr[1]),
  	  max = Math.max(arr[0], arr[1]),
      scm = max,
  calcScm = function(a,b) {
	  			var prod = 1;
	  			for(var x=1; x<=a; x++) {
	  				prod = b*x;
	  				if (prod%a === 0) return prod;
	  			}
	  	 	};
  for(var i=max-1; i>=min; i--){
  	scm = calcScm(i,scm);
  }
  
  return scm;
}

smallestCommons([1,5]);