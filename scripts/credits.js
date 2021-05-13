(() => {
  let container = document.getElementById("credits");
  data.credits.forEach((credit) => {
    let wrapper = document.createElement("div");
    wrapper.innerHTML = `
  <a ${credit.link ? `href="${credit.link}"` : ""} 
  class="credit"
  ${
    data.creditColors[credit.role]
      ? `style="color:${data.creditColors[credit.role]}"`
      : ""
  }
  target="_blank"
  >
    <br>
    <h3 style="text-decoration: ${credit.link ? "underline" : "none"};">${
      credit.name
    }</h3>
    ${credit.role}
    <br>
    <i>${credit.quote || "is not \"quote\" there yet"}</i>
    <br>
  <a>
    `;
    container.appendChild(wrapper);
  });
})();
