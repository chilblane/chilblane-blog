---
title: 'About this website'
description: 'An overview of how this website and portfolio was designed and built, including my thinking process'
project_year: 2026
side_project: true
knowledge:
  [
    'content strategy',
    'information architecture',
    'design tokens',
    'accessibility',
    'product management',
  ]
skills: ['css', 'sass']
featured_image: featured-image.png
featured: true
---

## Overview

First things first: this is a website powered by Hugo, a technology that I have yet to use for any employer. I did not build this site with React, a JavaScript framework I know well, although prior versions did use it. This site was intended to be used as a blog, hence the repository name, and I felt React, even with a static site generator, would be overkill. (Although I decided later on that if I did blog regularly, it would be under a different name, and therefore not here.)

With this in mind, I decided to focus on Hugo, a lightweight, easy to use system for building content sites. I also kept JavaScript to a minimum: analytics, plus one small script for the image viewer and the gallery layouts on case studies like this one. Without JavaScript, images still open on their own and galleries still lay out in rows. Hugo is easy to maintain and also easy to deploy to Netlify.

The website has a content management system for the portfolio articles like the one you're reading now, powered by Markdown. There are also two "static" pages, the home page and the resume page, the latter of which is fed by JSON data. The PDF version of the resume is generated from that same page, so there is only one resume to keep up to date.

## Sass

When I approached the most recent version of this site, I wanted to return to a Sass-based styling approach for several reasons. I had been using [Tailwind CSS](https://tailwindcss.com/), which while a delightful framework focused on utility classes, completely bypassed my Sass expertise. Tailwind is also not something I've had to work with yet for an employer, and as a third-party framework, is largely opaque and denies me the opportunity to use my own design token system effectively.

While I recognize that it might be possible to create a similar CSS architecture without the use of a preprocessor like Sass, I decided it would be best to continue to use Sass, as it is still an effective solution for styling, even in CSS-in-JS approaches. I've used it for most of my career.

I removed Tailwind and restored the original Sass structure I had in a previous version of this website. I decided to modernize and restructure the Sass folders, using modern implementations such as `@use` and `@forward`, as well as my version of the [7-1 architecture pattern](https://github.com/KittyGiraudel/sass-boilerplate):

- `settings/` - All raw Sass tokens, for sizing, colors, and typography, are stored in this folder.
- `mixins/` - Mixins and functions like breakpoints, fluid image styles, and more are contained here.
- `typey/` - I use a modified version of the excellent [Typey typography system](https://github.com/jptaranto/typey) for Sass. This provides the rest of the mixins and functions I need for type and spacing.
- `base/` - This is the first folder of actual styles that will be compiled to CSS. It also contains a modified version of [normalize-scss](https://github.com/JohnAlbin/normalize-scss) for the reset styles.
- `layout/` - Contains the styling classes that help build the overall layout of each page, including navigation and footer, which should generally only be used once per page. The namespace for these classes is `l`.
- `components/` - Contains actual component styling such as for buttons and cards. The namespace for these classes is `c`.
- `pages/` - Styles for specific pages, such as the one you're reading now, the home page, and the list of articles. The namespace for these classes is `p`.
- `utils/` - Utility classes to apply directly to HTML elements without having to design out new component or page styles. These are mostly generated through Sass functions. The namespace for these classes is `u`.

Hugo processes the Sass from a singular root file, styles.scss, for both development and production.

<!-- prettier-ignore-start -->
```html
{{ with resources.Get "sass/styles.scss" }}
  {{ $opts := dict
    "enableSourceMap" hugo.IsDevelopment
    "transpiler" "dartsass"
    "outputStyle" (cond hugo.IsDevelopment "expanded" "compressed")
    "targetPath" "css/main.css"
  }}
  {{ with . | toCSS $opts }}
    {{ if hugo.IsDevelopment }}
      <link rel="stylesheet" href="{{ .RelPermalink }}" />
    {{ else }}
      {{ with . | fingerprint }}
        <link
          rel="stylesheet"
          href="{{ .RelPermalink }}"
          integrity="{{ .Data.Integrity }}"
          crossorigin="anonymous"
        />
      {{ end }}
    {{ end }}
  {{ end }}
{{ end }}
```
<!-- prettier-ignore-end -->

There is room for improvement here, including removing unused classes after processing, but for a lightweight project, it is effective.

## Design tokens

A key reason for returning to Sass was that I wanted to apply everything I knew about design tokens to a relatively small project. Most of the design tokens are color tokens as a result. I started with a list of Sass variables for each crayon token (commonly referred to as primitives in other organizations). These tokens were generated by a Figma plugin, in three 11-step ramps: gray, blue, and orange.

```scss
$crayon-gray-010: #d8dce1;
$crayon-gray-020: #bec5cd;
// ...
$crayon-gray-110: #0c1015;

$crayon-blue-040: #55a2ff;
$crayon-orange-050: #ffad2a;
```

I then built out the semantic aliases that use some of these crayons. These semantic tokens are what the project uses, never the crayons themselves. Each one is named for its job, so the name already tells you which rule it follows (more on those rules below).

```scss
$color-surface: color.adjust($crayon-gray-110, $alpha: -0.5);

$color-text: $crayon-gray-020;
$color-text-heading: $crayon-gray-010;
$color-text-interactive-primary: $crayon-orange-050;
$color-focus: $crayon-orange-050;

// System chrome (blue, decorative, never carries meaning)
$color-chrome-glyph: $crayon-blue-040;
```

In the `_base.scss` file, a mixin converts these tokens into prefixed CSS custom properties on `:root`, which compile to:

```css
:root {
  --r12-color-surface: rgba(12, 16, 21, 0.5);
  --r12-color-text: #bec5cd;
  --r12-color-text-heading: #d8dce1;
  --r12-color-text-interactive-primary: #ffad2a;
  --r12-color-focus: #ffad2a;
  --r12-color-chrome-glyph: #55a2ff;
}
```

You might ask why CSS custom properties are necessary, if I can just reference the Sass variables directly in styles instead of referencing the custom property (e.g., `color: var(--r12-color-text);`). The reason is that the values can be swapped without recompiling anything. The print stylesheet already does this: it redefines the same properties as black on white, and most components follow along without any print styles of their own. The same approach would work for a light theme. I have not built one, as the dark look of the website is my intended art direction and "theme switching" is its own project, potentially adding more JavaScript to the site if I want to allow users to manually change the theme.

The rest of the design tokens are largely organized for Typey and for the most part, are not converted to CSS custom properties. Typey also allows completely responsive text and sizing; if you want, you can zoom with your browser and the site scales perfectly.

## Design

As someone who grew up on the internet in the early 2000s, I was heavily inspired by the sort of Y2K Futurism that existed in web design, especially [darker sites focused on gaming](https://web.archive.org/web/20040630062613/https://sclegacy.com/) and sites like 2Advanced, Cubadust, and depthCORE. The 2026 version of this site is my most direct attempt at that look so far. My goal was to match the golden age style as closely as I could, while behaving like a site built today: usable on any device, with a keyboard, or with a screen reader. The short version I kept coming back to was "2003 look, 2026 behavior."

{{< img name="sclegacy-screenshot.png" alt="Screenshot of a StarCraft fansite from 2004" caption="An example of the aesthetic, this capture of sclegacy.com from 2004 features the image-heavy web design used in the period" >}}

A lot of [websites with this aesthetic](https://www.webdesignmuseum.org/golden-age-of-web-design) relied on images and image maps for nearly everything, including the text, as CSS and browser support was not as fully developed then as it is now. Here, every panel, title bar, and heading is live text and CSS. You can select it, search it, translate it, and zoom it. The lowercase headings, the framed panels, and the little `<section />` code labels are deliberate period details, not mistakes.

### Typography

The display face is [Michroma](https://fonts.google.com/specimen/Michroma), a wide techno face used for the wordmark, page titles, and the title bars on each panel. Michroma only comes in one weight, so on its own every heading looked the same. Subheadings, navigation, and buttons use [Atkinson Hyperlegible Next](https://fonts.google.com/specimen/Atkinson+Hyperlegible+Next) in bold to bring the hierarchy back, and the same family sets the reading text at 16 to 18 pixels. Tags, years, code labels, and the footer use Atkinson Hyperlegible Mono, replacing the pixel font the previous version used.

### Color

The colors follow a few written rules:

1. **Amber is only for things you can click.** Links, buttons, and focus rings. If it's amber, it does something.
2. **Blue is system chrome.** The `»` glyphs in title bars, dot fills, code labels, and the background art. It's decoration and never carries meaning.
3. **Gray-blue lightness is hierarchy.** Headings are the lightest gray, body text a step darker, metadata a step darker again.
4. **Neutrals cover about 90% of any view,** so the blue and amber stay rare enough to register.

### Background

Backgrounds from the era were layered composites, not a single effect, so this one is too. It's a wireframe terrain seen from low orbit over a curved horizon, with a starfield, a fractal flame in the sky (the kind Apophysis users made in the 2000s), and interface accents like corner brackets and system strings. It's rendered once to a WebP image, and phones get a narrower crop of the middle so they don't download pixels they would never show.

The content sits on glass panels: a 50% dark tint with a blur over the background. That tint isn't arbitrary. The background is fixed, so different parts of it slide behind the text as you scroll, and I checked contrast against the brightest part that can ever sit behind a panel. The lowest text contrast anywhere on the site is about 6.4:1, comfortably over the 4.5:1 that WCAG asks for.

## Accessibility

I checked the site against WCAG 2.2 AA, with automated testing (axe) plus manual checks: keyboard navigation, focus visibility, reflow down to a 320 pixel wide screen, text spacing, reduced motion, and Windows high contrast mode. A few of the period details needed specific fixes. The code labels are decorative, so they use CSS alternative text to stay silent in screen readers:

<!-- prettier-ignore-start -->
```scss
@mixin code-label($text) {
  content: $text;
  content: list.slash($text, "");
}
```
<!-- prettier-ignore-end -->

The second declaration gives the generated text an empty accessible name. Browsers that don't support that syntax ignore it and keep the first one. Nothing on the site is hover-only, animations turn off when your system asks for reduced motion, and the wide display face scales down on small phones so a long word like "experience" never pushes the page sideways.

This website will continue to evolve as I experiment further. We'll see what the next version brings.
