import React from 'react';
import { FUTURE_PRIORITIES } from '../../data/companyData';
import { useNavigation } from '../../context/NavigationContext';
import { Compass, ArrowUpRight, BatteryCharging, Globe, TrendingUp, Sparkles, Target } from 'lucide-react';

export const FutureRoadmapSection: React.FC = () => {
  const { navigate } = useNavigation();

  const getPriorityIcon = (number: number) => {
    switch (number) {
      case 1: return BatteryCharging;
      case 2: return Globe;
      case 3: return TrendingUp;
      case 4: return Sparkles;
      case 5: return Target;
      default: return Compass;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#F8F7F3] border-t border-stone-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 text-[#101B35] text-[11px] font-sans font-bold tracking-wider uppercase mb-3.5 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A00]" />
              <span>Strategic Horizons (2025–2030)</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#101B35] tracking-tight leading-tight">
              Future Priorities &amp; Expansion Roadmap.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed font-sans">
              Disciplined growth driven by regional megatrends: clean energy minerals, regional food security, digital banking access, and cross-border infrastructure delivery.
            </p>
          </div>

          <button
            onClick={() => navigate('/future-outlook')}
            className="px-5 py-2.5 rounded-lg bg-white border border-stone-200 text-xs font-semibold text-[#101B35] hover:bg-stone-50 flex items-center gap-2 self-start md:self-end transition-all shadow-xs"
          >
            <span>Detailed Roadmap Analysis</span>
            <ArrowUpRight className="w-4 h-4 text-[#FF8A00]" />
          </button>
        </div>

        {/* 5-Priority Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FUTURE_PRIORITIES.map((priority, index) => {
            const Icon = getPriorityIcon(priority.number);
            const isWide = index === 0 || index === 4;

            return (
              <div
                key={priority.number}
                className={`p-6 sm:p-7 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-md hover:border-stone-300 transition-all flex flex-col justify-between group ${
                  isWide ? 'lg:col-span-2' : 'lg:col-span-1'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-stone-100">
                    <span className="text-[11px] font-mono tracking-wider text-[#FF8A00] font-bold">
                      PRIORITY 0{priority.number}
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-stone-100 text-[11px] font-mono text-stone-600">
                      {priority.horizon}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-lg bg-[#F8F7F3] border border-stone-200 text-[#101B35] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#FF8A00]" />
                  </div>

                  <span className="text-[11px] font-sans uppercase tracking-wider text-stone-400 font-bold block mb-1.5">
                    {priority.pillar}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#101B35] group-hover:text-[#FF8A00] transition-colors leading-snug">
                    {priority.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                    {priority.description}
                  </p>
                </div>

                <div className="mt-6 pt-3.5 border-t border-stone-100 text-[11px] font-mono text-stone-400 flex items-center justify-between">
                  <span>CAPITAL DEPLOYMENT HORIZON</span>
                  <span className="text-[#101B35] font-semibold">ACTIVE GOVERNANCE</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
