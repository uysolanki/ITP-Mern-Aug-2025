// document.addEventListener("keydown", saveDoc)

// function saveDoc(event)
// {
//     //if(event.ctrlKey && event.key==='s')
//     //if(event.altKey && event.key==='s')
//     if(event.shiftKey && event.key==='s')
//     {
//         event.preventDefault()
//         alert('Document Saved')
//     }
// }

// const checkBoxElement=document.querySelector('#agree')

// checkBoxElement.addEventListener("change", displayAgree)

// function displayAgree()
// {
// console.log(checkBoxElement.checked)
// }


// const genderRadioButtons=document.querySelectorAll('input[name="gender"]')
// console.log(genderRadioButtons)     //[0] [1]

// genderRadioButtons.forEach(
//     (gen)=>{
//         gen.addEventListener("change", displayGender)
//     }
// )

// function displayGender(event)
// {
// console.log(event.target.value)
// }


// document.addEventListener("contextmenu", rightClickDemo)

// function rightClickDemo(event)
// {
// event.preventDefault()
// alert('Right Click on Webpage')
// }


const divELement=document.querySelector('#div1')
const targetUL=document.querySelector('#target1')

divELement.addEventListener("contextmenu", displaySaveAs)

function displaySaveAs(event)
{
    event.preventDefault()
    targetUL.style.display='block'
    targetUL.style.left=`${event.pageX} px`
    targetUL.style.top=`${event.pageY} px`

}