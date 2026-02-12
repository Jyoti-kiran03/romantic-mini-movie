document.addEventListener("DOMContentLoaded", () => {

  const startBtn = document.getElementById("startBtn");
  const intro = document.getElementById("intro");
  const main = document.getElementById("main");
  const bgm = document.getElementById("bgm");

  startBtn.addEventListener("click", () => {
    bgm.volume = 0.6;
    bgm.play().catch(()=>{});

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

const text = "Mummy & Papa, your love is my strength, my happiness, and my entire world. This small gift carries big emotions just for you 💖";
let index = 0;

function startTyping() {
  if (index < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(index);
    index++;
    setTimeout(startTyping, 60);
  }
}

let slideIndex = 0;

function startSlides() {
  const slides = document.querySelectorAll(".slides");
  slides.forEach(slide => slide.style.display = "none");

  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;

  slides[slideIndex - 1].style.display = "block";
  setTimeout(startSlides, 2500);
}

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

function showSurprise() {
  document.getElementById("surprise").classList.remove("hidden");

  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const heartMusic = document.getElementById("heartMusic");
  const bgm = document.getElementById("bgm");

  yesBtn.onclick = () => {
    bgm.pause();
    heartMusic.volume = 0.7;
    heartMusic.play().catch(()=>{});

    document.getElementById("surprise").innerHTML = `
      <h1>My Heart Is Open For You 💐</h1>
      <div class="petals"></div>
    `;

    createSingleFallingHeart();

    setTimeout(() => {
      window.location.href = "message.html";
    }, 6000);
  };

  noBtn.onmouseenter = () => {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * (window.innerWidth - 120) + "px";
    noBtn.style.top = Math.random() * (window.innerHeight - 120) + "px";
  };

  setTimeout(() => noBtn.style.display = "none", 4000);
}

function createSingleFallingHeart() {
  const box = document.querySelector(".petals");

  const heart = document.createElement("span");
  heart.innerHTML = "💖";
  box.appendChild(heart);
}
