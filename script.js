const num1 = 1;
const num2 = 2;
const operator = "+";

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(num1, num2, operator) {
  operator === "+" ? add(num1, num2) : "";
  operator === "-" ? subtract(num1, num2) : "";
  operator === "*" ? multiply(num1, num2) : "";
  operator === "/" ? divide(num1, num2) : "";
}

const calculatorP = document.querySelector("#calculator-p");

const buttonContainer = document.querySelector("#button-container");
buttonContainer.addEventListener("click", (e) => {
  const target = e.target;

  if (target.textContent === "=") {
    operate2(calculatorP.textContent);
  } else {
    calculatorP.textContent += target.textContent;
  }
});

function operate2(string) {
  let [num1, operator, num2] = string.split(" ");
  num1 = +num1;
  num2 = +num2;

  operator === "+" ? (calculatorP.textContent = add(num1, num2)) : "";
  operator === "-" ? (calculatorP.textContent = subtract(num1, num2)) : "";
  operator === "*" ? (calculatorP.textContent = multiply(num1, num2)) : "";
  operator === "/" ? (calculatorP.textContent = divide(num1, num2)) : "";
}
