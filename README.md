# LayerChoiceWhy

An evidence-linked framework decision ledger: every architectural choice is reduced to one clear line, with the tradeoff and the next implementation note kept adjacent.

## Run locally

Use the bundled Node runtime if `node` is not on PATH:

```powershell
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Implemented surface

- Responsive three-part shell: navigation, decision ledger, evidence rail.
- All 12 decisions from the supplied stack are represented as data, not baked into repeated markup.
- Selecting a decision updates the evidence rail with its tradeoff and implementation note.
- Desktop, tablet, and mobile layouts are defined in `app/globals.css`.
- Semantic heading structure, labelled navigation, list semantics, pressed state, and live evidence updates are included.
- Metadata is set in `app/layout.tsx` for the public decision page.

## Explicitly not connected yet

The page is a foundation and decision artifact. Postgres/Drizzle, Storybook/Chromatic, OpenTelemetry export, Vercel deployment, Playwright CI, and the LLM worker pipeline remain design-level integrations until their credentials, repositories, and runtime contracts are provided.

## Validation receipt

- `pnpm build` — passed with Next.js 15.5.25 and the bundled workspace runtime.
- `pnpm exec tsc --noEmit` — passed.
- `pnpm exec playwright test --workers=1` — passed: 4 tests across desktop and 390×844 mobile Edge.
- Browser/IAB — unavailable in this session; the automation transport closed before a tab could be created. The approved fallback used the installed Microsoft Edge executable.
- Screenshot comparison — not captured in the final pass; Edge was used successfully for DOM and interaction assertions, but its headless screenshot mode did not emit a file in this environment.
- Static implementation review — completed against the accepted concept at `C:\Users\girlw\.codex\generated_images\01a0a9ff-d0db-7b02-ab8c-2220d4b72d2f\exec-cf8f2da4-431d-4a30-965e-e957709840c9.png`.

### Fidelity ledger

| Comparison point | Result |
| --- | --- |
| Three-column decision-ledger composition | Implemented in the responsive shell grid |
| Dark rail / paper workspace palette | Implemented with locked ink and paper tokens |
| Typography hierarchy | Implemented with Playfair Display, DM Sans, and DM Mono roles |
| Twelve row order and supplied copy | Implemented in the `decisions` data array |
| Selected row and evidence state | Implemented with live local state and pressed semantics |
| Mobile continuation | Implemented with stacked shell and row reflow |
| Implementation screenshot | Not captured; DOM and interaction assertions passed in Edge |

The visual concept is the reference direction; the final screenshot comparison remains an explicit follow-up gate once a browser surface that can emit screenshots is available.
