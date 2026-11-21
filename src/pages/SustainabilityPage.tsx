import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { SUSTAINABILITY_COMMITMENTS, COMPANY_INFO } from '../data/companyData';
import { PageHeader } from '../components/common/PageHeader';
import { 
  Sun, Recycle, Users, ShieldCheck, AlertCircle, 
  CheckCircle2, FileText, ArrowRight 
} from 'lucide-react';

export const SustainabilityPage: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="min-h-screen bg-[#F8F7F3]">
      <PageHeader
        badge="Sustainability & ESG"
        title="Responsible Stewardship. Enduring Impact."
        subtitle="Our group-wide ESG commitments align commercial strategy with the United Nations Sustainable Development Goals, driving decarbonization, circular economy, and human capital upliftment across Southern Africa."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Sustainability' }
        ]}
      />

      {/* Corporate Disclosure Banner */}
      <section className="py-6 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-4 rounded-xl bg-[#F8F7F3] border border-stone-200 flex items-start sm:items-center gap-3 text-xs sm:text-sm text-stone-700 font-sans shadow-xs">
            <AlertCircle className="w-5 h-5 text-[#FF8A00] shrink-0 mt-0.5 sm:mt-0" />
            <div>
              <strong className="text-[#101B35]">Official Governance Notice:</strong> All sustainability figures presented below represent active corporate targets and forward-looking commitments governed by the Group Head of Sustainability &amp; ESG.
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Core ESG Pillars In-Depth */}
      <section className="py-16 sm:py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-[11px] font-sans uppercase tracking-wider text-[#FF8A00] font-bold">
              STRATEGIC TARGETS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#101B35] mt-1.5 leading-tight">
              Four Concrete Commitments Driving Transformation.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Pillar 1: Renewable Electricity */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F8F7F3] border border-stone-200 hover:border-stone-300 transition-all flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-10 h-10 rounded-lg bg-white border border-stone-200 text-[#101B35] flex items-center justify-center mb-5">
                  <Sun className="w-5 h-5 text-[#FF8A00]" />
                </div>
                <div className="flex items-center justify-between text-xs font-mono text-stone-400 mb-2">
                  <span>TARGET HORIZON: 2027</span>
                  <span className="text-[#FF8A00] font-bold">SDG 7 &amp; 13</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#101B35]">
                  40% Renewable Electricity Target
                </h3>
                <p className="mt-3 text-sm text-stone-600 leading-relaxed font-sans">
                  Targeted deployment of captive solar photovoltaic farms, wind energy generation, and hybrid microgrids across our mining and agro-processing hubs to supply 40% of the Group's total electricity demand by 2027.
                </p>

                <div className="mt-5 p-3.5 rounded-xl bg-white border border-stone-200 space-y-1.5 font-sans">
                  <div className="flex items-center gap-2 text-xs text-[#101B35]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Captive mine site solar microgrids</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#101B35]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Cross-sector biofuel R&amp;D (Agriculture + Energy)</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3.5 border-t border-stone-200/60 text-[10px] font-mono text-stone-400 uppercase">
                Active Capital Expenditure Allocation
              </div>
            </div>

            {/* Pillar 2: Zero-Waste Ambition */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F8F7F3] border border-stone-200 hover:border-stone-300 transition-all flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-10 h-10 rounded-lg bg-white border border-stone-200 text-[#101B35] flex items-center justify-center mb-5">
                  <Recycle className="w-5 h-5 text-[#101B35]" />
                </div>
                <div className="flex items-center justify-between text-xs font-mono text-stone-400 mb-2">
                  <span>TARGET HORIZON: 2030</span>
                  <span className="text-[#101B35] font-bold">SDG 12</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#101B35]">
                  Zero-Waste Industrial Ambition
                </h3>
                <p className="mt-3 text-sm text-stone-600 leading-relaxed font-sans">
                  Establishing closed-loop circular economy practices across manufacturing, automotive restoration, and agricultural processing. Aiming for zero industrial waste to landfill by 2030 through systematic reuse, water recycling, and organic composting.
                </p>

                <div className="mt-5 p-3.5 rounded-xl bg-white border border-stone-200 space-y-1.5 font-sans">
                  <div className="flex items-center gap-2 text-xs text-[#101B35]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Automotive metal &amp; solvent closed-loop recovery</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#101B35]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Agro-processing biomass organic repurposing</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3.5 border-t border-stone-200/60 text-[10px] font-mono text-stone-400 uppercase">
                Circular Economy Roadmap
              </div>
            </div>

            {/* Pillar 3: Community Development */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F8F7F3] border border-stone-200 hover:border-stone-300 transition-all flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-10 h-10 rounded-lg bg-white border border-stone-200 text-[#101B35] flex items-center justify-center mb-5">
                  <Users className="w-5 h-5 text-[#FF8A00]" />
                </div>
                <div className="flex items-center justify-between text-xs font-mono text-stone-400 mb-2">
                  <span>ONGOING PROGRAMME</span>
                  <span className="text-[#FF8A00] font-bold">SDG 4 &amp; 8</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#101B35]">
                  Community Upliftment &amp; Human Capital
                </h3>
                <p className="mt-3 text-sm text-stone-600 leading-relaxed font-sans">
                  Delivering direct community empowerment in our operating regions through three core vectors: STEM education sponsorships, community healthcare clinic assistance, and accredited technical vocational apprenticeships.
                </p>

                <div className="mt-5 p-3.5 rounded-xl bg-white border border-stone-200 space-y-1.5 font-sans">
                  <div className="flex items-center gap-2 text-xs text-[#101B35]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Automotive &amp; construction artisan apprenticeships</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#101B35]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Rural primary clinic healthcare support</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3.5 border-t border-stone-200/60 text-[10px] font-mono text-stone-400 uppercase">
                Tri-Pillar Community Programme
              </div>
            </div>

            {/* Pillar 4: Annual Sustainability Reporting */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F8F7F3] border border-stone-200 hover:border-stone-300 transition-all flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-10 h-10 rounded-lg bg-white border border-stone-200 text-[#101B35] flex items-center justify-center mb-5">
                  <FileText className="w-5 h-5 text-[#101B35]" />
                </div>
                <div className="flex items-center justify-between text-xs font-mono text-stone-400 mb-2">
                  <span>REPORTING CYCLE: ANNUAL</span>
                  <span className="text-[#101B35] font-bold">SDG 16</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#101B35]">
                  Annual Sustainability Transparency
                </h3>
                <p className="mt-3 text-sm text-stone-600 leading-relaxed font-sans">
                  Publishing an annual group sustainability report for full public accountability, detailing emissions intensity, gender diversity metrics, occupational health incident statistics, and local procurement spend.
                </p>

                <div className="mt-5 p-3.5 rounded-xl bg-white border border-stone-200 space-y-1.5 font-sans">
                  <div className="flex items-center gap-2 text-xs text-[#101B35]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Independent ESG reporting disclosures</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#101B35]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Board Audit &amp; Risk Committee verification</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3.5 border-t border-stone-200/60 text-[10px] font-mono text-stone-400 uppercase">
                Full Regulatory Disclosure
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Biofuels & Clean Energy R&D */}
      <section className="py-16 sm:py-20 bg-[#F8F7F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-2xl bg-white border border-stone-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="space-y-2 max-w-2xl font-sans">
              <span className="text-[11px] uppercase tracking-wider text-[#FF8A00] font-bold">
                CROSS-SECTOR R&amp;D COLLABORATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#101B35]">
                Biofuel &amp; Sustainable Agro-Energy
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Arise Hope Group's Agriculture and Energy divisions foster joint research on converting non-food biomass feedstocks into sustainable biofuels, lowering fossil fuel reliance across our regional transport network.
              </p>
            </div>

            <button
              onClick={() => navigate('/contact')}
              className="px-6 py-3.5 rounded-lg bg-[#101B35] hover:bg-[#1B2C56] text-white font-semibold text-xs uppercase tracking-wider shadow-sm transition-all shrink-0 active:scale-95"
            >
              Enquire on ESG Partnerships
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
