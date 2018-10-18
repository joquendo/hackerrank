// Day 6: Let's Review https://www.hackerrank.com/challenges/30-review-loop/problem
// Javascript (Node.js) Solution

function processData(input) {
    //Enter your code here
    const inputLines = input.split('\n');
    const numberOfTestCases = inputLines[0];

    for (let i = 1; i <= numberOfTestCases; i++) {

        const array = inputLines[i].split('');
        let eChars = '';
        let oChars = '';
        
        for (let i = 0; i < array.length; i++) {

            if (i % 2 == 0) {

                eChars += array[i];

            } else {

                oChars += array[i];

            }

        }

        console.log(eChars + ' ' + oChars);

	}

}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
	_input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
