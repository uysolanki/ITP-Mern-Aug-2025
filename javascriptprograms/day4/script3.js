
function sumOf2Number(num1,num2, showResult)
{
    let result=num1+num2;
    showResult(result)
}


function display(value)
{
    console.log(`Sum of 2 Number is ${value}`)
}


sumOf2Number(10,20,display)


