# noahotim/portfolio

Personal portfolio site — Next.js, statically exported to GitHub Pages at
https://noahotim.github.io/portfolio/.

## Auto-updating "Selected Work"

The Selected Work section is generated from live GitHub data at build time.

1. `scripts/fetch-projects.mjs` calls the GitHub API, pulls every public repo,
   scores them, and writes `src/data/projects.json`.
2. `src/app/page.tsx` renders that file.
3. The deploy workflow rebuilds on every push **and on a daily schedule**, so the
   project list keeps itself current.

### Scoring

| Signal | Points |
| --- | --- |
| Each star | 6 |
| Each fork | 8 |
| Has a description | 15 |
| Has a live homepage | 12 |
| Each topic (capped) | 1–2 |
| Has a license | 3 |
| Non-empty repo | 4 |
| Pushed in last 30 / 90 / 180 / 365 days | 30 / 20 / 12 / 6 |

Top `topN` win. Forks, archived repos and empty repos are dropped.

### Control it

`portfolio.config.json`:

```json
{
  "username": "noahotim",
  "topN": 6,
  "includeForks": false,
  "exclude": ["noahotim", "portfolio"],
  "featured": ["a-repo-to-pin-first"],
  "tags": { "repo-name": "TypeScript · Category" },
  "descriptions": { "repo-name": "Custom blurb." }
}
```

`featured` pins repos to the top. `exclude` hides them. `tags`/`descriptions`
override what GitHub returns.

If the GitHub API is unreachable during a build, the last committed
`src/data/projects.json` is kept so the site still deploys.

## Local development

```sh
npm install
npm run dev          # http://localhost:3000
npm run fetch-projects   # refresh src/data/projects.json (uses gh token if set)
npm run build        # static export to ./out
```

Set `GITHUB_TOKEN` (or `GH_TOKEN`) before `npm run build` for a higher API rate
limit; without it the public unauthenticated limit applies.
