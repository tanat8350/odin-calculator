let num1 = 0;
let num2 = 0;
let operator = "";

function operate(num1, num2, operator) {
  let result = 0;
  if (operator === "+") result = num1 + num2;
  if (operator === "-") result = num1 - num2;
  if (operator === "*") result = num1 * num2;
  if (operator === "/") result = num1 / num2;

  if (!operator) result = num2;
  calDisplay.textContent = result;
  calDisplay.classList.add("js-result");
  return result;
}

function clearCal() {
  calDisplay.textContent = "";
  calLatest.textContent = "";
  num1 = num2 = 0;
  operator = "";
}

function delChar() {
  calDisplay.textContent = calDisplay.textContent.slice(0, -1);
}

function calculate() {
  num2 = +calDisplay.textContent;
  if (operator) {
    calLatest.textContent = `${num1} ${operator} ${num2} =`;
  } else {
    calLatest.textContent = `= ${num2}`;
  }
  operate(num1, num2, operator);
  num1 = +calDisplay.textContent;
  operator = "";
}

function addOperator(op) {
  if (operator === "") {
    num1 = +calDisplay.textContent;
    operator = op;
    calLatest.textContent = `${num1} ${operator}`;
    calDisplay.classList.add("js-result");
  } else {
    num2 = +calDisplay.textContent;
    num1 = operate(num1, num2, operator);
    operator = op;
    calLatest.textContent = `${num1} ${operator}`;
  }
}

function appendDecimal() {
  if (!calDisplay.textContent.includes(".")) {
    calDisplay.textContent += ".";
  }
}

function appendNumber(num) {
  if (calDisplay.classList.contains("js-result")) {
    calDisplay.textContent = num;
    calDisplay.classList.remove("js-result");
  } else {
    calDisplay.textContent += num;
  }
}

const body = document.body;

const calDisplay = document.querySelector("#cal-display");
const calLatest = document.querySelector("#cal-latest");

const buttonContainer = document.querySelector("#button-container");
buttonContainer.addEventListener("click", (e) => {
  const target = e.target;

  if (target.nodeName !== "BUTTON") {
    return;
  }

  if (target.id === "clear-btn") {
    clearCal();
    target.blur();
  } else if (target.id === "del-btn") {
    delChar();
    target.blur();
  } else if (target.classList.contains("js-equal")) {
    calculate();
    target.blur();
  } else if (target.classList.contains("js-operator")) {
    addOperator(target.textContent);
    target.blur();
  } else if (target.classList.contains("js-decimal")) {
    appendDecimal();
    target.blur();
  } else {
    appendNumber(target.textContent);
    target.blur();
  }
});

body.addEventListener("keydown", (e) => {
  const key = e.key;

  if (key === "Delete") clearCal();
  if (key === "Backspace") delChar();
  if (key === "Enter") calculate();
  if (key === "+" || key === "-" || key === "*" || key === "/")
    addOperator(key);
  if (key === ".") appendDecimal();
  if (key >= 0 && key <= 9) appendNumber(key);
});
