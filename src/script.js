const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.op');
const calculateButton = document.querySelector('.calculate');
const clearButton = document.querySelector('.CLR');
const deleteButton = document.querySelector('.DEL');
const calculatorDisplay = document.querySelector(".display");
const currNumcontainer = document.querySelector(".currNum-container");
const opContainer = document.querySelector(".op-container")
const prevNumconteinr = document.querySelector(".prevNum-container");
const calculator = Calculator();
function Calculator() {
  const calculator = {};
  calculator.currNum = "";
  calculator.prevNum = "";
  calculator.op = "";
  calculator.chooseValues = (digit) => {
    const userEnteredSecondDot = (digit === ".") && calculator.currNum.includes(".");
    const firstDigitIsZero = (digit === "0") && !calculator.currNum.length;
    const firstDigitIsDot = (digit === ".") && !calculator.currNum.length;
    if (userEnteredSecondDot) {
      return;
    };
    if (firstDigitIsZero || firstDigitIsDot) {
      calculator.currNum = "0.";
      calculator.updateDisplay();
      return;
    };
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
        currNum = currNum.toFixed(2)
        break;
    };
    if (!isFinite(currNum)) {
      alert("Can't divide on zero");
      return;
    };
    calculator.currNum = String(currNum);
    calculator.op = "";
    calculator.prevNum = "";
    calculator.updateDisplay();
    return;
  };
  calculator.clear = () => {
    calculator.currNum = "";
    calculator.op = "";
    calculator.updateDisplay();
  }
  calculator.updateDisplay = () => {
    prevNumconteinr.textContent = `${calculator.prevNum}${calculator.op}`;
    currNumcontainer.textContent = calculator.currNum;
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