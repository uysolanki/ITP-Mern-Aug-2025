player1={
    jno:18,             //number as a value
    pname:'Virat',      //string as a value
    trophies:['IPL','CWCODI','CWCT20','CT','CWCU19'],  //object as a value
    mp:100,
    rs:5000,
    dad:1000,
    'dad-name':'Premnath',
    calculateAverage : function calculateAverage()
    {
        console.log(this.rs/this.mp)
    }
}

for(let key in player1)
{
    console.log(`${key}  :  ${player1[key]}`)
}
let name=990;
console.log(player1['dad-name']);

console.log(`My Fav player is ${player1["pname"]}`)
console.log(`My Fav player is ${player1.pname}`)
player1.calculateAverage()

player2={
    jno:45,
    pname:'Rohit',
    mp:200,
    rs:7000,
    calculateAverage : ()=>
    {
        rs=9000
        mp=300
        console.log('Bunty' ,this.rs/this.mp)
        if(true)
        {
            rs=15000
            mp=300
            console.log('Raju' ,this.rs/this.mp)
        }
    }
}
player2.calculateAverage()
console.log(typeof player1.calculateAverage)

