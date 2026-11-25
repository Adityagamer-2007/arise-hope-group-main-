import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { SECTORS, COMPANY_INFO, MOTTO } from '../../data/companyData';
import { 
  Phone, Mail, MapPin, MessageSquare, 
  ArrowUpRight, ShieldCheck 
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <footer className="bg-[#101B35] text-white border-t border-stone-800 relative overflow-hidden safe-bottom">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16 pb-10 sm:pb-12 relative z-10">
        
        {/* Top Brand Banner */}
        <div className="pb-8 sm:pb-12 mb-8 sm:mb-12 border-b border-stone-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3.5 sm:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden bg-[#05032E] shadow-sm border border-stone-700 p-0.5 shrink-0">
              <img 
                src="/assets/images/logo.jpg" 
                alt="Arise Hope Group Official Logo" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-white">
                ARISE HOPE GROUP
              </div>
              <p className="text-xs sm:text-sm text-[#FF8A00] font-serif italic mt-0.5">
                "{COMPANY_INFO.tagline}"
              </p>
              <button onClick={() => navigate('/motto')} className="text-[11px] sm:text-xs text-stone-300 hover:text-white mt-1 font-sans text-left">
                {MOTTO.full}
              </button>
            </div>
          </div>

          <div className="w-full md:w-auto grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 sm:gap-3">
            <a 
              href="tel:+27103351262" 
              className="px-3.5 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 text-xs font-semibold text-white flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF8A00]" />
              <span>Call Switchboard</span>
            </a>
            <a 
              href="https://wa.me/27817024865" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-3.5 py-2.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-xs font-semibold text-emerald-300 flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
            <button 
              onClick={() => navigate('/contact')}
              className="col-span-2 sm:col-span-1 px-5 py-2.5 rounded-lg bg-[#FF8A00] hover:bg-[#FF9B20] text-[#101B35] text-xs font-bold uppercase tracking-wider transition-all shadow-sm text-center active:scale-95"
            >
              Contact Headquarters
            </button>
          </div>
        </div>

        {/* 4-Column Footer Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-8 sm:pb-12 border-b border-stone-800">
          
          {/* Col 1: Conglomerate Overview */}
          <div className="sm:col-span-2 space-y-3 sm:space-y-4">
            <h4 className="text-[11px] font-sans uppercase tracking-wider text-stone-400 font-bold">
              Corporate Overview
            </h4>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-sm">
              Established in 2020, Arise Hope Group unites ten specialized subsidiaries under disciplined corporate governance, accelerating industrial progress and sustainable value across Southern Africa.
            </p>
            
            <div className="space-y-2 pt-1 text-xs text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF8A00] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.contact.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#1FD2FF] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#FFC400] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contact.corporateEmail}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.contact.corporateEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Business Sectors (Part 1) */}
          <div className="space-y-2.5">
            <h4 className="text-[11px] font-sans uppercase tracking-wider text-[#FF8A00] font-bold">
              Sectors (01 — 05)
            </h4>
            <ul className="space-y-1.5 text-xs">
              {SECTORS.slice(0, 5).map((sector) => (
                <li key={sector.id}>
                  <button
                    onClick={() => navigate(`/businesses/${sector.id}`)}
                    className="text-stone-300 hover:text-white transition-colors flex items-center gap-1.5 group text-left py-0.5"
                  >
                    <span className="text-[10px] font-mono text-stone-500 group-hover:text-[#FF8A00]">{String(sector.number).padStart(2, '0')}</span>
                    <span>{sector.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Business Sectors (Part 2) */}
          <div className="space-y-2.5">
            <h4 className="text-[11px] font-sans uppercase tracking-wider text-[#FF8A00] font-bold">
              Sectors (06 — 10)
            </h4>
            <ul className="space-y-1.5 text-xs">
              {SECTORS.slice(5).map((sector) => (
                <li key={sector.id}>
                  <button
                    onClick={() => navigate(`/businesses/${sector.id}`)}
                    className="text-stone-300 hover:text-white transition-colors flex items-center gap-1.5 group text-left py-0.5"
                  >
                    <span className="text-[10px] font-mono text-stone-500 group-hover:text-[#FF8A00]">{String(sector.number).padStart(2, '0')}</span>
                    <span>{sector.title}</span>
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => navigate('/businesses')}
                  className="text-xs font-semibold text-[#FFC400] hover:underline flex items-center gap-1"
                >
                  <span>Explore Portfolio Directory</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Governance & Sustainability */}
          <div className="space-y-2.5">
            <h4 className="text-[11px] font-sans uppercase tracking-wider text-stone-400 font-bold">
              Corporate Governance
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-300">
              <li>
                <button onClick={() => navigate('/motto')} className="hover:text-white transition-colors py-0.5">
                  Our Motto
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/about')} className="hover:text-white transition-colors py-0.5">
                  About the Group
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/governance')} className="hover:text-white transition-colors py-0.5">
                  Board &amp; Leadership Governance
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/sustainability')} className="hover:text-white transition-colors py-0.5">
                  Sustainability &amp; ESG Targets
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/future-outlook')} className="hover:text-white transition-colors py-0.5">
                  Future Horizons Roadmap
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/contact')} className="hover:text-white transition-colors py-0.5">
                  Investor &amp; Partner Enquiries
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & ESG Disclaimers */}
        <div className="pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-stone-400">
          <div>
            © 2020 – 2026 Arise Hope Group (Pty) Ltd. All rights reserved.
          </div>
          <div className="text-[10px] sm:text-[11px] text-stone-400 max-w-xl text-center md:text-right leading-relaxed">
            Visual compositions and sector illustrations are illustrative representations of conglomerate capabilities. ESG targets (40% renewable electricity by 2027; Zero-Waste by 2030) represent corporate commitments under group governance.
          </div>
        </div>

      </div>
    </footer>
  );
};
