
let numbers=[10,21,30,41,50]

//filter

let oddNumbers=numbers.filter(
num=>num%2==1
)

console.log(oddNumbers)


let numbers10=numbers.map(
(num)=>(num*10)
)

console.log(numbers10)


//filter all odd numbers and multiply them by 10
//option 1 : without chaining;

let oddNumbers1=numbers.filter(
num=>num%2==1
)

let oddMultiply10=oddNumbers1.map(
(num)=>(num*10)
)

//option 2 : method chaining;


let oddMult10=numbers.filter(
    (num)=>(num%2==1)
).map(
(num)=>(num*10)
)

console.log(oddMult10)

//display numbers independemtly

numbers.filter(
    (num)=>(num%2==1)
).map(
(num)=>(num*10)
).forEach(
    (num)=>(console.log(num))
)


numbers.filter(num=>num%2==1).map(num=>num*10).forEach(num=>console.log(num))

//display first ODD number

let firstOddNumber=numbers.find(
    (num)=>(num%2==1)
)

console.log(firstOddNumber)


let sum=numbers.reduce(
    (acc,num)=>(num+acc),1000
)

console.log(sum)


//filter all odd numbers and multiply them by 10 and find sum


let sum1=numbers.filter(num=>num%2==1).map(num=>num*10).reduce((acc,num)=>acc+num);
console.log(sum1)


//rest operator
[a,b]=numbers;
console.log(a)
