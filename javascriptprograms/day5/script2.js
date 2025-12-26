function showText()
{

let textBox=document.getElementById("text1")  //refer Textbox
let textBoxData=textBox.value.trim();         // data
if(textBoxData.length==0)
{
    alert("Please enter a value")
    textBox.value=""
    textBox.focus()
    return
}
let liElement=document.createElement("li");   //<li></li>
liElement.innerText = textBoxData;                   //<li>Audi</li>


let deleteButton=document.createElement("button"); //<button></button>
deleteButton.innerText="Delete"                     //<button>Delete</button>
//deleteButton.style.backgroundColor="red"
//deleteButton.classList.add("add-button")
let s1={
    'background-color': 'blue',
    'border-radius': '2px',
    'border': 'none',
    'padding': '5px',
    'font-size': '16px',
    'font-family': 'Courier New, Courier, monospace',
    'color':'white'
}
Object.assign(deleteButton.style,s1)
liElement.appendChild(deleteButton)

deleteButton.onclick=function(){
    liElement.remove()
}
let olElment=document.getElementById("one")
olElment.appendChild(liElement)
textBox.value=""
textBox.focus()
}