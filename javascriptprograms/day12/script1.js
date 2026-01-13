
import fsd, {fruits as phal,car,batsmen,number,test as test1} from './data.js'

let fruits=["Strawberry"]
let list="<ul>";
let courseName="react"

phal.forEach(
    (fruit)=>{
        list+=`<li> ${fruit} </li>`
    }
)

list+='</ul>'

document.querySelector('#one').innerHTML=list

test1()

//console.log(`I am pursuing ${fsd}`)
console.log(`My fav player is ${fsd}`)