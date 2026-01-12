document.getElementById("box").addEventListener("click", (event) => {
    console.log("Box clicked");
  },true);

  document.getElementById("btn").addEventListener("click", (event) => {
    console.log("Button clicked"); 
   // event.stopImmediatePropagation()
  },true); 