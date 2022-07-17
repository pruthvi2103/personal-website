---
layout: blog
title: Making my website and the pains of trying new stuff
brief: A wonderous journey led by overambition and the drive to try something new
publishedOn: 2022-04-11T10:18:51.159Z
---

### The consequences of a shock

With an extremely life changing experience of [googling myself](/blogs/why-i-made-this-website) I had decided that its due time to start developing my own website, to have my own identity and showcase my craft by actually building something that I want use.

The idea was simple, build a small home in this vast endless space of the internet to call my own, while my ideas took this home to interstellar levels of scale making it a multi-story intergalactic skyscraper that wasn’t something realistic I forced myself to at least get a small signpost saying ‘I am here’ if not nothing first and then build stuff around it. With one condition, use only 0.x things to build this project so that I learn things.

The idea was again huge, to use deno, some unheard js framework and some vague system for styling. Which resulted in many crumpled paper notes. Finally I settled to use two 0.x libraries:

[Astro](https://astro.build/) - The meta framework for making pure html and css websites and strip away all js while coding in my favourite framework(s) sounds awesome!!

[Vanilla-Extract](https://vanilla-extract.style/) - a css-in-ts library which produces 0 runtime stylesheets while giving you the sanity check of TypeScript. I was introduced to this by my manager at work and honestly it has really yielded good results for me as well as our org as we slowly try to move into it as our main management for styles. My personal blog also uses this

### Lets Set it up

Setting it up was a breeze, astro uses vite to bundle it and vanilla extract has a plugin for vite. so the setup was pretty smooth.I even made a makeshift logo for myself (basically copied and made the kugzerat earth in figma)

### The Roadblock

Made the reset, some initial styles and hit my first roadblock. The styles weren't showing up. vanilla-extract had injected the classNames but the css file which should have all the definitions was not present. ‘Whats up with this?’ i asked myself. And as every developer as me who is seasoned by the countless projects and an experience as vast as mine does to solve the problem, I googled the issue I was facing, until it hit me, extremely new projects have almost 0 presence on google let alone stack overflow.

### The awesome power of community

Searching vanilla-extract was giving me results of baking, probably the Adsense is thinking i have abandoned my passion for development and taken up cooking (which was very much something i was leaning on at the time). Well, the only place to get help here was from the community. Astro had its own discord server and vanilla-extract used GitHub discussions. I got some other people facing same issues as me in the astro discord but all of them were as clueless as I was, going through the codebases of both vanilla-extract and astro and being confused about what was actually the root of the issue, I found out the culprit- the way astro strips out js at build time.

It was looking pretty bleak for me and others until, I found out a nifty little hack. Turns out of you make a component and set it as `client-only` Astro wont strip the js out of it. Making the vanilla extract do its job. After posting it to help others I was again route to making the website

### A glimmer of Hope

With my dev environment working perfectly, I had started work and writing the components I will use, as a true developer making the default theme dark, actually inspiring it from my code-editor’s theme (Monokai Pro Spectrum) I had most of the stuff in place, and the child in me wanting to see my 3 paragraph website score a perfect 100 lighthouse score decided to build the website. I guess fate was against me as the little glimmer of hope I had was crushed when i ran the preview script. The styles didn’t inject.

### Out with the new in with the old

Despite my best efforts and spending my weekend to make it work somehow i had a decision to make, either ditch astro or ditch vanilla-extract. After giving it a hard thought and leaning towards ditching astro (after all the issue was with astro’s interaction with vanilla extract) I wanted to have extremely easy migration regardless of what I choose. I had found out stitch as a replacement for astro (which again wasn't guaranteed to work).I noticed something

```jsx
// Component.astro
---
import {data } from 'path'
---
<div>
{module}
<slot/>
</div>
```

Above is the syntax for Astro Components

```jsx
//Component.svelte
<script lang='ts' >
import {data } from 'path'
</script>
<div>
{module}
<slot/>
</div>
```

Above is syntax for a svelte component.

Hmm Interesting, this way I’ll just have to do a find and replace and everything should work for most static components. And This way i can migrate back to astro too either by converting these components back to `.astro` or writing svelte code inside astro.

While svelte is also new but its comparatively more mature and has a bigger community at the moment, with the creator of svelte-kit working with vercel I see a bright future. Plus it plays well with vanilla-extract!

And alas The tech for my initial website was finalized: Svelte kit and vanilla-extract. While I hope Astro does fix that specific issue, for now I am able to smoothly proceed

### A labour well worth it

So I realised the pains of working with extremely new libraries, and how they might not be very compatible with other extremely new libraries. However it taught me a lot of things about whats happening behind the scenes, about the awesome people that maintain the code and the community of these projects. Needless to say I am extremely happy with the whole experience and got to learn a great deal, while something like this shouldn’t have taken about 3 weekends to build, the lessons learns make it well-worth it to me.

The next time a product manager asks me to use something trending on my work projects I have a hell of a story for them and a live example too. I am quite inclined to actually release a package of my own and learn that side of development.
