function display(value)
{
    document.querySelector("#one").innerHTML=value;
}

let myPromise=new Promise(

    function(myResolve,myReject)
    {
        let age=parseInt(prompt("Enter Age"))

        if(age>=18)
        {
                myResolve('You are Adult')
        }
        else
        {
                myReject('You are Minor')
        }
    }
)

myPromise.then(
     function(fulfilled)
     {
        display(fulfilled)
     },

      function(broken)
     {
        display(broken)
     }
)