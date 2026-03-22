import { symbols } from '../symbols/index.js';

const palettePresets = {
  blackgold: ['#1a1a1a', '#c4a44c', '#e8e0d0', '#3a3e42'],
  olive: ['#1a1a1a', '#4a5a3a', '#8b7355', '#e8e0d0'],
  navy: ['#1a2a4a', '#c4a44c', '#e8e0d0', '#111111'],
  morale: ['#141414', '#2a8a7a', '#d45a4a', '#f2e7cf'],
};

export function parsePrompt(prompt) {
  const raw = prompt.trim();
  const text = raw.toLowerCase();
  const shape = ['shield','rocker','rounded rectangle','rounded rect','rectangle','rect','circle','pentagon'].find((s) => text.includes(s)) || 'circle';
  const matchedShape = shape.includes('rounded') ? 'roundedRect' : shape === 'rectangle' ? 'rect' : shape;
  const palette = text.includes('gold') ? palettePresets.blackgold : text.includes('olive') ? palettePresets.olive : text.includes('navy') ? palettePresets.navy : text.includes('teal') || text.includes('coral') ? palettePresets.morale : palettePresets.blackgold;
  const iconMatches = symbols.filter((s) => [s.id, s.name, ...s.tags].join(' ').toLowerCase().split(' ').some((w) => text.includes(w))).slice(0, 4);
  const topCaps = raw.match(/\b([A-Z][A-Z\s]{3,})\b/g)?.map((s) => s.trim()) || [];
  const topText = topCaps[0] || (text.includes('alpha team') ? 'ALPHA TEAM' : 'VELCRO SAINTS');
  const bottomText = topCaps[1] || (text.includes('operations') ? 'OPERATIONS' : 'UNIT PATCH');
  return {
    id: `generated-${Date.now()}`,
    name: raw || 'Generated Patch',
    shape: matchedShape,
    palette,
    topText,
    bottomText,
    centerText: matchedShape === 'roundedRect' || text.includes('press') ? 'PRESS' : '',
    subText: matchedShape === 'roundedRect' ? 'GENERATED IN THE FIELD' : '',
    bannerText: matchedShape === 'shield' ? topText : '',
    lane: text.includes('morale') ? 'morale' : 'subdued',
    iconIds: iconMatches.length ? iconMatches.map((s) => s.id) : ['eagle-spread'],
    layout: text.includes('quartered') || text.includes('crest') ? 'quartered' : iconMatches.length > 1 ? 'stacked' : 'centered',
    production: { sizeInches: matchedShape === 'roundedRect' ? 3.5 : 4, merrowMm: 2.5 }
  };
}
