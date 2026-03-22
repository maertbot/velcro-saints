# DEV-NOTES

## What shipped
- Vite + vanilla JS patch studio with dark near-black UI and amber accents.
- Procedural SVG renderer for circle, shield, rocker, rect, rounded-rect, and pentagon patch outlines.
- 80 hand-authored SVG-path symbols across: military, nature, music, heraldic, tools, ornaments, morale.
- Lawless Collection gallery with 7 prebuilt patches.
- Prompt → generate → edit workflow.
- Export buttons for SVG, PNG, and plain-text production specs.
- Stitch texture overlay, merrow border treatment, and optional velcro peel.

## Build / verification notes
- `npm run build` passes.
- Browser verification covered:
  - gallery loads all 7 patches,
  - symbol browser exposes 80 icons,
  - prompt generation works,
  - icon swapping works,
  - editor updates are live.
- GitHub Pages base path is `/velcro-saints/` in `vite.config.js`.

## Known limitations
- The production constraints panel currently computes and surfaces the constraints, but minimum-detail and thumbnail-read are rule-based checks rather than image-analysis heuristics.
- PNG export is client-side via canvas rendering of the stitched SVG; SVG export intentionally omits the PNG raster step.
- Production spec export is `.txt`, not PDF, to keep the stack dependency-light.
- The stitch treatment is procedural SVG texture, not a physical embroidery simulator. It reads substantially better than a cheap overlay, but there is room to push realism further with direction-aware fill fields.

## Deployment
- `npm run deploy` uses `gh-pages` and publishes `dist/`.
- After deploy, verify: `https://maertbot.github.io/velcro-saints/`
