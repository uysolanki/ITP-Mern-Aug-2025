let rockButton=document.querySelector('#rock-btn')
let paperButton=document.querySelector('#paper-btn')
let scissorsButton=document.querySelector('#scissors-btn')

rockButton.addEventListener("click", ()=>playGame("Rock"))
paperButton.addEventListener("click", ()=>playGame("Paper"))
scissorsButton.addEventListener("click", ()=>playGame("Scissors"))


function playGame(playerMove)
{
    const computerMove=generateComputerMove1()
    
    let result="";
    switch(playerMove)
    {
        case "Rock" :
                        switch(computerMove)
                        {
                            case "Rock" : result = "Tie"; break;
                            case "Paper" : result = "Lose"; break;
                            case "Scissors" : result = "Win"; break;
                        }
                        break;
        case "Paper" :
                        switch(computerMove)
                        {
                            case "Rock" : result = "Win"; break;
                            case "Paper" : result = "Tie"; break;
                            case "Scissors" : result = "Lose"; break;
                        }
                        break;

        case "Scissors":
                        switch(computerMove)
                        {
                            case "Rock" : result = "Lose"; break;
                            case "Paper" : result = "Win"; break;
                            case "Scissors" : result = "Tie"; break;
                        }
                        break;
                      
    }
    console.log(`Player Move ${playerMove}  Computer Move ${computerMove}`)
    console.log(`Result ${result}`)
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


function generateComputerMove1()
{
    const moves=["Rock","Paper","Scissors"]
    const randomIndex=Math.floor(Math.random()*moves.length)
    return moves[randomIndex]
}


function generateComputerMove2()
{
   
   const randomIndex=Math.floor(Math.random()*moves.length)
   switch(randomIndex)
   {
    case 0 : return "Rock"; break;
    case 1 : return "Paper"; break;
    case 2 : return "Scissors"; 
   }
}