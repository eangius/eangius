---
title: "Safer Routing"
summary: "Navigating pedestrians across a city through the safest path — not just the shortest."
thumbnail: "/images/projects/safer-routing.svg"
tags: ["REST", "Geospatial", "Optimization"]
order: 3
draft: false
---

## Overview

Shortest-path directions can take pedestrians through poorly-lit alleys,
high-crime blocks, or stretches with nowhere to turn for help. This project
is a routing service that finds the *safest* path across a city — walking
and/or transit — trading a small amount of extra distance for a
meaningfully safer route.

## The Challenge

- "Safety" isn't a single signal — it has to be assembled from open
  businesses (safe havens), historical crime (danger zones), current
  traffic conditions, & the type of road segment (tunnel, bridge, back
  alley, avenue)
- Optimizing purely for safety can produce absurd detours; the route still
  needs to be practical
- Multi-modal routing — walking &/or subway — multiplies the size of the
  search space
- Validating that routes are measurably safer across an entire city, not
  just on a few hand-picked examples
- Risk analysis weather to take the shortest route & minimize exposure of a high risk
  vs deviating slightly for longer time through lower risk paths.

## Approach

- Modeled the city's road & transit network as a graph, with edge weights
  derived from safe-haven proximity, crime history, live traffic, & road
  type
- Empirically tuned the weighting so safety gains aren't dominated by
  unrealistic detours
- Ran a modified A* search over the graph to find the safest route between
  any two points, walking &/or by subway
- Exposed the routing engine as a REST API service
- Validated at scale with Monte Carlo simulations over randomly sampled 
  origin-destination pairs within 5km across the city

## Results

- Routes scored **2x safer** (custom metric) than the shortest path,
  on average
- Average detour overhead of **less than 100m** versus the shortest route
- Avoided bridges, tunnels alleys where possible. Preferred busy streets with open shops.