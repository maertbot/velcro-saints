export const lawlessCollection = [
  {
    id: 'lawless-crest', name: 'Lawless Family Crest', shape: 'shield', topText: '', bottomText: '', bannerText: 'LAWLESS', iconIds: ['eagle-spread','fir-tree','scroll','guitar'], layout: 'quartered', palette: ['#1a1a1a','#4a5a3a','#e8e0d0','#8b7355'], production: { sizeInches: 4, merrowMm: 2.5 }
  },
  {
    id: 'jellytoes', name: 'Jellytoes Band Patch', shape: 'rocker', topText: 'JELLYTOES', bottomText: 'DAD BAND', centerText: '', iconIds: ['rocket','guitar'], layout: 'centered', palette: ['#121212','#2a8a7a','#f3ead8','#d45a4a'], production: { sizeInches: 4, merrowMm: 2.5 }
  },
  {
    id: 'dispatch-press', name: 'Edgewater Dispatch Press Credential', shape: 'roundedRect', topText: 'EDGEWATER DISPATCH', bottomText: 'EDITOR IN CHIEF', centerText: 'PRESS', subText: 'No. 4 • 2026', iconIds: ['scroll'], layout: 'centered', palette: ['#111319','#1a2a4a','#f1e6cd','#c4a44c'], production: { sizeInches: 3.5, merrowMm: 2.5 }
  },
  {
    id: 'roseburg-forest', name: 'Roseburg Forest Products', shape: 'circle', topText: 'ROSEBURG', bottomText: 'FOREST PRODUCTS', iconIds: ['fir-tree','crosscut-saw'], layout: 'centered', palette: ['#111511','#2a4a2a','#efe3c8','#8b7355'], production: { sizeInches: 4, merrowMm: 2.5 }
  },
  {
    id: 'willagillespie-eagles', name: 'Willagillespie Eagles Volunteer', shape: 'circle', topText: 'WILLAGILLESPIE EAGLES', bottomText: '', tabText: 'VOLUNTEER', iconIds: ['eagle-spread'], layout: 'centered', palette: ['#111319','#1a2a4a','#ffffff','#c4a44c'], production: { sizeInches: 4, merrowMm: 2.5 }
  },
  {
    id: 'maertbot-ops', name: 'Maertbot Operations', shape: 'circle', topText: 'MAERTBOT', bottomText: 'OPERATIONS', iconIds: ['eagle-spread'], layout: 'centered', palette: ['#111111','#3a3e42','#efe6d2','#d4944c'], production: { sizeInches: 4, merrowMm: 2.5 }, metaText: 'AI OPERATIONS • EST. 2026'
  },
  {
    id: 'big-bend-2026', name: 'Big Bend 2026 Expedition', shape: 'circle', topText: 'BIG BEND 2026', bottomText: 'LAWLESS EXPEDITION', iconIds: ['mountain','starburst'], layout: 'centered', palette: ['#111111','#1a2a4a','#efe2c8','#8b7355'], production: { sizeInches: 4, merrowMm: 2.5 }, metaText: 'CHISOS BASIN • TEXAS'
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
