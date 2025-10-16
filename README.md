## Krishna Sawale — Personal Website

Static portfolio site highlighting Krishna Sawale’s React Native leadership, product experience, and contact channels. The build lives in `docs/` for GitHub Pages hosting and features motion design, responsive layout, and LinkedIn badge integration.

## Tech Stack

- **[HTML/CSS](https://developer.mozilla.org/en-US/docs/Web/HTML)** for structure and styling
- **Vanilla JavaScript** for scroll-triggered animations and accessibility enhancements
- **GitHub Pages** deployment via the `docs/` directory

## Project Structure

```text
docs/
  index.html        # Main portfolio page
  ks-logo.svg       # Personal monogram logo
  icons/            # Section iconography
README.md           # Project overview and contribution guide
```

## Local Development

1. Clone the repository and move into the project folder.
2. Open `docs/index.html` in a browser (e.g., using the Live Server extension) to preview changes.
3. Edit HTML/CSS/JS directly in `docs/`. No additional build tooling is required.

## Deployment

- Pushes to `main` serve `docs/` through GitHub Pages.
- After changes, verify `docs/index.html` locally, commit, and `git push`. GitHub Pages updates automatically.

## Contributing & Maintenance

- Keep animations performant and respect `prefers-reduced-motion`.
- Ensure new sections remain keyboard accessible and responsive across breakpoints.
- Update meta tags (`title`, `description`) if positioning or branding shifts.
- When replacing assets, optimize SVG/PNG sizes for fast loads.
