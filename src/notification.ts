import {button, } from "./dom";

//Laden der Notification Funktion beim aufrufen der Seite

window.addEventListener('load', function() {
    sendNotification();
  });
  
  //Senden der Zustimmung und der Notification
  
  function sendNotification(){
  if ("Notification" in window){
    console.log("hallo")
      Notification.requestPermission().then((perm)=>{
          if (perm === "granted"){
            console.log("granted")
           new Notification("Erinnerung", {
                  body: "Erfrische Geist und Körper - es ist Zeit, Wasser zu trinken",
  
              });
          }
      });
  }   
  }
  
  //Erinnerungsintervall Festlegen
  
  function setReminder(){
      setInterval(()=> {
          const now = new Date();
          const hour = now.getHours();
          if (hour === 7|| hour === 10 || hour ===13 || hour === 16 || hour === 19) {
              sendNotification();
          
          }
  
      },3 * 60 * 60 *1000);
  }
  
  //Butoon zum Später erinnern
  
  button.addEventListener("click", () => {
      setTimeout(()=> {
           sendNotification();
      }, 30 * 60 * 1000);
     
  });
  
  //Funktion die Intervall aufruft
  
  setReminder();
  
  
  

export {button, sendNotification, setReminder,};