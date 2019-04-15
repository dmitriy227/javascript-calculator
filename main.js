// Shortcut to get elements
var el = function(element) {
    if (element.charAt(0) === '#') {
        return document.querySelector(element);
    } else {
        return document.querySelectorAll(element);
    }
};

// Variables
var output = el('#output'), // Field where result is displayed
    equals = el('#equals'), // Equals button
    numbers = el('.numbers'), // List of numbers
    operators = el('.operators'), // List of operators
    currentNum = '', // Current number
    firstNum = '', // First number
    resultNum, // Result
    operator; // Operator

// When: Number is clicked. Get the number and display in output field.
var setCurrentNum = function() {
    if (resultNum) { // Clear out any numbers in the output field
        currentNum = this.getAttribute('id');
        output = '';
    } else { // Add number to string
        currentNum += this.getAttribute('id');
    }

    output.innerHTML = currentNum;
}

// When: Operator is clicked. Store number to firstNum and save operator.
var storeNum = function() {
    firstNum = currentNum;
    currentNum = '';
    operator = this.getAttribute('id');
}

// When: Equals is clicked. Calculate and display result.
var displayResult = function() {
    // Convert string to numbers
    firstNum = Number(firstNum);
    currentNum = Number(currentNum);

    // Perform calculation
    switch (operator) {
        case 'divide':
            resultNum = firstNum / currentNum;
            break;
        
        case 'multiply':
            resultNum = firstNum * currentNum;
            break;

        case 'subtract':
            resultNum = firstNum - currentNum;
            break;

        case 'add':
            resultNum = firstNum + currentNum;
            break;

        // If equals is pressed without an operator, keep number and do nothing
        default:
            resultNum = currentNum;
    }

    // Display result
    output.innerHTML = resultNum;

    // Reset firstNum and keep result under currentNum
    firstNum = 0;
    currentNum = resultNum;
}

// When: Clear button is clicked. Clear everything.
var clearAll = function() {
    currentNum = '';
    firstNum = '';
    resultNum = '';
    output.innerHTML = '0';
}

/* Click Events */

// Click event for numbers
for (var i = 0; i < numbers.length; i++) {
    numbers[i].onclick = setCurrentNum;
}

// Click event for operators
for (var i = 0; i < operators.length; i++) {
    operators[i].onclick = storeNum;
}

// Click event for equals
equals.onclick = displayResult;

// Click event for clear
el('#clear').onclick = clearAll;