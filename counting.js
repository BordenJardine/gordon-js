
//First Class Functions
var countTo = function(from, to, countingFunction) {
	var x = from;
	while(x < to) {
		console.log(x);
		x = countingFunction(x);
	}
};

var byTwo = function(x) { return x + 2 };
var square = function(x) { return x * x };


//Scope
var x = 5;

console.log('x before:', x);

var someFunction = function() {
	var x = 12;
	console.log('x during', x);
};

someFunction();
console.log('x after:', x);
