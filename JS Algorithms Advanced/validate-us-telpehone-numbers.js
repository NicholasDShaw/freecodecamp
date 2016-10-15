//Validate US Telephone Numbers
function telephoneCheck(str) {
  return Boolean(str.match(/^1? ?(\d{3}|\(\d{3}\))[ -]?\d{3}[ -]?\d{4}$/g));
}

telephoneCheck("22225555555");

/*
Valid Examples:
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
*/
