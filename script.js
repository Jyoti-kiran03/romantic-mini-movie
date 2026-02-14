document.addEventListener("DOMContentLoaded", () => {

  const startBtn = document.getElementById("startBtn");
  const intro = document.getElementById("intro");
  const main = document.getElementById("main");
  const bgm = document.getElementById("bgm");

  startBtn.onclick = () => {
    intro.style.opacity = "0";
    setTimeout(()=>{
      intro.style.display = "none";
      main.style.display = "block";

      bgm.volume = 0.6;
      bgm.play();

      startTyping();
      startSlides();
      createHearts();
    },1000);
  };

});

/* TYPEWRITER */
const text = "Mummy & Papa, your love is the reason I believe in forever. This small gift carries my biggest emotions just for you 💖";
let i = 0;

function startTyping(){
  if(i < text.length){
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(startTyping, 60);
  }
}

/* SLIDESHOW */
let slideIndex = 0;
function startSlides(){
  const slides = document.querySelectorAll(".slides");
  slides.forEach(img => img.style.display="none");

  slideIndex++;
  if(slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex-1].style.display="block";

  setTimeout(startSlides,2500);
}

/* HEART RAIN */
function createHearts(){
  setInterval(()=>{
    let heart = document.createElement("span");
    heart.innerHTML="💖";
    heart.style.left=Math.random()*100+"vw";
    heart.style.fontSize=Math.random()*18+15+"px";
    document.querySelector(".hearts").appendChild(heart);
    setTimeout(()=>heart.remove(),12000);
  },300);
}

/* SURPRISE */
function showSurprise(){
  document.getElementById("surprise").classList.remove("hidden");

  const yes = document.getElementById("yesBtn");
  const no = document.getElementById("noBtn");

  yes.onclick = ()=>window.location="message.html";

  no.onmouseenter = ()=>{
    no.style.position="absolute";
    no.style.left=Math.random()*80+"vw";
    no.style.top=Math.random()*80+"vh";
  };
}
