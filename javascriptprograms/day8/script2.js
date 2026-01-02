document.addEventListener("keydown", saveDoc)

function saveDoc(event)
{
    //if(event.ctrlKey && event.key==='s')
    //if(event.altKey && event.key==='s')
    if(event.shiftKey && event.key==='s')
    {
        event.preventDefault()
        alert('Document Saved')
    }
}

const checkBoxElement=document.querySelector('#agree')

checkBoxElement.addEventListener("change", displayAgree)

function displayAgree()
{
console.log(checkBoxElement.checked)
}


const genderRadioButtons=document.querySelectorAll('input[name="gender"]')
console.log(genderRadioButtons)     //[0] [1]

genderRadioButtons.forEach(
    (gen)=>{
        gen.addEventListener("change", displayGender)
    }
)

function displayGender(event)
{
console.log(event.target.value)
}