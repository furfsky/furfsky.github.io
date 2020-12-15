let container = document.getElementById("downloadContainer");

data.downloads.forEach((download) => {
  let text = document.createElement("h2");
  let wrapper = document.createElement("section");
  let FLButton = document.createElement("div");
  let OVButton = document.createElement("div");
  text.className = "downloadText";
  text.innerHTML = `${download.version} - ${download.name}`;
  FLButton.className = "downloadButton";
  FLButton.innerHTML = `<a href="${download.fileFull.toString()}" download>v1.0.0 Latest Full</a>`;
  OVButton.className = "downloadButton";
  OVButton.innerHTML = `${download.version} Overlay`;
  wrapper.className = "downloadButtons";
  wrapper.appendChild(text);
  wrapper.appendChild(FLButton);
  wrapper.appendChild(OVButton);
  container.appendChild(wrapper);
});
