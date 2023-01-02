const repeatNumbers = function(data) {
  let repeatedNumbers = "";
  for (let i = 0; i < data.length; i++) {
    for (let j = 1; j <= data[i][1]; j++) {
      repeatedNumbers = repeatedNumbers + data[i][0]; 
    }
    if (data.length > 1 && data.length - 1 != i) {
      repeatedNumbers = repeatedNumbers + ", ";
    }
  }
  return repeatedNumbers
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));