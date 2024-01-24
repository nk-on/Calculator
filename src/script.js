const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.op');
const calculateButton = document.querySelector('.calculate');
const clearButton = document.querySelector('.CLR');
const deleteButton = document.querySelector('.DEL');
const chooseNumbersFun = chooseNumbers();
//program should choose number1, operation,number2
//create variable, firstNumber 
//add firstNumber content of clicked number button
//create variable, operation 
//add content operator to the opearation
//create secondNumber vairible
//do same in first block for secondNumber
//if op is filled or user clicks = do the operation
//it should not let user to start with op or click = when  user 
//program should calculate the result when user clicks on operand second time or the = button when both numbers are filled 
//CLR shoudl clear the board 
//del should delete individual digit
numberButtons.forEach((numberButton) => {
  numberButton.addEventListener("click", () => {
    chooseNumbersFun(numberButton);
  });
});
function chooseNumbers() {
  let firstNum = "";
  return (button) => {
    const digit = button.dataset.value;
    firstNum += digit;
    console.log(firstNum);
  };
};