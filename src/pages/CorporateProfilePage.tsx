import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import { useNavigation } from '../context/NavigationContext';
import {
  Briefcase, Landmark, HardHat, Globe, Truck, Ship, Fuel, Coins, Sprout, HeartHandshake,
  ChevronDown, ChevronRight, Printer, ArrowUp, Check, Copy, RotateCcw, ExternalLink,
  AlertTriangle, Info, ListTree, X, FileText, ArrowUpRight,
} from 'lucide-react';
import {
  COVER, OVERVIEW, PARTS, APPENDIX, STRUCTURE_GROUPS, ECOSYSTEM, ORGANOGRAM, NINETY_DAY,
  YEARS, REVENUE_BY_DIVISION, REVENUE_TOTAL, INCOME_STATEMENT, CAPITAL_ALLOCATION, ROADMAP,
  type Block, type Section,
} from '../data/corporateProfileData';

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  briefcase: Briefcase, landmark: Landmark, hardhat: HardHat, globe: Globe, truck: Truck,
  ship: Ship, fuel: Fuel, coins: Coins, sprout: Sprout, heart: HeartHandshake,
};

const NAV_OFFSET = 112;

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  window.scrollTo({ top, behavior: 'smooth' });
};

const fmt = (n: number | null, d = 1) => (n === null ? '—' : n.toFixed(d));
const rand = (n: number) => 'R' + n.toLocaleString('en-ZA').replace(/\u00a0/g, ',').replace(/\s/g, ',');

const TOC: { id: string; label: string; letter: string; sections: { no: string; title: string }[] }[] = [
  { id: 'overview', letter: '•', label: 'Document overview', sections: [] },
  ...PARTS.map((p) => ({
    id: p.id, letter: p.letter, label: p.tocTitle,
    sections: p.sections.map((s) => ({ no: s.no, title: s.title })),
  })),
  { id: 'appendix', letter: '+', label: 'Appendix 1', sections: [] },
];

const SERIES_COLORS = ['#101B35', '#263C70', '#FF8A00', '#FFC400', '#1FD2FF', '#848E9F', '#7C3AED'];

/* ------------------------------------------------------------------ */
/* Print styles (scoped to this page only; injected while mounted)     */
/* ------------------------------------------------------------------ */

const PRINT_CSS = `
@media print {
  @page { size: A4; margin: 14mm; }
  header.fixed, footer, .cp-noprint { display: none !important; }
  html, body { background: #fff !important; }
  main { padding: 0 !important; }
  .cp-root { background: #fff !important; }
  .cp-hero { background: #101B35 !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .cp-layout { display: block !important; }
  .cp-part { break-before: page; }
  .cp-part:first-of-type { break-before: auto; }
  .cp-avoid, table, tr, figure { break-inside: avoid; }
  .cp-root * { box-shadow: none !important; animation: none !important; }
  .cp-root { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  a[href^="http"]::after { content: " (" attr(href) ")"; font-size: 8px; color: #555; word-break: break-all; }
}
.cp-fade { animation: cpfade .45s ease both; }
@keyframes cpfade { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }
@media (prefers-reduced-motion: reduce) { .cp-fade { animation: none; } }
`;

/* ------------------------------------------------------------------ */
/* Generic block renderer                                              */
/* ------------------------------------------------------------------ */

const Label: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#FF8A00] mb-1.5">{children}</div>
);

const BlockView: React.FC<{ block: Block }> = ({ block }) => {
  switch (block.t) {
    case 'p':
      return (
        <div className="cp-avoid">
          {block.label && <Label>{block.label}</Label>}
          {block.text && <p className="text-[15px] sm:text-base text-stone-700 leading-[1.8] font-sans max-w-3xl">{block.text}</p>}
        </div>
      );
    case 'h':
      return <h4 className="text-xl font-serif font-bold text-[#101B35] pt-4 border-t border-stone-200 cp-avoid">{block.text}</h4>;
    case 'list':
      return (
        <div className="cp-avoid">
          {block.title && <Label>{block.title}</Label>}
          <ul className={`grid gap-x-8 gap-y-2 ${block.cols ? 'sm:grid-cols-2' : 'max-w-3xl'}`}>
            {block.items.map((it, i) => (
              <li key={i} className="flex gap-2.5 text-[14.5px] text-stone-700 leading-relaxed font-sans">
                <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#FF8A00] shrink-0" />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    case 'table':
      return (
        <div className="cp-avoid">
          {block.title && <Label>{block.title}</Label>}
          <div className="overflow-x-auto rounded-xl border border-stone-200 bg-white">
            <table className="w-full text-sm font-sans min-w-[420px]">
              <thead>
                <tr className="bg-[#101B35] text-white">
                  {block.head.map((h, i) => (
                    <th key={i} className="text-left px-4 py-3 text-[11px] uppercase tracking-wider font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((r, ri) => (
                  <tr key={ri} className={ri % 2 ? 'bg-[#F8F7F3]' : 'bg-white'}>
                    {r.map((c, ci) => (
                      <td key={ci} className={`px-4 py-2.5 align-top border-t border-stone-100 ${ci === 0 ? 'font-semibold text-[#101B35]' : 'text-stone-700'}`}>{c}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    case 'note': {
      const warn = block.tone === 'warn';
      const Icon = warn ? AlertTriangle : Info;
      return (
        <div className={`cp-avoid flex gap-3 rounded-xl border p-4 sm:p-5 ${warn ? 'bg-amber-50/70 border-amber-300/70' : 'bg-[#E9ECF3]/60 border-[#263C70]/20'}`} role="note">
          <Icon className={`w-5 h-5 shrink-0 mt-0.5 ${warn ? 'text-[#FF8A00]' : 'text-[#263C70]'}`} />
          <div>
            {block.title && <div className="text-sm font-bold text-[#101B35] font-sans mb-1">{block.title}</div>}
            <p className="text-sm text-stone-700 leading-relaxed font-sans">{block.text}</p>
          </div>
        </div>
      );
    }
    case 'groups': {
      const cols = block.cols === 3 ? 'lg:grid-cols-3 md:grid-cols-2' : 'md:grid-cols-2';
      return (
        <div>
          {block.title && <Label>{block.title}</Label>}
          <div className={`grid gap-4 ${cols}`}>
            {block.groups.map((g, i) => (
              <div key={i} className="cp-avoid rounded-xl border border-stone-200 bg-white p-5">
                <h5 className="font-serif font-bold text-[#101B35] text-[17px] leading-snug">{g.title}</h5>
                {g.sub && <p className="text-xs text-[#FF8A00] font-semibold mt-1 font-sans">{g.sub}</p>}
                <ul className="mt-3 space-y-1.5">
                  {g.items.map((it, j) => (
                    <li key={j} className="flex gap-2 text-[13.5px] text-stone-700 leading-relaxed font-sans">
                      <ChevronRight className="w-3.5 h-3.5 mt-1 text-[#FF8A00] shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      );
    }
    case 'cards': {
      const cols = block.cols === 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : block.cols === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2';
      return (
        <div>
          {block.title && <Label>{block.title}</Label>}
          <div className={`grid gap-4 ${cols}`}>
            {block.items.map((c, i) => (
              <div key={i} className="cp-avoid rounded-xl border border-stone-200 bg-white p-5 border-t-[3px] border-t-[#FF8A00]">
                <h5 className="font-serif font-bold text-[#101B35] text-lg">{c.title}</h5>
                <p className="mt-2 text-[14px] text-stone-700 leading-relaxed font-sans">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }
    case 'steps':
      return (
        <div className="cp-avoid">
          {block.title && <Label>{block.title}</Label>}
          <ol className="space-y-2.5 max-w-3xl">
            {block.items.map((it, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="w-7 h-7 rounded-full bg-[#101B35] text-white text-xs font-bold flex items-center justify-center shrink-0 font-sans">{i + 1}</span>
                <span className="text-[14.5px] text-stone-700 leading-relaxed pt-1 font-sans">{it}</span>
              </li>
            ))}
          </ol>
        </div>
      );
    case 'quote':
      return (
        <blockquote className="cp-avoid border-l-4 border-[#FF8A00] bg-white rounded-r-xl pl-5 pr-4 py-4 max-w-3xl shadow-sm">
          <p className="font-serif text-lg sm:text-xl italic text-[#101B35] leading-relaxed">{block.text}</p>
        </blockquote>
      );
    case 'links':
      return (
        <ul className="grid gap-2">
          {block.items.map((l, i) => (
            <li key={i}>
              <a href={l.url} target="_blank" rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 rounded-lg border border-stone-200 bg-white px-4 py-3 text-sm font-sans text-[#101B35] hover:border-[#FF8A00] transition-colors">
                <span>{l.label}</span>
                <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-[#FF8A00] shrink-0" />
              </a>
            </li>
          ))}
        </ul>
      );
    case 'visual':
      return <Visual name={block.name} />;
    default:
      return null;
  }
};

const Blocks: React.FC<{ blocks: Block[] }> = ({ blocks }) => (
  <div className="space-y-6">
    {blocks.map((b, i) => <BlockView key={i} block={b} />)}
  </div>
);

/* ------------------------------------------------------------------ */
/* Visuals                                                             */
/* ------------------------------------------------------------------ */

const Visual: React.FC<{ name: string }> = ({ name }) => {
  switch (name) {
    case 'structure': return <StructureViz />;
    case 'ecosystem': return <EcosystemViz />;
    case 'organogram': return <Organogram />;
    case 'checklist': return <NinetyDay />;
    case 'timeline': return <Timeline />;
    case 'revenueChart': return <RevenueViz />;
    case 'ebitdaChart': return <IncomeViz />;
    case 'capitalChart': return <CapitalViz />;
    default: return null;
  }
};

const StructureViz: React.FC = () => (
  <figure className="cp-avoid rounded-2xl border border-stone-200 bg-white p-4 sm:p-6" aria-label="Proposed group structure">
    <div className="mx-auto max-w-xl rounded-xl bg-[#101B35] text-white text-center px-5 py-5">
      <div className="text-[10px] tracking-[0.2em] uppercase text-[#FFC400] font-bold">Parent / Holding Company</div>
      <div className="font-serif text-xl sm:text-2xl font-bold mt-1">ARISE HOPE GROUP (PTY) LTD</div>
      <p className="text-xs text-white/70 mt-2 font-sans">Group governance • Capital allocation • Strategy • Corporate oversight</p>
    </div>
    <div className="mx-auto w-px h-6 bg-stone-300" />
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {STRUCTURE_GROUPS.map((g, i) => (
        <div key={i} className="rounded-xl border border-stone-200 bg-[#F8F7F3] p-3.5">
          <div className="text-[10px] font-bold uppercase tracking-wider text-[#FF8A00] min-h-[28px]">{g.title}</div>
          <div className="mt-2 space-y-2">
            {g.subs.map((s) => (
              <div key={s} className="rounded-lg bg-white border border-stone-200 px-3 py-2 text-[12.5px] font-semibold text-[#101B35] leading-snug font-sans">{s}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
    <figcaption className="mt-4 text-center text-[11px] uppercase tracking-wider text-stone-500 font-sans">Proposed group structure — proposed business names only</figcaption>
  </figure>
);

const EcosystemViz: React.FC = () => (
  <figure className="cp-avoid rounded-2xl border border-stone-200 bg-white p-4 sm:p-6">
    <div className="text-center">
      <div className="text-[11px] font-bold uppercase tracking-wider text-[#FF8A00]">Integrated Group Business Ecosystem</div>
      <div className="mt-3 inline-block rounded-xl bg-[#101B35] text-white px-6 py-3">
        <div className="font-serif font-bold text-lg">ARISE HOPE GROUP</div>
        <div className="text-xs text-white/70 font-sans">Group strategy, governance and capital allocation</div>
      </div>
    </div>
    <div className="mx-auto w-px h-5 bg-stone-300" />
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {ECOSYSTEM.map((e) => (
        <div key={e.name} className="rounded-xl border border-stone-200 bg-[#F8F7F3] p-3 text-center">
          <div className="text-sm font-bold text-[#101B35] font-sans">{e.name}</div>
          <div className="text-xs text-stone-500 mt-0.5 font-sans">{e.role}</div>
        </div>
      ))}
    </div>
    <div className="mx-auto w-px h-5 bg-stone-300" />
    <div className="rounded-xl bg-gradient-to-r from-[#FF8A00] to-[#FFC400] text-[#101B35] px-4 py-3 text-center">
      <div className="text-sm font-bold font-sans">Commercial results and sustainable development</div>
      <div className="text-xs font-semibold font-sans">Revenue • Jobs • Assets • Investment returns • Community impact</div>
    </div>
  </figure>
);

const Organogram: React.FC = () => (
  <figure className="cp-avoid rounded-2xl border border-stone-200 bg-white p-4 sm:p-6">
    <div className="flex flex-col items-center">
      {[
        { t: 'Shareholders', s: 'Ownership and reserved shareholder decisions', dark: false },
        { t: 'Board of Directors', s: 'Strategy, governance, oversight and accountability', dark: true },
        { t: 'Group Chief Executive Officer', s: '', dark: true },
      ].map((n, i) => (
        <React.Fragment key={n.t}>
          {i > 0 && <div className="w-px h-5 bg-stone-300" />}
          <div className={`w-full max-w-md text-center rounded-xl px-4 py-3 border ${n.dark ? 'bg-[#101B35] text-white border-[#101B35]' : 'bg-[#F8F7F3] text-[#101B35] border-stone-300'}`}>
            <div className="font-serif font-bold">{n.t}</div>
            {n.s && <div className={`text-xs mt-0.5 font-sans ${n.dark ? 'text-white/70' : 'text-stone-500'}`}>{n.s}</div>}
          </div>
        </React.Fragment>
      ))}
      <div className="w-px h-5 bg-stone-300" />
    </div>
    <div className="grid grid-cols-2 lg:grid-cols-6 gap-3">
      {ORGANOGRAM.map((o) => (
        <div key={o.role} className="rounded-xl border border-stone-200 bg-[#F8F7F3] p-3 text-center border-t-[3px] border-t-[#FF8A00]">
          <div className="text-[11px] font-bold text-[#101B35] leading-snug font-sans">{o.role}</div>
          <div className="text-xs text-stone-600 mt-1 font-sans">{o.head}</div>
        </div>
      ))}
    </div>
    <div className="w-px h-5 bg-stone-300 mx-auto" />
    <div className="rounded-xl border border-dashed border-[#263C70] bg-[#E9ECF3]/50 px-4 py-3 text-center">
      <div className="font-serif font-bold text-[#101B35]">Subsidiary and Division Management</div>
      <div className="text-xs text-stone-600 font-sans">Operational managers and accountable business-unit leaders</div>
    </div>
  </figure>
);

/* ---- Financial visuals ---- */

const RevenueViz: React.FC = () => {
  const [hover, setHover] = useState<number | null>(null);
  const max = 50;
  return (
    <div className="space-y-5">
      <figure className="cp-avoid rounded-2xl border border-stone-200 bg-white p-4 sm:p-6">
        <div className="text-[11px] font-bold uppercase tracking-wider text-[#FF8A00]">Illustrative group revenue forecast</div>
        <div className="text-xs text-stone-500 font-sans mb-4">Figures in R millions; illustrative commercial revenue only.</div>
        <div className="flex items-end gap-2 sm:gap-6 h-64 border-b border-stone-300 px-1">
          {YEARS.map((y, yi) => (
            <div key={y} className="flex-1 flex flex-col items-center justify-end h-full">
              <div className="text-xs font-bold text-[#101B35] mb-1 font-sans">R{REVENUE_TOTAL[yi].toFixed(1)}m</div>
              <div className="w-full max-w-[72px] flex flex-col-reverse rounded-t-md overflow-hidden" style={{ height: `${(REVENUE_TOTAL[yi] / max) * 85}%` }}>
                {REVENUE_BY_DIVISION.map((d, si) => {
                  const v = d.values[yi];
                  if (!v) return null;
                  return (
                    <div key={d.name} title={`${d.name} ${y}: R${v.toFixed(1)}m`}
                      style={{ height: `${(v / REVENUE_TOTAL[yi]) * 100}%`, background: SERIES_COLORS[si], opacity: hover === null || hover === si ? 1 : 0.2, transition: 'opacity .2s' }} />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-2 sm:gap-6 px-1 mt-2">
          {YEARS.map((y) => <div key={y} className="flex-1 text-center text-xs font-semibold text-stone-600 font-sans">{y}</div>)}
        </div>
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
          {REVENUE_BY_DIVISION.map((d, i) => (
            <button key={d.name} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)} onFocus={() => setHover(i)} onBlur={() => setHover(null)}
              className="flex items-center gap-1.5 text-[11px] text-stone-600 font-sans hover:text-[#101B35] cp-noprint-hover">
              <span className="w-2.5 h-2.5 rounded-sm" style={{ background: SERIES_COLORS[i] }} />{d.name}
            </button>
          ))}
        </div>
      </figure>

      <div className="cp-avoid overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm font-sans min-w-[560px]">
          <thead>
            <tr className="bg-[#101B35] text-white">
              <th className="text-left px-4 py-3 text-[11px] uppercase tracking-wider">Business division</th>
              {YEARS.map((y) => <th key={y} className="text-right px-4 py-3 text-[11px] tracking-wider">{y}</th>)}
            </tr>
          </thead>
          <tbody>
            {REVENUE_BY_DIVISION.map((d, i) => (
              <tr key={d.name} className={i % 2 ? 'bg-[#F8F7F3]' : 'bg-white'}>
                <td className="px-4 py-2.5 font-semibold text-[#101B35] border-t border-stone-100">{d.name}</td>
                {d.values.map((v, j) => <td key={j} className="px-4 py-2.5 text-right tabular-nums text-stone-700 border-t border-stone-100">{fmt(v)}</td>)}
              </tr>
            ))}
            <tr className="bg-[#101B35]/5 font-bold">
              <td className="px-4 py-3 text-[#101B35] border-t-2 border-[#101B35]">Total revenue</td>
              {REVENUE_TOTAL.map((v, j) => <td key={j} className="px-4 py-3 text-right tabular-nums text-[#101B35] border-t-2 border-[#101B35]">{fmt(v)}</td>)}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const IncomeViz: React.FC = () => {
  const rows: { label: string; data: number[]; strong?: boolean }[] = [
    { label: 'Revenue', data: INCOME_STATEMENT.revenue },
    { label: 'Direct costs', data: INCOME_STATEMENT.direct },
    { label: 'Gross profit', data: INCOME_STATEMENT.gross, strong: true },
    { label: 'Operating expenses', data: INCOME_STATEMENT.opex },
    { label: 'EBITDA', data: INCOME_STATEMENT.ebitda, strong: true },
  ];
  const maxE = 6.5;
  return (
    <div className="space-y-5">
      <p className="text-xs text-stone-500 font-sans">Figures in R millions.</p>
      <div className="cp-avoid overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm font-sans min-w-[520px]">
          <thead>
            <tr className="bg-[#101B35] text-white">
              <th className="text-left px-4 py-3 text-[11px] uppercase tracking-wider">Financial item</th>
              {YEARS.map((y) => <th key={y} className="text-right px-4 py-3 text-[11px] tracking-wider">{y}</th>)}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.label} className={`${r.strong ? 'bg-[#FFC400]/15 font-bold' : i % 2 ? 'bg-[#F8F7F3]' : 'bg-white'}`}>
                <td className="px-4 py-2.5 text-[#101B35] font-semibold border-t border-stone-100">{r.label}</td>
                {r.data.map((v, j) => <td key={j} className="px-4 py-2.5 text-right tabular-nums text-stone-800 border-t border-stone-100">{v.toFixed(2)}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <figure className="cp-avoid rounded-2xl border border-stone-200 bg-white p-4 sm:p-6">
        <div className="text-[11px] font-bold uppercase tracking-wider text-[#FF8A00] mb-4">EBITDA (R millions) and calculated EBITDA margin</div>
        <div className="flex items-end gap-3 sm:gap-8 h-44 border-b border-stone-300">
          {YEARS.map((y, i) => (
            <div key={y} className="flex-1 flex flex-col items-center justify-end h-full">
              <div className="text-xs font-bold text-[#101B35] font-sans">R{INCOME_STATEMENT.ebitda[i].toFixed(2)}m</div>
              <div className="text-[10px] text-stone-500 mb-1 font-sans">{((INCOME_STATEMENT.ebitda[i] / INCOME_STATEMENT.revenue[i]) * 100).toFixed(1)}%</div>
              <div className="w-full max-w-[56px] rounded-t-md bg-gradient-to-t from-[#101B35] to-[#263C70]" style={{ height: `${(INCOME_STATEMENT.ebitda[i] / maxE) * 70}%` }} />
            </div>
          ))}
        </div>
        <div className="flex gap-3 sm:gap-8 mt-2">{YEARS.map((y) => <div key={y} className="flex-1 text-center text-xs font-semibold text-stone-600 font-sans">{y}</div>)}</div>
      </figure>
    </div>
  );
};

const CapitalViz: React.FC = () => {
  const total = CAPITAL_ALLOCATION.reduce((a, b) => a + b.amount, 0);
  return (
    <div className="cp-avoid rounded-2xl border border-stone-200 bg-white p-4 sm:p-6">
      <div className="space-y-4">
        {CAPITAL_ALLOCATION.map((c, i) => (
          <div key={c.purpose}>
            <div className="flex justify-between gap-3 text-sm font-sans">
              <span className="font-semibold text-[#101B35]">{c.purpose}</span>
              <span className="text-stone-600 tabular-nums shrink-0">{c.pct}% &nbsp;•&nbsp; <strong className="text-[#101B35]">{rand(c.amount)}</strong></span>
            </div>
            <div className="mt-1.5 h-3 rounded-full bg-stone-100 overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${c.pct * 2.5}%`, background: SERIES_COLORS[i] }} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 pt-4 border-t-2 border-[#101B35] flex justify-between text-sm font-bold text-[#101B35] font-sans">
        <span>Total (100%)</span><span className="tabular-nums">{rand(total)}</span>
      </div>
    </div>
  );
};

/* ---- 90-day plan ---- */

const NinetyDay: React.FC = () => {
  const total = NINETY_DAY.reduce((a, p) => a + p.items.length, 0);
  const [done, setDone] = useState<Record<string, boolean>>(() => {
    try { return JSON.parse(localStorage.getItem('ahg-cp-90day') || '{}'); } catch { return {}; }
  });
  const [copied, setCopied] = useState(false);
  useEffect(() => { try { localStorage.setItem('ahg-cp-90day', JSON.stringify(done)); } catch { /* ignore */ } }, [done]);

  const count = Object.values(done).filter(Boolean).length;
  const toggle = (k: string) => setDone((d) => ({ ...d, [k]: !d[k] }));

  const copy = async () => {
    const text = 'ARISE HOPE GROUP – First 90-day action plan\n\n' + NINETY_DAY.map((p, pi) =>
      `${p.period}: ${p.title}\n` + p.items.map((it, ii) => `${done[`${pi}-${ii}`] ? '[x]' : '[ ]'} ${it}`).join('\n')).join('\n\n');
    try { await navigator.clipboard.writeText(text); }
    catch {
      const ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); } catch { /* ignore */ } document.body.removeChild(ta);
    }
    setCopied(true); setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-5">
      <div className="rounded-2xl bg-[#101B35] text-white p-5 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
        <div className="flex-1">
          <div className="text-[11px] uppercase tracking-wider text-[#FFC400] font-bold">Implementation progress</div>
          <div className="font-serif text-3xl font-bold mt-0.5 tabular-nums" aria-live="polite">{count}/{total}</div>
          <div className="mt-3 h-2 rounded-full bg-white/15 overflow-hidden" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={count}>
            <div className="h-full bg-gradient-to-r from-[#FF8A00] to-[#FFC400] transition-all duration-300" style={{ width: `${(count / total) * 100}%` }} />
          </div>
        </div>
        <div className="flex gap-2 cp-noprint">
          <button onClick={copy} className="px-3.5 py-2 rounded-lg bg-white text-[#101B35] text-xs font-bold flex items-center gap-2 hover:bg-[#FFC400] transition-colors">
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}{copied ? 'Copied' : 'Copy implementation checklist'}
          </button>
          <button onClick={() => setDone({})} className="px-3 py-2 rounded-lg border border-white/30 text-xs font-semibold flex items-center gap-1.5 hover:bg-white/10" aria-label="Reset checklist">
            <RotateCcw className="w-3.5 h-3.5" />Reset
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {NINETY_DAY.map((p, pi) => {
          const n = p.items.filter((_, ii) => done[`${pi}-${ii}`]).length;
          return (
            <div key={p.period} className="cp-avoid rounded-xl border border-stone-200 bg-white overflow-hidden">
              <div className="flex items-center gap-3 px-4 py-3 bg-[#F1F2F4] border-b border-stone-200">
                <span className="text-xs font-bold bg-[#101B35] text-white rounded-md px-2 py-1 font-sans whitespace-nowrap">{p.period}</span>
                <span className="font-serif font-bold text-[#101B35] leading-tight flex-1">{p.title}</span>
                <span className="text-xs text-stone-500 tabular-nums font-sans">{n}/{p.items.length}</span>
              </div>
              <ul className="p-2">
                {p.items.map((it, ii) => {
                  const k = `${pi}-${ii}`;
                  return (
                    <li key={k}>
                      <label className="flex items-start gap-3 px-2.5 py-2 rounded-lg hover:bg-[#F8F7F3] cursor-pointer">
                        <input type="checkbox" checked={!!done[k]} onChange={() => toggle(k)} className="peer sr-only" />
                        <span className="mt-0.5 w-5 h-5 rounded border-2 border-stone-300 flex items-center justify-center shrink-0 peer-checked:bg-[#FF8A00] peer-checked:border-[#FF8A00] peer-focus-visible:ring-2 peer-focus-visible:ring-[#101B35] text-white">
                          {done[k] && <Check className="w-3.5 h-3.5" strokeWidth={3} />}
                        </span>
                        <span className={`text-[14px] leading-snug font-sans ${done[k] ? 'text-stone-400 line-through' : 'text-stone-700'}`}>{it}</span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* ---- Five-year timeline ---- */

const Timeline: React.FC = () => {
  const [active, setActive] = useState(1);
  return (
    <div className="space-y-5">
      <div className="cp-noprint rounded-2xl border border-stone-200 bg-white p-4 sm:p-6">
        <div role="tablist" aria-label="Five-year roadmap" className="relative flex justify-between">
          <div className="absolute left-4 right-4 top-[18px] h-0.5 bg-stone-200" />
          <div className="absolute left-4 top-[18px] h-0.5 bg-[#FF8A00] transition-all duration-300" style={{ width: `calc((100% - 2rem) * ${active / (ROADMAP.length - 1)})` }} />
          {ROADMAP.map((r, i) => (
            <button key={r.year} role="tab" aria-selected={active === i} onClick={() => setActive(i)} className="relative z-10 flex flex-col items-center gap-1.5 focus:outline-none group">
              <span className={`w-9 h-9 rounded-full border-2 flex items-center justify-center text-[11px] font-bold font-sans transition-all ${i <= active ? 'bg-[#101B35] border-[#FF8A00] text-white' : 'bg-white border-stone-300 text-stone-500'} ${active === i ? 'scale-110 ring-4 ring-[#FF8A00]/25' : ''}`}>{r.year.slice(2)}</span>
              <span className={`text-xs font-bold font-sans ${active === i ? 'text-[#101B35]' : 'text-stone-500 group-hover:text-[#101B35]'}`}>{r.year}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {ROADMAP.map((r, i) => (
          <div key={r.year} role="tabpanel" className={`${active === i ? 'block cp-fade' : 'hidden'} print:block cp-avoid rounded-2xl border border-stone-200 bg-white overflow-hidden`}>
            <div className="flex flex-wrap items-center gap-3 px-5 py-4 bg-[#101B35] text-white">
              <span className="font-serif text-3xl font-bold text-[#FFC400]">{r.year}</span>
              <span className="font-serif text-xl">– {r.title}</span>
              {r.target && <span className="sm:ml-auto text-xs font-bold bg-[#FF8A00] text-[#101B35] rounded-full px-3 py-1 font-sans">Target {r.target} illustrative revenue</span>}
            </div>
            <ul className="p-5 grid sm:grid-cols-2 gap-x-8 gap-y-2">
              {r.items.map((it) => (
                <li key={it} className="flex gap-2.5 text-[14.5px] text-stone-700 leading-relaxed font-sans">
                  <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#FF8A00] shrink-0" />{it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Divisions (Part B)                                                  */
/* ------------------------------------------------------------------ */

const DivisionBlock: React.FC<{ s: Section; open: boolean; onToggle: () => void }> = ({ s, open, onToggle }) => {
  const Icon = ICONS[s.icon || 'briefcase'] || Briefcase;
  const panelId = `division-panel-${s.no}`;
  return (
    <article id={`s-${s.no}`} className="scroll-mt-28 rounded-2xl border border-stone-200 bg-white overflow-hidden">
      <button onClick={onToggle} aria-expanded={open} aria-controls={panelId}
        className="w-full text-left flex items-start gap-4 p-4 sm:p-5 hover:bg-[#F8F7F3] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#FF8A00]">
        <span className="w-12 h-12 rounded-xl bg-[#101B35] text-[#FFC400] flex items-center justify-center shrink-0"><Icon className="w-6 h-6" /></span>
        <span className="flex-1 min-w-0">
          <span className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs text-[#FF8A00] font-bold">{s.no.padStart(2, '0')}</span>
            {s.tags?.map((t) => (
              <span key={t} className={`text-[10px] font-bold uppercase tracking-wider rounded-full px-2 py-0.5 font-sans ${t === 'Regulated activity' ? 'bg-amber-100 text-amber-800' : 'bg-[#E9ECF3] text-[#263C70]'}`}>{t}</span>
            ))}
          </span>
          <h3 className="mt-1 text-lg sm:text-xl font-serif font-bold text-[#101B35] leading-snug">{s.title}</h3>
          {!open && <p className="mt-1 text-sm text-stone-600 line-clamp-2 font-sans print:hidden">{s.mandate}</p>}
        </span>
        <ChevronDown className={`w-5 h-5 text-stone-400 mt-1 shrink-0 transition-transform cp-noprint ${open ? 'rotate-180 text-[#FF8A00]' : ''}`} />
      </button>
      <div id={panelId} className={`${open ? 'block' : 'hidden'} print:block border-t border-stone-200 bg-[#FBFAF7] p-4 sm:p-6 space-y-6`}>
        <div className="rounded-xl bg-white border border-stone-200 p-4 border-l-4 border-l-[#FF8A00]">
          <Label>Business mandate</Label>
          <p className="text-[15px] text-[#101B35] font-sans leading-relaxed">{s.mandate}</p>
        </div>
        <Blocks blocks={s.blocks} />
      </div>
    </article>
  );
};

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export const CorporateProfilePage: React.FC = () => {
  const { navigate } = useNavigation();
  const [activeId, setActiveId] = useState('overview');
  const [tocOpen, setTocOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [progress, setProgress] = useState(0);
  const divisionPart = PARTS.find((p) => p.id === 'part-b')!;
  const [openDivs, setOpenDivs] = useState<Set<string>>(new Set([divisionPart.sections[0].no]));
  const pendingScroll = useRef<string | null>(null);

  // Document title (restored on leave)
  useEffect(() => {
    const prev = document.title;
    document.title = 'Corporate Profile & Business Plan — ARISE HOPE GROUP';
    return () => { document.title = prev; };
  }, []);

  // Scroll spy + back-to-top + reading progress
  useEffect(() => {
    const ids = TOC.map((t) => t.id);
    const onScroll = () => {
      setShowTop(window.scrollY > 700);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(100, (window.scrollY / h) * 100) : 0);
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top - NAV_OFFSET - 40 <= 0) current = id;
      }
      setActiveId(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);

  // Scroll after a collapsed division is opened
  useEffect(() => {
    if (pendingScroll.current) { const id = pendingScroll.current; pendingScroll.current = null; requestAnimationFrame(() => scrollToId(id)); }
  }, [openDivs]);

  const goTo = useCallback((id: string) => {
    setTocOpen(false);
    const m = id.match(/^s-(\d+)$/);
    if (m && divisionPart.sections.some((s) => s.no === m[1])) {
      pendingScroll.current = id;
      setOpenDivs((prev) => new Set(prev).add(m[1]));
      requestAnimationFrame(() => { if (pendingScroll.current) { scrollToId(id); pendingScroll.current = null; } });
      return;
    }
    scrollToId(id);
  }, [divisionPart]);

  const toggleDiv = (no: string) => setOpenDivs((prev) => { const n = new Set(prev); n.has(no) ? n.delete(no) : n.add(no); return n; });
  const allOpen = openDivs.size === divisionPart.sections.length;

  const activeToc = useMemo(() => TOC.find((t) => t.id === activeId), [activeId]);

  const TocList = (
    <ul className="space-y-0.5">
      {TOC.map((t) => {
        const on = t.id === activeId;
        return (
          <li key={t.id}>
            <button onClick={() => goTo(t.id)} aria-current={on ? 'true' : undefined}
              className={`w-full flex items-center gap-2.5 text-left px-2.5 py-1.5 rounded-lg text-[13px] font-sans transition-colors ${on ? 'bg-[#101B35] text-white font-semibold' : 'text-stone-600 hover:bg-stone-100 hover:text-[#101B35]'}`}>
              <span className={`w-5 h-5 rounded text-[10px] font-bold flex items-center justify-center shrink-0 ${on ? 'bg-[#FF8A00] text-[#101B35]' : 'bg-stone-200 text-stone-600'}`}>{t.letter}</span>
              <span className="leading-snug">{t.label}</span>
            </button>
            {on && t.sections.length > 1 && (
              <ul className="ml-4 pl-3 my-1 border-l border-stone-200 space-y-0.5">
                {t.sections.map((s) => (
                  <li key={s.no}>
                    <button onClick={() => goTo(`s-${s.no}`)} className="w-full text-left text-[12px] text-stone-500 hover:text-[#FF8A00] py-0.5 leading-snug font-sans">
                      <span className="font-mono text-stone-400 mr-1.5">{s.no}</span>{s.title}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className="cp-root bg-[#F8F7F3] min-h-screen">
      <style>{PRINT_CSS}</style>

      {/* Reading progress */}
      <div className="cp-noprint fixed left-0 right-0 top-0 z-[60] h-[3px] bg-transparent pointer-events-none">
        <div className="h-full bg-[#FF8A00] transition-[width] duration-100" style={{ width: `${progress}%` }} />
      </div>

      {/* ============ HERO ============ */}
      <section className="cp-hero relative pt-28 sm:pt-36 pb-14 sm:pb-20 bg-[#101B35] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.12]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="absolute -right-24 -top-24 w-[420px] h-[420px] rounded-full border border-white/10" />
        <div className="absolute -right-10 -top-10 w-[300px] h-[300px] rounded-full border border-[#FF8A00]/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="cp-noprint flex items-center gap-2 text-xs text-white/60 font-sans mb-6" aria-label="Breadcrumb">
            <button onClick={() => navigate('/')} className="hover:text-white">Home</button>
            <ChevronRight className="w-3.5 h-3.5" /><span className="text-white font-semibold">Corporate Profile</span>
          </nav>
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-12 bg-[#FF8A00]" />
            <span className="text-[11px] tracking-[0.25em] uppercase font-bold text-[#FFC400] font-sans">Official Corporate Document</span>
          </div>
          <p className="font-sans text-sm sm:text-base tracking-[0.18em] text-white/80 font-semibold">{COVER.company}</p>
          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-7xl font-serif font-bold leading-[1.05] max-w-4xl">
            Corporate Profile <span className="text-[#FF8A00]">&amp;</span> Business Plan
          </h1>
          <p className="mt-6 font-serif italic text-xl sm:text-2xl text-white/90 max-w-3xl">{COVER.slogan}</p>
          <p className="mt-4 text-xs sm:text-sm tracking-[0.2em] text-white/60 font-sans font-semibold">{COVER.regions}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FFC400]/50 bg-[#FFC400]/10 px-4 py-2 text-xs font-bold text-[#FFC400] font-sans">
              <span className="w-2 h-2 rounded-full bg-[#FFC400] animate-pulse" />{COVER.status}
            </span>
            <button onClick={() => window.print()} className="cp-noprint inline-flex items-center gap-2 rounded-full bg-white text-[#101B35] px-4 py-2 text-xs font-bold hover:bg-[#FFC400] transition-colors font-sans">
              <Printer className="w-4 h-4" />Print / Save as PDF
            </button>
            <button onClick={() => goTo('part-h')} className="cp-noprint inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-xs font-semibold hover:bg-white/10 transition-colors font-sans">
              Financial plan <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <dl className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/15 rounded-xl overflow-hidden border border-white/15">
            {[
              ['Corporate status', 'Registered – not yet fully operational'],
              ['Planning period', '2026–2030'],
              ['Geographical focus', 'South Africa • SADC • Africa • International'],
              ['Proposed divisions', 'Nine business divisions'],
            ].map(([k, v]) => (
              <div key={k} className="bg-[#101B35] p-4 sm:p-5">
                <dt className="text-[10px] uppercase tracking-wider text-[#FF8A00] font-bold font-sans">{k}</dt>
                <dd className="mt-1 text-sm text-white font-sans leading-snug">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Mobile section bar */}
      <div className="cp-noprint lg:hidden sticky top-[57px] sm:top-[65px] z-30 bg-white/95 backdrop-blur border-b border-stone-200">
        <button onClick={() => setTocOpen(!tocOpen)} aria-expanded={tocOpen} className="w-full flex items-center justify-between gap-3 px-4 py-3 text-sm font-sans">
          <span className="flex items-center gap-2 font-semibold text-[#101B35]"><ListTree className="w-4 h-4 text-[#FF8A00]" />Contents
            <span className="text-stone-500 font-normal">· {activeToc?.letter !== '•' && activeToc?.letter !== '+' ? `Part ${activeToc?.letter} ` : ''}{activeToc?.label}</span></span>
          {tocOpen ? <X className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {tocOpen && <div className="max-h-[60vh] overflow-y-auto px-3 pb-4 border-t border-stone-100 pt-2 bg-white">{TocList}</div>}
      </div>

      {/* ============ BODY ============ */}
      <div className="cp-layout max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:grid lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12">
        <aside className="cp-noprint hidden lg:block">
          <div className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2">
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider font-bold text-stone-500 mb-3 font-sans"><FileText className="w-4 h-4 text-[#FF8A00]" />Table of contents</div>
            {TocList}
          </div>
        </aside>

        <div className="min-w-0 space-y-16 sm:space-y-20">
          {/* Overview */}
          <section id="overview" className="scroll-mt-28 cp-part">
            <SectionEyebrow>Document overview</SectionEyebrow>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#101B35] mb-6">Purpose, stakeholders and status</h2>
            <Blocks blocks={OVERVIEW} />
          </section>

          {PARTS.map((part) => (
            <section key={part.id} id={part.id} className="scroll-mt-28 cp-part">
              <header className="mb-8 pb-6 border-b-2 border-[#101B35] flex items-end gap-5">
                <span className="font-serif text-7xl sm:text-8xl font-bold leading-none text-transparent [-webkit-text-stroke:1.5px_#FF8A00]">{part.letter}</span>
                <div className="pb-1">
                  <div className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#FF8A00] font-sans">Part {part.letter}</div>
                  <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#101B35] leading-tight">{part.title}</h2>
                </div>
              </header>

              {part.id === 'part-b' && (
                <div className="mb-8 space-y-5">
                  <p className="text-[15px] text-stone-700 font-sans max-w-3xl leading-relaxed">
                    Nine proposed business divisions. Select a division to jump to its detail, or expand each panel below. Divisions marked as regulated must not commence until the applicable authorisations are in place.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 cp-noprint">
                    {part.sections.map((s) => {
                      const Icon = ICONS[s.icon || 'briefcase'];
                      return (
                        <button key={s.no} onClick={() => goTo(`s-${s.no}`)}
                          className="group text-left rounded-xl border border-stone-200 bg-white p-3.5 hover:border-[#FF8A00] hover:shadow-md hover:-translate-y-0.5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A00]">
                          <span className="flex items-center justify-between">
                            <span className="w-9 h-9 rounded-lg bg-[#F1F2F4] text-[#101B35] group-hover:bg-[#101B35] group-hover:text-[#FFC400] flex items-center justify-center transition-colors"><Icon className="w-[18px] h-[18px]" /></span>
                            <span className="font-mono text-[11px] text-stone-400">{s.no.padStart(2, '0')}</span>
                          </span>
                          <span className="block mt-2.5 text-[12.5px] font-bold text-[#101B35] leading-snug font-sans">{s.title.replace('Arise Hope ', '')}</span>
                        </button>
                      );
                    })}
                  </div>
                  <button onClick={() => setOpenDivs(allOpen ? new Set() : new Set(part.sections.map((s) => s.no)))}
                    className="cp-noprint text-xs font-bold text-[#101B35] border border-stone-300 rounded-lg px-3 py-2 hover:border-[#FF8A00] bg-white font-sans">
                    {allOpen ? 'Collapse all divisions' : 'Expand all divisions'}
                  </button>
                </div>
              )}

              <div className="space-y-10">
                {part.id === 'part-b' ? (
                  <div className="space-y-4">
                    {part.sections.map((s) => <DivisionBlock key={s.no} s={s} open={openDivs.has(s.no)} onToggle={() => toggleDiv(s.no)} />)}
                  </div>
                ) : (
                  part.sections.map((s) => (
                    <article key={s.no} id={`s-${s.no}`} className="scroll-mt-28">
                      <div className="flex items-baseline gap-3 mb-5">
                        <span className="font-mono text-sm font-bold text-[#FF8A00]">{s.no.padStart(2, '0')}</span>
                        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#101B35] leading-snug">{s.title}</h3>
                      </div>
                      <Blocks blocks={s.blocks} />
                    </article>
                  ))
                )}
              </div>
            </section>
          ))}

          {/* Closing brand panel */}
          <section className="cp-avoid rounded-3xl bg-[#101B35] text-white text-center px-6 py-12 sm:py-16 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '22px 22px' }} />
            <div className="relative">
              <div className="font-serif text-3xl sm:text-4xl font-bold">ARISE HOPE GROUP</div>
              <p className="mt-3 font-serif italic text-lg sm:text-xl text-[#FFC400]">{COVER.slogan}</p>
              <p className="mt-4 text-sm text-white/70 font-sans">A vision for sustainable business growth, investment and economic transformation.</p>
              <p className="mt-5 text-xs tracking-[0.2em] text-white/60 font-semibold font-sans">SOUTH AFRICA | AFRICA | INTERNATIONAL MARKETS</p>
            </div>
          </section>

          {/* Appendix */}
          <section id="appendix" className="scroll-mt-28 cp-part">
            <header className="mb-8 pb-6 border-b-2 border-[#101B35]">
              <div className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#FF8A00] font-sans">Appendix 1</div>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#101B35]">Corporate Information to Be Inserted</h2>
            </header>
            <Blocks blocks={APPENDIX} />
          </section>

          <div className="cp-noprint flex flex-wrap gap-3 pt-4 border-t border-stone-200">
            <button onClick={() => window.print()} className="inline-flex items-center gap-2 rounded-lg bg-[#101B35] text-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-[#1B2C56] font-sans"><Printer className="w-4 h-4" />Print / Save as PDF</button>
            <button onClick={() => navigate('/contact')} className="inline-flex items-center gap-2 rounded-lg border border-stone-300 bg-white text-[#101B35] px-4 py-2.5 text-xs font-bold uppercase tracking-wider hover:border-[#FF8A00] font-sans">Contact the Group <ArrowUpRight className="w-4 h-4 text-[#FF8A00]" /></button>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top"
        className={`cp-noprint fixed bottom-5 right-5 z-40 w-11 h-11 rounded-full bg-[#101B35] text-white shadow-lg border border-white/20 flex items-center justify-center hover:bg-[#FF8A00] hover:text-[#101B35] transition-all duration-200 ${showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'}`}>
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
};

const SectionEyebrow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#FF8A00] font-sans mb-2">{children}</div>
);
