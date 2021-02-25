---
title: 'Among Us Companion App'
description: 'UX designer, React UI development, and product direction on a popular (and controversial) companion app for the popular online game.'
project_url: https://kedyn.github.io/fusliez-notes/
project_year: 2020
weight: 1
---

In late summer of 2020, the gaming trends on Twitch were changing.

Due to quarantines from the COVID-19 pandemic, streamers had become increasing isolated and sought any opportunity to socialize in-game. Options were somewhat limited, as it didn't feel like there was many new games in light of studios' postponements. Streamer groups relied on casual, calming games like Minecraft or Animal Crossing: New Horizons to collaborate together, or organized squads to play Valorant, a new shooter by Riot Games.

Then, in August, two events happened that took advantage of these shifting trends.

First, Fall Guys, which could be best described as a Mario Party-like minigame collection turned battle royale, was released. The game featured a squad of up to 4 players trying to get through obstacle courses and sports until one player was left, the crown winner. The game was a [huge hit on Twitch and other streaming services](https://www.theverge.com/2020/9/23/21452358/fall-guys-among-us-twitch-facebook-gaming); streamers enjoyed a new way to play games which their friends, and the in-game cosmetic shop and [interesting lore](https://twitter.com/FallGuysGame/status/1308853560411656197) made the game very meme-able on Twitter and Reddit.

Meanwhile, a popular streamer, Sodapoppin, who was already bored with games to stream, found a little-known [social deduction](https://en.wikipedia.org/wiki/Social_deduction_game) game and decided to play it with his group of streamer friends. The game, Among Us, was an immediate content hit on the Twitch site, and immediately other streamers began to pick up the game. For much of September, Twitch was full of Fall Guys and Among Us streams. Eventually, the novelty of Fall Guys fell off, but Among Us continued to grow.

- Much like Fall Guys, the playable characters in Among Us (and their various pets and outfits available for purchase) were endearing and inspired their own fanart and animations.

- The unexpected resurgence of the game's popularity itself was the subject of much discussion, with the game's servers frequently suffering from the weight of the playerbase, updates to the game options to improve the "meta" of playing it (or the content from streaming it), and ultimately Innersloth, the developers, decided to cancel their planned sequel to focus on the original game.

- As collaborations evolved between streamers, groups were set up days in advance and announced, bringing the game to more [content creators and audiences](https://twitter.com/DisguisedToast/status/1314727278266339328). This has led to [significant growth](https://twitter.com/Valkyrae/status/1317120355090059264) for many of them.

Among Us itself became a [hugely popular game](https://www.nytimes.com/2020/10/14/style/among-us.html) to play in general. Available on both PC and on mobile, the game has done well especially with teens that are in need of new ways to socialize with their friends.

## Taking Notes

Among Us can be a complicated game to play. The rules are simple: a group of up to 10 people are working to perform tasks in a ship, space station, or colony. Secretly, 1-3 players are impostors: they work to undermine the other crew mates, sabotaging systems and killing the others in isolation. When a body is discovered, the group convenes at the meeting table to determine who might be the impostor and kick them out the airlock.

That means the game is deeply rooted in lies and deception, but also observation and critical thinking. An innocent player, while performing tasks, has to keep tabs on other players around them, watching who groups up with who, who clears themselves as innocent, and who might be faking tasks. For some people, it can be a lot to track of.

It's not uncommon for any strategy game to take notes to help organize your thoughts. For the streamer Fuslie, that's exactly what she did as she began playing and streaming the game on her Twitch channel.

{{< youtube id="DI_ukItr1_4" title="ALWAYS KILL TOAST FIRST!! ft. LilyPichu, Valkyrae, Sykkuno and friends" >}}

After that stream, a viewer in her community built a tool to help her track players without using a text editor.

{{< img name="notes-version-1.png" alt="Screenshot of an early version of the Among Us notes app" caption="The first version of the app shown on stream" >}}

The developer (sykO) published a [GitHub repo](https://github.com/Kedyn/fusliez-notes) for the app, and a few other viewers including myself became interested in improving the tool. I added new issues with some UX suggestions prioritizing the app's appearance on stream, including improving the text legibility and player tiles gaining a noticeable background color when active.

The app continued to evolve as the developers added new functionality and updated the design, while [I started thinking](https://github.com/Kedyn/fusliez-notes/issues/36) about the future of the app and who would use it.

{{< img name="github-issue.png" alt="Screenshot of a Github issue related to the project" caption="An issue I opened to consider the users of the app" >}}

In mid-September, I had not yet understood the popularity the game would have, especially among people playing the game directly on their phones.

{{< img name="app-evolution.png" alt="A collage of multiple screenshots of the app as it evolved over time" caption="The evolution of the app as it appeared on Fuslie's stream" >}}

I also briefly experimented on some ideas in Figma. I had decided once the other devs had reached a stable release, I was going to fork the repo and work on my own version to see what improvements I could make.

{{< img name="figma-screenshot.png" alt="Screenshot of a mockup of the app in Figma" caption="My Figma mockup to explore some UI ideas" >}}

The functionality of the app was often debated. The feedback we gathered from users encouraged us early on to add map references as a new panel to the app. Thus, the "complete functionality" of the app was, from left to right:

- keeping tabs on each player's level of suspicion, or state

- tracking win/loss record, and a general-purpose notes app

- maps reference

{{< img name="version-prior-redesign.png" alt="Screenshot of the app prior to being redesigned" caption="The app version just prior to my redesign" >}}

We continued to receive feedback on the app, asking for a lot of additional functionality, some of which wasn't feasible. We also thought about what features would possibly give too much of an advantage to the user. One example was allowing users to track player positions on the map. As of this writing, we currently have that functionality, but that could change in the future. When Fuslie posted the app to Twitter, there were a lot of negative replies calling the entire app a cheat, which added to the existing discourse between streamers about much Among Us is taken seriously as a competitive or casual game.

We also wanted to create a mobile layout so the app was effortless to use as a web app on someone's phone. That was an interesting challenge to overcome in the React codebase, and I relied on my past history with React to give the other devs advice on how to solve it.

## Version 0.10.0 - The Redesign

As mentioned, I forked the repo and got to work on updating the repo. I didn't have a polished design from Figma to use, so I used the opportunity to experiment. (I briefly made the whole app neumorphic. It was terrible. Don't use neumorphism.) While coding, I substantially overhauled the project's structure and React components to be easier to maintain and scale.

{{< img name="vscode-screenshot.png" alt="Screenshot of project in Visual Studio Code" caption="This project was my first experience with JSS (CSS in JS), and as someone used to Sass, it was... an interesting experience." >}}

You can view the [resulting pull request](https://github.com/Kedyn/fusliez-notes/pull/56) and all the changes therein. Afterwards, we continued to tweak the project with translation fixes and other changes.

{{< img name="version-after-redesign.png" alt="Screenshot of the redesigned app in desktop" caption="Version 0.10.1 (the release with my redesign)" >}}

{{< img name="version-after-redesign-mobile.png" alt="Screenshot of the redesigned app in mobile" caption="Version 0.10.1's mobile layout. I spent considerable time making sure there was a good mobile experience" >}}

{{< img name="redesign-on-stream.png" alt="Screenshot of the redesigned app in fuslie's Twitch stream" caption="Version 0.10 shown on stream" >}}

Development on fusliez notes still continues. As Among Us continues to grow, the market opportunity for a tool like this one continues as well. We'll see what the future will bring.

{{< youtube id="m2VGLv75FOk" title="THE AMONG US NOTEPAD!! ft. DisguisedToast, Sykkuno and friends" >}}
