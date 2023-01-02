const urlEncode = function(text) {
  let urlEncoded = "";
    for (i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      if (i != 0 && i != text.length -1) {
        urlEncoded = urlEncoded + "%20"
      }  
    } else {
      urlEncoded = urlEncoded + text[i]
    }
  }
  return urlEncoded; 
}; 


console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));