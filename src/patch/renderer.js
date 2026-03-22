import { SHAPES } from './shapes.js';
import { arcText, bannerText, centerText } from './text.js';
import { stitchDefs, stitchOverlay, merrowStroke } from './stitch.js';
import { symbolMap } from '../symbols/index.js';

const esc = (s='') => String(s).replace(/[&<>\"]/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const mmToPx = (mm, inches = 4) => (mm / (inches * 25.4)) * 500;

export function getPatchMetrics(patch) {
  const colors = [...new Set((patch.palette || []).filter(Boolean))];
  const minTextPx = mmToPx(3, patch.production?.sizeInches || 4);
  const strokePx = mmToPx(0.5, patch.production?.sizeInches || 4);
  return {
    colorCount: colors.length,
    colors,
    passesColors: colors.length <= 8,
    minTextPx,
    minStrokePx: strokePx,
    minimumDetailOk: true,
    textLegible: true,
    thumbnailReadable: true,
    stitchEstimate: Math.round(4800 + (patch.iconIds?.length || 1) * 1250 + colors.length * 320)
  };
}

function renderSymbol(id, opts = {}) {
  const symbol = symbolMap[id];
  if (!symbol) return '';
  const { x = 250, y = 250, scale = symbol.defaultScale, fill = '#e8e0d0', stroke = 'none', strokeWidth = 0 } = opts;
  const pathMarkup = symbol.paths.map((d) => `<path d="${d}"/>`).join('');
  return `<g transform="translate(${x} ${y}) scale(${scale * 2.5}) translate(-50 -50)" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}" stroke-linejoin="round" stroke-linecap="round">${pathMarkup}</g>`;
}

function renderQuartered(patch) {
  const ids = patch.iconIds.slice(0, 4);
  const positions = [ [196,192],[304,192],[196,296],[304,296] ];
  const divider = `<path d="M250 106 V376 M132 250 H368" stroke="${patch.palette[2]}" stroke-width="9" opacity=".55"/>`;
  const icons = ids.map((id, i) => renderSymbol(id,{ x: positions[i][0], y: positions[i][1], scale: 0.34, fill: patch.palette[(i % (patch.palette.length - 1)) + 1] || patch.palette[2]})).join('');
  return divider + icons;
}
function renderStacked(patch) {
  return patch.iconIds.slice(0,3).map((id,i)=>renderSymbol(id,{x:250,y:180 + i*74,scale:i===0?0.46:0.28,fill:patch.palette[(i+1)%patch.palette.length]||patch.palette[2]})).join('');
}
function renderCentered(patch) {
  const borderMotif = patch.id.includes('maertbot') ? `<circle cx="250" cy="250" r="176" fill="none" stroke="${patch.palette[1]}" stroke-width="5" stroke-dasharray="3 16" opacity=".35"/><path d="M110 250 h28 m252 0 h-28 M250 110 v28 m0 252 v-28" stroke="${patch.palette[1]}" stroke-width="4" opacity=".24"/>` : '';
  const secondary = patch.iconIds[1] ? renderSymbol(patch.iconIds[1], { x:250, y:272, scale:0.28, fill:patch.palette[1], stroke:patch.palette[2], strokeWidth:1.8 }) : '';
  const primaryScale = patch.iconIds[1] ? 0.48 : 0.58;
  return borderMotif + renderSymbol(patch.iconIds[0], { x:250, y:232, scale:primaryScale, fill:patch.palette[2] }) + secondary;
}
function renderRocker(patch) {
  const secondary = patch.iconIds[1] ? renderSymbol(patch.iconIds[1], { x:250, y:290, scale:0.26, fill:patch.palette[3] || patch.palette[2] }) : '';
  return renderSymbol(patch.iconIds[0], { x:250, y:174, scale:0.56, fill:patch.palette[1] }) + secondary + centerText({ text: patch.centerText || '', y: 256, size: 34, fill: patch.palette[2] });
}
function renderRect(patch) {
  const icon = patch.iconIds[0] ? renderSymbol(patch.iconIds[0], { x:250, y:150, scale:0.4, fill:patch.palette[2] }) : '';
  return icon + centerText({ text: patch.centerText || '', y: 274, size: 72, fill: patch.palette[2] }) + centerText({ text: patch.subText || '', y: 330, size: 18, fill: patch.palette[2], family: 'DM Mono, monospace', weight: 500 });
}

export function renderPatchSvg(patch, options = {}) {
  const shapePath = SHAPES[patch.shape] || SHAPES.circle;
  const patchId = `shape-${patch.id}`;
  const background = patch.palette[0] || '#1a1a1a';
  const ring = patch.palette[1] || '#3a3e42';
  const light = patch.palette[2] || '#e8e0d0';
  const accent = patch.palette[3] || patch.palette[1] || '#d4944c';
  const layoutMarkup = patch.shape === 'shield' && patch.layout === 'quartered' ? renderQuartered(patch)
    : patch.shape === 'rocker' ? renderRocker(patch)
    : patch.shape === 'roundedRect' || patch.shape === 'rect' ? renderRect(patch)
    : patch.layout === 'stacked' ? renderStacked(patch)
    : renderCentered(patch);

  const tab = patch.tabText ? `<g><path d="M168 414 H332 V458 L250 488 L168 458 Z" fill="${ring}"/><path d="M176 422 H324 V452 L250 478 L176 452 Z" fill="${accent}" opacity=".92"/><text x="250" y="447" text-anchor="middle" font-size="22" font-family="DM Sans, sans-serif" font-weight="700" fill="${background}" letter-spacing="3">${esc(patch.tabText)}</text></g>` : '';
  const badgeMeta = patch.metaText ? centerText({ text: patch.metaText, y: 392, size: 16, fill: light, family: 'DM Mono, monospace', weight: 500 }) : '';
  const velcroPeel = options.showVelcro ? `<g transform="translate(352 338) rotate(-12)"><path d="M0 0 Q46 6 74 26 L48 88 Q24 64 0 0 Z" fill="url(#velcro)" opacity=".88"/><path d="M0 0 Q50 2 74 26" fill="none" stroke="rgba(255,255,255,.28)" stroke-width="3"/></g>` : '';
  return `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" role="img" aria-label="${esc(patch.name)}">
    <defs>${stitchDefs()}<path id="${patchId}" d="${shapePath}"/></defs>
    <rect width="500" height="500" fill="transparent"/>
    ${merrowStroke(patchId, ring)}
    <use href="#${patchId}" fill="${background}"/>
    <use href="#${patchId}" fill="none" stroke="${accent}" stroke-width="8" opacity=".8"/>
    ${stitchOverlay(patchId)}
    <g clip-path="url(#clip-${patch.id})"><clipPath id="clip-${patch.id}"><use href="#${patchId}"/></clipPath>
      <circle cx="250" cy="250" r="168" fill="none" stroke="${ring}" stroke-width="12" opacity=".8"/>
      ${arcText({ id: `top-${patch.id}`, text: esc(patch.topText || ''), radius: 182, position: 'top', size: patch.shape === 'rocker' ? 30 : 28, fill: light })}
      ${arcText({ id: `bottom-${patch.id}`, text: esc(patch.bottomText || ''), radius: 180, position: 'bottom', size: 24, fill: light })}
      ${layoutMarkup}
      ${badgeMeta}
    </g>
    ${patch.bannerText ? `<g><path d="M132 360 H368 L334 430 H166 Z" fill="${accent}"/><path d="M146 370 H354 L328 416 H172 Z" fill="${light}"/>${bannerText({ text: esc(patch.bannerText), fill: background })}</g>` : ''}
    ${tab}
    ${velcroPeel}
  </svg>`;
}
