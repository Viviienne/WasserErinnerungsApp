import {glass1, glass2, glass3, glass4, glass5, resetBtn, glasses} from "./dom";

glass1.addEventListener("click", (): void => {
    glass1.style.backgroundColor = "#3a226c";
  });
  
  
  glass2.addEventListener("click", (): void => {
    glass2.style.backgroundColor = "#3a226c";
  });
  
  
  glass3.addEventListener("click", (): void => {
    glass3.style.backgroundColor = "#3a226c";
  });
  
  
  glass4.addEventListener("click", (): void => {
    glass4.style.backgroundColor = "#3a226c";
  });
  
  
  glass5.addEventListener("click", (): void => {
    glass5.style.backgroundColor = "#3a226c";
  });
  
    
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
  
  function checkAllGlassesClicked(): void {
    let allClicked = true;
    for (let i = 0; i < glasses.length; i++) {
      if (glasses[i].style.backgroundColor !== "rgb(58, 34, 108)") {
        allClicked = false;
        break;
      }
    }
  
    if (allClicked) {
      alert("Tagesziel erreicht!");
    }
  }
  

  export {glass1, glass2, glass3, glass4, glass5, resetBtn, glasses};