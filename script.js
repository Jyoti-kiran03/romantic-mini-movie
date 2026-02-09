document.addEventListener("DOMContentLoaded", () => {

  const startBtn = document.getElementById("startBtn");
  const intro = document.getElementById("intro");
  const main = document.getElementById("main");
  const bgm = document.getElementById("bgm");

  /* START BUTTON */
  startBtn.addEventListener("click", () => {
    bgm.volume = 0.6;
    bgm.play();

    intro.style.opacity = "0";

    setTimeout(() => {
      intro.style.display = "none";
      main.classList.remove("hidden");
      startTyping();
      startSlides();
      createHearts();
    }, 1200);
  });

});


/* TYPEWRITER */
const text = "Mummy & Papa, your love is my strength, my happiness, and my entire world. This small gift carries big emotions just for you 💖";
let index = 0;

function startTyping() {
  if (index < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(index);
    index++;
    setTimeout(startTyping, 60);
  }
}


/* SLIDESHOW */
let slideIndex = 0;

function startSlides() {
  const slides = document.querySelectorAll(".slides");
  slides.forEach(slide => slide.style.display = "none");

  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;

  slides[slideIndex - 1].style.display = "block";
  setTimeout(startSlides, 2500);
}


/* HEART BACKGROUND */
function createHearts() {
  setInterval(() => {
    let heart = document.createElement("span");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.animationDuration = Math.random() * 5 + 5 + "s";

    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => heart.remove(), 10000);
  }, 250);
}


/* SHOW SURPRISE */
function showSurprise() {
  document.getElementById("surprise").classList.remove("hidden");

  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const heartMusic = document.getElementById("heartMusic");
  const bgm = document.getElementById("bgm");

  /* YES BUTTON */
  yesBtn.addEventListener("click", () => {
    bgm.pause();

    heartMusic.currentTime = 0;
    heartMusic.volume = 0.7;
    heartMusic.play();

    document.getElementById("surprise").innerHTML = `
      <h1>My Heart Is Open For You 💐</h1>
      <div class="flower"></div>
      <div class="petals"></div>
    `;

    createSingleFallingHeart();

    setTimeout(() => {
      window.location.href = "message.html";
    }, 6000);
  });

  /* NO BUTTON FLOAT */
  noBtn.addEventListener("mouseenter", () => {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 120);
    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
  });

  setTimeout(() => {
    noBtn.style.display = "none";
  }, 4000);
}


/* SINGLE CINEMATIC FALLING HEART */
function createSingleFallingHeart() {
  const box = document.querySelector(".petals");
  if (!box) return;

  const heart = document.createElement("span");
  heart.innerHTML = "💖";
  heart.style.position = "absolute";
  heart.style.left = "50%";
  heart.style.top = "-80px";
  heart.style.fontSize = "70px";
  heart.style.opacity = 0.9;
  heart.style.transition = "transform 6s ease-in-out";

  box.appendChild(heart);

  setTimeout(() => {
    heart.style.transform = "translateY(110vh) rotate(360deg)";
  }, 100);
}
