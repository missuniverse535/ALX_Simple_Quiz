// 1. Implement Arithmetic Functions

// Addition function
function add(number1, number2) {
    return number1 + number2;
}

// Subtraction function
function subtract(number1, number2) {
    return number1 - number2;
}

// Multiplication function
function multiply(number1, number2) {
    return number1 * number2;
}

// Division function
function divide(number1, number2) {
    // Handle division by zero
    if (number2 === 0) {
        return "Cannot divide by zero";
    }
    return number1 / number2;
}

// Helper function to get input values
function getInputValues() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    return { number1, number2 };
}

// Helper function to display result
function displayResult(result) {
    document.getElementById('calculation-result').textContent = result;
}

// 2. Attach Event Listeners

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Addition button event listener
    document.getElementById('add').addEventListener('click', function() {
        const { number1, number2 } = getInputValues();
        const result = add(number1, number2);
        displayResult(result);
    });
    
    // Subtraction button event listener
    document.getElementById('subtract').addEventListener('click', function() {
        const { number1, number2 } = getInputValues();
        const result = subtract(number1, number2);
        displayResult(result);
    });
    
    // Multiplication button event listener
    document.getElementById('multiply').addEventListener('click', function() {
        const { number1, number2 } = getInputValues();
        const result = multiply(number1, number2);
        displayResult(result);
    });
    
    // Division button event listener
    document.getElementById('divide').addEventListener('click', function() {
        const { number1, number2 } = getInputValues();
        const result = divide(number1, number2);
        displayResult(result);
    });
    
    // Optional: Allow Enter key to perform addition
    document.getElementById('number2').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const { number1, number2 } = getInputValues();
            const result = add(number1, number2);
            displayResult(result);
        }
    });
});
