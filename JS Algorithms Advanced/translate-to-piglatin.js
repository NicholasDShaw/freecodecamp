//translate to pig latin
function translatePigLatin(str) {
    var a = "";
    var b = str.search(/[aeiou]/i); 
    if (b === 0) { 
        a = "way";
        str = str + a;
    } else if (b > 0) { 
        a = str.slice(0, b); 
        str = str.slice(b) + a + "ay";
    }
  return str;
}

translatePigLatin("glove");
translatePigLatin("california");