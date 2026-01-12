const buttonElement=document.querySelector('#my-btn')
const spanElement=document.querySelector('#one')
buttonElement.addEventListener('click', ()=>{
     voterList()
    .then(result => {     // result === value passed to resolve()
       spanElement.innerHTML=`Name : ${result[0]}  <br> Age : ${result[1]} <br> Status :  ${result[2]} `    })

    .catch(error => {     // result === value passed to resolve()
       spanElement.innerHTML=`Name : ${error[0]}  <br> Age : ${error[1]} <br> Status :  ${error[2]} `

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
                 myReject([name,age,'Invalid Age']);

            else if(age<=0)
                 myReject([name,age,'Invalid Age']);

            else if(age>=18)
                myResolve([name,age,'Eligible']);

            else
                myReject([name,age,'Not Eligible']);
        },2000
    )
    });
}