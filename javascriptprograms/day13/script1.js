
const incrementButton=document.querySelector('#btn-increment')

incrementButton.addEventListener('click', increment)

var counter=0;
function increment()
{
counter++
const displayElement=document.querySelector('#display')
displayElement.innerHTML=counter
}

