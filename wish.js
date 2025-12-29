//play gif on click
const animation = lottie.loadAnimation({
    container: document.getElementById("confetti"),
    path: 'asset/Confetti.json',
    render: 'svg',
    loop: false,
    autoplay: false,
})

//confetti sound effect
const confettiSound = document.getElementById("confettiSound")

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
        <p>Gửi Hà An/Màu Vàng Rất Đẹp/Rinaisacrane/Gooner omega bottom fertile bóng bẩy nhẫy mỡ giòn quay chảy nước nhất hành tinh (cùng 7749 biệt danh kinh khủng khác mà tạm thời t chưa dám nhớ ra),
<br><br>CHÚC MỪNG NGÀY XEM SẾCH HỢP PHÁP!!!!!!!
<br><br>Now go hit Twitter and hit on the hottest picture of Sabrina you can find and start hitting it so hard I can hear storms forming on the other side of the globe, you deserve it.
<br><br>Nghiêm túc mà nói thì, chúc mừng sinh nhật bbi <33 Chúc girlie tuổi mới có tất cả - tiền tài, tình yêu, tình bạn, thành công, thu nhập, thịt quay Nghệ An, và quan trọng nhất là ten hot women in lingerie tied up in soft yellow silk lace in your bed. Có mỗi 1 cái bất khả thi thôi, chứ còn lại thì t đã luôn tin m làm dc tốt. Sải cánh tung bay nhé đại bàng con nước Mĩ, you were sculpted by God’s hand to earn this Psych degree bro. Còn for women thì ờm. Cố lên…
<br><br>Đây cũng là sinh nhật lần thứ 7 mà t được đón cùng m and dare I say it gets better every year, even when you’re not 13 floors but 13 connecting flights away. Cam on vi da den, vì tin nhắn dài 30 dòng lúc nửa đêm khi t cần, vì mấy con fic dài hơn Epstein files, vì vừa có khả năng làm t khóc ướt hơn Onlyfans và làm t cười như hài nhạt Trấn Thành trong 1 phút đổ lại, vì thấy t xem H*zbin H*tel xong chiụ đu cùng để cả lũ thành losers baby, vì tất cả mọi thứ từ lớp 7 đến giờ. You’re truly my kindred spirit in every sense of the word. T nghĩ t nhắc lại cái này hơi nhiều but I compared you to coffee once, I think, bc despite the initial bitterness, coffee turns sweet and addicting after. And totally not bc I want to gulp you down that’s that’s me expresso or sth. I love you, srsly. Even if you never find the 10 hot women in your bed, I’d be willing to strip and clone myself 9 times in soft silky yellow lace for a substitute like little breedable omega catgirls. Okay maybe that was a bit of a stretch, since you don’t speak French nor are you blonde, but the sentiment is true.
<br><br>Hope you have a not short and very sweet and super spicy and absolutely spectacular and extremely sexy bday (I ran out of S adjectives and superlatives). You’re proof that Christmas miracles do exist, and they usually come 3 days late, and in different forms, bc mine took that of a horny teenage girls w 0 bitches, 5 questionable ppl in inbox, 10 arrest warrants and 20 opened AO3 tabs. The chill is settling on my shoulder like a ghost hug and the streets stretch long and empty and I’m yearning for you like an incel for anime waifu feet on reddit forums, and tbh your presence here rn would mean more than any fancy present I unwrap. Can I unwrap you?
<br><br>Mulberry Lane needs its resident gooner back,
<br><br>Công dân kiểu mẫu sinh hoạt điều độ ở tầng 5
<br><br>P.S: Xin lỗi vì nửa sến nửa sarc I’m allergic to consistency and good writing, mong là m đã khóc ướt đẫm cả 2 khoé khi đọc. I put my whole Alkaussy so far into this I might’ve actl accidentally impregnated the doc. To end this on a less discordant note, 我们是查理柯克 ～
<br><br>PP.S: Not letting anyone forget you were into BTS at 7th grade bc what’s a bday w/o a lil humiliation. Not like the colonizer yaoi writer might have any leg to stand on, but still. Tình yêu ta mượt như bơ chảy, vỏ bọc tội phạm vì nàng mà hoá thành mây (?)
<p>
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
        <p>hello my latte bbb (big boob blonds) loving future therapist 🥺😻👩‍❤️‍💋‍👩 chờ mãi cả nhóm mới bằng tuổi e gái mới lớn ạ hahahihi 😋
<br><br>chơi với nhau đc kbiet bnhieu cái snhat r ha? trong từng ấy năm thì đã có tận đây là lần t2 chia li r (nma k hẳn là chia li ý là nsndhjs) nma chưa bao h cả nhóm xa nhau đến vậy. nhưng t mong và t tin rằng ae sẽ chơi bền đc với nhau th, 7(ish) tháng nữa gặp lại nhau r. Chúc e gái vui tươi học dỏi xinh gái không bao h lonely nha 👅🫦 ily
<br><br>-🍋<p>
        `;
        count++;
    } else if (homie == 'linhb') {
        title = '5. Short and savory - Lyrics';
        wish = `
        <p>Hello my boobie obsessed psychology prodigy of a friend
<br><br>With this day our group officially consists of 0 minors and 6 adults eligible for jail. While i wished that we could stay accountability and responsibility free for longer, im glad this means we can book an airbnb and have a girls trip!!! (Fuck the schedule though why is my spring break exactly after urs). I lowk miss ur vibe, ur herding the friend group, and ur juicy ass bouncing on my thighs (my guys ass isnt as nice).
<br><br>I wish u a happy, fulfilling next year, outdoing all ur classmates, getting praise from ur profs, snatchin the internships (i rlly need some rn). Ive got faith that a rich white blonde girl with huge badonkas (and a great personality ofc) will pick u up, put u in her private jet and u both will fly off to the sunset with millions in ur linked bank account
<br><br>Happy bday
<br><br>P.s. This is kinda short cuz i needed to cook the web
<p>
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
    confettiSound.play()

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