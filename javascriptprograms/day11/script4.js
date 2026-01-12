const buttonElement=document.querySelector('#my-btn')
const spanElement=document.querySelector('#one')


buttonElement.addEventListener('click', ()=>{
    const userId=parseInt(prompt('Enter user id'))
    fetchUser(userId) 
    .then(result => {     // result === value passed to resolve()
        spanElement.innerHTML=`Welcome ${result.user.name} `
    })

    .catch(error => {     // result === value passed to resolve()
       spanElement.innerHTML=`Name : ${error.message} `

    })
})


function  fetchUser(userId)
{
    return new Promise((myResolve, myReject) => 
    {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => {
                if (!response.ok) {
                    myReject({
                        message: "Failed to fetch user",
                        status: response.status
                    });
                }
                return response.json();
            })

         .then(data => {
                
                myResolve({
                    message: "User fetched successfully",
                    user: data,
                    status: 200
                });
            })

        .catch(error => {
               myReject({
                    message: "Network error",
                    error: error
                });
            });



    }
    );
}