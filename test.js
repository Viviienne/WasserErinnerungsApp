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

function changeColor() {
  glass1.style.backgroundColor = "blue";
}

glass1.addEventListener("click", changeColor);
