# Velcro Saints — Design Spec (Make Good Art Workflow)

## Phase 0 — Intake (done via interview)
1. **Purpose:** Tactical patch design studio — production-ready insignias
2. **Audience:** Matt + anyone who appreciates mil-spec / morale patch culture
3. **Medium:** SVG vector patches rendered with stitch texture, flat product-shot mockups
4. **Must include:** 200+ symbol library, prompt→generate→edit flow, production constraints, The Lawless Collection
5. **Style:** Mil-spec subdued core + morale patch lane. Trauma.works / EOTech / mission-patch energy. Controlled typography, geometric precision, matte surfaces.

## Phase 1 — Creative Brief

**North Star:** A premium tactical-patch foundry that generates production-ready insignias with the precision of military heraldry and the personality of morale patch culture. The tool should feel like a skunkworks design lab — dark, focused, competent. Every patch that comes out should look like it was made by someone who gives a shit. The Lawless Collection is the proof-of-concept: six patches that tell the story of one family's actual life rendered in the language of unit insignias.

**Emotion:** Precise, confident, slightly irreverent, proud without being loud
**Context:** Web app, desktop-first, shareable product shots
**Style rules:**
1. Dark UI (near-black) with warm accent colors — the patches are the color, not the interface
2. Typography: DM Mono for data/specs, DM Sans for labels. No decorative fonts in the UI.
3. Patch designs use classic mil-spec conventions: arc text, centered icons, shield/circle/tab shapes, merrowed borders
4. Stitch texture is subtle — suggests embroidery without looking like a Photoshop filter
5. Color palettes per patch are limited (real embroidery = limited thread colors, typically 4-8)
6. Every patch must read at thumbnail size (the "3-second read" test)

## Phase 2 — Concept Divergence: The Lawless Collection

### 10 Visual Hooks for the 6 patches:

**1. Lawless Family Crest**
- Shield shape, quartered: eagle (strength), tree (Oregon/timber), book (curiosity), guitar (music)
- Banner below: "LAWLESS" in stencil caps
- Subdued olive/black/cream

**2. Alt Family Crest — Circle format**
- Round patch, "LAWLESS" arcing top, "EST. 2016" arcing bottom (year the twins were born)
- Center: mountain silhouette with two small figures (the twins) and a tree
- PNW energy — Douglas fir, rain, home

**3. Jellytoes Band Patch**
- Rocker tab shape (arc top, flat bottom)
- "JELLYTOES" in distressed stencil
- Center icon: jellyfish with guitar neck tentacles
- Morale lane — bright colors allowed

**4. Edgewater Dispatch Press Credential**
- Rectangle/tab shape like a media credential
- "EDGEWATER DISPATCH" top arc
- "PRESS" large center
- "EDITOR IN CHIEF" bottom
- Issue number + year
- Subdued — looks like it belongs on a vest

**5. Roseburg Forest Products Unit Patch**
- Shield or circle
- Tree/timber industry icon (crosscut saw, log end, tree silhouette)
- "ROSEBURG" top arc, "FOREST PRODUCTS" bottom
- Corporate but with mil-spec edge — like a unit patch for a timber battalion

**6. Willagillespie Eagles Parent Volunteer**
- Circle patch, school colors
- Eagle silhouette center
- "WILLAGILLESPIE EAGLES" arc
- "VOLUNTEER" tab below
- Clean, earnest, school-pride energy

**7. Maertbot Operations Patch**
- The darkest, most tactical patch in the set
- Eagle icon (Maertbot's emoji 🦅)
- "MAERTBOT" top arc, "OPERATIONS" bottom
- Circuitry/data motifs integrated into the border
- Subdued black/dark gray/amber

**8. Alt Maertbot — Mission Patch style**
- Round, NASA mission-patch inspired
- Stars, orbital paths, the eagle
- "MAERTBOT • AI OPERATIONS • EST. 2026"
- More playful than #7

**9. Lawless Dad Band Morale Patch**
- Rectangle morale patch format
- "DAD BAND" in bold
- Crossed drumsticks + guitar below
- "STILL GOT IT" or "PRACTICE TBD" subtitle
- Pure morale lane — funny, self-deprecating

**10. Big Bend 2026 Trip Patch**
- Circle with desert landscape silhouette (mesa, cactus, starry sky)
- "BIG BEND 2026" arc text
- "LAWLESS EXPEDITION" bottom
- Commemorative — like a national park badge

### Best 3 expanded:

**A. Lawless Family Crest (#1)**
- Focal: quartered shield with four meaningful symbols
- Setting: standalone on dark background
- Symbolic: each quadrant represents a pillar (strength/nature/learning/music)
- Differentiator: not generic heraldry — each symbol maps to real family identity
- Works at all sizes because the shield shape and "LAWLESS" banner are readable even tiny

**B. Maertbot Operations (#7)**
- Focal: eagle in center, clean and sharp
- Setting: tactical black, minimal color (amber accents only)
- Symbolic: the AI partner as a black-ops unit
- Differentiator: circuitry/data patterns woven into the traditional patch border — tech meets tradition
- Maximum cool factor of the set

**C. Big Bend 2026 (#10)**
- Focal: desert landscape silhouette against starry sky
- Setting: circular badge format
- Symbolic: family adventure rendered as expedition insignia
- Differentiator: commemorative/personal — this patch represents a specific memory
- Timely — you're leaving for this trip tomorrow

### Chosen direction for the first drop:
All six from the interview spec (#1 Lawless Crest, #3 Jellytoes, #4 Edgewater Dispatch, #5 Roseburg, #6 Willagillespie, #7 Maertbot Ops), but I'm adding #10 (Big Bend) as a bonus 7th patch because you're literally going there tomorrow.

## Phase 3 — Thumbnail Blueprints (per patch)

### THUMB: Lawless Family Crest
- Focal: Shield with quartered icons
- Shape: Traditional heraldic shield (pointed bottom)
- Big shapes: shield outline, four quadrants, banner scroll below
- Eye path: banner "LAWLESS" → center cross dividing quadrants → individual icons
- Value plan: 70% dark (olive/black), 20% mid (sage/gray), 10% light (cream text/icons)
- Depth: flat (patch has no depth — all graphic)
- Risk: too busy at small size → Fix: simplify icons to silhouettes only, no interior detail

### THUMB: Jellytoes
- Focal: Jellyfish-guitar hybrid icon
- Shape: Rocker arc tab
- Big shapes: arc text area, center icon, flat bottom edge
- Eye path: "JELLYTOES" text → jellyfish icon → tentacle-guitar-neck detail
- Value plan: 60% dark, 25% bright accent (teal/coral), 15% light text
- Risk: jellyfish-guitar mashup reads as "blob" → Fix: guitar neck as one strong tentacle, rest simple

### THUMB: Edgewater Dispatch
- Focal: "PRESS" large center text
- Shape: Vertical rectangle with rounded corners (press credential)
- Eye path: "EDGEWATER DISPATCH" → "PRESS" → "EDITOR IN CHIEF"
- Value plan: 80% dark (navy/black), 15% mid, 5% cream/gold text
- Risk: looks like a generic badge → Fix: add issue number, small quill or newspaper icon

### THUMB: Roseburg Forest Products
- Focal: Tree/timber icon
- Shape: Circle
- Eye path: "ROSEBURG" arc → tree silhouette → "FOREST PRODUCTS" → small detail (crosscut saw, log end)
- Value plan: 65% forest green, 25% dark brown/black, 10% cream
- Risk: too corporate → Fix: add a small axe or saw icon for industrial edge

### THUMB: Willagillespie Eagles
- Focal: Eagle silhouette
- Shape: Circle with "VOLUNTEER" tab
- Eye path: Eagle → "WILLAGILLESPIE EAGLES" → "VOLUNTEER"
- Value plan: school colors (need to check — likely blue/gold or similar)
- Risk: too generic school patch → Fix: make the eagle sharp and distinctive, not clip-art

### THUMB: Maertbot Operations
- Focal: Eagle icon with tech border
- Shape: Circle
- Eye path: Eagle → "MAERTBOT" → border circuit pattern → "OPERATIONS"
- Value plan: 85% black/dark gray, 10% amber, 5% white text
- Risk: "tech" border looks cheesy → Fix: subtle — thin circuit traces, not glowing neon

### THUMB: Big Bend 2026
- Focal: Desert landscape silhouette (mesa + saguaro + stars)
- Shape: Circle
- Eye path: landscape silhouette → stars above → "BIG BEND 2026" → "LAWLESS EXPEDITION"
- Value plan: 60% dark (night sky), 25% mid (terrain), 15% light (stars/text)
- Risk: silhouette is generic southwest → Fix: include the specific Window/Chisos Basin profile

## Phase 5 — Color Palettes

### Subdued Core Palette (used across most patches)
- Ranger Black: #1a1a1a
- OD Green: #4a5a3a
- Coyote Brown: #8b7355
- Cream: #e8e0d0
- Gunmetal: #3a3e42

### Accent Colors (morale lane)
- Amber: #d4944c (Maertbot accent)
- Teal: #2a8a7a (Jellytoes)
- Coral: #d45a4a (morale patches)
- Navy: #1a2a4a (Dispatch, Eagles)
- Forest: #2a4a2a (Roseburg)

### Per-patch palette (4-6 colors each, real embroidery constraint):
- **Lawless Crest:** black, OD green, cream, coyote brown
- **Jellytoes:** black, teal, coral, cream
- **Dispatch:** navy, black, gold (#c4a44a), cream
- **Roseburg:** forest green, black, cream, coyote brown
- **Eagles:** navy, gold, white, black
- **Maertbot:** black, gunmetal, amber, cream
- **Big Bend:** black, coyote brown, cream, navy (night sky)

## Phase 6 — Build Plan (for the app, not individual patches)

### App Structure:
1. **Dark chrome UI shell** — near-black sidebar + workspace
2. **Prompt input** → generates patch via procedural grammar
3. **Live SVG canvas** — patch renders in real-time as you edit
4. **Element panel** — select/move/swap any icon, text, color
5. **Symbol browser** — 200+ categorized vector icons
6. **Specs panel** — thread count, stitch density, production notes
7. **Export** — SVG, PNG (with stitch texture), production spec PDF
8. **Gallery** — The Lawless Collection as starter showcase

### Symbol Library Categories (200+ total):
Military (50): eagles, shields, swords, arrows, stars, chevrons, wings, anchors, crosshairs, dog tags, helmets, parachutes, rifles, grenades, medals...
Nature (40): trees (pine, oak, palm), mountains, waves, sun, moon, stars, animals (bear, wolf, elk, fish, horse), leaves, rivers...
Music (25): guitars, bass, drums, mic, headphones, speakers, notes, clef, piano keys, amp, pedal, pick, vinyl...
Heraldic (25): lions, eagles, crowns, scrolls, wreaths, fleur-de-lis, crosses, keys, scales...
Tools/Industry (25): axes, saws, hammers, wrenches, gears, anvils, chains, bolts, logs...
Typography Ornaments (20): banners, scrolls, ribbons, frames, dividers, corner pieces...
Misc/Morale (25): skulls, dice, cards, pizza, coffee, lightning, flames, bombs, rockets, snakes...

### Patch Shape Templates:
- Circle (standard unit patch)
- Shield (heraldic)
- Rocker/Arc tab (biker/band)
- Rectangle (morale/flag)
- Pentagon (CONUS-style)
- Rounded rectangle (press credential)
- Custom (user draws outline)

## Phase 7 — Quality Gates (per patch in the Lawless Collection)
Each patch must pass:
1. ✅ 3-second read — can you identify the patch at thumbnail size?
2. ✅ Squint test — does the value structure hold when blurred?
3. ✅ Thread-count check — is the design achievable with ≤8 thread colors?
4. ✅ Minimum detail size — no elements smaller than 1mm at actual patch scale
5. ✅ Text legibility — all text readable at intended patch size (3-4 inch diameter)

## Phase 8 — Top 3 Risks + Mitigations
1. **Symbol library is thin at launch** → Start with 80 high-quality icons, not 200 mediocre ones. Expand later. Quality > quantity.
2. **Stitch texture looks fake** → Use real stitch pattern references (Bézier stitch lines, not a Photoshop overlay). Study actual embroidered patches for reference.
3. **Prompt→design generation is unpredictable** → Constrain the grammar heavily. A prompt maps to: shape + icon + top text + bottom text + palette. Not freeform image generation.
