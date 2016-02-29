var output = '';


for (var i = 1; i <= 100; i++) {
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
	output = '';
	console.log(output);
}


/* this took a couple of extra lines
for (var i = 1; i <= 100; i++) {
	if ((i % 3 == 0) && (i % 5 == 0)) {
		output = 'FizzBuzz';
	}
	else if (i % 3 == 0) {
		output = 'Fizz';
	}
	else if (i % 5 == 0) {
		output = 'Buzz';
	}
    else {
    	output = i.toString();
    };
    document.write('<p>' + i + ': ' + output + '</p>');
    console.log(output);
};
*/