const date = new Date();
const pressToMoveQuotes = (quotes) => {
  let quoteIndex = -1;
  const quote = document.getElementById("headerSubtitle");
  quote.innerHTML = `Right arrow key to start.<br>Left arrow key to rewind.<br>"R" key to restart.<br>Mobile device users, get good.`;
  const keyPressed = (event) => {
    switch (event.key) {
      case "R":
        quoteIndex = 0;
        quote.innerHTML = quotes[quoteIndex];
        break;
      case "ArrowRight":
        if (quoteIndex >= quotes.length - 1) {
          quoteIndex = quotes.length;
          quote.innerHTML = `You've reached the end.<br>Press the left arrow key to go back, or "R" to start again.`;
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
      `ix`,
      `"help why are people boning me"<br><br>-Moulberry, concerned about people throwing Bonemerangs at him`,
      `imagine if the 10kth server member was furf himself coming in to flip us off<br>—erymanthus`,
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
      `"nuts"<br>-axolotlite`,
      `hallways fucking stink`,
      `stop refreshing and look at dn`,
      `/dn`,
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
      `AUTHORIZED PERSONELL ONLY BEYOND THIS POINT.`,
      `once sponsored by the suffering of 14 innocent souls before we set them free`,
      `please do not click on the patreon logo we are looking into replacing it with a youtube logo`,
      `what the fuck is an svg path`,
      `Don't cry about the pride logo at all and celebrate diversity like a normal person, please.`,
      `Go cry about the pride logo privately and have a nice day.`,
      `NO HATE SPEECH ALLOWED BEYOND THIS POINT.`,
      `area 51`,
      `catch me outside how about that`,
      `"one day the queen laid an egg and we all hatched out of it"<br>-FurryEBoy, the best UK history teacher in FSR`,
      `Things were getting cancelled so fast, people thought it was Twitter!`,
      `daedalus used a fist-first philosophy and couldn't be killed with kindness...<br>no wonder you're just flesh and bone now.`,
      `ermahgerd it's ferfsker rehbern!!!!`,
      `this is fine`,
      `how do you do fellow kids`,
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
      `hey, hey, hey mister, cantcha see the monsters in my head`,
      `brb gonnna t-pose over wynncraft rq`,
      `all the other kids with the pumped up kicks`,
      `baby shark doo doo doo doo doo doo`,
      `rip <span tabindex='-1' role='button' style='border-radius: 3px;padding: 0 2px;font-weight: 500;color: #7289da;background: rgba(114,137,218,.1);position: relative;'>#the-barbershop</span>`,
      `Our scientists have confirmed that the colour of eggs is [that of a rainbow].`,
      `If we assume that a given egg is white, and, by additive color integration, white is the sum of roughly every color of visible light, and additionally, that the pride flag is a symbolic rainbow, then yes your honor, the color of eggs is [that of a rainbow].`,
      `your password is<br>91de39df035c3ef210ab34f153c6a12589027231a20aace104b0d86ab68067c5280d8160aa7ed13f4a29dbb30175746feb6aedd4d957ceb91fe6119810f4545b`,
      `i can feel your heat.`,
      `a calendar is just like a box of chocolates, sometimes you get 2020, sometimes you don't`,
      `#winning`,
      `<img src="https://discord.com/assets/ddea4500a252f80cbf6d6c92db15178e.svg" draggable="false" width="32" height="32"> fsr is owned by a furry?`,
      `<a href="https://www.youtube.com/watch?v=BLnDVDYJx0Q"><img src="https://discord.com/assets/817f965bd1fd796777908e6c8052d665.svg" draggable="false" width="64" height="64"></a>`,
      `Now with twice as much ÙwÚ`,
      `you're a furry now >:)`,
      `drink more ovaltine`,
      `NOT APPROVED FOR HUMAN USE`,
      `Try <span style="color: #AAAAAA;">/play TKR</span> Today!`,
      `+1% SPEED!!!`,
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
      `<img src="https://discord.com/assets/bbe8ae762f831966587a35010ed46f67.svg" draggable="false" style="width:32px; height:32px;"> <img src="https://discord.com/assets/3ae4af803746f6882a684a5a48dc29ff.svg" draggable="false" style="width:32px; height:32px;"> <img src="https://discord.com/assets/89bba1c5173777ba0a352d7ac585a647.svg" draggable="false" style="width:32px; height:32px;"> <img src="https://discord.com/assets/8971c31a6aaa34e99f197c5c9c3d03ad.svg" draggable="false" style="width:32px; height:32px;"> <img src="https://discord.com/assets/9efe2dc7b0a590b54482c0ef75c752ca.svg" draggable="false" style="width:32px; height:32px;"> <img src="https://discord.com/assets/c4cb8aa4b3abef19178d052694e3ebf4.svg" draggable="false" style="width:32px; height:32px;">`,
      `<img src="https://discord.com/assets/bbe8ae762f831966587a35010ed46f67.svg" draggable="false" style="width:32px; height:32px;"> <img src="https://discord.com/assets/3ae4af803746f6882a684a5a48dc29ff.svg" draggable="false" style="width:32px; height:32px;"> <img src="https://discord.com/assets/89bba1c5173777ba0a352d7ac585a647.svg" draggable="false" style="width:32px; height:32px;"> <img src="https://discord.com/assets/f654b0f03f641e89a0db09b4c69cc33b.svg" draggable="false" style="width:32px; height:32px;"> <img src="https://discord.com/assets/8971c31a6aaa34e99f197c5c9c3d03ad.svg" draggable="false" style="width:32px; height:32px;"> <img src="https://discord.com/assets/9efe2dc7b0a590b54482c0ef75c752ca.svg" draggable="false" style="width:32px; height:32px;"> <img src="https://discord.com/assets/c4cb8aa4b3abef19178d052694e3ebf4.svg" draggable="false" style="width:32px; height:32px;">`,
      `♫ no matter how hard you try,<br>you can't stop me now ♫`,
      `come to r/hypixelskyblock: now with around 93% more dubious fanart`,
      `r/hypixelskyblock: the art is maybe better than the memes`,
      `"why do all american teenagers sound the same i cant tell the fuckers apart in VCs" —NWT`,
      `damn, pfizer really do be making me drowsy as fuck rn <img src="https://discord.com/assets/711ac22a92d00f844023ded91f820e8c.svg" draggable="false" style="width:32px; height:32px;">`,
      `"fot nerf? shadow fury moment <img src="https://discord.com/assets/fd077d826b040d6c8b895de3b7585c25.svg" draggable="false" style="width:32px; height:32px;">"`,
      `"bonzo will bend us"<br>-rebmE 2021`,
      `zburger: <i>if bedbugs live in beds, then cockroaches</i>—<br>Temp: —<i>ruin an otherwise spectacular chicken sandwich :(</i>`,
      `zburger: i am losing braincells at the rate of the amount of water flowing through the niagra falls per second<br>Temp: in gallons, litres, barrels, washing machines, molecules, subatomic particles, or brain cells?<br> Daedalus: you forgot the femoral artery<br>zburger: yes`,
      `i dont want the pack<br><br>i just want the texture pack`,
      `so... when's this site going to support https connections?`,
      `Welcome to https://furfsky.net, the only place where you won't be murdered for using the &lt;i&gt; HTML tag instead of &lt;span style="font-style: italic;"&gt;.`,
      `There are currently quotes (including this one) on the site. Reload to see if your submission was one of them!`,
      `hanz get der flammenwerfer!`,
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
      `this is where our conversations are stored people <img src="https://discord.com/assets/fd077d826b040d6c8b895de3b7585c25.svg" draggable="false" style="width:32px; height:32px;"><br><br><img src="https://cdn.discordapp.com/attachments/789592044984860672/850139362774483034/20210603_155950_HDR.jpg" width="40%" height="40%" draggable="false">`,
      `AY CARAMBA DONDE ESTA LA BIBLIOTECA`,
      `ay caramba donde esta la biblioteca`,
      `gzdfhbklkogdfhpgfjkopnimmghfjpoml,ngfhompl,nfghmopl,nfgmop`,
      `imagine not using https -thegu5`,
      `tomengmaster: ery ttt me <img src="https://discord.com/assets/fd077d826b040d6c8b895de3b7585c25.svg" draggable="false" width="32" height="32"><br>erymanthus: you want me to toss tomatoes towards you?`,
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
      `WHY THE FUCK DOES IT HAVE TO BE SO HARD TO GET A COVID-19 VACCINATION?<br>I'M JUST TRYING TO GET MY FIRST DOSE OF PFIZER, FOR FUCK'S SAKE!<br><br>FUCKING HELL, I HAVE A BETTER CHANCE OF GETTING A NECRON'S HANDLE AT THIS POINT.`,
      `Any unlicensed distribution of beta textures is punishable by at least, but not limited to, 3 months of penal labor and kneecapitation.`,
      `Check <span tabindex='-1' role='button' style='border-radius: 3px;padding: 0 2px;font-weight: 500;color: #7289da;background: rgba(114,137,218,.1);position: relative;'>#pack-faq</span> and <span tabindex='-1' role='button' style='border-radius: 3px;padding: 0 2px;font-weight: 500;color: #7289da;background: rgba(114,137,218,.1);position: relative;'>#mod-ui-faq</span> first, or die.`,
      `${
        Math.random() > 0.5
          ? `<img src="https://ptb.discord.com/assets/2d16214bcc74dd1546a35d3d6f15abec.svg" draggable="false" style="width:32px; height:32px;">`
          : `<img src="https://cdn.discordapp.com/emojis/834588295194738758.png?v=1" draggable="false" style="width:32px; height:32px;">`
      } SHIT HAPPENS. | macOS Big Sur on MacBook Pro Late 2019 16" (i9-9880H @ 2.30GHz, Radeon Pro 5500M @ 2048x1280, 16GB RAM)`,
      `"SHIT HAPPENS."<br>-Tom Holland`,
      `Made by <span style="color: #FF5555;">[</span><span style="color: #FFFFFF;">YOUTUBE</span><span style="color: #FF5555;">] FurryEBoy</span> and his team of artists!`,
      `Type <span style="color: #AAAAAA;">/killdante</span> in chat to make the fight last longer!`,
      `eat butt you ding dongs`,
      `Better get some corticosteroids to treat that laryngeal fracture.`,
      `holy motherforking shirtballs`,
      `aHR0cHM6Ly9taW5pa2xvb24uY29tL3BpY3MvZDk4ZTE3MDgtZWQ3Ny00NzE1LWE5OTktY2VlNDY2YTk1NzY2LnBuZw==`,
      `<img src="https://media1.tenor.com/images/663ee2c0232d35607ea49f16eb28fdf8/tenor.gif" draggable="false" width="996px" height="196px">`,
      `<img src="https://cdn.discordapp.com/emojis/604486986170105866.png?v=1" draggable="false" width="32" height="32"> Temporary quote outage.<br>Try again later.`,
      `Beans.<br>-TORDA`,
      `"That boy ain't right."<br>-Hank Hill`,
      `the letter 8 is my favorite color of the furfsky reborn resource pack`,
      `<img src="https://cdn.discordapp.com/attachments/728977460737081454/839757476085760040/Screenshot_2021-05-06_FurryEBoy_Minecraft_Profile.png" draggable="false" width="32" height="32"> He protecc<br><img src="https://cdn.discordapp.com/attachments/728977460737081454/839758647910989844/Screen_Shot_2021-05-06_at_3.00.30.459_AM_Eastern_Daylight_Time.png" draggable="false" width="32" height="32"> he attacc<br>but most importantly...<br><br><img src="https://cdn.discordapp.com/avatars/291620843363106828/2b3112ee6c0303ef1bd21b90b7137fc4.png" draggable="false" width="32" height="32"> he make texture pacc`,
      `If I was a man with a coherent brain, I would have gotten full Shadow Assassin and Livid Dagger, but no. I just have full Superior Dragon Armor and an overly maxed Shadow Fury.`,
      `keep it in your pants please<br><small>(and yes you should reasonably know what we mean by "it")</small>`,
      `"wait are we going to be graded or is this just some pass/fail garbage"<br>-multiple aspiring folks applying for fsr artist as well as amy santiago`,
      `i guess i just dont care what other people think of me`,
      `"<i>Just because you wanna do something doesn't mean you get to do it.<br>Life is chaos, success is completely arbitrary, and confidence is everything.</i>"<br>-Gina Linetti`,
      `hot damn!`,
      `; vs <span style="font-family: Trebuchet MS;">;</span><br><br>Which one is the English semicolon?<br><br><small>(Credits to MisterCheezeCake for uncovering this gem.)`,
      `<i>We protest you calling us "little kids".<br>We prefer to be called "vertically-impaired pre-adults".</i><br>-fsr team (but Yakko Warner said it first)`,
      `I'm going to slice your Achilles' tendons, peel off your fingernails, and stick knitting needles in your eyes.`,
      `<span style="font-size:4px;">Bassicly for those player who are using neu etc almost everything. Is banable which makes u play it easy like neu ah etc profit no profit dungeon overlay solvers and now the shaders etc if they allow us to see which we would not ban like dungeon overlay etc so I would recommend using lunar client and badlion cuz of they have what is allowed yeah dungeon map potion effects etc allowed but just use lunar or badlion cuz everything there matches the rules of server me personally use lunar client used to use neu etc which I could get ban I never got kicked earlier but might watchdog never saw it and now I don't wanna get ban tell me if I'm wrong</span>`,
      `Instructions unclear; the captive's Achilles' tendons have been needled, fingernails sliced, and eyes peeled.`,
      `this is exhausting i just want to go back to my container of goo and go to sleep`,
      `stop refreshing the page, please. these random quotes were meant to be fun tidbits you notice for a fleeting moment before you download the latest version of the pack, not for you to get a funny screenshot. save that job for erymanthus and voxal<br>thanks :D`,
      `please stop using <span tabindex='-1' role='button' style='border-radius: 3px;padding: 0 2px;font-weight: 500;color: #7289da;background: rgba(114,137,218,.1);position: relative;'>#make-a-website-quote</span> as <span tabindex='-1' role='button' style='border-radius: 3px;padding: 0 2px;font-weight: 500;color: #7289da;background: rgba(114,137,218,.1);position: relative;'>#general</span> with a 15 minute cooldown ;-;`,
      `<span tabindex='-1' role='button' style='border-radius: 3px;padding: 0 2px;font-weight: 500;color: #7289da;background: rgba(114,137,218,.1);position: relative;'>#invalid-channel</span> is not a real chat room, and is just a rumor falsely spread by server members.`,
      `Now I've learned my
        ${
          Math.random() > 0.5
            ? `<img src="https://cdn.discordapp.com/emojis/787004887061364736.png?v=1" draggable="false" style="width:32px; height:32px;">
          <img src="https://cdn.discordapp.com/emojis/787004872444739624.png?v=1" draggable="false" style="width:32px; height:32px;">
          <img src="https://cdn.discordapp.com/emojis/787004862356389909.png?v=1" draggable="false" style="width:32px; height:32px;">
          <img src="https://cdn.discordapp.com/emojis/787004897735475220.png?v=1" draggable="false" style="width:32px; height:32px;">`
            : `<img src="https://cdn.discordapp.com/emojis/804803417259507752.png?v=1" draggable="false" style="width:32px; height:32px;">
          <img src="https://cdn.discordapp.com/emojis/804803405012533268.png?v=1" draggable="false" style="width:32px; height:32px;">
          <img src="https://cdn.discordapp.com/emojis/804803384187158559.png?v=1" draggable="false" style="width:32px; height:32px;">
          <img src="https://cdn.discordapp.com/emojis/804803429264392213.png?v=1" draggable="false" style="width:32px; height:32px;">`
        }
        , next time ${
          Math.random() > 0.5
            ? `please don't sing with me!`
            : `won't you sing with me?`
        }`,
      `
       <img src="https://ptb.discord.com/assets/197cdfb70e6835c81cbb1af86ab7e01e.svg" draggable="false" style="width:32px; height:32px;">
       <img src="https://ptb.discord.com/assets/9efe2dc7b0a590b54482c0ef75c752ca.svg" draggable="false" style="width:32px; height:32px;">
       <img src="https://ptb.discord.com/assets/7102ad5cacc8ba7bd99fa16b4e6468a5.svg" draggable="false" style="width:32px; height:32px;">
       <img src="https://ptb.discord.com/assets/197cdfb70e6835c81cbb1af86ab7e01e.svg" draggable="false" style="width:32px; height:32px;">
       <img src="https://ptb.discord.com/assets/c4cb8aa4b3abef19178d052694e3ebf4.svg" draggable="false" style="width:32px; height:32px;">
       <img src="https://ptb.discord.com/assets/547b9b60d8dfc97568666a168793dc73.svg" draggable="false" style="width:32px; height:32px;">
       <img src="https://ptb.discord.com/assets/2d24eb6ab8545bd17e66af014500f1ed.svg" draggable="false" style="width:32px; height:32px;">
       <img src="https://ptb.discord.com/assets/7102ad5cacc8ba7bd99fa16b4e6468a5.svg" draggable="false" style="width:32px; height:32px;">
       <img src="https://ptb.discord.com/assets/0df8cc6898cdb812709a4672f137b62d.svg" draggable="false" style="width:32px; height:32px;">
       <img src="https://ptb.discord.com/assets/515873f6898e0b26daf51921c65a43f7.svg" draggable="false" style="width:32px; height:32px;">
       <img src="https://ptb.discord.com/assets/89bba1c5173777ba0a352d7ac585a647.svg" draggable="false" style="width:32px; height:32px;">
       <img src="https://ptb.discord.com/assets/7102ad5cacc8ba7bd99fa16b4e6468a5.svg" draggable="false" style="width:32px; height:32px;">
       <img src="https://ptb.discord.com/assets/f654b0f03f641e89a0db09b4c69cc33b.svg" draggable="false" style="width:32px; height:32px;">
       `,
      `Winner of ${String(date.getYear() + 1900)} best pack award.`,
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
      () => {
        document.getElementById("logo").src = "assets/logos/FSRPrideMonth.gif";
        document.getElementById("headerSubtitle").innerHTML = `"Every time someone steps up and says who they are, the world becomes a better, more interesting place."<br>-Captain Holt`;
      },
      () => {
        document.body.style = "filter:blur(1px)";
        document.getElementById("headerSubtitle").innerHTML =
          "looks like your vision isn't the best!";
      },
      () => {
        document.body.style = "filter:grayscale(80%)";
        document.getElementById("headerSubtitle").innerHTML =
          "look mom, im emo";
      },
      () => {
        document.body.style = "filter:brightness(1.4)";
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
          if (coolCounter == numCools) {
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
          if (counter != -2) {
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
          if (counter != -2) {
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
          if (counter != -2) {
            quote.innerHTML = `${quotes[counter % 2]}`;
          }
        }, 750);
      },
      `<img src="https://cdn.discordapp.com/emojis/775767117089865758.gif?v=1" draggable="false">`,
      `<img src="https://cdn.discordapp.com/emojis/821913465941524480.png?v=1" draggable="false">`,
      `<img src="https://cdn.discordapp.com/emojis/834947827532300328.gif?v=1" draggable="false">`,
      `<img src="https://cdn.discordapp.com/emojis/834947234885271592.gif?v=1" draggable="false">`,
      `<img src="https://cdn.discordapp.com/emojis/784933350569279498.png?v=1" draggable="false">`,
      `<img src="https://cdn.discordapp.com/emojis/817106472424177706.gif?v=1" draggable="false">`,
      `<img src="https://cdn.discordapp.com/emojis/825078817265287239.gif?v=1" draggable="false">`,
      `<img src="https://cdn.discordapp.com/emojis/776897206300180480.gif?v=1" draggable="false">`,
      `<img src="https://cdn.discordapp.com/emojis/784933350569279498.png?v=1" draggable="false">`,
      `<img src="https://cdn.discordapp.com/attachments/789592044984860672/825779017558130697/image0.png" width="400" height="225" draggable="false">`,
      `<img src="https://cdn.discordapp.com/attachments/789592044984860672/850511263846105139/Screenshot_728.png" width="40%" height="40%" draggable="false">`,
    ],
  },
  downloads: [
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
      name: "Mod UIs (Yes, 99% of the SB mods you can name are textured here)",
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
  ],
  creditColors: {
    Manager: "#ffa500",
    "Head Artist": "#00ffc6",
    Artist: "#b19cd9",
    "Trial Artist": "#6a5d82",
    "Retired Artist": "#7d6e99",
    Admin: "#4b8b3b",
    "Artist & Website Maintainer": "#67dadd",
    Moderator: "#17d44a",
    Helper: "#3498db",
    "Retired Moderator": "#7d6e99",
    "Event Helper": "#554dca",
    "Website Developer": "#ffff00",
    "Pack Contributor": "#00b0b0",
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
      name: "D43DALUS",
      role: "Head Artist",
      quote: "I'm built not born, it's an analytical advantage.",
    },
    {
      name: "GenesiS",
      role: "Artist",
      quote: "Shadow fury shits on Livid Dagger",
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
      link: "https://hypixel.net/members/3639006/",
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
      name: "TrashAtNames/BlockBusterCF",
      link: "https://hypixel.net/members/2765236/",
      role: "Artist",
      quote: "i live under a rock when it comes to optifine updates apparently",
    },
    {
      name: "Skeletony",
      link: "https://hypixel.net/members/3925718/",
      role: "Retired Artist",
      quote: "bootleg sans. also check out wab",
    },
    {
      name: "ThatOneRandomDiscordAccount",
      role: "Artist",
      quote: "Dollar Store Skeletony: now with uncreativivity",
    },
    {
      name: "Motor",
      role: "Artist",
      quote: "Master at Shitposting",
    },
    {
      name: "tea",
      role: "Artist",
      quote: "i will murder every axolotl in a 100 km radius",
    },
    {
      name: "Erymanthus",
      link: "https://www.reddit.com/user/RayDeeUx/",
      role: "Artist & Website Maintainer",
      quote:
        "hey, you could pour soup in my lap and i'll probably apologize to you!",
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
      role: "Artist",
      quote: "those are uhh... a lot of channels... you got there.",
    },
    {
      name: "Zetkut",
      role: "Retired Artist",
      quote:
        "spain without the s <small>(i just woke up i don't want to think)</small>",
    },
    {
      name: "Ropes",
      role: "Trial Artist",
      quote: "yup ! I hate furfsky 🙂",
    },
    {
      name: "Hexafish",
      role: "Artist",
      quote:
        "petition to remove the liver dragger's texture from fsr because you should never use it",
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
      role: "Trial Artist",
      quote: "Chroma HUD/UIs hurts my soul",
    },
    {
      name: "<span style='background: -webkit-linear-gradient(top left, rgba(191,97,106,1) 0%, rgba(191,97,106,1) 20%, rgba(208,135,112,1) 20%, rgba(208,135,112,1) 35%, rgba(235,203,139,1) 35%, rgba(235,203,139,1) 50%, rgba(163,190,140,1) 50%, rgba(163,190,140,1) 65%, rgba(136,192,208,1) 65%, rgba(136,192,208,1) 80%, rgba(180,142,173,1) 80%, rgba(180,142,173,1) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;'>voxal</span>",
      link: "https://thoughtscape.vercel.app/",
      role: "<span style='background: -webkit-linear-gradient(top left, rgba(191,97,106,1) 0%, rgba(191,97,106,1) 20%, rgba(208,135,112,1) 20%, rgba(208,135,112,1) 35%, rgba(235,203,139,1) 35%, rgba(235,203,139,1) 50%, rgba(163,190,140,1) 50%, rgba(163,190,140,1) 65%, rgba(136,192,208,1) 65%, rgba(136,192,208,1) 80%, rgba(180,142,173,1) 80%, rgba(180,142,173,1) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;'>Website Developer</span>",
      quote:
        "<span style='background: -webkit-linear-gradient(top left, rgba(191,97,106,1) 0%, rgba(191,97,106,1) 20%, rgba(208,135,112,1) 20%, rgba(208,135,112,1) 35%, rgba(235,203,139,1) 35%, rgba(235,203,139,1) 50%, rgba(163,190,140,1) 50%, rgba(163,190,140,1) 65%, rgba(136,192,208,1) 65%, rgba(136,192,208,1) 80%, rgba(180,142,173,1) 80%, rgba(180,142,173,1) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;'>I am very speical :)</span>",
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
      quote: "do or do not there is no try",
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
        "sometimes i question why artists that are as good as the people here are making art for mc",
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
        "at least you didn't get yourself to design the whole sea creature guide",
    },
    {
      name: "Hasnu",
      role: "Pack Contributor",
      quote: "#FSRGangOnTop",
    },
    {
      name: "ThatGravyBoat",
      role: "Pack Contributor",
      quote: "I use MS paint for my pixel art",
    },
    {
      name: "nacrt",
      role: "Pack Contributor",
      quote:
        "just have it a normal file name, the cancer that is mediafire only makes things worse",
    },
    {
      name: "Shy0",
      role: "Pack Contributor",
      quote: "om im stoopid",
    },
    {
      name: "MasterMiner4647",
      role: "Discord Contributor",
      quote: "the other quotes aren't family friendly, but mine is",
    },
    {
      name: "Hoss",
      role: "Discord Contributor",
      quote: "tylereboy my beloved",
    },
  ],
  faq: [
    {
      question: `<h1 id="disclaimers"><h1 id="disclaimer">Disclaimers</h1></h1>`,
      photo: ``,
      answer: `- If you have edited your pack in any way, please be aware that it is possible that it is an issue on your end.<br>
        If you are reporting a bug, make sure it is with an unmodified version of the latest release.<br><br>
        - If you are using BLC or Lunar Client, please don't report any bugs to us at all.<br>
        Both of these clients tend to have issues on their end.<br><br>
        - We recommend using OptiFine M6 over OptiFine M5 as the most common cause of M5 crashes<br>
        and/or problems is its white screen bug on macOS, which OptiFine M6 fixes.<br>
        Additionally, items in third person perspectives shouldn't break for Windows and Linux players in OptiFine M6.<br>
        If OptiFine M5 works just fine for you, keep using it. Otherwise, use M6 and see if your problem is resolved.<br><br>
        - Any links included on this page that lead outside of the furfsky.net domain<br>
        are not for promotional purposes. They are there solely for convenience.<br><br>
        - Further questions regarding Skyblock item textures should go to<br>
        the #questions-and-support channel in the Discord server.<br>
        Any questions regarding mod UIs should be directed at @Erymanthus | u/RayDeeUx.`,
      relevantLinksAndAllThat: ``,
    },
    {
      question: `<h1 id="sbitems"><h1 id="items">FAQ - Skyblock item textures</h1></h1>`,
      photo: ``,
      answer: `<i>Note: Most frequent solutions include switching from Badlion/Lunar to Forge,<br>
        updating your mods, and browsing your Video Settings.</i>`,
      relevantLinksAndAllThat: `<br><br><a href="#mod">Click here to go to the mod UIs section.</a>`,
    },
    {
      question: `Glass panes are displaying as "null" in-game, what do I do?`,
      photo: `<img src="https://cdn.discordapp.com/attachments/728977460737081454/853011732129775686/what_the_fudge_imgur.png"><br>`,
      answer: `Update OptiFine to M6.`,
      relevantLinksAndAllThat:`<br><br><a href="https://optifine.net/adloadx?f=preview_OptiFine_1.8.9_HD_U_M6_pre1.jar">Get OptiFine M6 here.</a>`,
    },
    {
      question: `Textures aren't showing up properly when I hold them, what do I do?`,
      photo: `<img src="https://cdn.discordapp.com/attachments/728977460737081454/853013636729536602/vOhsHbJ.png"><br>`,
      answer: `
        - Make sure Custom Item textures is enabled in your Video Settings.<br>
        Here is the settings path: <code>Video Settings > Quality > Custom Items: ON</code><br><br>
        — Check your mod folder, if you are using Orange's Old Animation please remove it<br>
        and download the Sk1er version which doesn't break the pack and is more feature complete.<br><br>
        - If you are using Badlion Client (BLC), their mod, BetterFrames, tends to break the pack completely,<br>
        so make sure to disable it if you plan on using FurfSky Reborn.<br><br>
        In general, we heavily advise against the usage of BLC<br>
        when using FurfSky Reborn, as it has a very buggy version of OptiFine.<br>
        SkyClient is a great solution.
        `,
      relevantLinksAndAllThat:`<br><br><a href="https://sk1er.club/beta">Get Sk1er LLC's Old Animations through this link.</a><br><a href="https://hypixel.net/threads/skyclient-easily-install-and-update-skyblock-mods-and-packs.3731617/">Learn more about SkyClient here.</a>`,
    },
    {
      question: `Why isn't &lt;item&gt; textured?`,
      photo: ``,
      answer: `We are always working on FurfSky Reborn, and not all items in Skyblock are textured yet.<br>
        We release updates pretty frequently, so keep your eyes open if an item you want textured pops up in a release.`,
      relevantLinksAndAllThat: `<br><br><a href="/downloads">Go to the downloads page.</a>`,
    },
    {
      question: `What is the difference between the Full & Overlay(+) versions?`,
      photo: ``,
      answer: `Full: Skyblock textures, Vanilla Minecraft textures, Mod UIs, and NotEnoughUpdates (NEU) skulls.<br>
        Overlay+: Skyblock textures and NEU skulls.<br>
        Overlay - only Skyblock textures.`,
      relevantLinksAndAllThat: `<br><br><a href="/downloads">Go to the downloads page.</a>`,
    },
    {
      question: `Do I need to use the original FurfSky+ to use this one?`,
      photo: ``,
      answer: `No, all FurfSky+ textures are included in this pack.<br>
        We have even updated some of them to better fit in with the Furf style,<br>
        and we have also reduced the color count on many of them.`,
      relevantLinksAndAllThat: ``,
    },
    {
      question: `What Minecraft version is FurfSky Reborn for?`,
      photo: ``,
      answer: `By default, FurfSky Reborn will work for Minecraft versions <i>1.8.9 - 1.12.2</i>.<br>
        For versions past 1.8.9, you will get a warning saying that the pack is for a different version of Minecraft.<br>
        As long as you are playing between versions <i>1.8.9 - 1.12.2</i>, you can ignore this warning.<br><br>
        If you are playing on a Minecraft version higher than 1.12.2, this error does actually mean something.<br>
        Basically, 1.13 was an internal rewrite of Minecraft and OptiFine switched from using the "mcpatcher" to "optifine" folder.<br>
        The download of the pack only includes the "mcpatcher" folder, as we don't officially support versions higher than 1.12.2.<br><br>
        If you do want to use the pack on a higher version and accept the fact that there will be glitches,<br>
        duplicate the "mcpatcher" folder and rename it "optifine".<br>
        Besides the model bugs, the pack should work for the most part now, rather than not at all.`,
      relevantLinksAndAllThat: ``,
    },
    {
      question: `Why are some player skulls appearing as other player skulls?`,
      photo: ``,
      answer: `If you are using BLC, please swap to SkyClient.<br>
        Otherwise, open your mods folder and check what mods you have.<br>
        If you are using SkyblockCatia, please delete it and replace it with Skytils.<br>
        Skytils does everything that SkyblockCatia does but better, along with a lot of other features.<br>
        SkyblockCatia's player skull retexturing feature breaks our player skull retexturing with NEU.`,
      relevantLinksAndAllThat:`<br><br><a href="https://github.com/Skytils/SkytilsMod/releases">Get Skytils here.</a>`,
    },
    {
      question: `Why are certain items not appearing animated?`,
      photo: ``,
      answer: `Make sure Terrain Animations is enabled in your Video Settings.<br>
        Here is the settings path: <code>Video Settings > Animations > Terrain Animated: ON</code>`,
      relevantLinksAndAllThat:`<br><br><a href="https://optifine.net/adloadx?f=preview_OptiFine_1.8.9_HD_U_M6_pre1.jar">Make sure you have OptiFine M6.</a>`,
    },
    {
      question: `Why aren't the Mithril Vein block textures showing up?`,
      photo: `<img src="https://cdn.discordapp.com/attachments/821151183070298174/839725667645784104/Screen_Shot_2021-05-06_at_12.48.55.759_AM_Eastern_Daylight_Time.png">`,
      answer: `Make sure you're using the latest version of NEU.<br>
        Additionally, the option in the above image <i>must</i> be toggled on.`,
      relevantLinksAndAllThat:`<br><br><a href="https://discord.com/channels/516977525906341928/693586404256645231">Get NEU's latest version here.</a>`,
    },
    {
      question: `Why does my game crash when using OptiFine M5?`,
      photo: ``,
      answer: `Make sure you're using the latest versions of Patcher and OptiFine.<br>
        Additionally, if you would like to retain 1.7 animations, use Old Animations from Sk1er LLC.`,
      relevantLinksAndAllThat:`<br><br><a href="https://optifine.net/adloadx?f=preview_OptiFine_1.8.9_HD_U_M6_pre1.jar">OptiFine M6,</a> <a href="https://static.sk1er.club/repo/mods/patcher/1.5.1/1.8.9/Patcher-1.5.1%20(1.8.9).jar">Patcher 1.5.1,</a> <a href="https://sk1er.club/beta">and Sk1er LLC's Old Animations [optional].</a>`,
    },
    {
      question: `Your textures for skulls aren't showing up, what do I do?`,
      photo: ``,
      answer: `Our custom skull textures are only available through Moulberry's NEU. Please install that mod.<br>
        Also, update OptiFine to M6 just in case.`,
      relevantLinksAndAllThat:`<br><br><a href="https://discord.com/channels/516977525906341928/693586404256645231">Get NEU's latest version here.</a> <a href="https://optifine.net/adloadx?f=preview_OptiFine_1.8.9_HD_U_M6_pre1.jar">Get OptiFine M6 here.</a>`,
    },
    {
      question: `<h1 id="modui"><h1 id="mods"><h1 id="mod">FAQ - Mod UI</h1></h1></h1>`,
      photo: ``,
      answer: `<i>Note: some of these answers may apply to PacksHQ's Dark UI pack as well,<br>
        as Erymanthus also made most of the Dark UI assets.</i>`,
      relevantLinksAndAllThat:`<br><br><a href="#items">Click here to go to the Skyblock item textures section.</a>`,
    },
    {
      question: `<i>[Apec]</i> - How do I swap between the Apec bar styles?`,
      photo: `<img src="https://cdn.discordapp.com/attachments/728977460737081454/853051096926519316/Untitled_drawing375.png">`,
      answer: `Navigate to your resource packs folder (or open it via in-game) and unzip the texture pack if it's still in <code>.zip</code> form.<br>
        Then navigate to <code>/assets/apec/gui/</code> and you will see not two, but four .png files (much like the photos above).<br>
        Rename the files as per the files names in the photo <i>above</i> the gray line <u>for gold bars</u>,<br>
        otherwise, rename the files as per the file names in the photo <i>below</i> the gray line <u>for old-style bars</u>.`,
      relevantLinksAndAllThat:`<br><br><a href="https://www.curseforge.com/minecraft/mc-mods/apec/files">Get Apec here.</a>`,
    },
    {
      question: `<i>[Skytils or SkyblockCatia (SBC)]</i> - How do I revert to the old <code>rarity.png</code> shape?`,
      //question: `<i>[Skytils, SkyblockCatia (SBC), and Skyblock Extras (SBE)]</i> - How do I revert to the old <code>rarity.png</code> shape?`,
      photo: `<img src="https://cdn.discordapp.com/attachments/728977460737081454/853057908568883220/unknown.png">`,
      //photo: `<img src="https://cdn.discordapp.com/attachments/728977460737081454/853058627333914684/unknown.png">`,
      answer: `Please unzip your copy of FurfSky Reborn if you haven't done so already.<br>
        Then navigate to the respective directory for the mod whose rarity shapes you want to delete.<br>
        Delete them as necessary.`,
      relevantLinksAndAllThat:`<br><br><a href="https://github.com/Skytils/SkytilsMod/releases">Skytils</a> | <a href="https://www.curseforge.com/minecraft/mc-mods/skyblockcatia/files">SBC</a>`,
      //relevantLinksAndAllThat:`<br><br><a href="https://github.com/Skytils/SkytilsMod/releases">Skytils</a> | <a href="https://www.curseforge.com/minecraft/mc-mods/skyblockcatia/files">SBC</a> | <a href="https://sbewebsite.appspot.com/">SBE</a>`,
    },
    {
      question: `<i>[SkyblockPersonalized (SBP)]</i> - Why is my font color in <code>/sbp</code>... weird?`,
      photo: `<img src="https://cdn.discordapp.com/attachments/785025965226459176/821112316664741888/Screen_Shot_2021-03-15_at_3.png">`,
      answer: `Please use the mod's <i>Dark Theme</i> in <code>/sbp</code> as seen above.`,
      relevantLinksAndAllThat:``,
    },
    {
      question: `<i>[SBP]</i> - What happened to the background of my player/character<br>in <code>/sbp</code> and why do the corners seem scuffed?<br>(Also, why do some of my GUI elements seem off?)`,
      photo: ``,
      answer: `Please get the most recent version of the mod from SBP's Discord server.`,
      relevantLinksAndAllThat:`<br><br><a href="https://discord.com/channels/779549891890118683/779550146861203477">SBP's #releases channel</a>`,
    },
    {
      question: `<i>[NotEnoughUpdates (NEU)]</i> - Why is the text incredibly dark in NEU's custom Skyblock menus?`,
      photo: `<img src="https://cdn.discordapp.com/attachments/785025965226459176/821121294501543986/Screen_Shot_2021-03-15_at_4.png">`,
      answer: `Please type <code>/neu improved</code> in chat and change the background and button styles exactly as shown above.<br>
        If the text isn't gold after you make this change, please ping an Erymanthus for more help.`,
      relevantLinksAndAllThat:`<br><br><a href="https://discord.com/channels/516977525906341928/693586404256645231">Get NEU's latest version here.</a>`,
    },
    {
      question: `<i>[SkyblockAddons (SBA)]</i> - How do I turn on the pack's custom defense icon for SBA?`,
      photo: `<img src="https://cdn.discordapp.com/attachments/785025965226459176/821122320839606323/Screen_Shot_2021-03-03_at_1.png">`,
      answer: `Type <code>/sba</code> in chat and then type in "van" or "defen" into the search bar.<br>
        click the little ⚙️ of the first setting that shows up, which leads to the menu seen above.<br>
        Make sure the switch is <u>exactly</u> as follows.<br><br>
        <i><u>Flip that switch on first before you start overthinking these steps.<br>Please. Save both yourself and us some time.</u></i>`,
      relevantLinksAndAllThat: `<br><br><a href="https://github.com/BiscuitDevelopment/SkyblockAddons/releases/download/v1.5.5/SkyblockAddons-1.5.5-for-MC-1.8.9.jar">SBA direct download (v1.5.5, not the beta!)</a><br>For the beta, check out Biscuit's Patreon page <a href="https://patreon.com/biscuitdev">here</a>.`,
    },
    {
      question: `<i>[SkyblockHUD (SBHUD)]</i> - Why are some textures for UI elements blank and/or missing in v1.13 of SBHUD?<br>(Also, more SBHUD v1.13 questions when?)`,
      photo: ``,
      answer: `SBHUD v1.13 is still in beta. Patience is key. As of now, everything in v1.13 of SBHUD should be fine<br>
        (with a few rendering bugs in dungeons, but that's not on us).`,
      relevantLinksAndAllThat: `<br><br><a href="https://discord.com/channels/516977525906341928/794648295255310366">Obtain SBHUD by obtaining one the roles under the "Perks" webhook here.</a>`,
    },
    {
      question: `<i>[SBA (<u>beta versions 12/12b and above only</u>)]</i> - Why aren't my health/mana bars textured?`,
      photo: ``,
      answer: `Relax, they're coming out in the next pack release. SBA beta 12b's new bars<br>
        rely on a different <code>.png</code> file than previous versions of SBA,<br>
        otherwise <i>everyone</i> would be seeing distorted textures-beta or no beta.`,
      relevantLinksAndAllThat: `<br><br><a href="https://patreon.com/biscuitdev">SBA beta information</a>`,
    },
  ]
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
  <a href="/gallery/">
    <img 
    src="/assets/navbar/gallery.png" 
    onmouseover="this.src='/assets/navbar/gallery_pressed.png'"
    onmouseout="this.src='/assets/navbar/gallery.png'"
    />
  </a>
 </li>
 <li>
   <a href="/credits/">
     <img 
     src="/assets/navbar/credits.png" 
     onmouseover="this.src='/assets/navbar/credits_pressed.png'"
     onmouseout="this.src='/assets/navbar/credits.png'"
     />
  </a>
</li>
</ul>
`;
document.body.insertBefore(navbar, document.body.firstChild);
//meta tags

document.head.append();
