// To see output open console

var numbers = [13, 99, 69, 73, 16, 97, 0, 42, 14, 27];

var strings = [
  'bsraq',
  'haysk',
  'vlnbb',
  'suxdq',
  'ljpgw',
  'ucwph',
  'jwieu',
  'wdovf',
  'ijapc',
  'jvixx'
];

var objects = [{
  'x': 3,
  'y': 'xpggm'
}, {
  'x': 4,
  'y': 'qlqip'
}, {
  'x': 6,
  'y': 'xvlrt'
}, {
  'x': 7,
  'y': 'fkdbd'
}, {
  'x': 0,
  'y': 'rfvvc'
}, {
  'x': 1,
  'y': 'scsfd'
}, {
  'x': 8,
  'y': 'wrcdm'
}, {
  'x': 5,
  'y': 'vuedf'
}, {
  'x': 2,
  'y': 'wtstr'
}, {
  'x': 9,
  'y': 'pnsgf'
}];

var paths = [{
  x: 5,
  y: 3
}, {
  x: 30,
  y: 0
}, {
  x: 10,
  y: 10
}, {
  x: 20,
  y: 0
}, {
  x: 3,
  y: 1
}, {
  x: 7,
  y: 22
}, {
  x: 6,
  y: 87
}, {
  x: -5,
  y: -5
}];

//Partition- creates a partition and divides the array into two parts,
 // less than pivot and more than pivot. can partition on the basis of individual parameter of object or distance.
// List should be in [{x:1,y:1}] form for distance function
function partition(list, start, end, compareFunction) {
  var pivot;
  pivot = list[end];
  var pIndex = start;
  for (var i = start; i < end; i++) {
    var curVal = list[i];
    if (compareFunction(curVal, pivot) < 0) {
      swap(list, i, pIndex);
      pIndex++;
    }
  }
  swap(list, pIndex, end);
  
  return pIndex;
}
//sorts a list
function quickSort(list, start, end, compareFunction) {
  var pIndex;
  if (start < end) {
    pIndex = partition(list, start, end, compareFunction);
    quickSort(list, start, pIndex - 1,compareFunction);
    quickSort(list, pIndex + 1, end, compareFunction);

  }
  return list;
}

function swap(list, startIndex, endIndex) {
  var temp = list[startIndex];
  list[startIndex] = list[endIndex];
  list[endIndex] = temp;
}

function sort(list, compareFunction) {

if (compareFunction == undefined) {
    var compareFunction = "";
    if (list.every(function(element) {
        return typeof(element) === "string";
      })) {
      compareFunction = function(a, b) {
        if (a > b) {
          return 1;
        } else if (a < b) {
          return -1;
        }
      }

    } else if (list.every(function(element) {
        return typeof(element) === "number";
      })) {
      compareFunction = function(a, b) {
        return a - b;
      }
    } else {
      return list;
    }
  }
  return quickSort(list, 0, list.length - 1,compareFunction);
}


// To input array, keep second argument as null, to input objectm keep second argument as the name of parameter that you want to sort by.
// Example:- 
// If arguement is 'dist' then it takes x and y elements of list for sorting to distance.


document.getElementById("resultArray").innerHTML = JSON.stringify(sort(numbers.slice(0)));
document.getElementById("resultString").innerHTML = JSON.stringify(sort(strings.slice(0)));
document.getElementById("resultObjx").innerHTML = JSON.stringify(sort(objects.slice(0), function(a, b){return a.x-b.x;}));
document.getElementById("resultObjy").innerHTML = JSON.stringify(sort(objects.slice(0), function(a, b){if(a.y>= b.y){return 1;} return -1;}));
document.getElementById("resultObj2x").innerHTML = JSON.stringify(sort(paths.slice(0), function(a, b){return a.x-b.x;}));
document.getElementById("resultObj2y").innerHTML = JSON.stringify(sort(paths.slice(0), function(a, b){return a.y-b.y;}));
document.getElementById("resultObj2dist").innerHTML = JSON.stringify(sort(paths.slice(0), function(a, b){return (((a.x*a.x)+(a.y*a.y))-((b.x*b.x)+b.y*b.y));}));
