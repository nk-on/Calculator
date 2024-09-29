const buttons = document.querySelectorAll('button');
const delButton = document.querySelector('#DEL');
const resetButton = document.querySelector('.reset');
const equalsButton = document.querySelector('.Equals');
const resultsContainer = document.querySelector('.results');
const operators = new Set(['+', '-', '*', '/']);
const deleteButton = document.querySelector('#DEL');
let symbolsArray = [];
let number = '';
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
function calculate() {
  try {
    const result = math.evaluate(resultsContainer.textContent);
    resultsContainer.textContent = result;
  } catch {
    resultsContainer.innerHTML =
      '<span class = error-messege>Format error</span>';
  }
}
function reset() {
  resultsContainer.textContent = '';
}
function Delete() {
  resultsContainer.textContent = resultsContainer.textContent.substring(
    0,
    resultsContainer.textContent.length - 1
  );
}
function display() {
  //app should append number to datasetnum if user clicks on operator it should clear add operatpr and begin process again
  let number = '';
  let decimals = [];
  return function () {
    // resultsContainer.removeChild(resultsContainer.lastChild)
    const data = this.dataset;
    if (data.operator && !number.length) {
      return;
    }
    if(data.decimal){
      decimals.push(data.decimal)
      console.log(decimals)
      if(decimals.length >= 2){
        return;
      }
      resultsContainer.textContent = resultsContainer.textContent + data.decimal;
      return;
    }
    number += data.num;
    if (number[0] === '0' && number.length === 2) {
      decimals.push(data.decimal);
      if(decimals >= 2){
        return;
      }
      data.num = `.${data.num}`;
    }
    if (data.operator) {
      decimals = [];
      number = '';
      if (data.operator === '=') {
        calculate();
        return;
      }
      resultsContainer.textContent =
        resultsContainer.textContent + data.operator;
      return;
    }
    resultsContainer.textContent = resultsContainer.textContent + data.num;
  };
}
const updateDisplay = display();
delButton.addEventListener('click', Delete);
resetButton.addEventListener('click', reset);
buttons.forEach((button) => {
  button.addEventListener('click', updateDisplay);
});
