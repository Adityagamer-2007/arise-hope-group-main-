import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { COMPANY_INFO, SECTORS, GOVERNANCE_FRAMEWORK } from '../data/companyData';
import { Hero3DScene } from '../components/3d/Hero3DScene';
import { SectorCard } from '../components/common/SectorCard';
import { SynergyEcosystem } from '../components/home/SynergyEcosystem';
import { SustainabilitySection } from '../components/home/SustainabilitySection';
import { FutureRoadmapSection } from '../components/home/FutureRoadmapSection';
import { 
  ArrowRight, ArrowUpRight, ShieldCheck, Target, 
  Lightbulb, Sparkles, Building2, ChevronDown, CheckCircle2 
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="relative overflow-x-hidden bg-[#F8F7F3]">
      
      {/* 1. CINEMATIC HERO SECTION (PREMIUM CLASSIC CORPORATE) */}
      <section className="relative min-h-[85vh] sm:min-h-[92vh] flex items-center justify-center pt-24 sm:pt-28 pb-14 sm:pb-20 overflow-hidden bg-gradient-to-b from-[#F1F2F4] via-[#F8F7F3] to-[#F8F7F3] border-b border-stone-200">
        
        {/* Subtle Corporate Grid & Refined 3D Armillary Scene */}
        <div className="absolute inset-0 bg-corporate-grid opacity-40 pointer-events-none" />
        <Hero3DScene />

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
          
          {/* Tagline Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-200 shadow-xs mb-5 sm:mb-6 animate-in fade-in duration-500">
            <span className="w-2 h-2 rounded-full bg-[#FF8A00]" />
            <span className="text-xs sm:text-sm font-serif italic text-[#101B35] font-medium">
              "{COMPANY_INFO.tagline}"
            </span>
          </div>

          {/* Main Editorial Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-[#101B35] tracking-tight leading-[1.08] max-w-5xl mx-auto">
            Building Tomorrow. <br />
            <span className="italic font-normal text-[#FF8A00]">
              Creating Lasting Value.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="mt-5 sm:mt-7 text-sm sm:text-lg md:text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed font-sans font-normal">
            {COMPANY_INFO.heroSupportingText}
          </p>

          {/* Action CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => navigate('/businesses')}
              className="w-full sm:w-auto px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-[#101B35] hover:bg-[#1B2C56] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2.5 active:scale-95"
            >
              <span>Explore Our Businesses</span>
              <ArrowRight className="w-4 h-4 text-[#FF8A00]" />
            </button>

            <button
              onClick={() => navigate('/about')}
              className="w-full sm:w-auto px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-white hover:bg-stone-50 border border-stone-200 text-[#101B35] font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-xs flex items-center justify-center gap-2 active:scale-95"
            >
              <span>Discover Arise Hope</span>
              <ArrowUpRight className="w-4 h-4 text-stone-400" />
            </button>
          </div>

          {/* Institutional Metric Badges */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-6 sm:pt-8 border-t border-stone-200">
            <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#101B35]">2020</div>
              <div className="text-[10px] sm:text-[11px] font-sans font-semibold text-stone-500 uppercase tracking-wider mt-0.5">Year Established</div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#FF8A00]">9 Sectors</div>
              <div className="text-[10px] sm:text-[11px] font-sans font-semibold text-stone-500 uppercase tracking-wider mt-0.5">Specialised Subsidiaries</div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#101B35]">Southern Africa</div>
              <div className="text-[10px] sm:text-[11px] font-sans font-semibold text-stone-500 uppercase tracking-wider mt-0.5">Operating Footprint</div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-emerald-700">40% Clean</div>
              <div className="text-[10px] sm:text-[11px] font-sans font-semibold text-stone-500 uppercase tracking-wider mt-0.5">Energy Target 2027</div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. INTRODUCTION — WHO WE ARE (PURE WHITE SECTION) */}
      <section className="py-16 sm:py-24 bg-white border-b border-stone-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column Narrative */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8F7F3] border border-stone-200 text-[#101B35] text-[11px] font-sans font-bold tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A00]" />
                Corporate Profile &amp; Model
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#101B35] tracking-tight leading-tight">
                One Group. Multiple Industries. <br />
                <span className="italic font-normal text-[#FF8A00]">One Unified Vision.</span>
              </h2>

              <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-sans">
                {COMPANY_INFO.overview}
              </p>

              <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-sans">
                {COMPANY_INFO.executiveSummary}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#F8F7F3] border border-stone-200">
                  <h4 className="text-sm font-serif font-bold text-[#101B35] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF8A00] shrink-0" />
                    <span>Dedicated Subsidiary Leadership</span>
                  </h4>
                  <p className="text-xs text-stone-600 mt-1 font-sans">
                    Independent Managing Directors ensuring operational focus and P&amp;L accountability.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F8F7F3] border border-stone-200">
                  <h4 className="text-sm font-serif font-bold text-[#101B35] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#101B35] shrink-0" />
                    <span>Centralised Governance</span>
                  </h4>
                  <p className="text-xs text-stone-600 mt-1 font-sans">
                    Group-wide finance, legal compliance, risk governance, and capital allocation.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => navigate('/about')}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#101B35] hover:text-[#FF8A00] transition-colors"
                >
                  <span>Learn more about our executive origins</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Architectural Headquarters Elevation */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden bg-white border border-stone-200 shadow-md relative">
                <img 
                  src="/assets/images/corporate_headquarters.svg" 
                  alt="Arise Hope Group Headquarters" 
                  className="w-full h-full object-cover aspect-[4/3]"
                  loading="lazy"
                />
                <div className="p-5 bg-white border-t border-stone-100">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block font-bold">
                    HEADQUARTERS • COSMO CITY, JOHANNESBURG
                  </span>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-[#101B35] mt-0.5">
                    Strategic Holding Oversight
                  </h3>
                  <p className="text-xs text-stone-600 mt-0.5 font-sans">
                    Directing capital, legal compliance, and multi-sector synergies across Southern Africa.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. BUSINESS PORTFOLIO — 9 SECTORS (WARM IVORY SECTION) */}
      <section className="py-16 sm:py-24 bg-[#F8F7F3] border-b border-stone-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 text-[#101B35] text-[11px] font-sans font-bold tracking-wider uppercase mb-3.5 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A00]" />
                <span>Specialised Business Sectors</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#101B35] tracking-tight leading-tight">
                A Diversified Portfolio. <br />
                <span className="italic font-normal text-[#FF8A00]">A Unified Vision.</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-stone-600 font-sans leading-relaxed">
                Nine specialised business subsidiaries operating across fundamental economic sectors: engineering, resources, agriculture, real estate, automotive restoration, fuel distribution, financial services, and cloud computing.
              </p>
            </div>

            <button
              onClick={() => navigate('/businesses')}
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-white hover:bg-stone-50 border border-stone-200 text-xs font-semibold text-[#101B35] flex items-center justify-center gap-2 self-start md:self-end transition-all shadow-xs"
            >
              <span>View Portfolio Directory</span>
              <ArrowUpRight className="w-4 h-4 text-[#FF8A00]" />
            </button>
          </div>

          {/* 9 Sector Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SECTORS.map((sector) => (
              <SectorCard key={sector.id} sector={sector} />
            ))}
          </div>

        </div>
      </section>

      {/* 4. STRATEGIC ADVANTAGE — SYNERGY ECOSYSTEM */}
      <SynergyEcosystem />

      {/* 5. MISSION, VISION & VALUES (PURE WHITE SECTION) */}
      <section className="py-16 sm:py-24 bg-white border-b border-stone-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8F7F3] border border-stone-200 text-[#101B35] text-[11px] font-sans font-bold tracking-wider uppercase mb-3.5 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A00]" />
              <span>Guiding Principles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#101B35] tracking-tight leading-tight">
              Mission, Vision &amp; Core Values.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-stone-600 font-sans">
              The foundational ethical and operational compass guiding every capital allocation, subsidiary partnership, and community engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Mission Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F8F7F3] border border-stone-200 flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-10 h-10 rounded-lg bg-white border border-stone-200 text-[#101B35] flex items-center justify-center mb-4">
                  <Target className="w-5 h-5 text-[#FF8A00]" />
                </div>
                <span className="text-[10px] font-mono tracking-wider uppercase text-stone-400 font-bold">
                  OUR PURPOSE
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#101B35] mt-1">
                  Our Mission
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                  "{COMPANY_INFO.mission}"
                </p>
              </div>
              <div className="mt-6 pt-3.5 border-t border-stone-200/60 text-[10px] font-mono text-stone-400 uppercase">
                Operational Excellence &amp; Value
              </div>
            </div>

            {/* Vision Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F8F7F3] border border-stone-200 flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-10 h-10 rounded-lg bg-white border border-stone-200 text-[#101B35] flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5 text-[#101B35]" />
                </div>
                <span className="text-[10px] font-mono tracking-wider uppercase text-stone-400 font-bold">
                  OUR AMBITION
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#101B35] mt-1">
                  Our Vision
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                  "{COMPANY_INFO.vision}"
                </p>
              </div>
              <div className="mt-6 pt-3.5 border-t border-stone-200/60 text-[10px] font-mono text-stone-400 uppercase">
                Transforming Industries Across Africa
              </div>
            </div>

            {/* Core Values Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F8F7F3] border border-stone-200 flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-10 h-10 rounded-lg bg-white border border-stone-200 text-[#101B35] flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5 text-[#FF8A00]" />
                </div>
                <span className="text-[10px] font-mono tracking-wider uppercase text-stone-400 font-bold">
                  ETHICAL COMPASS
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#101B35] mt-1">
                  Core Values
                </h3>
                <ul className="mt-3 space-y-2 text-xs sm:text-sm text-stone-600 font-sans">
                  {COMPANY_INFO.coreValues.map((val, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A00] mt-1.5 shrink-0" />
                      <span><strong className="text-[#101B35]">{val.title}:</strong> {val.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 pt-3.5 border-t border-stone-200/60 text-[10px] font-mono text-stone-400 uppercase">
                Integrity • Innovation • ESG
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. SUSTAINABILITY & IMPACT */}
      <SustainabilitySection />

      {/* 7. FUTURE OUTLOOK ROADMAP */}
      <FutureRoadmapSection />

      {/* 8. CORPORATE GOVERNANCE (CONTRAST DEEP NAVY EXECUTIVE SECTION) */}
      <section className="py-16 sm:py-24 bg-[#101B35] text-white relative border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white text-[11px] font-sans font-semibold tracking-wider uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FF8A00]" />
                Institutional Integrity
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                Corporate Governance &amp; Leadership Architecture.
              </h2>

              <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-sans">
                {GOVERNANCE_FRAMEWORK.boardDescription}
              </p>

              {/* 3 Core Board Committees */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                {GOVERNANCE_FRAMEWORK.committees.map((comm, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/[0.05] border border-white/10">
                    <h4 className="text-xs sm:text-sm font-serif font-bold text-white mb-1">{comm.name}</h4>
                    <p className="text-[11px] text-stone-300 leading-relaxed font-sans">{comm.mandate}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => navigate('/governance')}
                  className="w-full sm:w-auto px-5 py-3 rounded-lg bg-white text-[#101B35] hover:bg-stone-100 text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <span>Explore Governance Framework</span>
                  <ArrowUpRight className="w-4 h-4 text-[#FF8A00]" />
                </button>
              </div>
            </div>

            {/* Leadership Role Mandates Card */}
            <div className="lg:col-span-5 p-6 sm:p-7 rounded-2xl bg-white/[0.04] border border-white/10">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#FFC400] font-bold mb-3">
                Executive Leadership Mandates:
              </h3>
              <div className="space-y-2.5">
                {GOVERNANCE_FRAMEWORK.executiveLeadershipRoles.slice(0, 5).map((role, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
                    <div className="text-xs font-bold text-white font-serif">{role.title}</div>
                    <div className="text-[11px] text-stone-300 mt-0.5 font-sans">{role.focus}</div>
                  </div>
                ))}
              </div>
              <div className="mt-3 pt-3 border-t border-white/10 text-[10px] font-mono text-stone-400">
                Nine independent subsidiary Managing Directors with dedicated P&amp;L accountability.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. PARTNERSHIP CTA (WARM IVORY / PURE WHITE CALLOUT) */}
      <section className="py-16 sm:py-24 bg-[#F8F7F3] border-t border-stone-200 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 text-[#101B35] text-[11px] font-sans font-bold tracking-wider uppercase mb-5 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A00]" />
            <span>Institutional Collaboration</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#101B35] tracking-tight leading-tight">
            Partner With Arise Hope Group.
          </h2>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl mx-auto font-sans">
            We welcome strategic partnerships, large-scale turnkey infrastructure enquiries, petroleum wholesale supply agreements, and institutional co-investment opportunities across Southern Africa.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-xl bg-[#101B35] hover:bg-[#1B2C56] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-md active:scale-95"
            >
              Contact Corporate Headquarters
            </button>

            <a
              href="mailto:corporate@arisehopegroup.co.za"
              className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-xl bg-white hover:bg-stone-50 border border-stone-200 text-[#101B35] font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-xs truncate"
            >
              corporate@arisehopegroup.co.za
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
