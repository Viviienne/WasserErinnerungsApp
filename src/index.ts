

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

const button = document.getElementById("remind-laterButton")  as HTMLButtonElement;

button.addEventListener("click", (): void => {
  console.log("Erinnerung wird  in 30 minuten...");
    setTimeout((): void => {
         sendNotification();
    }, 30 * 60 * 1000);
   
});


setReminder();

const glass1 = document.getElementById("glass1") as HTMLElement ;
const glass2 = document.getElementById("glass2") as HTMLElement;
const glass3 = document.getElementById("glass3") as HTMLElement;
const glass4 = document.getElementById("glass4") as HTMLElement;
const glass5 = document.getElementById("glass5")as HTMLElement;

  

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

const resetBtn = document.getElementById("reset") as HTMLButtonElement;
const glasses = document.querySelectorAll(".glass") as NodeListOf<HTMLElement>;

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
