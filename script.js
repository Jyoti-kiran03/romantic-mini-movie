// Wait until DOM loads
document.addEventListener("DOMContentLoaded", () => {

  /* START BUTTON */
  const startBtn = document.getElementById("startBtn");
  startBtn.addEventListener("click", startMovie);

  /* YES / NO BUTTON LOGIC */
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const music = document.getElementById("bgMusic");
  
  document.body.addEventListener("click", () => {
  music.play();
});
  
  yesBtn.addEventListener("click", () => {
    // Stop background music
    document.getElementById("bgm").pause();

    // Play heart music
    const heartMusic = document.getElementById("heartMusic");
    heartMusic.currentTime = 0;
    heartMusic.volume = 0.7;
    heartMusic.play();

    // Show heart bloom
    document.getElementById("surprise").innerHTML = `
      <h1>My Heart Is Open For You 💐</h1>
      <div class="flower"></div>
      <div class="petals"></div>
    `;

    // Add falling heart
    createFallingHeart();

    // Go to message page after 6s
    setTimeout(() => {
      window.location.href = "message.html";
    }, 6000);
  });

  // Floating NO button
  noBtn.addEventListener("mouseenter", () => {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 120);
    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
  });

  // Remove NO button after 4s
  setTimeout(() => {
    noBtn.style.display = "none";
  }, 4000);

}); // end DOMContentLoaded

/* CINEMATIC START */
function startMovie() {
  console.log("Start clicked"); // For debug
  document.getElementById("intro").style.display = "none";
  document.getElementById("main").classList.remove("hidden");

  document.getElementById("bgm").play();
  typeWriter();
  showSlides();
}

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
function showSlides() {
  const slides = document.getElementsByClassName("slides");
  for (let s of slides) s.style.display = "none";
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2500);
}

/* SHOW SURPRISE BUTTON */
function showSurprise() {
  document.getElementById("surprise").classList.remove("hidden");
}

/* SINGLE FALLING HEART */
function createFallingHeart() {
  const box = document.querySelector(".petals");
  if (!box) return;

  const heart = document.createElement("span");
  heart.innerHTML = "💖";
  heart.style.position = "absolute";
  heart.style.left = "50%";
  heart.style.top = "-50px";
  heart.style.fontSize = "60px";
  heart.style.opacity = 0.8;
  heart.style.transition = "transform 6s linear, top 6s linear";
  box.appendChild(heart);

  // Start falling animation
  setTimeout(() => {
    heart.style.transform = "translateY(100vh) rotate(360deg)";
    heart.style.top = "100vh";
  }, 100);
}
const intro = document.getElementById("intro");
const main = document.getElementById("main");
const bgm = document.getElementById("bgm");
const startBtn = document.getElementById("startBtn");

/* Start Button */
startBtn.addEventListener("click", () => {
  bgm.volume = 0.6;
  bgm.play();

  intro.style.opacity = "0";

  setTimeout(() => {
    intro.style.display = "none";
    main.style.display = "block";
    startTyping();
    startSlides();
    createHearts();
  }, 1500);
});
/* Floating Hearts */
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
