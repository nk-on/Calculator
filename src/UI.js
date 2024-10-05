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
const switchButton = document.querySelector('.switch');
const body = document.querySelector('body');
let count = 0;
function removeStyles(){
  elements.forEach(element => element.id = '');
  buttons.forEach(button => button.classList.remove('button-theme-3'));
};
switchButton.addEventListener('click',()=>{
  if(count === 0){
    body.classList.add('theme2');
    count++;
  }else if(count === 1){
    body.classList.add('theme3');
    count++;
  }else{
    location.reload();
  }
})