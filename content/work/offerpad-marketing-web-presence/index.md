---
title: 'Offerpad - Marketing / Web Presence'
description: "Overview of design and development work done for Offerpad's marketing content."
project_url: https://www.offerpad.com/
project_year: 2020
project_areas: ['web design', 'front-end dev']
weight: 3
---

The main offerpad.com website is probably the most representative of my UX design and development work at Offerpad. Since originally building the rebranded React site in June 2018, I repeatedly added and updated the site as needed. This page will highlight some of the work I've done or been responsible for.

{{< img name="offerpad-homepage-jan-2020.png" alt="Screenshot of Offerpad home page in January 2020" caption="Offerpad home page, as of January 2020" >}}

The Offerpad website, [prior to this rebranding](http://web.archive.org/web/20171013142510/https://www.offerpad.com/), was a mix of different styles and design choices, often per page. The site also contained the new home listings app, the request form, and the offer experience. As part of the relaunch, these other experiences were spun off into their own subdomains/applications.

For the project of relaunching the marketing website specifically, I was working with our product manager, who designed the content and layout of each page, and our senior web engineer, who managed the back end and advanced functionality of the site (such as the Google address autocomplete shown above). My work involved setting up the initial React application (it used a static React generator which two years later I suggest you NOT do for a marketing website) and building each page. To make my job easier, I utilized the Sass/React component library I wrote for Offerpad, Floorplan.

{{< img name="offerpad-navigation-mockup.png" alt="Screenshot of a mockup of the Offerpad website in Figma" caption="Figma mockup of the homepage with navigation 'mega menu' open." >}}

## Locations

{{< img name="offerpad-locations-jan-2020.png" alt="Screenshot of Offerpad locations page around January 2020" caption="Offerpad locations page, as of around January 2020" >}}

A larger project I worked on later for the marketing site was a complete redesign of the [locations page](https://www.offerpad.com/locations/). Originally, the locations page served as a list of links to our "market" pages — pages generated for SEO that showed which metro areas Offerpad did business in. The SEO strategy evolved to use individual city pages, which meant instead of a dozen of these pages, we now had hundreds. We needed the locations page to link to all of these city pages, plus act as a simple search engine. We referred to websites like [UberEats](https://www.ubereats.com/location) for inspiration.

In order to accomplish this task, I had to also redesign our data strategy. As the location data was not yet sourced from our internal systems, we had the opportunity to organize it as needed (at the cost of maintenance later). With some help from our other developers I was then able to set up the code to not only generate the new SEO pages as well as the links on the location page, but also other location content around the site (such as the markets list in the site footer). Another developer then came in to set up the search engine in the page hero.

## About page

{{< img name="offerpad-about-jan-2020.png" alt="Screenshot of Offerpad about page around January 2020" caption="Offerpad about page, as of around January 2020" >}}

There was a user story to combine our various company pages into one About page. Working with my product manager and our marketing team, I built the [above page](https://www.offerpad.com/about/) based on the mockup below.

{{< img name="offerpad-about-mockup.png" alt="Screenshot of a mockup of the Offerpad about page in Figma" caption="Figma mockup of the about page" >}}

## Other design work

I explored a variety of different concepts related to the marketing site, including how other initiatives like account management would fit into the existing design.

{{< img name="offerpad-account-mockup.png" alt="Screenshot of a mockup of the Offerpad home page in Figma, with additional features" caption="A mockup I made in my own time rethinking the marketing site, with emphasis on finding/buying homes and logging into an account." >}}
