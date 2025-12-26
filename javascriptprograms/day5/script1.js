function showText()
{
console.log('In Function showText')
let textBox=document.getElementById("text1")
let textBoxData=textBox.value;
console.log(textBoxData)

let paraElment=document.getElementById("one")
//paraElment.textContent=textBoxData
paraElment.innerText=textBoxData
}