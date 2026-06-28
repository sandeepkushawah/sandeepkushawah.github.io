---
title: "Beyond Pair Entropy: Orientational Many-Body Correlations in Supercooled Glass-Forming Liquids from a Four-Point Structural Entropy"
collection: publications
category: manuscripts
author: "Sandeep Kushawah, Devansu Chakraborty, Prasanth P. Jose"
me: "Sandeep Kushawah"
corresponding: true
featured: true
date: 2026-06-08
journal: "Soft Matter"
volume: "Advance Article"
paperurl: "https://doi.org/10.1039/D6SM00491A"
doi: "10.1039/D6SM00491A"
image: "/images/rAN.jpg"
highlights:
  - "Introduces a three-dimensional four-point structural entropy S₃D built from the full angular distribution g(r,θ,φ)."
  - "Derives the exact decomposition S₃D = S₂ + S_Ω, separating radial from orientational order."
  - "Reveals icosahedral and dodecahedral ordering that pair entropy S₂ and the excess entropy completely miss."
bibtex: |
  @article{kushawah2026beyond,
    title     = {Beyond pair entropy: orientational many-body correlations in supercooled
                 glass-forming liquids from a four-point structural entropy},
    author    = {Kushawah, Sandeep and Chakraborty, Devansu and Jose, Prasanth P.},
    journal   = {Soft Matter},
    year      = {2026},
    doi       = {10.1039/D6SM00491A},
    publisher = {Royal Society of Chemistry}
  }
citation: 'Sandeep Kushawah, Devansu Chakraborty, Prasanth P. Jose. (2026). &quot;Beyond Pair Entropy: Orientational Many-Body Correlations in Supercooled Glass-Forming Liquids from a Four-Point Structural Entropy.&quot; <i>Soft Matter</i>, Advance Article.'
---

Abstract: The conventional pair entropy S2, derived from the isotropic radial distribution function g(r), systematically underestimates structural ordering in supercooled glass-forming liquids. We argue that this failure arises because S<sub>2</sub>, constructed from the isotropic g(r), is inherently insensitive to the many-body orientational correlations that become accessible only through a four-point conditional distribution evaluated in a local particle-centered frame. To recover this information, we introduce a three-dimensional four-point structural entropy S<sub>3D</sub>, constructed from the four-point conditional distribution function g(r,θ,φ) evaluated in a local particle-centered reference frame, and derive its exact decomposition into a radial contribution S<sub>2</sub> and a weighted orientational entropy S<sub>Ω</sub>. Applying this framework to the canonical KA binary mixture, we find that S<sub>Ω</sub> accounts for a substantial fraction of S<sub>3D</sub> across the full temperature range studied, reflecting genuine icosahedral and dodecahedral angular ordering present at all temperatures — as independently established by Zhang and Kob - rather than a numerical artifact. These results demonstrate that g(r,θ,φ) encodes angular structural information entirely invisible to the conventional g(r) and to the thermodynamic excess entropy S<sub>ex</sub>, and that S<sub>3D</sub> provides a tractable thermodynamic measure of packing-driven orientational ordering across the supercooled regime.

Keywords: Binary Glass, Three Dimensional Density, Glass Transition, Molecular Dynamics, Structural Ordering, Orientational Entropy.

---

## Methodology

![Simulation workflow: equilibration and production runs](/images/simulation_flow.png)

The standard radial distribution function g(r) counts neighbours in a spherical shell at distance r from a reference particle:

![Radial distribution function g(r): counting neighbours in a shell at distance r](/images/rdf.jpg)

We extend this by resolving the full angular dependence in a local particle-centred frame, using the spherical coordinate scheme below:

![Spherical coordinate frame and angular binning scheme for g(r,θ,φ)](/images/coordframe1.jpg)

## Results

The 3D density variation with radial distance for the KA binary mixture:

<video width="100%" controls>
  <source src="/images/3D_density_variation.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

Angular distribution g(r,θ,φ) projected onto the unit sphere at the first peak of g(r), for the A-A and A-B pairs respectively:

![Angular distribution on the unit sphere for A-N pair](/images/rAN.jpg)

![Angular distribution on the unit sphere for A-B pair](/images/rAB.jpg)
