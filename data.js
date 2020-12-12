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
      `"i support racism" - duckiscool`,
      `your toes will be pulled tonight  -pcart`,
      `𝒥𝒶𝓂 𝒶 𝑀𝒶𝓃 𝑜𝒻 𝐹𝑜𝓇𝓉𝓊𝓃𝑒, 𝒶𝓃𝒹 𝒥 𝓂𝓊𝓈𝓉 𝓈𝑒𝑒𝓀 𝓂𝓎 𝐹𝑜𝓇𝓉𝓊𝓃𝑒
      －𝐻𝑒𝓃𝓇𝓎 Æ𝓋𝑒𝓇𝒾𝑒𝓈, 𝟣𝟫𝟫𝟦`,
      `"hitler is cringe lmao" - joseph stalin, 1942`,
      `"This pack is trash" - a bald idiot`,
      `this isn't ending into a furry porn discord we swear`,
      `if you're looking for porn, this is the wrong discord server`,
      `<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">join discord server here</a>`,
      `${fetch("https://discordapp.com/api/guilds/356230556738125824/widget.json")}`
    ],
  },
  artists: [
    {
      name: "Saikage",
      link: "https://hypixel.net/members/3250921/",
    },
    // {
    //   name: "iDevil4Hell",
    //   link: "https://hypixel.net/members/3639006/",
    // },
    {
      name: "SoshJam",
      link: "https://hypixel.net/members/1196292/",
    },
    {
      name: "xOticz_",
      link: "https://hypixel.net/members/3230375/",
    },
    {
      name: "duckiscool69",
      link: "https://hypixel.net/members/2880572/",
    },
    {
      name: "PcArte01",
      link: "https://hypixel.net/members/3394976/",
    },
    {
      name: "PigTurtle",
    },
    {
      name: "resanityyy",
      link: "https://hypixel.net/members/1296806/",
    },
    {
      name: "Perpillow_",
      link: "https://hypixel.net/members/1631725/",
    },
    {
      name: "TrashAtNames",
      link: "https://hypixel.net/members/2765236/",
    },
    {
      name: "Skeletony",
      link: "https://hypixel.net/members/3925718/",
    },
  ],
};

//actual nerdy code down here.

document.getElementById("logo").src = data.header.image;
document.getElementById("headerSubtitle").innerHTML =
  data.header.subtitle[Math.floor(Math.random() * data.header.subtitle.length)];
