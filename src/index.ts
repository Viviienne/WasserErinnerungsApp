document.documentElement;
document.body;
document.head;








window.addEventListener('load', function() {
  sendNotification();
});

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

function setReminder(){
    setInterval(()=> {
        const now = new Date();
        const hour = now.getHours();
        if (hour === 7|| hour === 10 || hour ===13 || hour === 16 || hour === 19) {
            sendNotification();
        
        }

    },3 * 60 * 60 *1000);
}


const button = document.getElementById("remind-laterButton")  as HTMLButtonElement;


button.addEventListener("click", () => {
    setTimeout(()=> {
         sendNotification();
    }, 30 * 60 * 1000);
   
});


setReminder();


  
const glass1 = document.getElementById("glass1") as HTMLButtonElement ;
glass1.addEventListener("click", function() {
  glass1.style.backgroundColor = "#3a226c";
});

const glass2 = document.getElementById("glass2") as HTMLButtonElement;
glass2.addEventListener("click", function() {
  glass2.style.backgroundColor = "#3a226c";
});

const glass3 = document.getElementById("glass3") as HTMLButtonElement;
glass3.addEventListener("click", function() {
  glass3.style.backgroundColor = "#3a226c";
});

const glass4 = document.getElementById("glass4") as HTMLButtonElement;
glass4.addEventListener("click", function() {
  glass4.style.backgroundColor = "#3a226c";
});

const glass5 = document.getElementById("glass5")as HTMLButtonElement;
glass5.addEventListener("click", function() {
  glass5.style.backgroundColor = "#3a226c";
});

const resetBtn = document.getElementById("reset") as HTMLButtonElement;
resetBtn.addEventListener("click", function() {
  const glasses = document.querySelectorAll(".glass") ;
  for (let i = 0; i < glasses.length; i++) {
    glasses[i].style.backgroundColor = "";
  }
});

const glasses = document.querySelectorAll(".glass");

for (let i = 0; i < glasses.length; i++) {
    glasses[i].addEventListener("click", function() {
      glasses[i].style.backgroundColor = "#3a226c";
      checkAllGlassesClicked();
    });
  }

function checkAllGlassesClicked() {
  let allClicked = true;
  for (let i = 0; i < glasses.length; i++) {
    if (glasses[i].style.backgroundColor !== "rgb(58, 34, 108)") {
      allClicked = false;
      break;
    }
  }

  if (allClicked )  {
    alert("Tagesziel erreicht!");
  }
}



