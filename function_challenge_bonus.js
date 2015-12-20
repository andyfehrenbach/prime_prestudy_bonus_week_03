
function functionA (number){

	return number * 3 / 4;
}

function functionB (number){
	
	return number * number;
}

function functionC (number){
	
	return number / 2;
}

var answer = functionA(functionB(functionC(8)));

console.log(answer);



