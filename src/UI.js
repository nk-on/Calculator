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
const DELButton = document.querySelector('.DEL')
firstTheme.addEventListener('change',()=>{
  location.reload();
})
secondTheme.addEventListener('change', () => {
  body.style.background = '#E6E6E6';
  screen.classList.add('screen-theme-2');
  keyboardContainer.classList.add('keyboard-theme-2');
  resetButton.classList.add('reset-theme-2');
  equalsButton.classList.add('Equals-theme-2');
  DELButton.classList.add('DEL-theme-2')
});
thirdTheme.addEventListener('change',()=>{
  body.style.background = '#17062A';
  title.style.color = '#FFE53D';
  screen.classList.add('screen-theme-3');
  keyboardContainer.classList.add('keyboard-theme-3');
  buttons.forEach(button => button.classList.add('button-theme-3'));
  resetButton.classList.add('reset-theme-3');
  equalsButton.classList.add('Equals-theme-3');
  DELButton.classList.add('DEL-theme-3')
})