


function checkPrime()
{ 
    let number=parseInt(document.getElementById("t1").value)
    alert(number)
}


let button1=document.getElementById("b1")

    button1.onclick= ()=>
    {
        let number=18
         alert(number)
    }

    button1.onclick= ()=>
    {
        let number=45
        alert(number)
    }


let button2=document.getElementById("b2")
button2.addEventListener("click",f1)
button2.addEventListener("click",f2)


function f1()
    {
        let number=18
        alert(number)
    }

function f2()
    {
        let number=45
        alert(number)
    }




let button3=document.getElementById("b3")


button3.addEventListener("click",()=>alert("Rohit"))
button3.addEventListener("click",()=>alert("Sharma"))


// button3.addEventListener("click",()=>display("Virat"))
// button3.addEventListener("click",()=>display("Kohli"))

// function display(name)
// {
// alert(name)
// }