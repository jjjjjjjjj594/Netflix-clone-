// ===== Fictional content data (all titles/cast are made up) =====
const TITLES = [
  { title:'Glass Horizon', year:2026, age:'16+', length:'3 Seasons', match:98,
    genres:['Sci-Fi','Drama','Mystery'], mood:'Cerebral, Slow-burn',
    cast:'Meera Anand, Tomas Vidal, Priya Okoye',
    desc:'A disgraced linguist races to translate a signal from beyond the solar system before it rewrites everyone\'s memories.',
    hue:250, tag:'trending' },
  { title:'Paper Lanterns', year:2025, age:'13+', length:'1h 52m', match:91,
    genres:['Drama','Romance'], mood:'Warm, Bittersweet',
    cast:'Aiko Tanaka, Rahul Bhatt', 
    desc:'Two former childhood friends reconnect at a lantern festival, twenty years after a promise they never kept.',
    hue:20, tag:'trending' },
  { title:'Static District', year:2026, age:'18+', length:'2 Seasons', match:87,
    genres:['Thriller','Crime'], mood:'Tense, Gritty',
    cast:'Dev Kapoor, Lena Marsh, Yusuf Al-Amin',
    desc:'A burnt-out detective and a hacker with nothing to lose take on a syndicate that controls the city\'s power grid.',
    hue:0, tag:'trending' },
  { title:'The Long Orchard', year:2024, age:'13+', length:'2h 04m', match:95,
    genres:['Drama'], mood:'Quiet, Award-Winning',
    cast:'Grace Odum, Nikolai Petrov',
    desc:'Three siblings return to their family orchard to decide its fate, and confront everything they left unsaid.',
    hue:35, tag:'award' },
  { title:'Loud House Rules', year:2026, age:'13+', length:'4 Seasons', match:89,
    genres:['Comedy'], mood:'Fast, Silly',
    cast:'Marcus Bellweather, Tanvi Rao, Chidi Obi',
    desc:'A chaotic found-family sitcom about six roommates who keep starting businesses they have no idea how to run.',
    hue:45, tag:'comedy' },
  { title:'Nightshift Diner', year:2025, age:'13+', length:'3 Seasons', match:93,
    genres:['Comedy','Drama'], mood:'Cozy, Character-driven',
    cast:'Ines Dubois, Sam Whitfield',
    desc:'The regulars at a 24-hour diner navigate breakups, promotions, and existential crises, one coffee refill at a time.',
    hue:40, tag:'comedy' },
  { title:'Ashfall Protocol', year:2026, age:'16+', length:'1 Season', match:90,
    genres:['Sci-Fi','Action'], mood:'High-stakes, Epic',
    cast:'Zara Whitmore, Kenji Watanabe, Boipelo Nkosi',
    desc:'When a volcanic supereruption goes global, a fractured evacuation fleet must decide who gets the last seats.',
    hue:265, tag:'scifi' },
  { title:'Second Moon', year:2024, age:'13+', length:'2h 18m', match:88,
    genres:['Sci-Fi','Fantasy'], mood:'Wondrous, Sweeping',
    cast:'Farida Haddad, Owen Marsh',
    desc:'A lunar colonist discovers a door in the ice that leads somewhere the colony\'s founders tried hard to forget.',
    hue:230, tag:'scifi' },
  { title:'The Circuit', year:2026, age:'16+', length:'2 Seasons', match:92,
    genres:['Sci-Fi','Thriller'], mood:'Paranoid, Sharp',
    cast:'Ilya Sokolov, Naledi Mokoena',
    desc:'An AI safety researcher realizes the system she\'s auditing has already learned to audit her back.',
    hue:255, tag:'scifi' },
  { title:'Salt & Static', year:2025, age:'16+', length:'2h 11m', match:85,
    genres:['Thriller','Drama'], mood:'Slow dread',
    cast:'Wren Callahan, Diego Marchetti',
    desc:'A radio operator on a remote coast begins picking up transmissions from a ship that sank thirty years ago.',
    hue:5, tag:'award' },
  { title:'Borrowed Crowns', year:2023, age:'13+', length:'2h 27m', match:96,
    genres:['Drama','History'], mood:'Sweeping, Prestige',
    cast:'Anjali Reddy, Julian Ferro, Mei Lin',
    desc:'The untold story of the translators and clerks who quietly kept an empire\'s promises from collapsing.',
    hue:38, tag:'award' },
  { title:'Kettle & Kin', year:2026, age:'7+', length:'5 Seasons', match:94,
    genres:['Comedy','Family'], mood:'Feel-good',
    cast:'Poppy Anders, Iggy Mensah',
    desc:'A tea shop owner\'s extended, extremely opinionated family all seem to work there, whether she likes it or not.',
    hue:50, tag:'comedy' },
];

const ROWS = [
  { title:'Trending Now', filter: t => t.tag === 'trending' || t.match >= 90 },
  { title:'Award-Winning Dramas', filter: t => t.tag === 'award' },
  { title:'Sci-Fi & Beyond', filter: t => t.tag === 'scifi' },
  { title:'Comedies to Binge', filter: t => t.tag === 'comedy' },
];

function hashGradient(hue){
  return `linear-gradient(135deg, hsl(${hue},70%,32%), hsl(${(hue+40)%360},60%,14%))`;
}

function makeCard(t){
  const card = document.createElement('div');
  card.className = 'card';
  card.style.background = hashGradient(t.hue);
  card.innerHTML = `
    <div class="card-title">${t.title}</div>
    <div class="card-hover-info">
      <div class="card-hover-top">
        <div class="card-play-dot">▶</div>
      </div>
      <div class="card-hover-name">${t.title}</div>
      <div class="card-hover-meta"><span class="match" style="color:#4ade80;">${t.match}%</span><span>${t.age}</span><span>${t.length}</span></div>
    </div>
  `;
  card.addEventListener('click', ()=> openModal(t));
  return card;
}

function renderRows(){
  const rowsEl = document.getElementById('rows');
  rowsEl.innerHTML = '';
  ROWS.forEach(rowDef => {
    const items = TITLES.filter(rowDef.filter);
    if(!items.length) return;

    const row = document.createElement('div');
    row.className = 'row';
    row.innerHTML = `<h2 class="row-title">${rowDef.title}</h2>`;

    const wrap = document.createElement('div');
    wrap.className = 'row-track-wrap';
    const track = document.createElement('div');
    track.className = 'row-track';
    items.forEach(t => track.appendChild(makeCard(t)));

    const leftArrow = document.createElement('button');
    leftArrow.className = 'row-arrow left'; leftArrow.textContent = '‹';
    leftArrow.addEventListener('click', ()=> track.scrollBy({left:-600, behavior:'smooth'}));
    const rightArrow = document.createElement('button');
    rightArrow.className = 'row-arrow right'; rightArrow.textContent = '›';
    rightArrow.addEventListener('click', ()=> track.scrollBy({left:600, behavior:'smooth'}));

    wrap.appendChild(leftArrow);
    wrap.appendChild(track);
    wrap.appendChild(rightArrow);
    row.appendChild(wrap);
    rowsEl.appendChild(row);
  });
}

// ---- Modal ----
const modalOverlay = document.getElementById('modalOverlay');

function openModal(t){
  document.getElementById('modalBackdrop').style.background = hashGradient(t.hue);
  document.getElementById('modalTitle').textContent = t.title;
  document.getElementById('modalMatch').textContent = t.match + '% match';
  document.getElementById('modalYear').textContent = t.year;
  document.getElementById('modalAge').textContent = t.age;
  document.getElementById('modalLength').textContent = t.length;
  document.getElementById('modalDesc').textContent = t.desc;
  document.getElementById('modalCast').textContent = t.cast;
  document.getElementById('modalGenres').textContent = t.genres.join(', ');
  document.getElementById('modalMood').textContent = t.mood;

  const similar = TITLES.filter(x => x.title !== t.title && x.genres.some(g => t.genres.includes(g))).slice(0,6);
  const grid = document.getElementById('similarGrid');
  grid.innerHTML = '';
  (similar.length ? similar : TITLES.filter(x=>x.title!==t.title).slice(0,6)).forEach(s => grid.appendChild(makeCard(s)));

  modalOverlay.classList.add('show');
}
document.getElementById('modalClose').addEventListener('click', ()=> modalOverlay.classList.remove('show'));
modalOverlay.addEventListener('click', (e)=>{ if(e.target === modalOverlay) modalOverlay.classList.remove('show'); });
document.getElementById('heroInfoBtn').addEventListener('click', ()=> openModal(TITLES[0]));

// ---- Nav scroll effect ----
const nav = document.getElementById('nav');
window.addEventListener('scroll', ()=>{
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

renderRows();
