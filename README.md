# sandeepkushawah.github.io

Personal academic website of **Sandeep Kushawah** — computational soft-matter physics,
the glass transition and molecular dynamics. Live at <https://sandeepkushawah.github.io>.

Built with Jekyll and hosted on GitHub Pages. Pushing to `main` publishes the site.

## Where things live

| What | Where |
|---|---|
| Publications | `_publications/*.md` |
| Talks, posters, seminars | `_talks/*.md` |
| News posts | `_posts/*.md` |
| Research projects | `_portfolio/` |
| Gallery | `_data/gallery.yml` (media in `images/`) |
| Timeline (CV page) | `_data/timeline.yml` |
| Pages (home, CV, contact, …) | `_layouts/home.html`, `_pages/` |
| Styles / scripts | `assets/css/site.css`, `assets/js/site.js` |
| CV (LaTeX source → PDF) | `cv/cv_kushawah.tex` → `files/Sandeep_Kushawah_CV.pdf` |
| Settings | `_config.yml` |

Local preview: `bundle install && bundle exec jekyll serve`, then open <http://localhost:4000>.

Maintenance notes (keeping the CV in sync, conventions): see `CLAUDE.md`.

Originally based on the [academicpages](https://github.com/academicpages/academicpages.github.io)
template (MIT licence, see `LICENSE`); since redesigned.
