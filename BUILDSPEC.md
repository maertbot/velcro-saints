# Velcro Saints — Build Spec

## What This Is
A premium tactical-patch design studio. Generate production-ready insignias from text prompts, then edit every element by hand. Export SVG, PNG with stitch texture, and production specs. Ships with The Lawless Collection — 7 curated patches that showcase the system.

## Read First
- `DESIGN.md` in this directory — full Make Good Art design spec with thumbnail blueprints, color palettes, symbol categories, and quality gates
- `/Users/maertbot/.openclaw/workspace/skills/compound-engineering/CODEX-LEARNINGS.md` — build lessons

## Locked Design Decisions
1. **Production-ready** — real embroidery constraints (≤8 thread colors, minimum stitch width, detail density limits)
2. **Prompt → generate → hands-on edit** — type a description, get a patch, then adjust every element
3. **Mil-spec core + morale lane** — subdued tactical default, optional bright/irreverent mode
4. **Flat product shots** — stitch texture, merrowed border, Velcro backing. No 3D mockups.
5. **Procedural SVG + deep symbol library** — no AI image generation. All vector, all editable.
6. **First drop: The Lawless Collection** — 7 patches (see below)

## The Lawless Collection (pre-built showcase)

### 1. Lawless Family Crest
- Shape: Shield (heraldic, pointed bottom)
- Icon: quartered — eagle (top-left), Douglas fir tree (top-right), open book (bottom-left), guitar (bottom-right)
- Text: "LAWLESS" on banner scroll below shield
- Palette: black, OD green (#4a5a3a), cream (#e8e0d0), coyote brown (#8b7355)

### 2. Jellytoes Band Patch
- Shape: Rocker arc tab
- Icon: jellyfish with guitar neck as one tentacle
- Text: "JELLYTOES" arcing across top
- Palette: black, teal (#2a8a7a), coral (#d45a4a), cream
- Lane: morale (bright colors OK)

### 3. Edgewater Dispatch Press Credential
- Shape: Rounded rectangle (vertical, press-badge format)
- Icon: small quill or newspaper fold
- Text: "EDGEWATER DISPATCH" top, "PRESS" large center, "EDITOR IN CHIEF" bottom, "No. 4 • 2026" small
- Palette: navy (#1a2a4a), black, gold (#c4a44c), cream

### 4. Roseburg Forest Products
- Shape: Circle
- Icon: Douglas fir silhouette with crosscut saw behind
- Text: "ROSEBURG" top arc, "FOREST PRODUCTS" bottom arc
- Palette: forest green (#2a4a2a), black, cream, coyote brown

### 5. Willagillespie Eagles
- Shape: Circle with "VOLUNTEER" tab below
- Icon: eagle silhouette, wings spread
- Text: "WILLAGILLESPIE EAGLES" arc
- Palette: navy, gold (#c4a44c), white, black

### 6. Maertbot Operations
- Shape: Circle
- Icon: eagle (sharp, tactical) with subtle circuit-trace border pattern
- Text: "MAERTBOT" top arc, "OPERATIONS" bottom arc
- Palette: black (#1a1a1a), gunmetal (#3a3e42), amber (#d4944c), cream
- This is the most tactical patch in the set

### 7. Big Bend 2026 Expedition
- Shape: Circle
- Icon: desert landscape silhouette (mesa, saguaro cactus, starry sky above)
- Text: "BIG BEND 2026" top arc, "LAWLESS EXPEDITION" bottom arc
- Palette: black, coyote brown, cream, navy (night sky)

## UI Design

### Layout
```
┌─────────────────────────────────────────────────────────┐
│  VELCRO SAINTS                              [Export ▾]  │
├──────────────┬──────────────────────────────────────────┤
│              │                                          │
│  SYMBOL      │        PATCH CANVAS                      │
│  BROWSER     │     (live SVG render)                    │
│              │                                          │
│  [categories]│     ┌─────────────┐                      │
│  [icons grid]│     │             │                      │
│              │     │   PATCH     │                      │
│              │     │   PREVIEW   │                      │
│              │     │             │                      │
│              │     └─────────────┘                      │
│              │                                          │
├──────────────┤     Stitch texture toggle                │
│              │     Production specs readout             │
│  ELEMENT     ├──────────────────────────────────────────┤
│  EDITOR      │  PROMPT BAR                              │
│              │  [describe your patch...]        [Gen]   │
│  (selected   ├──────────────────────────────────────────┤
│   element    │  GALLERY: The Lawless Collection         │
│   properties)│  [crest] [jellytoes] [dispatch] [...]    │
│              │                                          │
└──────────────┴──────────────────────────────────────────┘
```

### Visual Style
- Background: #0d0d0d (near-black)
- Panels: #161618 with subtle borders (#2a2a2c)
- Accent: amber (#d4944c) for active states, selection highlights
- Text: #c8c4bc (warm gray)
- Fonts: DM Mono for specs/data, DM Sans for UI labels
- The patches themselves are the color — the UI is deliberately dark and recessive

### Stitch Texture Rendering
- SVG filter or overlay that simulates embroidery thread direction
- Merrowed (overlock) edge around patch perimeter — slightly raised, darker thread
- Subtle diagonal stitch pattern across filled areas
- Velcro backing hint (light gray fuzzy texture on back, visible in a corner peel)
- The texture should be SUBTLE — suggests craft, doesn't overwhelm the design

## Technical Architecture

### Stack
- Vite + vanilla JS
- SVG for all patch rendering (scalable, exportable, production-ready)
- No framework needed

### File Structure
```
velcro-saints/
├── index.html
├── vite.config.js
├── src/
│   ├── main.js
│   ├── style.css
│   ├── patch/
│   │   ├── grammar.js      — prompt→patch-spec parser
│   │   ├── renderer.js     — SVG patch renderer
│   │   ├── shapes.js       — patch outline shapes (circle, shield, rocker, rect, etc.)
│   │   ├── text.js         — arc text, banner text, centered text
│   │   ├── stitch.js       — stitch texture SVG filter/overlay
│   │   └── export.js       — SVG/PNG/spec-PDF export
│   ├── symbols/
│   │   ├── index.js         — symbol registry + search
│   │   ├── military.js      — eagle, shield, sword, star, chevron, etc.
│   │   ├── nature.js        — tree, mountain, wave, animal, etc.
│   │   ├── music.js         — guitar, mic, note, amp, etc.
│   │   ├── heraldic.js      — lion, crown, wreath, scroll, etc.
│   │   ├── tools.js         — axe, saw, gear, hammer, etc.
│   │   ├── ornaments.js     — banners, ribbons, frames, etc.
│   │   └── morale.js        — skull, dice, coffee, lightning, etc.
│   ├── ui/
│   │   ├── editor.js        — element selection + property editing
│   │   ├── browser.js       — symbol browser with categories
│   │   ├── gallery.js       — Lawless Collection showcase
│   │   └── prompt.js        — prompt bar + grammar UI
│   └── data/
│       └── lawless-collection.js  — 7 pre-built patch definitions
├── DEV-NOTES.md
└── BUILDSPEC.md
```

### Symbol Format
Each symbol is an SVG path string with metadata:
```js
{
  id: 'eagle-spread',
  name: 'Eagle (wings spread)',
  category: 'military',
  tags: ['bird', 'freedom', 'america', 'tactical'],
  viewBox: '0 0 100 100',
  paths: ['M50 10 L80 40 ...'],  // SVG path data
  defaultScale: 0.6,
}
```

### Prompt Grammar
A prompt like "Lawless family crest, shield shape, eagle and guitar, olive and black" maps to:
```js
{
  shape: 'shield',
  topText: 'LAWLESS',
  bottomText: '',
  bannerText: 'LAWLESS',
  icons: ['eagle-spread', 'guitar-acoustic'],
  layout: 'quartered',  // or 'centered', 'stacked', 'flanking'
  palette: ['#1a1a1a', '#4a5a3a', '#e8e0d0', '#8b7355'],
  lane: 'subdued',  // or 'morale'
}
```

### Production Constraints (enforced in renderer)
- Max 8 fill colors per patch
- Minimum stroke width: 0.5mm at actual size (≈1.5px at 300 DPI for a 4" patch)
- Minimum text height: 3mm at actual size
- Maximum complexity: ≤500 SVG path segments (embroidery machine limit)
- Merrowed border width: standardized to 2-3mm

## Build Phases

### Phase 1: Patch Renderer + Shapes
Build the SVG renderer: patch outlines (circle, shield, rocker, rectangle), arc text, centered text, banner scrolls, icon placement, color fills, merrowed border.
**Test gate:** Render all 7 Lawless Collection patches. Each passes the 3-second thumbnail read test and uses ≤8 colors.

### Phase 2: Symbol Library (80+ icons for v1)
Build the vector symbol library with at least 80 icons across all categories. Each icon is an SVG path with metadata. Build the symbol browser UI with category filtering and search.
**Test gate:** All 7 Lawless Collection patches render with correct icons. Symbol browser shows all icons organized by category. Search finds relevant icons.

### Phase 3: Stitch Texture + Export
Build the embroidery stitch texture overlay (SVG filter), merrowed edge detail, and export pipeline (SVG clean, PNG with texture, production spec text).
**Test gate:** Exported PNG shows visible stitch texture. Exported SVG is clean vector without texture. Production spec lists thread colors, dimensions, and stitch count estimate.

### Phase 4: Editor + Prompt
Build the element editor (click to select, edit properties: position, scale, color, swap icon) and the prompt bar (text→patch-spec parser).
**Test gate:** Type "military unit patch, circle, eagle, ALPHA TEAM, black and gold" → generates a reasonable patch. Click the eagle → can swap it for a different icon. Change the palette. All updates render instantly.

### Phase 5: Gallery + Polish + Deploy
Build the Lawless Collection gallery, responsive layout, keyboard shortcuts, and deploy.
**Test gate:** Gallery shows all 7 patches as clickable cards. Clicking one loads it into the editor. Full workflow: browse gallery → edit a patch → export PNG. Deployed to GitHub Pages.

## Deployment
- Repo: `maertbot/velcro-saints`
- Deploy: `npm run build && npx gh-pages -d dist`
- Base path: `/velcro-saints/`

## Quality Bar
- The Lawless Family Crest must look like something you'd actually wear
- The Maertbot Operations patch must look like it belongs on a plate carrier
- The Jellytoes patch must make a musician smile
- Every patch must read at 64x64 pixels (thumbnail test)
- The stitch texture must look like real embroidery, not a Photoshop filter
- The UI must feel like a professional design tool, not a toy
