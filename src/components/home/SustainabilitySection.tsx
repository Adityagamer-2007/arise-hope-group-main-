import React from 'react';
import { SUSTAINABILITY_COMMITMENTS } from '../../data/companyData';
import { useNavigation } from '../../context/NavigationContext';
import { Sun, Recycle, Users, ShieldCheck, ArrowUpRight, AlertCircle, Leaf } from 'lucide-react';

export const SustainabilitySection: React.FC = () => {
  const { navigate } = useNavigation();

  const getPillarIcon = (idx: number) => {
    switch (idx) {
      case 0: return Sun;
      case 1: return Recycle;
      case 2: return Users;
      case 3: return ShieldCheck;
      default: return Leaf;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-stone-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8F7F3] border border-stone-200 text-[#101B35] text-[11px] font-sans font-bold tracking-wider uppercase mb-3.5 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            <span>Environmental, Social &amp; Governance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#101B35] tracking-tight leading-tight">
            Committed to Sustainable Growth &amp; Community Stewardship.
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-stone-600 leading-relaxed font-sans">
            Arise Hope Group aligns commercial strategy with the United Nations Sustainable Development Goals. Our operations reflect disciplined corporate stewardship dedicated to decarbonization, circular economy, and human capital upliftment.
          </p>

          <div className="mt-4 p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-2.5 max-w-xl text-xs text-stone-600">
            <AlertCircle className="w-4 h-4 text-[#FF8A00] shrink-0 mt-0.5" />
            <span>{SUSTAINABILITY_COMMITMENTS.disclaimer}</span>
          </div>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Clean Architectural Graphic */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm relative aspect-[4/3] bg-stone-50">
              <img 
                src="/assets/images/sustainability_esg.svg" 
                alt="Arise Hope Group Clean Energy &amp; ESG Commitment" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-xs border border-stone-200 shadow-sm">
                <span className="text-[10px] font-mono tracking-wider text-[#FF8A00] uppercase font-bold block">
                  CAPITAL COMMITMENT
                </span>
                <p className="text-xs font-semibold text-[#101B35] mt-1">
                  Solar &amp; wind microgrids supporting mining, petroleum, and agro-processing hubs.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: The 4 Strategic Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SUSTAINABILITY_COMMITMENTS.pillars.map((pillar, idx) => {
              const Icon = getPillarIcon(idx);
              return (
                <div 
                  key={idx}
                  className="p-5 sm:p-6 rounded-xl bg-[#F8F7F3] border border-stone-200 hover:border-stone-300 transition-all flex flex-col justify-between shadow-xs"
                >
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-white border border-stone-200 text-[#101B35] flex items-center justify-center mb-3.5">
                      <Icon className="w-4 h-4 text-[#FF8A00]" />
                    </div>

                    <div className="text-2xl font-serif font-bold text-[#101B35]">
                      {pillar.metric}
                    </div>

                    <div className="text-[11px] font-mono font-bold text-[#FF8A00] mt-0.5">
                      {pillar.timeframe}
                    </div>

                    <h4 className="text-sm font-bold text-[#101B35] mt-2 font-serif">
                      {pillar.title}
                    </h4>

                    <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-2.5 border-t border-stone-200/60 text-[10px] font-mono text-stone-500">
                    {pillar.sdg}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Action Link to Full Sustainability Page */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate('/sustainability')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#101B35] hover:bg-[#1B2C56] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-sm active:scale-95"
          >
            <span>View Complete ESG Commitments &amp; SDG Framework</span>
            <ArrowUpRight className="w-4 h-4 text-[#FF8A00]" />
          </button>
        </div>

      </div>
    </section>
  );
};
