---
title: "Carbon Emissions Reporting in Galaxy"
description: "Estimating the carbon footprint of cloud computation"
pubDate: "2023-07-11"
---

I recently wrote a blog post about a carbon emissions reporting feature I built for [Galaxy](https://galaxyproject.org/) which
can be [found over here](https://galaxyproject.org/news/2023-07-11-carbon-emissions-reporting/).

Galaxy is basically an open-source web-based platform for bio-informatic research. It gives users
easy access to all sorts of bio-informatic tools and allows them to run custom computational workflows in the cloud such as
RNA sequencing and metagenomic analysis. I'm no biologist myself, so a basic crash course was necessary. Thankfully there's a
bunch of learning material which gives a pretty awesome [introduction to Galaxy](https://galaxyproject.org/get-started/).

I'm really happy about how this was this was my first ever open-source contribution of this scale.
This whole thing was actually for a university project, but I pretty much ignored that and focussed on
building out the best feature I could. As of today (11 July 2023), Galaxy is a 17 year old monolith code base, which
is something I've never worked on before. I enjoyed learning about how such a large system works by breaking and
eventually extending it.

Green computing is something I never really thought about until working on this feature and is something I'll
definitely take into consideration for the future. When reading up about [Bitcoin's energy usage](https://news.climate.columbia.edu/2022/05/04/cryptocurrency-energy/),
you get a real sense of how much energy the Internet uses - the cloud isn't free! Please feel free to experiment
with Galaxy and test out the feature for yourself.
