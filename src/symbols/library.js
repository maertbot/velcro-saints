const vb = '0 0 100 100';
const icon = (id, name, category, tags, paths, defaultScale = 0.62) => ({ id, name, category, tags, viewBox: vb, paths, defaultScale });

const makeStar = (points = 5, inner = 18, outer = 38, cx = 50, cy = 50) => {
  const a = [];
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? outer : inner;
    const ang = -Math.PI / 2 + (Math.PI / points) * i;
    a.push(`${cx + Math.cos(ang) * r} ${cy + Math.sin(ang) * r}`);
  }
  return `M ${a.join(' L ')} Z`;
};
const makePetal = (petals = 6, radius = 26) => Array.from({ length: petals }, (_, i) => {
  const ang = (Math.PI * 2 * i) / petals;
  const x = 50 + Math.cos(ang) * 16;
  const y = 50 + Math.sin(ang) * 16;
  return `M50 50 C ${50 + Math.cos(ang - 0.2) * 10} ${50 + Math.sin(ang - 0.2) * 10}, ${x + Math.cos(ang - 0.5) * 12} ${y + Math.sin(ang - 0.5) * 12}, ${50 + Math.cos(ang) * radius} ${50 + Math.sin(ang) * radius} C ${x + Math.cos(ang + 0.5) * 12} ${y + Math.sin(ang + 0.5) * 12}, ${50 + Math.cos(ang + 0.2) * 10} ${50 + Math.sin(ang + 0.2) * 10}, 50 50 Z`;
}).join(' ');

export const symbols = [
  // military 12
  icon('eagle-spread','Eagle Spread','military',['bird','tactical'],['M50 14 L61 31 L82 24 L70 44 L82 62 L60 57 L50 84 L40 57 L18 62 L30 44 L18 24 L39 31 Z']),
  icon('shield-mark','Shield','military',['defense'],['M50 10 L78 20 L74 54 Q70 78 50 90 Q30 78 26 54 L22 20 Z']),
  icon('sword','Sword','military',['blade'],['M48 12 L52 12 L56 46 L64 54 L58 60 L52 54 L52 84 L48 84 L48 54 L42 60 L36 54 L44 46 Z']),
  icon('chevrons','Chevrons','military',['rank'],['M24 28 L50 50 L76 28 L84 36 L50 66 L16 36 Z M24 48 L50 70 L76 48 L84 56 L50 86 L16 56 Z']),
  icon('crosshair','Crosshair','military',['scope'],['M48 12 H52 V30 H70 V34 H52 V48 H88 V52 H52 V66 H70 V70 H52 V88 H48 V70 H30 V66 H48 V52 H12 V48 H48 V34 H30 V30 H48 Z']),
  icon('anchor','Anchor','military',['navy'],['M46 14 A4 4 0 1 1 54 14 A4 4 0 1 1 46 14 M48 22 H52 V54 Q52 68 66 70 V76 Q50 75 50 88 Q50 75 34 76 V70 Q48 68 48 54 Z M22 58 Q24 76 40 78 M78 58 Q76 76 60 78']),
  icon('parachute','Parachute','military',['airborne'],['M18 44 Q50 12 82 44 Q70 42 62 50 Q56 46 50 46 Q44 46 38 50 Q30 42 18 44 M48 46 V76 H52 V46 M38 50 L48 64 M62 50 L52 64 M26 48 L46 68 M74 48 L54 68']),
  icon('helmet','Helmet','military',['armor'],['M22 56 Q22 24 50 20 Q78 24 78 56 H68 Q64 42 50 42 Q36 42 32 56 Z M26 60 H74 V68 H26 Z']),
  icon('dog-tags','Dog Tags','military',['identity'],['M30 18 H56 A10 10 0 0 1 66 28 V46 A10 10 0 0 1 56 56 H30 A10 10 0 0 1 20 46 V28 A10 10 0 0 1 30 18 Z M44 44 L62 62 M48 52 H74 A8 8 0 0 1 82 60 V74 A8 8 0 0 1 74 82 H48 A8 8 0 0 1 40 74 V60 A8 8 0 0 1 48 52 Z']),
  icon('grenade','Grenade','military',['ordnance'],['M38 36 H62 V30 Q62 22 70 22 H74 V30 H68 V36 H74 V44 H66 V48 Q74 54 74 68 Q74 84 50 84 Q26 84 26 68 Q26 54 34 48 V44 H26 V36 H38 Z']),
  icon('wings','Wings','military',['aviation'],['M50 52 L56 30 L84 20 L70 44 L86 54 L62 56 L50 80 L38 56 L14 54 L30 44 L16 20 L44 30 Z']),
  icon('medal','Medal','military',['award'],['M34 12 H46 L50 26 L54 12 H66 L60 36 H40 Z M50 36 L66 44 L64 62 L50 72 L36 62 L34 44 Z']),
  // nature 12
  icon('fir-tree','Douglas Fir','nature',['tree','oregon'],['M50 10 L64 28 H56 L72 44 H60 L78 62 H58 V86 H42 V62 H22 L40 44 H28 L44 28 H36 Z']),
  icon('oak-tree','Oak Tree','nature',['tree'],['M32 42 Q24 32 30 22 Q40 12 50 22 Q60 10 70 22 Q78 34 68 44 Q74 58 62 66 Q58 70 56 82 H44 Q42 70 38 66 Q24 56 32 42 Z']),
  icon('mountain','Mountain','nature',['peak'],['M14 76 L36 36 L50 56 L64 28 L86 76 Z']),
  icon('wave','Wave','nature',['water'],['M12 58 Q24 48 34 58 T56 58 T78 58 T88 58 Q76 72 64 64 T40 64 T12 58 Z']),
  icon('sun','Sun','nature',['light'],['M50 26 A18 18 0 1 1 49.9 26 Z M48 6 H52 V18 H48 Z M48 82 H52 V94 H48 Z M6 48 H18 V52 H6 Z M82 48 H94 V52 H82 Z M20 20 L28 28 M72 72 L80 80 M72 28 L80 20 M20 80 L28 72']),
  icon('moon','Moon','nature',['night'],['M60 14 Q36 20 34 48 Q36 76 60 82 Q38 88 24 70 Q12 52 18 34 Q24 16 60 14 Z']),
  icon('bear-head','Bear Head','nature',['animal'],['M30 26 A8 8 0 1 1 29.9 26 Z M70 26 A8 8 0 1 1 69.9 26 Z M24 38 Q26 22 40 20 H60 Q74 22 76 38 V54 Q76 78 50 82 Q24 78 24 54 Z M42 54 Q50 44 58 54 Q54 66 50 66 Q46 66 42 54 Z']),
  icon('wolf-head','Wolf Head','nature',['animal'],['M24 38 L34 18 L46 28 L54 22 L66 18 L76 38 L72 68 L50 84 L28 68 Z M40 54 L46 60 L54 60 L60 54 L54 72 H46 Z']),
  icon('elk-antlers','Elk Antlers','nature',['animal'],['M48 24 H52 V80 H48 Z M48 34 Q34 26 28 16 M48 42 Q34 40 22 30 M48 50 Q34 52 22 46 M52 34 Q66 26 72 16 M52 42 Q66 40 78 30 M52 50 Q66 52 78 46']),
  icon('horse-head','Horse Head','nature',['animal'],['M36 18 Q62 18 68 36 L64 80 H42 L38 52 L28 44 L30 28 Z M46 30 Q54 34 56 42 H46 Z']),
  icon('leaf','Leaf','nature',['plant'],['M18 56 Q28 22 62 18 Q78 30 82 44 Q72 74 38 82 Q30 68 42 54 Q54 40 70 34 Q46 38 30 54 Z']),
  icon('starburst','Starburst','nature',['star'],[makeStar(8,20,38)]),
  // music 11
  icon('guitar','Guitar','music',['instrument'],['M34 18 Q46 20 48 34 L52 46 Q62 44 68 50 Q74 56 70 64 Q66 72 54 72 Q42 72 36 64 Q30 56 34 46 L30 34 Q28 22 34 18 Z M58 16 H68 V48 H58 Z']),
  icon('bass','Bass','music',['instrument'],['M30 20 Q44 20 48 34 L52 50 Q66 48 72 56 Q76 64 70 74 Q64 84 48 80 Q34 76 30 62 Q26 48 34 40 L38 24 Z M58 16 H66 V52 H58 Z']),
  icon('drum','Drum','music',['percussion'],['M24 28 Q50 14 76 28 V72 Q50 86 24 72 Z M24 28 V72 M76 28 V72 M30 42 H70 M30 58 H70']),
  icon('microphone','Microphone','music',['vocal'],['M40 18 Q50 10 60 18 V40 Q60 52 50 58 Q40 52 40 40 Z M48 58 H52 V72 H64 V78 H36 V72 H48 Z']),
  icon('headphones','Headphones','music',['audio'],['M24 48 Q24 24 50 18 Q76 24 76 48 V70 H62 V44 H72 Q72 30 50 26 Q28 30 28 44 H38 V70 H24 Z']),
  icon('vinyl','Vinyl','music',['record'],['M50 18 A32 32 0 1 1 49.9 18 Z M50 42 A8 8 0 1 1 49.9 42 Z']),
  icon('note','Note','music',['notation'],['M58 18 V62 Q58 74 44 76 Q34 76 30 70 Q26 62 34 56 Q42 50 52 52 V28 L74 22 V54 Q74 66 60 68 Q50 68 46 62 Q42 54 50 48 Q58 42 68 44 V18 Z']),
  icon('clef','Clef','music',['notation'],['M56 12 Q70 20 66 36 Q62 48 48 50 Q34 52 34 64 Q34 78 50 78 Q62 78 66 68 Q68 60 62 54 Q56 48 46 50 M50 12 V86 M42 34 A6 6 0 1 1 41.9 34 Z M60 66 A6 6 0 1 1 59.9 66 Z']),
  icon('speaker','Speaker','music',['audio'],['M22 32 H44 L62 18 V82 L44 68 H22 Z M66 34 Q78 42 78 50 Q78 58 66 66 M72 24 Q90 36 90 50 Q90 64 72 76']),
  icon('amp','Amp','music',['gear'],['M20 24 H80 V76 H20 Z M28 36 H72 V48 H28 Z M32 60 A4 4 0 1 1 31.9 60 Z M48 60 A4 4 0 1 1 47.9 60 Z M64 60 A4 4 0 1 1 63.9 60 Z']),
  icon('pick','Pick','music',['guitar'],['M50 16 Q70 20 76 40 Q72 66 50 84 Q28 66 24 40 Q30 20 50 16 Z']),
  // heraldic 11
  icon('crown','Crown','heraldic',['royal'],['M18 70 L24 26 L40 48 L50 22 L60 48 L76 26 L82 70 Z']),
  icon('lion-rampant','Lion Rampant','heraldic',['animal'],['M38 18 L54 22 L62 34 L56 44 L66 50 L62 62 L72 74 L60 80 L52 68 L42 76 L30 68 L38 56 L28 48 L34 36 L44 40 L46 28 Z']),
  icon('fleur-de-lis','Fleur-de-Lis','heraldic',['ornament'],['M50 14 Q62 18 62 32 Q62 42 54 48 Q60 48 66 56 Q58 64 50 70 Q42 64 34 56 Q40 48 46 48 Q38 42 38 32 Q38 18 50 14 Z M48 70 H52 V86 H48 Z']),
  icon('wreath','Wreath','heraldic',['laurel'],['M28 74 Q16 56 22 38 Q26 24 38 18 Q26 34 30 50 Q34 64 46 74 M72 74 Q84 56 78 38 Q74 24 62 18 Q74 34 70 50 Q66 64 54 74']),
  icon('scroll','Scroll','heraldic',['banner'],['M18 36 Q26 22 38 34 H62 Q74 22 82 36 Q74 50 62 42 H38 Q26 50 18 36 Z M22 42 V58 Q30 68 38 58 V42 M78 42 V58 Q70 68 62 58 V42']),
  icon('cross','Cross','heraldic',['faith'],['M42 18 H58 V42 H82 V58 H58 V82 H42 V58 H18 V42 H42 Z']),
  icon('key','Key','heraldic',['symbol'],['M58 30 A12 12 0 1 1 57.9 30 Z M48 30 H18 V38 H26 V46 H34 V54 H42 V38 H48 Z']),
  icon('scales','Scales','heraldic',['justice'],['M48 18 H52 V26 H70 V30 H52 V70 H60 V78 H40 V70 H48 V30 H30 V26 H48 Z M30 34 L20 50 H40 Z M70 34 L60 50 H80 Z']),
  icon('torch','Torch','heraldic',['light'],['M42 18 Q50 8 58 18 Q66 28 58 38 H42 Q34 28 42 18 Z M46 38 H54 L58 78 H42 Z']),
  icon('banner-split','Banner Split','heraldic',['ribbon'],['M16 32 H84 V50 H56 L50 58 L44 50 H16 Z M16 50 L28 62 V74 L16 66 Z M84 50 L72 62 V74 L84 66 Z']),
  icon('castle','Castle','heraldic',['fortress'],['M24 24 H38 V36 H44 V24 H56 V36 H62 V24 H76 V78 H24 Z M34 54 H42 V78 H34 Z M58 54 H66 V78 H58 Z']),
  // tools 12
  icon('axe','Axe','tools',['tool'],['M52 16 L58 22 L48 48 L56 56 L50 62 L42 54 L24 84 L18 78 L36 48 L28 40 Q38 20 52 16 Z']),
  icon('crosscut-saw','Crosscut Saw','tools',['timber'],['M18 44 Q50 26 82 44 Q50 62 18 44 Z M24 46 L28 54 M34 42 L38 50 M44 40 L48 48 M54 40 L58 48 M64 42 L68 50 M74 46 L78 54']),
  icon('hammer','Hammer','tools',['tool'],['M28 20 H58 Q70 20 70 32 H54 V46 H46 V32 H28 Z M46 32 H54 V84 H46 Z']),
  icon('wrench','Wrench','tools',['tool'],['M66 16 Q74 24 72 34 L60 28 L54 34 L66 46 Q74 54 74 64 Q74 80 58 82 Q48 82 40 74 L18 52 L26 44 L48 66 Q52 70 58 70 Q62 70 62 64 Q62 60 58 56 L46 44 L52 38 L46 26 Q56 14 66 16 Z']),
  icon('gear','Gear','tools',['mechanical'],['M46 14 H54 L56 24 L66 20 L72 28 L66 36 L76 44 V56 L66 64 L72 72 L66 80 L56 76 L54 86 H46 L44 76 L34 80 L28 72 L34 64 L24 56 V44 L34 36 L28 28 L34 20 L44 24 Z M50 38 A12 12 0 1 1 49.9 38 Z']),
  icon('anvil','Anvil','tools',['forge'],['M20 54 H46 Q56 54 58 44 H72 V56 H62 V68 H80 V80 H20 V68 H34 V62 Q34 54 20 54 Z']),
  icon('chain','Chain','tools',['link'],['M30 40 Q20 30 30 20 Q40 10 50 20 L56 26 L48 34 L42 28 Q36 22 30 28 Q24 34 30 40 L40 50 Q46 56 52 50 L58 44 L66 52 L60 58 Q50 68 40 58 Z M70 60 Q80 70 70 80 Q60 90 50 80 L44 74 L52 66 L58 72 Q64 78 70 72 Q76 66 70 60 L60 50 Q54 44 48 50 L42 56 L34 48 L40 42 Q50 32 60 42 Z']),
  icon('bolt','Bolt','tools',['fastener'],['M44 12 H62 L54 42 H70 L38 88 L44 54 H28 Z']),
  icon('log-round','Log Round','tools',['timber'],['M50 18 A32 32 0 1 1 49.9 18 Z M50 30 A20 20 0 1 1 49.9 30 Z M50 42 A8 8 0 1 1 49.9 42 Z M50 18 Q60 28 62 40 Q68 48 80 50']),
  icon('shovel','Shovel','tools',['dig'],['M46 12 H54 V52 H58 Q66 52 70 60 Q72 78 50 88 Q28 78 30 60 Q34 52 42 52 H46 Z']),
  icon('pliers','Pliers','tools',['tool'],['M36 16 L48 44 L42 84 H34 L40 46 L26 24 Z M64 16 L52 44 L58 84 H66 L60 46 L74 24 Z']),
  icon('compass','Compass','tools',['navigation'],['M50 18 A32 32 0 1 1 49.9 18 Z M40 66 L50 34 L60 66 Z M50 40 A4 4 0 1 1 49.9 40 Z']),
  // ornaments 11
  icon('ribbon','Ribbon','ornaments',['banner'],['M18 40 H82 V56 H54 L50 64 L46 56 H18 Z M22 56 L30 72 L22 82 Z M78 56 L70 72 L78 82 Z']),
  icon('corner-flourish','Corner Flourish','ornaments',['decor'],['M20 80 Q20 48 48 48 Q58 48 66 38 Q74 28 74 18 Q82 34 74 48 Q66 62 52 66 Q36 70 20 80 Z']),
  icon('frame-round','Frame Round','ornaments',['border'],['M50 14 A36 36 0 1 1 49.9 14 Z M50 24 A26 26 0 1 1 49.9 24 Z']),
  icon('divider-diamond','Divider Diamond','ornaments',['divider'],['M18 50 H38 L50 38 L62 50 H82 M50 38 L50 62']),
  icon('tab-bottom','Tab Bottom','ornaments',['tab'],['M26 20 H74 V52 H58 L50 64 L42 52 H26 Z']),
  icon('loop-knot','Loop Knot','ornaments',['celtic'],['M26 50 Q38 26 50 50 Q62 74 74 50 Q62 26 50 50 Q38 74 26 50 Z']),
  icon('sunburst-ring','Sunburst Ring','ornaments',['radial'],['M50 20 A30 30 0 1 1 49.9 20 Z M50 30 A20 20 0 1 1 49.9 30 Z M50 6 V16 M50 84 V94 M6 50 H16 M84 50 H94 M20 20 L28 28 M72 72 L80 80 M72 28 L80 20 M20 80 L28 72']),
  icon('cross-ribbon','Cross Ribbon','ornaments',['badge'],['M42 18 H58 V42 H82 V58 H58 V82 H42 V58 H18 V42 H42 Z M20 20 L80 80 M80 20 L20 80']),
  icon('petals','Petals','ornaments',['floral'],[makePetal(6,28)]),
  icon('barbed-band','Barbed Band','ornaments',['tactical'],['M12 50 H88 M24 42 L32 50 L24 58 M44 42 L52 50 L44 58 M64 42 L72 50 L64 58']),
  icon('merrow-sample','Merrow Sample','ornaments',['edge'],['M18 30 Q18 18 30 18 H70 Q82 18 82 30 V70 Q82 82 70 82 H30 Q18 82 18 70 Z M18 30 Q24 36 18 42 Q24 48 18 54 Q24 60 18 66 M82 30 Q76 36 82 42 Q76 48 82 54 Q76 60 82 66']),
  // morale 11
  icon('skull','Skull','morale',['danger'],['M32 26 Q50 10 68 26 V48 Q68 60 58 64 V78 H52 V68 H48 V78 H42 V64 Q32 60 32 48 Z M40 42 A4 4 0 1 1 39.9 42 Z M60 42 A4 4 0 1 1 59.9 42 Z M44 54 H56 V60 H44 Z']),
  icon('dice','Dice','morale',['luck'],['M20 20 H48 V48 H20 Z M52 52 H80 V80 H52 Z M30 30 A3 3 0 1 1 29.9 30 Z M38 38 A3 3 0 1 1 37.9 38 Z M62 62 A3 3 0 1 1 61.9 62 Z M70 62 A3 3 0 1 1 69.9 62 Z M62 70 A3 3 0 1 1 61.9 70 Z M70 70 A3 3 0 1 1 69.9 70 Z']),
  icon('coffee','Coffee','morale',['mug'],['M22 34 H62 V64 Q62 76 50 76 H34 Q22 76 22 64 Z M62 40 H72 Q80 40 80 50 Q80 60 72 60 H62 Z M26 24 H58']),
  icon('lightning','Lightning','morale',['energy'],['M46 12 H68 L54 42 H70 L34 88 L44 54 H28 Z']),
  icon('flame','Flame','morale',['fire'],['M52 12 Q68 28 62 42 Q76 48 72 64 Q66 84 50 84 Q34 84 28 64 Q24 48 38 40 Q38 24 52 12 Z']),
  icon('rocket','Rocket','morale',['space'],['M50 12 Q66 20 68 40 L58 52 V72 L50 64 L42 72 V52 L32 40 Q34 20 50 12 Z M40 74 L34 88 L46 80 M60 74 L66 88 L54 80']),
  icon('snake','Snake','morale',['animal'],['M70 24 Q48 18 38 30 Q28 42 42 48 Q56 54 52 66 Q48 78 26 74 Q44 86 60 76 Q76 66 70 52 Q64 38 50 34 Q36 30 40 18 Q52 12 70 24 Z']),
  icon('bomb','Bomb','morale',['explosive'],['M50 26 Q66 30 72 44 Q78 58 70 72 Q62 86 50 86 Q38 86 30 72 Q22 58 28 44 Q34 30 50 26 Z M60 20 L72 12 M68 24 L78 24']),
  icon('cards','Cards','morale',['game'],['M28 24 H56 V64 H28 Z M44 36 H72 V76 H44 Z M38 34 L42 42 L46 34 L50 42 L54 34']),
  icon('pizza','Pizza','morale',['food'],['M20 26 L80 40 L50 84 Z M46 46 A4 4 0 1 1 45.9 46 Z M60 54 A4 4 0 1 1 59.9 54 Z M42 62 A4 4 0 1 1 41.9 62 Z']),
  icon('smiley-badass','Smiley Badass','morale',['morale'],['M50 18 A32 32 0 1 1 49.9 18 Z M38 42 A4 4 0 1 1 37.9 42 Z M62 42 A4 4 0 1 1 61.9 42 Z M34 58 Q50 72 66 58 M30 34 L44 30 M56 30 L70 34'])
];

export const categories = ['military','nature','music','heraldic','tools','ornaments','morale'];
