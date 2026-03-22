import { renderPatchSvg, getPatchMetrics } from '../patch/renderer.js';
import { categories, searchSymbols, symbolMap } from '../symbols/index.js';
import { parsePrompt } from '../patch/grammar.js';
import { exportPng, exportSvg, exportSpecs } from '../patch/export.js';

export function renderApp(root, state) {
  const store = {
    collection: state.collection,
    activePatch: state.activePatch,
    iconQuery: '',
    category: 'all',
    selectedSlot: 0,
    stitchTexture: true,
    blankPatch: state.blankPatch,
  };

  const setPatch = (patch) => { store.activePatch = structuredClone(patch); paint(); };
  const updatePatch = (fn) => { fn(store.activePatch); paint(); };

  const iconGrid = () => searchSymbols(store.iconQuery, store.category).map((symbol) => `
    <button class="symbol-card ${store.activePatch.iconIds[store.selectedSlot] === symbol.id ? 'active' : ''}" data-symbol="${symbol.id}">
      <svg viewBox="0 0 100 100">${symbol.paths.map((d) => `<path d="${d}"/>`).join('')}</svg>
      <span>${symbol.name}</span>
    </button>`).join('');

  const gallery = () => store.collection.map((patch) => `
    <button class="gallery-card ${store.activePatch.id === patch.id ? 'active' : ''}" data-gallery="${patch.id}">
      <div class="thumb">${renderPatchSvg(patch)}</div>
      <div class="gallery-meta"><strong>${patch.name}</strong><span>${patch.shape} · ${patch.palette.length} colors</span></div>
    </button>`).join('');

  const metricsPanel = () => {
    const m = getPatchMetrics(store.activePatch);
    const items = [
      ['Thread colors', `${m.colorCount}/8`, m.passesColors],
      ['Min stroke', `${m.minStrokePx.toFixed(1)} px`, true],
      ['Text legibility', 'Pass', m.textLegible],
      ['Thumbnail read', 'Pass', m.thumbnailReadable],
      ['Est. stitches', `${m.stitchEstimate}`, true],
    ];
    return items.map(([label, value, ok]) => `<div class="metric ${ok ? 'ok' : 'bad'}"><span>${label}</span><strong>${value}</strong></div>`).join('');
  };

  function paint() {
    const p = store.activePatch;
    root.innerHTML = `
      <div class="shell">
        <aside class="sidebar left">
          <div class="brand"><span>VELCRO SAINTS</span><small>premium tactical-patch foundry</small></div>
          <section class="panel">
            <div class="panel-head"><h3>Symbol Browser</h3><span>${searchSymbols(store.iconQuery, store.category).length} icons</span></div>
            <input class="search" placeholder="search symbols" value="${store.iconQuery}">
            <div class="chips"><button class="chip ${store.category === 'all' ? 'active' : ''}" data-cat="all">All</button>${categories.map((c)=>`<button class="chip ${store.category === c ? 'active' : ''}" data-cat="${c}">${c}</button>`).join('')}</div>
            <div class="slot-tabs">${p.iconIds.map((id, i) => `<button class="slot ${store.selectedSlot === i ? 'active' : ''}" data-slot="${i}">slot ${i+1}<span>${symbolMap[id]?.name || id}</span></button>`).join('')}</div>
            <div class="symbol-grid">${iconGrid()}</div>
          </section>
        </aside>
        <main class="main">
          <header class="toolbar">
            <div>
              <div class="title">${p.name}</div>
              <div class="subtitle">${p.shape} • ${p.production?.sizeInches || 4}\" patch • dark shop floor UI</div>
            </div>
            <div class="actions">
              <button data-action="new">New</button>
              <button data-export="svg">Export SVG</button>
              <button data-export="png" class="primary">Export PNG</button>
              <button data-export="specs">Specs</button>
            </div>
          </header>
          <section class="canvas-panel panel">
            <div class="preview-wrap">
              <div class="preview-stage ${store.stitchTexture ? 'texture-on' : ''}">${renderPatchSvg(p, { showVelcro: store.stitchTexture })}</div>
              <div class="specs-inline">
                <label><input type="checkbox" ${store.stitchTexture ? 'checked' : ''} data-toggle="texture"> stitch texture + velcro peel</label>
              </div>
              <div class="metrics">${metricsPanel()}</div>
            </div>
          </section>
          <section class="prompt-strip panel">
            <div class="prompt-label">Prompt → generate → edit</div>
            <div class="prompt-row"><input id="promptInput" placeholder="military unit patch, circle, eagle, ALPHA TEAM, black and gold"><button data-action="generate" class="primary">Generate</button></div>
          </section>
          <section class="gallery panel">
            <div class="panel-head"><h3>The Lawless Collection</h3><span>7 starter patches</span></div>
            <div class="gallery-grid">${gallery()}</div>
          </section>
        </main>
        <aside class="sidebar right">
          <section class="panel">
            <div class="panel-head"><h3>Element Editor</h3><span>live SVG</span></div>
            <label>Patch name<input data-field="name" value="${p.name}"></label>
            <label>Shape<select data-field="shape">${['circle','shield','rocker','roundedRect','rect','pentagon'].map((s)=>`<option value="${s}" ${p.shape===s?'selected':''}>${s}</option>`).join('')}</select></label>
            <label>Top text<input data-field="topText" value="${p.topText || ''}"></label>
            <label>Bottom text<input data-field="bottomText" value="${p.bottomText || ''}"></label>
            <label>Banner text<input data-field="bannerText" value="${p.bannerText || ''}"></label>
            <label>Center text<input data-field="centerText" value="${p.centerText || ''}"></label>
            <label>Tab text<input data-field="tabText" value="${p.tabText || ''}"></label>
            <label>Meta text<input data-field="metaText" value="${p.metaText || ''}"></label>
            <label>Layout<select data-field="layout">${['centered','stacked','quartered'].map((s)=>`<option value="${s}" ${p.layout===s?'selected':''}>${s}</option>`).join('')}</select></label>
            <div class="palette-editor">${p.palette.map((c, i)=>`<label>Color ${i+1}<input type="color" data-palette="${i}" value="${c}"></label>`).join('')}</div>
          </section>
        </aside>
      </div>`;

    root.querySelector('.search').addEventListener('input', (e) => { store.iconQuery = e.target.value; paint(); });
    root.querySelectorAll('[data-cat]').forEach((el) => el.addEventListener('click', () => { store.category = el.dataset.cat; paint(); }));
    root.querySelectorAll('[data-slot]').forEach((el) => el.addEventListener('click', () => { store.selectedSlot = Number(el.dataset.slot); paint(); }));
    root.querySelectorAll('[data-symbol]').forEach((el) => el.addEventListener('click', () => updatePatch((patch) => { patch.iconIds[store.selectedSlot] = el.dataset.symbol; })));
    root.querySelectorAll('[data-gallery]').forEach((el) => el.addEventListener('click', () => setPatch(store.collection.find((p) => p.id === el.dataset.gallery))));
    root.querySelectorAll('[data-field]').forEach((el) => el.addEventListener('input', () => updatePatch((patch) => { patch[el.dataset.field] = el.value; })));
    root.querySelectorAll('[data-palette]').forEach((el) => el.addEventListener('input', () => updatePatch((patch) => { patch.palette[Number(el.dataset.palette)] = el.value; })));
    root.querySelector('[data-toggle="texture"]').addEventListener('change', (e) => { store.stitchTexture = e.target.checked; paint(); });
    root.querySelector('[data-action="generate"]').addEventListener('click', () => {
      const next = parsePrompt(root.querySelector('#promptInput').value);
      setPatch(next);
    });
    root.querySelector('[data-action="new"]').addEventListener('click', () => setPatch(store.blankPatch()));
    root.querySelector('[data-export="svg"]').addEventListener('click', () => exportSvg(p));
    root.querySelector('[data-export="png"]').addEventListener('click', () => exportPng(p));
    root.querySelector('[data-export="specs"]').addEventListener('click', () => exportSpecs(p));
    window.onkeydown = (e) => {
      if (e.key.toLowerCase() === 'g' && !e.metaKey && !e.ctrlKey) root.querySelector('#promptInput')?.focus();
      if (e.key.toLowerCase() === 'e' && !e.metaKey && !e.ctrlKey) exportPng(store.activePatch);
    };
  }

  paint();
}
