let honkEnable = false;
const sound = document.getElementById("honkSound");
const hoverRegion = document.getElementById("booba");

document.body.addEventListener("click", () => {
    sound.play().then(() => {
        sound.pause();
        sound.currentTime = 0;
        honkEnable = true;
        console.log("honk enabled");
        hoverRegion.style.display = "block"
    });
}, { once: true });


hoverRegion.addEventListener("mouseenter", () => {
    if (honkEnable) {
        console.log("sound playing");
        sound.volume = 1
        sound.play();
    }
});