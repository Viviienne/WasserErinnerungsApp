
import {button} from "./dom";



window.addEventListener('load', () => {
    sendNotification();
  });
  
  function sendNotification(): void {
  if ("Notification" in window){
      Notification.requestPermission().then((perm: NotificationPermission)=>{
          if (perm === "granted"){
            console.log("granted")
           new Notification("Erinnerung", {
              body: "Erfrische Geist und Körper - es ist Zeit, Wasser zu trinken",
  
              });
              console.log("Notification displayed: Erinnerung - Erfrische Geist und Körper - es ist Zeit, Wasser zu trinken");
          }
      });
  }   
  }

 function setReminder(): void {
 setInterval(() => {
    sendNotification();
  }, 3 * 60 * 60 *1000);
 }



  
  button.addEventListener("click", (): void => {
    console.log("Erinnerung wird  in 30 minuten erneut gesendet");
      setTimeout((): void => {
           sendNotification();
      }, 30 * 60 * 1000);
     
  });
  
  setReminder();

  
  
    
  export{sendNotification}