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
  document.getElementById("surprise").classList.toggle("hidden");
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
const text = "Mom & Dad, your love is the reason I believe in forever ❤️";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 70);
  }
}
