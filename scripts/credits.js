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
(() => {
  let conTwoner = document.getElementById("noQuoteCredits");
  let otherWrap = document.createElement("div");
  otherWrap.innerHTML = `<span style="color:#fbcc6c">Special thanks to </span>`;
  testersAssocStr = `<span style="color:#ff5098">`;
  data.quotelessContribs.testersAssoc.forEach((quotelessPerson) => {
    testersAssocStr += (quotelessPerson + ", ");
  });
  testersAssocStr = testersAssocStr.slice(0, -2); //removes that trailing comma
  testersAssocStr += `</span><span style="color:#fbcc6c"> for testing each pack version extensively.<br>Additional thanks to our Discord server boosters and the channel members over at HellCastle and FurryEBoy's YouTube channel for going above and beyond in supporting the pack!<br>Acknowledgements: </span>`;
  otherWrap.innerHTML += testersAssocStr;

  problematicFolksStr = `<span style="color:#7d6e99">`;
  data.quotelessContribs.problematicFolks.forEach((quotelessPerson) => {
    problematicFolksStr += (quotelessPerson + ", ");
  });
  problematicFolksStr = problematicFolksStr.slice(0, -2); //removes that trailing comma
  problematicFolksStr += `</span><span style="color:#fbcc6c"> for their previous work on the pack and/or the FurfSky Reborn Discord server.</span>`;
  otherWrap.innerHTML += problematicFolksStr;
  conTwoner.appendChild(otherWrap);
})();
