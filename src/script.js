const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.op');
const calculateButton = document.querySelector('.calculate');
const clearButton = document.querySelector('.CLR');
const deleteButton = document.querySelector('.DEL');
const calculatorDisplay = document.querySelector(".display");
const calculator = Calculator();
function Calculator() {
  const calculator = {};
  calculator.firstNum = "";
  calculator.secondNum = "";
  calculator.op = "";
  calculator.chooseValues = (digit) => {
    const firstDigitIsDot = digit === "." && ((!calculator.firstNum.length) && (!calculator.secondNum.length));
    const firstDigitIsZero = digit === "0" && ((!calculator.firstNum.length) && (!calculator.secondNum.length));
    const userEnteredSecondDot = digit === "." && (calculator.firstNum.includes(".") || calculator.secondNum.includes("."));
    if(firstDigitIsDot){
       console.log("i work");
       (!calculator.firstNum.length) ? calculator.firstNum = "0.":calculator.secondNum = "0.";
       return;
    }
    if(firstDigitIsZero){
      (!calculator.firstNum.length) ? calculator.firstNum = "0.":calculator.secondNum = "0.";
      return;
   }
    if(userEnteredSecondDot){
      return;
    };
    (calculator.op.length === 0) ? calculator.firstNum += digit : calculator.secondNum += digit;
    calculator.updateDisplay();
  };
  calculator.chooseOperation = (operationSign) => {
    if (calculator.firstNum.length === 0) {
      alert("Choose Number");
      return;
    };
    if (calculator.op.length > 0) {
      console.log(calculator.calculate(calculator.firstNum, calculator.secondNum, calculator.op));
      return;
    };
    calculator.op = operationSign;
    calculator.updateDisplay();
  };
  calculator.calculate = () => {
    if(!calculator.firstNum.length ||!calculator.secondNum.length){
      return;
    };
    let firstNum = Number(calculator.firstNum);
    let secondNum = Number(calculator.secondNum);
    switch (calculator.op) {
      case "+":
        firstNum+=secondNum;
        break;
      case "-":
        firstNum-=secondNum;
        break;
      case "*":
        firstNum*=secondNum;
        break;
      default:
        firstNum/=secondNum;
        break;
    };
    if (!isFinite(firstNum)) {
      alert("Can't divide on zero");
      return;
    };
    calculator.firstNum = String(firstNum);
    calculator.op = "";
    calculator.secondNum = "";
    calculator.updateDisplay();
    return firstNum;
  };
  calculator.updateDisplay = ()=>{
    const displayValue = `${calculator.firstNum}${calculator.op}${calculator.secondNum}`;
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
calculateButton.addEventListener("click",calculator.calculate);