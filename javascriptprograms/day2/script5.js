

let numbers=[10,21,30,41,50];

// let sum=0;
// for(let i=0;i<numbers.length;i++)
// {
//     sum+=numbers[i]
// }

// console.log(sum)


//for off loop
// let sum=0;
// for(let num of numbers)
// {
//     sum+=num
// }

// console.log(sum)    

//sum of all odd numbers use continue

// let sum=0;
// for(let num of numbers)
// {   
//     if(num%2==0) continue
//     sum+=num
// }

// console.log(sum)


//sum of all numbers using forEach()  method
let sum1=0;
numbers.forEach(
    (num)=>sum1+=num
)

console.log(sum1)


//sum of odd numbers using forEach()  method
let sum2=0;
numbers.forEach(
    (num)=>{
        if(num%2==1)
            return
        sum2+=num
    }
)

console.log(sum2)