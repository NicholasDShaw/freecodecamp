// check for palindromes
function palindrome(str) {
  // create forward and reverse versions of string
  var fwd = str.replace(/[\s]/g, "").replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
  var rev = fwd.split("").reverse().join("");
  // check if string is a palindrome
  if(fwd == rev){
    return true;
    } else {
    return false;
    }
}

palindrome("A man, a plan, a canal. Panama");