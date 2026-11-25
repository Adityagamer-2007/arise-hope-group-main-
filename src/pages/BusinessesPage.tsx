import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { SECTORS } from '../data/companyData';
import { PageHeader } from '../components/common/PageHeader';
import { SectorCard } from '../components/common/SectorCard';
import { Filter, Layers, ArrowUpRight } from 'lucide-react';

export const BusinessesPage: React.FC = () => {
  const { navigate } = useNavigation();
  const [activeFilter, setActiveFilter] = useState<'all' | 'engineering' | 'industry' | 'finance-tech'>('all');

  const filteredSectors = SECTORS.filter((sector) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'engineering') {
      return ['construction-engineering', 'civil-engineering', 'mining-energy'].includes(sector.id);
    }
    if (activeFilter === 'industry') {
      return ['agriculture', 'property-investment', 'automotive-repair', 'petroleum-products', 'import-export-freight'].includes(sector.id);
    }
    if (activeFilter === 'finance-tech') {
      return ['banking-financial', 'information-technology'].includes(sector.id);
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-[#F8F7F3]">
      <PageHeader
        badge="Diversified Portfolio"
        title="Ten Specialized Sectors. One Strategic Purpose."
        subtitle="Explore our comprehensive ecosystem of subsidiaries delivering turnkey infrastructure, industrial resources, agro-processing, energy distribution, and advanced technology across Southern Africa."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Our Businesses' }
        ]}
      />

      {/* Cluster Filter Tabs */}
      <section className="py-8 sm:py-10 border-b border-stone-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-[#FF8A00]" />
              <span className="text-xs font-sans uppercase tracking-wider text-stone-500 font-bold">Filter By Cluster:</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'all', label: 'All 10 Sectors' },
                { id: 'engineering', label: 'Engineering & Resources (01-03)' },
                { id: 'industry', label: 'Industry, Trade & Logistics (04-07, 10)' },
                { id: 'finance-tech', label: 'Finance & Technology (08-09)' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id as any)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                    activeFilter === tab.id
                      ? 'bg-[#101B35] text-white shadow-xs'
                      : 'bg-[#F8F7F3] text-stone-700 hover:bg-stone-200 border border-stone-200/80'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Sectors Cards Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredSectors.map((sector) => (
              <SectorCard key={sector.id} sector={sector} />
            ))}
          </div>

          {/* Turnkey Project Delivery Callout Box */}
          <div className="mt-16 sm:mt-20 p-8 sm:p-12 rounded-2xl bg-white border border-stone-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="space-y-2 max-w-2xl">
              <span className="text-[11px] font-sans uppercase tracking-wider text-[#FF8A00] font-bold">
                CROSS-SECTOR PROJECT DELIVERY
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#101B35]">
                Require Multi-Disciplinary Turnkey Capabilities?
              </h3>
              <p className="text-sm text-stone-600 font-sans leading-relaxed">
                Arise Hope Group structures joint programmes combining civil engineering, bulk fuel supply, custom telemetry software, and asset finance under single-point corporate accountability.
              </p>
            </div>

            <button
              onClick={() => navigate('/contact')}
              className="px-6 py-3.5 rounded-lg bg-[#101B35] hover:bg-[#1B2C56] text-white font-semibold text-xs uppercase tracking-wider shadow-sm transition-all shrink-0 active:scale-95"
            >
              Contact Corporate Solutions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
