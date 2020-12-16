(() => {
  let container = document.getElementById("downloadContainer");

  data.downloads.forEach((download) => {
    let text = document.createElement("h2");
    let wrapper = document.createElement("section");
    let FLButton = document.createElement("div");
    let OVButton = document.createElement("div");
    text.className = "downloadText";
    text.innerHTML = `${download.version} - ${download.name}`;
    FLButton.className = "downloadButton";
    FLButton.innerHTML = `<a href="${download.fileFull.toString()}" download>${
      download.version
    } Full</a>`;
    OVButton.className = "downloadButton";
    OVButton.innerHTML = `<a href="${download.fileOverlay.toString()}" download>${
      download.version
    } Overlay</a>`;
    wrapper.className = "downloadButtons";
    wrapper.appendChild(text);
    wrapper.appendChild(FLButton);
    wrapper.appendChild(OVButton);
    container.appendChild(wrapper);
  });
})();
