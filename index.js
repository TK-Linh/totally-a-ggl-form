let honkEnable = false;
const sound = document.getElementById("honkSound");

document.body.addEventListener("click", () => {
    sound.play().then(() => {
        sound.pause();
        sound.currentTime = 0;
        honkEnable = true;
        console.log("honk enabled");
    });
}, { once: true });


    const hoverRegion = document.getElementById("booba");
    hoverRegion.addEventListener("mouseenter", () => {
        if (honkEnable) {
            console.log("sound playing");
            sound.volume = 1
            sound.play();
        }
    });
