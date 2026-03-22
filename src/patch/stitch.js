export function stitchDefs() {
  return `
  <filter id="threadNoise" x="-20%" y="-20%" width="140%" height="140%">
    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="noise"/>
    <feColorMatrix in="noise" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .18 0" result="grain"/>
    <feBlend in="SourceGraphic" in2="grain" mode="multiply"/>
  </filter>
  <pattern id="threadPattern" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(32)">
    <rect width="10" height="10" fill="rgba(255,255,255,0.015)"/>
    <path d="M-2 2 L12 2 M-2 6 L12 6" stroke="rgba(255,255,255,0.09)" stroke-width="1.4" stroke-linecap="round"/>
    <path d="M-2 4 L12 4 M-2 8 L12 8" stroke="rgba(0,0,0,0.08)" stroke-width="0.7" stroke-linecap="round"/>
  </pattern>
  <pattern id="velcro" width="12" height="12" patternUnits="userSpaceOnUse">
    <rect width="12" height="12" fill="#8c8c86"/>
    <circle cx="3" cy="3" r="1.4" fill="#9e9e97"/><circle cx="9" cy="4" r="1.3" fill="#7a7a73"/><circle cx="6" cy="9" r="1.2" fill="#9b9b94"/>
  </pattern>`;
}
export function stitchOverlay(pathId) {
  return `<use href="#${pathId}" fill="url(#threadPattern)" opacity="0.72" filter="url(#threadNoise)"/>`;
}
export function merrowStroke(pathId, color = '#111') {
  return `<use href="#${pathId}" fill="none" stroke="${color}" stroke-width="20" stroke-linejoin="round" opacity="0.96"/><use href="#${pathId}" fill="none" stroke="rgba(255,255,255,.12)" stroke-width="6" stroke-dasharray="4 7" stroke-linecap="round" opacity="0.25"/>`;
}
