

//Berechtigung erfragen

window.addEventListener("load", () => {
        permNotification();
  });
  
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

  //Erinnerung schicken

  function sendNotification(): void {
    console.log(" Erinnerung - Erfrische Geist und Körper - es ist Zeit, Wasser zu trinken");
    
    new Notification("Erinnerung", {
        body: "Erfrische Geist und Körper - es ist Zeit, Wasser zu trinken",
      });
      
    }

    setInterval(() => {
        sendNotification();
     }, /*3 * 60 * 60 * */ 3000);
 
//Später Erinnern 
  
  
 
    
  export {sendNotification, permNotification,};