'use client';

import { useState } from 'react';

type Decision = { layer: string; choice: string; why: string; tradeoff: string; note: string };

const decisions: Decision[] = [
  { layer: 'Framework', choice: 'Next.js 15 (App Router)', why: 'Best single-framework fit for SEO + app features + Vercel edge.', tradeoff: 'Tighter coupling to the Next.js ecosystem (routing, data fetching, deployments) in exchange for a simpler architecture, stronger SEO, and full-stack capabilities on Vercel Edge.', note: 'Use the App Router and Server Components by default. Route handlers keep API boundaries close to the feature surface.' },
  { layer: 'Language', choice: 'TypeScript', why: 'Type safety across components, API, and infra.', tradeoff: 'A little more setup at the boundary buys safer refactors and contracts that stay visible as the system grows.', note: 'Keep shared domain types close to the data contract. Avoid duplicating types between UI and server actions.' },
  { layer: 'Styling', choice: 'Tailwind v4', why: 'Utility-first, themeable, small runtime.', tradeoff: 'Markup carries more styling vocabulary, but the token surface remains compact and easy to audit.', note: 'Define design tokens once, then use utilities for composition and component-level variants.' },
  { layer: 'Component system', choice: 'shadcn/ui + Radix primitives', why: 'Own-the-source components + accessibility.', tradeoff: 'Ownership means maintaining primitives locally, but removes opaque dependency styling and preserves accessibility affordances.', note: 'Copy only the primitives the product needs. Keep behavioral primitives separate from visual recipes.' },
  { layer: '3D / WebGL', choice: 'three.js + @react-three-fiber', why: 'Client islands for product viewers and motion.', tradeoff: 'A client-side performance boundary is required for GPU work, in exchange for a composable React scene graph.', note: 'Load WebGL as an intentional client island. Keep the rest of the page server-renderable and crawlable.' },
  { layer: 'Motion', choice: 'Framer Motion', why: 'High-quality interaction language and choreography.', tradeoff: 'Animation adds runtime weight, so transitions should communicate state and hierarchy rather than decorate every surface.', note: 'Use shared motion tokens, reduced-motion fallbacks, and layout animation only where it improves comprehension.' },
  { layer: 'ORM / DB', choice: 'Drizzle + Postgres', why: 'Lightweight, type-safe ORM for server actions.', tradeoff: 'SQL concepts stay close to the code, which favors explicitness over a large abstraction layer.', note: 'Keep migrations versioned and server-only. Validate user input before it reaches a query.' },
  { layer: 'CI / E2E', choice: 'Playwright + GitHub Actions', why: 'Reliable visual and functional tests.', tradeoff: 'Browser tests take longer than unit tests, but they exercise the interface users actually see.', note: 'Cover the primary decision flow, responsive layout, and evidence-panel state in Chromium.' },
  { layer: 'Storybook', choice: 'Storybook + Chromatic', why: 'Component-driven development and visual QA.', tradeoff: 'A second preview surface needs maintenance, but it catches visual drift before integration.', note: 'Stories should document states and accessibility—not just the happy-path screenshot.' },
  { layer: 'Observability', choice: 'OpenTelemetry', why: 'Traces and metrics for edge functions and attribution.', tradeoff: 'Instrumentation creates cost and schema responsibilities, offset by faster diagnosis and trustworthy receipts.', note: 'Start with request, decision, and attribution spans. Keep sensitive payloads out of traces by default.' },
  { layer: 'Hosting', choice: 'Vercel (Edge Functions)', why: 'Native App Router support and edge execution.', tradeoff: 'Platform convenience narrows deployment portability, but shortens the path from commit to preview.', note: 'Use edge execution where latency matters; document any Node-only dependency before selecting a runtime.' },
  { layer: 'AI / Content', choice: 'Serverless workers + LLM pipeline', why: 'Generate article drafts, images, and product media.', tradeoff: 'Generated output needs review and provenance, in exchange for a scalable content production loop.', note: 'Treat generated artifacts as drafts until approved. Persist prompts, model metadata, and review state.' },
];

function Arrow() { return <svg aria-hidden="true" viewBox="0 0 20 20" width="18" height="18"><path d="M3 10h13M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" /></svg>; }

export default function Home() {
  const [active, setActive] = useState(0);
  const selected = decisions[active];
  return (
    <main className="shell">
      <aside className="sidebar">
        <div className="brand">LayerChoiceWhy</div>
        <nav aria-label="Primary navigation">
          {['Decisions', 'Evidence', 'Implementation', 'Notes', 'Settings'].map((item, index) => <button className={`nav-item ${index === 0 ? 'active' : ''}`} key={item}><span className="nav-icon">{['☷', '□', '<>', '▢', '⚙'][index]}</span>{item}</button>)}
        </nav>
        <div className="sidebar-footer"><p>Clear decisions.<br />Confident builds.</p><div className="sidebar-mark">LAYERCHOICEWHY<br />BUILD WITH REASON</div></div>
      </aside>
      <section className="content">
        <header className="page-header"><h1>LayerChoiceWhy</h1><p className="dek">A framework decision, in one line.</p><div className="status">12 decisions <span>•</span> evidence-linked <span>•</span> ready to build <i /></div></header>
        <div className="ledger-heading">Decision ledger <span>select a row to inspect the reasoning</span></div>
        <div className="ledger" role="list" aria-label="Framework decisions">
          {decisions.map((item, index) => <button role="listitem" className={`decision ${active === index ? 'selected' : ''}`} key={item.layer} onClick={() => setActive(index)} aria-pressed={active === index}><span className="number">{String(index + 1).padStart(2, '0')}</span><span className="layer">{item.layer}</span><strong>{item.choice}</strong><span className="why">{item.why}</span><Arrow /></button>)}
        </div>
      </section>
      <aside className="evidence" aria-live="polite">
        <div className="evidence-index">{String(active + 1).padStart(2, '0')}</div><h2>{selected.layer}</h2><h3>{selected.choice}</h3>
        <section><h4>Tradeoff</h4><p>{selected.tradeoff}</p></section><section><h4>Implementation note</h4><p>{selected.note}</p></section>
        <div className="evidence-footer">DECIDE <span>/</span> DOCUMENT <span>/</span> BUILD</div>
      </aside>
    </main>
  );
}
