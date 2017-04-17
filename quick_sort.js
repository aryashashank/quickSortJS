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
function partition(list, start, end, par) {
  var pivot;
   var keys = Object.keys(list[start]);
  if(par === 'dist'){
    pivot = Math.pow(list[end][keys[0]], 2) + Math.pow(list[end][keys[1]], 2);
  }
  else{
  pivot = par === null ? list[end] :  list[end][par];
  }
  var pIndex = start;

  for (var i = start; i < end; i++) {
    var curVal = par === null ? list[i] : par === "dist" ? Math.pow(list[i][keys[0]], 2)+Math.pow(list[i][keys[1]], 2) : list[i][par];
    if (curVal <= pivot) {
      swap(list, i, pIndex);
      pIndex++;
    }
  }
  swap(list, pIndex, end);
  return pIndex;
}
//sorts a list
function quickSort(list, start, end, par) {
  var pIndex;
  if (start < end) {
    pIndex = partition(list, start, end, par);
    quickSort(list, start, pIndex - 1, par);
    quickSort(list, pIndex + 1, end, par);

  }
  return list;
}

function swap(list, startIndex, endIndex) {
  var temp = list[startIndex];
  list[startIndex] = list[endIndex];
  list[endIndex] = temp;
}

function sort(list, par) {

  return quickSort(list, 0, list.length - 1, par);
}

// To input array, keep second argument as null, to input objectm keep second argument as the name of parameter that you want to sort by.
// Example:- 
// If arguement is 'dist' then it takes x and y elements of list for sorting to distance.

document.getElementById("resultArray").innerHTML = JSON.stringify(sort(numbers.slice(0), null), null, 4);
document.getElementById("resultString").innerHTML = JSON.stringify(sort(strings.slice(0), null), null, 4);
document.getElementById("resultObjx").innerHTML = JSON.stringify(sort(objects.slice(0), 'x'), null, 4);
document.getElementById("resultObjy").innerHTML = JSON.stringify(sort(objects.slice(0), 'y'), null, 4);
document.getElementById("resultObj2x").innerHTML = JSON.stringify(sort(paths.slice(0), 'x'), null, 4);
document.getElementById("resultObj2y").innerHTML = JSON.stringify(sort(paths.slice(0), 'y'), null, 4);
document.getElementById("resultObj2dist").innerHTML = JSON.stringify(sort(paths.slice(0), 'dist'), null, 4);




// Tests

//Partition

function testFull(list,answer, par){
var result = partition(list, 0, list.length-1, par);

return result == answer;
}

function testPart(list,start,end,answer, par){
	
var result = partition(list, start, end, par);
return result == answer;
}

console.log(testFull([1,2,3,4,5], 4, null));
console.log(testFull([5,4,3,2,1], 0, null));
console.log(testFull(objects, 9, 'x'));
console.log(testFull(paths, 0, 'y'));


console.log(testPart([1,2,3,4,5], 0 , 4, 4, null));
console.log(testPart([5,4,3,2,1] , 0 , 3 , 0, null));
console.log(testPart(objects, 3, 9 ,  9, 'x'));
console.log(testPart(paths, 4, 5 , 5, 'y'));

// 