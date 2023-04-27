const button = document.getElementById("remind-laterButton") // as HTMLButtonElement;

button.addEventListener("click", () => {
    Notification.requestPermission().then(perm => {
        if (perm === "granted"){
            new Notification ("Erinnerung",{
                body: "Erfrische Geist und Körper - es ist Zeit, Wasser zu trinken"
            })
        }
    })
})

const glass1 = document.getElementById("glass1");
glass1.addEventListener("click", function() {
  glass1.style.backgroundColor = "#3a226c";
});

const glass2 = document.getElementById("glass2");
glass2.addEventListener("click", function() {
  glass2.style.backgroundColor = "#3a226c";
});

const glass3 = document.getElementById("glass3");
glass3.addEventListener("click", function() {
  glass3.style.backgroundColor = "#3a226c";
});

const glass4 = document.getElementById("glass4");
glass4.addEventListener("click", function() {
  glass4.style.backgroundColor = "#3a226c";
});

const glass5 = document.getElementById("glass5");
glass5.addEventListener("click", function() {
  glass5.style.backgroundColor = "#3a226c";
});

const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", function() {
  const glasses = document.querySelectorAll(".glass");
  for (let i = 0; i < glasses.length; i++) {
    glasses[i].style.backgroundColor = "";
  }
});

const glasses = document.querySelectorAll(".glass");