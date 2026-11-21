import React, { useState } from 'react';
import { STRATEGIC_SYNERGIES } from '../../data/companyData';
import { 
  Zap, Layers, RefreshCw, Cpu, 
  ArrowRight, ShieldCheck, CheckCircle2 
} from 'lucide-react';

export const SynergyEcosystem: React.FC = () => {
  const [activeSynergyId, setActiveSynergyId] = useState<string>(STRATEGIC_SYNERGIES[0].id);

  const activeSynergy = STRATEGIC_SYNERGIES.find((s) => s.id === activeSynergyId) || STRATEGIC_SYNERGIES[0];

  const getSynergyIcon = (id: string) => {
    switch (id) {
      case 'integrated-project-delivery': return Layers;
      case 'supply-chain-logistics': return RefreshCw;
      case 'financial-investment-leverage': return Zap;
      case 'technology-enablement': return Cpu;
      case 'cross-sector-innovation': return ShieldCheck;
      default: return Layers;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#F8F7F3] border-t border-stone-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Editorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 text-[#101B35] text-[11px] font-sans font-bold tracking-wider uppercase mb-3.5 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A00]" />
            <span>Strategic Conglomerate Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#101B35] tracking-tight leading-tight">
            How Our Ecosystem Works Together.
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-stone-600 leading-relaxed font-sans">
            Arise Hope Group's nine specialized subsidiaries do not operate in silos. Through structured synergies, each business amplifies the capability, procurement power, and balance sheet of the collective group.
          </p>
        </div>

        {/* Interactive Synergy Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Column: Synergy Tab Selector */}
          <div className="lg:col-span-5 space-y-2.5">
            {STRATEGIC_SYNERGIES.map((synergy) => {
              const Icon = getSynergyIcon(synergy.id);
              const isSelected = activeSynergyId === synergy.id;

              return (
                <button
                  key={synergy.id}
                  onClick={() => setActiveSynergyId(synergy.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-xl transition-all duration-200 border flex items-start gap-3.5 ${
                    isSelected
                      ? 'bg-white border-[#101B35] shadow-md ring-1 ring-[#101B35]'
                      : 'bg-white/60 border-stone-200 hover:bg-white hover:border-stone-300'
                  }`}
                >
                  <div 
                    className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isSelected 
                        ? 'bg-[#101B35] text-white shadow-xs' 
                        : 'bg-stone-100 text-stone-600'
                    }`}
                  >
                    <Icon className="w-5 h-5 text-[#FF8A00]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm sm:text-base font-serif font-bold text-[#101B35] leading-snug">
                      {synergy.title}
                    </h3>
                    <p className="text-xs text-stone-500 mt-1 line-clamp-2 leading-relaxed">
                      {synergy.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Synergy Detail Card */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white border border-stone-200 p-6 sm:p-8 md:p-10 shadow-sm relative space-y-5">
              
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-stone-100">
                <span className="text-[11px] font-sans tracking-wider text-[#FF8A00] uppercase font-bold">
                  Operational Synergy Model
                </span>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 text-xs font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Turnkey Institutional Efficiency
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#101B35]">
                {activeSynergy.title}
              </h3>

              <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-sans">
                {activeSynergy.description}
              </p>

              {/* Connected Sectors */}
              <div className="pt-2">
                <h4 className="text-[11px] font-sans uppercase tracking-wider text-stone-400 font-bold mb-2.5">
                  Connected Subsidiaries:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeSynergy.sectorsInvolved.map((sec, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-[#F8F7F3] border border-stone-200 text-xs font-semibold text-[#101B35] flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A00]" />
                      {sec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Measurable Impact Box */}
              <div className="p-4 sm:p-5 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                <span className="text-[11px] font-sans uppercase tracking-wider text-[#101B35] font-bold block">
                  Strategic Conglomerate Impact:
                </span>
                <p className="text-xs sm:text-sm text-stone-700 font-medium leading-relaxed">
                  {activeSynergy.impact}
                </p>
              </div>

              {/* Governance Flow Indicators */}
              <div className="pt-3 flex items-center justify-between text-[10px] sm:text-xs text-stone-400 font-mono border-t border-stone-100">
                <span>UNIFIED GOVERNANCE</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FF8A00]" />
                <span>SHARED INFRASTRUCTURE</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#101B35]" />
                <span>SUSTAINED VALUE</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
