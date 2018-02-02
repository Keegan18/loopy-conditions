/**
 * Create a function called 'greaterNumber'
 * This function will take in 2 Parameters.
 * You need to check which number is greater and return that number
 * @param  { Number } a
 * @param  { Number } b
 * @return { Number }
 */
function greaterNumber(a, b){
	if (a > b){
		return a;
	}
	else{
		return b;
	}
}
greaterNumber(25, 85)

/**
 * Create a function called 'stringOfNumbers'.
 * This function will take in 1 parameter
 * Your task is to add all the numbers in between 0 and n
 * For example if the number is 10 than the function should return:
 * "0,1,2,3,4,5,6,7,8,9,10"
 * @param  { Number } n
 * @return { String }
 */
function stringOfNumbers(n){
	var numberArray = [];
		for (var i = 0; i < n; i++){
			numberArray += i;
		}
		return (numberArray);
}
stringOfNumbers(15);

/**
 * Create a function called 'sumOfArray'.
 * This function will take in a parameter that is an array.
 * Your task is to take the array and return the sum of all the numbers in the array.
 * You must check if the item in the array is a number
 * @param  { array } arr
 * @return { Number }
 */
function sumOfArray(array){
	var sum;
	for (var i = 0; i < array.length; i++){
		sum += array[i];
	}
	console.log(sum);
	return sum;
}

/**
 * Create a function called 'getEvens'.
 * This function will take in a parameter that is an array.
 * Your task is to take the array and return all the even numbers in a new array.
 * @param  { array } arr
 * @return { array }
 */
function getEvens(array){
	var evenArray = [];
		for (var i = 0; i < array.length; i++){
			var m = array[0].toString().split("").pop();
		if (m == 0 || m == 2 || m == 4 || m == 6 || m == 8){
			evenArray.push(array[0]);
			array.shift();
		}
		else{
			array.shift();
		}
}
if (evenArray.length <= 0){
	console.log("N/A Evens");
	return ("N/A Evens");
}
else {
	console.log(evenArray);
	return (evenArray);
}
}
getEvens([2, 6, 18, 48, 356]);

/**
 * Create a function called 'getOdds'.
 * This function will take in a parameter that is an array.
 * Your task is to take the array and return all the odd numbers in a new array.
 * @param  { array } arr
 * @return { array }
 */
function getOdds(array){
	var oddArray = [];
	for (var i = 0; i < array.length; i++){
		var g = array[0].toString().split("").pop();
		if (g == 1 || g == 3 || g == 5 || g == 7 || g == 9){
			oddArray.push(array[0]);
			array.shift();
		}
		else{
			array.shift();
		}
	}
	if (oddArray.length <= 0){
		console.log("N/A Odds")
		return "N/A Odds";
	}
	else{
		console.log(oddArray);
		return oddArray;
	}
}
getOdds([1, 7, 11, 32, 101]);

/**
 * Create a function called 'calculate'.
 * This function will take in 3 parameters:
 * The first parameter is a number.
 * The second parameter is a number.
 * The third param is a string that will be 'add', 'subtract', 'multiply', 'divide'.
 * Your task is to do a mathematical operation on the 2 numbers based on the third parameter.
 * The function should return the string "Invalid operator" if the operator is
 * not 'add', 'subtract', 'multiply', 'divide'.
 * @param  { Number } int1
 * @param  { Number } int2
 * @param  { String } operator ('add', subtract, 'multiply', 'divide')
 * @return { Number/String }
 */
function calculate(number1, number2, x){
	if (x == "add", "addition", "sum"){
		output = number1 + number2;
	}
		if else (x == "subtract", "subtraction", "difference"){
			output = number1 - number2;
		}
		if else (x == "multiply", "multiplication", "product"){
			output = number1 * number2;
		}
		if else (x == "divide", "division", "quotient"){
			output = number1 / number2;
		}
	else {
		output = "Redo Equation";
	}
}
calculate(21, 40, "multiply");
console.log(output);