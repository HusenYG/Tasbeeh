const inputBox = document.querySelector('.input-box');
const name= document.querySelector("#Tasbeeh-Name");
const title= document.querySelector('.title')
const showcase= document.querySelector('.showcase');
const count= document.querySelector('#count')
const total= document.querySelector('.total-count');
const counter= document.querySelector('.counter-display');
const counterButton= document.querySelector('.counter-button');
const increment= document.querySelector('#increment');
const tasbeeh= document.querySelector('.tasbeeh-times')
let i=0;
function start(){
  inputBox.classList.add('hide');
  title.innerText= `${name.value}`;
  total.innerText= `${count.value}`;
  counter.style.display= "block";
  counterButton.style.display= "block";
};




increment.addEventListener('click', () =>{
  tasbeeh.innerText=i;
  if(i< count.value){
    i=i+1;
  }
  else{
    i=0;
    window.navigator.vibrate(300);
  }
});
console.log(count.value);
