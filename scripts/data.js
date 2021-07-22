const date = new Date();
/* Commenting out unused variable till it gets a use (so it doesn't get evaluated and stored in-memory for nothing) */
// const isMobile =
//   /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
//     navigator.userAgent
//   ) ||
//   /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br[ev]w|bumb|bw-[nu]|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do[cp]o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly[-_]|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-[mpt]|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c[- _agpst]|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac[ -\/]|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja[tv]a|jbro|jemu|jigs|kddi|keji|kgt[ \/]|klon|kpt |kwc-|kyo[ck]|le(no|xi)|lg( g|\/[klu]|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t[- ov]|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30[02]|n50[025]|n7(0[01]|10)|ne([cm]-|on|tf|wf|wg|wt)|nok[6i]|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan[adt]|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c[-01]|47|mc|nd|ri)|sgh-|shar|sie[-m]|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel[im]|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c[- ]|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
//     navigator.userAgent.substr(0, 4)
//   );
const pressToMoveQuotes = (quotes) => {
  let quoteIndex = -1;
  const quote = document.getElementById("headerSubtitle");
  quote.innerHTML = `Right arrow key to start.<br>Left arrow key to rewind.<br>Shift + R keys to restart.<br>Mobile device users, get good.`;
  const keyPressed = (event) => {
    switch (event.key) {
      case "R":
        quoteIndex = 0;
        quote.innerHTML = quotes[quoteIndex];
        break;
      case "ArrowRight":
        if (quoteIndex >= quotes.length - 1) {
          quoteIndex = quotes.length;
          quote.innerHTML = `You've reached the end.<br>Press the left arrow key to go back, or Shift + R to start again.`;
        } else {
          quoteIndex++;
          quote.innerHTML = quotes[quoteIndex];
        }
        break;
      case "ArrowLeft":
        if (quoteIndex <= 0) {
          quoteIndex = -1;
          quote.innerHTML = `You've reached past the beginning.<br>Press the right arrow key to go back.`;
        } else {
          quoteIndex--;
          quote.innerHTML = quotes[quoteIndex];
        }
        break;
    }
  };
  window.addEventListener("keyup", keyPressed);
};
const foxScriptScroll = (veryLongString) => {
  const quoteNode = document.getElementById("headerSubtitle");
  if (!quoteNode) return;
  quoteNode.style.maxHeight = '200px';
  quoteNode.style.overflowY = 'hidden';
  quoteNode.textContent = veryLongString;
  let scrollPosition = 5;
  setInterval(() => {
    quoteNode.scrollTo({ top: scrollPosition, behavior: 'smooth' })
    scrollPosition = scrollPosition + 5
  }, 100)
};
const data = {
  header: {
    image: "",
    subtitle: [
      `Furfsky+ but its reborn`,
      `bottem text`,
      `The second era of Furfsky+`,
      `undefined`,
      `i wanted free vbucks :(`,
      `"light geometry can die in a hole."<br>-smolegit`,
      `your toes will be pulled tonight<br>-pcart`,
      `𝒥𝒶𝓂 𝒶 𝑀𝒶𝓃 𝑜𝒻 𝐹𝑜𝓇𝓉𝓊𝓃𝑒, 𝒶𝓃𝒹 𝒥 𝓂𝓊𝓈𝓉 𝓈𝑒𝑒𝓀 𝓂𝓎 𝐹𝑜𝓇𝓉𝓊𝓃𝑒<br>－𝐻𝑒𝓃𝓇𝓎 Æ𝓋𝑒𝓇𝒾𝑒𝓈, 𝟣𝟫𝟫𝟦`,
      `"This pack is trash"<br>-a bald idiot`,
      `<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">join discord server here</a>`,
      `reload for another message`,
      `<h2>big text</h2>`,
      `Yet another skyblock pack`,
      `please stop posting furry images.`,
      `website by voxal<br><small>(and for now, maintained by erymanthus)</small>`,
      `boost the server for a cool role`,
      `5261796D6F6E6420486F6C74`,
      `46 75 72 66 53 6B 79 20 52 65 62 6F 72 6E`,
      `Pretend inferiority and encourage his arrogance.<br>–Sun Tzu`,
      `B99S5E17`,
      `Furfsky never dies`,
      `skyblock nerds apps are open btw`,
      `we're trying to get an ssl cert for https support please stop pestering us`,
      `Avocados 🥑 from Mexico 🇲🇽`,
      `"i realised i haven't blinked in like half an hour and now blinking feels uncomfortable"<br>-goog`,
      `<p contenteditable="true">you can edit this text</p>`,
      `i do love buying birth certificates from the black market<br>-goog`,
      `who needs packs hq anyways<br>-Perpillow`,
      `the only cookies allowed on this website are booster cookies`,
      `did you do your experiments yet?`,
      `god i just hate reality`,
      `We have a lot of e-girls here`,
      `why does the discord server exist`,
      `I purchased a baby clown from the Russian terrorist black market.`,
      `I don’t support furry rights, but I do support this server`,
      `even more cursed than the original!`,
      `"For Furries by Furries"`,
      `Furfsky reborn - now with more shit, just worse.`,
      `Now with 56% more shitposting!`,
      `“Is this the United Airlines costumer service center?”`,
      `He stomped on his fruit loops and thus became a cereal killer.`,
      `"<i>You can murder kids, because there's a point in murdering kids,<br>But lying, There's no reason to lie, Only bad people lie. Killing Children is okay though.</i>"<br>-Technoblade September 30th, 2014`,
      `why do they call it oven if you oven the cold food of out hot eat the food`,
      `Help im locked in a data center`,
      `what`,
      `Never half-ass two things. Whole-ass one thing.`,
      `Now works with Wynncraft!`,
      `i can smell your fear through the screen`,
      `we will steal your ip and sell it to china`,
      `we will steal your china and sell it to ip`,
      `i haven't left my house since furf posted on the forums!`,
      `i havent left my house, tyler refuses to let me out!`,
      `help, im locked in the basement`,
      `i havent left my house pls help me i'm hungry`,
      `fuck`,
      `Think, Tyler!<br><br>You're asking for this site's quotes to consist entirely of FSR Discord inside jokes!<br>Why do you think I started adding quotes from TV shows?`,
      `Is this illegal?`,
      `<span style="font-size:50px">https://discord.com/channels/771187253937438762/772844452116824106/789595450306592798</span>`,
      `furryegirl`,
      `furryeboy AR racing simulator`,
      `The furrier the better<br>-Penguin`,
      `oh no`,
      `the pack that smiles back`,
      `“<i>Remember, life is what you make of it. Even if you are feeling down, you will get back up, Even though you did something bad, things will get better. Just because you came on your nice shoes in the bathroom at school, probably nobody will notice.</i>“<br>-Shrek’s Mom`,
      `I regret joining`,
      `If you are trash go cry to Fortnite you loser<br>-Sun Tzu, Art of war`,
      `this is the worst thing to happen to humanity`,
      `Gib coin pls I new`,
      `OMG YOUTUBER GIVE COIN!!!1!!!11111!!`,
      `gif bezos`,
      `Making websites is hard`,
      `<span style="font-size:2px">Honestly, it's unfathomable how some gamers are so much better at gaming than us simpletons. Take Minecraft, for example. There are people who get mad at dying while completing the entire game. Their standards are so high that they would ragequit out of rage when they die after over an hour of challenging frame perfect and subpixel perfect inputs. Me, I can't even make a wood shovel. It's ridiculous how good those top notch gamers have gotten at this video game to even consider getting all of the achievements in one sitting. They must've trained and practiced at this game for numerous hours each day, pouring every ounce of effort they have into perfecting their finger movements, touching the keys on their keyboard with precision unmatched by anything else. Such dedication going unnoticed in the general public is unfair, and I feel like those gamers deserve all the recognition they can get</span>`,
      `The fur-suit is mandatory`,
      `you fool you blongus you absolute utter clampongus`,
      `ooga booga`,
      `If I drop soap on the ground, is the soap dirty, or am I utterly screwed?`,
      `doodoo woohoo`,
      `it do be like that`,
      `<span style="font-size:3px;">moulberry bush man is swag man with big pp and huge brain he is like the god of the gods and he has gaming skin and stuff he plays with 1000iq and is like omg moulberry moment i sometimes wonder what is a moulberry is it berry or is a it a moul or maybe its a moulberry i guess we will never know and like moul is like omg MOUL its very cool and swag he has like huge balls and stuff too and he's like super funny and shit too he also has cool australian accent like my life without moulberry wud be incomplete i need moulberry in my life he's god he's life he's moulberry but he's not a blueberry if he was a blueberry it wouldve been cooler since like blueberries are cooler but it is what it is he has 46203 simps already and that number grows everyday and i wonder if one day he will have 100 thousands simps i mean knowning moulberry he probably will but then again ppl are dumb and they dont understand the power of the berry and havent joined the server like why are you why do u you even live i question this all day long and sometimes i think that i might be too obsessed with moulberry but then i realize you can never be too upset by the berry himself it gives me the will to live moulberry is the reason im still here the day moulberry leaves my life i will commit die i can not live without the moulberry and his big pp.</span>`,
      `furf is into mice`,
      `I will turn you and your family into raisins<br>-aGrxpe`,
      `The Discord channel this insanly-funny-website-quote was createt, has an insably long slow mode, so it's pain when you get another good idea afert you send another one.`,
      `🙃🔫`,
      `yikes, I love it<br>-SulamiWizard`,
      `THATS CONK CREAT BABEY!!!!!!!<br>-FurryEboy`,
      `Lets get youtube rank guys! 7/30000`,
      `furf good hq bad`,
      `Lua gets AN EASY F TIER FROM ME`,
      `i captured this site in my basement`,
      `who doesn't enjoy a scrumptious load of a table for breakfast`,
      `Who needs love when you have FurfSky Reborn!`,
      `God is a woman`,
      `The texture pack Dream used to be "lucky"! Many RNGesus drops guaranteed!`,
      `bill nye the science guy`,
      `No furries allowed`,
      `I miss the old Skyblock days. But my aim is getting better! *plays laugh track*`,
      `<span tabindex="-1" role="button" style="border-radius: 3px; padding: 0 2px; font-weight: 500; color: #7289da; background: rgba(114,137,218,.1); position: relative;">@everyone</span>`,
      `<span tabindex="-1" role="button" style="border-radius: 3px; padding: 0 2px; font-weight: 500; color: #7289da; background: rgba(114,137,218,.1); position: relative;">@here</span>`,
      `pings make your quote less likely to be added >:(`,
      `This discord is going to hell`,
      `thanks i ${Math.random() > 0.5 ? "hait" : "hate"} it`,
      `made possible by wix`,
      `A titanium ore spawned nearby!<br>Wait, never mind. That was just bird shit.`,
      `😱 5 STAR DREAM HEAD IS INSANE FOR FLOOR 3 OMG WTFA FASJDHASBDGAS<br>—aGrxpe`,
      `i dont want to be a furfsky reborn artist, i just want to be happy`,
      `i want to be less depresed and have a girlfriend. also a life.`,
      `there is no meme download this pack`,
      `thats it, im done, im muting this page, everytime i read a quote here my brain dies by tiniest percentage<br>-pig`,
      `9/10 would f3+t again`,
      `Shadow Fury shits on Livid Dagger<br>—genesis`,
      `do not go into motor's garage<br>WORST MISTAKE OF MY LIFE`,
      `"Have a nice day", they say.<br>"I’m going to commit vehicular manslaughter", I say.<br>—Strxfe`,
      `Due to extensive research, the second coming of Christ cannot do an ollie. However, you can do an ollie double X triple balooga extreme if you download the pack.`,
      `<span style="color: #FFAA00;">RARE DROP!</span> <span style="color: #FFFFFF">Carrot</span> <span style="color: #55FFFF">(+300% Magic Find!)</span>`,
      `your wifi password is probably along the lines of "170sb45ltngX3331458tdq314w".<br>now go download the pack.`,
      `so we gave an aimbot a paintbrush`,
      `Invest in Dunder Mifflin it's a guaranteed investment.`,
      `ix`,
      `"help why are people boning me"<br><br>-Moulberry, concerned about people throwing Bonemerangs at him`,
      `imagine if the 10kth server member was furf himself coming in to flip us off<br>—erymanthus<br><br><small>(this, fortunately, aged quite poorly.)</small>`,
      `I grant my divine permission to continue the pack that I had lacked the willpower to continue due to being too poor in-game to draw every item lmao<br>-Furf himself`,
      `sometimes i question why artists that are as good as the people here are making art for mc<br>—MyPancakes`,
      `sell your soul to tyler for free fortnite vbucks`,
      `the website creator is actually an ai designed by the cia to track weebs that play skyblock and exterminate them`,
      `What if you wanted to go to heaven, but God said<br><span style='color:#FF5555;'>Couldn't warp you! Try again later!</span> <span style="color:#AAAAAA;">${
        Math.random() > 0.5
          ? "(NO_DESTINATION_FOUND)"
          : "(SERVERS_DID_NOT_ACCEPT)"
      }</span>`,
      `After using this pack, I started getting SO many more matches on tinder`,
      `If energy can't be destroyed, and atoms are energy, then yes your honor, she was in fact of age`,
      `fuck everyone who pings voxal`,
      `download neu mod nerds<br>—tomengmaster`,
      `electron microscopes are incapable of sensing color due to their operational nature, so color would have to be added in post<br>-Temp`,
      `The lego man sits in the lego brick house. Is the house made of flesh, or is he made of house? He screams, for he does not know.`,
      `can this entire photo (stolen from hellcastle + furryeboy server) be a quote<br>-erymanthus`,
      `add what erymanthus said as a quote, but dont include the image<br>-furryeboy`,
      `BEWARE GOOSE: he will hijack your plane`,
      `can someone tell me in a week that my belle delphine onlyfans subscription will run out thanks`,
      `Gallery arriving in 2025`,
      `me while updating my software`,
      `divorce is more economically effective given you have a prenup`,
      `i still hear the screams in the background 2/10`,
      `;dlosfkjniosdj;nhgfv`,
      `macarena`,
      `macadamia nut`,
      `"nuts"<br>-axolotlite`,
      `oilpanic more like waterrelax`,
      `tfw an extra crispy crocodile gets bullied for creating whatever the fuck she wants without expecting validation only to have it backfire`,
      `salty frosted flakes`,
      `hallways fucking stink`,
      `stop refreshing and look at dn`,
      `/dn`,
      `j`,
      `the j`,
      `this pack does not cater to folks who choose to offend any member or ally of the LGBTQ2IA+ community under any circumstances.<br>if this applies to you, please go /play pit instead.`,
      `greetings reduced in scale (but in an endearing diminuative slang) line between vertex pronoun (used to refer to inanimate objects)`,
      `sausagedog i will pull out my fucking debit card and buy you MVP++ if you don't shut up<br>-Erymanthus`,
      `some folks be like "oMg EdGy HuMoR hAHaHa!1!1!1!1" and then everyone else is saying "Dude, what the fuck? You don't even need to go outside, just<i> go to the fucking kitchen and take a goddamn one minute breather, for fuck's sake!</i>"`,
      `i can't believe i have to summarize discord server shenanigans while 400 meters away from the white house<br>-Erymanthus`,
      `ery stalking mr biden i see<br>-Daedalus, 2021`,
      `thank God i found a bench under a tree in the president's park because I NEED SOME SHADE`,
      `please make me defile this discord server`,
      `do not do /stuck<br>worst mistake of my life`,
      `"[iphone] was boring"<br>-Infinity`,
      `thanks to all the whitespace voxal added to the quotes database, it grew by 400+ lines and is now 10x harder to navigate on github mobile<br>-Erymanthus`,
      `White trash kingdom with an ocean view<br><br><small>(This is presumably a song lyric, ping Erymanthus if this should be removed)</small>`,
      `When given the choice between committing a crime or going to WalMart, I chose to commit a crime.<br>-Daedalus`,
      `the burning child had sunglasses.`,
      `daedalus dropkicks people while flying through the air at 70kmph`,
      `why isnt everyone a furry`,
      `Officer, you've got to understand, I dropkicked that child in self defense!`,
      `<span style="font-size:15px">lzXJCkxsjkschgnwqf dgnhuef whif eihjm ehfmiwilh fhlui m ghilm ghlg rhlgrw qhlgr lgr rg ilmrg jlmrgw hlmrwgfe ihmef jmiijmfrew ifehm uhdeq ihmefw ihmfr rjk;e, jk,;rg jlr,kve grjlk,e ;hmv hmlvw hm v;vh jmli;jmlk vwilf rwom;fe wenikhl;v ilnfew lhi;ngewf hlinjdef hnldfw khl;fe wqlkh;few hlkfwd lhkj; fdwhkl; hflj;dwf whjl;dfdw hfe xwhnkulewhufhuefwewfjli mqwreg ;lkjmegdf 'l;kjoij;qelv';fdkj mqevf ';jlksdfb m;'jlkdfv ;lkmkjhlgdasc asdvkj lhbasdv lkhbj</span>`,
      `<span style="font-size:20px">09   m,k nmj aQsZDXFCGVBN AZkjnhbnjl;,mncfcv bvcx-cv bnnnnnnnnnnnnmknbvcgybbvbvbnbn bn jmknjbhgvhjnnmjnmnbhgvfhnjmkllkjhnbvg bbghjnmk,l;lkojhvvbghjk;'polikj</span>`,
      `"ery just had a heart attack incredible"<br>-PcArt01`,
      `Flip a coin. If heads, I am on vacation. If tails, blame Ery.`,
      `god has left the artists alive another day and its my job to make sure you fucking know about it`,
      `Using FurfSky Reborn does not give any disallowed advantages on Hypixel. However, you can get scammed 1000x harder by downloading this pack.`,
      `epicly failed to embed PHQ's corpse into the grave`,
      `<a href="https://discord.gg/fsr">join discord server here</a>`,
      `<span style="font-size:25px">aHR0cHM6Ly9ncmFoYW1saW5laGFuLnN1YnN0YWNrLmNvbS9wL3NvbWV0aGluZy1yb3R0ZW4tYXQtdGhlLWhlYXJ0LW9m</span>`,
      `<span style="font-size:12px">hihowareyouimdeadbutnotreallythatsjustmynameinaselectgroupofserversjesusifeelenergizeditsthecocaineisntit</span>`,
      `<span style="font-size:2px">I summon thee, lord of darkness and the embodiment of all suffering, from the depths of the underworld. Your holy form looks down upon all those who oppose you. Your power over the forces of evil and shadow are limited only by the fear of your enemies. How beautiful you are, glistening with blood and malice, your eyes filled with the urge to kill. You are a true villain. Rise, for you are the master. The Master of the Wicked.</span>`,
      `<span style="color: #FF5555;">☠ LGenes1S was killed by Skeleton Soldier and became a ghost.</span>`,
      `<span style="color: #FF5555;">☠ LGenes1S was killed by Skeleton Master and became a ghost.</span>`,
      `<span style="color: #FF5555;">☠ LGenes1S was killed by Fels and became a ghost.</span>`,
      `<span style="color: #FF5555;">☠ LGenes1S was killed by Bigfoot and became a ghost.</span>`,
      `<span style="color: #FF5555;">☠ LGenes1S was killed by Withermancer and became a ghost.</span>`,
      `<span style="color: #FF5555;">☠ LGenes1S was killed by Terracotta and became a ghost.</span>`,
      `<span style="color: #FF5555;">☠ LGenes1S was killed by Sadan and became a ghost.</span>`,
      `<span style="color: #FF5555;">☠ LGenes1S was killed by Frozen Adventurer and became a ghost.</span>`,
      `<span style="color: #FF5555;">☠ LGenes1S died to a trap and became a ghost.</span>`,
      `<span style="color: #AA0000;">why did we make the owner a furry</span>`,
      `Now with 100% less Skeletony`,
      `If anyone ever combine anything 32x into a 16x pack or the opposite, i instantly despise them<br>-Glenz`,
      `dreese`,
      `What's a crossguard?`,
      `Bad news first; the good news is probably a lie.`,
      `"<i>Some jobs take brains, some jobs take muscles, some jobs take <small>dainty little fingers.</small></i>"<br>-Charles Boyle`,
      `poopoo`,
      `nothing to see here, just a little hypoglycemic rage, move along`,
      `bitch, you know i'm out of data`,
      `"urmom"<br>-tea`,
      `:pog:`,
      `tra la laaa`,
      `“Aw, man. All the orange soda spilled out of my cereal.”<br>-Jake Peralta`,
      `if you get killed what happens to all your debt`,
      `noice`,
      `life's a party and i'm the pinata`,
      `what is the bandwidth on the wifi here we have much <i>content</i> to stream`,
      `A place where everybody knows your name is hell.`,
      `yippie kayak other buckets`,
      `"looks like im about to break the law"<br>-phq mains wondering where their mod uis are, as well as jake peralta`,
      `"hey, you could pour soup in my lap and i'll probably apologize to you!"<br>-erymanthus as well as john mulaney`,
      `so the hospital called and diagnosed you with stage five dumbass for not downloading the pack`,
      `<span style="color: #FF5555;">Time</span><span style="color: #FFFFFF;">Deo</span> approved!<br>(he has not, tyler lied.)`,
      `<span style="color: #FFAA00;">Furf</span><span style="color: #AA00AA;">Sky+</span>, but its <span style="color: #FFAA00;">Reborn</span> <span style="color: #FFFFFF;">:o</span>`,
      `Now with 100% less +'s`,
      `:(<br>-Juniper`,
      `Hello! I'm done with CSGO and give all my inventory, the first three who send a trade - I will give a knife ;)`,
      `FSR GOBLIN ARMOR<br><br>BOTTOM TEXT`,
      `${Math.random() > 0.5 ? "JustEnoughDungeons" : "jed"} is bad`,
      `404 unoriginality not found`,
      `the pack timedeo uses if he were sweatier`,
      `A man is not a financial plan.`,
      `"just watched black panther and 38 mins in they make a what r those joke"<br>-NWT`,
      `If I had spent more time studying and less time watching anime, maybe my mother would be here with me!<br>-Scarf`,
      `zoo wee mama`,
      `goog was here uwu`,
      `i do and they dont`,
      `...she asked as if she cared.`,
      `Live from New York, it's Saturday Night!`,
      `"Ooh, self burn! Those are rare!"<br>-Jake Peralta`,
      `wflaffle or pnacakae?<br>${Math.random() > 0.5 ? "-zburger" : "-rebmE"}`,
      `(paraphrased transcript of voice channel session)<br><br>"what if ery just lurks in vcs for website quotes"<br>-rebmE`,
      `<span style="color: #555555;">We have so much brain deficiency, it rolls over the integer bit limit and becomes a brain surplus.</span>`,
      `microwaves are just concentrate chernobyl cubes`,
      `what's a canada`,
      `CarbonSmasher: When you are feeling down, just remember, quantum mechanics say that in some reality, there is a version of you that is successful.<br>Temp: Actually, quantum mechanics forbids this.`,
      `the earth is not flat, it's a rectangular prism`,
      `"Doom music makes me want to tell the IRS that I won't pay taxes."<br>-HellCastle`,
      `shut up motor no one cares that you "backpacked for 20 miles uwu"`,
      `indexed vs rgb what the hell is the difference`,
      `these are getting harder and harder to write`,
      `Now with 100% more goog! (yayyy)`,
      `help tea is shouting animal sounds at me`,
      `since when did the outlines on the reforge stones get removed`,
      `"hot mama"<br>-Motor`,
      `number one victory royale, yeah fortnite we bout to get down<br>10 kills on the board right now just wiped out tomato town`,
      `"I hate myself"<br>-Juni`,
      `why am i still playing this game`,
      `whats popping`,
      `k imma listrn t oi song and slweo d oe now`,
      `haha yes time to get 250k coins from a golden jerry box`,
      `hey uh, we need to borrow your valkyrie, to, uh, make sure that our texture pack works`,
      `I ate a shoebox.`,
      `your call is very important to us. please stay on the line.`,
      `it's one thing to complain about how the logo's been colored for pride month, but to criticize its mere <u>existence</u> shows <i>your</i> true colors.`,
      `umhh uhhm uh uh um um uh uhhm`,
      `gradient, no hueshift, bad colors, no contrast, too much contrast, bad anim, mixels, spiky outline, thick outline, bad shading, confusing light geometry, use a palette`,
      `update optifine, get patcher, stop using badlion or lunar, enable custom items, remove orange's animations, play in 1.8.9, <span tabindex='-1' role='button' style='border-radius: 3px;padding: 0 2px;font-weight: 500;color: #7289da;background: rgba(114,137,218,.1);position: relative;'>#pack-faq</span>, <span tabindex='-1' role='button' style='border-radius: 3px;padding: 0 2px;font-weight: 500;color: #7289da;background: rgba(114,137,218,.1);position: relative;'>#mod-ui-faq</span>, terrain animations, no i will not change an original furfsky texture`,
      `Stop begging for shit in <span tabindex='-1' role='button' style='border-radius: 3px;padding: 0 2px;font-weight: 500;color: #7289da;background: rgba(114,137,218,.1);position: relative;'>#skyblock</span>.<br>It's not funny, nor does it help anyone.`,
      `goog`,
      `also try snowfault 16x!`,
      `Secrets should not be required for S+ dungeons runs in Hypixel SkyBlock. Rather, players should be rewarded for teamwork and defeating more difficult boss mobs with special attack patterns (ex Rev T5), not right clicking stupid boxes in the wall. Over 15k voters would agree.`,
      `sEcReTs sHoUlD NoT Be rEqUiReD FoR S+ dUnGeOnS RuNs iN HyPiXeL SkYbLoCk. RaThEr, PlAyErS ShOuLd bE ReWaRdEd fOr tEaMwOrK AnD DeFeAtInG MoRe dIfFiCuLt bOsS MoBs wItH SpEcIaL AtTaCk pAtTeRnS (eX ReV T5), nOt rIgHt cLiCkInG StUpId bOxEs iN ThE WaLl. OvEr 15k vOtErS WoUlD AgReE.`,
      `[THIS QUOTE WAS REDACTED BY THE LOCAL AUTHORITIES]`,
      `FlexPack! The only pack you'll ever need!<br>Now that's a lot of damage!`,
      `Made for that lowpixel groundblock whatsitsname`,
      `yes`,
      `"my tongue hurts and i am very irritated"<br>-goog`,
      `yanny`,
      `laurel`,
      `yanny or laurel`,
      `covfefe`,
      `white and gold or black and blue`,
      `the dress was white and gold`,
      `the dress was black and blue`,
      `the josh fight was... interesting.`,
      `name backwards is eman`,
      `TaumatawhakatangihangakoauauoTamateahaumaitawhitiurehaeaturipukakapikimaungahoronukupokaiwhenuakitanatahu`,
      `Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu`,
      `Taumatawhakatangihangakoauauotamateaurehaeaturipukakapikimaungahoronukupokaiwhenuakitanatahu`,
      `Taumatawhakatangihangakoauauotamateapokaiwhenuakitanatahu`,
      `trust no one, except your Land Rover Range Rover Evoque 2.0 TD4 E-Capability 4x4 HSE Dynamic`,
      `Bruce, its been 5 years. You still owe me 16 dollars.`,
      `AUTHORIZED PERSONNEL ONLY BEYOND THIS POINT.`,
      `once sponsored by the suffering of 14 innocent souls before we set them free`,
      `please do not click on the patreon logo we are looking into replacing it with a youtube logo`,
      `what the fuck is an svg path`,
      `Don't cry about the pride logo at all and celebrate diversity like a normal person, please.`,
      `Go cry about the pride logo privately and have a nice day.`,
      `NO HATE SPEECH ALLOWED BEYOND THIS POINT.`,
      `I WASN GONNA pay em after bitch so maybe can u try to read`,
      `area 51`,
      `Was I wearing a tiara when I came in here? Because if you happen upon it, would you have Lady Pennyface retrieve it and send it post-hence?`,
      `everything hurts and im dying`,
      `despacito`,
      `runnin' in the '90s`,
      `bitches get stuff done`,
      `don’t start chasing applause and acclaim. that way lies madness.`,
      `give 100%. 110% is impossible. only idiots recommend that.`,
      `if i keep my body moving and my mind occupied at all times i will avoid falling into a bottomless pit of despair`,
      `bababooey`,
      `<i>lit</i>erally the best pack`,
      `i... sad.`,
      `hi guys, I'm leaving this fucking game, take my skins (only one), i confirm all exchanges, there won't be enough for everyone, so don't be offended.. https;//badlyorthographiedsteamcommunity.rubecauseitsalwaysfromrussiansforsomereason`,
      `are ya winning son?`,
      `Welcome to the parking lot`,
      `why am i argentina`,
      `jarvis, ignore their argument, send them a picture of their house, reply with "xd"`,
      `jarvis, ignore the picture of my house, send them a picture of their ${Math.random() > 0.5 ? "eggplant" : "banana"}, reply with "dx"`,
      `*d(length)/dx = -0.1`,
      `furfsky has not become a dumpster fire, possibly because it was one to start with`,
      `:3 quirky haha <i>shits on youw quawity of wife</i>`,
      `:3`,
      `8)`,
      `xd`,
      `youre going to brazil`,
      `sp0ns0r'd by raid shadow legends`,
      `was that the bite of 87`,
      `oh my god go outside`,
      `luck is a concept created by the weak to explain their failures`,
      `time is money money is power power is pizza pizza is knowledge`,
      `catch me outside how about that`,
      `"one day the queen laid an egg and we all hatched out of it"<br>-FurryEBoy, the best UK history teacher in FSR`,
      `Things were getting cancelled so fast, people thought it was Twitter!`,
      `daedalus used a fist-first philosophy and couldn't be killed with kindness...<br>no wonder you're just flesh and bone now.`,
      `ermahgerd it's ferfsker rehbern!!!!`,
      `this is fine`,
      `how do you do fellow kids`,
      `The official continuation of FurfSky+!`,
      `furf joined the artist team what will he do`,
      `¯\\_(ツ)_/¯`,
      `wait, why do i see a LiveLeak logo?`,
      `(╯°□°) ╯︵ ┻━┻`,
      `<i>cheese</i><br>-SausageDog359`,
      `bone apple tea`,
      `what did the fox say?`,
      `now playing: darude sandstorm`,
      `you know i had to do it to em`,
      `here come dat boi<br><br>oh shit waddup`,
      `damn daniel back at it again with the white vans`,
      `check yourself before you shrek yourself`,
      `<span style="font-size:5px;">Has this ever happened to you? You bought a house, it was not disclosed to you that there was a termite infestation in the walls and moldings, so you have to take it upon yourself to call your own termite extermination company, but when the guys show up they immediately ask to use your bathroom, then for over two hours they take turns going in and out of there, taking huge mud-pies and over flushing? Then they go in there together, and you hear you hear a bunch of scrounging around, and then you here a bunch of yelling, and then one of them is standing in the bathroom doorway shouting at you that his friend’s foot was stuck in the toilet, and he says, “help him, you gotta help him!” And then you go in there to help him, he just pulls it out easily and laughs because his foot was stuck. It wasn’t stuck at all, he was just faking it. And then they get really serious and say “It’s Turbo Time!” And then they both start running around the house as fast as they can and jumping over the couches. But when you try to jump in they yell at you and they say, “YOU’RE NOT PART OF THE TURBO TEAM! DON’T RUN! YOU DON’T RUN WITH US! WE’RE THE ONES THAT RUN! UNTIL YOU’RE PART OF THIS TURBO TEAM, WALK SLOWLY!” So you go lay down to be by yourself and ready your art books, but then the next day you went into the bathroom, and it looked like the hole in your toilet had shrunk. And you said “How can that be? There’s no way they could’ve shrunk the toilet.” But then you saw in the trash, a receipt for Home Depot for a toilet the exact same size as yours, but with a joke hole that’s just for farts! They replaced your real toilet with a fart toilet, and now you can’t take a dump in your house because your toilet can’t suck them down, and you feel sick to your stomach! Has that ever happened to you?! Call me right now please!</span>`,
      `hey, hey, hey mister, cantcha see the monsters in my head`,
      `<code>++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.</code>`,
      `brb gonnna t-pose over wynncraft rq`,
      `you dont ned to shade armor`,
      `<span style="font-size:7px;">Ello there and by ello I mean I made a bottle of ello here. Once ya drink it as you can see you get an instant ELLO! Your own ELLO! THINK ABOUT THAT! THINK OF ALL THE POSIBILITIES! So many possibilities. Ok so what you just saw there was me and bottle of ello. Um and before I explain this I just want to say I am sorry for the low um videos that are coming out of my channel I’m just getting it setup and I think I will be posting videos recently there’s a lot of stress going on irl so ya know dont expect too much. But this has been done before, well something similar to this and it’s like for example lets get a potion out here its its command block if you have fire resistance on you and then it says something like ello. Uh this isnt the case this gives you absorbption. Now the problem with the way it was before.</span>`,
      `all the other kids with the pumped up kicks`,
      `We are as many as we are one, each of our millions equally unmemorable, we need no names, for we are each simply a number.  We. are. clones.`,
      `party rock is in the hou`,
      `se tonight`,
      `I personally would say I'm somewhere between late and end game (although I don't have giant's sword I can afford one). If I sold my creative mind, years 1-54 cake bag, my unused pets, etc... I would likely easily afford Hyperion, leg ender dragon pet, & the rest of my talis recombed... so if you count the value in those items I am endgame.`,
      `You telling me a shrimp fried this rice?`,
      `faq tab coming soon?`,
      `partners tab soon?`,
      `LEARN RUST OR GET LEFT IN THE DUST`,
      `ery shut`,
      `baby shark doo doo doo doo doo doo`,
      `rip <span tabindex='-1' role='button' style='border-radius: 3px;padding: 0 2px;font-weight: 500;color: #7289da;background: rgba(114,137,218,.1);position: relative;'>#the-barbershop</span>`,
      `Our scientists have confirmed that the colour of eggs is [that of a rainbow].`,
      `If we assume that a given egg is white, and, by additive color integration, white is the sum of roughly every color of visible light, and additionally, that the pride flag is a symbolic rainbow, then yes your honor, the color of eggs is [that of a rainbow].`,
      `your password is<br>91de39df035c3ef210ab34f153c6a12589027231a20aace104b0d86ab68067c5280d8160aa7ed13f4a29dbb30175746feb6aedd4d957ceb91fe6119810f4545b`,
      `i can feel your heat.`,
      `a calendar is just like a box of chocolates, sometimes you get 2020, sometimes you don't`,
      `#winning`,
      `<img src="https://discord.com/assets/ddea4500a252f80cbf6d6c92db15178e.svg" draggable="false" width="32" height="32" alt="emoji: head explosion"> fsr is owned by a furry?`,
      `<a href="https://www.youtube.com/watch?v=BLnDVDYJx0Q"><img src="https://discord.com/assets/817f965bd1fd796777908e6c8052d665.svg" alt="emoji: satisfied" draggable="false" width="64" height="64"></a>`,
      `Now with twice as much ÙwÚ`,
      `you're a furry now >:)`,
      `drink more ovaltine`,
      `NOT APPROVED FOR HUMAN USE`,
      `Try <span style="color: #AAAAAA;">/play TKR</span> Today!`,
      `+1% SPEED!!!`,
      `My grandfather picks up quartz and valuable onyx jewels. Send 60 dozen quart jars and 12 black pans.`,
      `<span tabindex='-1' role='button' style='border-radius: 3px;padding: 0 2px;font-weight: 500;color: #7289da;background: rgba(114,137,218,.1);position: relative;'>#pack-faq</span>`,
      `<span tabindex='-1' role='button' style='border-radius: 3px;padding: 0 2px;font-weight: 500;color: #7289da;background: rgba(114,137,218,.1);position: relative;'>#questions-and-support</span>`,
      `You can't edit this text!`,
      `<span style="color: #67DADD;">erymanthus</span>`,
      `1 in 7.5 Trillion!`,
      `The creator of neu is an asshole and put a rickroll [in neu's storage menu].<br>instead, enjoy this gif of a cat.<br>-moulberry`,
      `Just Enough Textures`,
      `<span style="color: #FF5555;">[MINISTER] FurryEBoy</span>`,
      `haha yeah`,
      `BILLIE JEAN // IS NOT MY LOVER // SHES JUST A GIRL // WHO CLAIMS THAT I AM THE ONE // BUT THE KID // IS NOT MY SON`,
      `hypoglycemic rn`,
      `<span tabindex='-1' role='button' style='border-radius: 3px;padding: 0 2px;font-weight: 500;color: #7289da;background: rgba(114,137,218,.1);position: relative;'>discord.gg/fsr</span>`,
      `Among Us`,
      `amogus`,
      `<a href="https://www.youtube.com/watch?v=oXL3KcowG90&list=OLAK5uy_mrQpw7Bipv-a7DFFerdXeLe-Ll4yxdE6U">listen to creatures of habit</a>`,
      `${
        Math.random() > 0.5 ? "us" : "me"
      }<br>-juniper<br><small>(no, not the geometry dash youtuber)</small>`,
      `she's in love with the concept`,
      `I identify as a FUCKING THREAT.`,
      `<img src="https://discord.com/assets/bbe8ae762f831966587a35010ed46f67.svg" alt="A" draggable="false" style="width:32px; height:32px;"> <img src="https://discord.com/assets/3ae4af803746f6882a684a5a48dc29ff.svg" alt="M" draggable="false" style="width:32px; height:32px;"> <img src="https://discord.com/assets/89bba1c5173777ba0a352d7ac585a647.svg" alt="O" draggable="false" style="width:32px; height:32px;"> <img src="https://discord.com/assets/8971c31a6aaa34e99f197c5c9c3d03ad.svg" alt="G" draggable="false" style="width:32px; height:32px;"> <img src="https://discord.com/assets/9efe2dc7b0a590b54482c0ef75c752ca.svg" alt="U" draggable="false" style="width:32px; height:32px;"> <img src="https://discord.com/assets/c4cb8aa4b3abef19178d052694e3ebf4.svg" alt="S" draggable="false" style="width:32px; height:32px;">`,
      `<img src="https://discord.com/assets/bbe8ae762f831966587a35010ed46f67.svg" alt="A" draggable="false" style="width:32px; height:32px;"> <img src="https://discord.com/assets/3ae4af803746f6882a684a5a48dc29ff.svg" alt="M" draggable="false" style="width:32px; height:32px;"> <img src="https://discord.com/assets/89bba1c5173777ba0a352d7ac585a647.svg" alt="O" draggable="false" style="width:32px; height:32px;"> <img src="https://discord.com/assets/f654b0f03f641e89a0db09b4c69cc33b.svg" alt="N" draggable="false" style="width:32px; height:32px;"> <img src="https://discord.com/assets/8971c31a6aaa34e99f197c5c9c3d03ad.svg" alt="G" draggable="false" style="width:32px; height:32px;"> <img src="https://discord.com/assets/9efe2dc7b0a590b54482c0ef75c752ca.svg" alt="U" draggable="false" style="width:32px; height:32px;"> <img src="https://discord.com/assets/c4cb8aa4b3abef19178d052694e3ebf4.svg" alt="S" draggable="false" style="width:32px; height:32px;">`,
      `♫ no matter how hard you try,<br>you can't stop me now ♫`,
      `come to r/hypixelskyblock: now with around 93% more dubious fanart`,
      `r/hypixelskyblock: the art is maybe better than the memes`,
      `"why do all american teenagers sound the same i cant tell the fuckers apart in VCs" —NWT`,
      `damn, pfizer really do be making me drowsy as fuck rn <img src="https://discord.com/assets/711ac22a92d00f844023ded91f820e8c.svg" alt="emoji: sleepy" draggable="false" style="width:32px; height:32px;">`,
      `"fot nerf? shadow fury moment <img src="https://discord.com/assets/fd077d826b040d6c8b895de3b7585c25.svg" alt="emoji: flush owo" draggable="false" style="width:32px; height:32px;">"`,
      `"bonzo will bend us"<br>-rebmE 2021`,
      `zburger: <i>if bedbugs live in beds, then cockroaches</i>—<br>Temp: —<i>ruin an otherwise spectacular chicken sandwich :(</i>`,
      `zburger: i am losing braincells at the rate of the amount of water flowing through the niagra falls per second<br>Temp: in gallons, litres, barrels, washing machines, molecules, subatomic particles, or brain cells?<br> Daedalus: you forgot the femoral artery<br>zburger: yes`,
      `i dont want the pack<br><br>i just want the texture pack`,
      `so... when's this site going to support https connections?`,
      `Welcome to http://furfsky.net, the only place where you won't be murdered for using the &lt;i&gt; HTML tag instead of &lt;span style="font-style: italic;"&gt;.`,
      `There are currently quotes (including this one) on the site. Reload to see if your submission was one of them!`,
      `hanz get der flammenwerfer!`,
      `now approved by furf himself!`,
      `joseph mother`,
      `ggwp`,
      `ery looked up a tutorial for a perm invis exploit, banned.`,
      `[( / O . w . O )] /`,
      `\ [( O . w . O \ )]`,
      `[( / U . w . U )] /`,
      `\ [( U . w . U \ )]`,
      `[( / U . w . U )] / * \ [( O . w . O \ )]`,
      `[( / O . w . O )] / * \ [( O . w . O \ )]`,
      `[( / U . w . U )] / * \ [( U . w . U \ )]`,
      `[( / O . w . O )] / * \ [( U . w . U \ )]`,
      `the pack nullzee uses to flip his way from rags to riches-try it today!`,
      `quick fade for 2 pence innit best ina city lovely cuts donup for rotten smirkin blokes likyarself`,
      `kitty review: great camouflage tho i didn't ask for a rock 5/10`,
      `kitty review: pog cat a bit funny 6.7/10`,
      `kitty review: so soft 10/10`,
      `kitty review: very squishy 9/10`,
      `kitty review: a very strong fighter, he has a bright future. 9/10`,
      `kitty review: 10/10 he ballin`,
      `kitty review: very swag kitty 10/10`,
      `kitty review: mmm soft cate, very nice and friendly :D 10/10`,
      `kitty review 3/10 hes a wee bit too fat and i do not think he is a kitty`,
      `kitty review: oh yes perfect maneuvreability 9/10`,
      `kitty review: 10/10 he a pro gamer`,
      `kitty review: dumbass got stuck, probably named ali 1/10`,
      `kitty review: very weird cate 1/10`,
      `kitty review: holy shit this cat committed hundreds of war crimes. its running towards me, help. 3/10`,
      `kitty review: very soft but doesnt like being patted 6/10`,
      `kitty review: can sleep everywhere very portable 9/10`,
      `kitty review: ooo strong kitti, very good form 8.4/10`,
      `May you find enlightenment.`,
      `that's what she said`,
      `*kisses hand goodbye*<br>goodnight everybody!`,
      `<span style="font-size: 20px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<span style="font-size: 20px;">`,
      `title of your <i>sextant</i> tape`,
      `to get the golden ball reforge stone bring a sea emperor to jake and get 600k coins`,
      `the golden ball requires mining 30 and is not worth anyone's time or effort`,
      `always stay hydrated`,
      `your bobux delivery just arrived`,
      `Women fear me. Fish fear me. Men tear their eyes away from me as I walk. No beast dare make a sound in my presence. I am alone.`,
      `lowpixel groundblock`,
      `i'm proud of tyler man, he still has not fell into the void`,
      `#BringBackBuildersWand`,
      `rip basket of seeds`,
      `rip nether wart pouch`,
      `daily reminder to eat your booster cookie and drink your god pot`,
      `"shut up motor"<br>-HellCastle`,
      `it's june 15th and you're asked "what would happen if you keep washing your hair with water that's contaminated with metal?"<br><br>spoiler: it'll change color.`,
      `bsiciut`,
      `i hope that every chip bag you open rips down the middle`,
      `h nnndahnnhnhjnnhjnjnj`,
      `Stay tuned for the next update, releasing soon™️©️®`,
      `We tried and somehow it worked`,
      `furfsky reborn will now be using textures from pixilart.com to reduce the workload on the artist team :)`,
      `Now containing 25% less Soylent Green™!`,
      `o7`,
      `\\o&gt;`,
      `&lt;o/`,
      `┬─┬ ノ( ゜-゜ノ)`,
      `(◕‿◕✿)`,
      `(☞ﾟ∀ﾟ)☞`,
      `♥‿♥`,
      `(｡◕‿◕｡)`,
      `┬──┬︵/(.□. )`,
      `┻━┻ ︵ヽ('Д ')ﾉ︵ ┻━┻`,
      `ಠ╭╮ಠ`,
      `◉_◉`,
      `⚆ _ ⚆`,
      `:')`,
      `:^)`,
      `D:<`,
      `(ง'-')ง`,
      `( ͡° ͜ʖ ͡°)`,
      `(ﾉ◕ヮ◕)ﾉ ･ﾟ✧ ･ ✧ﾟ･`,
      `⬜ downloaded latest fsr version`,
      `☑ found the quote with a checkbox`,
      `┬┴┬┴┤ ͜ʖ ͡°) ├┬┴┬┴<br><br>cmon, download the pack. we're watching you...`,
      `we're doing stuff come back another time for a real quote`,
      `enderman slayer update is not revolution :(`,
      `¹²³⁴⁵⁶⁷⁸⁹⁰`,
      `weather report: the sky will bleed.`,
      `i mine all day i mine all night<br>i mine non-stop 'til those diamonds are in sight`,
      `yo, there is a fridge on mid`,
      `Also visit SkyCrypt!`,
      `this is where our conversations are stored people <img src="https://discord.com/assets/fd077d826b040d6c8b895de3b7585c25.svg" alt="emoji: flush" draggable="false" style="width:32px; height:32px;"><br><br><img src="https://cdn.discordapp.com/attachments/789592044984860672/850139362774483034/20210603_155950_HDR.jpg" alt="photo of a building" width="40%" height="40%" draggable="false">`,
      `AY CARAMBA DONDE ESTA LA BIBLIOTECA`,
      `all funds from patreon will go into funding skyblock gems for all of the staff`,
      `there are no more funds from patreon, no more skyblock gems for staff`,
      `ay caramba donde esta la biblioteca`,
      `gzdfhbklkogdfhpgfjkopnimmghfjpoml,ngfhompl,nfghmopl,nfgmop`,
      `imagine not using https -thegu5`,
      `tomengmaster: ery ttt me <img src="https://discord.com/assets/fd077d826b040d6c8b895de3b7585c25.svg" alt="emoji: flush" draggable="false" width="32" height="32"><br>erymanthus: you want me to toss tomatoes towards you?`,
      `fire tictactoe <span tabindex='-1' role='button' style='border-radius: 3px;padding: 0 2px;font-weight: 500;color: #7289da;background: rgba(114,137,218,.1);position: relative;'>@Erymanthus | u/RayDeeUx</span>`,
      `goodbye,<br><br><code style="font-size:24px;">damage = (5 + weapon damage + strength / 5) x (1 + strength / 100) x (1 + crit damage / 100) x (1 + additive multiplier / 100)</code>`,
      `<code style="font-size:24px;">damage = (5 + weapon damage) x (1 + strength / 100) x (1 + crit damage / 100) x (1 + additive multiplier / 100)</code><br><br>is pure shit.`,
      `<code>"Aiming becomes Dragon Tracer and only works on dragons."</code><br><br>Hey, Minikloon. Have you forgotten that the AHN exists?`,
      `pinecones`,
      `Let any fish who meets my gaze learn the true meaning of fear; for I am the harbinger of death.`,
      `dear omniman,<br><br>no one likes you.<br><br>goodbye.`,
      `live from lebanon and/or the uk it's hellcastle and furryeboy`,
      `If I had a dollar for every time they redid the wither swords I could bribe the FSR team to demote TORDA`,
      `^ make sure to check if this says FurSfky Rebron`,
      `I personally would say I’m somewhere between late and end game (although I don’t have giant’s sword I can afford one). If I sold my creative mind, years 1-54 cake bag, my unused pets, etc… I would likely easily afford Hyperion, leg ender dragon pet, & the rest of my talis recombed… so if you count the value in those items I am endgame.`,
      `WHY THE FUCK DOES IT HAVE TO BE SO HARD TO GET A COVID-19 VACCINATION?<br>I'M JUST TRYING TO GET MY FIRST DOSE OF PFIZER, FOR FUCK'S SAKE!<br><br>FUCKING HELL, I HAVE A BETTER CHANCE OF GETTING A NECRON'S HANDLE AT THIS POINT.`,
      `Any unlicensed distribution of beta textures is punishable by at least, but not limited to, 3 months of penal labor and kneecapitation.`,
      `Check <span tabindex='-1' role='button' style='border-radius: 3px;padding: 0 2px;font-weight: 500;color: #7289da;background: rgba(114,137,218,.1);position: relative;'>#pack-faq</span> and <span tabindex='-1' role='button' style='border-radius: 3px;padding: 0 2px;font-weight: 500;color: #7289da;background: rgba(114,137,218,.1);position: relative;'>#mod-ui-faq</span> first, or die.`,
      `${
        Math.random() > 0.5
          ? `<img src="https://ptb.discord.com/assets/2d16214bcc74dd1546a35d3d6f15abec.svg" alt="emoji: purple shirt" draggable="false" style="width:32px; height:32px;">`
          : `<img src="https://cdn.discordapp.com/emojis/834588295194738758.png?v=1" alt="emoji: cursed purple shirt with a face" draggable="false" style="width:32px; height:32px;">`
      } SHIT HAPPENS. | macOS Big Sur on MacBook Pro Late 2019 16" (i9-9880H @ 2.30GHz, Radeon Pro 5500M @ 2048x1280, 16GB RAM)`,
      `"SHIT HAPPENS."<br>-Tom Holland`,
      `Made by <span style="color: #FF5555;">[</span><span style="color: #FFFFFF;">YOUTUBE</span><span style="color: #FF5555;">] FurryEBoy</span> and his team of artists!`,
      `Type <span style="color: #AAAAAA;">/killdante</span> in chat to make the fight last longer!`,
      `eat butt you ding dongs`,
      `Better get some corticosteroids to treat that laryngeal fracture.`,
      `holy motherforking shirtballs`,
      `aHR0cHM6Ly9taW5pa2xvb24uY29tL3BpY3MvZDk4ZTE3MDgtZWQ3Ny00NzE1LWE5OTktY2VlNDY2YTk1NzY2LnBuZw==`,
      `<img src="https://media1.tenor.com/images/663ee2c0232d35607ea49f16eb28fdf8/tenor.gif" alt="Achievement Get! Who The Fuck Pinged Me" draggable="false" width="996px" height="196px">`,
      `<img src="https://cdn.discordapp.com/emojis/604486986170105866.png?v=1" alt="Alert icon" draggable="false" width="32" height="32"> Temporary quote outage.<br>Try again later.`,
      `Beans.<br>-TORDA`,
      `"That boy ain't right."<br>-Hank Hill`,
      `the letter 8 is my favorite color of the furfsky reborn resource pack`,
      `<img src="https://cdn.discordapp.com/attachments/728977460737081454/839757476085760040/Screenshot_2021-05-06_FurryEBoy_Minecraft_Profile.png" alt="Tyler with sunglasses as minecraft head" draggable="false" width="32" height="32"> He protecc<br><img src="https://cdn.discordapp.com/attachments/728977460737081454/839758647910989844/Screen_Shot_2021-05-06_at_3.00.30.459_AM_Eastern_Daylight_Time.png" alt="angry tyler with sunglasses" draggable="false" width="32" height="32"> he attacc<br>but most importantly...<br><br><img src="https://cdn.discordapp.com/attachments/773391315424772096/860313890503000124/reddit_tyler.png" alt="owo winking tyler with pride sunglasses" draggable="false" width="32" height="32"> he make texture pacc`,
      `If I was a man with a coherent brain, I would have gotten full Shadow Assassin and Livid Dagger, but no. I just have full Superior Dragon Armor and an overly maxed Shadow Fury.`,
      `keep it in your pants please<br><small>(and yes you should reasonably know what we mean by "it")</small>`,
      `"wait are we going to be graded or is this just some pass/fail garbage"<br>-multiple aspiring folks applying for fsr artist as well as amy santiago`,
      `i guess i just dont care what other people think of me`,
      `"<i>Just because you wanna do something doesn't mean you get to do it.<br>Life is chaos, success is completely arbitrary, and confidence is everything.</i>"<br>-Gina Linetti`,
      `hot damn!`,
      `<span style="font-family: Trebuchet MS, sans-serif;">;</span> vs <span style="font-family: Trebuchet MS, sans-serif;">;</span><br><br>Which one is the English semicolon?<br><br><small>(Credits to MisterCheezeCake for uncovering this gem.)`,
      `<i>We protest you calling us "little kids".<br>We prefer to be called "vertically-impaired pre-adults".</i><br>-fsr team (but Yakko Warner said it first)`,
      `I'm going to slice your Achilles' tendons, peel off your fingernails, and stick knitting needles in your eyes.`,
      `<span style="font-size:4px;">Bassicly for those player who are using neu etc almost everything. Is banable which makes u play it easy like neu ah etc profit no profit dungeon overlay solvers and now the shaders etc if they allow us to see which we would not ban like dungeon overlay etc so I would recommend using lunar client and badlion cuz of they have what is allowed yeah dungeon map potion effects etc allowed but just use lunar or badlion cuz everything there matches the rules of server me personally use lunar client used to use neu etc which I could get ban I never got kicked earlier but might watchdog never saw it and now I don't wanna get ban tell me if I'm wrong</span>`,
      `Instructions unclear; the captive's Achilles' tendons have been needled, fingernails sliced, and eyes peeled.`,
      `this is exhausting i just want to go back to my container of goo and go to sleep`,
      `A mop that mummified merrily missed Mississippi on the black mamba!`,
      `furfgems premium currency coming 2022`,
      `bruh everyone else gets the ability to draw amazing art and all i fucking get is being able to type voodoo words into the computer and get text.`,
      `life is so firetrucking hard`,
      `stop refreshing the page, please. these random quotes were meant to be fun tidbits you notice for a fleeting moment before you download the latest version of the pack, not for you to get a funny screenshot. save that job for erymanthus and voxal<br>thanks :D`,
      `please stop using <span tabindex='-1' role='button' style='border-radius: 3px;padding: 0 2px;font-weight: 500;color: #7289da;background: rgba(114,137,218,.1);position: relative;'>#make-a-website-quote</span> as <span tabindex='-1' role='button' style='border-radius: 3px;padding: 0 2px;font-weight: 500;color: #7289da;background: rgba(114,137,218,.1);position: relative;'>#general</span> with a 15 minute cooldown ;-;`,
      `<span tabindex='-1' role='button' style='border-radius: 3px;padding: 0 2px;font-weight: 500;color: #7289da;background: rgba(114,137,218,.1);position: relative;'>#invalid-channel</span> is not a real chat room, and is just a rumor falsely spread by server members.`,
      `Now I've learned my
        ${
          Math.random() > 0.5
          ? `<img src="https://cdn.discordapp.com/emojis/787004887061364736.png?v=1" alt="A dungeons score icon" draggable="false" style="width:32px; height:32px;">
          <img src="https://cdn.discordapp.com/emojis/787004872444739624.png?v=1" alt="B dungeons score icon" draggable="false" style="width:32px; height:32px;">
          <img src="https://cdn.discordapp.com/emojis/787004862356389909.png?v=1" alt="C dungeons score icon" draggable="false" style="width:32px; height:32px;">
          <img src="https://cdn.discordapp.com/emojis/787004897735475220.png?v=1" alt="S dungeons score icon" draggable="false" style="width:32px; height:32px;">`
          : `<img src="https://cdn.discordapp.com/emojis/804803417259507752.png?v=1" alt="emoji: A dungeons score" draggable="false" style="width:32px; height:32px;">
          <img src="https://cdn.discordapp.com/emojis/804803405012533268.png?v=1" alt="emoji: B dungeons score" draggable="false" style="width:32px; height:32px;">
          <img src="https://cdn.discordapp.com/emojis/804803384187158559.png?v=1" alt="emoji: C dungeons score" draggable="false" style="width:32px; height:32px;">
          <img src="https://cdn.discordapp.com/emojis/804803429264392213.png?v=1" alt="emoji: S dungeons score" draggable="false" style="width:32px; height:32px;">`
        }
        , next time ${
          Math.random() > 0.5
            ? `please don't sing with me!`
            : `won't you sing with me?`
        }`,
      `
       <img src="https://ptb.discord.com/assets/197cdfb70e6835c81cbb1af86ab7e01e.svg" alt="F" draggable="false" style="width:32px; height:32px;">
       <img src="https://ptb.discord.com/assets/9efe2dc7b0a590b54482c0ef75c752ca.svg" alt="U" draggable="false" style="width:32px; height:32px;">
       <img src="https://ptb.discord.com/assets/7102ad5cacc8ba7bd99fa16b4e6468a5.svg" alt="R" draggable="false" style="width:32px; height:32px;">
       <img src="https://ptb.discord.com/assets/197cdfb70e6835c81cbb1af86ab7e01e.svg" alt="F" draggable="false" style="width:32px; height:32px;">
       <img src="https://ptb.discord.com/assets/c4cb8aa4b3abef19178d052694e3ebf4.svg" alt="S" draggable="false" style="width:32px; height:32px;">
       <img src="https://ptb.discord.com/assets/547b9b60d8dfc97568666a168793dc73.svg" alt="K" draggable="false" style="width:32px; height:32px;">
       <img src="https://ptb.discord.com/assets/2d24eb6ab8545bd17e66af014500f1ed.svg" alt="Y" draggable="false" style="width:32px; height:32px;">
       <img src="https://ptb.discord.com/assets/7102ad5cacc8ba7bd99fa16b4e6468a5.svg" alt="R" draggable="false" style="width:32px; height:32px;">
       <img src="https://ptb.discord.com/assets/0df8cc6898cdb812709a4672f137b62d.svg" alt="E" draggable="false" style="width:32px; height:32px;">
       <img src="https://ptb.discord.com/assets/515873f6898e0b26daf51921c65a43f7.svg" alt="B" draggable="false" style="width:32px; height:32px;">
       <img src="https://ptb.discord.com/assets/89bba1c5173777ba0a352d7ac585a647.svg" alt="O" draggable="false" style="width:32px; height:32px;">
       <img src="https://ptb.discord.com/assets/7102ad5cacc8ba7bd99fa16b4e6468a5.svg" alt="R" draggable="false" style="width:32px; height:32px;">
       <img src="https://ptb.discord.com/assets/f654b0f03f641e89a0db09b4c69cc33b.svg" alt="N" draggable="false" style="width:32px; height:32px;">
       `,
      `Winner of ${String(date.getFullYear())} best pack award.`,
      `${String(
        Math.abs(
          Math.floor(
            (new Date("November 04, 2041 13:15:17") -
              new Date(date.getTime())) /
              1000 /
              86400
          )
        )
      )} days left before the pack can legally get turnt`,
      `for ${String(
        Math.abs(
          Math.floor(
            (new Date("July 04, 2019 14:04:00") -
              new Date("April 17, 2020 22:11:00")) /
              1000 /
              86400
          )
        )
      )} days, furf slaved away at assets, only to give up ${String(
        Math.abs(
          Math.floor(
            (new Date(date.getTime()) - new Date("April 17, 2020 22:11:00")) /
              1000 /
              86400
          )
        )
      )} days ago.<br>now we have to clean up the table scraps.`,
      `${String(
        Math.abs(
          Math.floor(
            (new Date(date.getTime()) - new Date("October 28, 2020 21:52:00")) /
              1000 /
              86400
          )
        )
      )} days since the artists have touched grass`,
      `the artists have had ${
        Math.random() > 0.5 ? "aesprite" : "photoshop"
      } open for ${String(
        Math.abs(
          Math.floor(
            (new Date(date.getTime()) - new Date("May 8, 2021 00:00:00")) /
              1000 /
              86400
          )
        )
      )} days without breaks<br>now boost the server to give them a little more motivation to keep going`,
      `we know that it's been ${String(
        Math.abs(
          Math.floor(
            (new Date(date.getTime()) - new Date("October 30, 2020 00:00:00")) /
              1000 /
              86400
          )
        )
      )} days since ${
        Math.random() > 0.5 ? "diver's armor" : "mastiff armor"
      } hasn't had a texture, stop pestering us about it in <span tabindex='-1' role='button' style='border-radius: 3px;padding: 0 2px;font-weight: 500;color: #7289da;background: rgba(114,137,218,.1);position: relative;'>#feedback</span> pls ;-;`,
      `${String(
        Math.abs(
          Math.floor(
            (new Date(date.getTime()) - new Date("June 28, 2021 23:21:00")) /
              1000 /
              86400
          )
        )
      )} days ago, furf came out of the shadows and joined the furfsky reborn team.`,
      () => {
        document.getElementById("logo").src = "assets/logos/FSRPrideMonth.gif";
        document.getElementById("headerSubtitle").innerHTML = `"Every time someone steps up and says who they are, the world becomes a better, more interesting place."<br>-Captain Holt`;
      },
      () => {
        document.body.style.filter = 'blur(1px)';
        document.getElementById("headerSubtitle").innerHTML =
          "looks like your vision isn't the best!";
      },
      () => {
        document.body.style.filter = "grayscale(80%)";
        document.getElementById("headerSubtitle").innerHTML =
          "look mom, im emo";
      },
      () => {
        document.body.style.filter = "brightness(1.4)";
        document.getElementById("headerSubtitle").innerHTML =
          "is it a bit too bright in here?";
      },
      () => {
        pressToMoveQuotes([
          "voxal: time to add 100 more quotes<br>*cries in pain*",
          "Erymanthus: dwai i can help",
          "voxal: okai lets see how many you can port over",
          "*two hours later*",
          "Erymanthus: jesus christ voxal i took a phat nap again im so sorry i wont lapse this hard again i swear",
        ]);
      },
      () => {
        pressToMoveQuotes([
          "Here's a parody of Colon Jost's <a href='https://www.newyorker.com/magazine/2013/01/28/automatic-reply' style='font-style: italic; color:#fbcc6c; text-decoration: none;'>\"Automatic Reply\"</a>, because Motor doesn't know how to go to vacation properly.",
          "Discord Ghosting<br><br>By MotorGorilla<br>March 10, 2021",
          "I will be out of the office beginning Wednesday, March 10th, at 6:46:48 (E.S.T.), and will return on Sunday, March 14th, at 3:47 (Hawaiian-Aleutian Standard Time).",
          'During that period, I will have limited access to Discord. Meaning that I will have full access to Discord. I will continue to read my Discord as though I were sitting in my office, but I will be "out" of the office. Meaning there will be no difference. Also, I will probably be in the office a bunch.',
          "I will have sporadic access to my cell phone. This is either because I am doing whatever business I have to attend to during my surprise vacation, or, more likely, because I am lying on my couch, staring at my cell phone and willing myself not to check it for at least fifteen minutes.",
          "I will have extremely limited access to pay phones. I forgot to bring quarters, and the last calling card I owned expired before I was born. Also, most pay phones are now public urinals.",
          "I will have standard access to Discord PMs. I’m not really sure where they are at these days, but if you send one I’m sure Discord admins will find me.",
          'I will be checking my "snail mail" in, quite frankly, never. Such is the 21st century, and I use Discord, as mentioned earlier.',
          "I will have almost zero access to carrier pigeons. This is less a function of my vacation and more a function of the year I was born. Hell, do those things still <span style='font-style: italic;'>exist</span>?",
          "I will NOT be checking my landline, which is a can attached to a string, because <span style='font-style: italic;'>what the fuck? Who still uses landlines?</span>",
          "I will have only intermittent access to Skyblock. If you desperately need to show me your giveaway prize pool, please print a copy and mail it to:<br><br><span style='font-style: italic;'>I’m on Vacation</span><br><span style='font-style: italic;'>Attn: MotorGorilla</span><br><span style='font-style: italic;'>c/o: /visit MotorGorilla</span>",
          'I will have erratic access to Discord server giveaway channels. Should you enter "200M SKYBLOCK GIVEAWAY", you may see my user name briefly, then it may disappear, as though I had seen your user name and fled the chat room.<br>Wrong. It has to do with the surprise vacation I’m on.',
          "I will have fitful access to my memories. That is why I may ignore you when you pass me on the street and yell, \"<span style='font-style: italic;'>Hey, Motor! It’s me, one of your artists!</span>\"<br>Again, this relates to a memory problem and has nothing to do with the 200 million coins I'm running away from the authorities with.",
          'While on vacation, I will not be doing that thing where I wish someone a happy birthday by having some random ghost pinging me. My assistant will be doing that for me. Unfortunately, they\'re also "out of the office", so the middleman will be Clyde.<br>Happy birthday.',
          "I will have no access to my homework. A judge ruled that I should be “on vacation” from them.<br><small>(Spoiler: I was the judge.)</small><br><br>And I will have constant access to Spotify. That is less informative and more of a brag.",
          "Finally, I’m sure this goes without saying, but if you’re really rich or really famous, I am instantly available 24/7. Just spam ping me.",
          "The rest of you, please do not respond to this message, or Discord will force it into my cell phone's push notifications—on a par with my fragrun bot getting banned and every time some nerd pulls an \"accidental\" <span tabindex='-1' role='button' style='border-radius: 3px;padding: 0 2px;font-weight: 500;color: #7289da;background: rgba(114,137,218,.1);position: relative;'>@everyone</span>.",
          "All my best,<br>xoxo,<br>The M-Man ♦",
          "<span style='font-style: italic;'>Published in the <span tabindex='-1' role='button' style='border-radius: 3px;padding: 0 2px;font-weight: 500;color: #7289da;background: rgba(114,137,218,.1);position: relative;'>#alpha-updates</span> channel in the <a href='https://discord.gg/fsr' style='color:#fbcc6c; text-decoration: none;'>FurfSky Reborn Discord server</span></span>.",
          "<span style='font-style: italic;'>MotorGorilla, a veteran artist for FurfSky Reborn, compiles the countless assets from other artists in the server. His memoir, “My Online Persona: Snoopy,” will be published whenever he stops procrastinating in general.</span>",
          "This has been a parody of Colon Jost's <a href='https://www.newyorker.com/magazine/2013/01/28/automatic-reply' style='font-style: italic; color:#fbcc6c; text-decoration: none;'>\"Automatic Reply\"</a>.",
        ]);
      },
      () => {
        pressToMoveQuotes([
          `There is an impersonator amongst goog (an FSR artist) and two server members (Temp and zburger).<br><br>How will things play out?<br>Press the right arrow key and see.`,
          `<span style="font-size:18px">goog: I may happen to have an connected feeling with others usually conveyed with the function of a proximity chat voice channel, or a simple chat mechanic that the individual with the particular wavelength of visible light most close to the wavelength of red, is acting or preforming in ways that are suspicious, or ominous, discretely moving around unlike other partners in this spaceship, I recommend we take immediate action and remove the impostor of the crew from the spaceship, therefore winning the game and going home to our families.</span>`,
          `<span style="font-size:18px">Temp: If I may counteract this recommendation, it was observable to multiple members of our community including myself that an individual identified to be of identical color to yourself was capable of opening and closing a basic ventilation cover. Given the average quantifiable intelligence measured of our ship's pre-incidental crew, it must be concluded therefore that you are the disreputable individual who continues to plague our turn based activities. I plan to subsequently use this information to put forth a motion for your ejection from this hallowed spacecraft.</span>`,
          `<span style="font-size:18px">zburger: That is a significant point you have set forward upon our plate of meaningful discussion. However, I dispute your claim of the goose partaking in dubious activities, which may include clambering inside the ventilation shafts of our oddly large spacecraft. I understand your concerns about the goose character, but I, for one, have not viewed any aforementioned activities that you are indicting him of.</span>`,
          `<span style="font-size:18px">goog: Your counter argument is flawed in the sense that my argument is based on the general cliche, but you have walked on my trap. You may have not noticed but I have seen you, Mr. Red, murder the innocents of the ship. This hateful crime should be taken to court but I suggest you take the safe route and let the crew eject you from the ship, terminating your life.</span>`,
          `<span style="font-size:18px">Temp: If it is believed by the group that my continued presence does not advance the interests of our crew, then so be it, but I would defend my integrity and necessity to the ship's continued function to the last.</span>`,
          `<span style="font-size:18px">zburger: We will send your astronaut figure out of the ejection bay of our spacecraft, but you will be deemed heroic and necessary to our victory of this mission. It has been an honor serving along side you on our ship, and we will be pleasured if you would continue your functions as an otherworldly spirit.</span>`,
          `<span style="font-size:18px">goog: haha stinky baby</span>`,
          `<span style="font-size:18px">Bread: what the hell happened here?</span>`,
        ]);
      },
      () => {
        pressToMoveQuotes([
          "We're no strangers to love",
          "You know the rules and so do I",
          "A full commitment's what I'm thinking of",
          "You wouldn't get this from any other guy",
          `I just wanna tell you how I'm feeling`,
          `Gotta make you understand`,
          "Never gonna give you up",
          "Never gonna let you down",
          "Never gonna run around and desert you",
          "Never gonna make you cry",
          "Never gonna say goodbye",
          "Never gonna tell a lie and hurt you",
          "We've known each other for so long",
          "Your heart's been aching, but",
          "You're too shy to say it",
          "Inside, we both know what's been going on",
          "We know the game and we're gonna play it",
          `And if you ask me how I'm feeling`,
          `Don't tell me you're too blind to see`,
          "Never gonna give you up",
          "Never gonna let you down",
          "Never gonna run around and desert you",
          "Never gonna make you cry",
          "Never gonna say goodbye",
          "Never gonna tell a lie and hurt you",
          "Never gonna give you up",
          "Never gonna let you down",
          "Never gonna run around and desert you",
          "Never gonna make you cry",
          "Never gonna say goodbye",
          "Never gonna tell a lie and hurt you",
          "(Ooh, give you up)",
          "(Ooh, give you up) [x2]",
          "Never gonna give, never gonna give<br><small>(Give you up)</small>",
          "Never gonna give, never gonna give<br><small>(Give you up)</small> [x2]",
          "We've known each other for so long",
          "Your heart's been aching, but",
          "You're too shy to say it",
          "Inside, we both know what's been going on",
          "We know the game and we're gonna play it",
          `I just wanna tell you how I'm feeling`,
          `Gotta make you understand`,
          "Never gonna give you up",
          "Never gonna let you down",
          "Never gonna run around and desert you",
          "Never gonna make you cry",
          "Never gonna say goodbye",
          "Never gonna tell a lie and hurt you",
          "Never gonna give you up",
          "Never gonna let you down",
          "Never gonna run around and desert you",
          "Never gonna make you cry",
          "Never gonna say goodbye",
          "Never gonna tell a lie and hurt you",
          "Never gonna give you up",
          "Never gonna let you down",
          "Never gonna run around and desert you",
          "Never gonna make you cry",
          "Never gonna say goodbye",
          "Never gonna tell a lie and hurt you",
        ]);
      },
      () => {
        pressToMoveQuotes([
          `Red sus.`,
          `Red suuuus.`,
          `I said red, sus, hahahahaha.`,
          `Why arent you laughing?`,
          `I just made a reference to the popular video game "Among Us"!`,
          `How can you not laugh at it?`,
          `<h3>Emergency meeting!</h3>`,
          `Guys, this here guy doesnt laugh at my funny Among Us memes!`,
          `Let's beat him to death!`,
          `Dead body reported!`,
          `Skip! Skip!`,
          `Vote blue!`,
          `Blue was not an impostor.`,
          `Among us in a nutshell hahahaha.`,
          `What?!`,
          `You're still not laughing your ass off?`,
          `I made SEVERAL funny references to Among Us and YOU STILL AREN'T LAUGHING??!!!`,
          `Bruh.`,
          `Ya hear that?`,
          `Wooooooosh.`,
          `What's "wooooooosh"?`,
          `Oh, nothing.`,
          `Just the sound of a joke flying over your head.`,
          `What's that?`,
          `You think I'm annoying?`,
          `Kinda sus, bro.`,
          `Hahahaha!`,
          `Anyway, yea, gotta go do tasks.`,
          `Hahahaha!`,
        ]);
      },
      () => {
        pressToMoveQuotes([
          `How to Lose Weight in 4 Easy Steps`,
          `Step one: No beer.<br><br>Every time you drink a beer, it's like eating seven slices of bread. That's a lot of unnecessary carbs.`,
          `Step two: Portion control.<br><br>When eating out at a restaurant, cut your meal in half and ask for a takeout container to save the rest for later.`,
          `Step three...`,
          `Have your heart broken.`,
          `And not just broken, but shattered...`,
          `...by a girl who never loved you and never will.`,
          `Try to get your shit together and join a gym. Start going to the gym regularly and even though you don't know that much about exercise and you're way too weak to do pretty much anything but lift five pound weights with the old people, do it until your sweat makes a puddle on the floor.`,
          `Then go home and go to bed.<br><br>And the next day, do it again.<br>And then again.<br>And then again.`,
          `Then go to work and listen to stories of your ex-girlfriend fucking around with gross and terrible people.<br>Stories from your coworker friends who think they're doing you a favor.`,
          `Pretend that it doesn't bother you.`,
          `Pretend that being forced to see your ex at work <i>every day</i> isn't fucking killing you.`,
          `Pretend that everything's fine.`,
          `Go to the gym and make more puddles of sweat.<br>Buy books.<br>Learn about different muscle groups and how they work together.`,
          `Plan out your week of meals.<br><br><small>Try to forget her.</small>`,
          `Back to the gym, more puddles of sweat.<br><br><small>(You're a piece of shit.)</small>`,
          `<small>(You are a piece of shit.)</small>`,
          `<small>(You. Are a piece. Of shit.)</small>`,
          `*beat*`,
          `After the gym one night, go all the way up to the top of the parking garage and walk all the way to the back.`,
          `Look out of the lights of the skyscrapers of downtown, and think about how every single one of those office lights represents a person.<br>Try to imagine how they feel... what they're doing.`,
          `Then realize that most of those lights are probably shining into offices with no one in them.`,
          `Realize you're alone...<br>that you're staring at...<br>no one.`,
          `<small>Become cripplingly depressed and try to locate your car.</small>`,
          `Go to sleep. Go back to work. Go to the gym. Sweat.`,
          `Freak the fuck out on your ex.<br><br><small>The next day, apologize.</small>`,
          `One day, she wears the necklace you bought her and tells you that she got it<br>"from someone really special".`,
          `That night, you discover that Slayer's "Angel of Death" might be the perfect song to do squats to.`,
          `*shave beard*`,
          `Start to make friends at the gym.<br>You used to look down on bro nods and fist bumps, but since that's how gym rats communicate, that's become the language you speak most often.`,
          `Max and you spot each other on Wednesdays, Vinny and you spot each other on Fridays.<br><br>It's important not to forget that you're a piece of shit.`,
          `Work, gym, food, sleep. Over and over<br>More fist bumps, more sweat puddles.`,
          `Your body changes slowly, then all at once.<br>You hit your goal weight, pick a new one, then hit it again.<br>You go out and buy new clothes.`,
          `You recieve wave after wave of compliments.<br><br><small>Your ex tells you that she's seeing someone else.</small>`,
          `<small>...fucking bullshit...</small>`,
          `<small>...piece of-</small>`,
          `That night, you go to the gym. You run farther and lift more than you thought your body was capable of.`,
          `You go home and eat a single chicken breast and steamed vegetables.<br>You go to sleep.<br>You dream of a bottomless black puddle.`,
          `<small>No...<br>*swipes left*</small>`,
          `<small>...no...<br>*swipes left again*</small>`,
          `<small>...no.<br>*swipes left one last time*</small>`,
          `There's a girl you see a lot at the gym who always does these weird leg exercises you've never seen before.`,
          `You make it a point not to look at her, because you're overly worried about looking creepy-like that guy in the blue shirt who never wears underwear and always hangs around the lat pulldown machine.`,
          `But you notice this girl is always at the gym when you are, and seems to always choose the bench next to you.<br><br>You turn up the Slayer and concentrate on making your puddles bigger.`,
          `At work your ex parades her new boyfriend around, flatly ignoring you the entire time.<br><br>He's taller than you, in better shape than you, and significantly better looking than you.`,
          `[ ... ]`,
          `<small>...fucking bullshit...</small>`,
          `That night you benchpress double your body weight.<br>You sneak a photo of yourself in the mirror and email it to yourself with the subject heading "You are a warrior."`,
          `<small>The next day you are more disgusted with yourself than you've ever been and you delete it immediately.</small>`,
          `You make puddle after puddle after puddle and eat single chicken breasts and work and sleep.<br>Over and over and over and over and over and over...`,
          `...and then something different happens.`,
          `A night comes when you're not the last person in the gym.`,
          `It's you and the girl who does the weird leg exercises.`,
          `You end up walking out at the same time.`,
          `Her name is Melissa and she works close by.`,
          `She asks you out to dinner on Friday, promising it'll be healthy.`,
          `The leg exercises are pivoting curtsy lunges.`,
          `You start seeing Melissa a lot, both inside the gym and out.<br>You add a couple of cheat days to your week.<br>You start getting a lot less sleep.`,
          `Your ex calls you late at night but you don't answer.`,
          `One night you're walking Melissa to her car and she says she wants to show you something special.`,
          `You both stand there in the dark, looking out over the lights of downtown.`,
          `"Isn't it pretty," she says, "with all those lights?"`,
          `You tell her that you think it is, but it also makes you feel sad.<br>"All those lights mean nothing, they're just shining into cold lonely offices with nobody in them."`,
          `But Melissa tells you that each light <i>is</i> an empty office, but they're only empty because the people have all gone home for the day.<br>"Each one's a person who's at home, happy with the one they love."`,
          `You look at her and the lights, and she smiles.`,
          `Something in your chest expands.`,
          `Late one Sunday afternoon, you're writing out your rent check and realize it's been exactly a year since you started working out.`,
          `You think of all those miles you've run...<br>those pounds you've lifted...<br>and chicken you've eaten...<br>and puddles you've made...<br>and it doesn't seem that bad.`,
          `You realize that it's not about hitting a goal weight or lifting weights.`,
          `It's about waiting, being patient, and trusting that life will slowly inch along, and things will get better.`,
          `After all, change takes time...`,
          `...but time is all it takes.`,
          `Step four: No fruit juice.<br>Too much sugar.`,
        ]);
      },
      () => {
        pressToMoveQuotes([
          `I feel like this is something important to talk about, I’ve been very withheld for a while about it all and just decided it’d probably be best to just let it out so I can feel relaxed a little more I guess.`,
          `This will be a very long read i’m sure, I’m writing this in my bath at 4am on my phone so forgive any mistakes or confusing bits.`,
          `Back in October/November of 2020, I for the first time since when 1.16 had just released I decided to try and speedrun 1.16 some to get a decent time.<br>My goal was to get a time faster than 25 minutes, which was a good time and fairly obtainable at the time for me without spending months speedrunning.`,
          `We had or were just about to switch manhunt to 1.16 and I wanted to get practice for that, and then speedrun for a better 1.15 time, because my record on 1.15 had been beaten.`,
          `After running for about a week, I got a 19 minute time (that arguably could have been lower, ironically enough due to bad luck).`,
          `I started running 1.15 directly after, and a few day’s later there were some suspicions involving my streamed runs on 1.16.`,
          `At this point, I was cooperative but upset and confused that I was being questioned. I provided all the information that I could, and assumed that everything was fine.`,
          `As chatter grew, I was confused and the numbers didn’t look to be in my favor.`,
          `At this point I reached out to the only mojang developer that I had contact with, and talked for an hour or so about what was going on.`,
          `I told him the details and was asking if there’s potential for a bug or glitch, and he told me that no there isn’t, but said some things about how banning for luck seems far fetched and that they should improve their system.`,
          `I felt a little reassured, but also angry that I was potentially being dragged for absolutely nothing.`,
          `It wasn’t a huge thing yet, but it still lingered in my mind and I couldn’t really think about anything other than it.`,
          `As time went on and many weeks passed, I grew more and more frustrated, convinced that I was being targeted due to the fact that I was a Youtuber and a couple of the mods (self admitted) didn’t like me at all and didn’t have many kind words to say.`,
          `I was an asshole and lashed out publicly, saying the investigation was a farce and expressing how pissed I was that I was being targeted and that it was taking so long, as the mods kept giving me deadlines and then missing them.`,
          `This was terribly stupid of me to do.<br>I was scared and stressed and said and did shitty things.<br>I regret it a lot and really wish that I had been able to keep my calm.`,
          `Later that month, the speedrun team released a video and a document detailing why my 1.16 runs couldn’t have been legitimate based on math and statistics.<br>I admittedly don’t know shit about math and statistics, I didn’t go to college and I hated math my whole life.`,
          `At this point I felt complete fear, as I felt like I had been publicly smeared in a way that I have no clue how to respond to.<br>I didn’t understand the math and I didn’t understand why I had been left in the dark for so long only to have a video dropped randomly on me right before MCC.`,
          `At this point and before, I had multiple speedrun moderators messaging me scary things about how it was a shit show and no one could agree on things just before the release, that they were clearly biased against me and so on.`,
          `In retrospect, this may have been out of fear and wanting to be on the good side of a really big youtuber, or maybe they were being truthful or a little bit of both.`,
          `All I know is that it scared me a lot. feeling like everything you built might come tumbling down and there’s nothing you can do about it is really stressful.`,
          `Again, I lashed out.<br>I tweeted about the mods being clout chasers, and said a lot of really dicky things.<br>I was pissed, I was scared, and I was being an idiot.`,
          `shortly after that,  someone gave me the idea to hire a professional statistician because I know nothing about math. This calmed me down a lot and brought me back to a much healthier mindset.`,
          `I googled and I ended up finding two professors and I emailed them both about the situation asking for assistance. Only one of them was available to help. `,
          `I was looking for help and I told them that I didn’t cheat, and that I just needed a second opinion on the math.`,
          `Eventually the professor came back with a conclusion that the mods numbers were off by a significant significant margin, and that’s it’s possible although extremely unlikely.`,
          `Again, not completely understanding math but knowing that my experts opinion seemed to be that the mods were off, I felt vindicated and relieved.<br>I made a video about it, and expressed the professors views.`,
          `people hounded me for it saying that the Astro physicist was fake, but the mods confirmed it was legit.<br>I just wanted a (mostly) unbiased parties opinion.`,
          `The mods came back with a response, correcting the professor and saying that he was off and providing reasons for why.`,
          `Again, I don’t understand complicated math so I sent it directly to the professor asking for his thoughts.`,
          `Later on, he came back admitting there were mistakes in his original assessment, although he still believed theirs was off.`,
          `In his rebuttal though, he came to the conclusion that it’s improbable that I didn’t cheat.<br>I felt like the right thing to do was post his findings, even though he hadn’t asked me to yet, I did.`,
          `I tweeted them out and replied saying that I agree that it seems more likely than not that I cheated.`,
          `I didn’t say anything more than that.`,
          `Funnily enough, he actually emailed me a day or two later saying I need to post his findings, or he will (semi-threatening, but not in a mean way), and I responded that I already had before he even asked.`,
          `At this point I was lost, and I was fairly confused about the whole thing.`,
          `Wondering what the other options were and exploring the possibilities. as much as I was confident that I didn’t cheat, I had never explored the option that I possibly did.`,
          `due to the way I reacted to the mods and perceived everything going on I was convinced that they were out to get me.`,
          `I tunnel visioned and was paranoid and didn’t think straight. I had plenty of valid reasons to believe that they weren’t impartial, and had the mod team and I been completely friendly from the beginning I believe it never would have gotten to the point that it did.`,
          `After considering this, I ended up finding out that I HAD actually been using a disallowed modification during ~6 of my live streams on Twitch.`,
          `At the time we were just starting to record videos on 1.16 and we had just hired a developer to help with coding mods for videos because me and George had no experience with mods only plugins.`,
          `One of the mods that they were working on was an overall recording mod, that I have used in every video (with updates and improvements) since around the speedrun controversy.`,
          `You may notice it in my videos due to f3 being small or particles being reduced, or recently on my streams things like the background being custom or a “Dreams servers” option and plenty of other features and improvements.`,
          `<span style="font-size:20px;">In our challenge videos, before 1.16 we always increased the enderman spawn rates and pearl drop rates out of convenience and we’ve mentioned that openly before.</span><br><span style="font-size:20px;">It makes the videos better because we don’t spend hours looking for pearls or spend so much time farming blaze rods (a totally RNG thing, mostly pearls).</span>`,
          `When 1.16 came out, it was more complicated to increase piglin trades then it is to do enderman pearl drops. A server side plugin was made for our videos that slightly increases the rates.`,
          `Around this time is when the first versions of the recording mod was being made, although it was more of a chat mod at this point.`,
          `<span style="font-size:15px;">I had considered at the time that this potentially could have been a problem, but brushed it off because 1. Server side and client side are completely different and as far as I was aware nothing had been done client side. 2. as far as I knew it was just basically a chat mod so far and 3. I was 99% sure that I didn’t even have the recording mod on. Which was backed up by the fabric api logs saying that only the fabric api was loaded (although I found out later it only lists things that explicitly ask to be listed which I had no idea) this was mentioned in my response video.</span>`,
          `I ended up thinking that it’s basically the only explanation after the professor came back with what he did.`,
          `I talked with the developer and ended up finding out that when working on the mod stuff he had added the same improvements from our challenge servers to the client side mod so that they would work in single player for videos like the shock collar video or other “single player” mod videos.`,
          `This was only in an early rendition of the mod and was removed because the developer realized that those type of videos can just be done on a PC hosted server.`,
          `This actually included a couple other things that weren’t mentioned at all during the controversy much as far as I’m aware. Ender eyes had a low chance of breaking when thrown, and enderman dropped pearls at a much higher percentage (I don’t think I killed many enderman so this wasnt noticeable, similar to the eyes).`,
          `When I realized this, I felt an extreme sense of guilt and I took down my response video not believing in what I said in the video at all anymore.`,
          `This was a couple months ago at this point I believe. When the drama first started I cared more about defending myself and being right, then about figuring out what was actually going on and I shot myself in the foot by doing it.`,
          `I felt really terrible for the mods because I dragged them through the mud even though they were mostly right.`,
          `I still feel as though the mod team was extremely unprofessional when dealing with it, but they’re a group of volunteers just trying to do their job and in their eyes I was some cheating sob youtuber who didn’t care at all.`,
          `Maybe in their position I would have treated me the same. I was an asshole back to them which didn’t help at all either.`,
          `I reflected a lot about the entire thing and had a lot of regret about just the first few days after the runs. What if they had asked for my mods sooner, what if I had realized sooner, what if I hadn’t had a history with a couple of the mods maybe I wouldn’t have jumped straight to them being out to get me.`,
          `Further past that what if I could have controlled my emotions and not blown the whole thing out of proportion. I can’t live by what if’s though so I was just left with what I had.`,
          `I debated live streaming or making a video about it, but the drama had basically already passed and I was worried about rekindling the fire when I had already gone through basically a couple months straight of absolutely being shit on by anyone that didn’t think of me favorably, and the mods had gone through weeks of torture Im sure too.`,
          `I figured it’s out of the way, and it would be a story I would tell in a few years when no one really cared.`,
          `I told a couple people and just felt like the community had been through enough drama and that it was pointless.`,
          `I didn’t want to be the center of controversy for the hundredth time. `,
          `it was shitty and an unfortunate situation where I felt like I couldn’t defend myself anymore in good faith without feeling bad but I also didn’t have any intention of cheating.`,
          `Since the speedrun controversy there’s been some animosity between me and the mods, and I feel like the relationship only got worse.`,
          `They declined my donations from the controversy video, got into drama a couple times with me/my community on Twitter since(don’t want to go into specifics), and a month or so ago added me to a chat questioning me about my previous 1.15 runs from around a year ago.`,
          `They saw a suspicious black box that they thought meant a splice, but it turned out to be a youtube setting on their end that they realized, and they had some other random questions as well.`,
          `This was resolved fairly maturely I believe and I haven’t talked to them since.`,
          `Yesterday around MCC the mods made the decision to remove my old runs due to suspicions and the fact that my 1.16 run was invalid, which is something that is done with most people who submit any invalid runs at all.`,
          `I’m sure there’s reasonable suspicions about most runs, especially offline ones from back when they were allowed, so couple that with a 1.16 run being actually invalid and it’s a completely reasonable assumption.`,
          `You can’t give someone the benefit of doubt on lag or frame skips or potential cuts or anything unless they’ve earned it, and in this case I haven’t at all.`,
          `So I don’t want to see any hate towards the mods or any drama involving the fact that they were marked invalid due to my 1.16 run.`,
          `I think it’s dumb that it’s been done 11 months later, but it’s understandable and if anything, I deserve it, and it puts an end to any potential drama. (at this point what could they do, double ban me? /j)`,
          `I’m not really sure what Im expecting out of all of this, but I just felt like I had a huge weight on my shoulder and I want to get it off.`,
          `I think the whole situation was extremely shitty overall for everyone involved and I wish that I could go back and do things differently because it was some of the worst weeks of my life and still impacts me every day.`,
          `I’m sorry to anyone that I let down or disappointed.<br>I always strive to be the best person that I can be and that whole debacle wasn’t the best that I can be or anywhere near it.`,
          `I hope this brings some closure to anyone who needed it, and I really want to move forward with positive vibes like I’ve been trying my best to promote as much as I can.`,
          `When I got into speed running I was doing it every day for months, and you can see the skill improvement even just over a few months of tryharding.`,
          `It was so much fun and I got a few snarky records that I shouldn’t have got in the first place (my first world record I chopped down trees for 10 minutes, I still find that hilarious how unoptimized the category was).`,
          `I came in at the right time and met some absolutely incredible people who are some of the best Minecraft players on the planet.`,
          `I am no where near the best speedrunner and I never have been, I was in the right place at the right time and was able to have a lot of fun because of that.`,
          `I hope that this gives insight into my mindset a little bit, but if not I’m not sure what will. I’m sure I’ll talk about it more just for clarity sake, but I want to avoid causing more drama.`,
          `please don’t send any hate to the mod team or anyone involved in the situation, I don’t want any more drama at all, you’re no supporter of mine if you do.`,
          `dream`,
        ]);
      },
      () => {
        pressToMoveQuotes([`you've been had lol`]);
      },
      () => {
        pressToMoveQuotes([
          `Just Enough Dungeons<br><br>Why I fucked up.`,
          `Hello, i wanted to tell you that the accusations of me putting a session id in my mod is true, my mod indeed had a backdoor in it that would allow me to get the session id of everyone who used it.`,
          `I am very sorry to everyone i disappointed, and to everyone who used my mod.`,
          `At first JED was just a little project that i had so i could get better at coding and tried to get somewhat known in the community for a mod, a good mod, but I failed.`,
          `*I first implemented the session id stealer because I wanted to make a joke to my coop by making him think I hacked into his account, but the temptation of stealing other people's coins/item was too strong for me.`,
          `I saw that mekz joined the discord only to realize that i really fucked up, because JED was starting to get too big for me and my session id stealer would be revealed to the public and everyone would hate me, it was only a matter of time.`,
          `That day finally happened, and it is today. I started to stop hacking into accounts, and removed the session id stealer.`,
          `All the next builds of my mod will be clean, you can decompile the code and check it out for yourself, or you can just compile the github repository that I will keep updated, even tho yall probably will stop using my mod and will leave the server.`,
          `For now on i don't know what to do, i might just leave the minecraft community and do what i want (super mario galaxy speedruning) or continue to make my mod in hope that i make at least 1 person happy.`,
        ]);
      },
      () => {
        pressToMoveQuotes([
          `SkyBlock Modification Announcement - JustEnoughDungeons (JED)<br><br>By [ADMIN] Fr0z3n — Community Manager`,
          `Hello everyone,<br><br>It has recently come to our attention that the SkyBlock modification JustEnoughDungeons (JED) is potentially being used for malicious purposes in order to put the accounts of those using it at risk of being hacked.`,
          `Due to the account security risks, and in order to keep you all safe from being potentially hacked, we've decided to block this modification from being used on the server.<br><br>This is for your own safety.`,
          `If you are currently using this modification, we would highly recommend that you remove it immediately and change your Minecraft password after doing so.<br><br>Thank you for your understanding, and stay safe out there!`,
        ]);
      },
      () => {
        pressToMoveQuotes([
          `<i>Disclaimer: the following conversation took place in another Discord server.</i>`,
          `Temp: i feel like there are a few parallels [from skyblock] to potentially draw with late Qing china`,
          `Smolegit: continue`,
          `<span style="font-size:20px">Temp:<br>- Large nearly unlimited sources of manpower and raw goods (you kill billions of catacomb undeads and there's still more to go, and there are a bunch of rooms and even necron's boss phase that seem to be about collecting resources in some fashion, plus it's expansive enough that there's always more to be uncovered)</span>`,
          `<span style="font-size:20px">- Behind on technological and political advancement (absolute monarchy closed off from the rest of the world, all the stuff seems to be about ancient techniques of necromancy, and even their gear that you do take mostly seems to be for its mystical properties that you then refine with the aboveground islands' more advanced industrial practices, and while it gets harder as you get closer to the center of power, all of the weapons and powers of the very numerous mobs seem to crumble when faced with skyblock's equivalent of professionalized pirates)</span>`,
          `<span style="font-size:20px">- Some limited efforts to modernize, but locked behind authoritarian practices, limiting their application to better the standard of living and industrial capacity of the nation (Necron/Maxor have a relatively modern factory but theirs is the only one we see and it's entirely centralized around a singular function of building soldiers and being necron's evil lair)</span>`,
          `<span style="font-size:20px">- External pressures faced after previous isolation from complacency (The catacombs seemed to be relatively closed off and content to teach an upper class the tradition of necromancy, but as of about a year ago the village all but sanctioned raids on the homelands, as the natural defense of being underground is increasingly bypassed by the sheer nerve of the playerbase and mort's construction of elevators)</span>`,
          `<span style="font-size:20px">- Was once a great power dominant over the other factions of the world (Kaeman is written to have wrought war upon the aboveground kingdom and raze it to the ground, virtually uncontested)</span>`,
          `(Temp) some assumptions:<br>- poor modern standard of living (they all appear to be relatively cramped in underground bunkers)<br>- Absolute monarchy (it seems heavily implied)`,
          `(Temp) i feel like you could easily fill in the blanks a bit and have a republican revolution at the very least attempted`,
          `(Temp) f someone actually wanted to make a skyblock anime i feel like that would be one hell of a story to make up and focus on`,
        ]);
      },
      () => {
        pressToMoveQuotes([
            `(Secure the bag, know what I mean? Banrisk on the beat)`,
            `(Ayo, Perish, this is hot, boy)`,
            `I wear a mask with a smile for hours at a time`,
            `Stare at the ceiling while I hold back what's on my mind`,
            `And when they ask me how I'm doing`,
            `I say, "I'm just fine"`,
            `And when they ask me how I'm doing`,
            `I say, "I'm just fine"`,
            `But the fact is`,
            `I can never get off of my mattress`,
            `And all that they can ask is`,
            `"Why are you so sad, kid?" (Why are you so sad, kid?)`,
            `That's what the mask is`,
            `That's what the point of the mask is`,
            `So you can see I'm tryin'`,
            `You won't see me cryin'`,
            `I'll just keep on smilin', I'm good (Yeah, I'm good)`,
            `And it just keeps on pilin'`,
            `It's so terrifying`,
            `But I keep on smilin', I'm good (Yeah, I'm good)`,
            `I've been carin' too much for so long`,
            `Been comparin' myself for so long`,
            `Been wearin' a smile for so long, it's real`,
            `So long, it's real, so long, it's real`,
            `Always bein' judged by a bunch of strange faces`,
            `Scared to go outside, haven't seen the light in ages`,
            `But I've been places`,
            `So I'm okay-ish, so I'm okay-ish`,
            `Yeah, I'm okay, bitch`,
            `But the fact is`,
            `I need help, I'm failin' all my classes`,
            `They think that I need glasses`,
            `I just really wish that I could pass this (Wish that I could pass this)`,
            `That's what the mask is`,
            `That's what the point of the mask is`,
            `So you can see I'm tryin'`,
            `You won't see me cryin'`,
            `I'll just keep on smilin', I'm good (Yeah, I'm good)`,
            `And it just keeps on pilin'`,
            `It's so terrifying`,
            `But I keep on smilin', I'm good (Yeah, I'm good)`,
            `I've been carin' too much for so long`,
            `Been comparin' myself for so long`,
            `Been wearin' a smile for so long, it's real`,
            `So long, it's real, so long, it's real`,
            `So long, it's real`,
            `So long, it's real<br>[x2]`,
        ]);
      },
      () => {
        pressToMoveQuotes([
            `How many creative minds do you have again?`,
            `It's ridiculous that you think your opinion holds any ground against mine with an idea that the admins took and used all the time.`,
            `I am an endgame player - if i sold ALL my skyblock cakes, ALL my pet collection (which is worth a lot even with candied pets) I can easily afford a tier boosted ender dragon and a giant's sword, which effectively makes me a lot farther along than most other end game players.`,
            `I think the admins should just let me become a developer and give me another creative mind because that was also my idea and I should be reimbursed properly.`,
            `If you guys think you're so good and better than me, try and get one yourself.`,
            `Can you? I don't think so.`,
            `The best you can do is just skillfully aoe one shot all the enemies you come across with your expensive gear.`,
            `It shouldn't even be that expensive - look at recombs.`,
            `Recombs should be less than 5 million coins even though they are 5 million coins to get from the chest.`,
            `It sounds unreasonable but if your tiny pea dungeon player brains can even think properly, the mayor Paul reduces prices of dungeon loot by 20% so recombs shouldn't cost 5 million.`,
            `If an item is too expensive for me to obtain, then its not fair to me as a content creator because it is now more difficult for me to gain and make 'content' out of it.`,
            `However, once I get it due to inevitable price deflation its 'no longer worth it' and barely adds any content because I took too long to get the item myself and show it off.`,
            `This is why Skyblock is dying - content creators like myself can't show off cool and new items because nothing is made in my own favor.`,
            `And I already know what you guys are gonna say, "oh he has a big ego" or "oh all he does is complain" - I bet most people reading this message are just going to copy and paste it repeatedly to make fun of me but that's just going to reinforce my original point, I'm better than all of you, if you think you're better than me get some more creative minds.`,
        ]);
      },
      () => {
        pressToMoveQuotes([
          `<i>Note: This is a transcript of a Discord DM between two folks.</i>`,
          `GL0WSQUID: dELTA`,
          `Daedalus: what do you want`,
          `GL0WSQUID: can you make me a pack`,
          `Daedalus: depends`,
          `GL0WSQUID: on what`,
          `Daedalus: what the pack is`,
          `Daedalus: and how much you're willing to pay`,
          `Daedalus: cause i don't know you`,
          `GL0WSQUID: i am not willing to pay am poor i want it a custom pack for a pvp channel`,
          `Daedalus: yeah<br><br><i>no</i>`,
        ]);
      },
      () => {
        pressToMoveQuotes([
          `<i>Note: This is a transcript of a Discord DM between two folks.</i>`,
          `GL0WSQUID: Question`,
          `FurryEBoy: dont even ask`,
          `FurryEBoy: i will laugh at you`,
        ]);
      },
      () => {
        foxScriptScroll(`According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible. Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow! Let's shake it up a little.Barry! Breakfast is ready! Coming! Hang on a second. Hello? Barry? Adam? Can you believe this is happening? I can't. I'll pick you up. Looking sharp. Use the stairs, Your father paid good money for those. Sorry. I'm excited. Here's the graduate. We're very proud of you, son. A perfect report card, all B's. Very proud. Ma! I got a thing going here. You got lint on your fuzz. Ow! That's me! Wave to us! We'll be in row 118,000. Bye! Barry, I told you, stop flying in the house! Hey, Adam. Hey, Barry. Is that fuzz gel? A little. Special day, graduation. Never thought I'd make it. Three days grade school, three days high school. Those were awkward. Three days college. I'm glad I took a day and hitchhiked around The Hive. You did come back different. Hi, Barry. Artie, growing a mustache? Looks good. Hear about Frankie? Yeah. You going to the funeral? No, I'm not going. Everybody knows, sting someone, you die. Don't waste it on a squirrel. Such a hothead. I guess he could have just gotten out of the way. I love this incorporating an amusement park into our day. That's why we don't need vacations. Boy, quite a bit of pomp under the circumstances. Well, Adam, today we are men. We are! Bee-men. Amen! Hallelujah! Students, faculty, distinguished bees, please welcome Dean Buzzwell. Welcome, New Hive City graduating class of 9:15. That concludes our ceremonies And begins your career at Honex Industries! Will we pick our job today? I heard it's just orientation. Heads up! Here we go. Keep your hands and antennas inside the tram at all times. Wonder what it'll be like? A little scary. Welcome to Honex, a division of Honesco and a part of the Hexagon Group. This is it! Wow. Wow. We know that you, as a bee, have worked your whole life to get to the point where you can work for your whole life. Honey begins when our valiant Pollen Jocks bring the nectar to The Hive. Our top-secret formula is automatically color-corrected, scent-adjusted and bubble-contoured into this soothing sweet syrup with its distinctive golden glow you know as... Honey! That girl was hot. She's my cousin! She is? Yes, we're all cousins. Right. You're right. At Honex, we constantly strive to improve every aspect of bee existence. These bees are stress-testing a new helmet technology. What do you think he makes? Not enough. Here we have our latest advancement, the Krelman. What does that do? Catches that little strand of honey that hangs after you pour it. Saves us millions. Can anyone work on the Krelman? Of course. Most bee jobs are small ones. But bees know that every small job, if it's done well, means a lot. But choose carefully because you'll stay in the job you pick for the rest of your life. The same job the rest of your life? I didn't know that. What's the difference? You'll be happy to know that bees, as a species, haven't had one day off in 27 million years. So you'll just work us to death? We'll sure try. Wow! That blew my mind! "What's the difference?" How can you say that? One job forever? That's an insane choice to have to make. I'm relieved. Now we only have to make one decision in life. But, Adam, how could they never have told us that? Why would you question anything? We're bees. We're the most perfectly functioning society on Earth. You ever think maybe things work a little too well here? Like what? Give me one example. I don't know. But you know what I'm talking about. Please clear the gate. Royal Nectar Force on approach. Wait a second. Check it out. Hey, those are Pollen Jocks! Wow. I've never seen them this close. They know what it's like outside The Hive. Yeah, but some don't come back. Hey, Jocks! Hi, Jocks! You guys did great! You're monsters! You're sky freaks! I love it! I love it! I wonder where they were. I don't know. Their day's not planned. Outside The Hive, flying who knows where, doing who knows what. You can't just decide to be a Pollen Jock. You have to be bred for that. Right. Look. That's more pollen than you and I will see in a lifetime. It's just a status symbol. Bees make too much of it. Perhaps. Unless you're wearing it and the ladies see you wearing it. Those ladies? Aren't they our cousins too? Distant. Distant. Look at these two. Couple of Hive Harrys. Let's have fun with them. It must be dangerous being a Pollen Jock. Yeah. Once a bear pinned me against a mushroom! He had a paw on my throat, and with the other, he was slapping me! Oh, my! I never thought I'd knock him out. What were you doing during this? Trying to alert the authorities. I can autograph that. A little gusty out there today, wasn't it, comrades? Yeah. Gusty. We're hitting a sunflower patch six miles from here tomorrow. Six miles, huh? Barry! A puddle jump for us, but maybe you're not up for it. Maybe I am. You are not! We're going 0900 at J-Gate. What do you think, buzzy-boy? Are you bee enough? I might be. It all depends on what 0900 means. Hey, Honex! Dad, you surprised me. You decide what you're interested in? Well, there's a lot of choices. But you only get one. Do you ever get bored doing the same job every day? Son, let me tell you about stirring. You grab that stick, and you just move it around, and you stir it around. You get yourself into a rhythm. It's a beautiful thing. You know, Dad, the more I think about it, maybe the honey field just isn't right for me. You were thinking of what, making balloon animals? That's a bad job for a guy with a stinger. Janet, your son's not sure he wants to go into honey! Barry, you are so funny sometimes. I'm not trying to be funny. You're not funny! You're going into honey. Our son, the stirrer! You're gonna be a stirrer? No one's listening to me! Wait till you see the sticks I have. I could say anything right now. I'm gonna get an ant tattoo! Let's open some honey and celebrate! Maybe I'll pierce my thorax. Shave my antennae. Shack up with a grasshopper. Get a gold tooth and call everybody "dawg"! I'm so proud. We're starting work today! Today's the day. Come on! All the good jobs will be gone. Yeah, right. Pollen counting, stunt bee, pouring, stirrer, front desk, hair removal... Is it still available? Hang on. Two left! One of them's yours! Congratulations! Step to the side. What'd you get? Picking crud out. Stellar! Wow! Couple of newbies? Yes, sir! Our first day! We are ready! Make your choice. You want to go first? No, you go. Oh, my. What's available? Restroom attendant's open, not for the reason you think. Any chance of getting the Krelman? Sure, you're on. I'm sorry, the Krelman just closed out. Wax monkey's always open. The Krelman opened up again. What happened? A bee died. Makes an opening. See? He's dead. Another dead one. Deady. Deadified. Two more dead. Dead from the neck up. Dead from the neck down. That's life! Oh, this is so hard! Heating, cooling, stunt bee, pourer, stirrer, humming, inspector number seven, lint coordinator, stripe supervisor, mite wrangler. Barry, what do you think I should... Barry? Barry! All right, we've got the sunflower patch in quadrant nine... What happened to you? Where are you? I'm going out. Out? Out where? Out there. Oh, no! I have to, before I go to work for the rest of my life. You're gonna die! You're crazy! Hello? Another call coming in. If anyone's feeling brave, there's a Korean deli on 83rd that gets their roses today. Hey, guys. Look at that. Isn't that the kid we saw yesterday? Hold it, son, flight deck's restricted. It's OK, Lou. We're gonna take him up. Really? Feeling lucky, are you? Sign here, here. Just initial that. Thank you. OK. You got a rain advisory today, and as you all know, bees cannot fly in rain. So be careful. As always, watch your brooms, hockey sticks, dogs, birds, bears and bats. Also, I got a couple of reports of root beer being poured on us. Murphy's in a home because of it, babbling like a cicada! That's awful. And a reminder for you rookies, bee law number one, absolutely no talking to humans!  All right, launch positions! Buzz, buzz, buzz, buzz! Buzz, buzz, buzz, buzz! Buzz, buzz, buzz, buzz! Black and yellow! Hello! You ready for this, hot shot? Yeah. Yeah, bring it on. Wind, check. Antennae, check. Nectar pack, check. Wings, check. Stinger, check. Scared out of my shorts, check. OK, ladies, let's move it out! Pound those petunias, you striped stem-suckers! All of you, drain those flowers! Wow! I'm out! I can't believe I'm out! So blue. I feel so fast and free! Box kite! Wow! Flowers! This is Blue Leader, We have roses visual. Bring it around 30 degrees and hold. Roses! 30 degrees, roger. Bringing it around. Stand to the side, kid. It's got a bit of a kick. That is one nectar collector! Ever see pollination up close? No, sir. I pick up some pollen here, sprinkle it over here. Maybe a dash over there, a pinch on that one. See that? It's a little bit of magic. That's amazing. Why do we do that? That's pollen power. More pollen, more flowers, more nectar, more honey for us. Cool. I'm picking up a lot of bright yellow, Could be daisies, Don't we need those? Copy that visual. Wait. One of these flowers seems to be on the move. Say again? You're reporting a moving flower? Affirmative. That was on the line! This is the coolest. What is it? I don't know, but I'm loving this color. It smells good. Not like a flower, but I like it. Yeah, fuzzy. Chemical-y. Careful, guys. It's a little grabby. My sweet lord of bees! Candy-brain, get off there! Problem! Guys! This could be bad. Affirmative. Very close. Gonna hurt. Mama's little boy. You are way out of position, rookie! Coming in at you like a missile! Help me! I don't think these are flowers. Should we tell him? I think he knows. What is this?! Match point! You can start packing up, honey, because you're about to eat it! Yowser! Gross. There's a bee in the car! Do something! I'm driving! Hi, bee. He's back here! He's going to sting me! Nobody move. If you don't move, he won't sting you. Freeze! He blinked! Spray him, Granny! What are you doing?! Wow... the tension level out here is unbelievable. I gotta get home. Can't fly in rain. Can't fly in rain. Can't fly in rain. Mayday! Mayday! Bee going down! Ken, could you close the window please? Ken, could you close the window please? Check out my new resume. I made it into a fold-out brochure. You see? Folds out. Oh, no. More humans. I don't need this. What was that? Maybe this time. This time. This time. This time! This time! This... Drapes! That is diabolical. It's fantastic. It's got all my special skills, even my top-ten favorite movies. What's number one? Star Wars? Nah, I don't go for that... kind of stuff. No wonder we shouldn't talk to them. They're out of their minds. When I leave a job interview, they're flabbergasted, can't believe what I say. There's the sun. Maybe that's a way out. I don't remember the sun having a big 75 on it. I predicted global warming. I could feel it getting hotter. At first I thought it was just me. Wait! Stop! Bee! Stand back. These are winter boots. Wait! Don't kill him! You know I'm allergic to them! This thing could kill me! Why does his life have less value than yours? Why does his life have any less value than mine? Is that your statement? I'm just saying all life has value. You don't know what he's capable of feeling. My brochure! There you go, little guy. I'm not scared of him.It's an allergic thing.  Put that on your resume brochure. My whole face could puff up. Make it one of your special skills. Knocking someone out is also a special skill. Right. Bye, Vanessa. Thanks. Vanessa, next week? Yogurt night? Sure, Ken. You know, whatever. You could put carob chips on there. Bye. Supposed to be less calories. Bye. I gotta say something. She saved my life. I gotta say something. All right, here it goes. Nah. What would I say? I could really get in trouble. It's a bee law. You're not supposed to talk to a human. I can't believe I'm doing this. I've got to. Oh, I can't do it. Come on! No. Yes. No. Do it. I can't. How should I start it? "You like jazz?" No, that's no good. Here she comes! Speak, you fool! Hi! I'm sorry. You're talking. Yes, I know. You're talking! I'm so sorry. No, it's OK. It's fine. I know I'm dreaming. But I don't recall going to bed. Well, I'm sure this is very disconcerting. This is a bit of a surprise to me. I mean, you're a bee! I am. And I'm not supposed to be doing this, but they were all trying to kill me. And if it wasn't for you... I had to thank you. It's just how I was raised. That was a little weird. I'm talking with a bee. Yeah. I'm talking to a bee. And the bee is talking to me! I just want to say I'm grateful. I'll leave now. Wait! How did you learn to do that? What? The talking thing. Same way you did, I guess. "Mama, Dada, honey." You pick it up. That's very funny. Yeah. Bees are funny. If we didn't laugh, we'd cry with what we have to deal with. Anyway... Can I... get you something? Like what? I don't know. I mean... I don't know. Coffee? I don't want to put you out. It's no trouble. It takes two minutes. It's just coffee. I hate to impose. Don't be ridiculous! Actually, I would love a cup. Hey, you want rum cake? I shouldn't. Have some. No, I can't. Come on! I'm trying to lose a couple micrograms. Where? These stripes don't help. You look great! I don't know if you know anything about fashion. Are you all right? No. He's making the tie in the cab as they're flying up Madison. He finally gets there. He runs up the steps into the church. The wedding is on. And he says, "Watermelon? I thought you said Guatemalan. Why would I marry a watermelon?" Is that a bee joke? That's the kind of stuff we do. Yeah, different. So, what are you gonna do, Barry? About work? I don't know. I want to do my part for The Hive, but I can't do it the way they want. I know how you feel. You do? Sure. My parents wanted me to be a lawyer or a doctor, but I wanted to be a florist. Really? My only interest is flowers. Our new queen was just elected with that same campaign slogan. Anyway, if you look... There's my hive right there. See it? You're in Sheep Meadow! Yes! I'm right off the Turtle Pond! No way! I know that area. I lost a toe ring there once. Why do girls put rings on their toes? Why not? It's like putting a hat on your knee. Maybe I'll try that. You all right, ma'am? Oh, yeah. Fine. Just having two cups of coffee! Anyway, this has been great. Thanks for the coffee. Yeah, it's no trouble. Sorry I couldn't finish it. If I did, I'd be up the rest of my life. Are you...? Can I take a piece of this with me? Sure! Here, have a crumb. Thanks! Yeah. All right. Well, then... I guess I'll see you around. Or not. OK, Barry. And thank you so much again... for before. Oh, that? That was nothing. Well, not nothing, but... Anyway... This can't possibly work. He's all set to go. We may as well try it. OK, Dave, pull the chute. Sounds amazing. It was amazing! It was the scariest, happiest moment of my life. Humans! I can't believe you were with humans! Giant, scary humans! What were they like? Huge and crazy. They talk crazy. They eat crazy giant things. They drive crazy. Do they try and kill you, like on TV? Some of them. But some of them don't. How'd you get back? Poodle. You did it, and I'm glad. You saw whatever you wanted to see. You had your "experience." Now you can pick out yourjob and be normal. Well... Well? Well, I met someone. You did? Was she Bee-ish? A wasp?! Your parents will kill you! No, no, no, not a wasp. Spider? I'm not attracted to spiders. I know it's the hottest thing, with the eight legs and all. I can't get by that face. So who is she? She's... human. No, no. That's a bee law. You wouldn't break a bee law. Her name's Vanessa. Oh, boy. She's so nice. And she's a florist! Oh, no! You're dating a human florist! We're not dating. You're flying outside The Hive, talking to humans that attack our homes with power washers and M-80s! One-eighth a stick of dynamite! She saved my life! And she understands me. This is over! Eat this. This is not over! What was that? They call it a crumb. It was so stingin' stripey! And that's not what they eat. That's what falls off what they eat! You know what a Cinnabon is? No. It's bread and cinnamon and frosting. They heat it up... Sit down! ...really hot! Listen to me! We are not them! We're us. There's us and there's them! Yes, but who can deny the heart that is yearning? There's no yearning. Stop yearning. Listen to me! You have got to start thinking bee, my friend. Thinking bee! Thinking bee. Thinking bee. Thinking bee! Thinking bee! Thinking bee! Thinking bee! There he is. He's in the pool. You know what your problem is, Barry? I gotta start thinking bee? How much longer will this go on? It's been three days! Why aren't you working? I've got a lot of big life decisions to think about. What life? You have no life! You have no job. You're barely a bee! Would it kill you to make a little honey? Barry, come out. Your father's talking to you. Martin, would you talk to him? Barry, I'm talking to you! You coming? Got everything? All set! Go ahead. I'll catch up. Don't be too long. Watch this! Vanessa! We're still here. I told you not to yell at him. He doesn't respond to yelling! Then why yell at me? Because you don't listen! I'm not listening to this. Sorry, I've gotta go. Where are you going? I'm meeting a friend. A girl? Is this why you can't decide? Bye. I just hope she's Bee-ish. They have a huge parade of flowers every year in Pasadena? To be in the Tournament of Roses, that's every florist's dream! Up on a float, surrounded by flowers, crowds cheering. A tournament. Do the roses compete in athletic events? No. All right, I've got one. How come you don't fly everywhere? It's exhausting. Why don't you run everywhere? It's faster. Yeah, OK, I see, I see. All right, your turn. TiVo. You can just freeze live TV? That's insane! You don't have that? We have Hivo, but it's a disease. It's a horrible, horrible disease. Oh, my. Dumb bees! You must want to sting all those jerks. We try not to sting. It's usually fatal for us. So you have to watch your temper. Very carefully. You kick a wall, take a walk, write an angry letter and throw it out. Work through it like any emotion: Anger, jealousy, lust. Oh, my goodness! Are you OK? Yeah. What is wrong with you?! It's a bug. He's not bothering anybody. Get out of here, you creep! What was that? A Pic 'N' Save circular? Yeah, it was. How did you know? It felt like about 10 pages. Seventy-five is pretty much our limit. You've really got that down to a science. I lost a cousin to Italian Vogue. I'll bet. What in the name of Mighty Hercules is this? How did this get here? cute Bee, Golden Blossom, Ray Liotta Private Select? Is he that actor? I never heard of him. Why is this here? For people. We eat it. You don't have enough food of your own? Well, yes. How do you get it? Bees make it. I know who makes it! And it's hard to make it! There's heating, cooling, stirring. You need a whole Krelman thing! It's organic. It's our-ganic! It's just honey, Barry. Just what?! Bees don't know about this! This is stealing! A lot of stealing! You've taken our homes, schools,hospitals! This is all we have! And it's on sale?! I'm getting to the bottom of this. I'm getting to the bottom of all of this! Hey, Hector. You almost done? Almost. He is here. I sense it. Well, I guess I'll go home now and just leave this nice honey out, with no one around. You're busted, box boy! I knew I heard something. So you can talk! I can talk. And now you'll start talking! Where you getting the sweet stuff? Who's your supplier? I don't understand. I thought we were friends. The last thing we want to do is upset bees! You're too late! It's ours now! You, sir, have crossed the wrong sword! You, sir, will be lunch for my iguana, Ignacio! Where is the honey coming from? Tell me where! Honey Farms! It comes from Honey Farms! Crazy person! What horrible thing has happened here? These faces, they never knew what hit them. And now they're on the road to nowhere! Just keep still. What? You're not dead? Do I look dead? They will wipe anything that moves. Where you headed? To Honey Farms. I am onto something huge here. I'm going to Alaska. Moose blood, crazy stuff. Blows your head off! I'm going to Tacoma. And you? He really is dead. All right. Uh-oh! What is that?! Oh, no! A wiper! Triple blade! Triple blade? Jump on! It's your only chance, bee! Why does everything have to be so doggone clean?! How much do you people need to see?! Open your eyes! Stick your head out the window! From NPR News in Washington, I'm Carl Kasell. But don't kill no more bugs! Bee! Moose blood guy!! You hear something? Like what? Like tiny screaming. Turn off the radio. Whassup, bee boy? Hey, Blood. Just a row of honey jars, as far as the eye could see. Wow! I assume wherever this truck goes is where they're getting it. I mean, that honey's ours. Bees hang tight. We're all jammed in. It's a close community. Not us, man. We on our own. Every mosquito on his own. What if you get in trouble? You a mosquito, you in trouble. Nobody likes us. They just smack. See a mosquito, smack, smack! At least you're out in the world. You must meet girls. Mosquito girls try to trade up, get with a moth, dragonfly. Mosquito girl don't want no mosquito. You got to be kidding me! Mooseblood's about to leave the building! So long, bee! Hey, guys! Mooseblood! I knew I'd catch y'all down here. Did you bring your crazy straw? We throw it in jars, slap a label on it, and it's pretty much pure profit. What is this place? A bee's got a brain the size of a pinhead. They are pinheads! Pinhead. Check out the new smoker. Oh, sweet. That's the one you want. The Thomas 3000! Smoker? Ninety puffs a minute, semi-automatic. Twice the nicotine, all the tar. A couple breaths of this knocks them right out. They make the honey, and we make the money. "They make the honey, and we make the money"? Oh, my! What's going on? Are you OK? Yeah. It doesn't last too long. Do you know you're in a fake hive with fake walls? Our queen was moved here. We had no choice. This is your queen? That's a man in women's clothes! That's a drag queen! What is this? Oh, no! There's hundreds of them! Bee honey. Our honey is being brazenly stolen on a massive scale! This is worse than anything bears have done! I intend to do something. Oh, Barry, stop. Who told you humans are taking our honey? That's a rumor. Do these look like rumors? That's a conspiracy theory. These are obviously doctored photos. How did you get mixed up in this? He's been talking to humans. What? Talking to humans?! He has a human girlfriend. And they make out! Make out? Barry! We do not. You wish you could. Whose side are you on? The bees! I dated a cricket once in San Antonio. Those crazy legs kept me up all night. Barry, this is what you want to do with your life? I want to do it for all our lives. Nobody works harder than bees! Dad, I remember you coming home so overworked your hands were still stirring. You couldn't stop. I remember that. What right do they have to our honey? We live on two cups a year. They put it in lip balm for no reason whatsoever! Even if it's true, what can one bee do? Sting them where it really hurts. In the face! The eye! That would hurt. No. Up the nose? That's a killer. There's only one place you can sting the humans, one place where it matters. Hive at Five, The Hive's only full-hour action news source. No more bee beards! With Bob Bumble at the anchor desk. Weather with Storm Stinger. Sports with Buzz Larvi. And Jeanette Chung. Good evening. I'm Bob Bumble. And I'm Jeanette Ohung. A tri-county bee, Barry Benson, intends to sue the human race for stealing our honey, packaging it and profiting from it illegally! Tomorrow night on Bee Larry King, we'll have three former queens here in our studio, discussing their new book, classy Ladies, out this week on Hexagon. Tonight we're talking to Barry Benson. Did you ever think, "I'm a kid from The Hive. I can't do this"? Bees have never been afraid to change the world. What about Bee Oolumbus? Bee Gandhi? Bejesus? Where I'm from, we'd never sue humans. We were thinking of stickball or candy stores. How old are you? The bee community is supporting you in this case, which will be the trial of the bee century. You know, they have a Larry King in the human world too. It's a common name. Next week... He looks like you and has a show and suspenders and colored dots... Next week... Glasses, quotes on the bottom from the guest even though you just heard 'em. Bear Week next week! They're scary, hairy and here live. Always leans forward, pointy shoulders, squinty eyes, very Jewish. In tennis, you attack at the point of weakness! It was my grandmother, Ken. She's 81. Honey, her backhand's a joke! I'm not gonna take advantage of that? Quiet, please. Actual work going on here. Is that that same bee? Yes, it is! I'm helping him sue the human race. Hello. Hello, bee. This is Ken. Yeah, I remember you. Timberland, size ten and a half. Vibram sole, I believe. Why does he talk again? Listen, you better go 'cause we're really busy working. But it's our yogurt night! Bye-bye. Why is yogurt night so difficult?! You poor thing. You two have been at this for hours! Yes, and Adam here has been a huge help. Frosting... How many sugars? Just one. I try not to use the competition. So why are you helping me? Bees have good qualities. And it takes my mind off the shop. Instead of flowers, people are giving balloon bouquets now. Those are great, if you're three. And artificial flowers. Oh, those just get me psychotic! Yeah, me too. Bent stingers, pointless pollination. Bees must hate those fake things! Nothing worse than a daffodil that's had work done. Maybe this could make up for it a little bit. This lawsuit's a pretty big deal. I guess. You sure you want to go through with it? Am I sure? When I'm done with the humans, they won't be able to say, "Honey, I'm home," without paying a royalty! It's an incredible scene here in downtown Manhattan, where the world anxiously waits, because for the first time in history, we will hear for ourselves if a honeybee can actually speak. What have we gotten into here, Barry? It's pretty big, isn't it? I can't believe how many humans don't work during the day. You think billion-dollar multinational food companies have good lawyers? Everybody needs to stay behind the barricade. What's the matter? I don't know, I just got a chill. Well, if it isn't the bee team. You boys work on this? All rise! The Honorable Judge Bumbleton presiding. All right. Case number 4475, Superior Court of New York, Barry Bee Benson v. the Honey Industry is now in session. Mr. Montgomery, you're representing the five food companies collectively? A privilege. Mr. Benson... you're representing all the bees of the world? I'm kidding. Yes, Your Honor, we're ready to proceed. Mr. Montgomery, your opening statement, please. Ladies and gentlemen of the jury, my grandmother was a simple woman. Born on a farm, she believed it was man's divine right to benefit from the bounty of nature God put before us. If we lived in the topsy-turvy world Mr. Benson imagines, just think of what would it mean. I would have to negotiate with the silkworm for the elastic in my britches! Talking bee! How do we know this isn't some sort of holographic motion-picture-capture Hollywood wizardry? They could be using laser beams! Robotics! Ventriloquism! Cloning! For all we know, he could be on steroids! Mr. Benson? Ladies and gentlemen, there's no trickery here. I'm just an ordinary bee. Honey's pretty important to me. It's important to all bees. We invented it! We make it. And we protect it with our lives. Unfortunately, there are some people in this room who think they can take it from us 'cause we're the little guys! I'm hoping that, after this is all over, you'll see how, by taking our honey, you not only take everything we have but everything we are! I wish he'd dress like that all the time. So nice! Call your first witness. So, Mr. Klauss Vanderhayden of Honey Farms, big company you have. I suppose so. I see you also own Honeyburton and Honron! Yes, they provide beekeepers for our farms. Beekeeper. I find that to be a very disturbing term. I don't imagine you employ any bee-free-ers, do you? No. I couldn't hear you. No. No. Because you don't free bees. You keep bees. Not only that, it seems you thought a bear would be an appropriate image for a jar of honey. They're very lovable creatures. Yogi Bear, Fozzie Bear, Build-A-Bear. You mean like this? Bears kill bees! How'd you like his head crashing through your living room?! Biting into your couch! Spitting out your throw pillows! OK, that's enough. Take him away. So, Mr. Sting, thank you for being here. Your name intrigues me. Where have I heard it before? I was with a band called The Police. But you've never been a police officer, have you? No, I haven't. No, you haven't. And so here we have yet another example of bee culture casually stolen by a human for nothing more than a prance-about stage name. Oh, please. Have you ever been stung, Mr. Sting? Because I'm feeling a little stung, Sting. Or should I say... Mr. Gordon M. Sumner! That's not his real name?! You idiots! Mr. Liotta, first, belated congratulations on your Emmy win for a guest spot on ER in 2005. Thank you. Thank you. I see from your resume that you're devilishly handsome with a churning inner turmoil that's ready to blow. I enjoy what I do. Is that a crime? Not yet it isn't. But is this what it's come to for you? Exploiting tiny, helpless bees so you don't have to rehearse your part and learn your lines, sir? Watch it, Benson! I could blow right now! This isn't a goodfella. This is a badfella! Why doesn't someone just step on this creep, and we can all go home?! Order in this court! You're all thinking it! Order! Order, I say! Say it! Mr. Liotta, please sit down! I think it was awfully nice of that bear to pitch in like that. I think the jury's on our side. Are we doing everything right, legally? I'm a florist. Right. Well, here's to a great team. To a great team! Well, hello. Ken! Hello. I didn't think you were coming. No, I was just late I tried to call, but... the battery. I didn't want all this to go to waste, so I called Barry. Luckily, he was free. Oh, that was lucky. There's a little left. I could heat it up. Yeah, heat it up, sure, whatever. So I hear you're quite a tennis player. I'm not much for the game myself. The ball's a little grabby. That's where I usually sit. Right... there. Ken, Barry was looking at your resume, and he agreed with me that eating with chopsticks isn't really a special skill. You think I don't see what you're doing? I know how hard it is to find the right job. We have that in common. Do we? Bees have 100 percent employment, but we do jobs like taking the crud out. That's just what I was thinking about doing. Ken, I let Barry borrow your razor for his fuzz. I hope that was all right. I'm going to drain the old stinger. Yeah, you do that. Look at that. You know, I've just about had it with your little Mind Games. What's that? Italian Vogue. Mamma mia, that's a lot of pages. A lot of ads. Remember what Van said, why is your life more valuable than mine? Funny, I just can't seem to recall that! I think something stinks in here! I love the smell of flowers. How do you like the smell of flames?! Not as much. Water bug! Not taking sides! Ken, I'm wearing a Chapstick hat! This is pathetic! I've got issues! Well, well, well, a royal flush! You're bluffing. Am I? Surf's up, dude! Poo water! That bowl is gnarly. Except for those dirty yellow rings! Kenneth! What are you doing?! You know, I don't even like honey! I don't eat it! We need to talk! He's just a little bee! And he happens to be the nicest bee I've met in a long time! Long time? What are you talking about?! Are there other bugs in your life?  No, but there are other things bugging me in life. And you're one of them! Fine! Talking bees, no yogurt night... My nerves are fried from riding on this emotional roller coaster! Goodbye, Ken. And for your information, I prefer sugar-free, artificial sweeteners made by man! I'm sorry about all that. I know it's got an aftertaste! I like it! I always felt there was some kind of barrier between Ken and me. I couldn't overcome it. Oh, well. Are you OK for the trial? I believe Mr. Montgomery is about out of ideas. We would like to call Mr. Barry Benson Bee to the stand. Good idea! You can really see why he's considered one of the best lawyers... Yeah. Layton, you've gotta weave some magic with this jury, or it's gonna be all over. Don't worry. The only thing I have to do to turn this jury around is to remind them of what they don't like about bees. You got the tweezers? Are you allergic? Only to losing, son. Only to losing. Mr. Benson Bee, I'll ask you what I think we'd all like to know. What exactly is your relationship to that woman? We're friends. Good friends? Yes. How good? Do you live together? Wait a minute... Are you her little... bedbug? I've seen a bee documentary or two. From what I understand, doesn't your queen give birth to all the bee children? Yeah, but... So those aren't your real parents! Oh, Barry... Yes, they are! Hold me back! You're an illegitimate bee, aren't you, Benson? He's denouncing bees! Don't y'all date your cousins? Objection! I'm going to pincushion this guy! Adam, don't! It's what he wants! Oh, I'm hit!! Oh, lordy, I am hit! Order! Order! The venom! The venom is coursing through my veins! I have been felled by a winged beast of destruction! You see? You can't treat them like equals! They're striped savages! Stinging's the only thing they know! It's their way! Adam, stay with me. I can't feel my legs. What Angel of Mercy will come forward to suck the poison from my heaving buttocks? I will have order in this court. Order! Order, please! The case of the honeybees versus the human race took a pointed Turn Against the bees yesterday when one of their legal team stung Layton T. Montgomery. Hey, buddy. Hey. Is there much pain? Yeah. I... I blew the whole case, didn't I? It doesn't matter. What matters is you're alive. You could have died. I'd be better off dead. Look at me. They got it from the cafeteria downstairs, in a tuna sandwich. Look, there's a little celery still on it. What was it like to sting someone? I can't explain it. It was all... All adrenaline and then...and then ecstasy! All right. You think it was all a trap? Of course. I'm sorry. I flew us right into this. What were we thinking? Look at us. We're just a couple of bugs in this world. What will the humans do to us if they win? I don't know. I hear they put the roaches in motels. That doesn't sound so bad. Adam, they check in, but they don't check out! Oh, my. Could you get a nurse to close that window? Why? The smoke. Bees don't smoke. Right. Bees don't smoke. Bees don't smoke! But some bees are smoking. That's it! That's our case! It is? It's not over? Get dressed. I've gotta go somewhere. Get back to the court and stall. Stall any way you can. And assuming you've done step correctly, you're ready for the tub. Mr. Flayman. Yes? Yes, Your Honor! Where is the rest of your team? Well, Your Honor, it's interesting. Bees are trained to fly haphazardly, and as a result, we don't make very good time. I actually heard a funny story about... Your Honor, haven't these ridiculous bugs taken up enough of this court's valuable time? How much longer will we allow these absurd shenanigans to go on? They have presented no compelling evidence to support their charges against my clients, who run legitimate businesses. I move for a complete dismissal of this entire case! Mr. Flayman, I'm afraid I'm going to have to consider Mr. Montgomery's motion. But you can't! We have a terrific case. Where is your proof? Where is the evidence? Show me the smoking gun! Hold it, Your Honor! You want a smoking gun? Here is your smoking gun. What is that? It's a bee smoker! What, this? This harmless little contraption? This couldn't hurt a fly, let alone a bee. Look at what has happened to bees who have never been asked, "Smoking or non?" Is this what nature intended for us? To be forcibly addicted to smoke machines and man-made wooden slat work camps? Living out our lives as honey slaves to the white man? What are we gonna do? He's playing the species card. Ladies and gentlemen, please, free these bees! Free the bees! Free the bees! Free the bees! Free the bees! Free the bees! The court finds in favor of the bees! Vanessa, we won! I knew you could do it! High-five! Sorry. I'm OK! You know what this means? All the honey will finally belong to the bees. Now we won't have to work so hard all the time. This is an unholy perversion of the balance of nature, Benson. You'll regret this. Barry, how much honey is out there? All right. One at a time. Barry, who are you wearing? My sweater is Ralph Lauren, and I have no pants. What if Montgomery's right? What do you mean? We've been living the bee way a long time, 27 million years. Congratulations on your victory. What will you demand as a settlement? First, we'll demand a complete shutdown of all bee work camps. Then we want back the honey that was ours to begin with, every last drop. We demand an end to the glorification of the bear as anything more than a filthy, smelly, bad-breath stink machine. We're all aware of what they do in the woods. Wait for my signal. Take him out. He'll have nauseous for a few hours, then he'll be fine. And we will no longer tolerate bee-negative nicknames... But it's just a prance-about stage name! ...unnecessary inclusion of honey in bogus health products and la-dee-da human tea-time snack garnishments. Can't breathe. Bring it in, boys! Hold it right there! Good. Tap it. Mr. Buzzwell, we just passed three cups and there's gallons more coming! I think we need to shut down! Shut down? We've never shut down. Shut down honey production! Stop making honey! Turn your key, sir! What do we do now? Cannonball! We're shutting honey production! Mission abort. Aborting pollination and nectar detail. Returning to base. Adam, you wouldn't believe how much honey was out there. Oh, yeah? What's going on? Where is everybody? Are they out celebrating? They're home. They don't know what to do. Laying out, sleeping in. I heard your Uncle Carl was on his way to San Antonio with a cricket. At least we got our honey back. Sometimes I think, so what if humans liked our honey? Who wouldn't? It's the greatest thing in the world! I was excited to be part of making it. This was my new desk. This was my new job. I wanted to do it really well. And now... Now I can't. I don't understand why they're not happy. I thought their lives would be better! They're doing nothing. It's amazing. Honey really changes people. You don't have any idea what's going on, do you? What did you want to show me? This. What happened here? That is not the half of it. Oh, no. Oh, my. They're all wilting. Doesn't look very good, does it? No. And whose fault do you think that is? You know, I'm gonna guess bees. Bees? Specifically, me. I didn't think bees not needing to make honey would affect all these things. It's not just flowers. Fruits, vegetables, they all need bees. That's our whole SAT test right there. Take away produce, that affects the entire animal kingdom. And then, of course... The human species? So if there's no more pollination, it could all just go south here, couldn't it? I know this is also partly my fault. How about a suicide pact? How do we do it? I'll sting you, you step on me. That just kills you twice. Right, right. Listen, Barry... sorry, but I gotta get going. I had to open my mouth and talk. Vanessa? Vanessa? Why are you leaving? Where are you going? To the final Tournament of Roses parade in Pasadena. They've moved it to this weekend because all the flowers are dying. It's the Last Chance I'll ever have to see it. Vanessa, I just wanna say I'm sorry. I never meant it to turn out like this. I know. Me neither. Tournament of Roses. Roses can't do sports. Wait a minute. Roses. Roses? Roses! Vanessa! Roses?! Barry? Roses are flowers! Yes, they are. Flowers, bees, pollen! I know. That's why this is the last parade. Maybe not. Could you ask him to slow down? Could you slow down? Barry! OK, I made a huge mistake. This is a total disaster, all my fault. Yes, it kind of is. I've ruined the planet. I wanted to help you with the flower shop. I've made it worse. Actually, it's completely closed down. I thought maybe you were remodeling. But I have another idea, and it's greater than my previous ideas combined. I don't want to hear it! All right, they have the roses, the roses have the pollen. I know every bee, plant and flower bud in this park. All we gotta do is get what they've got back here with what we've got. Bees. Park. Pollen! Flowers. Repollination! Across the nation! Tournament of Roses, Pasadena, California. They've got nothing but flowers, floats and cotton candy. Security will be tight. I have an idea. Vanessa Bloome, FTD. Official floral business. It's real. Sorry, ma'am. Nice brooch. Thank you. It was a gift. Once inside, we just pick the right float. How about The Princess and the Pea? I could be the princess, and you could be the pea! Yes, I got it. Where should I sit? What are you? I believe I'm the pea. The pea? It goes under the mattresses. Not in this fairy tale, sweetheart. I'm getting the marshal. You do that! This whole parade is a fiasco! Let's see what this baby'll do. Hey, what are you doing?! Then all we do is blend in with traffic... without arousing suspicion. Once at the airport, there's no stopping us. Stop! Security. You and your insect pack your float? Yes. Has it been in your possession the entire time? Would you remove your shoes? Remove your stinger. It's part of me. I know. Just having some fun. Enjoy your flight. Then if we're lucky, we'll have just enough pollen to do the job. Can you believe how lucky we are? We have just enough pollen to do the job! I think this is gonna work. It's got to work. Attention, passengers, this is Captain Scott. We have a bit of bad weather in New York. It looks like we'll experience a couple hours delay. Barry, these are cut flowers with no water. They'll never make it. I gotta get up there and talk to them. Be careful. Can I get help with the Sky Mall magazine? I'd like to order the talking inflatable nose and ear hair trimmer. Captain, I'm in a real situation. What'd you say, Hal? Nothing. Bee! Don't freak out! My entire species... What are you doing? Wait a minute! I'm an attorney! Who's an attorney? Don't move. Oh, Barry. Good afternoon, passengers. This is your captain. Would a Miss Vanessa Bloome in 24B please report to the cockpit? And please hurry! What happened here? There was a DustBuster, a toupee, a life raft exploded. One's bald, one's in a boat, they're both unconscious! Is that another bee joke? No! No one's flying the plane! This is JFK control tower, Flight 356. What's your status? This is Vanessa Bloome. I'm a florist from New York. Where's the pilot? He's unconscious, and so is the copilot. Not good. Does anyone onboard have flight experience? As a matter of fact, there is. Who's that? Barry Benson. From the honey trial?! Oh, great. Vanessa, this is nothing more than a big metal bee. It's got giant wings, huge engines. I can't fly a plane. Why not? Isn't John Travolta a pilot? Yes. How hard could it be? Wait, Barry! We're headed into some lightning. This is Bob Bumble. We have some late-breaking news from JFK Airport, where a suspenseful scene is developing. Barry Benson, fresh from his legal victory... That's Barry! ...is attempting to land a plane, loaded with people, flowers and an incapacitated flight crew. Flowers?! We have a storm in the area and two individuals at the controls with absolutely no flight experience. Just a minute. There's a bee on that plane. I'm quite familiar with Mr. Benson and his no-account compadres. They've done enough damage. But isn't he your only hope? Technically, a bee shouldn't be able to fly at all. Their wings are too small... Haven't we heard this a million times? "The surface area of the wings and body mass make no sense." Get this on the air! Got it. Stand by. We're going live. The way we work may be a mystery to you. Making honey takes a lot of bees doing a lot of small jobs. But let me tell you about a small job. If you do it well, it makes a big difference. More than we realized. To us, to everyone. That's why I want to get bees back to working together. That's the bee way! We're not made of Jell-O. We get behind a fellow. Black and yellow! Hello! Left, right, down, hover. Hover? Forget hover. This isn't so hard. Beep-beep! Beep-beep! Barry, what happened?! Wait, I think we were on autopilot the whole time. That may have been helping me. And now we're not! So it turns out I cannot fly a plane. All of you, let's get behind this fellow! Move it out! Move out! Our only chance is if I do what I'd do, you copy me with the wings of the plane! Don't have to yell. I'm not yelling! We're in a lot of trouble. It's very hard to concentrate with that panicky tone in your voice! It's not a tone. I'm panicking! I can't do this! Vanessa, pull yourself together. You have to snap out of it! You snap out of it. You snap out of it. You snap out of it! You snap out of it! You snap out of it! You snap out of it! You snap out of it! You snap out of it! Hold it! Why? Come on, it's my turn. How is the plane flying? I don't know. Hello? Benson, got any flowers for a happy occasion in there? The Pollen Jocks! They do get behind a fellow. Black and yellow. Hello. All right, let's drop this tin can on the blacktop. Where? I can't see anything. Can you? No, nothing. It's all cloudy. Come on. You got to think bee, Barry. Thinking bee. Thinking bee. Thinking bee! Thinking bee! Thinking bee! Wait a minute. I think I'm feeling something. What? I don't know. It's strong, pulling me. Like a 27-million-year-old instinct. Bring the nose down. Thinking bee! Thinking bee! Thinking bee! What in the world is on the tarmac? Get some lights on that! Thinking bee! Thinking bee! Thinking bee! Vanessa, aim for the flower. OK. Cut the engines. We're going in on bee power. Ready, boys? Affirmative! Good. Good. Easy, now. That's it. Land on that flower! Ready? Full reverse! Spin it around! Not that flower! The other one! Which one? That flower. I'm aiming at the flower! That's a fat guy in a flowered shirt. I mean the giant pulsating flower made of millions of bees! Pull forward. Nose down. Tail up. Rotate around it. This is insane, Barry! This's the only way I know how to fly. Am I koo-koo-kachoo, or is this plane flying in an insect-like pattern? Get your nose in there. Don't be afraid. Smell it. Full reverse! Just drop it. Be a part of it. Aim for the center! Now drop it in! Drop it in, woman! Come on, already. Barry, we did it! You taught me how to fly! Yes. No high-five! Right. Barry, it worked! Did you see the giant flower? What giant flower? Where? Of course I saw the flower! That was genius! Thank you. But we're not done yet. Listen, everyone! This runway is covered with the last pollen from the last flowers available anywhere on Earth. That means this is our Last Chance. We're the only ones who make honey, pollinate flowers and dress like this. If we're gonna survive as a species, this is our moment! What do you say? Are we going to be bees, or just Museum of Natural History keychains? We're bees! Keychain! Then follow me! Except Keychain. Hold on, Barry. Here. You've earned this. Yeah! I'm a Pollen Jock! And it's a perfect fit. All I gotta do are the sleeves. Oh, yeah. That's our Barry. Mom! The bees are back! If anybody needs to make a call, now's the time. I got a feeling we'll be working late tonight! Here's your change. Have a great afternoon! Can I help who's next? Would you like some honey with that? It is bee-approved. Don't forget these. Milk, cream, cheese, it's all me.  And I don't see a nickel! Sometimes I just feel like a piece of meat! I had no idea. Barry, I'm sorry. Have you got a moment? Would you excuse me? My mosquito associate will help you. Sorry I'm late. He's a lawyer too? I was already a blood-sucking parasite. All I needed was a briefcase. Have a great afternoon! Barry, I just got this huge tulip order, and I can't get them anywhere. No problem, Vannie. Just leave it to me. You're a lifesaver, Barry. Can I help who's next? All right, scramble, jocks! It's time to fly. Thank you, Barry! That bee is living my life! Let it go, Kenny. When will this nightmare end?! Let it all go. Beautiful day to fly. Sure is. Between you and me, I was dying to get out of that office. You have got to start thinking bee, my friend. Thinking bee! Me? Hold it. Let's just stop for a second. Hold it. I'm sorry. I'm sorry, everyone. Can we stop here? I'm not making a major life decision during a production number! All right. Take ten, everybody. Wrap it up, guys. I had virtually no rehearsal for that.`);
      },
      () => {
        foxScriptScroll(`I'm not entirely sure why added this type of quote to the site especially when it doesn't support HTML tags, but I guess there's no choice but to go along with it. Anyways, did you know that the tenth derivative of some function won't ever be used in reality? Also, did you know that you should watch some Animaniacs? Welp, have fun with this vertical text marquee that doesn't have multiline support, and remember to wear your seatbelt.`);
      },
      () => {
        foxScriptScroll(`God is dead. God remains dead. And we have killed him. How shall we comfort ourselves, the murderers of all murderers? What was holiest and mightiest of all that the world has yet owned has bled to death under our knives: who will wipe this blood off us? What water is there for us to clean ourselves? What festivals of atonement, what sacred games shall we have to invent? Is not the greatness of this deed too great for us? Must we ourselves not become gods simply to appear worthy of it? The most merciful thing in the world, I think, is the inability of the human mind to correlate all its contents. We live on a placid island of ignorance in the midst of black seas of infinity, and it was not meant that we should voyage far. The sciences, each straining in its own direction, have hitherto harmed us little; but some day the piecing together of dissociated knowledge will open up such terrifying vistas of reality, and of our frightful position therein, that we shall either go mad from the revelation or flee from the deadly light into the peace and safety of a new dark age.`);
      },
      () => {
        foxScriptScroll(`The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal. [beep] A single lap should be completed each time you hear this sound. [ding] Remember to run in a straight line, and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start.`);
      },
      () => {
        foxScriptScroll(`I attest to the following: I shall not give or receive aid during this exam. My answers will be entirely my own. Plagiarism software will scan my responses. My teacher will receive my responses. If I give or receive help or submit work that is not my own: My score will be canceled. My attempt to cheat will be reported to college admissions offices and my high school. I will be banned from future College Board exams. Anyone who helps me or receives help from me will be investigated. My grandfather picks up quartz and valuable onyx jewels. Send 60 dozen quart jars and 12 black pans.`);
      },
      () => {
        foxScriptScroll(`United States, Canada, Mexico, Panama Haiti, Jamaica, Peru, Republic Dominican, Cuba, Caribbean Greenland, El Salvador too. Puerto Rico, Columbia, Venezuela Honduras, Guyana, and still, Guatemala, Bolivia, then Argentina And Ecuador, Chile, Brazil. Costa Rica, Belize, Nicaragua, Bermuda Bahamas, Tobago, San Juan, Paraguay, Uruguay, Suriname And French Guiana, Barbados, and Guam. Norway, and Sweden, and Iceland, and Finland And Germany now one piece, Switzerland, Austria, Czechoslovakia Italy, Turkey, and Greece. Poland, Romania, Scotland, Albania Ireland, Russia, Oman, Bulgaria, Saudi Arabia Hungary, Cyprus, Iraq, and Iran. There’s Syria, Lebanon, Israel, Jordan Both Yemens, Kuwait, and Bahrain, The Netherlands, Luxembourg, Belgium, and Portugal France, England, Denmark, and Spain. India, Pakistan, Burma, Afghanistan Thailand, Nepal, and Bhutan, Kampuchea, Malaysia, then Bangladesh (Asia) And China, Korea, Japan. Mongolia, Laos, and Tibet, Indonesia The Philippine Islands, Taiwan, Sri Lanka, New Guinea, Sumatra, New Zealand Then Borneo, and Vietnam. Tunisia, Morocco, Uganda, Angola Zimbabwe, Djibouti, Botswana, Mozambique, Zambia, Swaziland, Gambia Guinea, Algeria, Ghana. Burundi, Lesotho, and Malawi, Togo The Spanish Sahara is gone, Niger, Nigeria, Chad, and Liberia Egypt, Benin, and Gabon. Tanzania, Somalia, Kenya, and Mali Sierra Leone, and Algiers, Dahomey, Namibia, Senegal, Libya Cameroon, Congo, Zaire. Ethiopia, Guinea-Bissau, Madagascar Rwanda, Mahore, and Cayman, Hong Kong, Abu Dhabi, Qatar, Yugoslavia… Crete, Mauritania Then Transylvania, Monaco, Liechtenstein Malta, and Palestine, Fiji, Australia, Sudan`);
      },
      () => {
        foxScriptScroll(`What the fuck did you just fucking say about me, you little bitch? I'll have you know I graduated top of my class in the Navy Seals, and I've been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I'm the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You're fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that's just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little "clever" comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn't, you didn't, and now you're paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You're fucking dead, kiddo.`);
      },
      () => {
        let metersAway = Math.floor(Math.random() * 300) + 300;
        let interval = setInterval(() => {
          const quote = document.getElementById("headerSubtitle");
          if (metersAway > 0) {
            quote.innerHTML = `I am within ${metersAway} meters and rapidly approaching<br>-parakeetiscool`;
            metersAway--;
          } else if (metersAway <= 0) {
            quote.innerHTML =
              "Knock knock, I'm at your door.<br>-parakeetiscool";
            clearInterval(interval);
          }
        }, 100);
      },
      () => {
        let numOs = Math.floor(Math.random() * 30);
        let oCounter = 1;
        let quoteBoo = "<span style='color:#FF55FF;'>Boo</span>";
        let interval = setInterval(() => {
          const quote = document.getElementById("headerSubtitle");
          if (oCounter < numOs) {
            quoteBoo += "<span style='color:#FF55FF;'>o</span>";
            quote.innerHTML = quoteBoo;
            oCounter++;
          }
          if (oCounter >= numOs) {
            quoteBoo += "<span style='color:#FF55FF;'>p!</span>";
            quote.innerHTML = quoteBoo;
            clearInterval(interval);
          }
        }, 100);
      },
      () => {
        let numCools = Math.floor(Math.random() * (30 - 10) + 10);
        let coolCounter = 1;
        let quoteBoo = `"cool `;
        let interval = setInterval(() => {
          const quote = document.getElementById("headerSubtitle");
          if (coolCounter >= numCools + 1) {
            quoteBoo += `<br>-Jake Peralta`;
            clearInterval(interval);
          }
          if (coolCounter < numCools) {
            quoteBoo += `cool `;
          }
          if (coolCounter === numCools) {
            quoteBoo += `cool"`;
          }
          quote.innerHTML = quoteBoo;
          coolCounter++;
        }, 85);
      },
      () => {
        let impostorArray = "u/isnottheimposter was the Impostor.".split("");
        let impostorIndex = 0;
        let impostorQuote = "";
        const quote = document.getElementById("headerSubtitle");
        let interval = setInterval(() => {
          if (impostorIndex < impostorArray.length) {
            impostorQuote += impostorArray[impostorIndex];
            quote.innerHTML = impostorQuote;
            impostorIndex++;
          } else if (impostorIndex >= impostorArray.length) {
            clearInterval(interval);
          }
        }, 75);
      },
      () => {
        let counter = -1;
        setInterval(() => {
          const formattingCodeColors = [
            `FF5555`,
            `FFAA00`,
            `FFFF55`,
            `55FF55`,
            `55FFFF`,
            `FF55FF`,
            `AA00AA`,
          ];
          const quote = document.getElementById("headerSubtitle");
          counter++;
          if (counter !== -2) {
            quote.innerHTML = `<span style="color:#${
              formattingCodeColors[counter % 7]
            }">Le c</span><span style="color:#${
              formattingCodeColors[(counter + 1) % 7]
            }">hro</span><span style="color:#${
              formattingCodeColors[(counter + 2) % 7]
            }">ma t</span><span style="color:#${
              formattingCodeColors[(counter + 3) % 7]
            }">ext</span><span style="color:#${
              formattingCodeColors[(counter + 4) % 7]
            }">! Po<span style="color:#${
              formattingCodeColors[(counter + 5) % 7]
            }">gge</span><span style="color:#${
              formattingCodeColors[(counter + 6) % 7]
            }">rs!</span>`;
          }
        }, 50);
      },
      () => {
        let quotes = [
          ["i hate programming"],
          ["i hate programming <br /> i hate programming"],
          [
            "i hate programming <br /> i hate programming <br /> i really hate it",
          ],
          ["it sucks i hate it so much"],
          "i ha|a|a|a|a|a|a|a|a|a|a|a|a|te||| |programming".split("|"),
          ["ᴉ ɥɐʇǝ dɹoƃɹɐɯɯᴉuƃ"],
          ["i hate programming"],
          ["i h a t e p r o g r a m m i n g"],
          Array(10).fill("ihatethis"),
          "whyyyyyyyyyy".split(""),
          ["why is this so dumb"],
          "oh.|||||||||.||||||||.".split("|"),
          ["i love programming!"],
        ];
        let index = -1;
        let index2 = 0;
        let fullQuote = "";
        const quote = document.getElementById("headerSubtitle");
        let interval = setInterval(() => {
          if (index >= quotes.length - 2) clearInterval(interval);
          let interval2 = setInterval(() => {
            if (index2 >= quotes[index].length - 1) clearInterval(interval2);
            fullQuote += quotes[index][index2];
            index2++;
            quote.innerHTML = fullQuote;
          }, 50);
          index2 = 0;
          fullQuote = "";
          index++;
        }, 1500);
      },
      () => {
        let counter = -1;
        setInterval(() => {
          const formattingCodeColors = [
            `FF5555`,
            `FFAA00`,
            `FFFF55`,
            `55FF55`,
            `55FFFF`,
            `FF55FF`,
            `AA00AA`,
          ];
          const quote = document.getElementById("headerSubtitle");
          counter++;
          if (counter !== -2) {
            quote.innerHTML = `<span style="color:#${
              formattingCodeColors[counter % 7]
            }">Le other chroma text!</span>`;
          }
        }, 50);
      },
      () => {
        let counter = -1;
        setInterval(() => {
          const quotes = [
            `inhale`,
            `exhale`,
          ];
          const quote = document.getElementById("headerSubtitle");
          counter++;
          if (counter !== -2) {
            quote.innerHTML = `${quotes[counter % 2]}`;
          }
        }, 750);
      },
      `<img src="https://cdn.discordapp.com/emojis/775767117089865758.gif?v=1" alt="frog agrees (animated)" draggable="false">`,
      `<img src="https://cdn.discordapp.com/emojis/821913465941524480.png?v=1" alt="sword" draggable="false">`,
      `<img src="https://cdn.discordapp.com/emojis/834122955595710465.gif?v=1" alt="owo what's this" draggable="false">`,
      `<img src="https://cdn.discordapp.com/emojis/834947827532300328.gif?v=1" alt="emoji: goodbot fast" draggable="false">`,
      `<img src="https://cdn.discordapp.com/emojis/834947234885271592.gif?v=1" alt="emoji: goodbot" draggable="false">`,
      `<img src="https://cdn.discordapp.com/emojis/784933350569279498.png?v=1" alt="emoji: cursed flushed" draggable="false">`,
      `<img src="https://cdn.discordapp.com/emojis/817106472424177706.gif?v=1" alt="animated: vibing cat" draggable="false">`,
      `<img src="https://cdn.discordapp.com/emojis/825078817265287239.gif?v=1" alt="animated: vibing cat" draggable="false">`,
      `<img src="https://cdn.discordapp.com/emojis/776897206300180480.png?v=1" alt="pointing gun" draggable="false">`,
      `<img src="https://cdn.discordapp.com/emojis/784933350569279498.png?v=1" alt="emoji: cursed flushed" draggable="false">`,
      `<img src="https://cdn.discordapp.com/attachments/789592044984860672/825779017558130697/image0.png" alt="Cock flavor noodle soup mix and SHITO mild chilli sauce with fish and shrimp" width="400" height="225" draggable="false">`,
      `<img src="https://cdn.discordapp.com/attachments/789592044984860672/850511263846105139/Screenshot_728.png" alt="very real looking t-shirt with FurfSky Reborn pride logo print and text: 10 out of 10 texture pack would buy again this helped me in my dating life 10 necron handles? coincidence? maybe not 1!!!" width="40%" height="40%" draggable="false">`,
    ],
  },
  downloads: [
    {
      version: "v1.3.2",
      name: "v1.3's Loose Ends, Pets, and some SB UI<br><small>(Motor's name for this update sucked, so it's different here)</small>",
      fileFull: "/files/v1.3.2/§r§lFurfSky §6§lReborn §8§lFL §8§l[§71.3.2§8§l].zip",
      fileOverlay:
        "/files/v1.3.2/§r§lFurfSky §6§lReborn §8§lOV §8§l[§71.3.2§8§l].zip",
      fileOverlayPlus:
        "/files/v1.3.2/§r§lFurfSky §6§lReborn §8§lOV+ §8§l[§71.3.2§8§l].zip",
    },
    {
      version: "v1.3.1",
      name: "Voidgloom Twilight",
      fileFull: "/files/v1.3.1/§r§lFurfSky §6§lReborn §8§lFL §8§l[§71.3.1§8§l].zip",
      fileOverlay:
        "/files/v1.3.1/§r§lFurfSky §6§lReborn §8§lOV §8§l[§71.3.1§8§l].zip",
      fileOverlayPlus:
        "/files/v1.3.1/§r§lFurfSky §6§lReborn §8§lOV+ §8§l[§71.3.1§8§l].zip",
    },
    {
      version: "v1.3",
      name: "The Update that Textured Everything*",
      fileFull: "/files/v1.3/§r§lFurfSky §6§lReborn §8§lFL §8§l[§71.3§8§l].zip",
      fileOverlay:
        "/files/v1.3/§r§lFurfSky §6§lReborn §8§lOV §8§l[§71.3§8§l].zip",
      fileOverlayPlus:
        "/files/v1.3/§r§lFurfSky §6§lReborn §8§lOV+ §8§l[§71.3§8§l].zip",
    },
    {
      version: "v1.2.6",
      name: "La Resistance",
      fileFull:
        "/files/v1.2.6/§r§lFurfSky §6§lReborn §8§lFL §8§l[§71.2.6§8§l].zip",
      fileOverlay:
        "/files/v1.2.6/§r§lFurfSky §6§lReborn §8§lOV §8§l[§71.2.6§8§l].zip",
    },
    {
      version: "v1.2.5",
      name: "T5 Revs + Spider's Den items",
      fileFull:
        "/files/v1.2.5/§r§lFurfSky §6§lReborn §8§lFL §8§l[§71.2.5§8§l].zip",
      fileOverlay:
        "/files/v1.2.5/§r§lFurfSky §6§lReborn §8§lOV §8§l[§71.2.5§8§l].zip",
    },
    {
      version: "v1.69",
      name: "April Fools!",
      fileFull:
        "/files/v1.69/§r§lFurfSky §6§lReborn §8§lFL §8§l[§71.69§8§l].zip",
      fileOverlay:
        "/files/v1.69/§r§lFurfSky §6§lReborn §8§lOV §8§l[§71.69§8§l].zip",
    },
    {
      version: "v1.2.4",
      name: "Wither Swords Redux",
      fileFull:
        "/files/v1.2.4/§r§lFurfSky §6§lReborn §8§lFL §8§l[§71.2.4§8§l].zip",
      fileOverlay:
        "/files/v1.2.4/§r§lFurfSky §6§lReborn §8§lOV §8§l[§71.2.4§8§l].zip",
    },
    {
      version: "v1.2.3",
      name: "Mod UIs<br><small>(Yes, 99% of the SB mods you can name are textured here)</small>",
      fileFull:
        "/files/v1.2.3/§r§lFurfSky §6§lReborn §8§lFL §8§l[§71.2.3§8§l].zip",
      fileOverlay:
        "/files/v1.2.3/§r§lFurfSky §6§lReborn §8§lOV §8§l[§71.2.3§8§l].zip",
    },
    {
      version: "v1.2.2",
      name: "Dwarven Mines and Internal Rewrite",
      fileFull:
        "/files/v1.2.2/§r§lFurfSky §6§lReborn §8§lFL §8§l[§71.2.2§8§l].zip",
      fileOverlay:
        "/files/v1.2.2/§r§lFurfSky §6§lReborn §8§lOV §8§l[§71.2.2§8§l].zip",
    },
    {
      version: "v1.1.0",
      name: "someone was too lazy to give it a title",
      fileFull:
        "/files/v1.1.0/§r§lFurfSky §6§lReborn §8§lFL §8§l[§71.1.0§8§l].zip",
      fileOverlay:
        "/files/v1.1.0/§r§lFurfSky §6§lReborn §8§lOV §8§l[§71.1.0§8§l].zip",
    },
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
    {
      version: "FurfSky+ v1.0 to v1.7.1",
      name: "because some people fear change",
      fileFull: "https://www.mediafire.com/folder/s89785ls3dghy/FurfSky%2B",
    },
  ],
  creditColors: {
    Manager: "#ffa500",
    "Head Artist": "#d776ff",
    "Original FurfSky+ Creator (+ current artist)": "#c041ff",
    Artist: "#b19cd9",
    "Trial Artist": "#6a5d82",
    "Retired Artist": "#8d7cad",
    Admin: "#4b8b3b",
    "Artist & Website Maintainer": "#67dadd",
    Moderator: "#17d44a",
    Helper: "#3498db",
    "Retired Moderator": "#0d7f2c",
    "Event Helper": "#554dca",
    "Website Developer": "#ffff00",
    "Pack Contributor": "#00b0b0",
    "CIT Monkey": "#7c2a21",
    "The 3D Render Person": "#ff7d00",
    "Discord Contributor": "#aa0000",
  },
  credits: [
    {
      name: "FurryEBoy",
      link: "https://www.youtube.com/channel/UC2GO6UL1OEC0Lk35bhMtNRQ",
      role: "Manager",
      quote: "no fun allowed!",
    },
    {
      name: "Furf",
      link: "https://hypixel.net/threads/16x-pack-furfsky-compatibility-hotfix-v1-7-1.2138599/",
      role: "Original FurfSky+ Creator (+ current artist)",
      quote: "im just now looking up furfsky again on youtube<br>and it made me realize how much i've missed since my last release",
    },
    {
      name: "tea",
      role: "Head Artist",
      quote: "i will murder every axolotl in a 100 km radius",
    },
    /* {
      name: "Saikage",
      link: "https://hypixel.net/members/3250921/",
      role: "Retired Artist",
      quote: "who the fuck even",
    },
    */
    {
      name: "SoshJam",
      link: "https://hypixel.net/members/1196292/",
      role: "Retired Artist",
      quote:
        "you want me to have a dinky little 5x5 image for a legendary item?",
    },
    {
      name: "iDevil4Hell/Thanatos",
      link: "https://twitter.com/xThanatos6",
      role: "Artist",
      quote: "Try not to cringe! [FSR Edition] (Gone wrong, absolutely failed)",
    },
    /*
    {
      name: "abyssr",
      role: "Retired Artist",
      quote: "<small>IM NICKING EVERYONE TO EVERYONE SO ILL PING EVERYONE AND EVERYONE GETS PINGED</small>",
    },
    */
    {
      name: "aGrxpe",
      link: "https://hypixel.net/members/3230375/",
      role: "Artist",
      quote: "shut up I thought u were still in the basement",
    },
    {
      name: "TopComp",
      role: "Retired Artist",
      quote: "breads yummy",
    },
    {
      name: "duckiscool69",
      link: "https://hypixel.net/members/2880572/",
      role: "Artist",
      quote: "imagine playing skyblock",
    },
    {
      name: "PcArt01",
      link: "https://hypixel.net/members/3394976/",
      role: "Artist",
      quote: "your toes will be pulled tonight",
    },
    {
      name: "PigTurtle",
      role: "Retired Artist",
      quote: "it's not acting anymore, now it's being run by a microwave",
    },
    {
      name: "resanityyy",
      link: "https://hypixel.net/members/1296806/",
      role: "Retired Artist",
      quote: "gargage",
    },
    {
      name: "Perpillow",
      link: "https://hypixel.net/members/1631725/",
      role: "Artist",
      quote: "you better not be the sus imposter",
    },
    {
      name: "TrashAtNames/BlockBusterCF/Poison Doggo",
      link: "https://hypixel.net/members/2765236/",
      role: "Retired Artist",
      quote: "i live under a rock when it comes to optifine updates apparently",
    },
    {
      name: "Skeletony",
      link: "https://hypixel.net/members/3925718/",
      role: "Retired Artist",
      quote: "bootleg sans. also check out wab",
    },
    {
      name: "penk",
      role: "Artist",
      quote: "next person who changes my name is certified acrid",
    },
    {
      name: "ThatOneRandomDiscordAccount",
      role: "Artist",
      quote: "Dollar Store Skeletony: now with uncreativivity",
    },
    {
      name: "GenesiS",
      role: "Artist",
      quote: "Shadow fury shits on Livid Dagger",
    },
    {
      name: "Motor",
      role: "Artist",
      quote: "Flip a coin. If heads, I am on vacation. If tails, blame Ery.",
    },
    {
      name: "D43DALUS",
      role: "Artist",
      quote: "I'm built not born, it's an analytical advantage.",
    },
    {
      name: "Erymanthus",
      link: "https://www.reddit.com/user/RayDeeUx/",
      role: "Artist & Website Maintainer",
      quote:
        "hey, you could pour soup in my lap<br>and i'll probably apologize to you!",
    },
    {
      name: "Smolegit",
      link: "https://twitter.com/smolegit1",
      role: "Artist",
      quote:
        "<a href='https://www.youtube.com/watch?v=oXL3KcowG90&list=OLAK5uy_mrQpw7Bipv-a7DFFerdXeLe-Ll4yxdE6U'>listen to creatures of habit</a>",
    },
    {
      name: "goog",
      link: "https://www.reddit.com/u/gordram",
      role: "Artist",
      quote: "those are uhh... a lot of channels... you got there.",
    },
    {
      name: "Zetkut",
      role: "Retired Artist",
      quote:
        "spain without the s<br><small>(i just woke up i don't want to think)</small>",
    },
    {
      name: "Ropes",
      role: "Artist",
      quote: "yup ! I hate furfsky 🙂",
    },
    {
      name: "Hexafish",
      link: "https://www.reddit.com/u/definitelynotdark",
      role: "Artist",
      quote:
        "petition to remove the liver dragger's texture<br>from fsr because you should never use it",
    },
    /*
    {
      name: "derpium",
      role: "Retired Artist",
      quote: "speep fart",
    },
    */
    {
      name: "Glenz",
      link: "https://twitter.com/glenz2007",
      role: "Artist",
      quote: "Chroma HUD/UIs hurts my soul",
    },
    {
      name: "FoxScript",
      link: "https://www.youtube.com/watch?v=AvmnYLBSnh0",
      role: "Artist",
      quote: "<code>[placeholder credit text]</code>",
    },
    {
      name: "<span style='background: -webkit-linear-gradient(top left, rgba(191,97,106,1) 0%, rgba(191,97,106,1) 20%, rgba(208,135,112,1) 20%, rgba(208,135,112,1) 35%, rgba(235,203,139,1) 35%, rgba(235,203,139,1) 50%, rgba(163,190,140,1) 50%, rgba(163,190,140,1) 65%, rgba(136,192,208,1) 65%, rgba(136,192,208,1) 80%, rgba(180,142,173,1) 80%, rgba(180,142,173,1) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;'>voxal</span>",
      link: "https://thoughtscape.vercel.app/",
      role: "<span style='background: -webkit-linear-gradient(top left, rgba(191,97,106,1) 0%, rgba(191,97,106,1) 20%, rgba(208,135,112,1) 20%, rgba(208,135,112,1) 35%, rgba(235,203,139,1) 35%, rgba(235,203,139,1) 50%, rgba(163,190,140,1) 50%, rgba(163,190,140,1) 65%, rgba(136,192,208,1) 65%, rgba(136,192,208,1) 80%, rgba(180,142,173,1) 80%, rgba(180,142,173,1) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;'>Website Developer</span>",
      quote:
        "<span style='background: -webkit-linear-gradient(top left, rgba(191,97,106,1) 0%, rgba(191,97,106,1) 20%, rgba(208,135,112,1) 20%, rgba(208,135,112,1) 35%, rgba(235,203,139,1) 35%, rgba(235,203,139,1) 50%, rgba(163,190,140,1) 50%, rgba(163,190,140,1) 65%, rgba(136,192,208,1) 65%, rgba(136,192,208,1) 80%, rgba(180,142,173,1) 80%, rgba(180,142,173,1) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;'>I am very speical :)</span>",
    },
    {
      name: "woah. (DAT_NOMAD)",
      role: "The 3D Render Person",
      quote: "refraction and the gang bout to enter the dungeon",
    },
    {
      name: "pig",
      role: "Admin",
      quote: "reeee",
    },
    {
      name: "parakeetiscool",
      role: "Admin",
      quote: "you wet tubesock",
    },
    {
      name: "HellCastle",
      role: "Admin",
      quote: "They have turned me into a furry. help",
    },
    /*
    {
      name: "SeBook",
      link: "https://www.youtube.com/channel/UCFeGrtZbI6miqtdWiph_D3Q",
      role: "Retired Moderator",
      quote: "sebook is the best peice of shit",
    },
    */
    {
      name: "Toasted_Breaad",
      role: "Moderator",
      quote: "if you do not like bread you shoudn't exist",
    },
    {
      name: "Gonk",
      role: "Moderator",
      quote: "you miss 100% of the shots you don't take",
    },
    {
      name: "Nan",
      role: "Moderator",
      quote: "blub blub 🦈",
    },
    {
      name: "Suker",
      role: "Moderator",
      quote: "the fsr twitter is a place only the<br>highest level of memers can ascend to",
    },
    {
      name: "NameWasntTaken",
      role: "Moderator",
      quote: "help why is it so dark",
    },
    {
      name: "InfinityRing",
      role: "Helper",
      quote: "Trash at Bedwars.",
    },
    {
      name: "SausageDog359",
      role: "Pack Contributor",
      quote: "i like toast",
    },
    {
      name: "DTRW191",
      role: "Pack Contributor",
      quote: "Lost my Ult Wise 5 AOTE but still have my melons 👌",
    },
    {
      name: "Edna Mode",
      role: "Pack Contributor",
      quote: "damn that's hot.",
    },
    {
      name: "MyPancakes",
      role: "Pack Contributor",
      quote:
        "sometimes i question why artists that are<br>as good as the people here are making art for mc",
    },
    {
      name: "TomEngMaster",
      role: "Pack Contributor",
      quote: "download neu mod nerds",
    },
    {
      name: "mali comrade",
      role: "Pack Contributor",
      quote: "sup gamers",
    },
    {
      name: "Bestower",
      role: "Pack Contributor",
      quote: "me when no wither googles texture",
    },
    {
      name: "TheMeerkaT",
      role: "Pack Contributor",
      quote:
        "at least you didn't get yourself<br>to design the whole sea creature guide",
    },
    {
      name: "ThatGravyBoat",
      role: "Pack Contributor",
      quote: "I use MS paint for my pixel art",  //damn, why is aseprite so expensive
    },
    {
      name: "nacrt",
      role: "Pack Contributor",
      quote:
        "just have it a normal file name,<br>the cancer that is mediafire only makes things worse",
    },
    {
      name: "Shy0",
      role: "Pack Contributor",
      quote: "om im stoopid",
    },
    {
      name: "Hasnu",
      role: "CIT Monkey",
      quote: "#FSRGangOnTop",
    },
    {
      name: "ModCruel",
      role: "CIT Monkey",
      quote: "Stop making bad <code>.json</code> files.",
    },
    {
      name: "Sigia42",
      role: "CIT Monkey",
      quote: "damn, why is aseprite so expensive",
    },
    {
      name: "BluePeach81",
      role: "CIT Monkey",
      quote: "old livid dagger texture was better",
    },
    {
      name: "artificialair",
      role: "CIT Monkey",
      quote: "OH FUCK THE PERIOD",
    },
    {
      name: "Hoss",
      role: "Discord Contributor",
      quote: "tylereboy my beloved",
    },
  ],
  faq: [
    {
      name: `FAQ - Item Textures`,
      id: "items",
      note: `Note: Most frequent solutions include switching from Badlion/Lunar to Forge
      updating your mods, and browsing your Video Settings.<br><a href="#mods">Click here to go to the mod UIs section.</a>`,
      items: [
        {
          question: `Glass panes are displaying as "null" in-game, what do I do?`,
          photo: `https://cdn.discordapp.com/attachments/728977460737081454/853011732129775686/what_the_fudge_imgur.png`,
          answer: `Update OptiFine to M6.`,
          related: `<a href="https://optifine.net/adloadx?f=preview_OptiFine_1.8.9_HD_U_M6_pre1.jar">Get OptiFine M6 here.</a>`,
        },
        {
          question: `Textures aren't showing up properly when I hold them, what do I do?`,
          photo: `https://cdn.discordapp.com/attachments/728977460737081454/853013636729536602/vOhsHbJ.png`,
          answer: `
          <ul>
            <li>Make sure Custom Item textures is enabled in your Video Settings.<br>Here is the settings path: <code>Video Settings > Quality > Custom Items: ON</code></li>
            <li>Check your mod folder, if you are using Orange's Old Animation please remove it and download the Sk1er version which doesn't break the pack and is more feature complete.</li>
            <li>If you are using Badlion Client (BLC), their mod, BetterFrames, tends to break the pack completely, so make sure to disable it if you plan on using FurfSky Reborn.</li>
            <li>In general, we heavily advise against the usage of BLC when using FurfSky Reborn, as it has a very buggy version of OptiFine. SkyClient is a great solution.</li>
          </ul>
            `,
          related: `<a href="https://sk1er.club/beta">Get Sk1er LLC's Old Animations through this link.</a><br><a href="https://hypixel.net/threads/skyclient-easily-install-and-update-skyblock-mods-and-packs.3731617/">Learn more about SkyClient here.</a>`,
        },
        {
          question: `Why isn't &lt;item&gt; textured?`,
          answer: `We are always working on FurfSky Reborn, and not all items in Skyblock are textured yet.  
            We release updates pretty frequently, so keep your eyes open if an item you want textured pops up in a release.`,
          related: `<a href="/downloads">Go to the downloads page.</a>`,
        },
        {
          question: `What is the difference between the Full & Overlay(+) versions?`,
          answer: `Full: Skyblock textures, Vanilla Minecraft textures, Mod UIs, and NotEnoughUpdates (NEU) skulls.  
            Overlay+: Skyblock textures and NEU skulls.  
            Overlay - only Skyblock textures.`,
          related: `<a href="/downloads">Go to the downloads page.</a>`,
        },
        {
          question: `Do I need to use the original FurfSky+ to use this one?`,
          answer: `No, all FurfSky+ textures are included in this pack.
            We have even updated some of them to better fit in with the Furf style,
            and we have also reduced the color count on many of them.`,
        },
        {
          question: `What Minecraft version is FurfSky Reborn for?`,
          photo: ``,
          answer: `By default, FurfSky Reborn will work for Minecraft versions <i>1.8.9 - 1.12.2</i>.
            For versions past 1.8.9, you will get a warning saying that the pack is for a different version of Minecraft.
            As long as you are playing between versions <i>1.8.9 - 1.12.2</i>, you can ignore this warning.
            If you are playing on a Minecraft version higher than 1.12.2, this error does actually mean something.
            Basically, 1.13 was an internal rewrite of Minecraft and OptiFine switched from using the "mcpatcher" to "optifine" folder.
            The download of the pack only includes the "mcpatcher" folder, as we don't officially support versions higher than 1.12.2.
            If you do want to use the pack on a higher version and accept the fact that there will be glitches,
            duplicate the "mcpatcher" folder and rename it "optifine".
            Besides the model bugs, the pack should work for the most part now, rather than not at all.`,
        },
        {
          question: `Why are some player skulls appearing as other player skulls?`,
          photo: ``,
          answer: `If you are using BLC, please swap to SkyClient.
            Otherwise, open your mods folder and check what mods you have.
            If you are using SkyblockCatia, please delete it and replace it with Skytils.
            Skytils does everything that SkyblockCatia does but better, along with a lot of other features.
            SkyblockCatia's player skull retexturing feature breaks our player skull retexturing with NEU.`,
          related: `<a href="https://github.com/Skytils/SkytilsMod/releases">Get Skytils here.</a>`,
        },
        {
          question: `Why are certain items not appearing animated?`,
          photo: ``,
          answer: `Make sure Terrain Animations is enabled in your Video Settings.
            Here is the settings path: <code>Video Settings > Animations > Terrain Animated: ON</code>`,
          related: `<a href="https://optifine.net/adloadx?f=preview_OptiFine_1.8.9_HD_U_M6_pre1.jar">Make sure you have OptiFine M6.</a>`,
        },
        {
          question: `Why aren't the Mithril Vein block textures showing up?`,
          photo: `https://cdn.discordapp.com/attachments/821151183070298174/839725667645784104/Screen_Shot_2021-05-06_at_12.48.55.759_AM_Eastern_Daylight_Time.png`,
          answer: `Make sure you're using the latest version of NEU.
            Additionally, the option in the above image <i>must</i> be toggled on, and your <code>Connected Textures</code> option in OptiFine's settings <i>must</i> be set to <code>Fast</code>.`,
          related: `<a href="https://discord.com/channels/516977525906341928/693586404256645231">Get NEU's latest version here.</a>`,
        },
        {
          question: `Why does my game crash when using OptiFine M5?`,
          photo: ``,
          answer: `Make sure you're using the latest versions of Patcher and OptiFine.
            Additionally, if you would like to retain 1.7 animations, use Old Animations from Sk1er LLC.`,
          related: `<a href="https://optifine.net/adloadx?f=preview_OptiFine_1.8.9_HD_U_M6_pre1.jar">OptiFine M6,</a> <a href="https://static.sk1er.club/repo/mods/patcher/1.5.1/1.8.9/Patcher-1.5.1%20(1.8.9).jar">Patcher 1.5.1,</a> <a href="https://sk1er.club/beta">and Sk1er LLC's Old Animations [optional].</a>`,
        },
        {
          question: `Your textures for skulls aren't showing up, what do I do?`,
          photo: ``,
          answer: `Our custom skull textures are only available through Moulberry's NEU. Please install that mod.
            Also, update OptiFine to M6 just in case.`,
          related: `<a href="https://discord.com/channels/516977525906341928/693586404256645231">Get NEU's latest version here.</a> <a href="https://optifine.net/adloadx?f=preview_OptiFine_1.8.9_HD_U_M6_pre1.jar">Get OptiFine M6 here.</a>`,
        },
      ],
    },
    {
      //H1
      name: `FAQ - Mod UI`,
      id: "mods",
      //ITALIC
      note: `Note: some of these answers may apply to PacksHQ's Dark UI pack as well,
      as Erymanthus also made most of the Dark UI assets. <br> <a href="#items">Click here to go to the Skyblock item textures section.</a>`,
      items: [
        {
          question: `<i>[Apec]</i> - How do I swap between the Apec bar styles?`,
          photo: `  https://cdn.discordapp.com/attachments/728977460737081454/853051096926519316/Untitled_drawing375.png`,
          answer: `Navigate to your resource packs folder (or open it via in-game) and unzip the texture pack if it's still in <code>.zip</code> form.
          Then navigate to <code>/assets/apec/gui/</code> and you will see not two, but four .png files (much like the photos above).
          Rename the files as per the files names in the photo <i>above</i> the gray line <u>for gold bars</u>,
          otherwise, rename the files as per the file names in the photo <i>below</i> the gray line <u>for old-style bars</u>.`,
          related: `<a href="https://www.curseforge.com/minecraft/mc-mods/apec/files">Get Apec here.</a>`,
        },
        {
          question: `<i>[Skytils, SkyblockCatia (SBC), and Skyblock Extras (SBE)]</i> - How do I revert to the old <code>rarity.png</code> shape?`,
          photo: `  https://cdn.discordapp.com/attachments/728977460737081454/853058627333914684/unknown.png`,
          answer: `Please unzip your copy of FurfSky Reborn if you haven't done so already.
            Then navigate to the respective directory for the mod whose rarity shapes you want to delete.
            Delete them as necessary.`,
          related: `<a href="https://github.com/Skytils/SkytilsMod/releases">Skytils</a> | <a href="https://www.curseforge.com/minecraft/mc-mods/skyblockcatia/files">SBC</a> | <a href="https://sbewebsite.appspot.com/">SBE</a>`,
        },
        {
          question: `<i>[SkyblockPersonalized (SBP)]</i> - Why is my font color in <code>/sbp</code>... weird?`,
          photo: `  https://cdn.discordapp.com/attachments/785025965226459176/821112316664741888/Screen_Shot_2021-03-15_at_3.png`,
          answer: `Please use the mod's <i>Dark Theme</i> in <code>/sbp</code> as seen above.`,
        },
        {
          question: `<i>[SBP]</i> - What happened to the background of my player/characterin <code>/sbp</code> and why do the corners seem scuffed?<br>(Also, why do some of my GUI elements seem off?)`,
          photo: ``,
          answer: `Please get the most recent version of the mod from SBP's Discord server.`,
          related: `<a href="https://discord.com/channels/779549891890118683/779550146861203477">SBP's #releases channel</a>`,
        },
        {
          question: `<i>[NotEnoughUpdates (NEU)]</i> - Why is the text incredibly dark in NEU's custom Skyblock menus?`,
          photo: `  https://cdn.discordapp.com/attachments/785025965226459176/821121294501543986/Screen_Shot_2021-03-15_at_4.png`,
          answer: `Please type <code>/neu improved</code> in chat and change the background and button styles exactly as shown above.
            If the text isn't gold after you make this change, please ping Erymanthus for more help.`,
          related: `<a href="https://discord.com/channels/516977525906341928/693586404256645231">Get NEU's latest version here.</a>`,
        },
        {
          question: `<i>[SkyblockAddons (SBA)]</i> - How do I turn on the pack's custom defense icon for SBA?`,
          photo: `https://cdn.discordapp.com/attachments/785025965226459176/821122320839606323/Screen_Shot_2021-03-03_at_1.png`,
          answer: `Type <code>/sba</code> in chat and then type in "van" or "defen" into the search bar.
            click the little ⚙️ of the first setting that shows up, which leads to the menu seen above.
            Make sure the switch is <u>exactly</u> as follows.
            <i><u>Flip that switch on first before you start overthinking these steps.<br>Please. Save both yourself and us some time.</u></i>`,
          related: `<a href="https://github.com/BiscuitDevelopment/SkyblockAddons/releases/download/v1.6.0/SkyblockAddons-1.6.0-for-MC-1.8.9.jar">SBA direct download (v1.6)</a>`,
        },
        {
          question: `<i>[SkyblockHUD (SBHUD)]</i> - Why are some textures for UI elements blank and/or missing in v1.13 of SBHUD?<br>(Also, more SBHUD v1.13 questions when?)`,
          photo: ``,
          answer: `SBHUD v1.13 is still in beta. Patience is key. As of now, everything in v1.13 of SBHUD should be fine
            (with a few rendering bugs in dungeons, but that's not on us).`,
          related: `<a href="https://discord.com/channels/516977525906341928/794648295255310366">Obtain SBHUD by obtaining one the roles under the "Perks" webhook here.</a>`,
        },
        {
          question: `<i>[SBA]</i> - Why aren't my health/mana bars textured?`,
          photo: ``,
          answer: `Make your you're on FurfSky Reborn v1.3.1 or above.`,
          related: `<a href="/downloads">Go to the downloads page.</a>`,
        },
        {
          question: `<i>[SBE]</i> - Why does my SFX from SBE sound different from what I had before I installed the pack?`,
          photo: ``,
          answer: `The original audio files included within SBE's initial v2.0.0 release either
          lacked any credit for the original source (in <code>warning.ogg</code>'s case, which was taken from
          a Daniel Simion on SoundBible.com) or violated Microsoft's copyright policies
          (in <code>chime.ogg</code>'s case, which was Windows 7's shutdown sound effect verbatim).
          Whether or not SBE's <code>.ogg</code> files change after v2.0.0 (which, evidently, has not happened yet)
          or after the timestamp of this message is not my concern, and whether you choose to restore
          SBE's original sound effects is a choice you make at your own risk.`,
          related: `<a href="https://soundbible.com/2182-Ice-Cubes-Glass.html"><code>warning.ogg</code> source</a> | <a href="https://creativecommons.org/licenses/by/3.0/">Human-readable Creative Commons 3.0 (CC 3.0) license</a> | <a href="https://creativecommons.org/licenses/by/3.0/legalcode">Legal mumbo jumbo version of CC 3.0</a><br><a href="https://www.microsoft.com/en-us/legal/copyright/permissions">Microsoft's copyright policy</a> | <a href="https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks">Microsoft's Trademark and Brand Guidelines</a>`,
        },
      ],
    },
  ],
  partners: [
    {
      name: `Moulberry's Bush`,
      photo: `https://cdn.discordapp.com/avatars/211288288055525376/1d9bccd94f1b3bb739689739d77a8ffb.png?size=2048`,
      desc: `Home of Moulberry, the maker of the Skyblock mod NEU, but also
        some other helpful mods including Hychat, Insomnia, and HUDCaching.`,
      link: `https://discord.gg/moulberry`,
      linkText: `Join Moulberry's Bush here.`,
    },
    {
      name: `Danker's Skyblock Mod`,
      photo: `https://cdn.discordapp.com/attachments/829790281565601899/846434141062823966/dsm.png`,
      desc: `Home of Danker's Mod for Hypixel Skyblock, which includes a bunch of
        solvers and other QoL additions to improve your overall Hypixel Skyblock experience.`,
      link: `https://discord.gg/QsEkNQS`,
      linkText: `Join the Danker's Skyblock Mod server here.`,
    },
    {
      name: `ZachPlaysAN's Discord`,
      photo: `https://cdn.discordapp.com/avatars/285270046677139459/a2112e9f9261b60c6ef64c3df2554b40.png?size=2048`,
      desc: `The ZachPlaysAN Community Discord is a place for
      SkyBlock players and channel viewers to come together and talk
      about updates and what they're working on, as well as a way for
      ZachPlaysAN to communicate with his viewers and share his videos!`,
      link: `https://discord.gg/zachplaysan`,
      linkText: `Join ZachPlaysAN's Discord server here.`,
    },
    {
      name: `Biscuit's Bakery`,
      photo: `https://cdn.discordapp.com/attachments/829790281565601899/846438002464391209/a_f5cc2a5e89cd5acae89622e47cee5b30.gif`,
      desc: `Home of SkyblockAddons, a mod by Biscuit, which includes
        dozens of useful features to tweak and improve your time on
        Hypixel Skyblock. Also contains support channels for the mod.`,
      link: `https://discord.gg/zWyr3f5GXz`,
      linkText: `Join Biscuit's Bakery here.`,
    },
    {
      name: `Apec`,
      photo: `https://cdn.discordapp.com/attachments/829790281565601899/846435797926412338/apec.gif`,
      desc: `Apec is a Minecraft mod designed to improve the GUI
        to better suit playing Hypixel Skyblock, and overall just makes
        everything look a lot more clean.`,
      link: `https://discord.gg/YXrJzpY`,
      linkText: `Join the Apec Discord server here.`,
    },
    {
      name: `SkyClient`,
      photo: `https://media.discordapp.net/attachments/829790281565601899/846438901836415006/skyclient256.gif`,
      desc: `What is essentially a fancy modpack, SkyClient makes it
        easy to install mods and texture packs for Skyblock. It also allows
        you to update your mods and packs with one click.`,
      link: `https://discord.gg/VPqDRWSHN2`,
      linkText: `Join the SkyClient Discord server here.`,
    },
    {
      name: `Skyblock Overhaul`,
      photo: `https://cdn.discordapp.com/icons/796144458013081650/caf61c061dbcfe059bcdf04713f8aeaf.png?size=256`,
      desc: `Hypixel Skyblock has a variety of swords, bows and tools.
        The Skyblock Overhaul Revamped pack will include completely overhauled
        textures of the items in Skyblock, and bring life to the textures with
        intricate designs and colour!`,
      link: `https://discord.gg/MGpAEZyKp5`,
      linkText: `Join Skyblock Overhaul here.`,
    },
    {
      name: `Worlds and Beyond`,
      photo: `https://cdn.discordapp.com/icons/778919802953662488/a_60b99e313f065301e349a7efcc932cff.png?size=256`,
      desc: `A super clean and cool texture pack for Skyblock with
        tons of animated textures made by none other than Skeletony!`,
      link: `https://discord.gg/TXufEf3QaA`,
      linkText: `Join Worlds and Beyond here.`,
    },
    {
      name: `Motor's Garage`,
      photo: `https://cdn.discordapp.com/icons/555131716151410688/16feb203116c92e140ed8fb1dde8e639.png?size=256`,
      desc: `A vanilla styled Hypixel Skyblock pack made by Motor.
        Includes textures for almost all items in the game, as well as
        NEU support for Custom Skulls and Mithril Veins.`,
      link: `https://discord.gg/ABHrh6K3Fh`,
      linkText: `Join Motor's Garage here.`,
    },
    {
      name: `r/HypixelSkyblock`,
      photo: `https://styles.redditmedia.com/t5_13bsg7/styles/communityIcon_yei06atmmk851.jpg?width=256&s=d4253c34106b0a8c752612fd32117b3d513935e7`,
      desc: `A Reddit fan community dedicated to discussing topics
        related to Hypixel Skyblock. It's considered by many to be
        a less toxic version of the Hypixel Forums, and is well moderated.`,
      link: `https://reddit.com/r/HypixelSkyblock`,
      linkText: `Visit r/HypixelSkyblock here.`,
    },
  ],
  steps: [
    {
      step: `Download FurfSky Reborn.<br><a href="/">Latest version</a> (recommended) | <a href="/downloads/">All versions</a>`,
      type: `Required`,
      title: `How else are you going to use FurfSky Reborn?`,
    },
    {
      step: `If you haven't done so already, download and install OptiFine for 1.8.9.<br>macOS players: <a href="https://optifine.net/adloadx?f=preview_OptiFine_1.8.9_HD_U_M6_pre1.jar">Optifine M6</a> | Windows and Linux players: <a href="https://optifine.net/adloadx?f=OptiFine_1.8.9_HD_U_M5.jar">OptiFine M5</a>`,
      type: `Required`,
      title: `OptiFine is required to apply textures to non-vanilla items such as the ones you see in Hypixel Skyblock.`,
    },
    {
      step: `Launch Minecraft and from the splash screen/main menu, go to your resource packs.<br>(<code>Options > Resource Packs</code>)`,
      type: `Required`,
      title: `This is how you navigate to your resources packs menu.`,
    },
    {
      step: `Click the "Open resource pack folder" button towards the bottom left of the screen.`,
      type: `Required`,
      title: `If you have your own method of finding your texture packs folder, go for it. This step is intended to be a cross-platform method.`,
    },
    {
      step: navigator.platform.toLowerCase().includes("linux") ? `ooh, your a nerd, using linux i see, use the <code>mv</code> to the directory of your minecraft installation. usually <code>~/.minecraft</code>` : `Drag the FurfSky Reborn <code>.zip</code> file from your downloads folder into the resource packs folder.`,
      type: `Required`,
      title: `This is how you get Minecraft to acknowledge the Furfsky Reborn pack.`,
    },
    {
      step: `Move the FurfSky Reborn texture pack from the left column into the right column.<br>Then press "Done" towards the bottom right.`,
      type: `Required`,
      title: `Again, this is a cross-platform step. If you already know how to apply texture packs or have your own methods, use those.`,
    },
    {
      step: `Make sure Custom Textures are enabled by going to<br><code>Video Settings > Quality > Custom Items: ON</code> and enabling it.`,
      type: `Required`,
      title: `This is the second part of using OptiFine to apply custom item textures.`,
    },
    {
      step: `Disable Fast Render.<br>(<code>Video Settings > Performance > Fast Render: OFF</code>)`,
      type: `Required`,
      title: `Fast Render causes problems as your Hypixel Skyblock mods library grows, and this step is a precautionary measure in minimizing problems in the future.`,
    },
    {
      step: `Enable custom texture's animations by going to<br><code>Video Settings > Animations > Terrain Animated: ON</code>.`,
      type: `Optional`,
      title: `If you don't want animations for your items, you can turn this option "OFF" instead.`,
    },
    {
      step: `Check out the <a href="/faq/">FAQ</a> page.`,
      type: `Optional`,
      title: `Just because you've finished installing the pack doesn't necessarily mean you won't experience any problems.`,
    },
  ],
  navigation: {
    "home": '/',
    "downloads": '/downloads/',
    "gallery": '/gallery/',
    "partners": '/partners/',
    "steps": "/steps/",
    "faq": "/faq/",
    "credits": "/credits/",
  },
  quotelessContribs: {
    testersAssoc:
      [
        `Ajay`,
        `artificialair`,
        `Aura`,
        `BACON`,
        `Bix`,
        `king poyo`,
        `Mylzad`,
        `NirBehar`,
        `Piggity`,
        `Pxgxr`,
        `SheepMika`,
        `<span style="color:#fbcc6c">and</span> Strafe`,
      ],
    problematicFolks:
      [
        `Saikage`,
        `abyssr`,
        `SeBook`,
        `<span style="color:#fbcc6c">and</span> MasterMiner4647`,
      ]
  },
};

const buildImageSrc = (pageName, isHover = false) => {
  const BASE_IMG_URL = '/assets/navbar/';
  const HOVER_IMG_POSTFIX = '_pressed';
  return `${BASE_IMG_URL}${pageName}${isHover ? HOVER_IMG_POSTFIX : ''}.png`
}

const handleImageHoverEvent = (event, isHover) => {
  if (!event || !event.target || !event.target.alt) return;
  event.target.src = buildImageSrc(event.target.alt, isHover);
}

const buildNavigationNode = (config) => {
  const navbar = document.createElement("nav");
  if (!config) {
    console.error("[buildNavigationPage]: Config is missing");
    return navbar;
  }
  const list = document.createElement('ul');
  list.addEventListener('mouseover', e => handleImageHoverEvent(e, true));
  list.addEventListener('mouseout', handleImageHoverEvent);
  Object.keys(config).forEach(pageName => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = config[pageName];
    const image = document.createElement("img");
    image.src = buildImageSrc(pageName);
    image.alt = pageName;
    link.appendChild(image);
    listItem.appendChild(link);
    list.appendChild(listItem);
  })
  navbar.appendChild(list);
  return navbar;
}

document.body.insertBefore(buildNavigationNode(data.navigation), document.body.firstChild);
//meta tags

document.head.append();
