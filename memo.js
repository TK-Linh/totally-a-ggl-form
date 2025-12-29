let tapped = false;
const sound = document.getElementById("kirkSound");
const clickRegions = document.querySelectorAll(".pic");

clickRegions.forEach(clickRegion => {
    clickRegion.addEventListener("click", () => {
        clickRegion.style.opacity = 1
        if (!tapped) {
            console.log("sound playing")
            tapped = true
            sound.currentTime = 0
            sound.muted = false
            sound.play()
        } else {
            console.log("he got shot")
            tapped = false
            sound.pause()
            sound.currentTime = 0
        }
    });
});