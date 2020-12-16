const data = {
  header: {
    image: "",
    subtitle: [
      `Furfsky+ but its reborn`,
      `bottem text`,
      `The second era of Furfsky+`,
      `undefined`,
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
      `life is short like my pp -Swaftworth`,
    ],
  },
  downloads: [
    {
      version: "v1.0.0",
      name: "FULL RELEASE",
      fileFull:
        "/files/v1.0.0/§r§lFurfSky §c§lR§6§le§e§lb§a§lo§9§lr§d§ln §8§lFL §8§l[§71.0.0§8§l].zip",
      fileOverlay:
        "/files/v1.0.0/§r§lFurfSky §c§lR§6§le§e§lb§a§lo§9§lr§d§ln §8§lOV §8§l[§71.0.0§8§l].zip",
    },
    {
      version: "v0.2.0",
      name: " F7 and Jacob Events",
      fileFull: "/files/v0.2.0/§6Furf§5Sky §eReborn §8§lFL [§70.2.0.§8§l].zip",
      fileOverlay:
        "/files/v0.2.0/§6Furf§5Sky §eReborn §8§lOV [§70.2.0.§8§l].zip",
    },
  ],
  credits: [
    {
      name: "FurryEboy",
      link: "https://www.youtube.com/channel/UC2GO6UL1OEC0Lk35bhMtNRQ",
      role: "Manager",
      quote: "porn is fine, roblox isn't",
    },
    {
      name: "Saikage",
      link: "https://hypixel.net/members/3250921/",
      role: "Head Artist",
      quote: "mmmf fuck me daddy uwu",
    },
    {
      name: "SoshJam",
      link: "https://hypixel.net/members/1196292/",
      role: "Head Artist",
    },
    {
      name: "iDevil4Hell",
      link: "https://hypixel.net/members/3639006/",
      role: "Retired Artist",
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
      quote: "your toes will be pulled tonight",
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
      name: "Perpillow",
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
    {
      name: "voxal",
      link: "https://vooxal.github.io", // update this bitch, its so old and bad
      role: "Website Developer",
      quote: "ugh pain, everything is pain",
    },
    {
      name: "parakeetiscool",
      role: "Head Moderator",
      quote: "you wet tubesock",
    },
    {
      name: "SeBook",
      link: "https://www.youtube.com/channel/UCFeGrtZbI6miqtdWiph_D3Q",
      role: "Moderator",
      quote: "sebook is the best mod",
    },
    {
      name: "Festive_bread",
      role: "Moderator",
      quote:"if you do not like bread your existence in the fourth dimension is illegal"
    },
    {
      name: "tea",
      role: "Moderator",
      quote: "imagine not wanting fatfuck's opinion",
    },
    {
      name: "Festive_Pig",
      role: "Moderator",
    },
  ],
};

//inject navbar
let navbar = document.createElement("nav");

navbar.innerHTML = `
<ul>
 <li>
  <a href="/">
    <img 
    src="/assets/navbar/home.png" 
    onmouseover="this.src='/assets/navbar/home_pressed.png'"
    onmouseout="this.src='/assets/navbar/home.png'"
    />
  </a>
 </li>
 <li>
  <a href="/downloads/">
    <img 
    src="/assets/navbar/downloads.png" 
    onmouseover="this.src='/assets/navbar/downloads_pressed.png'"
    onmouseout="this.src='/assets/navbar/downloads.png'"
    />
  </a>
 </li>
 <li>
  <a>
    <img 
    src="/assets/navbar/gallery.png" 
    onmouseover="this.src='/assets/navbar/gallery_pressed.png'"
    onmouseout="this.src='/assets/navbar/gallery.png'"
    onclick="alert('Under Construction!')"
    class="disabled-tab"
    />
  </a>
 </li>
 <li>
   <a>
     <img 
     src="/assets/navbar/credits.png" 
     onmouseover="this.src='/assets/navbar/credits_pressed.png'"
     onmouseout="this.src='/assets/navbar/credits.png'"
     onclick="alert('Under Construction!')"
     class="disabled-tab"
     />
  </a>
</li>
</ul>
`;
document.body.insertBefore(navbar, document.body.firstChild);
//meta tags

document.head.append();
