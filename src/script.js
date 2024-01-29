const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.op');
const calculateButton = document.querySelector('.calculate');
const clearButton = document.querySelector('.CLR');
const deleteButton = document.querySelector('.DEL');
const calculatorDisplay = document.querySelector(".display");
const calculator = Calculator();
function Calculator() {
  const calculator = {};
  calculator.currNum = "";
  calculator.prevNum = "";
  calculator.op = "";
  calculator.chooseValues = (digit) => {
    calculator.currNum += digit;
    calculator.updateDisplay();
  };
  calculator.chooseOperation = (operationSign) => {
    if (!calculator.currNum.length) {
      alert("Choose Number");
      return;
    };
    if (calculator.op.length > 0) {
      console.log(calculator.calculate());
      return;
    };
    calculator.op = operationSign;
    calculator.prevNum = calculator.currNum;
    calculator.currNum = "";
    calculator.updateDisplay();
  };
  calculator.calculate = () => {
    if (!calculator.currNum.length) {
      return;
    };
    let currNum = Number(calculator.currNum);
    let prevNum = Number(calculator.prevNum);
    switch (calculator.op) {
      case "+":
        currNum += prevNum;
        break;
      case "-":
        currNum = prevNum - currNum;
        break;
      case "*":
        currNum = prevNum * currNum;
        break;
      default:
        currNum = prevNum / currNum;
        break;
    };
    if (!isFinite(currNum)) {
      alert("Can't divide on zero");
      return;
    };
    calculator.currNum = String(currNum);
    calculator.op = "";
    calculator.updateDisplay();
    return;
  };
  calculator.clear = () => {
    calculator.currNum = "";
    calculator.op = "";
    calculator.updateDisplay();
  }
  calculator.updateDisplay = () => {
    const displayValue = `${calculator.currNum}${calculator.op}`;
    calculatorDisplay.textContent = displayValue;
  }
  return calculator;
};
numberButtons.forEach((numberButton) => {
  numberButton.addEventListener("click", () => {
    calculator.chooseValues(numberButton.dataset.value);
    console.log(calculator);
  });
});
operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener("click", () => {
    calculator.chooseOperation(operatorButton.dataset.value);
    console.log(calculator);
  });
});
clearButton.addEventListener("click", calculator.clear)
calculateButton.addEventListener("click", calculator.calculate);