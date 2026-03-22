import './style.css';
import { lawlessCollection, createBlankPatch } from './data/lawless-collection.js';
import { renderApp } from './ui/app.js';

renderApp(document.querySelector('#app'), {
  collection: lawlessCollection,
  activePatch: structuredClone(lawlessCollection[0]),
  blankPatch: createBlankPatch,
});
