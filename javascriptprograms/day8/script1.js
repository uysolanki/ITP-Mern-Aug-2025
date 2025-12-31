
// let registerButton=document.querySelector('#register-button')
// registerButton.addEventListener("click",()=>{
// let inputTextBox=document.querySelector('#text1')
// let data=inputTextBox.value;
// console.log(data)
// })



// let registerButton=document.querySelector('#register-button')
// registerButton.addEventListener("click",display)
// function display()
// {
// let inputTextBox=document.querySelector('#text1')
// let data=inputTextBox.value;
// console.log(data)
// }



let inputTextBox=document.querySelector('#text1')
inputTextBox.addEventListener("keyup",display)
function display(event)
{
if(event.key==='Enter')
{
    let inputTextBox=document.querySelector('#text1')
    let data=inputTextBox.value;
    console.log(data)
}
}