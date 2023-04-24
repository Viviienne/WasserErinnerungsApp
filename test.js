const button = document.getElementById("remind-laterButton")

button.addEventListener("remindMeLater", () => {
    Notification.requestPermission().then(perm => {
        alert(perm)
    })
})