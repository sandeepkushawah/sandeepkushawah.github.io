---
title: "Orientational Many-Body Correlations in Supercooled Liquids"
summary: "A three-dimensional four-point structural entropy S₃D that captures angular ordering invisible to conventional pair entropy."
excerpt: "Development of a three-dimensional four-point structural entropy S₃D that captures angular ordering invisible to conventional pair entropy."
image: "/images/rAN.jpg"
tag: "Soft Matter · 2026"
collection: portfolio
---

## Overview

This project addresses a fundamental limitation of the conventional pair entropy S₂: its insensitivity to many-body orientational correlations in supercooled glass-forming liquids. By constructing the full three-dimensional conditional distribution function g(r,θ,φ) in a local particle-centered frame, we derive an exact decomposition of a new four-point structural entropy S₃D into a radial contribution S₂ and a weighted orientational entropy S_Ω.

![g(r = 2.2, θ, φ) on the unit sphere for the AA, AB, BA and BB pairs](/images/synopsis/angular_cage_spheres.jpg)

*The cage is not round: g<sub>αβ</sub>(r = 2.2, θ, φ) on the unit sphere at T = 0.45, ρ = 1.2. Bright patches are preferred directions that the isotropic g(r) averages away.*

![Schematic: g(r) keeps only the angular average; the particle sees a cage with gaps](/images/synopsis/cage_not_round_schematic.jpg)

## Key Contributions

- Derived the exact analytical decomposition S₃D = S₂ + S_Ω
- Demonstrated that S_Ω accounts for a substantial fraction of S₃D across the full supercooled temperature range in the KA binary mixture
- Showed that g(r,θ,φ) reveals icosahedral and dodecahedral angular ordering entirely invisible to g(r) and to the thermodynamic excess entropy S_ex
- Established a tractable thermodynamic measure of packing-driven orientational ordering

## How g(r,θ,φ) is measured

Each particle and its two nearest neighbours define a local frame; neighbours are binned in cells of equal solid angle, so every cell on a shell has the same volume.

![Equal solid-angle binning of a spherical shell](/images/synopsis/equal_volume_sphere.jpg)

## Tools & Methods

Molecular Dynamics simulations of the Kob-Andersen binary Lennard-Jones mixture; custom analysis code for angular binning of the three-dimensional distribution function; thermodynamic entropy integration.

## Publication

Sandeep Kushawah, Devansu Chakraborty, Prasanth P. Jose. *"Beyond Pair Entropy: Orientational Many-Body Correlations in Supercooled Glass-Forming Liquids from a Four-Point Structural Entropy."* **Soft Matter** (2026). [DOI: 10.1039/D6SM00491A](https://doi.org/10.1039/D6SM00491A)
