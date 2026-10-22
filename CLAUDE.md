# Notes for maintaining this site

Personal academic website of Sandeep Kushawah (Jekyll, GitHub Pages, custom
"modern" layouts: `_layouts/home.html`, `page-modern.html`, `publication.html`,
`portfolio.html`, `talk.html`, `post.html`; styles in `assets/css/site.css`,
behaviour in `assets/js/site.js`).

## Keep the CV in sync (standing instruction from Sandeep)

The LaTeX source of the CV lives at `cv/cv_kushawah.tex`. Whenever the website
gets new content — a publication, talk, poster, school, award, teaching, thesis
milestone, etc. — update `cv/cv_kushawah.tex` too, rebuild the PDF and replace
`files/Sandeep_Kushawah_CV.pdf` (the file the site's "Download CV" buttons link to).

Build (outside the repo, so aux files don't land in it):

    mkdir -p /tmp/cvbuild && cp cv/cv_kushawah.tex /tmp/cvbuild/ && cd /tmp/cvbuild \
      && latexmk -pdf -interaction=nonstopmode cv_kushawah.tex
    cp /tmp/cvbuild/cv_kushawah.pdf files/Sandeep_Kushawah_CV.pdf

Keep the CV to 2 pages; check with `pdfinfo`.

## Where content lives

- Publications: `_publications/*.md` (front matter: title, author, me, date,
  journal, volume, doi, paperurl, image, highlights, bibtex, category,
  optional `status: "Accepted"`, `corresponding: true`)
- Talks/posters: `_talks/`; news posts: `_posts/`; projects: `_portfolio/`
- Timeline: `_data/timeline.yml`; gallery: `_data/gallery.yml`
- CV web page: `_pages/cv.md` (publication list there is generated automatically)
- Visitor counter: `visitor_counter` in `_config.yml` (Abacus API); set
  `goatcounter_code` instead if a GoatCounter account is created.

## Conventions

- Animations are served as MP4 (converted from GIF with ffmpeg), not GIF.
- Do not use the 2D illustration GIFs from the seminar decks (Sandeep's request).
- Commits are authored as Sandeep Kushawah <sandeep319393k@gmail.com>.
