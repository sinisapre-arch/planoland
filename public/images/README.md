# Local image assets

Anything placed in this folder is served at the site root by Vite.
For example `public/images/hero/hero.webp` is referenced in code as `/images/hero/hero.webp`.

## Layout

| Folder | Contents |
| --- | --- |
| `hero/` | Full-bleed homepage hero image (recommended 2560×1707, WebP, ~200–400 KB) |
| `studio/` | Founder portrait (used on the Home "Studio" section, the Team page and the Services band). Source of truth is the archived photo — see `scripts/optimize-images.mjs` |
| `projects/` | Per-project imagery. Use subfolders per slug, e.g. `projects/ferma/01.webp` |
| `misc/` | Backgrounds, textures, anything else |

## Recommendations

- Export as **WebP** (best size/quality for photos).
- Hero: **2560×1707 px** (3:2 landscape). Avoid portrait — crops badly on desktop.
- Keep individual files under ~400 KB after compression.
- Leave headroom around the subject — the hero crop varies a lot between devices.
