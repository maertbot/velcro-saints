import { symbols, categories } from './library.js';
export { symbols, categories };
export const symbolMap = Object.fromEntries(symbols.map((s) => [s.id, s]));
export const searchSymbols = (query = '', category = 'all') => {
  const q = query.trim().toLowerCase();
  return symbols.filter((symbol) => {
    const categoryOk = category === 'all' || symbol.category === category;
    const queryOk = !q || [symbol.id, symbol.name, symbol.category, ...symbol.tags].join(' ').toLowerCase().includes(q);
    return categoryOk && queryOk;
  });
};
