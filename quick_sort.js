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

function quickSort (list, start, end) {
	var pIndex;
	if(start<end){
		console.log(list);	
		pIndex = partition(list, start, end);
		console.log(list);
		list = quickSort(list, start , pIndex-1);
		console.log(list);
		list = quickSort(list, pIndex+1 , end);
		console.log(list);
	}
	return list;
}

function swap(list, startIndex, endIndex){
	var temp = list[startIndex];
	list[startIndex] = list[endIndex];
	list[endIndex] = temp;
}


function sort(list){
	return quickSort(list, 0, list.length-1);
}



result.innerHTML = sort(strings);
