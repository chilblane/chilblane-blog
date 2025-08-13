---
title: 'About this website'
description: 'A overview of how this website and portfolio was designed and built, including my thinking process'
project_year: 2025
knowledge:
  [
    'content strategy',
    'information architecture',
    'design tokens',
    'product management',
  ]
skills: ['css', 'sass']
featured_image: featured-image.jpg
featured: true
---

## Overview

First things first: this is a website powered by Hugo, a technology that I have yet to utilize for any employer. I did not built this site with React, a JavaScript framework I know well, although prior versions did use it. This site was intended to be used as a blog, hence the repository name, and I felt React, even with a static site generator, would be overkill. (Although I decided later on that if I did blog regularly, it would be under a different name, and therefore not here.)

With this in mind, I decided to focus on Hugo, a lightweight, easy to use system for building content sites. I also decided to minimize the amount of JavaScript used on this site to analytics and a gallery plugin. Hugo is easy to maintain and also easy to deploy to Netlify, as well.

The website now has a content management system for the portfolio articles like the one you're reading now, powered by Markdown. There are also two "static" pages, the home page and the resume page, the latter of which is fed by JSON data.

## Sass

When I approached the most recent version of this site, I wanted to return to a Sass-based styling approach for several reasons. I had been using [Tailwind CSS](https://tailwindcss.com/), which while a delightful framework focused on utility classes, completely bypassed my Sass expertise. Tailwind is also not something I've had to work with yet for an employer, and as a third-party framework, is largely opaque and denies me the opportunity to use my own design token system effectively.

While I recognize that it might be possible to create a similar CSS architecture without the use of a preprocessor like Sass, I decided it would be best to continue to use Sass, as it is still an effective solution for styling, even in CSS-in-JS approaches. I've used it for most of my career.

I removed Tailwind and restored the original Sass structure I had in a previous version of this website. I decided to modernize and restructure the Sass folders, utilizing modern implementations such as `@use` and `@forward`, as well as my version of the [7-1 architecture pattern](https://github.com/KittyGiraudel/sass-boilerplate):

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

A key reason for returning to Sass, I wanted to apply everything I knew about design tokens to a relatively small project. Most of the design tokens are color tokens as a result. I started with a list of Sass variables for each crayon token (commonly referred to as primitives in other organizations). These tokens were generated by a Figma plugin.

```scss
$crayon-gray-010: #d8dce1;
$crayon-gray-020: #bec5cd;
$crayon-gray-030: #9ea8b4;
$crayon-gray-040: #7e8b9a;
$crayon-gray-050: #5d6e81;
$crayon-gray-060: #3d5168;
$crayon-gray-070: #334457;
$crayon-gray-080: #293645;
$crayon-gray-090: #1f2934;
$crayon-gray-100: #141b23;
$crayon-gray-110: #0c1015;

$crayon-blue-010: #cce3ff;
$crayon-blue-020: #aad0ff;
$crayon-blue-030: #80b9ff;
$crayon-blue-040: #55a2ff;
$crayon-blue-050: #2a8aff;
$crayon-blue-060: #0073ff;
$crayon-blue-070: #0060d5;
$crayon-blue-080: #004daa;
$crayon-blue-090: #003a80;
$crayon-blue-100: #002655;
$crayon-blue-110: #001733;

$crayon-orange-010: #ffebcc;
$crayon-orange-020: #ffdeaa;
$crayon-orange-030: #ffce80;
$crayon-orange-040: #ffbd55;
$crayon-orange-050: #ffad2a;
$crayon-orange-060: #ff9c00;
$crayon-orange-070: #d58200;
$crayon-orange-080: #aa6800;
$crayon-orange-090: #804e00;
$crayon-orange-100: #553400;
$crayon-orange-110: #331f00;
```

I then built out the semantic aliases that use some of these crayons. These semantic tokens are then what are utilized in the project, not the crayons themselves.

```scss
$color-canvas: color.adjust($crayon-gray-110, $alpha: -0.2);
$color-canvas-alt: color.adjust($crayon-blue-100, $alpha: -0.2);
$color-canvas-line: color.adjust($crayon-blue-040, $alpha: -0.8);

$color-surface: color.adjust($crayon-gray-110, $alpha: -0.4);
$color-surface-raised: color.adjust($crayon-gray-080, $alpha: -0.5);
$color-surface-border: $crayon-gray-070;
$color-surface-divider: $crayon-gray-060;
$color-surface-stripe: color.adjust($crayon-gray-060, $alpha: -0.5);

$color-text: $crayon-gray-020;
$color-text-logo: $crayon-gray-090;

$color-text-interactive-basic: $crayon-gray-020;
$color-text-interactive-primary: $crayon-orange-050;
$color-text-interactive-primary-hover: $crayon-orange-040;

$color-fill-code: $crayon-gray-110;
$color-fill-neutral: color.adjust($crayon-gray-080, $alpha: -0.1);

$color-interactive-fill-basic: $crayon-gray-100;
$color-interactive-fill-primary: $crayon-orange-100;

$color-interactive-border-basic: $crayon-gray-060;
$color-interactive-border-basic-hover: $crayon-gray-050;
$color-interactive-border-primary: $crayon-orange-060;
$color-interactive-border-primary-hover: $crayon-orange-040;

$shadow-raised:
  0px 0px 0px $crayon-gray-110,
  0px 4px 6px color.adjust($crayon-gray-110, $alpha: -0.5),
  0px 0px 1px color.adjust($crayon-gray-110, $alpha: -0.5);
$shadow-text-sunken:
  -1px -1px 1px $crayon-gray-110,
  1px 1px 1px $crayon-gray-060;
$shadow-text-raised: 1px 1px 1px $crayon-gray-110;
```

In the `_base.scss` file, a function helps convert these tokens into prefixed CSS custom properties for `:root`.

```scss
@include cv.cssvars(
  (
    sizes-layout-width: #{v.$sizes-layout-width},
    sizes-content-width: #{v.$sizes-content-width},

    color-canvas: #{c.$color-canvas},
    color-canvas-alt: #{c.$color-canvas-alt},
    color-canvas-line: #{c.$color-canvas-line},

    color-surface: #{c.$color-surface},
    color-surface-raised: #{c.$color-surface-raised},
    color-surface-border: #{c.$color-surface-border},
    color-surface-divider: #{c.$color-surface-divider},
    color-surface-stripe: #{c.$color-surface-stripe},

    color-text: #{c.$color-text},
    color-text-logo: #{c.$color-text-logo},

    color-text-interactive-basic: #{c.$color-text-interactive-basic},
    color-text-interactive-primary: #{c.$color-text-interactive-primary},
    color-text-interactive-primary-hover:
      #{c.$color-text-interactive-primary-hover},

    color-fill-code: #{c.$color-fill-code},
    color-fill-neutral: #{c.$color-fill-neutral},

    color-interactive-fill-basic: #{c.$color-interactive-fill-basic},
    color-interactive-fill-primary: #{c.$color-interactive-fill-primary},
    color-interactive-border-basic: #{c.$color-interactive-border-basic},
    color-interactive-border-basic-hover:
      #{c.$color-interactive-border-basic-hover},
    color-interactive-border-primary: #{c.$color-interactive-border-primary},
    color-interactive-border-primary-hover:
      #{c.$color-interactive-border-primary-hover},

    shadow-raised: #{c.$shadow-raised},
    shadow-text-sunken: #{c.$shadow-text-sunken},
    shadow-text-raised: #{c.$shadow-text-raised},
  )
);
```

Compiled styles in the browser:

```css
:root {
  --r12-sizes-layout-width: 60rem;
  --r12-sizes-content-width: 40rem;
  --r12-color-canvas: rgba(12, 16, 21, 0.8);
  --r12-color-canvas-alt: rgba(0, 38, 85, 0.8);
  --r12-color-canvas-line: rgba(85, 162, 255, 0.2);
  --r12-color-surface: rgba(12, 16, 21, 0.6);
  --r12-color-surface-raised: rgba(41, 54, 69, 0.5);
  --r12-color-surface-border: #334457;
  --r12-color-surface-divider: #3d5168;
  --r12-color-surface-stripe: rgba(61, 81, 104, 0.5);
  --r12-color-text: #bec5cd;
  --r12-color-text-logo: #1f2934;
  --r12-color-text-interactive-basic: #bec5cd;
  --r12-color-text-interactive-primary: #ffad2a;
  --r12-color-text-interactive-primary-hover: #ffbd55;
  --r12-color-fill-code: #0c1015;
  --r12-color-fill-neutral: rgba(41, 54, 69, 0.9);
  --r12-color-interactive-fill-basic: #141b23;
  --r12-color-interactive-fill-primary: #553400;
  --r12-color-interactive-border-basic: #3d5168;
  --r12-color-interactive-border-basic-hover: #5d6e81;
  --r12-color-interactive-border-primary: #ff9c00;
  --r12-color-interactive-border-primary-hover: #ffbd55;
  --r12-shadow-raised:
    0px 0px 0px #0c1015, 0px 4px 6px rgba(12, 16, 21, 0.5),
    0px 0px 1px rgba(12, 16, 21, 0.5);
  --r12-shadow-text-sunken: -1px -1px 1px #0c1015, 1px 1px 1px #3d5168;
  --r12-shadow-text-raised: 1px 1px 1px #0c1015;
}
```

You might ask why CSS custom properties are necessary, if I can just reference the Sass variables directly in styles instead of referencing the custom property (e.g., `color: var(--r12-color-text);`). The reason is that instead of placing directly at `:root`, these can be placed into a theme class on the `html` element in the future when I add theming support to the website. Then, I can make light mode and dark mode versions of my semantic elements:

```scss
$color-dark-text: $crayon-gray-020;
$color-light-text: $crayon-gray-100;
```

These two variables are respectively used in a dark mode class and a light mode class. I have not implemented this yet, as the dark look of the website is my intended art direction and "theme switching" is its own project, potentially adding more JavaScript to the site if I want to allow users to manually change the theme.

The rest of the design tokens are largely organized for Typey and for the most part, are not converted to CSS custom properties. Typey also allows completely responsive text and sizing; if you want, you can zoom with your browser and the site scales perfectly.

## Design

In reverting to the Sass framework I built before, I also returned to a prior, darker design that I want to continue to evolve. As someone who grew up on the internet in the early 2000s, I was heavily inspired by the sort of Y2K Futurism that existed in web design, especially [darker sites focused on gaming](https://web.archive.org/web/20040630062613/https://sclegacy.com/).

{{< img name="sclegacy-screenshot.png" alt="Screenshot of a StarCraft fansite from 2004" caption="An example of the aesthetic, this capture of sclegacy.com from 2004 features the image-heavy web design used in the period" >}}

However, a lot of [websites with this aesthetic](https://www.webdesignmuseum.org/golden-age-of-web-design) heavily relied on images and image maps for visuals, as CSS and browser support was not as fully developed then as it is now. Today, we can use substantially more CSS and SVG tricks to replicate much of this style, without relying on additional images that add page weight and compilation time to the site. This is why this website will continue to evolve, as I experiment further.
