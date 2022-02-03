import { downloads } from '../downloads/downloads.js';

function main() {
  let full = document.getElementById('fullLink');
  let overlay = document.getElementById('overlayLink');
  let overlayPlus = document.getElementById('overlayPlusLink');
  full.href = downloads[0].fileFull;
  full.innerHTML = `Full (${downloads[0].version})`;
  overlay.href = downloads[0].fileOverlay;
  overlay.innerText = `Overlay (${downloads[0].version})`;
  if (downloads[0].fileOverlayPlus) {
    overlayPlus.href = downloads[0].fileOverlayPlus;
    overlayPlus.innerText = `Overlay+ (${downloads[0].version})`;
  }
}

main(); // bootstrap function.
