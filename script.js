/* CINEMATIC START */
function startMovie() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("main").classList.remove("hidden");

  document.getElementById("bgm").play();
  typeWriter();
  showSlides();
}

/* Surprise */
function showSurprise() {
  const surpriseBox = document.getElementById("surprise");
  surpriseBox.classList.remove("hidden");

  setTimeout(() => {
    attachHeartLogic();
  }, 100);
}


/* Slideshow */
let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("slides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2500);
}

/* Typewriter */
const text = "Mummy & Papa, your love is the reason I believe in forever ❤️";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 70);
  }
}

function openMyHeart() {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");

  /* Floating NO button */
  noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 120);
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
  });

  /* Remove NO after 4 seconds */
  setTimeout(() => {
    noBtn.style.display = "none";
  }, 4000);

  /* YES click → flower → next page */
  yesBtn.addEventListener("click", () => {
    document.body.innerHTML = `
      <div style="text-align:center;color:white;">
        <h1>My Heart Is Open For You 💐</h1>
        <div class="flower"></div>
      </div>
    `;

    setTimeout(() => {
      window.location.href = "message.html";
    }, 3000);
  });
}
function attachHeartLogic() {

  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");

  if (!noBtn || !yesBtn) return;

  /* Floating NO button */
  noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 120);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
  });

  /* Remove NO after 4 seconds */
  setTimeout(() => {
    noBtn.style.display = "none";
  }, 4000);

  /* YES → flower → next page */
  yesBtn.addEventListener("click", () => {
    document.getElementById("surprise").innerHTML = `
      <h1>My Heart Is Open For You 💐</h1>
      <div class="flower"></div>
    `;

    setTimeout(() => {
      window.location.href = "message.html";
    }, 3000);
  });
}
function attachHeartLogic() {

  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");

  if (!noBtn || !yesBtn) return;

  // NO button floating
  noBtn.addEventListener("mouseenter", () => {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 120);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
  });

  // Remove NO after 4 seconds
  setTimeout(() => {
    noBtn.style.display = "none";
  }, 4000);

  // YES click → flower → next page
  yesBtn.addEventListener("click", () => {
    document.getElementById("surprise").innerHTML = `
      <h1>My Heart Is Open For You 💐</h1>
      <div class="flower"></div>
    `;

    setTimeout(() => {
      window.location.href = "message.html";
    }, 3000);
  });
}
function showSurprise() {
  document.getElementById("surprise").classList.remove("hidden");

  setTimeout(() => {
    attachHeartLogic();
  }, 200);
}


