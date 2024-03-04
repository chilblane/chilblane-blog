---
title: 'Zonar Systems - DSPLY System'
description: 'Overview of my design technologist work for Zonar Systems'
project_year: 2023
project_areas: ['product management', 'design systems']
featured_image: featured-image.png
featured: true
---

I was brought on to Zonar Systems' UX team (a subsidiary of Continental) as senior design technologist to help grow their nascent design system (DSPLY). As someone whose prior experience included working on a mature design system (Smartsheet) as well as building my own initial version (Offerpad), my role was crucial for elevating a pattern library codebase and Figma design library into a unified entity to benefit the product organization.

## Analysis

First, I had to get familiar with the existing design system. The Zonar pattern library was based on Angular Material, with most components sourced directly from Material. The separate components Zonar engineers maintained were custom components needed for product. Overall, the pattern library was split over about a dozen repositories.

In addition, there was no central authority for maintaining the pattern library. Individual engineering teams were separately mostly by product and worked independently, and this extended to the pattern library as well. Code changes were made only when there was a product need for doing so and by the engineering team associated with the product. This also meant that there was no documentation for the pattern library beyond what Google provides for Angular Material. Many teams used the pattern library and its associated resources (tokens, palette maps) inconsistently across the product suite.

One of my first projects was to map out all of the pattern library repositories and Angular Material components, and show which engineer teams used what in their own product repos. This helped illustrate to stakeholders the current state of the pattern library when my manager and I argued for some level of ongoing, centralized maintenance and ownership of the pattern library.

On the UX side, the design system existed entirely within the Figma design library, based on Material Design spec. Product designers used these library components directly in product work but there was little opportunity to continually maintain the design library outside of contributions of new components by the product teams.

During the project work outlined below, it became clear to me the number of inconsistences between what the Figma design library included and what was actually possible in the Angular Material code base. It was my hope that in time they could be reconciled with direct and ongoing curation of the design system.

## Documentation

I identified early on that the lack of centralized documentation for the design system as a whole was holding back serious progess on improving the system. I already knew based on prior experience that not only does good design system documentation provide meaningful component usage guidelines for both engineering and UX roles, but more essential information was needed. We required design principles to be codified to guide our UX efforts; these principles would in turn inform our foundational guidelines on typography, spacing, color, interactions, responsive design, and so on; these foundations would improve and fill gaps in our components; and we could even provide guidance on how to use components together for commonly used patterns.

Writing all of this content would take time, and we started this process by meeting with the rest of the UX team to workshop design principles over a series of meetings. The intent would be to then coordinate those principles with planned work on color (see below) and other foundations. I mapped out all of these requirements, based closely on my prior work on documentation while at Smartsheet.

We also needed a place for this content. The UX team and sometimes the engineers would use Confluence. However, while a convenient knowledge base tool to maintain, its limited formatting features and distance from the actual codebase made it easy to ignore. I advocated for someone in engineering to set up a Storybook instance we could use to house this content alongside component specimens from the pattern library in a centralized destination. However, it took time for the engineering organization to be able to free up resources and people to build out the Storybook for us. We also quickly ran into an issue (that I had predicted): the components had difficulty rendering separately as Storybook stories, as opposed to working natively in Zonar's applications. Being able to render in Storybook was a hard requirement, so that any stakeholder could work with the specimens, and so work items for the engineering team were created to fix these issues.

## Color

Meanwhile, our director of UX, Drory, was working on a revamped color palette for the Zonar products. I met with him after his initial release of the palette, and showed how the colors could be both extended and simplified to not only scale with product needs but also fit the requirements of a new color design token system for DSPLY. This again was based on preliminary color token work I had devised while at Smartsheet, including the concepts of "crayons" (also known as primitives) and alias tokens. We needed the color system to meet our needs for neutral backgrounds and text, semantic elements (primary and destructive actions, for example), as well as data visualization needs in the product. It was also important that the color system itself, not necessarily the token values, could work for other Continental brands, and that the tokens were compatible with how Angular Material works with color.

I organized the color tokens in Figma based on these considerations. This coincided nicely with the new design variables feature in Figma, allowing me to test it out as I built out the tokens for prototyping. I've included some artboards below that outlined these variables, including both the "crayons" and the aliases.

{{< img name="crayons.png" alt="Screenshot of a Figma artboard with swatches of colors and some commentary" caption="My proposed crayon color tokens" >}}

{{< img name="base-colors.png" alt="Screenshot of a Figma artboard with swatches of colors and some commentary" caption="The proposed base UI color tokens utilizing the crayons" >}}

{{< img name="core-ui.png" alt="Screenshot of a Figma artboard with swatches of colors and some commentary" caption="This artboard details the issues with Angular Material" >}}
