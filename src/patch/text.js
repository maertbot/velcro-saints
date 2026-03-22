export const pathId = (prefix, id) => `${prefix}-${id}`;
export function createArcPath(id, radius = 184, position = 'top') {
  const sweep = position === 'top' ? '1' : '0';
  const y = 250;
  return `<path id="${id}" d="M ${250 - radius} ${y} A ${radius} ${radius} 0 0 ${sweep} ${250 + radius} ${y}" fill="none" />`;
}
export function arcText({ id, text, radius, position = 'top', size = 30, letterSpacing = 3, fill = '#e8e0d0' }) {
  if (!text) return '';
  const dy = position === 'top' ? -10 : 36;
  return `${createArcPath(id, radius, position)}<text font-size="${size}" font-family="DM Sans, sans-serif" font-weight="700" letter-spacing="${letterSpacing}" fill="${fill}" text-rendering="geometricPrecision"><textPath href="#${id}" startOffset="50%" text-anchor="middle" dominant-baseline="middle" dy="${dy}">${text}</textPath></text>`;
}
export function centerText({ text, y = 250, size = 40, fill = '#e8e0d0', weight = 700, family = 'DM Sans, sans-serif' }) {
  if (!text) return '';
  return `<text x="250" y="${y}" text-anchor="middle" font-size="${size}" font-family="${family}" font-weight="${weight}" fill="${fill}" letter-spacing="2">${text}</text>`;
}
export function bannerText({ text, fill = '#1a1a1a', size = 34 }) {
  if (!text) return '';
  return `<g class="banner-text"><text x="250" y="398" text-anchor="middle" font-size="${size}" font-family="DM Sans, sans-serif" font-weight="700" fill="${fill}" letter-spacing="4">${text}</text></g>`;
}
