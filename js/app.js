
// Initializing global variables
var output = '';
var userInput = parseInt(prompt("Please enter an integer greater than 0; decimals will be dropped.\n\rExample 1 - 597a will be read as 597.\nExample 2 - 12.9 will be read as 12."), 10);
console.log("user input resolved to: " + userInput);
console.log(typeof(userInput));

// fizzBuzz function
function fizzBuzz(n) {
    for (var i = 1; i <= n; i++) {
	    if (i % 3 == 0) {
		    output = output + 'Fizz';
	    };
	    if (i % 5 == 0) {
		    output = output + 'Buzz';
	    };
	    if (output.length == 0) {
		    output = i.toString();
	    }
	    document.write('<p>' + output + '</p>');
        console.log(output);
        output = '';
    }
}

// only run fizzBuzz if userInput is a number > 0
if (isNaN(userInput)) {
	alert("Invalid input, please reload the page and try again with a positive integer.");
}
else if (userInput <= 0) {
	alert("Please reload the page and try again with a positive integer");
}
else {
	fizzBuzz(userInput);
}