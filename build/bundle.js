(function () {
    'use strict';

    const button = document.getElementById("remindLaterButton");
    const glass1 = document.getElementById("glass1");
    const glass2 = document.getElementById("glass2");
    const glass3 = document.getElementById("glass3");
    const glass4 = document.getElementById("glass4");
    const glass5 = document.getElementById("glass5");
    const resetBtn = document.getElementById("reset");
    const glasses = document.querySelectorAll(".glass");

    //Gläßer lassen sich klicken
    function checkAllGlassesClicked() {
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
    // Reset Button
    resetBtn.addEventListener("click", () => {
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

    function sendNotification() {
        if ("Notification" in window && Notification.permission === "granted") {
            new Notification("Erinnerung", {
                body: "Erfrische Geist und Körper - es ist Zeit, Wasser zu trinken",
            });
        }
    }
    function permNotification() {
        if ("Notification" in window) {
            Notification.requestPermission().then((perm) => {
                if (perm === "granted") {
                    console.log("granted");
                    sendNotification();
                    // console.log("Notification displayed: Erinnerung - Erfrische Geist und Körper - es ist Zeit, Wasser zu trinken");
                }
            });
        }
    }
    function setReminder() {
        setInterval(() => {
            sendNotification();
        }, /*3 * 60 * 60 * */ 3000);
    }
    button.addEventListener("click", () => {
        console.log("Erinnerung wird  in 30 minuten erneut gesendet");
        setTimeout(() => {
            sendNotification();
        }, 30 * 60 * 1000);
    });
    window.addEventListener("load", () => {
        setReminder();
        permNotification();
    });

    function initApp() {
        permNotification();
        setReminder();
        resetBtn.addEventListener("click", checkAllGlassesClicked);
        button.addEventListener("click", sendNotification);
        window.addEventListener("load", setReminder);
        window.addEventListener("load", permNotification);
        glass1.addEventListener("click", () => {
            glass1.style.backgroundColor = "#3a226c";
        });
        glass2.addEventListener("click", () => {
            glass2.style.backgroundColor = "#3a226c";
        });
        glass3.addEventListener("click", () => {
            glass3.style.backgroundColor = "#3a226c";
        });
        glass4.addEventListener("click", () => {
            glass4.style.backgroundColor = "#3a226c";
        });
        glass5.addEventListener("click", () => {
            glass5.style.backgroundColor = "#3a226c";
        });
    }
    initApp();

})();
