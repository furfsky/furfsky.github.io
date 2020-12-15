document.getElementById("headerSubtitle").innerHTML =
  data.header.subtitle[Math.floor(Math.random() * data.header.subtitle.length)];
let full = document.getElementById("fullLink");
let overlay = document.getElementById("overlayLink");
full.href = data.downloads[0].fileFull;
full.innerHTML = `${data.downloads[0].version} Full (Latest)`
overlay.href = data.downloads[0].fileOverlay;
overlay.innerText = `${data.downloads[0].version} Overlay (Latest)`