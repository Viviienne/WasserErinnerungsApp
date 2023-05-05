
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
          const now: Date = new Date();
          const hour: number = now.getHours();
          if (hour === 7|| hour === 10 || hour ===13 || hour === 16 || hour === 19) {
            console.log(' Erinnerung - Erfrische Geist und Körper - es ist Zeit, Wasser zu trinken')
              sendNotification();
          
          }
  
      },3 * 60 * 60 *1000);
  }
  
  
  button.addEventListener("click", (): void => {
    console.log("Erinnerung wird  in 30 minuten erneut gesendet");
      setTimeout((): void => {
           sendNotification();
      }, 30 * 60 * 1000);
     
  });
  
  
  setReminder();
  
    
  export{sendNotification}