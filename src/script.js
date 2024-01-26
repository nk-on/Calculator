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
    operatorButton.addEventListener("click",()=>{
      if(firstNum.length === 0){
        alert("Choose Number");
        return;
      }
      op = operatorButton.dataset.value;
    })
  });
  return (button) => {
    const digit = button.dataset.value;
    (op.length === 0) ? firstNum += digit : secondNum += digit;
    console.log(firstNum, op, secondNum)
  };
};
