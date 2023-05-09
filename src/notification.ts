import {button, } from "./dom";



  
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

  // Erinnerungen alle drei Stunden senden
  
  function sendIntervalNotification() {
    setInterval(() => {
      sendNotification();
    }, 3 * 60 * 60 *  1000);
  }
  //Butoon zum Später erinnern
  
  button.addEventListener("click", () => {
      setTimeout(()=> {
           sendNotification();
      }, 30 * 60 * 1000);
     
  });
  
  
  
 
  
  
  

export {button, sendNotification, sendIntervalNotification };