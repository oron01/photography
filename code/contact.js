let emailButton = document.querySelector(".emailButton")
let igButton = document.querySelector(".instagramButton")
let formButton = document.querySelector(".formButton")

igButton.addEventListener("click", () => {
    window.location.href ="https://instagram.com/auron.noir"
})

formButton.addEventListener("click", () => {
    window.location.href ="https://forms.gle/9WSecUmhv1TTJHkx7"
})

emailButton.addEventListener("click", () => {
    navigator.clipboard.writeText("auron.photo@proton.me")
    alert("Copied! Press Ctrl + V To paste.")
})
