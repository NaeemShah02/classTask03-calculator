let currentNumber = "";
let previousNumber = "";
let operator = "";

const display = document.getElementById("display");

const appendNumber = (number) => {
  currentNumber += number;
  display.value = currentNumber;
}

const clearScreen = () => {
  currentNumber = "";
  previousNumber = "";
  operator = "";
  display.value = "";
}

const appendOperator = (op) => {
  if (currentNumber === "") return;
  previousNumber = currentNumber;
  currentNumber = "";
  operator = op;
}

const calculate = () => {
  if (currentNumber === "" || previousNumber === "") return;
  let result = 0;
  switch (operator) {
    case "+":
      result = parseFloat(previousNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(previousNumber) - parseFloat(currentNumber);
      break;
    case "*":
      result = parseFloat(previousNumber) * parseFloat(currentNumber);
      break;
    case "/":
      result = parseFloat(previousNumber) / parseFloat(currentNumber);
      break;
  }
  currentNumber = result.toString();
  previousNumber = "";
  operator = "";
  display.value = currentNumber;
}
