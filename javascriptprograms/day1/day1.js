
// let n1=100;
// console.log(n1)             //1 - 100
// demo(n1)
// console.log(n1)             //4 - 100

// function demo(value)
// {
//    console.log(value)      //2 - 100
//    value=999;
//    console.log(value)     //3 - 999
// }


// let cars=["Audi","BMW","Merc"]
// console.log(cars)           //1 - [Audi, BMW, Merc]
// demo(cars)
// console.log(cars)           //4 - [Maruti, BMW, Merc]

// function demo(values)
// {
//     console.log(values)     //2 - [Audi, BMW, Merc]
//     cars[0]="Maruti"
//     console.log(values)     //3 - [Maruti, BMW, Merc]
// }


// let myHeading=document.getElementById("two");
// myHeading.innerHTML="Virat Kohli"



function add()
{
console.log(arguments)      //[10,20]
let sum=0
for(let i=0;i<arguments.length;i++)
{
    sum+=arguments[i];
}
return sum
}
result1=add(10,20)
result2=add(10,20,30)
console.log(result1)
console.log(result2)


Prime(18,45,17,31,63)