(() => {
  let entry =
    data.header.subtitle[
      Math.floor(Math.random() * data.header.subtitle.length)
    ];
  if (typeof entry == "string")
    document.getElementById("headerSubtitle").innerHTML = entry;
  if (typeof entry == "function") entry();
  let full = document.getElementById("fullLink");
  let overlay = document.getElementById("overlayLink");
  full.href = data.downloads[0].fileFull;
  full.innerHTML = `${data.downloads[0].version} Full (Latest)`;
  overlay.href = data.downloads[0].fileOverlay;
  overlay.innerText = `${data.downloads[0].version} Overlay (Latest)`;
  if (window.navigator.userAgent.indexOf("MSIE ") > 0)
    document.getElementById("headerSubtitle").innerHTML =
      "internet explorer is trash use another browser pls";
})();
