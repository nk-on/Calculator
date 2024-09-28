const buttons = document.querySelectorAll('.button');
const delButton = document.querySelector('#DEL');
const resetButton = document.querySelector('.reset');
const equalsButton = document.querySelector('.Equals');
const resultsContainer = document.querySelector('.results');
const operators = new Set(['+', '-', '*', '/']);
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
function display() {
  const dataset = this.dataset;
  //app should append number to datasetnum if user clicks on operator it should clear add operatpr and begin process again
  let number = ''
  return function(){
    const data = this.dataset;
    if(data.operator && !number.length){
      return;
    }
    number+=data.num;
    if(number[0] === '0' && number.length === 2){
      console.log(1)
      number = number.replace(/\b0(\d+)/g, '0.$1');
    }
    if(data.operator){
      console.log(data.operator)
      resultsContainer.textContent = resultsContainer.textContent + data.operator;
      number = '';
      return;
    }
    resultsContainer.textContent = resultsContainer.textContent + data.num;
  }
}
const updateDisplay = display();
buttons.forEach((button) => {
  button.addEventListener('click', updateDisplay);
});
