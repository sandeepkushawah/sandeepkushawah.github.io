# Site redesign — setup & maintenance

Your site was redesigned into a custom, modern academic portfolio on top of Jekyll
(still fully GitHub Pages compatible). This note covers the few manual steps and how
to maintain content.

## 1. Deploy

```bash
git add -A
git commit -m "Redesign site into modern academic portfolio"
git push origin main
```

GitHub Pages rebuilds automatically. Give it a minute, then check
https://sandeepkushawah.github.io. (Optional local preview: `bundle exec jekyll serve`.)

## 2. Turn on the visitor counter (GoatCounter — free, privacy-friendly)

1. Create a free account at https://www.goatcounter.com/ — pick a site code
   (e.g. `sandeepkushawah`, giving you `sandeepkushawah.goatcounter.com`).
2. In `_config.yml`, set:  `goatcounter_code: "sandeepkushawah"`
3. Commit and push. The footer then shows a live visit count and tracking begins.
   No cookies, GDPR-safe, nothing to consent to. Leave the value blank to disable.

## 3. The preview-*.html files

`preview-home.html`, `preview-publications.html`, etc. are static snapshots I made so
you could review each page without a local build. They are excluded from the published
site and safe to delete anytime:

```bash
rm preview-*.html
```

## 4. Adding content (no HTML needed)

- **Publication** — add a Markdown file in `_publications/` with front matter:
  `title, author, me, date, journal, volume, paperurl, doi, image, highlights, bibtex,
  category` (`manuscripts` or `conferences`). It appears automatically, grouped and styled.
- **Talk** — add a file in `_talks/` (`title, type, venue, date, location`).
- **Project** — add a file in `_portfolio/` (`title, summary, image, tag`) + body content.
- **Gallery item** — edit `_data/gallery.yml` (one line per item: `type, poster, src,
  title, desc`). For new animations, drop a poster JPG in `images/posters/`.
- **Timeline entry** — edit `_data/timeline.yml`.

## 5. Where things live

- Design system / colours / fonts: `assets/css/site.css`
- Interactions (particles, dark mode, counters, lightbox, copy): `assets/js/site.js`
- Shared shell: `_includes/modern-head.html`, `modern-nav.html`, `modern-footer.html`
- Page layouts: `_layouts/home.html`, `page-modern.html`, `publication.html`,
  `portfolio.html`, `talk.html`
- Your CV PDF: `files/Sandeep_Kushawah_CV.pdf` (replace to update the download)

## 6. Theme accent

The teal accent and navy palette are CSS variables at the top of `site.css`
(`--teal-600`, `--navy-900`, etc.). Change them once and the whole site follows.
Dark mode is automatic and remembered per visitor.
