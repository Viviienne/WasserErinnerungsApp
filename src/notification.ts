
import {button} from "./dom";

window.addEventListener("load", () => {
        permNotification();
  });
  
  

function sendNotification(): void {
    if (Notification.permission === "granted") {
    new Notification("Erinnerung", {
        body: "Erfrische Geist und Körper - es ist Zeit, Wasser zu trinken",
      });
      console.log(" Erinnerung - Erfrische Geist und Körper - es ist Zeit, Wasser zu trinken");
    }
}
 function permNotification(): void {      
  if ("Notification" in window){
    Notification.requestPermission().then((perm: NotificationPermission)=>{
          if (perm === "granted"){
            console.log("granted")
            sendNotification();             
          }
      });
  }   
  }


    setInterval(() => {
        sendNotification();
     }, /*3 * 60 * 60 * */ 3000);
 

  
  button.addEventListener("click", (): void => {
    console.log("Erinnerung wird  in 30 minuten erneut gesendet");
      setTimeout((): void => {
           sendNotification();
      }, 30 * 60 * 1000);
     
  });
  
  
 
    
  export {sendNotification, permNotification,};