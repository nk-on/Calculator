const buttons = document.querySelectorAll('.button');
const delButton = document.querySelector('#DEL');
const resetButton = document.querySelector('.reset');
const equalsButton = document.querySelector('.Equals');
const fistOperandContainer = document.querySelector('.operand-1');
const operatorContainer = document.querySelector('.operator');
const secondOperandContainer = document.querySelector('.operand-2');
/*## Features
1. **Entering Two Numbers:** Users can input two numbers into the calculator.
2. **Arithmetic Operations:** Basic arithmetic operations such as addition (+), subtraction (-), multiplication (*), and division (/) are supported.
3. **Calculation:** The calculator calculates the result when the user clicks an operation sign for the second time or presses the "=" button. It evaluates only a single pair of numbers at a time.
4. **Preventing Multiple Decimal Points:** The calculator prevents users from inputting multiple decimal points within a single number (e.g., 12.3.3).
5. **Converting Initial Zero:** If the user initially enters a zero or ".", it automatically converts it to "0".
6. **Clear and Delete Functionality:**
   - **Clear:** Clears the entire display.
   - **Delete:** Deletes the last digit entered. */
//user should be able to enter two numbers and operator value which should be updated in real time
function display() {
  let currentOperand = '';
  let operator = '';
  let currentContainer = fistOperandContainer;
  return function (dataSet) {
    if (dataSet.operator && operator.length === 0) {
      operator = dataSet.operator;
      operatorContainer.textContent = operator;
      currentContainer = secondOperandContainer;
      currentOperand = '';
      return;
    }
    if (dataSet.operator && operator.length !== 0) {
      return;
    }
    currentOperand += dataSet.num;
    currentContainer.textContent = currentOperand;
  };
}
const updateDisplay = display();
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    updateDisplay(button.dataset);
  });
});
