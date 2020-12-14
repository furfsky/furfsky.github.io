document.getElementById("logo").src = data.header.image;
document.getElementById("headerSubtitle").innerHTML =
  data.header.subtitle[Math.floor(Math.random() * data.header.subtitle.length)];
