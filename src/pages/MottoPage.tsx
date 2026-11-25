import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { PageHeader } from '../components/common/PageHeader';
import { MOTTO } from '../data/companyData';
import { ArrowRight, ArrowUpRight, Mountain, Lightbulb, Users } from 'lucide-react';

const ICONS = [Mountain, Lightbulb, Users];

export const MottoPage: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="min-h-screen bg-[#F8F7F3]">
      <PageHeader
        badge="Our Motto"
        title={MOTTO.full}
        subtitle="The belief that drives every Arise Hope Group business: rise above limits, inspire lasting change, and move forward together."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Our Motto' }]}
      />

      {/* Motto statement */}
      <section className="py-16 sm:py-24 bg-white border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[11px] font-sans uppercase tracking-wider text-[#FF8A00] font-bold">
            Arise Hope Group Motto
          </span>
          <div className="mt-6 space-y-3 sm:space-y-4">
            {MOTTO.parts.map((p, i) => (
              <div
                key={p.title}
                className={`text-3xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight ${
                  i === 2 ? 'italic font-normal text-[#FF8A00]' : 'text-[#101B35]'
                }`}
              >
                {p.title}{i < 2 ? ',' : '.'}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meaning of each line */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#101B35]">What Our Motto Means</h2>
            <p className="mt-3 text-sm sm:text-base text-stone-600 font-sans leading-relaxed">
              Each line reflects how we build businesses, connect markets and create opportunities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {MOTTO.parts.map((p, i) => {
              const Icon = ICONS[i];
              return (
                <div key={p.title} className="p-7 rounded-2xl bg-white border border-stone-200 shadow-sm">
                  <div className="w-11 h-11 rounded-xl bg-[#F1F2F4] text-[#101B35] flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-[#FF8A00]" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#101B35]">{p.title}</h3>
                  <p className="mt-3 text-sm text-stone-600 font-sans leading-relaxed">{p.meaning}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#101B35] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold">Join the Movement</h3>
          <p className="mt-3 text-sm sm:text-base text-stone-300">
            Partner with Arise Hope Group in trade, logistics, investment and enterprise development.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="px-7 py-3.5 rounded-xl bg-[#FF8A00] hover:bg-[#FF9B20] text-[#101B35] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 active:scale-95"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate('/businesses')}
              className="px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 active:scale-95"
            >
              <span>Our Businesses</span>
              <ArrowUpRight className="w-4 h-4 text-[#FF8A00]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
