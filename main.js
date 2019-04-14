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

/* Click Events */

// Click event for numbers
for (var i = 0; i < numbers.length; i++) {
    numbers[i].onclick = setCurrentNum;
}

// Click event for operators
for (var i = 0; i < operators.length; i++) {
    operators[i].onclick = moveFirstNum;
}

// Click event for equals
equals.onclick = displayResult;

// Click event for clear
el('#clear').onclick = clearResult;