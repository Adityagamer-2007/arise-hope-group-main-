import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { SECTORS, COMPANY_INFO } from '../data/companyData';
import { Sector3DVisualizer } from '../components/3d/Sector3DVisualizer';
import { 
  CheckCircle2, ArrowRight, ArrowLeft, ArrowUpRight, 
  ShieldCheck, AlertCircle, Phone, ChevronRight 
} from 'lucide-react';

interface SectorDetailPageProps {
  sectorId: string;
}

export const SectorDetailPage: React.FC<SectorDetailPageProps> = ({ sectorId }) => {
  const { navigate } = useNavigation();

  const sectorIndex = SECTORS.findIndex((s) => s.id === sectorId);
  const sector = SECTORS[sectorIndex] || SECTORS[0];

  const prevSector = SECTORS[(sectorIndex - 1 + SECTORS.length) % SECTORS.length];
  const nextSector = SECTORS[(sectorIndex + 1) % SECTORS.length];

  return (
    <div className="min-h-screen bg-[#F8F7F3] overflow-x-hidden">
      
      {/* Sector Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-16 bg-gradient-to-b from-[#F1F2F4] via-[#F8F7F3] to-[#F8F7F3] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-1.5 sm:gap-2 text-xs font-sans text-stone-500 mb-4 sm:mb-5 flex-wrap">
            <button onClick={() => navigate('/')} className="hover:text-[#101B35] transition-colors">Home</button>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <button onClick={() => navigate('/businesses')} className="hover:text-[#101B35] transition-colors">Our Businesses</button>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <span className="text-[#101B35] font-semibold truncate max-w-[200px] sm:max-w-none">{sector.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-sans font-bold tracking-wider uppercase bg-white border border-stone-200 text-[#101B35] shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A00]" />
                SECTOR 0{sector.number} • OFFICIAL SUBSIDIARY
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#101B35] tracking-tight leading-[1.1]">
                {sector.title}
              </h1>

              <p className="text-base sm:text-lg font-serif italic text-[#FF8A00]">
                {sector.tagline}
              </p>

              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                {sector.fullDescription}
              </p>

              {/* Key Stats Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-3 border-t border-stone-200">
                {sector.keyStats.map((stat, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white border border-stone-200 shadow-xs">
                    <div className="text-[10px] font-mono text-stone-400 uppercase tracking-wider">{stat.label}</div>
                    <div className="text-base font-serif font-bold text-[#101B35] mt-0.5 truncate">{stat.value}</div>
                    <div className="text-[10px] text-stone-500 truncate mt-0.5 font-sans">{stat.subtext}</div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-[#101B35] hover:bg-[#1B2C56] text-white font-semibold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <span>Request Sector Proposal</span>
                  <ArrowUpRight className="w-4 h-4 text-[#FF8A00]" />
                </button>

                <a
                  href={`tel:${COMPANY_INFO.contact.phone.replace(/\s+/g, '')}`}
                  className="w-full sm:w-auto px-5 py-3.5 rounded-lg bg-white hover:bg-stone-50 border border-stone-200 text-xs font-semibold text-[#101B35] transition-all flex items-center justify-center gap-2 shadow-xs"
                >
                  <Phone className="w-4 h-4 text-[#FF8A00]" />
                  <span>Call Headquarters</span>
                </a>
              </div>
            </div>

            {/* Right Visual Image Column */}
            <div className="lg:col-span-5 space-y-3">
              <div className="rounded-2xl overflow-hidden bg-white border border-stone-200 shadow-sm relative aspect-[16/10] sm:aspect-[4/3]">
                <img 
                  src={sector.image} 
                  alt={sector.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/60 backdrop-blur-xs text-[10px] font-sans uppercase text-white">
                  {sector.imageType === 'ai-generated' ? 'Conglomerate Vision' : 'Architectural Spec'}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-stone-200 flex items-start gap-2.5 text-[11px] text-stone-500 leading-normal shadow-xs">
                <AlertCircle className="w-4 h-4 text-[#FF8A00] shrink-0 mt-0.5" />
                <span>All visual assets are illustrative representations of sector capabilities and conglomerate scale.</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive 3D Visualizer Section */}
      <section className="py-12 sm:py-16 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-6">
            <span className="text-[11px] font-sans uppercase tracking-wider text-[#FF8A00] font-bold">
              3D STRUCTURAL DIGITAL TWIN
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#101B35] mt-1">
              Sector Engineering &amp; Operational Dynamics
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 font-sans">
              Interactive 3D model representing the structural dynamics and telemetry of Arise Hope Group's {sector.title} operations. Touch or drag to inspect.
            </p>
          </div>

          <div className="bg-[#F8F7F3] rounded-2xl border border-stone-200 p-2 sm:p-4 shadow-xs">
            <Sector3DVisualizer sectorId={sector.id} accentColor={sector.accentColor} />
          </div>
        </div>
      </section>

      {/* Official Activities & Capabilities */}
      <section className="py-14 sm:py-20 border-b border-stone-200 bg-[#F8F7F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left: Official Mandates */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[11px] font-sans uppercase tracking-wider text-[#FF8A00] font-bold">
                OFFICIAL CHARTER
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#101B35]">
                Mandated Operational Activities
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                As detailed in Arise Hope Group's corporate framework, this subsidiary is chartered to execute the following core industry activities across Southern Africa:
              </p>

              <div className="space-y-2 pt-1">
                {sector.officialActivities.map((activity, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border border-stone-200 flex items-center gap-3 shadow-xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#FF8A00] shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-[#101B35] font-sans">{activity}</span>
                  </div>
                ))}
              </div>

              {/* Conglomerate Synergy Box */}
              <div className="p-4 sm:p-5 rounded-xl bg-white border border-stone-200 space-y-1.5 mt-4 shadow-xs">
                <span className="text-[10px] font-sans uppercase tracking-wider text-[#FF8A00] font-bold">
                  CONGLOMERATE SYNERGY BENEFIT:
                </span>
                <p className="text-xs text-stone-600 leading-relaxed font-sans">
                  {sector.strategicAdvantage}
                </p>
              </div>
            </div>

            {/* Right: Technical Capabilities Breakdown */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[11px] font-sans uppercase tracking-wider text-stone-400 font-bold">
                SUBSIDIARY EXECUTION
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#101B35]">
                Specialised Enterprise Capabilities
              </h2>

              <div className="space-y-3">
                {sector.capabilities.map((cap, idx) => (
                  <div 
                    key={idx}
                    className="p-5 rounded-xl bg-white border border-stone-200 shadow-xs space-y-1"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-[#FF8A00] font-bold">0{idx + 1}</span>
                      <h3 className="text-base sm:text-lg font-serif font-bold text-[#101B35]">{cap.title}</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                      {cap.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200 flex items-center justify-between gap-3 shadow-xs">
                <div>
                  <h4 className="text-xs sm:text-sm font-serif font-bold text-[#101B35]">Dedicated Subsidiary P&amp;L</h4>
                  <p className="text-[11px] text-stone-500 font-sans mt-0.5">Headed by an independent Managing Director accountable to Group Executive Governance.</p>
                </div>
                <ShieldCheck className="w-5 h-5 text-[#101B35] shrink-0" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Prev / Next Sector Navigation */}
      <section className="py-8 sm:py-10 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            
            <button
              onClick={() => navigate(`/businesses/${prevSector.id}`)}
              className="p-4 rounded-xl bg-[#F8F7F3] border border-stone-200 hover:border-stone-300 transition-all text-left flex items-center gap-3 group shadow-xs"
            >
              <ArrowLeft className="w-4 h-4 text-stone-400 group-hover:text-[#FF8A00] group-hover:-translate-x-1 transition-all shrink-0" />
              <div className="min-w-0">
                <span className="text-[9px] font-mono uppercase tracking-wider text-stone-400 block">
                  Previous Sector (0{prevSector.number})
                </span>
                <span className="text-xs sm:text-sm font-serif font-bold text-[#101B35] truncate block group-hover:text-[#FF8A00]">
                  {prevSector.title}
                </span>
              </div>
            </button>

            <button
              onClick={() => navigate(`/businesses/${nextSector.id}`)}
              className="p-4 rounded-xl bg-[#F8F7F3] border border-stone-200 hover:border-stone-300 transition-all text-right flex items-center justify-end gap-3 group shadow-xs"
            >
              <div className="min-w-0">
                <span className="text-[9px] font-mono uppercase tracking-wider text-stone-400 block">
                  Next Sector (0{nextSector.number})
                </span>
                <span className="text-xs sm:text-sm font-serif font-bold text-[#101B35] truncate block group-hover:text-[#101B35]">
                  {nextSector.title}
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#101B35] group-hover:translate-x-1 transition-all shrink-0" />
            </button>

          </div>
        </div>
      </section>

    </div>
  );
};
