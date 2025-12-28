//dummy loading screen
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        document.getElementById("content").style.display = "block"
    }, 1000)
})