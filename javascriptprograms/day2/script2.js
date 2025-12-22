function greet1()
{
    console.log("Welcome to Pune Virat")
}
greet1()

function greet2(name)   //Normal Function
{
    console.log(`Welcome to Pune ${name}`)
}

greet2("Rohit")

function greet3(name,city)
{
    console.log(`Welcome to ${city} ${name}`)
}

greet3("Rohit","Mumbai")

function checkPrime(number)
{
    for(let i=2;i<=Math.sqrt(number);i++)
    {
        if(number%i==0)
        return false;
    }
    return true
}

// if(checkPrime(70))
//     console.log('Number is Prime')
// else
//     console.log('Number is NOT Prime')

checkPrime(70)?console.log('Number is Prime'):console.log('Number is NOT Prime')



let arrowGreet=()=>console.log("Welcome to Pune Virat")