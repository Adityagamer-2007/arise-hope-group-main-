import React, { useState, useEffect } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { SECTORS, COMPANY_INFO } from '../../data/companyData';
import { 
  Menu, X, ChevronDown, ChevronRight, ArrowUpRight, Phone, Mail, 
  Building2, ShieldCheck, Cpu, HardHat, Compass, 
  Sprout, Fuel, Landmark, Wrench, MessageSquare 
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { currentPath, navigate } = useNavigation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileSectorsOpen, setMobileSectorsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const getSectorIcon = (id: string) => {
    switch (id) {
      case 'construction-engineering': return HardHat;
      case 'civil-engineering': return Compass;
      case 'mining-energy': return ShieldCheck;
      case 'agriculture': return Sprout;
      case 'property-investment': return Building2;
      case 'automotive-repair': return Wrench;
      case 'petroleum-products': return Fuel;
      case 'banking-financial': return Landmark;
      case 'information-technology': return Cpu;
      default: return Building2;
    }
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Our Businesses', path: '/businesses', hasMegaMenu: true },
    { label: 'Sustainability', path: '/sustainability' },
    { label: 'Governance', path: '/governance' },
    { label: 'Future Outlook', path: '/future-outlook' },
    { label: 'Corporate Profile', path: '/corporate-profile' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleMobileNav = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm py-2.5 sm:py-3.5' 
          : 'bg-[#F8F7F3]/90 backdrop-blur-sm border-b border-stone-200/60 py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Editorial Typography */}
          <button 
            onClick={() => handleMobileNav('/')}
            className="flex items-center gap-2.5 sm:gap-3.5 group text-left focus:outline-none"
            aria-label="Arise Hope Group Home"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-lg overflow-hidden bg-[#05032E] shadow-sm border border-stone-200 p-0.5 shrink-0 transition-transform group-hover:scale-105 duration-200">
              <img 
                src="/assets/images/logo.jpg" 
                alt="Arise Hope Group Official Logo" 
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="min-w-0 whitespace-nowrap">
              <div className="text-base sm:text-lg font-serif font-bold text-[#101B35] tracking-tight leading-none">
                ARISE HOPE GROUP
              </div>
              <p className="text-[9px] sm:text-[10px] tracking-widest uppercase text-stone-500 font-semibold font-sans mt-1">
                Holding Company • Est. 2020
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-0 2xl:gap-2">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path || 
                (link.path === '/businesses' && currentPath.startsWith('/businesses'));

              if (link.hasMegaMenu) {
                return (
                  <div 
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setMegaMenuOpen(true)}
                    onMouseLeave={() => setMegaMenuOpen(false)}
                  >
                    <button
                      onClick={() => navigate('/businesses')}
                      className={`px-2 2xl:px-3 py-2 rounded-lg text-[13px] 2xl:text-sm whitespace-nowrap font-medium transition-colors flex items-center gap-1.5 ${
                        isActive 
                          ? 'text-[#101B35] font-semibold bg-stone-100' 
                          : 'text-[#252A34] hover:text-[#101B35] hover:bg-stone-50'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 text-stone-500 transition-transform duration-200 ${megaMenuOpen ? 'rotate-180 text-[#FF8A00]' : ''}`} />
                    </button>

                    {/* Classic Corporate Mega Menu Dropdown */}
                    {megaMenuOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-[840px] z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                        <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xl">
                          <div className="flex items-center justify-between pb-4 mb-4 border-b border-stone-100">
                            <div>
                              <h4 className="text-[11px] uppercase tracking-wider text-[#FF8A00] font-sans font-bold">
                                Conglomerate Business Sectors
                              </h4>
                              <p className="text-sm font-serif text-[#101B35]">
                                Nine Diversified Subsidiaries Across Southern Africa
                              </p>
                            </div>
                            <button
                              onClick={() => { navigate('/businesses'); setMegaMenuOpen(false); }}
                              className="text-xs font-semibold text-[#101B35] hover:text-[#FF8A00] flex items-center gap-1 transition-colors"
                            >
                              <span>Explore All Sectors</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <div className="grid grid-cols-3 gap-2.5">
                            {SECTORS.map((sector) => {
                              const IconComponent = getSectorIcon(sector.id);
                              return (
                                <button
                                  key={sector.id}
                                  onClick={() => {
                                    navigate(`/businesses/${sector.id}`);
                                    setMegaMenuOpen(false);
                                  }}
                                  className="group/item text-left p-3 rounded-xl bg-[#F8F7F3] hover:bg-[#F1F2F4] border border-stone-200/60 hover:border-stone-300 transition-all flex items-start gap-3"
                                >
                                  <div 
                                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-white border border-stone-200 text-[#101B35] group-hover/item:border-[#FF8A00] group-hover/item:text-[#FF8A00] transition-colors"
                                  >
                                    <IconComponent className="w-4 h-4" />
                                  </div>
                                  <div className="min-w-0">
                                    <div className="flex items-center gap-1.5">
                                      <span className="text-[10px] font-mono text-stone-400">0{sector.number}</span>
                                      <h5 className="text-xs font-semibold text-[#101B35] truncate group-hover/item:text-[#FF8A00] transition-colors">
                                        {sector.title}
                                      </h5>
                                    </div>
                                    <p className="text-[11px] text-stone-500 line-clamp-1 mt-0.5">
                                      {sector.tagline}
                                    </p>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={link.label}
                  onClick={() => navigate(link.path)}
                  className={`px-2 2xl:px-3 py-2 rounded-lg text-[13px] 2xl:text-sm whitespace-nowrap font-medium transition-colors ${
                    isActive 
                      ? 'text-[#101B35] font-semibold bg-stone-100' 
                      : 'text-[#252A34] hover:text-[#101B35] hover:bg-stone-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right Action CTA */}
          <div className="hidden xl:flex items-center gap-3">
            <button
              onClick={() => navigate('/contact')}
              className="px-3 2xl:px-4 py-2.5 rounded-lg bg-[#101B35] hover:bg-[#1B2C56] text-white font-medium text-[11px] xl:text-xs tracking-wider uppercase transition-all shadow-sm flex items-center gap-2 active:scale-95 whitespace-nowrap"
            >
              <span>Partner With Us</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#FF8A00]" />
            </button>
          </div>

          {/* Mobile Right Action & Menu Toggle */}
          <div className="xl:hidden flex items-center gap-2">
            <a
              href="tel:+27103351262"
              className="p-2 rounded-lg bg-stone-100 text-[#101B35] border border-stone-200 hover:bg-stone-200 transition-colors"
              aria-label="Call Switchboard"
            >
              <Phone className="w-4 h-4 text-[#FF8A00]" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white border border-stone-200 text-[#101B35] hover:bg-stone-50 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu — Classic Light Theme */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[57px] sm:top-[65px] bottom-0 bg-[#F8F7F3] border-t border-stone-200 px-4 py-5 overflow-y-auto z-40 safe-bottom flex flex-col justify-between">
          <div className="space-y-1">
            
            {navLinks.map((link) => {
              const isActive = currentPath === link.path || 
                (link.path === '/businesses' && currentPath.startsWith('/businesses'));

              if (link.hasMegaMenu) {
                return (
                  <div key={link.label} className="space-y-1">
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleMobileNav('/businesses')}
                        className={`flex-1 text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between ${
                          isActive 
                            ? 'bg-white text-[#101B35] border border-stone-200 shadow-sm' 
                            : 'text-[#252A34] hover:bg-white/60'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="w-4 h-4 text-stone-400" />
                      </button>
                      <button
                        onClick={() => setMobileSectorsOpen(!mobileSectorsOpen)}
                        className="px-3 py-2.5 rounded-xl bg-white border border-stone-200 text-stone-600 hover:text-[#101B35]"
                        aria-label="Expand 9 sectors"
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileSectorsOpen ? 'rotate-180 text-[#FF8A00]' : ''}`} />
                      </button>
                    </div>

                    {/* Expandable Mobile Sector List */}
                    {mobileSectorsOpen && (
                      <div className="pl-2 pr-1 py-1.5 space-y-1 animate-in fade-in duration-150">
                        {SECTORS.map((sector) => {
                          const IconComp = getSectorIcon(sector.id);
                          const isSecActive = currentPath === `/businesses/${sector.id}`;
                          return (
                            <button
                              key={sector.id}
                              onClick={() => handleMobileNav(`/businesses/${sector.id}`)}
                              className={`w-full text-left p-2.5 rounded-xl border flex items-center gap-2.5 transition-colors ${
                                isSecActive
                                  ? 'bg-white border-[#FF8A00] text-[#101B35] shadow-xs'
                                  : 'bg-white/80 border-stone-200/70 text-[#252A34] hover:bg-white'
                              }`}
                            >
                              <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 bg-stone-100 text-[#101B35]">
                                <IconComp className="w-3.5 h-3.5 text-[#FF8A00]" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="text-xs font-semibold text-[#101B35] truncate">
                                  0{sector.number} • {sector.title}
                                </div>
                                <div className="text-[10px] text-stone-500 truncate">
                                  {sector.tagline}
                                </div>
                              </div>
                              <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={link.label}
                  onClick={() => handleMobileNav(link.path)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between ${
                    isActive 
                      ? 'bg-white text-[#101B35] border border-stone-200 shadow-sm' 
                      : 'text-[#252A34] hover:bg-white/60'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                </button>
              );
            })}
          </div>

          {/* Quick Action Contact Bar on Mobile Menu Bottom */}
          <div className="mt-6 pt-4 border-t border-stone-200 space-y-2.5">
            <div className="grid grid-cols-2 gap-2">
              <a 
                href="tel:+27103351262" 
                className="py-2.5 px-3 rounded-xl bg-white border border-stone-200 text-xs font-semibold text-[#101B35] flex items-center justify-center gap-2 hover:bg-stone-50 active:scale-95 transition-all shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF8A00]" />
                <span>Call Switchboard</span>
              </a>

              <a 
                href="https://wa.me/27817024865" 
                target="_blank" 
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 flex items-center justify-center gap-2 hover:bg-emerald-100 active:scale-95 transition-all shadow-xs"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            <button
              onClick={() => handleMobileNav('/contact')}
              className="w-full py-3 rounded-xl bg-[#101B35] text-white font-semibold text-xs uppercase tracking-wider shadow-sm flex items-center justify-center gap-2 active:scale-95 transition-all"
            >
              <span>Submit Business Proposal</span>
              <ArrowUpRight className="w-4 h-4 text-[#FF8A00]" />
            </button>

            <div className="text-center pt-1 text-[10px] text-stone-500 font-sans">
              Cosmo City, Johannesburg, South Africa
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
