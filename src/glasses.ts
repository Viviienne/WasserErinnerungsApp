import {glass1, glass2, glass3, glass4, glass5, resetBtn, glasses} from "./dom";

function setUpGlasses() {

//Gläser


  
  //Reset Button
  
  resetBtn.addEventListener("click", function() {
    for (let i = 0; i < glasses.length; i++) {
      glasses[i].style.backgroundColor = "";
    }
  });
  
    //Gläser werden überptüft
  
  function checkAllGlassesClicked(): void {
      let allClicked = true;
      for (let i = 0; i < glasses.length; i++) {
        if (glasses[i].style.backgroundColor !== "rgb(58, 34, 108)") {
          allClicked = false;
          break;
        }
      }
  
  // Ausgabe wenn alle Gläser geklickt wurden
  
      if (allClicked) {
        alert("Tagesziel erreicht!");
      }
    }
      
    for (let i = 0; i < glasses.length; i++) {
      glasses[i].addEventListener("click", () => {
        glasses[i].style.backgroundColor = "#3a226c";
        checkAllGlassesClicked();
      });
    }
}

export {glass1, glass2, glass3, glass4, glass5, resetBtn, glasses, setUpGlasses}

