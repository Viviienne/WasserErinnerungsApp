const button = document.getElementById("remind-laterButton")

button.addEventListener("click", () => {
    Notification.requestPermission().then(perm => {
        alert(perm)
    })
})