/* =========================
   GET HTML ELEMENTS
========================= */

const openBtn = document.getElementById("openBtn");
const surprise = document.getElementById("surprise");
const loveLetter = document.querySelector(".love-letter");
const birthdayMusic = document.getElementById("birthdayMusic");


/* =========================
   OPEN SURPRISE
========================= */

openBtn.addEventListener("click", function () {

    // Hide the Open Surprise button
    openBtn.style.display = "none";

    // Show birthday surprise
    surprise.classList.remove("hidden");


    /* =========================
       START MUSIC
       Starts from beginning
       of trimmed song
    ========================= */

    birthdayMusic.currentTime = 0;
    birthdayMusic.volume = 0.35;

    birthdayMusic.play()
        .then(() => {
            console.log("Khat started from the beginning ❤️🎵");
        })
        .catch((error) => {
            console.error("Music error:", error);
        });


    /* =========================
       START CONFETTI
    ========================= */

    createConfetti();


    /* =========================
       START SPARKLES
    ========================= */

    setTimeout(() => {
        createSparkles();
    }, 500);

});


/* =========================
   LOVE LETTER CLICK
========================= */

loveLetter.addEventListener("click", function () {

    // Prevent opening again
    if (loveLetter.classList.contains("opened")) {
        return;
    }

    // Open letter
    loveLetter.classList.add("opened");

    // Start typing
    startLoveLetter();

});


/* =========================
   CONFETTI
========================= */

function createConfetti() {

    const symbols = [
        "🎉",
        "✨",
        "💖",
        "💕",
        "🎊",
        "❤️"
    ];

    for (let i = 0; i < 80; i++) {

        const confetti = document.createElement("div");

        confetti.innerHTML =
            symbols[Math.floor(Math.random() * symbols.length)];

        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top = "-30px";

        confetti.style.fontSize =
            Math.random() * 20 + 15 + "px";

        confetti.style.zIndex = "100";

        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        const duration =
            Math.random() * 3 + 3;

        const rotation =
            Math.random() * 720 - 360;

        confetti.animate(
            [
                {
                    transform:
                        "translateY(0) rotate(0deg)",
                    opacity: 1
                },

                {
                    transform:
                        `translateY(110vh) rotate(${rotation}deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duration * 1000,
                easing: "ease-out"
            }
        );

        setTimeout(() => {
            confetti.remove();
        }, duration * 1000);
    }
}


/* =========================
   SPARKLES
========================= */

function createSparkles() {

    const sparkles = [
        "✨",
        "⭐",
        "💖",
        "💕"
    ];

    for (let i = 0; i < 30; i++) {

        const sparkle = document.createElement("div");

        sparkle.innerHTML =
            sparkles[Math.floor(Math.random() * sparkles.length)];

        sparkle.style.position = "fixed";

        sparkle.style.left =
            Math.random() * 100 + "vw";

        sparkle.style.top =
            Math.random() * 100 + "vh";

        sparkle.style.fontSize =
            Math.random() * 15 + 15 + "px";

        sparkle.style.zIndex = "101";

        sparkle.style.pointerEvents = "none";

        document.body.appendChild(sparkle);

        sparkle.animate(
            [
                {
                    transform: "scale(0)",
                    opacity: 0
                },

                {
                    transform: "scale(1.5)",
                    opacity: 1
                },

                {
                    transform: "scale(0)",
                    opacity: 0
                }
            ],
            {
                duration: 1500,
                easing: "ease-out"
            }
        );

        setTimeout(() => {
            sparkle.remove();
        }, 1500);
    }
}


/* =========================
   LOVE LETTER TYPING
========================= */

function startLoveLetter() {

    const loveText =
        document.getElementById("loveText");

    const message = `Happy Birthday to the one who means the world to me! ❤️

I can't put into words how thankful I am for you—for walking into my life and filling it with so much light.

Thank you for being the reason behind my smiles, for understanding me like no one else can, and for standing by my side no matter what life throws our way during these 3 months. ❤️

You're my blessing from the universe, my proof that miracles really do happen. I'll always be grateful for the day I found you, and even more grateful for the beautiful 3 months we shared together. 💕

Today is all about celebrating you—the beautiful soul who makes every day so much brighter.

Have the most amazing birthday. You deserve nothing less! 🎂❤️✨`;

    let index = 0;

    loveText.textContent = "";


    function typeLetter() {

        if (index < message.length) {

            loveText.textContent +=
                message.charAt(index);

            index++;

            setTimeout(typeLetter, 25);
        }
    }

    typeLetter();
}
/* =========================
   CANDLE INTERACTION
========================= */

const candles =
    document.querySelectorAll(".candle");

const wishMessage =
    document.getElementById("wishMessage");

let candlesBlown = 0;


candles.forEach(function (candle) {

    candle.addEventListener("click", function () {

        // Prevent clicking the same candle twice
        if (candle.classList.contains("blown")) {
            return;
        }

        // Blow out candle
        candle.classList.add("blown");

        candlesBlown++;

        // Check if all candles are blown
        if (candlesBlown === candles.length) {

            wishMessage.classList.add("show");

            createSparkles();

        }

    });

});
/* =========================
   FINAL SURPRISE BUTTON
========================= */

const finalBtn =
    document.getElementById("finalBtn");

const finalSurprise =
    document.getElementById("finalSurprise");


if (finalBtn && finalSurprise) {

    finalBtn.addEventListener("click", function () {

        // Hide button
        finalBtn.style.display = "none";

        // Show final surprise
        finalSurprise.classList.remove("hidden");

        // Create romantic sparkles
        createSparkles();

        // More confetti
        setTimeout(() => {
            createConfetti();
        }, 300);

    });

}