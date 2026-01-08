let rockButton=document.querySelector('#rock-btn')
let paperButton=document.querySelector('#paper-btn')
let scissorsButton=document.querySelector('#scissors-btn')
let resetButton=document.querySelector('#reset-btn')
let autoPlayButton=document.querySelector('#autoplay-btn')

let movesPara=document.querySelector('#moves')
let resultPara=document.querySelector('#result')
let scoreboardPara=document.querySelector('#scoreboard')

rockButton.addEventListener("click", ()=>playGame("Rock"))
paperButton.addEventListener("click", ()=>playGame("Paper"))
scissorsButton.addEventListener("click", ()=>playGame("Scissors"))
resetButton.addEventListener("click", resetScore)
autoPlayButton.addEventListener("click", autoPlayMode)
    
    let win=0;
    let lose=0;
    let tie=0;
    
let score= JSON.parse(localStorage.getItem("mernrspscore")) || {win,lose,tie}
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

    
    switch(result)
    {
        case "Win" : win++; break;
        case "Lose" : lose++; break;
        case "Tie" : tie++; 
    }
    //console.log(`Player Move ${playerMove}  Computer Move ${computerMove}`)
    //console.log(`Result ${result}`)
    // console.log(`Scoreboard Win ${win}  Lose ${lose}  Tie ${tie}`)
    movesPara.innerHTML=`Player Move <img src="../images/${playerMove}-emoji.png"/>  Computer Move <img src="../images/${computerMove}-emoji.png"/>`
    resultPara.innerHTML=`Result ${result}`
    scoreboardPara.innerHTML=`Scoreboard Win ${win}  Lose ${lose}  Tie ${tie}`
    localStorage.setItem("mernrspscore", JSON.stringify(score))
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

function resetScore()
{
  win=0;
  lose=0;
  tie=0; 
  console.clear()
  console.log(`Scoreboard Win ${win}  Lose ${lose}  Tie ${tie}`)
  localStorage.removeItem("mernrspscore")
}


function test2()
{
    console.log("feature test2")
}

let flag=false;
let intervalID;
function autoPlayMode()
{
   if(flag==false)
   {
    flag=true;
    intervalID=setInterval(
        ()=>{
         let computerGeneratedPlayerMove=generateComputerMove1()
         playGame(computerGeneratedPlayerMove)   
        },1000
    )
   
    }
    else
    {
        clearInterval(intervalID)
    }
}