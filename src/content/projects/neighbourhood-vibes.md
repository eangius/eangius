---
title: "Neighbourhood Vibes"
summary: "Measure the local sentiment & interests from streaming social media, news & events."
tags: ["Simulation", "NLP", "LLM", "Geospatial"]
order: 4
draft: false
---

## Overview

Brands, security teams & local governments need a real-time read on how a
neighbourhood *feels* — beyond crime stats or census data. This project
objectively quantifies the sentiment & topical "vibe" of an area as it
evolves, by mining streaming social media, local news & location-based
events, scaled relative to the area's population so dense & sparse
neighbourhoods remain comparable.

## The Challenge

- "Vibe" has no ground truth — there's no labeled dataset of how a
  neighbourhood feels at a given moment
- Streaming, noisy, multi-source text (social media, news, events) needs
  continuous real-time processing
- Raw mention counts are meaningless without normalizing for hyperlocal
  population density
- Must support multiple area granularities (block, neighbourhood, city) &
  time granularities (day, week, month, year) simultaneously
- Validating predictions against reality requires proxy ground truths, since
  no direct measurement of "vibe" exists

## Approach

- Streamed social media, local news & event data continuously, resolving each
  item's noisy, ambiguous location reference with a
  [probabilistic geocoder](/projects/probabilistic-geocoder/) into a
  confidence-weighted area
- Computed a sentiment score per area/period, ranging from **-1** (negative)
  through **0** (neutral) to **+1** (positive)
- Extracted the dominant topics of interest alongside each area's sentiment
  score
- Normalized scores by hyperlocal population rates for fair comparisons
  across dense & sparse areas
- Supported flexible granularities: block / neighbourhood / city, & day /
  week / month / year

## Results

- Objectively validated around sporting venues — using the home team's game
  outcome as the sentiment label & game themes as the topic-of-interest label
- Subjectively validated around public protest areas (e.g., strikes & marches
  near Parliament during COVID)
- Found a **50-70% positive correlation** between predicted sentiment &
  real-world outcomes
- Useful for geo-marketers, security teams & local governments tracking how
  an area's mood shifts over time