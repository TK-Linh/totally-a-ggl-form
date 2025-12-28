//play gif on click
const animation = lottie.loadAnimation({
    container: document.getElementById("confetti"),
    path: 'asset/Confetti.json',
    render: 'svg',
    loop: false,
    autoplay: false,
})

//display memo page button on clicking all wish-items
var count = 0

//things that play on clicking wish item
function openModal(homie) {
    console.log('showWishes called with:', homie);
    console.log('no. of wishes opened', count);

    let title = '';
    let wish = ''
    if (homie == 'alka') {
        title = '1. Never getting laid - Lyrics';
        wish = `
        <p>This is alka's wish for ha an.<p>
        `;
        count++;
    } else if (homie == 'roy') {
        title = '2. White Xmas - Lyrics';
        wish = `
        <p>hẹ hẹ cmsn minor cuối cùng của nhóm 🥳🥳🥳 
<br><br>isnt it crazy how all of us r legal adults and can touch each other inapprorpriately without consequences now??
<br><br>anw this marks ur (six) 7th bday weve spent tgt i think. we might be 2 continents and 7 hrs apart now but im still so glad to be able to have this moment w u hà an. uve been there for pretty much all of my pivotal evolution phase, from fuckass harry potter to bnha to jjk and even now to klance🥀🥀🥀 (i gotta be put down bro). uve been there since i was a hot headed middle schooler and u were there when i became an emo cringelord highschooler - even now when were not physically tgt anymore, ur still sending me stayed gone lyrics and sentimental reels. ig what i wanna say is thank u for sticking around all these years🥳🥳🥳 ik ive been a lot to deal with sometimes, but throughout all those times u were always the lifeline holding me back ❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥
<br><br>i luwk still cant believe im going thru college without u rn twin😞 i miss going to class and seeing u passed out and grabbing ur butt sm but for now weve gotta make do with sentimental reels ig🥀 ur literally one of the best ppl i know and one of my elitest employees ever, and i hope we can still be this close until the day i escape from dkbk (which is never)
<br><br>tuổi mới chúc an bú đc vé sabrina carpenter giá rẻ vs bag đc blonde milf or old money dark acadamia high eq man with dark brown curls. ur alr acing ur studies so i hope ull ace it even more so much so that teacher get on their knees and beg at ur feet so that ud be there ta. also i hope ur school blows up in july next year so u wont have to go back until october or sth. so that i can squeeze ur butt more in the summer 🥳🥳🥳
<br><br>i hope the nexr 7 months pass soon so we could go on that hcm trip tgt 🙏🦅🦅🦅 i cant wait to see u again u sexy little legal labubu
<p>
        `;
        count++;
    } else if (homie == 'linha') {
        title = "3. Don't worry I'll make you cum - Lyrics";
        wish = `
        <p>Happy birthday babygurl Hà Annnnnn🎉🩵💐🌹🩷🤍💙🎂🎊🥳. Chưa gì đã đến sinh nhật m aka New Year ròiiii lol🤣. I think its been a year to remember-lots of milestones. T nghĩ là năm vừa rồi m cũng đã có nhiều thành tựu đáng nhớ rùiii 🥳 proud of you man ☺️. Như là đi du học nè, bắt đầu 1 cuộc sống mới nè 🤭. Chúc Hà An tuổi mới sẽ tiếp tục có những thành tựu mới nè, lun lun vui vẻ khoẻ mạnh nè, và có bồ nha lol🤭, tìm được Sabrina Carpenter của đời mình nha😆 Mong là năm sau ce mình sẽ đi đâu đó chơi được and have a successful year😇<p>
        `;
        count++;
    } else if (homie == 'chanh') {
        title = '4. Tears in my pants - Lyrics';
        wish = `
        <p>This is chanh's wish for ha an.<p>
        `;
        count++;
    } else if (homie == 'linhb') {
        title = '5. Short and savory - Lyrics';
        wish = `
        <p>This is linhb's wish for ha an.<p>
        `;
        count++;
    } else if (homie == 'thp') {
        title = '6. Ourchild - Lyrics';
        wish = `
        <p>From ur fellow brother in incelibacy,
<br><br>Another year has gone by without you getting any motion. Let’s hope for pussy 2026 bro. I am praying to my ancestors, all gods of different religions and that one tumblr account that ppl go to ask prayers for their partners too. 
<br><br>Happy 18th bday to u, my man. Now u can bang single mothers in ur areas without them getting potentially framed for pedophilia. U can actually go to jail now so I suggest that u should try to assassinate any political leaders/ health insurance CEOs/right wing gifter so that u get life sentence and spend the rest of ur life chilling behind bars. 
<br><br>Honestly, i would wish sth like “i hope ur university doesnt make u wanna kys, a j*b that paid hella cash and gud mental health” but it seems ur doing pretty well at uni. Good for u dude. For the *mployment part, at this point, its better for all majors to put the fries in the mcdonald bag lil bro. Bout the mental health part, mental stability is kinda out of ur capabilities i think. 
<br><br>Instead, i would wish for u to have a lot of fun with ur new friends and a lot of travel since u told me u want to do that if ur dreams are to be realised. Take care of urself in the hellscape that its the us and I hope u get to eat lots of food in Cali. (eat ur heart out bro, ur canteen food seems a bit too salty for u)
<br><br>I miss u a lot in VN. Let’s meet up when ur back
        <p>
        `;
        count++;
    }
    wishTitle.textContent = title;
    wishText.innerHTML = wish;

    document.getElementById("wishModal").style.display = "block";
    document.getElementById("overlay").style.display = "block";
    animation.goToAndPlay(0, true);

    if (count > 5) {
        document.getElementById("toMemo").style.display = "block";
    }
}

function closeModal() {
    document.getElementById("wishModal").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

// document.getElementById("wish-item").addEventListener("click", () => {
//     animation.goToAndPlay(0, true);
// })

// animation.addEventListener("complete", function () {
//     animation.destroy()
//     console.log("animaton done")
// });