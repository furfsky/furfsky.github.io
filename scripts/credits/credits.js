import {
  credits,
  packSubmissions,
  creditsRoles,
  testersAssociation,
  problematicFolks,
} from './credits.config.js';

function twemojiUpdate() {
  twemoji.parse(document.body, {
    folder: 'svg',
    ext: '.svg',
  });
}

(() => {
  let container = document.getElementById('credits');
  credits.forEach((credit) => {
    let wrapper = document.createElement('div');
    wrapper.innerHTML = `
  <a ${credit.link ? `href="${credit.link}"` : ''} 
  class="credit"
  ${
    creditsRoles[credit.role]
      ? `style="color:${creditsRoles[credit.role]}"`
      : ''
  }
  target="_blank"
  >
    <br>
    <h3 style="text-decoration: ${credit.link ? 'underline' : 'none'};">${
      credit.name
    }</h3>
    ${credit.role}
    <br>
    <i>${credit.quote || 'is not "quote" there yet'}</i>
    <br>
  <a>
    `;
    container.appendChild(wrapper);
  });
})();
(() => {
  let conTwoner = document.getElementById('noQuoteCredits');
  let otherWrap = document.createElement('div');
  /***
  
  now that we have a #pack-submissions channel, we're going to reserve this part
  for folks who submit stuff that makes it into the pack. don't uncomment this section
  until at least three folks have had their submission(s) added into an FSR release.

  (not that the code wont work with only one or two folks in it, it's just
  that what users see would be grammatically incorrect if we didn't wait)

  [also don't forget to check credits.config.js]

  - Erymanthus
  ***/

  // otherWrap.innerHTML = `<span style="color:#fbcc6c">Thanks to </span>`;
  // let packSubmissionsStr = `<span style="color:#dd8ed4">`;
  // packSubmissions.forEach((quotelessPerson) => {
  //   packSubmissionsStr += quotelessPerson + `, `;
  // });
  // packSubmissionsStr = packSubmissionsStr.slice(0, -2); //removes that trailing comma
  // otherWrap.innerHTML += packSubmissionsStr + `<span style="color:#fbcc6c"> for helping out by making textures during their free time.<br>`;

  otherWrap.innerHTML += `<span style="color:#fbcc6c">Special thanks to </span>`;
  let testersAssocStr = `<span style="color:#ff5098">`;
  testersAssociation.forEach((quotelessPerson) => {
    testersAssocStr += quotelessPerson + `, `;
  });
  testersAssocStr = testersAssocStr.slice(0, -2); //removes that trailing comma
  testersAssocStr += `</span><span style="color:#fbcc6c"> for testing each pack version extensively.<br>Additional thanks to our Discord server boosters and the channel members over at HellCastle and FurryEBoy's YouTube channel for going above and beyond in supporting the pack!<br>Acknowledgements: </span>`;
  otherWrap.innerHTML += testersAssocStr;
  let problematicFolksStr = `<span style="color:#7d6e99">`;
  problematicFolks.forEach((quotelessPerson) => {
    problematicFolksStr += quotelessPerson + `, `;
  });
  problematicFolksStr = problematicFolksStr.slice(0, -2); //removes that trailing comma
  problematicFolksStr += `</span><span style="color:#fbcc6c"> for their previous work on the pack and/or the FurfSky Reborn Discord server.</span>`;
  otherWrap.innerHTML += problematicFolksStr;
  conTwoner.appendChild(otherWrap);
  twemojiUpdate();
})();
