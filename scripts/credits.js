let container = document.getElementById("credits");
data.credits.forEach((credit) => {
  let wrapper = document.createElement("div");
  wrapper.innerHTML = `
  <a ${credit.link ? `href="${credit.link}"` : ""}>
    <br>
    <h3 style="text-decoration: ${credit.link ? "underline" : "none"};">${
    credit.name
  }</h3>
    ${credit.role}
    <br>
    <i>${credit.quote || "Too wuss to have a quote"}</i>
    <br>
  <a>
    `;
  container.appendChild(wrapper);
});
