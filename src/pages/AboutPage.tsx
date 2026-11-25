import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { COMPANY_INFO, STRATEGIC_SYNERGIES } from '../data/companyData';
import { PageHeader } from '../components/common/PageHeader';
import { 
  Building2, CheckCircle2, ArrowRight, ShieldCheck, 
  Target, Sparkles, Globe, Award, Layers 
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigate } = useNavigation();

  const competitiveAdvantages = [
    {
      title: "End-to-End Turnkey Offerings",
      description: "Seamless integrated execution spanning conceptual engineering, project finance, civil works, procurement, and ongoing operations."
    },
    {
      title: "Robust Safety & ESG Management",
      description: "Strict institutional safety protocols, environmental compliance systems, and proactive hazard prevention across high-risk sectors."
    },
    {
      title: "Strategic Institutional Relationships",
      description: "Deep, enduring networks with regional suppliers, industrial regulators, sovereign infrastructure bodies, and financial institutions."
    },
    {
      title: "Diversified Revenue Architecture",
      description: "A well-balanced 10-sector portfolio across counter-cyclical and high-growth industries that mitigates localized macroeconomic shocks."
    },
    {
      title: "Agile Decision-Making Governance",
      description: "Streamlined executive reporting lines and autonomous subsidiary P&L leadership enabling rapid response to market opportunities."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F7F3]">
      <PageHeader
        badge="About Arise Hope Group"
        title="Transforming Industries. Uplifting Economies."
        subtitle="Established in 2020, Arise Hope Group is a premier South African holding company uniting ten industry-leading subsidiaries under disciplined corporate governance."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'About Us' }
        ]}
      />

      {/* Corporate Narrative & Origins */}
      <section className="py-16 sm:py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="text-[11px] font-sans uppercase tracking-wider text-[#FF8A00] font-bold">
                ESTABLISHED 2020 • SOUTHERN AFRICA
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#101B35] leading-tight">
                An Integrated Conglomerate Model Engineered for Resilience.
              </h2>
              <p className="text-base text-stone-700 leading-relaxed font-sans">
                {COMPANY_INFO.overview}
              </p>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-sans">
                {COMPANY_INFO.executiveSummary}
              </p>

              <div className="p-5 rounded-xl bg-[#F8F7F3] border border-stone-200">
                <div className="text-xs font-mono uppercase tracking-wider text-[#FF8A00] font-bold mb-1">
                  Tagline &amp; Core Philosophy:
                </div>
                <div className="text-xl font-serif italic text-[#101B35]">
                  "{COMPANY_INFO.tagline}"
                </div>
                <p className="text-xs text-stone-500 mt-2 font-sans">
                  Reflecting our unwavering commitment to shine as a benchmark of excellence, transparency, and sustainable industrial impact across Southern Africa.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden bg-white border border-stone-200 shadow-sm p-6 sm:p-8 space-y-6">
                <div className="flex items-center gap-3.5 pb-5 border-b border-stone-100">
                  <div className="w-14 h-14 rounded-xl overflow-hidden bg-[#05032E] border border-stone-200 p-0.5 shrink-0">
                    <img 
                      src="/assets/images/logo.jpg" 
                      alt="Arise Hope Group Official Logo" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-serif font-bold text-[#101B35]">Arise Hope Group (Pty) Ltd</h3>
                    <p className="text-xs font-sans text-stone-500">Johannesburg, Gauteng, South Africa</p>
                  </div>
                </div>

                <div className="space-y-3 font-sans text-xs">
                  <div className="flex justify-between py-1.5 border-b border-stone-100">
                    <span className="text-stone-500">Incorporation</span>
                    <span className="font-semibold text-[#101B35]">2020</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-stone-100">
                    <span className="text-stone-500">Headquarters</span>
                    <span className="font-semibold text-[#101B35]">Cosmo City, Johannesburg</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-stone-100">
                    <span className="text-stone-500">Subsidiaries</span>
                    <span className="font-semibold text-[#FF8A00]">10 Operating Sectors</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-stone-100">
                    <span className="text-stone-500">Geographic Footprint</span>
                    <span className="font-semibold text-[#101B35]">Southern Africa &amp; SADC</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-stone-500">Clean Energy Commitment</span>
                    <span className="font-semibold text-emerald-700">40% Renewable by 2027</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Purpose, Vision & Values */}
      <section className="py-16 sm:py-20 bg-[#F8F7F3] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <span className="text-[11px] font-sans uppercase tracking-wider text-[#FF8A00] font-bold">
              STRATEGIC FOUNDATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#101B35] mt-1.5">
              Our Vision, Mission &amp; Values.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#F8F7F3] border border-stone-200 text-[#101B35] flex items-center justify-center">
                <Target className="w-5 h-5 text-[#FF8A00]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#101B35]">Our Mission</h3>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-sans">
                "{COMPANY_INFO.mission}"
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#F8F7F3] border border-stone-200 text-[#101B35] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#101B35]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#101B35]">Our Vision</h3>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-sans">
                "{COMPANY_INFO.vision}"
              </p>
            </div>
          </div>

          {/* 4 Core Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {COMPANY_INFO.coreValues.map((val, idx) => (
              <div key={idx} className="p-5 sm:p-6 rounded-xl bg-white border border-stone-200 shadow-xs">
                <div className="text-[10px] font-mono text-[#FF8A00] font-bold mb-1">0{idx + 1} • VALUE</div>
                <h4 className="text-base font-serif font-bold text-[#101B35]">{val.title}</h4>
                <p className="text-xs text-stone-600 mt-1.5 leading-relaxed font-sans">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Presence & Competitive Advantages */}
      <section className="py-16 sm:py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[11px] font-sans uppercase tracking-wider text-[#FF8A00] font-bold">
              COMPETITIVE ADVANTAGE
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#101B35] mt-1.5">
              Why Partners Choose Arise Hope Group.
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base font-sans">
              Serving government entities, multinational corporations, and local enterprises across Southern Africa with end-to-end capability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitiveAdvantages.map((adv, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-[#F8F7F3] border border-stone-200 hover:border-stone-300 transition-all flex flex-col justify-between shadow-xs">
                <div>
                  <div className="w-9 h-9 rounded-lg bg-white border border-stone-200 text-[#101B35] flex items-center justify-center mb-4 font-mono font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-[#101B35]">{adv.title}</h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed font-sans">{adv.description}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-200/60 text-[11px] font-mono text-stone-500 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Conglomerate Capability</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Synergies Link CTA */}
      <section className="py-16 sm:py-20 bg-[#F8F7F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-[11px] font-sans uppercase tracking-wider text-[#FF8A00] font-bold">
              PORTFOLIO ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#101B35]">
              Explore Our Ten Specialised Sectors.
            </h2>
            <p className="text-sm sm:text-base text-stone-600 font-sans max-w-xl mx-auto">
              From civil engineering to wholesale petroleum, precision farming, and custom software systems.
            </p>
            <div className="pt-2">
              <button
                onClick={() => navigate('/businesses')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#101B35] hover:bg-[#1B2C56] text-white font-semibold text-xs uppercase tracking-wider shadow-sm transition-all active:scale-95"
              >
                <span>View All 10 Sectors</span>
                <ArrowRight className="w-4 h-4 text-[#FF8A00]" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
