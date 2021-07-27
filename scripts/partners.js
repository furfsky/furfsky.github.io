(() => {
  let container = document.getElementById("partners");
  data.partners.forEach((partner) => {
    let wrapper = document.createElement("div");
    wrapper.innerHTML = `
      <h2>${partner.name}</h2>
      <img src="${partner.photo}">
      <h3>${partner.desc}</h3>
      <h3><a href="${partner.link}">${partner.linkText}</a></h3>
      `;
    wrapper.classList.add("indivPartner");
    container.appendChild(wrapper);
  });
})();
