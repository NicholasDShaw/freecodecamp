// convert number to roman numeral

function convertToRoman(num) {
  var romans = [["","I","II","III","IV","V","VI","VII","VIII","IX"],         
                ["","X","XX","XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
                ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
                ["","M","MM","MMM","CD","D","DC","DCC","DCCC","CM"]];
  var result = "";
  var digits = num.toString().split('').reverse();
  for (var i=0; i < digits.length; i++){
    result = romans[i][parseInt(digits[i])] + result;
    console.log(digits);
  }
  return result; 
}

console.log(convertToRoman(1485));
