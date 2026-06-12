---
title: "Occupancy Prediction"
summary: "Classifies daily booked, offline & vacant calendars of scraped Airbnbs — enabling accurate revenue projections."
tags: ["Time-Series", "Hierarchical Classification"]
order: 1
draft: false
---

## Overview

Short-term rental hosts & platforms need accurate annual revenue projections,
but raw scraped calendar data only distinguishes "available" from "blocked" days
— it doesn't say *why* a day is blocked. This project classifies every calendar
day into one of three occupancy states — **booked** (a guest reservation),
**offline** (host-blocked for maintenance or personal use), or **vacant**
(open & available) — so revenue estimates reflect true earning potential
rather than raw availability.

## The Challenge

- Vacant days expose a nightly price; booked & offline days look identical in
  the raw data — both simply appear "blocked"
- No direct signal for *why* a day is blocked: a real guest reservation vs. the
  host blocking dates for maintenance or personal use
- Severe class imbalance — roughly 65% vacant, 30% booked, 5% offline
- Time-series constrained: predictions can only use features known up to that
  point in time, with no leakage from the future
- Must generalize to brand-new properties never seen during training, not just
  properties already in the dataset
- Very limited first-party ground truth to validate predictions against

## Approach

- Hierarchical classifier combining property-level & market-level
  time-series features
- Train/test split by property (not by date) to evaluate performance on
  unseen listings
- Benchmarked against — & designed to emulate — an existing but imperfect
  third-party data source

## Results

- Achieved **4% MAPE** on annual revenue projections derived from the
  classified calendars