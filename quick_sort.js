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

function partition(start, end){
	var pivot = numbers[end];
	var pIndex = start;
	for(var i = start ; i< end; i++){
		if(numbers[i]<=pivot){
		swap(i, pIndex);
		pIndex++;
		}
	}
	swap(pIndex, end);
	return pIndex;
}

function quickSort (start, end) {
	var pIndex;
	if(start<end){
	
		pIndex = partition(start, end);
		console.log(numbers);
		quickSort(start , pIndex-1);
		quickSort( pIndex+1 , end);
	}
	return numbers;
}

function swap(startIndex, endIndex){
	var temp = numbers[startIndex];
	numbers[startIndex] = numbers[endIndex];
	numbers[endIndex] = temp;

}


quickSort (0, numbers.length-1);




result.innerHTML = numbers; 
