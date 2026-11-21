import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { GOVERNANCE_FRAMEWORK, COMPANY_INFO } from '../data/companyData';
import { PageHeader } from '../components/common/PageHeader';
import { Scale, CheckCircle2, ArrowRight } from 'lucide-react';

export const GovernancePage: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="min-h-screen bg-[#F8F7F3]">
      <PageHeader
        badge="Corporate Governance"
        title="Disciplined Oversight. Uncompromising Ethics."
        subtitle="A robust corporate governance framework featuring an independent board chaired by the founder, structured board committees, and clear lines of accountability across our nine operating subsidiaries."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Corporate Governance' }
        ]}
      />

      {/* Board Oversight Narrative */}
      <section className="py-16 sm:py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="text-[11px] font-sans uppercase tracking-wider text-[#FF8A00] font-bold">
                BOARD OF DIRECTORS
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#101B35] leading-tight">
                Independent Board Governance Chaired by the Founder.
              </h2>
              <p className="text-base text-stone-700 leading-relaxed font-sans">
                {GOVERNANCE_FRAMEWORK.boardDescription}
              </p>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-sans">
                By maintaining clear separation between long-term strategic stewardship and daily subsidiary operational execution, the Board ensures robust capital protection, risk mitigation, and ethical stakeholder relations.
              </p>

              <div className="p-4 sm:p-5 rounded-xl bg-[#F8F7F3] border border-stone-200 space-y-1 font-sans">
                <span className="text-xs uppercase tracking-wider text-[#101B35] font-bold">
                  Governance Integrity Standard:
                </span>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Per group policy, executive appointments adhere to strict fiduciary charters and statutory South African corporate governance standards (King IV compliance principles).
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#F8F7F3] border border-stone-200 shadow-xs space-y-4">
              <div className="w-10 h-10 rounded-lg bg-white border border-stone-200 text-[#101B35] flex items-center justify-center">
                <Scale className="w-5 h-5 text-[#FF8A00]" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[#101B35]">Governance Mandate</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                The Board oversees major capital appropriations, M&amp;A transactions, cross-border joint ventures, and enterprise risk thresholds across all subsidiaries.
              </p>
              <div className="pt-3 border-t border-stone-200/60 space-y-2 text-xs font-sans">
                <div className="flex items-center gap-2 text-[#101B35]">
                  <CheckCircle2 className="w-4 h-4 text-[#FF8A00]" />
                  <span>Independent Board of Directors</span>
                </div>
                <div className="flex items-center gap-2 text-[#101B35]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Founder-Chaired Strategic Vision</span>
                </div>
                <div className="flex items-center gap-2 text-[#101B35]">
                  <CheckCircle2 className="w-4 h-4 text-[#101B35]" />
                  <span>Statutory Board Sub-Committees</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Board Committees */}
      <section className="py-16 sm:py-20 bg-[#F8F7F3] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-[11px] font-sans uppercase tracking-wider text-[#FF8A00] font-bold">
              BOARD SUB-COMMITTEES
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#101B35] mt-1.5">
              Structured Committee Oversight.
            </h2>
            <p className="mt-2.5 text-stone-600 text-sm sm:text-base font-sans">
              Independent committees ensure rigorous risk assessment, financial integrity, and performance-linked compensation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {GOVERNANCE_FRAMEWORK.committees.map((comm, idx) => (
              <div 
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-stone-100 text-[#101B35] flex items-center justify-center font-mono font-bold text-xs mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#101B35]">{comm.name}</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mt-2 font-sans">{comm.mandate}</p>
                </div>

                <div className="pt-4 border-t border-stone-100 text-[10px] font-mono text-stone-400 uppercase">
                  Reports Directly to the Board
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Executive Leadership Architecture */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-[11px] font-sans uppercase tracking-wider text-[#FF8A00] font-bold">
              EXECUTIVE MANAGEMENT
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#101B35] mt-1.5">
              Executive Leadership Roles.
            </h2>
            <p className="mt-2.5 text-stone-600 text-sm sm:text-base font-sans">
              Clear reporting lines and dedicated executive portfolios driving strategic cohesion, financial discipline, and continuous innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GOVERNANCE_FRAMEWORK.executiveLeadershipRoles.map((role, idx) => (
              <div key={idx} className="p-5 sm:p-6 rounded-xl bg-[#F8F7F3] border border-stone-200 shadow-xs space-y-2">
                <div className="w-8 h-8 rounded-lg bg-white border border-stone-200 text-[#101B35] flex items-center justify-center font-mono font-bold text-xs">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-serif font-bold text-[#101B35]">{role.title}</h3>
                <p className="text-xs text-stone-600 leading-relaxed font-sans">{role.focus}</p>
                <div className="pt-2 border-t border-stone-200/60 text-[10px] font-mono text-stone-400 uppercase">
                  Executive Mandate
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#101B35] hover:bg-[#1B2C56] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-sm active:scale-95"
            >
              <span>Corporate Governance &amp; Compliance Enquiries</span>
              <ArrowRight className="w-4 h-4 text-[#FF8A00]" />
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};
