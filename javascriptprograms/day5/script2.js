function showText()
{

let textBox=document.getElementById("text1")
let textBoxData=textBox.value.trim();
if(textBoxData.length==0)
{
    alert("Please enter a value")
    return
}
let liElement=document.createElement("li");   //<li></li>
liElement.innerText = textBoxData;                   //<li>Audi</li>


let deleteButton=document.createElement("button");
deleteButton.innerText="Delete"
liElement.appendChild(deleteButton)

let olElment=document.getElementById("one")
olElment.appendChild(liElement)
textBox.value=""
textBox.focus()
}