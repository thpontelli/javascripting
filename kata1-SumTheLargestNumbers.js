const sumLargestNumbers = function(data) {
  if (data[0] >= data[1]) { 
    var highest = data[0];
    var secondHighest = data[1];
  }
  else {
    var highest = data[1];
    var secondHighest = data[0];
  }
// console.log("highest" + highest);
// console.log("secondHighest" + secondHighest);

  for (let i = 2; i < data.length; i++) {
    if (data[i] > highest) {
      secondHighest = highest;
      highest = data[i];
    } else if (data[i] > secondHighest) {
      secondHighest = data[i];
    }
  }
  return (highest + secondHighest);
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

