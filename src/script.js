const buttons = document.querySelectorAll('button');
const delButton = document.querySelector('#DEL');
const resetButton = document.querySelector('.reset');
const equalsButton = document.querySelector('.Equals');
const resultsContainer = document.querySelector('.results');
const deleteButton = document.querySelector('#DEL');
let resultString = '';
let decimals = [];
//user should be able to enter two numbers and operator value which should be updated in real time
function calculate() {
  try {
    const result = math.evaluate(resultString);
    resultsContainer.textContent = result;
    resultString = '';
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
function twoDecimals(){
  console.log(decimals)
  if(decimals.length >= 2){
    return true;
  }
}
function display() {
  //app should append number to datasetnum if user clicks on operator it should clear add operatpr and begin process again
  let number = '';
  return function () {
    const data = this.dataset;
    //Preventing User from Multiple operators
    if (data.operator && !number.length) return;
    //Handeling case when user types decimal on keyboard
    if(data.decimal){
      //tracking how many decimals user entered
      decimals.push(data.decimal);
      //converting initial decimal to 0.
      if (data.decimal && number.length === 0){
        resultsContainer.textContent = resultsContainer.textContent + '0.';
        return;
      }
      //Preventing user from entering two decimals
      if(twoDecimals()) return;
      resultsContainer.textContent += data.decimal;
      return;
    }
    //tracking number entered by user 
    number += data.num;
    //if user entered zero and any other number converting it to floating point
    if (number[0] === '0' && number.length === 2) {
      decimals.push(data.decimal);
      if(twoDecimals()) return;
      data.num = `.${data.num}`;
    }
    if (data.operator) {
      //if user clcks operator reseting tracked number and tracked decimals
      number = '';
      if (data.operator === '=') {
        resultString = resultsContainer.textContent;
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
