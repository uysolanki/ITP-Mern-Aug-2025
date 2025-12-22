let arrowGreet1=()=>console.log("Welcome to Pune Virat"); //Arrow Function
arrowGreet1();


let arrowGreet2=(name)=>console.log(`Welcome to Pune ${name}`);
arrowGreet2("Surya");


let arrowGreet3=name=>console.log(`Welcome to Pune ${name}`);
arrowGreet3("Shubman");


let areaCircle=(radius)=>Math.PI*radius*radius;
console.log(areaCircle(5))

let areaCircle2=(radius)=>{
    console.log(`Radius ${radius}`);
    return Math.PI*radius*radius;
    }
console.log(areaCircle2(5))


let checkPrime=(number)=>{
    for(let i=2;i<=Math.sqrt(number);i++)
    {
        if(number%i==0)
        return false;
    }
    return true
}
console.log(checkPrime(5))



