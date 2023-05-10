(function () {
    'use strict';

    const startApp = document.getElementById("startApp");
    const button = document.getElementById("remindLaterButton");
    const glass1 = document.getElementById("glass1");
    const glass2 = document.getElementById("glass2");
    const glass3 = document.getElementById("glass3");
    const glass4 = document.getElementById("glass4");
    const glass5 = document.getElementById("glass5");
    const resetBtn = document.getElementById("reset");
    const glasses = document.querySelectorAll(".glass");

    //Senden der Zustimmung und der Notification
    function sendNotification() {
        if ("Notification" in window) {
            console.log("hallo");
            Notification.requestPermission().then((perm) => {
                if (perm === "granted") {
                    console.log("granted");
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
        }, 3 * 60 * 60 * 1000);
    }
    //Butoon zum Später erinnern
    button.addEventListener("click", () => {
        setTimeout(() => {
            sendNotification();
        }, 30 * 60 * 1000);
    });

    function setUpGlasses() {
        //Gläser
        glass1.addEventListener("click", function () {
            glass1.style.backgroundColor = "#3a226c";
        });
        glass2.addEventListener("click", function () {
            glass2.style.backgroundColor = "#3a226c";
        });
        glass3.addEventListener("click", function () {
            glass3.style.backgroundColor = "#3a226c";
        });
        glass4.addEventListener("click", function () {
            glass4.style.backgroundColor = "#3a226c";
        });
        glass5.addEventListener("click", function () {
            glass5.style.backgroundColor = "#3a226c";
        });
        //Reset Button
        resetBtn.addEventListener("click", function () {
            for (let i = 0; i < glasses.length; i++) {
                glasses[i].style.backgroundColor = "";
            }
        });
        //Gläser werden überptüft
        function checkAllGlassesClicked() {
            let allClicked = true;
            for (let i = 0; i < glasses.length; i++) {
                if (glasses[i].style.backgroundColor !== "rgb(58, 34, 108)") {
                    allClicked = false;
                    break;
                }
            }
            // Ausgabe wenn alle Gläser geklickt wurden
            if (allClicked) {
                alert("Tagesziel erreicht!");
            }
        }
        for (let i = 0; i < glasses.length; i++) {
            glasses[i].addEventListener("click", () => {
                glasses[i].style.backgroundColor = "#3a226c";
                checkAllGlassesClicked();
            });
        }
    }

    //App Starten
    startApp.addEventListener("click", () => {
        sendNotification();
        sendIntervalNotification();
        setUpGlasses();
    });

})();
