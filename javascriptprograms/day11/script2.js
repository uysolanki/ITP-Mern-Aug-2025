const buttonElement=document.querySelector('#my-btn')
const spanElement=document.querySelector('#one')
buttonElement.addEventListener('click', ()=>{
     voterList()
    .then(result => {     // result === value passed to resolve()
        spanElement.innerHTML=`Name : ${result.personname}  <br> Age : ${result.personage} <br> Status :  ${result.status} `
    })

    .catch(error => {     // result === value passed to resolve()
       spanElement.innerHTML=`Name : ${error.personname}  <br> Age : ${error.personage} <br> Status :  ${error.status} `

    })
}
)

spanElement.innerHTML="Whaat Pahil pan PMT madhe Jaeel"

function voterList()
{
    const name=window.prompt('Enter Name')
    const age=parseInt(window.prompt('Enter Age'))
    return new Promise((myResolve, myReject) => 
    {
    setTimeout(
        ()=>{
            if(isNaN(age))
                 myReject({
                        "personname":name,
                        "personage":age,
                        "status":'Invalid Age'
                });

            else if(age<=0)
                 myReject({
                        "personname":name,
                        "personage":age,
                        "status":'Invalid Age'
                });

            else if(age>=18)
                myResolve({
                        "personname":name,
                        "personage":age,
                        "status":'Eligible'
                });

            else
                myReject({
                        "personname":name,
                        "personage":age,
                        "status":'Not Eligible'
                });
        },5000
    )
    });
}