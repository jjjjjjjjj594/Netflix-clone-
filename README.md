# NIGHTREEL — Streaming Platform UI Clone

A Netflix-style video streaming browsing interface — hero banner, horizontal
scrolling content rows, hover previews, and a detail modal with "more like
this" suggestions.

## Important — what this is (and isn't)
This is a **frontend UI/UX clone** — it recreates the browsing experience
(hero banner, scrolling rows, hover previews, detail modal) with **original
branding and fictional content**. It is not a copy of Netflix's logo,
trademark, or any real movie/show titles, posters, or video files — those
are all made up. There's no real video playback, no backend, and no user
accounts; it's a front-of-house browsing experience you can restyle and
reuse for any streaming-style project.

## Files
- `index.html`
- `style.css`
- `script.js` — all 12 fictional titles, row logic, and modal logic

## How to use it
1. Keep all three files in the same folder.
2. Open `index.html` in a browser to preview, or upload all 3 files to any
   static host (GitHub Pages, Netlify, Vercel) — no backend required.

## About the "posters"
Since there are no real movie posters here, each card uses a bold
typographic treatment instead — a unique gradient plus the title in large
condensed type. This is a deliberate style choice (not a placeholder), and
you can swap in real images later by replacing the gradient in `hashGradient()`
inside `script.js` with an `<img>` if you have artwork of your own to use.

## Customizing the content
Open `script.js` and edit the `TITLES` array near the top:
```js
{ title:'Your Show', year:2026, age:'13+', length:'2 Seasons', match:92,
  genres:['Drama'], mood:'Warm, Bittersweet',
  cast:'Actor Name, Actor Name',
  desc:'One or two sentence synopsis.',
  hue:250, tag:'trending' }
```
`hue` controls that card's gradient color (0–360). `tag` controls which row(s)
it shows up in — edit the `ROWS` array below `TITLES` to add, remove, or
retitle rows, and change each row's `filter` function to match your own tags.

## Customizing the look
Colors and fonts are CSS variables at the top of `style.css`:
```css
:root{
  --bg:#0a0a0c;      /* page background */
  --flame:#ff4d3d;   /* logo, badges, accents */
  --gold:#ffc93d;    /* "Original" badge */
  --teal:#2dd4bf;    /* available secondary accent */
}
```

## Notes
- Fully responsive; nav collapses on small screens.
- No frameworks or build tools required.
- No real video, backend, or payment — this is a browsing UI only.
