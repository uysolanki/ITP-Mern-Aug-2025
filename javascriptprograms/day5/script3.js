function calcArea()
{
    let textBox=document.getElementById("text1")  //refer Textbox
    let radius=parseInt(textBox.value.trim());

    let area=Math.PI*radius*radius;

    let divElment=document.getElementById("one")
    divElment.innerText=area
}