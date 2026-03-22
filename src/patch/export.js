import { renderPatchSvg, getPatchMetrics } from './renderer.js';

export function downloadFile(name, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = name; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
export function exportSvg(patch) {
  downloadFile(`${patch.id}.svg`, renderPatchSvg(patch), 'image/svg+xml');
}
export function exportSpecs(patch) {
  const metrics = getPatchMetrics(patch);
  const text = [`${patch.name}`,`Shape: ${patch.shape}`,`Palette: ${metrics.colors.join(', ')}`,`Thread colors: ${metrics.colorCount}`,`Estimated stitches: ${metrics.stitchEstimate}`,`Size: ${patch.production?.sizeInches || 4} inches`,`Merrow border: ${patch.production?.merrowMm || 2.5} mm`].join('\n');
  downloadFile(`${patch.id}-spec.txt`, text, 'text/plain');
}
export function exportPng(patch) {
  const svg = renderPatchSvg(patch, { showVelcro: true });
  const img = new Image();
  const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  img.onload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1200; canvas.height = 1200;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#0d0d0d'; ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    canvas.toBlob((png) => downloadFile(`${patch.id}.png`, png, 'image/png'), 'image/png');
    URL.revokeObjectURL(url);
  };
  img.src = url;
}
