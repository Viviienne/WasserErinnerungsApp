const button = document.getElementById("remind-laterButton")

button.addEventListener("click", () => {
    Notification.requestPermission().then(perm => {
        if (perm === "granted" ){
            new Notification ("Test")
        }
    })
})