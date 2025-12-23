
//         0      1      2      3       4          5
let cars=["Audi","BMW","Merc","Maruti","Hyundai","Mahindra"]

//slice -> copy paste
//(para1 -> starting index, para2 -> ending index +1)
//OG Array is NOT impacted
let slicedCars=cars.slice(2,5);
console.log(slicedCars) //["Merc","Maruti","Hyundai"]
console.log(cars)


//splice -> cut paste
//(para1 -> starting index, para2 -> count of elements)
//OG Array is impacted
let splicedCars=cars.splice(2,1);
console.log(splicedCars) //["Merc","Maruti","Hyundai"]
console.log(cars)  //["Audi","BMW","Mahindra"]

let numbers=[10,21,30,41,50]
let car="BMW"
console.log(Array.isArray(numbers))
console.log(Array.isArray(car))

console.log(Array.from(car)) //['B', 'M', 'W']