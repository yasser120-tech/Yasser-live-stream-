const API_KEY = "dd0b1f710e97d9f2aee05855863dc2dc";

// Slideshow
let currentSlide=0;
const slides=document.getElementById("slidesContainer").children;
setInterval(()=>{
  slides[currentSlide].style.display="none";
  currentSlide=(currentSlide+1)%slides.length;
  slides[currentSlide].style.display="block";
},3000);
for(let i=0;i<slides.length;i++){slides[i].style.display=i===0?"block":"none";}

// Trending Matches Example
const trendingList=["Liverpool vs Man City","Real Madrid vs Barcelona","Chelsea vs Arsenal"];
const trendingDiv=document.getElementById("trendingMatches");
trendingList.forEach(title=>{
  trendingDiv.innerHTML+=`<div class="card">
  <div class="info">
    <h4>${title}</h4>
    <small>Upcoming 2026</small>
    <a href="https://www.google.com/search?q=watch+${encodeURIComponent(title)}" target="_blank">Watch Official</a>
  </div></div>`;
});

// Highlights Example
const highlights=["Messi Goal vs PSG","Ronaldo Free Kick","Lewandowski Hat-trick","Mbappe Dribble"];
const highlightsDiv=document.getElementById("highlights");
highlights.forEach(h=>{
  highlightsDiv.innerHTML+=`<div class="card">
  <img src="https://via.placeholder.com/300x200?text=${encodeURIComponent(h)}">
  <div class="info">
    <h4>${h}</h4>
    <small>Highlight 2026</small>
    <a href="https://www.google.com/search?q=${encodeURIComponent(h)}" target="_blank">Watch Clip</a>
  </div></div>`;
});
