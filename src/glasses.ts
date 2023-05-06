import {resetBtn, glasses} from "./dom";

//Gläßer lassen sich klicken


  function checkAllGlassesClicked(): void {
    let allClicked = true;
    for (let i = 0; i < glasses.length; i++) {
      if (glasses[i].style.backgroundColor !== "rgb(58, 34, 108)") {
        allClicked = false;
        break;
      }
    }
// Ausgabe wenn alle Gläßer geklickt wurden

    if (allClicked) {
      alert("Tagesziel erreicht!");
    }
  }
  


// Reset Button
    
  resetBtn.addEventListener("click", (): void => {
    for (let i = 0; i < glasses.length; i++) {
      glasses[i].style.backgroundColor = "";
    }
  });
  
  for (let i = 0; i < glasses.length; i++) {
    glasses[i].addEventListener("click", () => {
      glasses[i].style.backgroundColor = "#3a226c";
      checkAllGlassesClicked();
    });
  }


  export {resetBtn, glasses, checkAllGlassesClicked};