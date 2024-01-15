let num1 = 0;
let num2 = 0;
let operator = "";

function operate(num1, num2, operator) {
  let result = 0;
  operator === "+" ? (result = num1 + num2) : "";
  operator === "-" ? (result = num1 - num2) : "";
  operator === "*" ? (result = num1 * num2) : "";
  operator === "/" ? (result = num1 / num2) : "";
  !operator ? (result = num2) : "";
  calDisplay.textContent = result;
  calDisplay.classList.add("js-result");
  return result;
}

const calDisplay = document.querySelector("#cal-display");
const calLatest = document.querySelector("#cal-latest");

const buttonContainer = document.querySelector("#button-container");
buttonContainer.addEventListener("click", (e) => {
  const target = e.target;

  if (target.nodeName !== "BUTTON") {
    return;
  }

  if (target.id === "clear-btn") {
    calDisplay.textContent = "";
    calLatest.textContent = "";
    num1 = num2 = 0;
    operator = "";
  } else if (target.id === "del-btn") {
    calDisplay.textContent = calDisplay.textContent.slice(0, -1);
  } else if (target.classList.contains("js-equal")) {
    num2 = +calDisplay.textContent;
    if (operator) {
      calLatest.textContent = `${num1} ${operator} ${num2} =`;
    } else {
      calLatest.textContent = `= ${num2}`;
    }
    operate(num1, num2, operator);
    num1 = +calDisplay.textContent;
    operator = "";
  } else if (target.classList.contains("js-operator")) {
    if (operator === "") {
      num1 = +calDisplay.textContent;
      operator = target.textContent;
      calLatest.textContent = `${num1} ${operator}`;
      calDisplay.classList.add("js-result");
    } else {
      num2 = +calDisplay.textContent;
      num1 = operate(num1, num2, operator);
      operator = target.textContent;
      calLatest.textContent = `${num1} ${operator}`;
    }
  } else if (target.classList.contains("js-decimal")) {
    if (!calDisplay.textContent.includes(".")) {
      calDisplay.textContent += target.textContent;
    }
  } else if (calDisplay.classList.contains("js-result")) {
    calDisplay.textContent = target.textContent;
    calDisplay.classList.remove("js-result");
  } else {
    calDisplay.textContent += target.textContent;
  }
});
