
// To see output open console
var result = document.getElementById("result");



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

var objects = [
{'x': 3, 'y': 'xpggm'},
{'x': 4, 'y': 'qlqip'},
{'x': 6, 'y': 'xvlrt'},
{'x': 7, 'y': 'fkdbd'},
{'x': 0, 'y': 'rfvvc'},
{'x': 1, 'y': 'scsfd'},
{'x': 8, 'y': 'wrcdm'},
{'x': 5, 'y': 'vuedf'},
{'x': 2, 'y': 'wtstr'},
{'x': 9, 'y': 'pnsgf'}
];

function partitionForObjects(list, start, end, par){
	var pivot = list[end][par];
	var pIndex = start;
		for(var i = start ; i< end; i++){
		if(list[i][par]<=pivot){
		swap(list, i, pIndex);
		pIndex++;
		}
	}
	swap(list, pIndex, end);
	return pIndex;
}
function partition(list, start, end){
	var pivot = list[end];
	var pIndex = start;
	for(var i = start ; i< end; i++){
		if(list[i]<=pivot){
		swap(list, i, pIndex);
		pIndex++;
		}
	}
	swap(list, pIndex, end);
	return pIndex;
}

function quickSort (list, start, end, par) {
	var pIndex;
	if(start<end){
    if(par!=null){
		  pIndex = partitionForObjects(list, start, end, par);
		  quickSort(list, start , pIndex-1, par);
		  quickSort(list, pIndex+1 , end, par);
    }
    else{
      pIndex = partition(list, start, end, null);
		  quickSort(list, start , pIndex-1, null);
		  quickSort(list, pIndex+1 , end, null);
    }      
	}
	return list;
}


function swap(list, startIndex, endIndex){
	var temp = list[startIndex];
	list[startIndex] = list[endIndex];
	list[endIndex] = temp;
}


function sort(list, par){
 
	return quickSort(list, 0, list.length-1, par);
}

// To input array, keep second argument as null, to input objectm keep second argument as the name of parameter that you want to sort by.
// Example:- 
var x = sort(objects, 'y');
console.log(x);
result.innerHTML = x;
