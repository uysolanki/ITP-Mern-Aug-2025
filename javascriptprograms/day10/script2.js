document.getElementById("box").addEventListener("click", (event) => {
    console.log("Box clicked");
  });

  document.getElementById("btn").addEventListener("click", (event) => {
    console.log("Button clicked"); 
    event.stopImmediatePropagation()
  });