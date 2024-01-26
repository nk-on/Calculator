const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.op');
const calculateButton = document.querySelector('.calculate');
const clearButton = document.querySelector('.CLR');
const deleteButton = document.querySelector('.DEL');
const chooseValuesFun = chooseValues();
//program should choose number1, operation,number2
//do same in first block for secondNumber
//if op is filled or user clicks = do the operation
//it should not let user to start with op or click = when  user 
//program should calculate the result when user clicks on operand second time or the = button when both numbers are filled 
//CLR shoudl clear the board 
//del should delete individual digit
numberButtons.forEach((numberButton) => {
  numberButton.addEventListener("click", () => {
    chooseValuesFun(numberButton);
  });
});
function chooseValues() {
  let firstNum = "";
  let secondNum = "";
  let op = "";
  operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener("click", () => {
      if (firstNum.length === 0) {
        alert("Choose Number");
        return;
      };
      if (op.length > 0) {
        console.log(calculate(firstNum, secondNum, op));
      }
      op = operatorButton.dataset.value;
    });
  });
  return (button) => {
    const digit = button.dataset.value;
    if(button.dataset.value === "." && (firstNum.length === 0 || secondNum.length === 0)){
      (firstNum.length === 0) ? firstNum = "0." : secondNum = "0."
      return;
    };
    if(button.dataset.value === "0" && (firstNum.length === 0 || secondNum.length === 0)){
      (firstNum.length === 0) ? firstNum = "0." : secondNum = "0."
      return;
    };
    (op.length === 0) ? firstNum += digit : secondNum += digit;
    console.log(firstNum, op, secondNum)
  };
};
function calculate(firstNum, secondNum, op) {
  firstNum = Number(firstNum);
  secondNum = Number(secondNum);
  let result = undefined;
  switch (op) {
    case "+":
      result = firstNum + secondNum;
      break;
    case "-":
      result = firstNum - secondNum;
      break;
    case "*":
      result = firstNum * secondNum;
      break;
    default:
      result = firstNum / secondNum;
      break;
  };
  if(!isFinite(result)){
    alert("Can't divide on zero");
    return;
  };
  return result;
};