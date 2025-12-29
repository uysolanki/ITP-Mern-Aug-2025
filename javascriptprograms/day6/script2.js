

const paraElement=document.querySelector("#one")

 console.log(paraElement.childNodes[0]);           //3  text
 console.log(paraElement.childNodes[1]);           //1  Elements


 console.log(paraElement.children[0]);              //only the elements



 console.log(paraElement.firstChild.nodeType)       //3

 console.log(paraElement.firstElementChild.nodeType)  //1
