let currentNumber = "";
let previousNumber = "";
let operator = null;


// Get display elements

const currentDisplay = document.getElementById("currentDisplay");
const previousDisplay = document.getElementById("previousDisplay");


// Add number

function appendNumber(number) {

    // Prevent multiple decimal points

    if (number === "." && currentNumber.includes(".")) {
        return;
    }

    // Don't allow 0 at the beginning

    if (currentNumber === "0" && number !== ".") {
        currentNumber = "";
    }

    currentNumber += number;

    updateDisplay();
}


// Choose operator

function chooseOperator(selectedOperator) {

    if (currentNumber === "" && previousNumber === "") {
        return;
    }

    // If an operator already exists, calculate first

    if (currentNumber !== "" && previousNumber !== "") {
        calculate();
    }

    if (currentNumber !== "") {
        previousNumber = currentNumber;
        currentNumber = "";
    }

    operator = selectedOperator;

    updateDisplay();
}


// Calculate result

function calculate() {

    if (previousNumber === "" || currentNumber === "" || operator === null) {
        return;
    }

    const previous = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);

    let result;


    // Operators

    if (operator === "+") {

        result = previous + current;

    } else if (operator === "-") {

        result = previous - current;

    } else if (operator === "*") {

        result = previous * current;

    } else if (operator === "/") {

        if (current === 0) {
            alert("Cannot divide by zero!");
            clearDisplay();
            return;
        }

        result = previous / current;

    } else if (operator === "%") {

        result = previous % current;

    }


    currentNumber = result.toString();

    previousNumber = "";

    operator = null;

    updateDisplay();
}


// Clear calculator

function clearDisplay() {

    currentNumber = "";
    previousNumber = "";
    operator = null;

    updateDisplay();
}


// Delete last number

function deleteNumber() {

    currentNumber = currentNumber.slice(0, -1);

    updateDisplay();
}


// Update display

function updateDisplay() {

    currentDisplay.textContent =
        currentNumber || "0";


    if (previousNumber !== "" && operator !== null) {

        let displayOperator = operator;

        if (operator === "*") {
            displayOperator = "×";
        }

        if (operator === "/") {
            displayOperator = "÷";
        }

        if (operator === "-") {
            displayOperator = "−";
        }

        previousDisplay.textContent =
            previousNumber + " " + displayOperator;

    } else {

        previousDisplay.textContent = "";
    }
}


// Keyboard support

document.addEventListener("keydown", function(event) {

    const key = event.key;


    // Numbers

    if (key >= "0" && key <= "9") {
        appendNumber(key);
    }


    // Decimal

    if (key === ".") {
        appendNumber(".");
    }


    // Operators

    if (key === "+" || key === "-" || key === "*" || key === "/") {
        chooseOperator(key);
    }


    // Enter = calculate

    if (key === "Enter" || key === "=") {
        calculate();
    }


    // Backspace

    if (key === "Backspace") {
        deleteNumber();
    }


    // Escape = clear

    if (key === "Escape") {
        clearDisplay();
    }

});