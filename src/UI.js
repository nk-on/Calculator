const body = document.querySelector('body');
const firstTheme = document.querySelector('#first-theme');
const secondTheme = document.querySelector('#second-theme');
const thirdTheme = document.querySelector('#third-theme');
const screen = document.querySelector('.screen');
const keyboardContainer = document.querySelector('.keyboard-container');
const buttons = document.querySelectorAll('.button');
const resetButton = document.querySelector('.reset');
const equalsButton = document.querySelector('.Equals');
const title = document.querySelector('.title');
const DELButton = document.querySelector('.DEL');
const elements = document.querySelectorAll('*');
const switchContainer = document.querySelector('.switches');
const switchNumbers = document.querySelectorAll('.number');
console.log(switchContainer)
function removeStyles(){
  elements.forEach(element => element.id = '');
  buttons.forEach(button => button.classList.remove('button-theme-3'));
};
firstTheme.addEventListener('change',()=>{
  location.reload();
})
secondTheme.addEventListener('change', () => {
  removeStyles();
  body.style.background = '#E6E6E6';
  title.style.color = '#000';
  screen.id = 'screen-theme-2'
  keyboardContainer.id = 'keyboard-theme-2';
  resetButton.id = 'reset-theme-2';
  equalsButton.id = 'Equals-theme-2';
  DELButton.id = 'DEL-theme-2';
  switchContainer.id = 'switches-theme-2';
  switchNumbers.forEach( number => number.id = 'numbers-theme-2')
});
thirdTheme.addEventListener('change',()=>{
  body.style.background = '#17062A';
  title.style.color = '#FFE53D';
  screen.id = 'screen-theme-3';
  keyboardContainer.id = 'keyboard-theme-3';
  buttons.forEach(button => button.classList.add('button-theme-3'));
  resetButton.id = 'reset-theme-3';
  equalsButton.id = 'Equals-theme-3';
  DELButton.id  = 'DEL-theme-3';
  switchContainer.id = 'switches-theme-3';
  switchNumbers.forEach( number => number.id = 'numbers-theme-3')
})