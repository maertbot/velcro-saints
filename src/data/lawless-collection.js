export const lawlessCollection = [
  {
    id: 'lawless-crest', name: 'Lawless Family Crest', shape: 'shield', topText: '', bottomText: '', bannerText: 'LAWLESS', iconIds: ['eagle-spread','oak-tree','crown','guitar'], layout: 'quartered', palette: ['#1a1a1a','#4a5a3a','#e8e0d0','#8b7355'], production: { sizeInches: 4, merrowMm: 2.5 }
  },
  {
    id: 'jellytoes', name: 'Jellytoes Band Patch', shape: 'rocker', topText: 'JELLYTOES', bottomText: 'DAD BAND', centerText: '', iconIds: ['guitar','note'], layout: 'centered', palette: ['#0a0a0a','#2a8a7a','#e8e0d0','#d45a4a'], production: { sizeInches: 4, merrowMm: 2.5 }
  },
  {
    id: 'dispatch-press', name: 'Edgewater Dispatch Press Credential', shape: 'roundedRect', topText: 'EDGEWATER DISPATCH', bottomText: 'EDITOR IN CHIEF', centerText: 'PRESS', iconIds: ['wreath'], layout: 'centered', palette: ['#111319','#1a2a4a','#f1e6cd','#c4a44c'], production: { sizeInches: 3.5, merrowMm: 2.5 }
  },
  {
    id: 'roseburg-forest', name: 'Roseburg Forest Products', shape: 'shield', topText: 'ROSEBURG', bottomText: 'FOREST PRODUCTS', iconIds: ['fir-tree','crosscut-saw'], layout: 'centered', palette: ['#0a120a','#1a5a1a','#e8e0d0','#8b6a3a'], production: { sizeInches: 4, merrowMm: 2.5 }
  },
  {
    id: 'willagillespie-eagles', name: 'Willagillespie Eagles Volunteer', shape: 'circle', topText: 'WILLAGILLESPIE', bottomText: 'EAGLES', tabText: 'VOLUNTEER', iconIds: ['eagle-spread'], layout: 'centered', palette: ['#0a1a3a','#1a3a6a','#ffffff','#d4a44c'], production: { sizeInches: 4, merrowMm: 2.5 }
  },
  {
    id: 'maertbot-ops', name: 'Maertbot Operations', shape: 'pentagon', topText: 'MAERTBOT', bottomText: 'OPERATIONS', iconIds: ['crosshair'], layout: 'centered', palette: ['#0a0a0a','#1a1a1a','#d4944c','#e8e0d0'], production: { sizeInches: 4, merrowMm: 2.5 }
  },
  {
    id: 'big-bend-2026', name: 'Big Bend 2026 Expedition', shape: 'circle', topText: 'BIG BEND 2026', bottomText: 'CHISOS BASIN • TEXAS', iconIds: ['mountain','sun'], layout: 'centered', palette: ['#111111','#1a2a4a','#efe2c8','#8b7355'], production: { sizeInches: 4, merrowMm: 2.5 }
  }
];

export function createBlankPatch() {
  return {
    id: `custom-${Date.now()}`,
    name: 'Custom Patch',
    shape: 'circle',
    topText: 'VELCRO SAINTS',
    bottomText: 'CUSTOM',
    iconIds: ['shield-mark'],
    layout: 'centered',
    palette: ['#1a1a1a','#3a3e42','#e8e0d0','#d4944c'],
    production: { sizeInches: 4, merrowMm: 2.5 }
  };
}
