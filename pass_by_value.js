//pass by value
var num = 5;

var square = function(x) {
	x = x * x;
	return x;
}

square(num);  //25
num;					//still 5!


var arr = [5, 10, 15, 4, 5];

var squareFirstElement = function(x) {
	x[1] = x * x;
	return x[1];
}

squareFirstElement(arr);  //25
arr[1];										//25! the value of arr is a *reference* to the array!
