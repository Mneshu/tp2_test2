let display = document.getElementById("display");
let currentInput = "";
let operator = "";
let previousInput = "";

// Function to append values (numbers and decimals)
function appendValue(value) {
    if (display.innerText === "0" || display.innerText === "Error") {
        display.innerText = "";
    }
    display.innerText += value;
    currentInput += value;
}

// Function to clear display
function clearDisplay() {
    display.innerText = "0";
    currentInput = "";
    previousInput = "";
    operator = "";
}

// Function to handle operator clicks
function setOperator(op) {
    if (currentInput === "" && previousInput === "") return; // Prevent multiple operators
    if (previousInput !== "") {
        calculateResult();
    }
    previousInput = currentInput;
    operator = op;
    currentInput = "";
    display.innerText += ` ${op} `;
}

// Function to calculate result
function calculateResult() {
    if (operator === "" || currentInput === "") return; // Prevent empty calculations

    try {
        let expression = `${previousInput} ${operator} ${currentInput}`;
        let result = Function(`return ${expression}`)(); // Safer alternative to eval()
        display.innerText = result;
        currentInput = result.toString();
        previousInput = "";
        operator = "";
    } catch (error) {
        display.innerText = "Error";
        setTimeout(clearDisplay, 1500);
    }
}
