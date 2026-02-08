document.addEventListener("DOMContentLoaded", () => {
  const heartMusic = document.getElementById("heartMusic");
  heartMusic.volume = 0.7;
  heartMusic.play();

  const petalsBox = document.querySelector(".petals");

  // SINGLE CINEMATIC FALLING HEART LOOP
  setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = "-60px";
    heart.style.fontSize = (50 + Math.random() * 20) + "px";
    heart.style.pointerEvents = "none";
    heart.style.animation = "cinematicFall 7s cubic-bezier(0.22,0.61,0.36,1) forwards, glow 2s ease-in-out infinite alternate";

    petalsBox.appendChild(heart);

    // remove after animation
    setTimeout(() => petalsBox.removeChild(heart), 7000);
  }, 800); // new heart every 0.8s
});
