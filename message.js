document.addEventListener("DOMContentLoaded",()=>{
  setInterval(()=>{
    const heart=document.createElement("span");
    heart.innerHTML="💖";
    document.querySelector(".petals").appendChild(heart);
    setTimeout(()=>heart.remove(),7000);
  },700);
});
