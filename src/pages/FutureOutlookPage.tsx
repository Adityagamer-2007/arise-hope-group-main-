import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { FUTURE_PRIORITIES } from '../data/companyData';
import { PageHeader } from '../components/common/PageHeader';
import { 
  BatteryCharging, Globe, TrendingUp, Sparkles, 
  Target, Calendar, ArrowRight, CheckCircle2 
} from 'lucide-react';

export const FutureOutlookPage: React.FC = () => {
  const { navigate } = useNavigation();

  const getPriorityIcon = (num: number) => {
    switch (num) {
      case 1: return BatteryCharging;
      case 2: return Globe;
      case 3: return TrendingUp;
      case 4: return Sparkles;
      case 5: return Target;
      default: return Target;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F7F3]">
      <PageHeader
        badge="Strategic Horizons"
        title="Future Outlook & Long-Term Priorities."
        subtitle="Arise Hope Group's five-pillar strategic roadmap targets the pivotal transitions shaping Southern Africa's economy: clean energy minerals, regional food security, digital finance, enterprise AI telemetry, and cross-border infrastructure."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Future Outlook' }
        ]}
      />

      {/* Strategic Vision Overview */}
      <section className="py-16 sm:py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-[11px] font-sans uppercase tracking-wider text-[#FF8A00] font-bold">
              EXPANSION ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#101B35] leading-tight">
              A Forward-Looking Blueprint for Sustainable Conglomerate Scale.
            </h2>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-sans">
              Our 2025–2030 roadmap leverages the combined balance sheet and technical expertise of our ten subsidiaries to capture high-margin, scalable market opportunities across Southern Africa.
            </p>
          </div>
        </div>
      </section>

      {/* 5 Priorities In-Depth Breakdown */}
      <section className="py-16 sm:py-20 bg-[#F8F7F3] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-8 sm:space-y-10">
            {FUTURE_PRIORITIES.map((priority) => {
              const Icon = getPriorityIcon(priority.number);
              return (
                <div 
                  key={priority.number}
                  className="p-6 sm:p-10 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-md transition-all grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center"
                >
                  <div className="lg:col-span-4 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-lg bg-[#F8F7F3] border border-stone-200 text-[#101B35] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#FF8A00]" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-[#FF8A00] font-bold uppercase tracking-wider">
                          STRATEGIC PILLAR 0{priority.number}
                        </span>
                        <div className="text-xs font-mono text-stone-500 flex items-center gap-1.5 mt-0.5">
                          <Calendar className="w-3.5 h-3.5 text-[#101B35]" />
                          <span>Horizon: {priority.horizon}</span>
                        </div>
                      </div>
                    </div>

                    <span className="inline-block px-2.5 py-1 rounded bg-[#F8F7F3] border border-stone-200 text-xs font-sans text-stone-700 font-medium">
                      {priority.pillar}
                    </span>
                  </div>

                  <div className="lg:col-span-8 space-y-3">
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#101B35]">
                      {priority.title}
                    </h3>
                    <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-sans">
                      {priority.description}
                    </p>

                    <div className="pt-2 flex items-center gap-3 text-xs font-mono text-stone-400">
                      <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Active Governance Program
                      </span>
                      <span>•</span>
                      <span>Capital Syndication Pipeline</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Joint Venture & Investment Callout */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-5">
            <span className="text-[11px] font-sans uppercase tracking-wider text-[#FF8A00] font-bold">
              INSTITUTIONAL SYNDICATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#101B35]">
              Participate in Our Growth Horizons.
            </h2>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-sans max-w-xl mx-auto">
              We welcome institutional investors, co-developers, and regional sovereign bodies seeking robust, disciplined project delivery partners across Southern Africa.
            </p>
            <div className="pt-2">
              <button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#101B35] hover:bg-[#1B2C56] text-white font-semibold text-xs uppercase tracking-wider shadow-sm transition-all active:scale-95"
              >
                <span>Initiate Strategic Discussion</span>
                <ArrowRight className="w-4 h-4 text-[#FF8A00]" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
