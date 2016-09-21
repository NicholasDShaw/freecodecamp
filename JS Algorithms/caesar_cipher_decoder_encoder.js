//Caesar cipher decoder/encoder
function rot13(str) { // LBH QVQ VG!
  
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    str = str.split("");
  
    for (var i=0; i < str.length; i++) {
      
      if((/^[a-zA-Z]+$/.test(str[i]))) {
        str[i] = alphabet.indexOf(str[i]);
        if       (str[i] >= 0 && str[i] <= 12) str[i] += 13;
        else if  (str[i] >= 13 && str[i] <= 25) str[i] -= 13;
        str[i] = alphabet.substring(str[i], str[i]+1);
      }
    }
    
    str = str.join("");
  
  return str;
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
