
function openModal(homie) {
    console.log('showWishes called with:', homie);

    let title = '';
    let wish = ''
    if (homie == 'alka') {
        title = 'alka-title';
        wish = `
        <p>This is alka's wish for ha an.<p>
        `;
    } else if (homie == 'roy') {
        title = 'roy-title';
        wish = `
        <p>This is roy's wish for ha an.<p>
        `;
    } else if (homie == 'linha') {
        title = 'linha-title';
        wish = `
        <p>Happy birthday babygurl Hà Annnnnn🎉🩵💐🌹🩷🤍💙🎂🎊🥳. Chưa gì đã đến sinh nhật m aka New Year ròiiii lol🤣. I think its been a year to remember-lots of milestones. T nghĩ là năm vừa rồi m cũng đã có nhiều thành tựu đáng nhớ rùiii 🥳 proud of you man ☺️. Như là đi du học nè, bắt đầu 1 cuộc sống mới nè 🤭. Chúc Hà An tuổi mới sẽ tiếp tục có những thành tựu mới nè, lun lun vui vẻ khoẻ mạnh nè, và có bồ nha lol🤭, tìm được Sabrina Carpenter của đời mình nha😆 Mong là năm sau ce mình sẽ đi đâu đó chơi được and have a successful year😇<p>
        `;
    } else if (homie == 'chanh') {
        title = 'chanh-title';
        wish = `
        <p>This is chanh's wish for ha an.<p>
        `;
    } else if (homie == 'linhb') {
        title = 'linhb-title';
        wish = `
        <p>This is linhb's wish for ha an.<p>
        `;
    } else if (homie == 'thp') {
        title = 'thp-title';
        wish = `
        <p>This is thp's wish for ha an.<p>
        `;
    }
    wishTitle.textContent = title;
    wishText.innerHTML = wish;

    document.getElementById("wishModal").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closeModal() {
    document.getElementById("wishModal").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}
    //play gif on click
function playConfetti() {
    console.log("confetti playing");
    var animation = bodymovin.loadAnimation({
    container: document.getElementById("confetti"),
    path: 'asset/Confetti.json',
    render: 'svg',
    loop: false,
})
}

// animation.addEventListener("complete", function () {
//     animation.destroy()
//     console.log("animaton done")
// });