const buttonElement=document.querySelector('#my-btn')
const spanElement=document.querySelector('#one')
buttonElement.addEventListener('click', ()=>{
     voterList()
    .then(result => {     // result === value passed to resolve()
        spanElement.innerHTML=result
    })

    .catch(error => {     // result === value passed to resolve()
        spanElement.innerHTML=error
    })

}
)

function voterList()
{
    const age=parseInt(window.prompt('Enter Age'))
    return new Promise((myResolve, myReject) => 
    {
    setTimeout(
        ()=>{
            if(age>=18)
                myResolve("Eligible to Vote.");
            else
                myReject("Not Eligible to Vote.");
        },5000
    )
    });
}