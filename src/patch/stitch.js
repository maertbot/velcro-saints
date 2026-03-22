export function stitchDefs() {
  return `
  <filter id="threadNoise" x="-20%" y="-20%" width="140%" height="140%">
    <feTurbulence type="fractalNoise" baseFrequency="1.1" numOctaves="3" seed="7" result="noise"/>
    <feColorMatrix in="noise" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .22 0" result="grain"/>
    <feBlend in="SourceGraphic" in2="grain" mode="multiply"/>
  </filter>
  <filter id="merrowShadow" x="-25%" y="-25%" width="150%" height="150%">
    <feDropShadow dx="0" dy="8" stdDeviation="7" flood-color="rgba(0,0,0,.45)"/>
  </filter>
  <pattern id="threadPattern" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(32)">
    <rect width="8" height="8" fill="rgba(255,255,255,0.02)"/>
    <path d="M-2 1.5 L10 1.5 M-2 4.5 L10 4.5 M-2 7.5 L10 7.5" stroke="rgba(255,255,255,0.11)" stroke-width="1.2" stroke-linecap="round"/>
    <path d="M-2 3 L10 3 M-2 6 L10 6" stroke="rgba(0,0,0,0.10)" stroke-width="0.8" stroke-linecap="round"/>
  </pattern>
  <pattern id="velcro" width="12" height="12" patternUnits="userSpaceOnUse">
    <rect width="12" height="12" fill="#8c8c86"/>
    <circle cx="3" cy="3" r="1.4" fill="#9e9e97"/><circle cx="9" cy="4" r="1.3" fill="#7a7a73"/><circle cx="6" cy="9" r="1.2" fill="#9b9b94"/>
  </pattern>`;
}
export function stitchOverlay(pathId) {
  return `<use href="#${pathId}" fill="url(#threadPattern)" opacity="0.8" filter="url(#threadNoise)"/>`;
}
export function merrowStroke(pathId, color = '#111') {
  return `<use href="#${pathId}" fill="none" stroke="${color}" stroke-width="26" stroke-linejoin="round" opacity="0.92" filter="url(#merrowShadow)"/><use href="#${pathId}" fill="none" stroke="rgba(255,255,255,.18)" stroke-width="10" stroke-dasharray="4 7" stroke-linecap="round" opacity="0.32"/><use href="#${pathId}" fill="none" stroke="rgba(0,0,0,.22)" stroke-width="32" stroke-linejoin="round" opacity="0.18"/>`;
}
