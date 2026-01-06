let flag=false;
let intervalID;
let counter=0;
let startButton=document.querySelector('#start-btn')
let stopButton=document.querySelector('#stop-btn')
let resetButton=document.querySelector('#reset-btn')
let display = document.querySelector('#display')
startButton.addEventListener('click', stopWatch)
stopButton.addEventListener('click', ()=>clearInterval(intervalID))
resetButton.addEventListener('click', ()=> {counter=0; display.textContent=counter})
function stopWatch(){
   
    intervalID=setInterval(()=>{
    counter++
    // display.textContent=counter  
    console.log(counter)  
    },1000)
}