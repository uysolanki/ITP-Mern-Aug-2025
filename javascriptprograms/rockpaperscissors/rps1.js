let rockButton=document.querySelector('#rock-btn')
let paperButton=document.querySelector('#paper-btn')
let scissorsButton=document.querySelector('#scissors-btn')

rockButton.addEventListener("click", ()=>playGame("Rock"))
paperButton.addEventListener("click", ()=>playGame("Paper"))
scissorsButton.addEventListener("click", ()=>playGame("Scissors"))


function playGame(playerMove)
{
    const computerMove=generateComputerMove()
    console.log(`Player Move ${playerMove}  Computer Move ${computerMove}`)
}
function generateComputerMove()
{
    const random=Math.random()
    console.log(random)
    if(random<1/3)
        return "Rock"
    else if(random>1/3 && random<2/3)
    {
         return "Paper"
    }
    else
    {
         return "Scissors"
    }
}