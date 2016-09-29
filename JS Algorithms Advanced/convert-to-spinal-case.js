// Convert string to spinal-case
function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase().replace(/\s+/g, '-').replace(/_/g, '-');
  return str;
}

console.log(spinalCase('This_IsSpinal Tap'));
