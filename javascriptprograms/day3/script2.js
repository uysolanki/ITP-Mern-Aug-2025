
//rest operator
let numbers=[10,21,30,41,50]
let [a,,b,...c]=numbers;
console.log(b)  //21 
console.log(typeof b) //number
console.log(c)  //[30,41,50]
console.log(typeof c)  //object


let fruits=["Apple","Mango","Banana"]
let vegs=["Potata","Tomato","Onion"]

let foods=fruits+vegs  //String
let foods1=fruits.concat(vegs)
console.log(foods)
console.log(foods1)


fruits.push("Papaya")
console.log(fruits)

let newFruits=[...fruits,"Kiwi"]  //"Apple", "Mango", "Banana", "Kiwi"
console.log(newFruits)


let res1=numbers.some(
    (num)=>(num>30)
)

console.log(res1)

numbers.fill(100)
console.log(numbers)