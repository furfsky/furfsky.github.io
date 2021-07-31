(() => {
  let container = document.getElementById("downloadContainer");
  data.addons.forEach((addon) => {
    let text = document.createElement("h2");
    let wrapper = document.createElement("section");
    let addonButton = document.createElement("div");
    let addonButtonTwo = document.createElement("div");
    text.className = "downloadText";
    addonButton.className = "downloadButton";
    addonButtonTwo.className = "downloadButton";
    text.innerHTML = `${addon.name}`;
    if (addon.title)
    text.innerHTML += ` <span class="addonTitle">[${addon.shortSuffix ? addon.shortSuffix : `!`}]<span>${addon.title}</span></span>`;
    if (addon.fileLink) addonButton.innerHTML = `<a href="${addon.fileLink.toString()}" download>${addon.shorterName}</a>`;
    if (addon.fileLinkTwo) addonButtonTwo.innerHTML = `<a href="${addon.fileLinkTwo.toString()}" download>${addon.shorterNameTwo}</a>`;
    wrapper.className = "downloadButtons";
    wrapper.appendChild(text);
    if (addon.fileLink) wrapper.appendChild(addonButton);
    if (addon.fileLinkTwo) wrapper.appendChild(addonButtonTwo);
    container.appendChild(wrapper);
  });
})();

var tooltips = document.querySelectorAll('.addonTitle span');

window.onmousemove = function (e) {
    var x = (e.clientX) + 'px',
    y = (e.clientY) + 'px';
    for (var i = 0; i < tooltips.length; i++) {
      tooltips[i].style.top = y;
      tooltips[i].style.left = x;
    }
};