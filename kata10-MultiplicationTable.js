const multiplicationTable = function(maxValue) {
  // Your code here
  let row = ""
  for (y = 1; y <= maxValue; y++) {
    for (x = 1; x <= maxValue; x++) {
      row = row + (y * x) + " ";
    }
    row = row + "\n";
  }
return row
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));