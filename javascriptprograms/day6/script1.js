
const ulElement=document.getElementById("one")
console.log(ulElement)

const ulElement1=document.querySelector("#one")
console.log(ulElement1)


const heading1=document.getElementsByClassName("head1")
// console.log(heading1[0].textContent)
// console.log(heading1[1].textContent)


for(let i=0;i<heading1.length;i++)
    console.log(heading1[i].textContent)


const heading2=document.querySelectorAll(".head1")
// console.log(heading1[0].textContent)
// console.log(heading1[1].textContent)


for(let i=0;i<heading2.length;i++)
    console.log(heading1[i].textContent)