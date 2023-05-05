import { checkAllGlassesClicked } from "./glasses";
import {  glass1, glass2, glass3, glass4, glass5, resetBtn, button} from "./dom";
import { sendNotification, permNotification, setReminder } from "./notification";

function initApp() {
    resetBtn.addEventListener("click",checkAllGlassesClicked);
    button.addEventListener("click",sendNotification);
    window.addEventListener("load", setReminder);
    window.addEventListener("load", permNotification);
    
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
  
}


initApp();
