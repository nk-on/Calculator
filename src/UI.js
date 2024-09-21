const body = document.querySelector('body');
const firstTheme = document.querySelector('#first-theme');
const secondTheme = document.querySelector('#second-theme');
const thirdTheme = document.querySelector('#third-theme');
const screen = document.querySelector('.screen');
const keyboardContainer = document.querySelector('.keyboard-container');
const buttons = document.querySelector('.button');
const resetButton = document.querySelector('.reset');
const equalsButton = document.querySelector('.Equals');
secondTheme.addEventListener('change', () => {
  body.style.background = '#E6E6E6';
  screen.classList.add('screen-theme-2');
  keyboardContainer.classList.add('keyboard-theme-2');
  resetButton.classList.add('reset-theme-2');
  equalsButton.classList.add('Equals-theme-2')
})