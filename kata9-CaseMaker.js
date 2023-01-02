const camelCase = function(input) {
  let camelCaseString = "";
  let i = 0;
  while (i < input.length) {
    if (input[i] === " ") {
      i++; 
      camelCaseString = camelCaseString + input[i].toUpperCase();
    } else {
      camelCaseString = camelCaseString + input[i];
    }
    i++;
  }
  return camelCaseString
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));