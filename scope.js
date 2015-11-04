//Scope
var x = 5;

console.log('x before:', x); // 5

var someFunction = function() {
	x = 12;
	console.log('x during', x); // 12
};

someFunction();
console.log('x after:', x); //12 !!
