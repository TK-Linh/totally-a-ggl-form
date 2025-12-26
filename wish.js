
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
        <p>This is linha's wish for ha an.<p>
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