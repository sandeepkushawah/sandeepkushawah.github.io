---
layout: page-modern
title: "Curriculum Vitae"
eyebrow: "Academic record"
subtitle: "Computational soft matter and the statistical physics of the glass transition. A condensed CV follows — the full PDF is one click away."
permalink: /cv/
redirect_from:
  - /resume
description: "Curriculum vitae of Sandeep Kushawah — education, research experience, publications, skills, and awards in computational soft matter physics."
---

{% include base_path %}

<div style="display:flex;flex-wrap:wrap;gap:.6rem;margin-bottom:2.6rem">
  <a class="btn btn--primary" href="{{ base_path }}/files/Sandeep_Kushawah_CV.pdf"><i class="ti ti-download" aria-hidden="true"></i> Download full CV (PDF)</a>
  <a class="btn btn--outline" href="{{ site.author.googlescholar }}" target="_blank" rel="noopener"><i class="ti ti-school" aria-hidden="true"></i> Google Scholar</a>
  <a class="btn btn--outline" href="https://orcid.org/{{ site.author.orcid }}" target="_blank" rel="noopener"><i class="ti ti-id-badge-2" aria-hidden="true"></i> ORCID</a>
</div>

<div class="prose" style="max-width:760px;margin-bottom:3rem">
  <p>I am a computational soft-matter physicist finishing my Ph.D. at IIT Mandi. My research uses large-scale molecular dynamics simulations to characterise structure–dynamics relationships in supercooled glass-forming liquids — developing structural and orientational order parameters, configurational/structural entropy measures, and static and dynamic correlation lengths that connect local packing to slow, heterogeneous dynamics in model binary mixtures near the glass transition.</p>
</div>

<h2 class="section-title" style="font-size:1.7rem;margin-bottom:1.6rem"><i class="ti ti-timeline" aria-hidden="true" style="color:var(--accent)"></i> Academic timeline</h2>
<div class="timeline" style="margin-bottom:3.5rem">
  {% for t in site.data.timeline %}
  <div class="tl-item reveal">
    <span class="tl-dot"><i class="ti ti-{% case t.type %}{% when 'education' %}school{% when 'publication' %}article{% when 'award' %}trophy{% when 'talk' %}presentation{% when 'service' %}server-2{% else %}atom-2{% endcase %}" aria-hidden="true"></i></span>
    <div class="tl-card">
      <span class="tl-year">{{ t.year }}</span>
      <h3>{{ t.title }}</h3>
      <p class="tl-place">{{ t.place }}</p>
      {% if t.desc %}<p class="tl-desc">{{ t.desc }}</p>{% endif %}
    </div>
  </div>
  {% endfor %}
</div>

<div class="cv-grid">

  <div class="cv-block">
    <h2><i class="ti ti-school" aria-hidden="true"></i> Education</h2>
    <div class="cv-entry">
      <div class="cv-entry__top"><p class="cv-entry__title">Ph.D. in Physics (in progress)</p><span class="cv-entry__date">Since 2021</span></div>
      <p class="cv-entry__org">Indian Institute of Technology Mandi</p>
      <ul><li>Advisor: Dr. Prasanth P. Jose. Static and dynamic correlations in Kob–Andersen glass-forming mixtures via molecular dynamics simulation.</li><li>Coursework CGPA 8.0/10.</li></ul>
    </div>
    <div class="cv-entry">
      <div class="cv-entry__top"><p class="cv-entry__title">M.Sc. in Physics</p><span class="cv-entry__date">2017–2019</span></div>
      <p class="cv-entry__org">Indian Institute of Technology Delhi</p>
    </div>
    <div class="cv-entry">
      <div class="cv-entry__top"><p class="cv-entry__title">B.Sc. (Hons.) in Physics</p><span class="cv-entry__date">2014–2017</span></div>
      <p class="cv-entry__org">Shivaji College, University of Delhi</p>
      <ul><li>Minors in Mathematics and Computer Science.</li></ul>
    </div>
  </div>

  <div class="cv-block">
    <h2><i class="ti ti-flask" aria-hidden="true"></i> Research experience</h2>
    <div class="cv-entry">
      <div class="cv-entry__top"><p class="cv-entry__title">Doctoral Researcher</p><span class="cv-entry__date">2021–present</span></div>
      <p class="cv-entry__org">Physics of Complex Systems Lab, IIT Mandi</p>
      <ul>
        <li>Simulate Kob–Andersen 80:20 binary Lennard-Jones mixtures with large-scale molecular dynamics.</li>
        <li>Develop static structural/orientational order parameters and configurational entropy measures linked to dynamic heterogeneity.</li>
        <li>Implement and validate custom C/MATLAB pipelines for radial/angular distribution functions and correlation-length extraction.</li>
      </ul>
    </div>
    <div class="cv-entry">
      <div class="cv-entry__top"><p class="cv-entry__title">Master's Thesis — patchy-particle aggregation</p><span class="cv-entry__date">2018–2019</span></div>
      <p class="cv-entry__org">IIT Delhi · Advisor: Dr. Sujin B. Babu</p>
      <ul><li>Simulated asymmetrical patchy colloids (Patchy Brownian Cluster Dynamics) for protein aggregation; visualised with POV-Ray.</li></ul>
    </div>
    <div class="cv-entry">
      <div class="cv-entry__top"><p class="cv-entry__title">Master's Mini-Project — plasma PIC simulation</p><span class="cv-entry__date">2019</span></div>
      <p class="cv-entry__org">IIT Delhi · Advisor: Dr. Vikrant Saxena</p>
    </div>
  </div>

  <div class="cv-block">
    <h2><i class="ti ti-chalkboard" aria-hidden="true"></i> Teaching</h2>
    <div class="cv-entry">
      <p class="cv-entry__org" style="color:var(--text);font-weight:600;margin-bottom:.6rem">Teaching Assistant, IIT Mandi</p>
      <ul>
        <li>Statistical Mechanics — Jan–May 2025</li>
        <li>Statistical Mechanics — Jan–Jun 2024</li>
        <li>Introduction to Molecular Simulation — Aug–Dec 2023</li>
      </ul>
    </div>
    <h2 style="margin-top:1.8rem"><i class="ti ti-server-2" aria-hidden="true"></i> Service</h2>
    <div class="cv-entry">
      <div class="cv-entry__top"><p class="cv-entry__title">HPC Administration Team</p><span class="cv-entry__date">2021–2023</span></div>
      <p class="cv-entry__org">IIT Mandi</p>
      <ul><li>Managed user accounts and resolved issues on the institute HPC cluster; assisted with scientific-software installation.</li></ul>
    </div>
  </div>

  <div class="cv-block">
    <h2><i class="ti ti-trophy" aria-hidden="true"></i> Awards &amp; honours</h2>
    <ul class="cv-awards">
      <li><i class="ti ti-award" aria-hidden="true"></i> Best Poster Award, National Science Day 2024, IIT Mandi.</li>
      <li><i class="ti ti-circle-check" aria-hidden="true"></i> CSIR-NET (Lectureship), Dec 2019 — 96.388 percentile.</li>
      <li><i class="ti ti-circle-check" aria-hidden="true"></i> JEST Physics 2020 — AIR 320 (95.61 percentile).</li>
      <li><i class="ti ti-circle-check" aria-hidden="true"></i> IIT JAM 2017 — AIR 328 / 11,902.</li>
      <li><i class="ti ti-circle-check" aria-hidden="true"></i> GATE 2020 — AIR 547 / 16,990.</li>
    </ul>
  </div>

  <div class="cv-block cv-full">
    <h2><i class="ti ti-tools" aria-hidden="true"></i> Technical skills</h2>
    <div class="grid grid--3" style="gap:1.2rem">
      <div class="skillgroup">
        <h3><i class="ti ti-atom" aria-hidden="true"></i> Simulation &amp; modelling</h3>
        <div class="chips"><span class="chip">Molecular dynamics</span><span class="chip">LAMMPS</span><span class="chip">GROMACS</span><span class="chip">VMD</span><span class="chip">POV-Ray</span></div>
      </div>
      <div class="skillgroup">
        <h3><i class="ti ti-code" aria-hidden="true"></i> Programming &amp; analysis</h3>
        <div class="chips"><span class="chip">C / C++</span><span class="chip">Python</span><span class="chip">MATLAB</span><span class="chip">Bash</span><span class="chip">LaTeX</span></div>
      </div>
      <div class="skillgroup">
        <h3><i class="ti ti-server-2" aria-hidden="true"></i> Computing &amp; HPC</h3>
        <div class="chips"><span class="chip">HPC</span><span class="chip">SLURM</span><span class="chip">PBS</span><span class="chip">Linux (CentOS/Ubuntu)</span><span class="chip">Git</span></div>
      </div>
    </div>
  </div>

  <div class="cv-block">
    <h2><i class="ti ti-presentation" aria-hidden="true"></i> Selected presentations &amp; schools</h2>
    <ul class="cv-awards">
      <li><i class="ti ti-point-filled" aria-hidden="true"></i> Poster, 68th DAE Solid State Physics Symposium, BARC, Mumbai.</li>
      <li><i class="ti ti-point-filled" aria-hidden="true"></i> Poster, 67th DAE Solid State Physics Symposium, BARC, Mumbai.</li>
      <li><i class="ti ti-point-filled" aria-hidden="true"></i> Bangalore School on Statistical Physics XV, ICTS &amp; RRI.</li>
      <li><i class="ti ti-point-filled" aria-hidden="true"></i> Bangalore School on Statistical Physics XIV, ICTS &amp; RRI.</li>
    </ul>
  </div>

  <div class="cv-block">
    <h2><i class="ti ti-certificate" aria-hidden="true"></i> Certifications &amp; training</h2>
    <ul class="cv-awards">
      <li><i class="ti ti-point-filled" aria-hidden="true"></i> Academic Writing Workshop, IIT Mandi — Nov 2024.</li>
      <li><i class="ti ti-point-filled" aria-hidden="true"></i> Science Communication webinar, EURAXESS — Oct 2023.</li>
      <li><i class="ti ti-point-filled" aria-hidden="true"></i> Space Science &amp; Technology Awareness Training (START), ISRO — Sep 2023.</li>
      <li><i class="ti ti-point-filled" aria-hidden="true"></i> MATLAB Onramp, MathWorks (verified) — Feb 2022.</li>
      <li><i class="ti ti-point-filled" aria-hidden="true"></i> Scientific Writing Workshop, ACS Publications — Sep 2021.</li>
    </ul>
  </div>

</div>
