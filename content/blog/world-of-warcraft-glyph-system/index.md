---
title: 'Overhauling the cosmetic appearances of abilities in World of Warcraft'
description: 'A history of cosmetic customization and the Glyphs system in World of Warcraft, and my ideas on how to improve the gameplay and user interface for glyphs'
date: 2021-02-22
images:
  - blog/world-of-warcraft-glyph-system/glyphs-concept.jpg
---

_Originally posted August 10, 2020 on [LinkedIn](https://www.linkedin.com/pulse/overhauling-cosmetic-appearances-abilities-world-warcraft-singer/)_

**TL;DR:** The user experience of customizing your character's spells and abilities in World of Warcraft is... not great, and is mostly due to being the leftovers of other abandoned game concepts. I detail a possible solution to this and highlight how it would impact the rest of the game.

As I recognize that most people reading this article might be completely unfamiliar with this topic, a brief primer (skip to "The Glyph system" if you're a _true gamer_):

## MMORPGS

Massively multiplayer online role-playing games are a rich video game genre that even in 2020, still greatly appeals to many demographics. World of Warcraft, Final Fantasy XIV Online, Elder Scrolls Online, Star Wars: The Old Republic, RuneScape, and MapleStory are past and present popular examples. MMORPGs tend to include these gameplay loops I've identified:

- **Character and narrative progression** &mdash; just like all role-playing games, in most MMORPGs you will explore a world, completing quests and increasing the power level of your character by acquiring new items and abilities. In most of these games as well, this is a distinct, finite aspect of the experience as you will eventually reach the maximum level, where new activities open up at "endgame".

- **Cooperative play** &mdash; while you can quest together with friends or strangers, the endgame experience often focuses on self-contained "dungeons" where anywhere from 3 to 40 players or more have to work together to overcome challenges, usually difficult, scripted boss encounters. The culture that emerged over the 20+ years of this "raiding" experience, including guild management, competition, and so on, is really interesting and could fill several volumes. I'm not here to talk about it.

{{< img name="raid-screenshot.jpg" alt="Screenshot of a World of Warcraft raid boss fight, which a variety of different user interface elements visible" caption="(Discussing raiding user interfaces could also fill several volumes.)" >}}

- **Competitive play** &mdash; while there is competition between raiding guilds, I am specifically referring to player-versus-player gameplay where groups prioritize optimal character builds and team compositions. This gameplay loop is comparable to [MOBA games](https://en.wikipedia.org/wiki/Multiplayer_online_battle_arena) which have generally superseded MMO PvP, especially in esports.

- **Economy** &mdash; many players are content to find a niche in crafting items for their friends, guild, or server, and many of them make a lot of in-game currency doing it. This gameplay loop is more effective in some games than others.

- **Collections** &mdash; other players enjoy seeing a giant to-do list and checking the items off. I am one of these players. It could be achievements, locations to visit, pets, mounts, and more. It can also be cosmetic appearances, which leads us to...

- **Fashion** &mdash; some people argue this is the true endgame, as defining your character as entirely your own is the ultimate self-expression in the online space. (Insert cyberpunk music here.) Your character's physical appearance, spells and abilities, and gear and items they wear could all be potentially customized. Many of these are potential rewards from the above gameplay loops, or in a lot of cases can be simply purchased with cold hard cash. It is this area that is most ripe for improvement in World of Warcraft, and what I want to actually talk about.

## Character customization in World of Warcraft

Good news! They're working on it!

Okay, let me clarify. They have been. Once up a time, you would get a new piece of gear for your character, and it would be an upgrade. Eventually, you end up [looking like a clown](https://wow.gamepedia.com/Clownsuit).

{{< img name="clownsuit.jpg" alt="Screenshot of a World of Warcraft character wearing mismatching pieces of gear in such a way they look comical" caption="Example of a clownsuit" >}}

At some point nearly 10 years ago, games including World of Warcraft started implementing the ability to replace the appearance of an item with that of another in your collection. This allowed players to control the look of the weapons and armor they equipped, allowing them to have a more cohesive appearance (or still look ridiculous if they wanted). For WoW specifically, the _[transmogrification](https://wow.gamepedia.com/Transmogrification)_ system that facilitated this continued to evolve.

In the beginning, you had to go to an NPC and pay gold to replace these appearances, and the source item had to be physically kept in your inventory if you wanted to use it again to transmogrify later. Originally, Blizzard also included a "Void Storage" solution specifically for storing these items. Later on, the developers figured out how to save the appearance of the item in the character's collection once the item was obtained or equipped, so holding on to the item even for the first transmogrification was no longer necessary. (The Void Storage also became obsolete as well, yet remains in the game as a fancy bank, I guess.) Other improvements included being able to hide every gear slot except pants and weapons/shields, allowing people to transmog into Conan the Barbarian, if they so wished. The special effects on weapons ("enchants") could also be changed, referred to as "illusions".

Finally, the transmogrification collection itself had a nice little UI added, called the Appearances tab, that let people browse the "catalog" and find appearances they owned or had yet to collect. All of these appearances were shared account-wide, as well, and generally restricted by what character class the player had.

{{< img name="transmogrify.jpg" alt="Screenshot of the Transmogify user interface in World of Warcraft" caption="The Transmogrify user interface" >}}

Overall, it took about a decade, but the process of customizing your gear in WoW has evolved considerably. Even with the latest expansion in development, Shadowlands, improvements are still being made to fix weird limitations and other issues with the system. So if you like armoring your character up completely, you're all set!

In Shadowlands, they're working even further on the character customization, improving how players can change their physical appearance as well, with tons of new options for hairstyles, skin colors, jewelry, face paints, tattoos, and more. These changes have also required improvements to the user interface for editing these appearances as well. More information on these changes can be found starting in this [Wowhead article](https://www.wowhead.com/guides/shadowlands-character-customization-options).

Interestingly enough, one of these changes added to the new character creation screen will allow characters of the druid class to customize the appearance of the other forms they shapeshift into. Shapeshifting into animals and other creatures has been one of the signature abilities of the druid class, and over time this has been enhanced with character customization options. This is extremely curious as until now, the ability to change these appearances has been very difficult for players. Why is that? Well...

## The Glyph system

Besides cosmetic customization, players have long had the ability to customize the power of their character to adapt to different needs. The earliest implementation of this in WoW is the [talent system](<https://wow.gamepedia.com/Talents_(history)>), which like many RPG skill trees allowed players to select the specific traits to improve certain abilities. These talents were extremely granular.

{{< img name="classic-talents.jpg" alt="Screenshot of the talents user interface from early World of Warcraft" caption="World of Warcraft talents prior to their overhaul" >}}

Over time, Blizzard dramatically simplified talents to basically a selection of different additional abilities to choose from. Meanwhile, they continued to experiment with customizing traits, starting in the second expansion, Wrath of the Lich King, with the [Glyph system](https://wow.gamepedia.com/Glyph).

The expansion introduced a new profession (a crafting job for characters, independent of their class) called Inscription that allowed you to create various items involving inks, runes, and calligraphy. One such type of item were _glyphs_, a one-time-use item you would apply to your character to gain a new benefit to one of your abilities or spells. You had a limited number of slots available for glyphs, which like talents meant you had to decide what to apply. Glyphs also had different ranks, with the lowest rank, Minor glyphs, only applying cosmetic effects to the ability or spell.

{{< img name="legacy-glyphs.jpg" alt="Screenshot of an old version of the Glyphs user interface in World of Warcraft" caption="Old glyphs user interface" >}}

These cosmetic changes were usually minor visual changes to the spell. For example, the warrior class has the ability to charge into a foe, and a glyph can be added that a trail of fire remains behind. For druids, glyphs were how they were able to change their animal forms, such as when they take flight or travel underwater.

Over time, the glyph system became less and less of a focus in the game, as Blizzard wanted to move these power-customization traits away from a crafting profession and into expansion-based systems. In the Legion expansion, traits that customized player power came from the character's Artifact weapon, and upgrading and enhancing those traits came from various sources in the game. The Glyph system was entirely gutted; the interface above was actually removed, and the remaining cosmetic glyphs now had to be applied directly to the spell in the Spellbook interface. Here's an example of a Spellbook for the warlock class, with the Banish and Create Soulwell spells affected by glyphs (the pink corner icon).

{{< img name="spellbook.jpg" alt="Screenshot of the Spellbook user interface in World of Warcraft with glyphs applied to specific spells" caption="Current Spellbook user interface with glyphs applied" >}}

Inscription still had plenty of cosmetic glyphs to craft, but the profession received very few new ones to make in Legion, and even fewer in the latest released expansion, Battle for Azeroth. Instead, scribes were given other new types of items to craft.

Today, at the end of the Battle of Azeroth cycle, on the eve of the Shadowlands expansion launch, customizing the look of your abilities and spells is not in a good place.

- With the Glyph interface removed, many players believe glyphs were removed entirely from the game, and there is no user interface or tutorial that explains how to add glyphs to the Spellbook to apply them.

- There is no way to see a reliably complete list of glyphs available without consulting information outside of game, unless you are a scribe and view your learned and unlearned glyph crafts.

- Glyphs apply per specialization, that is, if your warrior is in the Arms specialization and has applied the Glyph of Fiery Charge, they will need to buy that Glyph again and reapply it to Charge when they have switched to Fury specialization.

- If you apply a glyph and then want to remove it, you will need to buy a different reagent, Vanishing Powder, and apply it to the spell. If you want to use that Glyph again in the future, you will have to rebuy it and re-apply it.

- Glyph prices vary on different servers based on economic effects; in addition, newer glyphs can be 100 times or more expensive than glyphs that have been in the game for a decade.

## A possible solution

This is where the fun starts.

I had been thinking a lot on the relative success of the transmogrification system and how it evolved over time into a catalog of item appearances. There are other collections in the game that have evolved over time: mounts, non-combat pets, heirlooms (gear that helps you level new characters easier), and toys. These collections, with the exception of heirlooms, are all largely cosmetic and generally don't impact character power. Why can't glyphs be a collection as well?

{{< img name="path-of-exile-shop.png" alt="Screenshot of the web version of the Path of Exile shop, with skill effects available for sale" caption="Skill effects for sale in the Path of Exile shop" >}}

I also looked to another game for inspiration on the matter: Path of Exile. Path of Exile is a free to play action RPG that places a large emphasis on creating a new character every few months as part of a new "league" to interact with a new gameplay element. As there is a consistent influx of players coming into the game this often, the Path of Exile developers rely heavily on their cosmetic cash shop to make revenue, giving players new item appearances, character special effects, and even a huge catalog of customized appearances for most spells in the game. These effects are well-cataloged and easy to apply and replace over and over once purchased.

World of Warcraft also has a cash shop, but as a subscription-required game (\$15 USD every month), it has not been a large focus. The shop is the place for various character services, such as renaming or transferring characters, and does have a selection of mounts, pets, and a few toys available for purchase. It used to also have some unique helmet appearances for transmogrification, but those were recently retired.

{{< img name="blizzard-shop.png" alt="Screenshot of the World of Warcraft cosmetics shop, with mounts available for sale" caption="Mounts for sale in the World of Warcraft shop" >}}

You will also recall I mentioned earlier that in Shadowlands, physical character customization is being overhauled. The special form appearances druids have been earning, both from glyphs and well as other rewards, will be available when creating a new druid, or from the in-game barber shop for existing characters.

So let's mix this all together.

### New Collections tab

First, we're going to need to add a new tab to Collections for glyphs, since that's where players are going for cosmetics. Glyphs would be "learned" instead of applied and thus would no longer be one-time use. They would apply account-wide, and thus your multiple mages could all have access to the same glyphs, for example. But the user experience of this new tab is easier said than done.

When a player browses glyphs, do they need to see glyphs for all character classes or for just their current class? The Heirlooms tab allows the former, since any character can upgrade the max level of any heirloom at any time. The Appearances tab, on the other hand, only shows the weapons and armor available to the current class. Would you be able to filter by specialization, so that the Arms or Fury warrior doesn't have to see shield ability glyphs?

How would a player browse glyphs? Taking a page from the Spellbook, and from Path of Exile, I would say by spell/ability. For example, if I want to customize Charge, I will look for Charge (browsing to C or typing it in search) and expect a popout menu or dropdown to see my options, as well as the "default" appearance. I would expect to see both collected and uncollected glyphs and where I can obtain the latter.

With this system we can also now allow a glyph's effect to apply to multiple spells and abilities, and mix and match, much like Path of Exile. For example, for warriors, there are multiple "shout" abilities, and multiple glyphs that can apply different effects when you shout, like terrifying nearby critters or briefly levitating you in the air. We could apply one of these effects to all of the shout abilities or use multiple ones.

How would a player enable and disable glyphs? Probably by selecting one of those glyphs in that popout menu. But this is where it gets tricky. We are going to assume that players can only have one cosmetic appearance on at a time per ability. Your Dragon Roar ability can only terrify critters or levitate you in the air, it cannot do both simultaneously. But there a couple of glyph "types" I've identified that will play by different rules, and for that, we need to talk about racial and class flavor...

### Customizing class and racial identity

There are a lot of [playable races](https://wow.gamepedia.com/Core_race) in World of Warcraft, and according to the lore, they often approach combat and magic differently, especially when it comes to spirituality and religious themes. One of the best examples of this is the priest class. At their core, priests are about using faith in their damage, healing, and utility spells. For gameplay reasons, their specializations are based on holiness and the "Light" (Holy), shadows and darkness (Shadow), and a mix of the two (Discipline). But in the game lore, it doesn't quite work this way. Humans, dwarves, gnomes, and draenei draw their faith from the actual Light, whereas night elves believe specifically in an arcane moon goddess named Elune. Tauren priests believe in the power of the sun. Visually, this can be represented by golden light, silvery moonlight, and sunfire. On the other hand, while priests of all races are prone to worship of the Void, some of the shadow magic of the trolls could be considered significantly less malevolent, and based more on the wild animal gods they worship than Lovecraftian horrors.

{{< img name="tyrande.jpg" alt="Artwork of a night elf priestess from World of Warcraft, surrounded in arcane energy" caption="Tyrande Whisperwind, the High Priestess of the night elves, using lunar-based spells" >}}

However, in-game, everyone uses the same golden light and purple shadow spells. It's sacrilege!

There is precedent for resolving this, however. A lengthy quest chain introduced in the Mists of Pandaria expansion for the warlock class rewarded those characters with the ability to recolor the orange and red fire effects in their spells with green fire. The effect applies across the board; even the warlock mounts are recolored green and their spell icons are updated. The process for toggling this on and off is cumbersome, however. You have to hunt down an NPC and pay them gold to remove the effect, and then talk to another NPC to reapply it. But what if there was a better way?

My proposal is a new glyph type which I call "epigraphs". Epigraphs would be a special reward from certain questlines (night elf and tauren priests could obtain epigraphs for their Elune and An'she worship, respectively) and would appear in a special section of the Glyphs Collections tab. Your character can only enable one Epigraph at a time (although I'd expect each character would probably only ever have one available to them) and it would update all of their spells and abilities. The individual glyphs would still be applicable, except for some potential issues where the visual effect would clash with the epigraph, and then I'd expect the glyph would be disabled.

### Appearance glyphs

The other new glyph type would be appearance glyphs. These glyphs would, much like epigraphs, not be so much applicable to any specific combat ability as it would be changing the character's model or appearance. The druid forms are an excellent example of this. You could collect all of the available glyphs to change your druid's aquatic form (dolphin, orca, etc), see those glyphs listed in the Glyphs tab, and then go to the barber shop to select them. But it doesn't just apply to druids! There are other classes with customizable appearances (that aren't tied to a specific ability) that could benefit immediately. Shaman characters could have customizable totem sets instead of their race-based default, and potentially their ghost form (which defaults to a wolf) could be set at the barber shop as well. Paladins have had a tricky time with their racial mounts: each race has a default mount they utilize for spells like Divine Steed, but the [existing methods](https://wow.gamepedia.com/Golden_Charger%27s_Bridle) for customizing that mount to be something else has been pretty clunky to obtain and use. Ultimately, this glyph type will be the least common and I'd expect most classes will have zero use for it.

### Obtaining glyphs

The massive emphasis on collecting glyphs brought about by these changes opens up the opportunities for introducing a lot more of them into the game. But how would they be obtained by players? Considering the gradual shift in focus for the inscription profession, does it make sense to give some of these new glyphs to scribes? Does it make sense to take their remaining glyphs away?

I would argue no. Many crafting professions already have, in the past, had opportunities to create cosmetics for players, including mounts, pets, weapon illusions, and of course, item appearances for transmogrification. So there's no need to take their existing glyph crafts away. The only impact this would have on the economy is that players would only ever need to buy one of each glyph, and although I am not a WoW economist, considering those other crafted cosmetics work the same way, I don't foresee an issue.

As for other sources, we can again look to the other cosmetics for precedent. Over the past several years, pets and weapon illusions have been added to the list of possible dropped rewards when players kill bosses in both current and older raid and dungeon content. Glyphs could be added to these "loot tables" as well, encouraging players to continue to return to that content for a chance to collect those rewards.

As previously mentioned, special questlines could be added for obtaining epigraphs, that help illustrate the story significance of the epigraphs and what they mean for the player's character. Because glyphs are inherently unique to the player's class, they would be hard to sprinkle into quest rewards in leveling content as we're seen happen with some pets and toys.

Certain achievements in game have cosmetic rewards, and this can be applied to glyphs, as well. Again, this has to be done carefully as unlike other rewards, glyphs don't apply universally to all classes.

Finally, we could see some glyphs added to the cash shop. It's my opinion that paid/premium glyphs should be a little more odd and unique, following the same model as the cash shop mounts. (The cash shop mounts always seem to act like a preview of future creature models, which is an interesting idea to think about as well.)

### New glyphs and gameplay

A couple minor notes on glyphs. Historically, Blizzard has been particularly careful about keeping abilities "recognizable". It is important that players be able to see their allies' and opponents' spells and abilities and react accordingly. We shouldn't have glyphs change the appearance so much that the player doesn't recognize them.

Additionally, the overhauls to the glyph systems means that we can invest in improving their effects significantly, but we'll want to make sure that client performance isn't impacted.

## The output

So that was my line of thinking around the changes to the glyph system. I had been workshopping the idea in my head for months before I decided to publish something about it. I had prior experience with [posting work to the WoW subreddit](/blog/armory-redesign/), and decided this would be a great way to spread the word and get feedback.

First, I [wrote up a quick thread](https://www.reddit.com/r/wow/comments/gual8d/a_possible_solution_for_ability_cosmetics_using_a/) discussing the current issues with the system. I didn't expect this thread to do well as it was a discussion post and I wasn't bringing my own imagery to the table. The lack of success of the post motivated me to work on something more substantial. After brainstorming, I decided the most impactful visual would be my proposed new Collections tab, as polished as I could possibly make it, potentially to make some readers think it was real.

{{< img name="glyphs-concept.jpg" alt="Mockup screenshot of a possible Glyphs user interface in World of Warcraft" caption="My concept for the Glyphs tab" >}}

There was a lot to consider in creating this image.

- First off, what would it actually show? I settled on a warrior character's point of view, as I was pretty familiar with their current and discontinued glyphs, and had been recently playing a warrior myself. I picked the Protection specialization so I could illustrate the same Blazing Trail glyph applying to both Dragon Charge and Intercept. (Currently in-game, these are two different glyphs, for each ability.) I also made sure that the multiple shout abilities shown had different glyphs applied, and that activated normal and PvP talents were accounted for. Several abilities don't even have a glyph applied.

- I also had to determine which glyph types to show. There'd be too many ability glyphs on the first page to show any possible appearance glyphs, but I'd still have to show the epigraph available. (In my example, I couldn't think of anything better for warriors than "Vrykul Might", which could be some Norse-influenced effects, but I'm not an artist and really have no idea what would be good here.)

- I had to figure out how to stitch the image together, but without access to any design guidelines to help me, I had to conjecture how Blizzard's designers would approach this tab. I studied the various other tabs in the Collections interface, as well as other parts of the WoW UI, using Adobe Photoshop to piece together various elements. I even paid close attention to the various color/opacity/shadow styles applied to text.

In addition to the mockup, I also went on a fun diversion recreating the design language of World of Warcraft's news posts with a [fake article](https://i.imgur.com/a2pJEyz.png).

I mostly did this because I had previously done work with their website design language and I wanted to build something in Figma instead of just Photoshop. This was a fun challenge. Unfortunately due to the aspect ratio and size it would not be a good option for posting directly to Reddit, so I just went with the mockup on its own.

Posting on Reddit was another problem to solve as well. For one, whenever I posted, I would be competing with a variety of other posts, including artwork, Shadowlands news, and discussion posts. I utilized [this website](https://dashboard.laterforreddit.com/analysis/) for determining the optimal time to make the new thread.

I also had a stretch goal in mind. I had noticed that the Wowhead website, which is probably the most popular source of WoW news and information, tended to repost top content from the subreddit, especially original artwork and designs. It was very easy for me to imagine the type of post they would write featuring my mockup, with links to all their glyph- and customization-related tools and articles. Such an article would give me and my mockup even greater and more permanent visibility, but it would be a long shot as I'd have to hit the top of the subreddit for a while and then compete against their other potential article ideas.

[I did not reach the top of the subreddit.](https://www.reddit.com/r/wow/comments/havg21/a_better_approach_for_collecting_and_managing/) I did peak at the #2 spot, and still generated a lot of great discussion. The mockup and ideas I presented were well received, and as expected, a lot of redditors didn't even realize glyphs were still in the game. There was also some pushback on my cash shop ideas as well. Altogether the whole thing was a fun exercise, and I'm glad to get some design ideas I had out of my brain and into the world for others to see.
