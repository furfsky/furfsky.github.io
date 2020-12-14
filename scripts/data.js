const data = {
  header: {
    image: "assets/logo.gif",
    subtitle: [
      `Furfsky+ but its reborn`,
      `bottem text`,
      `The second era of Furfsky+`,
      `undefined`,
      `Better than packsHQ`,
      `"ill kill you." -sai`,
      `i wanted free vbucks :(`,
      `"porn is fine, roblox isnt" -furryeboy`,
      `sai is cringe`,
      `"i support racism" - duckiscool`,
      `your toes will be pulled tonight  -pcart`,
      `𝒥𝒶𝓂 𝒶 𝑀𝒶𝓃 𝑜𝒻 𝐹𝑜𝓇𝓉𝓊𝓃𝑒, 𝒶𝓃𝒹 𝒥 𝓂𝓊𝓈𝓉 𝓈𝑒𝑒𝓀 𝓂𝓎 𝐹𝑜𝓇𝓉𝓊𝓃𝑒
      －𝐻𝑒𝓃𝓇𝓎 Æ𝓋𝑒𝓇𝒾𝑒𝓈, 𝟣𝟫𝟫𝟦`,
      `"hitler is cringe lmao" - joseph stalin, 1942`,
      `"This pack is trash" - a bald idiot`,
      `this isn't ending into a furry porn discord we swear`,
      `if you're looking for porn, this is the wrong discord server`,
      `<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">join discord server here</a>`,
      `reload for another message`,
      `Winner of 2020 best pack award.`,
      `<h2>big text</h2>`,
      `Yet another skyblock pack`,
      `please stop posting furry images.`,
      `website by voxal`,
      `boost the server for a cool role`,
      `Furfsky never dies`,
      `<p contenteditable="true">you can edit this text</p>`,

      //   `${fetch("https://discordapp.com/api/guilds/356230556738125824/widget.json")}`
    ],
  }, //make it possible to add more sections
  /**
   * @template
   *{
   *  version:"vX.X.X",
   *  fileFull:"files/§r§lFurfSky §c§lR§6§le§e§lb§a§lo§9§lr§d§ln §8§lFL §8§l[§7X.X.X§8§l].zip",
   *  fileOverlay:"files/§r§lFurfSky §c§lR§6§le§e§lb§a§lo§9§lr§d§ln §8§lOV §8§l[§7X.X.X§8§l].zip"
   *}
   */
  downloads: [
    {
      version: "v1.0.0",
      fileFull:
        "files/§r§lFurfSky §c§lR§6§le§e§lb§a§lo§9§lr§d§ln §8§lFL §8§l[§71.0.0§8§l].zip",
      fileOverlay:
        "files/§r§lFurfSky §c§lR§6§le§e§lb§a§lo§9§lr§d§ln §8§lOV §8§l[§71.0.0§8§l].zip",
    },
  ],
  credits: [
    {
      name: "Saikage",
      link: "https://hypixel.net/members/3250921/",
      role: "Head Artist",
    },
    {
      name: "iDevil4Hell",
      link: "https://hypixel.net/members/3639006/",
      role: "Retired Artist",
    },
    {
      name: "SoshJam",
      link: "https://hypixel.net/members/1196292/",
      role: "Head Artist",
    },
    {
      name: "xOticz_",
      link: "https://hypixel.net/members/3230375/",
      role: "Artist",
    },
    {
      name: "duckiscool69",
      link: "https://hypixel.net/members/2880572/",
      role: "Artist",
    },
    {
      name: "PcArte01",
      link: "https://hypixel.net/members/3394976/",
      role: "Artist",
    },
    {
      name: "PigTurtle",
      role: "Artist",
    },
    {
      name: "resanityyy",
      link: "https://hypixel.net/members/1296806/",
      role: "Artist",
    },
    {
      name: "Perpillow_",
      link: "https://hypixel.net/members/1631725/",
      role: "Artist",
    },
    {
      name: "TrashAtNames",
      link: "https://hypixel.net/members/2765236/",
      role: "Artist",
    },
    {
      name: "Skeletony",
      link: "https://hypixel.net/members/3925718/",
      role: "Artist",
    },
  ],
};

//inject navbar
let navbar = document.createElement("nav")

navbar.innerHTML = `
<ul>
 <li>
  <a href="/"><img src="assets/navbar/home.png" /></a>
 </li>
 <li>
  <a href="/downloads/"><img src="assets/navbar/downloads.png" /></a>
 </li>
</ul>
`
document.body.insertBefore(navbar, document.body.firstChild);
