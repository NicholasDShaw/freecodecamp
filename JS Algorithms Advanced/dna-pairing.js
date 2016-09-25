//DNA Pairing

function pairElement(str) {
  
  var pairs = {
        "A": "T",
        "T": "A",
        "C": "G",
        "G": "C"
		};
  var dna = [];
  dna = str.split('').map(function(val){
   var pair = [];
   pair.push(val, pairs[val]);
   return pair;
  });
  
  return dna;
  
}

pairElement("GCG");