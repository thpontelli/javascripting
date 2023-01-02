const judgeVegetable = function (vegetables, metric) {
  var highest = 0;
  for (var i = 0; i < vegetables.length; i++) {
    if (vegetables[i][metric] > vegetables[highest][metric]) {
      highest = i;
    }  
  }
  return vegetables[highest].submitter;
};

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];

const metric = "redness";

console.log(judgeVegetable(vegetables, metric));