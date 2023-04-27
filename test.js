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
function changeColor() {
glass2.style.backgroundColor = "#3a226c";

glass2.addEventListener("click", changeColor);
}


const glass3 = document.getElementById("glass3");
function changeColor() {
glass3.style.backgroundColor = "#3a226c";

glass3.addEventListener("click", changeColor);
}


const glass4 = document.getElementById("glass4");
function changeColor() {
glass4.style.backgroundColor = "#3a226c";
}
glass4.addEventListener("click", changeColor);



const glass5 = document.getElementById("glass5");
function changeColor() {
glass5.style.backgroundColor = "#3a226c";
}
glass5.addEventListener("click", changeColor);
