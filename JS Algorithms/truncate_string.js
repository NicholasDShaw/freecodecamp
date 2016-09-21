// Truncate a string
function truncateString(str, num) {
  
    if (num > 3) {
      truncated = (str.length > num) ? str.substring(str, num-3) + "..." : str;
    } else {
      truncated = (str.length > num) ? str.substring(str, num) + "..." : str;
    }
  return truncated;
}

truncateString("Peter Piper picked a peck of pickled peppers", 14);
