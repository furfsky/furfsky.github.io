(() => {
  let entry =
    data.header.subtitle[
      Math.floor(Math.random() * data.header.subtitle.length)
    ];
  if (typeof entry == "string") {
    document.getElementById("headerSubtitle").innerHTML = entry;
  }
  if (typeof entry == "function") {
    entry();
  }
  if (
    entry ===
    "There are currently quotes (including this one) on the site. Reload to see if your submission was one of them!"
  ) {
    document.getElementById(
      "headerSubtitle"
    ).innerHTML = `There are currently ${data.header.subtitle.length} quotes (including this one) on the site. Reload to see if your submission was one of them!`;
  }
  //if (Math.random() < 0.01) {document.getElementById("logo").src = "assets/logo.gif";} else {document.getElementById("logo").src = "assets/amongus.gif";}
  let full = document.getElementById("fullLink");
  let overlay = document.getElementById("overlayLink");
  let overlayPlus = document.getElementById("overlayPlusLink");
  full.href = data.downloads[0].fileFull;
  full.innerHTML = `${data.downloads[0].version} Full (Latest)`;
  overlay.href = data.downloads[0].fileOverlay;
  overlay.innerText = `${data.downloads[0].version} Overlay (Latest)`;
  if (data.downloads[0].fileOverlayPlus) {
    overlayPlus.href = data.downloads[0].fileOverlayPlus;
    overlayPlus.innerText = `${data.downloads[0].version} Overlay+ (Latest)`;
  }

  console.log(`
    Hi.
    
    Alt+F4 for a free Necron's Handle. C'mon, we know you want it.

    OK, fine, you called our bluff. Now quit poking around here and go back to finding some funny little quote to screenshot.
  `);
})();
